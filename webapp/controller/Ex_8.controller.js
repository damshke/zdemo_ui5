sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
        "use strict";

        return Controller.extend("zdemo_ui5.controller.Ex_8", {

        onXmlButtonPress: function (oEvent) {
            var oInput = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInput"));
            var oText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));

            oText.setText("Hello " + oInput.getValue());
        },

        onJsButtonPress: function (oEvent) {
            var oInput = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idInput"));
            var oText = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));

            oText.setText("Hello " + oInput.getValue());
        }
    });
});

/* упражнение из 8 модуля */