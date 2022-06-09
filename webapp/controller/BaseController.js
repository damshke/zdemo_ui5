sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
    "sap/m/MessageToast",
	"ssg/lk/zdemo/model/formatter"
], function (Controller, UIComponent, MessageToast, formatter) {
		
	"use strict";
	return Controller.extend("ssg.lk.zdemo.controller.BaseController", {
		formatter: formatter,

		/**
		 * Возвращает пакет ресурса модели интернационализации
		 * @returns {sap.base.i18n.ResourceBundle}
		 * @public
		 */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		/**
		 * Возвращает объект роутера по маршруту для текущего контроллера
		 * @returns {sap.m.routing.Router}
		 * @public 
		 */
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},

		/**
		 * Возвращает модель из текущего представления по имени
		 * @param {string} sName Название модели
		 * @returns {sap.m.routing.Router}
		 * @public
		 */
		getModel: function (sName) {
			return this.getView().getModel(sName);
		},

		/**
		 * Возвращает модель глобальную модель по имени
		 * @param {string} sName Название модели
		 * @returns {sap.m.routing.Router} 
		 * @public
		 */
		getComponentModel: function (sName) {
			return this.getOwnerComponent().getModel(sName);
		},		
		
		showErrorMessage: function (oError) {
			var sError = oError.message;
			if (oError.responseText) {
                try {
                    sError = JSON.parse(oError.responseText).error.message.value;
                } catch {
                    sError = oError.message;
                }				
			}
			MessageToast.show(sError);
		}
	});
});