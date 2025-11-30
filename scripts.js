
//formulario
function insertForm() {
  const cont = document.getElementById("form");

  cont.innerHTML = `
    <style type="text/css">
                    @import url("https://assets.mlcdn.com/fonts.css?version=1750852");
                  </style>
                  <style type="text/css">
                    /* LOADER */
                    .ml-form-embedSubmitLoad {
                      display: inline-block;
                      width: 20px;
                      height: 20px;
                    }

                    .g-recaptcha {
                      transform: scale(1);
                      -webkit-transform: scale(1);
                      transform-origin: 0 0;
                      -webkit-transform-origin: 0 0;
                      height: 0;
                    }

                    .sr-only {
                      position: absolute;
                      width: 1px;
                      height: 1px;
                      padding: 0;
                      margin: -1px;
                      overflow: hidden;
                      clip: rect(0, 0, 0, 0);
                      border: 0;
                    }

                    .ml-form-embedSubmitLoad:after {
                      content: " ";
                      display: block;
                      width: 11px;
                      height: 11px;
                      margin: 1px;
                      border-radius: 50%;
                      border: 4px solid #fff;
                      border-color: #ffffff #ffffff #ffffff transparent;
                      animation: ml-form-embedSubmitLoad 1.2s linear infinite;
                    }

                    @keyframes ml-form-embedSubmitLoad {
                      0% {
                        transform: rotate(0deg);
                      }

                      100% {
                        transform: rotate(360deg);
                      }
                    }

                    #mlb2-27786331.ml-form-embedContainer {
                      box-sizing: border-box;
                      display: table;
                      margin: 0 auto;
                      position: static;
                      width: 100% !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer h4,
                    #mlb2-27786331.ml-form-embedContainer p,
                    #mlb2-27786331.ml-form-embedContainer span,
                    #mlb2-27786331.ml-form-embedContainer button {
                      text-transform: none !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper {
                      background-color: transparent;

                      border-width: 0px;
                      border-color: transparent;
                      border-radius: 14px;
                      border-style: solid;
                      box-sizing: border-box;
                      display: inline-block !important;
                      margin: 0;
                      padding: 0;
                      position: relative;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper.embedDefault {
                      width: 100%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
                      max-width: 100%;
                      width: 100%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-align-left {
                      text-align: left;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-align-center {
                      text-align: center;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-align-default {
                      display: table-cell !important;
                      vertical-align: middle !important;
                      text-align: center !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-align-right {
                      text-align: right;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img {
                      border-top-left-radius: 14px;
                      border-top-right-radius: 14px;
                      height: auto;
                      margin: 0 auto !important;
                      max-width: 100%;
                      width: undefinedpx;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
                      padding: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
                      text-align: left;
                      margin: 0 0 20px 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 30px;
                      font-weight: 400;
                      margin: 0 0 10px 0;
                      text-align: left;
                      word-break: break-word;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 14px;
                      font-weight: 400;
                      line-height: 20px;
                      margin: 0 0 10px 0;
                      text-align: left;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 14px;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol {
                      list-style-type: lower-alpha;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol {
                      list-style-type: lower-roman;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a {
                      color: #000000;
                      text-decoration: underline;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
                      text-align: left !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
                      margin-bottom: 5px;
                      color: #252422;
                      font-size: 18px;
                      font-family: "Courier New", Courier, monospace;
                      font-weight: bold;
                      font-style: normal;
                      text-decoration: none;
                      display: inline-block;
                      line-height: 22px;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child {
                      margin: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
                      margin: 0;
                      width: 100%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
                      margin: 0 0 20px 0;
                      width: 100%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
                      float: left;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
                      margin: 0;
                      padding: 0 0 20px 0;
                      width: 100%;
                      height: auto;
                      float: left;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
                      margin: 0 0 10px 0;
                      width: 100%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
                      margin: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal {
                      margin: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
                      background-color: #ffffff !important;
                      color: #a6a6a6 !important;
                      border-color: #252422;
                      border-radius: 10px !important;
                      border-style: solid !important;
                      border-width: 2px !important;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 1rem !important;
                      height: auto;
                      line-height: 21px !important;
                      width: 60% !important;
                      margin: 0 auto !important;
                      display: block !important;
                      padding: .9rem 1rem !important;
                      box-sizing: border-box !important;
                      box-shadow: inset 1px 1px 3px rgba(0,0,0,0.3),
                                  0px 0px 4px rgba(0,0,0,0.1) !important; 
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder {
                      color: #a6a6a6;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder {
                      color: #a6a6a6;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder {
                      color: #a6a6a6;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder {
                      color: #a6a6a6;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea {
                      background-color: #ffffff !important;
                      color: #a6a6a6 !important;
                      border-color: #252422;
                      border-radius: 25px !important;
                      border-style: solid !important;
                      border-width: 1px !important;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 14px !important;
                      height: auto;
                      line-height: 21px !important;
                      margin-bottom: 0;
                      margin-top: 0;
                      width: 100% !important;
                      box-sizing: border-box !important;
                      max-width: 100% !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
                      color: #252422 !important;
                    }


                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                      border-color: #252422 !important;
                      background-color: #ffffff !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type="checkbox"] {
                      box-sizing: border-box;
                      padding: 0;
                      position: absolute;
                      z-index: -1;
                      opacity: 0;
                      margin-top: 5px;
                      margin-left: -1.5rem;
                      overflow: visible;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                      border-radius: 4px !important;
                    }


                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after {
                      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after {
                      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before {
                      border-color: #000000 !important;
                      background-color: #000000 !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after {
                      top: 2px;
                      box-sizing: border-box;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                      top: 0px !important;
                      box-sizing: border-box !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                      top: 0px !important;
                      box-sizing: border-box !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after {
                      top: 0px !important;
                      box-sizing: border-box !important;
                      position: absolute;
                      left: -1.5rem;
                      display: block;
                      width: 1rem;
                      height: 1rem;
                      content: "";
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before {
                      top: 0px !important;
                      box-sizing: border-box !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before {
                      position: absolute;
                      top: 4px;
                      left: -1.5rem;
                      display: block;
                      width: 16px;
                      height: 16px;
                      pointer-events: none;
                      content: "";
                      background-color: #ffffff;
                      border: #adb5bd solid 1px;
                      border-radius: 50%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after {
                      position: absolute;
                      top: 2px !important;
                      left: -1.5rem;
                      display: block;
                      width: 1rem;
                      height: 1rem;
                      content: "";
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                      position: absolute;
                      top: 4px;
                      left: -1.5rem;
                      display: block;
                      width: 16px;
                      height: 16px;
                      pointer-events: none;
                      content: "";
                      background-color: #ffffff;
                      border: #adb5bd solid 1px;
                      border-radius: 50%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after {
                      position: absolute;
                      top: 0px !important;
                      left: -1.5rem;
                      display: block;
                      width: 1rem;
                      height: 1rem;
                      content: "";
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                      position: absolute;
                      top: 0px !important;
                      left: -1.5rem;
                      display: block;
                      width: 1rem;
                      height: 1rem;
                      content: "";
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after {
                      background: no-repeat 50%/50% 50%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                      background: no-repeat 50%/50% 50%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control {
                      position: relative;
                      display: block;
                      min-height: 1.5rem;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input {
                      position: absolute;
                      z-index: -1;
                      opacity: 0;
                      box-sizing: border-box;
                      padding: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label {
                      color: #000000;
                      font-size: 12px !important;
                      font-family: "Courier New", Courier, monospace;
                      line-height: 22px;
                      margin-bottom: 0;
                      position: relative;
                      vertical-align: top;
                      font-style: normal;
                      font-weight: 700;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select {
                      background-color: #ffffff !important;
                      color: #a6a6a6 !important;
                      border-color: #252422;
                      border-radius: 25px !important;
                      border-style: solid !important;
                      border-width: 1px !important;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 14px !important;
                      line-height: 20px !important;
                      margin-bottom: 0;
                      margin-top: 0;
                      width: 100% !important;
                      box-sizing: border-box !important;
                      max-width: 100% !important;
                      height: auto;
                      display: inline-block;
                      vertical-align: middle;
                      background: url('https://assets.mlcdn.com/ml/images/default/dropdown.svg') no-repeat right .75rem center/8px 10px;
                      -webkit-appearance: none;
                      -moz-appearance: none;
                      appearance: none;
                    }


                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
                      height: auto;
                      width: 100%;
                      float: left;
                    }

                    .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal {
                      width: 70%;
                      float: left;
                    }

                    .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal {
                      width: 30%;
                      float: left;
                    }

                    .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn {
                      padding-top: 27px;
                    }

                    .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields {
                      box-sizing: border-box;
                      float: left;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
                      background-color: #ffffff;
                      color: #a6a6a6;
                      border-color: #252422;
                      border-radius: 25px;
                      border-style: solid;
                      border-width: 1px;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 14px;
                      line-height: 20px;
                      margin-bottom: 0;
                      margin-top: 0;
                      width: 100%;
                      box-sizing: border-box;
                      overflow-y: initial;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button {
                      color: #151515 !important;
                      /* background: linear-gradient(to left, #FF4FDD, #14E1FE); 
                      border-color: #14E1FE;
                      border-style: solid;
                      border-width: 1px;
                      border-radius: 25px;
                      box-shadow: none;
                      color: #ffffff !important;
                      cursor: pointer;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 20px !important;
                      font-weight: 700;
                      line-height: 20px;
                      margin: 0 !important;
                      padding: 10px !important;
                      width: 100%;
                      height: auto;
                      color: #fff;
                      font-size: 1.2rem;
                      font-weight: bold;
                      padding: 0.8rem 1.8rem;
                      border: none;
                      border-radius: 8px;
                      cursor: pointer;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                      transition: transform 0.2s ease, box-shadow 0.2s ease;
                      margin-top: 1rem;
                      margin-bottom: 2em;
                      background: linear-gradient(270deg, #FF4FDD, #b202f8, #FF4FDD);
                      background-size: 200% 200%;
                      box-shadow: 
                        inset 2px 2px 6px rgba(255,255,255,0.3),  brillo interior arriba
                        inset -2px -2px 6px rgba(0,0,0,0.4),      sombra interior abajo
                        0 6px 18px rgba(0,0,0,0.5);               sombra exterior
                      transition: background-position 0.3s ease;*/
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover {
                  background-color: rgba(30,102,255,.15) !important;
                  text-decoration: none;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type="checkbox"] {
                      box-sizing: border-box;
                      padding: 0;
                      position: absolute;
                      z-index: -1;
                      opacity: 0;
                      margin-top: 5px;
                      margin-left: -1.5rem;
                      overflow: visible;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description {
                      color: #252422;
                      display: block;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 12px;
                      text-align: left;
                      margin-bottom: 0;
                      position: relative;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {
                      font-weight: normal;
                      margin: 0;
                      padding: 0;
                      position: relative;
                      display: block;
                      min-height: 24px;

                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a {
                      color: #252422;
                      text-decoration: underline;
                    }
                    
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p {
                      color: #252422 !important;
                      font-family: "Courier New", Courier, monospace !important;
                      font-size: 12px !important;
                      font-weight: normal !important;
                      line-height: 18px !important;
                      padding: 0 !important;
                      margin: 0 5px 0 0 !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child {
                      margin: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
                      margin: 0 0 20px 0;
                      float: left;
                      width: 100%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
                      
                        background: transparent;                        
                       
                        border: 2px solid #252422;
                        border-radius: 10px;
                        box-shadow: 4px 4px 0 #252422;
                        color: #252422;
                        padding: .4rem 2rem;
                        max-width: 35vw;
                        font-family: "Courier New", Courier, monospace;
                        font-weight: 500;
                        font-size: 1.2rem;
                        cursor: pointer;
                    }


                     #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
                      display: none;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
                      transform: translateY(4px) translateX(4px);
                      box-shadow: 0 0 0 #252422;
                    }

                    @media (max-width: 800px){
                      #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
                        font-size: 1rem !important;
                        font-weight: 500 !important;
                      }

                      #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p {
                        padding: 0 1em;
                      }

                      #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{
                        font-size: .9rem !important;
                      }

                      #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{
                        width: 85% !important;
                      }
                      
                    }

                    .ml-subscribe-close {
                      width: 30px;
                      height: 30px;
                      background: url('https://assets.mlcdn.com/ml/images/default/modal_close.png') no-repeat;
                      background-size: 30px;
                      cursor: pointer;
                      margin-top: -10px;
                      margin-right: -10px;
                      position: absolute;
                      top: 0;
                      right: 0;
                    }

                    .ml-error input,
                    .ml-error textarea,
                    .ml-error select {
                      border-color: red !important;
                    }

                    .ml-error .custom-checkbox-radio-list {
                      border: 1px solid red !important;
                      border-radius: 14px;
                      padding: 10px;
                    }

                    .ml-error .label-description,
                    .ml-error .label-description p,
                    .ml-error .label-description p a,
                    .ml-error label:first-child {
                      color: #F40600 !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter {
                      color: #F40600 !important;
                    }

                    @media only screen and (max-width: 540px) {

                      .ml-form-embedWrapper.embedDefault,
                      .ml-form-embedWrapper.embedPopup {
                        width: 100% !important;
                      }

                      .ml-form-formContent.horozintalForm {
                        float: left !important;
                      }

                      .ml-form-formContent.horozintalForm .ml-form-horizontalRow {
                        height: auto !important;
                        width: 100% !important;
                        float: left !important;
                      }

                      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal {
                        width: 100% !important;
                      }

                      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div {
                        padding-right: 0px !important;
                        padding-bottom: 10px;
                      }

                      .ml-form-formContent.horozintalForm .ml-button-horizontal {
                        width: 100% !important;
                      }

                      .ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn {
                        padding-top: 0px !important;
                      }

                    }
                  </style>

                  <style type="text/css">
                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions {
                      text-align: left;
                      float: left;
                      width: 100%;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent {
                      margin: 5px 0;
                      text-align: left;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.horizontal {
                      margin: 0 0 15px 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent h4 {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 6px;
                      font-weight: 700;
                      line-height: 1;
                      margin: 5px 0;
                      word-break: break-word;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 1rem;
                      line-height: 1;
                      margin: 5px 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p {
                      color: #a6a6a6;
                      font-family: "Courier New", Courier, monospace;
                      font-size: .7rem;
                      line-height: 1;
                      text-align: center;
                      margin: 30px auto !important;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p a {
                      color: #a6a6a6;
                    }                    

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p:last-child {
                      margin: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a {
                      color: #000000;
                      text-decoration: underline;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p:last-child {
                      margin: 0 0 15px 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptions {
                      margin: 0;
                      padding: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox {
                      margin: 0 0 10px 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox:last-child {
                      margin: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox label {
                      font-weight: normal;
                      margin: 0;
                      padding: 0;
                      position: relative;
                      display: block;
                      min-height: 24px;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 12px;
                      line-height: 18px;
                      text-align: left;
                      margin-bottom: 0;
                      position: relative;
                      vertical-align: top;
                      font-style: normal;
                      font-weight: 700;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .description {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 12px;
                      font-style: italic;
                      font-weight: 400;
                      line-height: 18px;
                      margin: 5px 0 0 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type="checkbox"] {
                      box-sizing: border-box;
                      padding: 0;
                      position: absolute;
                      z-index: -1;
                      opacity: 0;
                      margin-top: 5px;
                      margin-left: -1.5rem;
                      overflow: visible;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR {
                      padding-bottom: 20px;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {
                      color: #000000;
                      font-family: "Courier New", Courier, monospace;
                      font-size: 0.6rem;
                      margin: 0;
                      padding: 0;
                    }

                    #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p a {
                      color: #000000;
                      text-decoration: underline;

                    }

                    @media (max-width: 768px) {
                      #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {
                        font-size: .75rem !important;
                        padding-left: 3rem; padding-right: 3rem;
                      }

                      #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {
                        font-size: .75rem !important;
                        padding-left: 3rem; padding-right: 3rem;
                      }
                    }
                  </style>


                  <div id="mlb2-27786331" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-27786331">
                    <div class="ml-form-align-center ">
                      <div class="ml-form-embedWrapper embedForm">




                        <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">

                          <div class="ml-form-embedContent" style="margin-bottom: 0px; ">

                          </div>

                          <form class="ml-block-form"
                            action="https://assets.mailerlite.com/jsonp/1628594/forms/158544190416881022/subscribe" data-code=""
                            method="post" target="_blank">
                            <div class="ml-form-formContent">



                              <div class="ml-form-fieldRow ml-last-item">
                                <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">




                                  <!-- input #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input-->
                                  <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask=""
                                    name="fields[email]" placeholder="✉️ tucorreo@email.com" autocomplete="email">
                                  <!-- /input -->

                                  <!-- textarea -->

                                  <!-- /textarea -->

                                  <!-- select -->

                                  <!-- /select -->

                                  <!-- checkboxes -->

                                  <!-- /checkboxes -->

                                  <!-- radio -->

                                  <!-- /radio -->

                                  <!-- countries -->

                                  <!-- /countries -->





                                </div>
                              </div>

                            </div>


                            <input type="hidden" name="ml-submit" value="1">

                            <div class="ml-form-embedSubmit">

                              
                              <button type="submit" class="primary" style="margin-top: 5px;">-></button><!--#mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button-->

                              <button disabled="disabled" style="display: none;" type="button" class="loading">
                                <div class="ml-form-embedSubmitLoad"></div>
                                <span class="sr-only">🕒 Loading...</span>
                              </button>
                            </div>


                            <input type="hidden" name="anticsrf" value="true">

                            <!-- Privacy policy -->
                            <div class="ml-form-embedPermissions">
                              <div class="ml-form-embedPermissionsContent default privacy-policy" style="margin: 0;">




                              <p> <!-- #mlb2-27786331.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p -->
                                Puedes leer las burocráticas políticas de privacidad <a href="/privacidad" target="_blank" style="color: #a6a6a6;">aquí</a>
                              </p>



                              </div>
                            </div>
                            <!-- /Privacy policy -->


                          </form>
                        </div>

                        <div class="ml-form-successBody row-success" style="display: none">

                          <div class="ml-form-successContent">

                            <p>You have successfully joined our subscriber list.</p>


                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <script>
                    function ml_webform_success_27786331() {
                    try {
                        window.top.location.href = 'https://dekawho.com/not-done';
                      } catch (e) {
                        window.location.href = 'https://dekawho.com/not-done';
                      }
                    }
                  </script>
                
                
                
                  <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" type="text/javascript"></script>
                  <script>
                          fetch("https://assets.mailerlite.com/jsonp/1628594/forms/158544190416881022/takel")
                  </script>
  `;
}



