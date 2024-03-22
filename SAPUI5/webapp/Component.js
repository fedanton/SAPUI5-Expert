//@ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /*** 
    * @param {typeof sap.ui.core.UIComponent }	UIComponent 
    * @param {typeof sap.ui.model.resource.ResourceModel } ResourceModel
    * @param {typeof logaligroup.SAPUI5.model.Models }	Models
     * 
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                // Initializes the component instance after creation.
                //Applications must not call this hook method directly, 
                //it is called by the framework while the constructor of a Component is executed.

                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the component
                //en la llamada a models.createRecipient es la que me devuelve el modelo Json
                // definido en Model/Models.js 
                this.setModel(Models.createRecipient());

                // set i18n model on the componet
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                // si pasamos el modelo directamente rompemos el modelo definido previamente, 
                // ya que cada modelo debe tener una clave o name espace y solo un modelo debe estar vacio
                // debe se igual al de la vista i18n>
                this.setModel(i18nModel, "i18n");

            }
        })

    }
);