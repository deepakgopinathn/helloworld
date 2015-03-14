sap.ui.jsview("helloworld.View2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf helloworld.View2
	*/ 
	getControllerName : function() {
		return "helloworld.View2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf helloworld.View2
	*/ 
	createContent : function(oController) {
		var oLabel = new sap.ui.commons.Label("l1");
		oLabel.setText("View 2 Changed to put in a long line of text to see how the line wrap works: Hello World");
		return oLabel;

	}

});
