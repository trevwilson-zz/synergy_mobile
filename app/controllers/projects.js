var collection = Alloy.createCollection('projects');
//the fetch method is an async call to the remote REST API. 
collection.fetch({ 
    success : function(){
    	var rows = [];
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            var controller = Alloy.createController('projectRow', {
            	name: element.attributes.name,
            	tagline: element.attributes.tagline,
            	id: element.attributes.id
            });
            var view = controller.getView();
            rows.push(view);
            view = Titanium.UI.createTableViewRow({
            	id: 'spacer',
            	height : '10dp',
            	color: 'transparent'
            });
            rows.push(view);

        });
		$.projectTable.setData(rows);
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});