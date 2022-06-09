sap.ui.define([
    "ssg/lk/zdemo/controller/BaseController",
    "sap/m/BusyDialog",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, BusyDialog, JSONModel, Filter) {
        "use strict";

        return BaseController.extend("ssg.lk.zdemo.controller.App", {
            onInit: function () {
                this.mzdemo = this.getComponentModel("zdemo_srv");
                this.BusyDialog = new BusyDialog().setBusyIndicatorDelay(0);                
            }            
        });
    });