const cursor = document.getElementById("cursor");

/* Versión simple sin aceptar salto de línea*/
/* function typeWriter(element, text, speed = 50) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }
    // Vaciar el elemento y preparar un nodo de texto
    element.textContent = "";
    const textNode = document.createTextNode("");
    element.appendChild(textNode);
    // Mover el cursor dentro del elemento, justo después del texto
    element.appendChild(cursor);
    let i = 0;
    function write() {
      if (i < text.length) {
        // Añadimos texto al nodo de texto, el cursor se mantiene detrás
        textNode.data += text.charAt(i);
        // Autoscroll
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
        i++;
        setTimeout(write, speed);
      } else {
        resolve();
      }
    }
    write();
  });
} */

function typeWriter(element, text, speed = 50) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }
    element.innerHTML = "";
    element.appendChild(cursor);
    let content = "";
    let i = 0;

    function write() {
      if (i < text.length) {
        if (text.charAt(i) === '<') {
          const closeIndex = text.indexOf('>', i);
          if (closeIndex !== -1) {
            content += text.substring(i, closeIndex + 1);
            i = closeIndex + 1;
          }
        } else {
          content += text.charAt(i);
          i++;
        }
        element.innerHTML = content;
        element.appendChild(cursor);
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
        setTimeout(write, speed);
      } else {
        resolve();
      }
    }

    write();
  });
}


