sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"		
	],
	 /**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller 
	 * @param {typeof sap.m.MessageToast} MessageToast	 
	 * @param {typeof sap.ui.model.resource.ResourceModel) ResourceModel
	} Models
	 * 
	 */
	function (Controller,
	MessageToast,
	Models,
	ResourceModel) {

		"use strict";
		return Controller.extend("logaligroup.SAPUI5.controller.App", {
		
			onInit: function () {		
				
			},

			onShowHello: function () {
				//read text from i18n Model
				//se debe considera que el nombre del modelo de recursos debe ser el mismo a cuando se hace el set
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				// read Property from data model
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");

				var sMsg = oBundle.getText("helloMsg",[sRecipient]);  //el 18n helloMsg tiene parametros y el numero de parametros son indicados
																	 // parametro indicado en los corchetes  helloMsg = Hello {0}
				MessageToast.show(sMsg);
			}
		}
		);
	}
);