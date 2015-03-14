sap.ui.jsview("helloworld.View3", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf helloworld.View3
	*/ 
	getControllerName : function() {
		return "helloworld.View3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf helloworld.View3
	*/ 
	createContent : function(oController) {
		var oLabel = new sap.ui.commons.Label("l1");
		oLabel.setText("View 3 : Hello World Changes For Diff");
		return oLabel;
	}

});