async function startTypewriter() {
  const t1 = document.querySelector(".t1");
  const p1 = document.querySelector(".p1");
  const p2 = document.querySelector(".p2");
  const p3 = document.querySelector(".p3");
  const p4 = document.querySelector(".p4");
  const p5 = document.querySelector(".p5");
  const p6 = document.querySelector(".p6");
  const p7 = document.querySelector(".p7");
  const p8 = document.querySelector(".p8");

  await typeWriter(t1, "[no_publicar]", 150);
  await typeWriter(p1, "¿Alguna vez has escuchado a alguien y pensado \"Menuda barbaridad acaba de soltar\"? Tú lo ves obvio, le han comido la cabeza. Repite el discurso de otra persona. Pobre...", 70);
  await typeWriter(p2, "¿Y si él piensa lo mismo de ti? ¿Y si los dos tenéis razón? No en lo que pensáis, sino en cómo llegasteis a pensarlo. \"Una mentira repetida mil veces se convierte en verdad\" ¿Te suena?", 60);
  await typeWriter(p3, "No hablo de conspiraciones. No hay un grupo de señores gordos y forrados en una sala oscura decidiendo qué va a ser de tu vida. Es peor que eso.", 50);
  await typeWriter(p4, "¿Crees que un título universitario te hace más válido?<br><br>¿Crees que todos los ricos son malas personas?<br><br>¿Crees que hipotecarte te da estabilidad?<br><br>¿Crees que ser funcionario es tener la vida resuelta?<br><br>¿Crees que está mal querer más de lo que tienes?<br><br>No juzgo tus respuestas, pregunto si alguna vez llegaste a esas conclusiones por tu propia cuenta.", 50);
  await typeWriter(p5, "Imagina que plantas un árbol en una maceta pequeña. El árbol crece pero las raíces no tienen donde ir. Se enroscan sobre sí mismas, se asfixian. El árbol sobrevive pero limitado por la maceta.", 50);
  await typeWriter(p6, "¿Cómo rompes la maceta? Yo no tengo todas las respuestas. Aunque siempre busco las mejores preguntas. Toda la vida, desde que fui un niño preguntón dando la turra. El problema hoy en día es que los algoritmos no buscan liberarte, buscan reducir tu maceta con dopamina rápida y scroll infinito. Por eso esto no encaja en ningún feed.", 50); 
  await typeWriter(p7, "Compartir ideas con naturalidad solo es posible si hablamos de tú a tú. Lo ideal sería un medio sin tecnología siquiera, enviarte una carta en papel: Llega a tus manos un sobre oscuro (muy elegante) con una barrabaja dorada en el centro. Al abrirlo sacas un folio doblado, y lees de mi puño y letra lo que un día te escribí. Sin más intermediarios que el papel. Pero hacerlo así es inviable, claro. Lo más parecido es poder enviarte un correo.", 70);


  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay de 1s
  insertForm();

  // Si quieres que el cursor desaparezca al final:
  // cursor.style.display = "none";
}

//el DOM ya está cargado cuando se ejecuta este script por el defer
  startTypewriter();

