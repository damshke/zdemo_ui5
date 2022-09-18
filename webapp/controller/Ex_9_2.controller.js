sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("zdemo_ui5.controller.Ex_9_2", {

		onUnit: function () {
			var oModel = new JSONModel();
			oModel.loadData("model/data.json");
			this.getView().setModel(oModel, "connections");
		}
	});
});