var collection = Alloy.createCollection('matches');
//the fetch method is an async call to the remote REST API. 
collection.fetch({ 
    success : function(){
    	$.matchWin.remove($.start);
    	var rows = [];
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            console.log(element);
            var controller = Alloy.createController('projectRow', {
            	name: element.attributes[0].name,
            	tagline: element.attributes[0].tagline,
            	id: element.attributes[0].id
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
		$.matchTable.setData(rows);
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});