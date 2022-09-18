sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageBox"
],
    function (Controller,
	ODataModel,
	MessageBox) {
        "use strict";

        return Controller.extend("zdemo_ui5.controller.Main", {

            onInit: function () {

                //var sUrl = "http://192.168.0.97:50000/sap/opu/odata/SAP/zintzrobjstat_SRV/";
                //var oModel = new ODataModel(sUrl, {useBatch: false});

                //this.getView().setModel(oModel);


            },

            onReportChange: function (oEvent) {

                var selectedRowContext = oEvent.getParameter("rowContext");
                var sPath = selectedRowContext.getPath();

                var oReportTable = this.byId("idReportTable");
                oReportTable.bindElement(sPath);
            },

            onCancelEmployee: function (oEvent) {
                var ID = oEvent.getSource().data("objid");
                var oModel = this.getView().getModel();

                oModel.callFunction("/CancelEmployee", {
                    method: "POST",
                    urlParapeters: {
                        objid: ID
                    },
                    error: function (oError) {
                        var oMsg = JSON.parse(oError.responseText);
                        MessageBox.error(oMsg.error.innererror.errordetails[0].message, {
                            details: oMsg
                        });
                    }
                });
            },

            onCreateEmployee: function (oEvent) {

                var ID = oEvent.getSource().data("objid");
                var Surname = oEvent.getSource().data("surname");

                var oEmployeeData = {
                    "obkid": ID,
                    "name": "Токен СС",
                    "location": "Одинцово",
                    "surname": Surname
                };

                var oModel = this.getView().getModel();

                oModel.create("/")


            }
        });
});
