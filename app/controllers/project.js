var args = arguments[0] || {};

var id = args.id;

var collection = Alloy.createCollection('projects');
collection.fetch({ 
    success : function(){
		var project = collection.get(id).toJSON();
		$.name.text = project.name;
		$.tagline.text = project.tagline;
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});