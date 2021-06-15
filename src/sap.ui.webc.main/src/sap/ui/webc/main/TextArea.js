/*!
 * ${copyright}
 */

// Provides control sap.ui.webc.main.TextArea.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"sap/ui/core/library",
	"./thirdparty/TextArea"
], function(WebComponent, library, coreLibrary) {
	"use strict";

	var ValueState = coreLibrary.ValueState;

	/**
	 * Constructor for a new <code>TextArea</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>sap.ui.webc.main.TextArea</code> component provides large spaces for text entries in the form of multiple rows. It has the functionality of the <code>TextField</code> with the additional functionality for multiline texts. <br>
	 * <br>
	 * When empty, it can hold a placeholder similar to a <code>sap.ui.webc.main.Input</code>. You can define the rows of the <code>sap.ui.webc.main.TextArea</code> and also determine specific behavior when handling long texts.
	 *
	 * <h3>CSS Shadow Parts</h3>
	 *
	 * <ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br>
	 * The <code>sap.ui.webc.main.TextArea</code> exposes the following CSS Shadow Parts:
	 * <ul>
	 *     <li>textarea - Used to style the native textarea</li>
	 * </ul>
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.main.TextArea
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var TextArea = WebComponent.extend("sap.ui.webc.main.TextArea", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-textarea-ui5",
			properties: {

				/**
				 * Indicates whether the user can interact with the component or not. <br>
				 * <br>
				 * <b>Note:</b> Disabled components cannot be focused and they are out of the tab chain.
				 */
				disabled: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Enables the component to automatically grow and shrink dynamically with its content. <br>
				 * <br>
				 * <b>Note:</b> If set to <code>true</code>, the CSS <code>height</code> property is ignored.
				 */
				growing: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the maximum number of lines that the Web Component can grow.
				 */
				growingMaxLines: {
					type: "int",
					defaultValue: 0
				},

				/**
				 * Defines the height of the control
				 */
				height: {
					type: "sap.ui.core.CSSSize",
					defaultValue: null,
					mapping: "style"
				},

				/**
				 * Defines the maximum number of characters that the <code>value</code> can have.
				 */
				maxlength: {
					type: "int",
					defaultValue: null
				},

				/**
				 * Determines the name with which the component will be submitted in an HTML form.
				 *
				 *
				 * <br>
				 * <br>
				 * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
				 */
				name: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines a short hint intended to aid the user with data entry when the component has no value.
				 */
				placeholder: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines whether the component is read-only. <br>
				 * <br>
				 * <b>Note:</b> A read-only component is not editable, but still provides visual feedback upon user interaction.
				 */
				readonly: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines whether the component is required.
				 */
				required: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the number of visible text lines for the component. <br>
				 * <br>
				 * <b>Notes:</b>
				 * <ul>
				 *     <li>If the <code>growing</code> property is enabled, this property defines the minimum rows to be displayed in the textarea.</li>
				 *     <li>The CSS <code>height</code> property wins over the <code>rows</code> property, if both are set.</li>
				 * </ul>
				 */
				rows: {
					type: "int",
					defaultValue: 0
				},

				/**
				 * Determines whether the characters exceeding the maximum allowed character count are visible in the component. <br>
				 * <br>
				 * If set to <code>false</code>, the user is not allowed to enter more characters than what is set in the <code>maxlength</code> property. If set to <code>true</code> the characters exceeding the <code>maxlength</code> value are selected on paste and the counter below the component displays their number.
				 */
				showExceededText: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the value of the Web Component.
				 */
				value: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the value state of the component. <br>
				 * <br>
				 * Available options are:
				 * <ul>
				 *     <li><code>None</code></li>
				 *     <li><code>Error</code></li>
				 *     <li><code>Warning</code></li>
				 *     <li><code>Success</code></li>
				 *     <li><code>Information</code></li>
				 * </ul> <br>
				 * <br>
				 * <b>Note:</b> If <code>maxlength</code> property is set, the component turns into "Warning" state once the characters exceeds the limit. In this case, only the "Error" state is considered and can be applied.
				 */
				valueState: {
					type: "sap.ui.core.ValueState",
					defaultValue: ValueState.None
				},

				/**
				 * Defines the value state message that will be displayed as pop up under the contorl.
				 * <br>
				 * <br>
				 *
				 *
				 * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
				 */
				valueStateMessage: {
					type: "string",
					defaultValue: "",
					mapping: {
						type: "slot",
						to: "div"
					}
				},

				/**
				 * Defines the width of the control
				 */
				width: {
					type: "sap.ui.core.CSSSize",
					defaultValue: null,
					mapping: "style"
				}
			},
			events: {

				/**
				 * Fired when the text has changed and the focus leaves the component.
				 */
				change: {},

				/**
				 * Fired when the value of the component changes at each keystroke or when something is pasted.
				 */
				input: {}
			}
		}
	});

	return TextArea;
});