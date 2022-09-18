sap.ui.jsview("zdemo_ui5.view.MyJSView", {

    getControllerName: function () {
        return "zdemo_ui5.view.MyJSView";
    },

    createContent: function (oController) {

        var oText = new sap.m.Text({
            text: "А тут JS View"
        });

        var oCheckBox = new sap.m.CheckBox(this.createId("idCheckBox"), {
            text: "Нет"
        });

        oCheckBox.attachSelect(oController.onBCSelect, oController);

        return [oText, oCheckBox];
    }
});

/* упражнение к 6 модулю */