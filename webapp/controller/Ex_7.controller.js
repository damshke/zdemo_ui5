sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device"
], function (Controller, Device) {
        "use strict";

        return Controller.extend("zdemo_ui5.webapp.controller.Ex_7", {

        onInit: function () {
            this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCosy" : "sapUiSizeCompact");
        }
    });
});