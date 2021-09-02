sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<div class="ui5-select-root" dir="${litRender.ifDefined(context.effectiveDir)}" id="${litRender.ifDefined(context._id)}-select" @click="${context._onclick}">${ context.selectedOptionIcon ? block1(context, tags, suffix) : undefined }<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${litRender.ifDefined(context.tabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${litRender.ifDefined(context.ariaLabelText)}" aria-describedby="${litRender.ifDefined(context.valueStateTextId)}" aria-disabled="${litRender.ifDefined(context.isDisabled)}" aria-required="${litRender.ifDefined(context.required)}" aria-expanded="${litRender.ifDefined(context._isPickerOpen)}" @keydown="${context._onkeydown}" @keypress="${context._handleKeyboardNavigation}" @keyup="${context._onkeyup}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}">${litRender.ifDefined(context._text)}</div><span id="${litRender.ifDefined(context._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><${litRender.scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" input-icon ?pressed="${context._iconPressed}" dir="${litRender.ifDefined(context.effectiveDir)}"></${litRender.scopeTag("ui5-icon", tags, suffix)}>${ context.hasValueState ? block2(context) : undefined }<slot name="formSupport"></slot></div>`;
	const block1 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} aria-hidden="true" class="ui5-select-option-icon" name="${litRender.ifDefined(context.selectedOptionIcon)}" dir="${litRender.ifDefined(context.effectiveDir)}"></${litRender.scopeTag("ui5-icon", tags, suffix)}>`;
	const block2 = (context, tags, suffix) => litRender.html`<span id="${litRender.ifDefined(context._id)}-valueStateDesc" class="ui5-hidden-text">${litRender.ifDefined(context.valueStateText)}</span>`;

	return block0;

});
