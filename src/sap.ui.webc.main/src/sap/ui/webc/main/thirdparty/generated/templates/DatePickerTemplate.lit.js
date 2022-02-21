sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<div class="ui5-date-picker-root" style="${litRender.styleMap(context.styles.main)}"><${litRender.scopeTag("ui5-input", tags, suffix)} id="${litRender.ifDefined(context._id)}-inner" class="ui5-date-picker-input" placeholder="${litRender.ifDefined(context._placeholder)}" type="${litRender.ifDefined(context.type)}" value="${litRender.ifDefined(context.value)}" ?disabled="${context.disabled}" ?required="${context.required}" ?readonly="${context.readonly}" value-state="${litRender.ifDefined(context.valueState)}" data-sap-focus-ref ._inputAccInfo ="${litRender.ifDefined(context.accInfo)}" @ui5-change="${litRender.ifDefined(context._onInputChange)}" @ui5-input="${litRender.ifDefined(context._onInputInput)}" @ui5-submit="${litRender.ifDefined(context._onInputSubmit)}" @keydown="${context._onkeydown}">${ context.valueStateMessage.length ? block1() : undefined }${ !context.readonly ? block2(context, tags, suffix) : undefined }</${litRender.scopeTag("ui5-input", tags, suffix)}><slot name="formSupport"></slot></div>`;
	const block1 = (context, tags, suffix) => litRender.html`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`;
	const block2 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} slot="icon" name="${litRender.ifDefined(context.openIconName)}" tabindex="-1" accessible-name="${litRender.ifDefined(context.openIconTitle)}" show-tooltip @click="${context.togglePicker}" input-icon ?pressed="${context._isPickerOpen}" dir="${litRender.ifDefined(context.effectiveDir)}"></${litRender.scopeTag("ui5-icon", tags, suffix)}>`;

	return block0;

});
