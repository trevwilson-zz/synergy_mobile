var args = arguments[0] || {};
 
$.name.text = args.name;
$.email.text = args.email;

function goToUser(e){
	Alloy.createController("user", {"id":args.id}).getView().open();
}