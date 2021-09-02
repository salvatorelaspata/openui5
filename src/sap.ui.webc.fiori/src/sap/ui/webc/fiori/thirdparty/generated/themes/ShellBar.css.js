sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theme-base/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_fiori_3", () => parametersBundle_css);
	var styles = ":host(:not([hidden])){display:inline-block;width:100%}.ui5-shellbar-root{position:relative;display:flex;justify-content:space-between;align-items:center;background:var(--sapShellColor);height:2.75rem;font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;box-sizing:border-box}.ui5-shellbar-button,.ui5-shellbar-image-button,.ui5-shellbar-menu-button,::slotted([ui5-button][slot=startButton]){height:2.25rem;padding:0;margin-left:.5rem;border:none;background:transparent;outline-color:var(--sapShell_TextColor);color:var(--sapShell_TextColor);box-sizing:border-box;cursor:pointer;border-radius:.25rem;position:relative;font-size:.75rem;font-weight:700;white-space:normal;overflow:initial;text-overflow:clip}.ui5-shellbar-button,.ui5-shellbar-menu-button,::slotted([ui5-button][slot=startButton]){outline:none}.ui5-shellbar-button:hover,.ui5-shellbar-image-button:hover,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:hover,::slotted([ui5-button][slot=startButton]:hover){background:var(--sapShell_Hover_Background)}.ui5-shellbar-button[active],.ui5-shellbar-image-button:active,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active,::slotted([ui5-button][slot=startButton][active]){background:var(--sapShell_Active_Background);color:var(--sapShell_Active_TextColor)}.ui5-shellbar-button[focused]:after,.ui5-shellbar-image-button:focus:after,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:focus:after,::slotted([ui5-button][slot=startButton][focused]):after{content:\"\";position:absolute;width:calc(100% - .375rem);height:calc(100% - .375rem);border:1px dotted var(--sapContent_ContrastFocusColor);pointer-events:none;left:2px;top:2px;z-index:1}slot[name=profile]{min-width:0}::slotted([ui5-avatar][slot=profile]){min-width:0;width:2rem;height:2rem;padding:.25rem;pointer-events:none}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive::-moz-focus-inner{border:none}.ui5-shellbar-menu-button-title{display:inline-block;font-family:\"72override\",var(--sapFontFamily);margin:0;font-size:.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:auto}:host(:not([primary-title])) .ui5-shellbar-menu-button{min-width:2.25rem;justify-content:center}:host(:not([primary-title])) .ui5-shellbar-menu-button span{margin-left:0}:host([breakpoint-size=S]) .ui5-shellbar-menu-button span{margin-left:.5rem}.ui5-shellbar-secondary-title{display:inline-block;margin:0 .5rem;font-size:var(--sapFontSmallSize);color:var(--sapShell_TextColor);line-height:1rem;font-weight:400;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui5-shellbar-menu-button--interactive .ui5-shellbar-menu-button-arrow{display:inline-block;margin-left:.375rem;width:10px;height:10px;width:0;height:0;color:var(--sapShell_InteractiveTextColor);border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--sapShell_TextColor)}.ui5-shellbar-overflow-container{display:flex;justify-content:center;align-items:center;height:100%;overflow:hidden}.ui5-shellbar-overflow-container-middle{align-self:center;height:2.5rem;width:3rem;flex-shrink:0}@keyframes Behind_layer{0%{transform:rotate(1turn)}}@keyframes Top_layer{0%{transform:rotate(-1turn)}}:host([breakpoint-size=S]) .ui5-shellbar-root{padding:.25rem 1rem}:host([breakpoint-size=S]) .ui5-shellbar-search-full-width-wrapper{padding:.25rem 1rem}:host([breakpoint-size=S]) ::slotted([ui5-button][slot=startButton]){margin-right:0}:host([breakpoint-size=M]) .ui5-shellbar-root{padding:.25rem 2rem}:host([breakpoint-size=M]) .ui5-shellbar-search-full-width-wrapper{padding:.25rem 2rem}:host([breakpoint-size=L]) .ui5-shellbar-root{padding:.25rem 2rem}:host([breakpoint-size=XL]) .ui5-shellbar-root{padding:.25rem 3rem}:host([breakpoint-size=XXL]) .ui5-shellbar-root{padding:.25rem 3rem}.ui5-shellbar-logo{cursor:pointer;max-height:2rem}.ui5-shellbar-logo:focus{outline:1px dotted var(--sapContent_ContrastFocusColor);outline-offset:var(--_ui5_shellbar_logo_outline_offset)}.ui5-shellbar-button{width:2.5rem}.ui5-shellbar-image-buttonImage{border-radius:50%;width:1.75rem;height:1.75rem;display:flex;background-size:cover}.ui5-shellbar-image-button{display:flex;justify-content:center;align-items:center;min-width:2.25rem;height:2.25rem;display:inline-flex;padding:0}.ui5-shellbar-overflow-container-left{justify-content:flex-start;margin-right:.5rem}.ui5-shellbar-with-coPilot .ui5-shellbar-overflow-container-left{flex-basis:50%;max-width:calc(50% - 1.5rem)}.ui5-shellbar-menu-button{white-space:nowrap;overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem;cursor:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}:host(:not([with-logo])) .ui5-shellbar-menu-button{margin-left:0}.ui5-shellbar-overflow-container-right{display:block;overflow:hidden;box-sizing:border-box;white-space:nowrap;flex:1}:host(:not([show-search-field])) .ui5-shellbar-overflow-container-right{margin-left:8rem}.ui5-shellbar-overflow-container-right .ui5-shellbar-overflow-container-right-child{display:flex;justify-content:flex-end}.ui5-shellbar-overflow-button{display:none}:host([breakpoint-size=M]) .ui5-shellbar-secondary-title{display:none}:host([breakpoint-size=S]) .ui5-shellbar-secondary-title{display:none}:host([breakpoint-size=S]) .ui5-shellbar-logo+.ui5-shellbar-menu-button-title,:host([breakpoint-size=S]) .ui5-shellbar-menu-button+.ui5-shellbar-menu-button-title{display:none}:host([breakpoint-size=S]) .ui5-shellbar-overflow-container-right{margin-left:0}.ui5-shellbar-overflow-button-shown{display:inline-block}.ui5-shellbar-hidden-button,.ui5-shellbar-invisible-button{visibility:hidden}.ui5-shellbar-coPilot{background-color:transparent;cursor:pointer}:host([breakpoint-size=L]) .ui5-shellbar-with-searchfield .ui5-shellbar-overflow-container-right{margin-left:1rem}:host([breakpoint-size=XL]) .ui5-shellbar-with-searchfield .ui5-shellbar-overflow-container-right{margin-left:1rem}:host(:not([notifications-count])) .ui5-shellbar-bell-button{position:relative}.ui5-shellbar-button[data-count]:before,:host([notifications-count]:not([notifications-count=\"\"])) .ui5-shellbar-bell-button:before{position:absolute;width:auto;height:1rem;min-width:1rem;background:var(--sapContent_BadgeBackground);color:var(--sapShell_TextColor);top:.125rem;left:1.5rem;padding:.25rem;border-radius:1rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);font-family:\"72override\",var(--sapFontFamily);z-index:2;box-sizing:border-box}:host([notifications-count]:not([notifications-count=\"\"])) .ui5-shellbar-bell-button:before{content:attr(data-ui5-notifications-count)}.ui5-shellbar-button[data-count]:before{content:attr(data-count)}.ui5-shellbar-menu-button{margin-left:.5rem}.ui5-shellbar-search-field{flex-grow:1;min-width:240px;margin-left:.5rem;max-width:25rem}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-search-full-field{height:2.25rem;width:100%}.ui5-shellbar-search-full-width-wrapper{position:absolute;top:0;left:0;background:var(--sapShellColor);height:100%;width:100%;z-index:100;display:flex;align-items:center;box-sizing:border-box}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-button{width:auto}::slotted([ui5-input]){background-color:var(--sapShellColor);border:1px solid var(--sapShell_InteractiveBorderColor);color:var(--sapShell_TextColor);height:100%;width:100%}::slotted([ui5-input][focused]){outline:1px dotted var(--sapContent_ContrastFocusColor)}::slotted([slot=logo]){max-height:2rem;pointer-events:none}[ui5-input][value-state]:not([readonly]){background:var(--sapShellColor);border:1px solid var(--sapShell_InteractiveBorderColor)}[ui5-input]:not([value-state]):not([readonly]):hover,[ui5-input][value-state]:not([readonly]):hover{background:var(--sapShell_Hover_Background);border:1px solid var(--sapShell_InteractiveBorderColor)}[ui5-input][value-state]:not([value-state=None])[focused]{outline:1px dotted var(--sapContent_ContrastFocusColor)}.ui5-shellbar-copilot-wrapper{position:relative;outline:none;box-sizing:border-box}.ui5-shellbar-copilot-wrapper:hover{background:var(--sapShell_Hover_Background)}.ui5-shellbar-copilot-wrapper:active,.ui5-shellbar-copilot-wrapper[active]{background:var(--sapShell_Active_Background)}.ui5-shellbar-copilot-wrapper:focus:after{content:\"\";position:absolute;width:100%;height:calc(100% - .75rem);border:1px dotted var(--sapContent_ContrastFocusColor);pointer-events:none;left:0;top:.25rem;z-index:1}.ui5-shellbar-co-pilot-placeholder{width:2.75rem;height:2.75rem}.ui5-shellbar-co-pilot-circle{fill:var(--sapShellColor)}:host [dir=rtl] ::slotted([ui5-button][slot=startButton]){margin-left:.5rem;margin-right:0}:host [dir=rtl] .ui5-shellbar-menu-button{margin-right:.5rem;margin-left:0}[dir=rtl] .ui5-shellbar-menu-button--interactive .ui5-shellbar-menu-button-arrow{margin-right:.375rem;margin-left:0}:host(:not([show-search-field])) [dir=rtl] .ui5-shellbar-overflow-container-right{margin-right:8rem;margin-left:0}[dir=rtl] .ui5-shellbar-overflow-container-right{margin-left:0}[dir=rtl] .ui5-shellbar-overflow-container-right .ui5-shellbar-overflow-container-right-child{float:left}:host([breakpoint-size=S]) [dir=rtl] .ui5-shellbar-overflow-container-right{margin-right:0}::slotted([ui5-button][slot=startButton]){margin-right:.5rem;margin-left:0;justify-content:center;align-items:center}::slotted([ui5-button][profile-btn]){width:auto}";

	return styles;

});
