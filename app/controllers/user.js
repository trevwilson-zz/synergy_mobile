var args = arguments[0] || {};

var id = args.id;

var collection = Alloy.createCollection('users');
collection.fetch({ 
    success : function(){
		var user = collection.get(id).toJSON();
		$.name.text = user.name;
		$.email.text = user.email;
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});