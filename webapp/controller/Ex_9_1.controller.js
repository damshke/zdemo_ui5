sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("zdemo_ui5.controller.Ex_9_1", {

        /**
         * @override
         */
        onInit: function () {
            
            var oData = {
                "name": "Daria",
                "enabled": true
            };

            var oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel);

        }
	});
});

/* упражнение к 9 модулю, первое упражнение оттуда */