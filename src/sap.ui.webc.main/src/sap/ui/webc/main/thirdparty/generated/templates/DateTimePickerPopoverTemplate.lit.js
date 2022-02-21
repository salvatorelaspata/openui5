sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-responsive-popover", tags, suffix)} id="${litRender.ifDefined(context._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" ?disable-scrolling="${context._isIE}" hide-arrow ?_hide-header=${litRender.ifDefined(context._shouldHideHeader)} @keydown="${context._onkeydown}" @ui5-after-close="${litRender.ifDefined(context.onResponsivePopoverAfterClose)}">${ context.showHeader ? block1(context, tags, suffix) : undefined }<div class="ui5-dt-picker-content ${litRender.classMap(context.classes.picker)}"><${litRender.scopeTag("ui5-calendar", tags, suffix)} class="ui5-dt-cal ${litRender.classMap(context.classes.dateTimeView)}" id="${litRender.ifDefined(context._id)}-calendar" primary-calendar-type="${litRender.ifDefined(context._primaryCalendarType)}" format-pattern="${litRender.ifDefined(context._formatPattern)}" timestamp="${litRender.ifDefined(context._calendarTimestamp)}" .selectionMode="${litRender.ifDefined(context._calendarSelectionMode)}" .minDate="${litRender.ifDefined(context.minDate)}" .maxDate="${litRender.ifDefined(context.maxDate)}" @ui5-selected-dates-change="${litRender.ifDefined(context.onSelectedDatesChange)}" @ui5-show-month-press="${litRender.ifDefined(context.onHeaderShowMonthPress)}" @ui5-show-year-press="${litRender.ifDefined(context.onHeaderShowYearPress)}" ?hide-week-numbers="${context.hideWeekNumbers}" ._currentPicker="${litRender.ifDefined(context._calendarCurrentPicker)}">${ litRender.repeat(context._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix)) }</${litRender.scopeTag("ui5-calendar", tags, suffix)}>${ !context.phone ? block4() : undefined }<${litRender.scopeTag("ui5-time-selection", tags, suffix)} id="${litRender.ifDefined(context._id)}-time-sel" class="ui5-dt-time ${litRender.classMap(context.classes.dateTimeView)}" value="${litRender.ifDefined(context._timeSelectionValue)}" format-pattern="${litRender.ifDefined(context._formatPattern)}" ._currentSlider="${litRender.ifDefined(context._currentTimeSlider)}" @ui5-change="${litRender.ifDefined(context.onTimeSelectionChange)}" @ui5-slider-change="${litRender.ifDefined(context.onTimeSliderChange)}"></${litRender.scopeTag("ui5-time-selection", tags, suffix)}></div>${ context.showFooter ? block5(context, tags, suffix) : undefined }</${litRender.scopeTag("ui5-responsive-popover", tags, suffix)}> `;
	const block1 = (context, tags, suffix) => litRender.html`${ context.phone ? block2(context, tags, suffix) : undefined }`;
	const block2 = (context, tags, suffix) => litRender.html`<div class="ui5-dt-picker-header"><${litRender.scopeTag("ui5-segmented-button", tags, suffix)} class="ui5-dt-picker-toggle-button"><${litRender.scopeTag("ui5-toggle-button", tags, suffix)} key="Date" ?pressed="${context.showDateView}" @click="${context._dateTimeSwitchChange}">${litRender.ifDefined(context.btnDateLabel)}</${litRender.scopeTag("ui5-toggle-button", tags, suffix)}><${litRender.scopeTag("ui5-toggle-button", tags, suffix)} key="Time" ?pressed="${context.showTimeView}" @click="${context._dateTimeSwitchChange}">${litRender.ifDefined(context.btnTimeLabel)}</${litRender.scopeTag("ui5-toggle-button", tags, suffix)}></${litRender.scopeTag("ui5-segmented-button", tags, suffix)}></div>`;
	const block3 = (item, index, context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-date", tags, suffix)} value="${litRender.ifDefined(item)}"></${litRender.scopeTag("ui5-date", tags, suffix)}>`;
	const block4 = (context, tags, suffix) => litRender.html`<span class="ui5-dt-picker-separator"></span>`;
	const block5 = (context, tags, suffix) => litRender.html`<div slot="footer" class="ui5-dt-picker-footer"><${litRender.scopeTag("ui5-button", tags, suffix)} id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${context._submitDisabled}" @click="${context._submitClick}">${litRender.ifDefined(context.btnOKLabel)}</${litRender.scopeTag("ui5-button", tags, suffix)}><${litRender.scopeTag("ui5-button", tags, suffix)} id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${context._cancelClick}">${litRender.ifDefined(context.btnCancelLabel)}</${litRender.scopeTag("ui5-button", tags, suffix)}></div>`;

	return block0;

});
