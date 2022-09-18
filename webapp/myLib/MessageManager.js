/* упражнение из пятого модуля */

sap.ui.define(["sap/m/MessageBox",
                "zdemo_ui5/webapp/myLib/MessageManager"], function (MessageBox, Formatter) {
    
    return {
        reportSuccess: function (sMsg, sTitle) {
            MessageBox.show(
                Formatter.capitalizeFirstLetter(sMsg), {
                    title: Formatter.capitalizeFirstLetter(sTitle)
                });
        }

    };
});