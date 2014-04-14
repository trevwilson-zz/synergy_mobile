var collection = Alloy.createCollection('projects');
//the fetch method is an async call to the remote REST API. 
collection.fetch({ 
    success : function(){
    	var rows = [];
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            console.log(element);
            var controller = Alloy.createController('matchRow', {
            	name: element.attributes.name,
            	tagline: element.attributes.tagline,
            	id: element.attributes.id
            });
            console.log('made controller');
            var view = controller.getView();
            console.log('made view');
            rows.push(view);
            console.log('pushed to row');
			// rows.push(Alloy.createController('matchRow', {
				// name: element.attributes.name,
				// tagline: element.attributes.tagline
			// }).getView());
        });
		$.matchTable.setData(rows);
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});