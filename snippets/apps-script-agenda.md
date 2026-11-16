# Apps Script: la hora elegida en la web → videollamada en Google Calendar

El selector de día y hora (`src/components/ElegirHora.astro`) manda cada reserva a este script, que crea la cita con su enlace de Google Meet e invita al lead (Google le envía el email de invitación con su `.ics`). La cita agendada es la videollamada de ventas; el WhatsApp que se pide antes es para el triaje por teléfono. Vive en una cuenta de Google de David, no en este repo: aquí solo se guarda la copia del código.

**Va en una cuenta `@gmail.com`, no en la del dominio.** Una cuenta de Google personal creada con el email del dominio no puede firmar sus envíos como `davidvarea.com` (eso es solo de Workspace), y el DMARC del dominio (`p=quarantine`) manda esas invitaciones a spam. Desde Gmail salen firmadas y llegan a la bandeja de entrada. Para que David la vea en su calendario de siempre, el script lo añade como invitado (`COPIA_PARA`); el Meet es de la cuenta de Gmail y David entra como invitado con la del dominio. Si algún día pasa a Workspace con DKIM activo, el script puede volver a la cuenta del dominio y sobra `COPIA_PARA`.

## Publicarlo (una vez)

1. Entrar en <https://script.google.com> con la cuenta de Gmail → **Nuevo proyecto** (hoy se llama «Agenda web»).
2. Borrar lo que trae y pegar el código de abajo, con la dirección de David del dominio en `COPIA_PARA`.
3. En **Servicios → +**, añadir **Google Calendar API** (identificador `Calendar`). El enlace de Meet solo lo crea este servicio avanzado; con `CalendarApp` la cita sale sin videollamada.
4. Rueda dentada (**Configuración del proyecto**) → comprobar que la zona horaria es **Madrid**.
5. **Implementar → Nueva implementación → Aplicación web**. «Ejecutar como»: **Yo**. «Quién tiene acceso»: **Cualquier usuario**.
6. Aceptar los permisos que pide (calendario).
7. Copiar la **URL de la aplicación web** (acaba en `/exec`) y pegarla en la constante `CALENDARIO_URL` de `ElegirHora.astro`.

Si se cambia el código más adelante, hay que publicar una **nueva versión** de la implementación (Implementar → Gestionar implementaciones → editar → versión nueva); la URL se mantiene.

## Código

```js
const DURACION_MIN = 30;
const ZONA = 'Europe/Madrid';
// La cita se crea en el calendario de esta cuenta y David la recibe como
// invitado en su cuenta principal, para verla en su calendario de siempre.
const COPIA_PARA = 'DIRECCION-DE-DAVID-EN-SU-DOMINIO';

function doPost(e) {
  const p = e.parameter;
  const [anio, mes, dia] = String(p.fecha).split('-').map(Number);
  const [hora, minuto] = String(p.hora).split(':').map(Number);
  const inicio = new Date(anio, mes - 1, dia, hora, minuto);
  if (isNaN(inicio.getTime())) return ContentService.createTextOutput('fecha no válida');
  const fin = new Date(inicio.getTime() + DURACION_MIN * 60000);
  const iso = (d) => Utilities.formatDate(d, ZONA, "yyyy-MM-dd'T'HH:mm:ss");

  // El título lo leen los dos: el lead en su invitación y David en su calendario.
  const titulo = '1a1 David Varea · ' + (p.nombre || p.email || 'lead de la web');
  const descripcion = [
    'Nombre: ' + (p.nombre || ''),
    'WhatsApp: ' + (p.telefono || ''),
    'Email: ' + (p.email || ''),
  ].join('\n');

  // Servicio avanzado de Calendar (no CalendarApp): es el único que crea el
  // enlace de Google Meet junto con la cita.
  const crear = (invitados) => Calendar.Events.insert({
    summary: titulo,
    description: descripcion,
    start: { dateTime: iso(inicio), timeZone: ZONA },
    end: { dateTime: iso(fin), timeZone: ZONA },
    attendees: invitados.map((email) => ({ email })),
    conferenceData: {
      createRequest: {
        requestId: Utilities.getUuid(),
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
  }, 'primary', { conferenceDataVersion: 1, sendUpdates: 'all' });

  // Con un email mal escrito la invitación falla: la cita se crea igual, solo con David.
  try {
    crear([p.email, COPIA_PARA].filter(Boolean));
  } catch (_) {
    crear([COPIA_PARA]);
  }
  return ContentService.createTextOutput('ok');
}
```

## Límites conocidos

- No comprueba huecos a propósito: dos leads pueden elegir la misma hora y David mueve una a mano.
- La URL es pública: cualquiera que la conozca puede crear citas. Si aparece basura en el calendario, se archiva la implementación y se publica otra (URL nueva en `CALENDARIO_URL`).
