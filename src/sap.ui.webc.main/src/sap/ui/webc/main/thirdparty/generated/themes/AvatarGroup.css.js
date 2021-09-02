sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theme-base/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => parametersBundle_css);
	var AvatarGroupCss = ":host(:not([hidden])){display:block}.ui5-avatar-group-items:focus{outline:none}:host([type=Group]) .ui5-avatar-group-items:focus{outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_focus_offset)}.ui5-avatar-group-root{display:flex}.ui5-avatar-group-items{white-space:nowrap;position:relative;display:inline-flex}:host([type=Group]) .ui5-avatar-group-items{cursor:pointer}:host([type=Group]) ::slotted([ui5-avatar]),:host([type=Group]) ::slotted([ui5-button]){pointer-events:none}.ui5-avatar-group-overflow-btn:not([hidden]),::slotted([ui5-button]:not([hidden])){--_ui5_button_base_padding:0;border-radius:50%;display:inline-flex;text-overflow:clip}.ui5-avatar-group-overflow-btn[focused],::slotted([ui5-button][focused]){outline:var(--_ui5_button_outline);outline-offset:var(--_ui5_avatar_group_overflow_button_focus_offset)}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xs{height:2rem;width:2rem;min-width:2rem;font-size:.75rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-s,::slotted([ui5-button]){height:3rem;width:3rem;min-width:3rem;font-size:1.125rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-m{height:4rem;width:4rem;min-width:4rem;font-size:1.625rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-l{height:5rem;width:5rem;min-width:5rem;font-size:2rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xl{height:7rem;width:7rem;min-width:7rem;font-size:2.75rem}";

	return AvatarGroupCss;

});
