sap.ui.define([
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException"
    ],
    function (SimpleType, ValidateException) {

        return SimpleType.extend("zdemo_ui5.model.type.ConnID", {

            formatValue: function (oValue) {
                return oValue;
            },

            parseValue: function (oValue) {
                return oValue;
            },

            validateValue: function (oValue) {
                if (!/^(\d{4})?$/.test(oValue)) {
                    throw new ValidateException("The flight connection must consist of exactly 4 nimbers!");
                }
            }
        });
    });