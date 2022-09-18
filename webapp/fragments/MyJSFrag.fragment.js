sap.ui.jsfragment("zdemo_ui5.fragments.MyJSFrag", {

    createContent: function (oController) {

        var oInput = new sap.m.Input(this.createId("idInput"));

        var oButton = new sap.m.Button({
            text: "Say Hello (JavaScript Fragment)",
            press: [oController.onJsButtonPress, oController]
        });

        var oText = new sap.m.Text(this.createId("idText"));

        return new sap.ui.layout.HorizontalLayout({
            content: [oInput, oButton, oText]
        });

    }
});

/* упражнение из 8 модуля */