sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onInit() {
        },

        onClearPress() {
            const oView = this.getView();
            //Clear input fields
            oView.byId("input4").setValue("");
            oView.byId("input7").setValue("");
            oView.byId("input8").setValue("");
            oView.byId("input10").setValue("");
            oView.byId("input11").setValue("");
            oView.byId("select0").setSelectedKey("");
        }
    });
});