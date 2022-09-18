sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    "use strict";

    return Controller.extend("zdemo_ui5.controller.MyJSView", {
        onCBSelect: function () {

            var oCheckBox = this.byId("idCheckBox");

            if (oCheckBox.getSelected()) {
                oCheckBox.setText("Да");
            }
            else {
                oCheckBox.setText("Нет");
            }
        }
    });
});

/* упражнение к 6 модулю */