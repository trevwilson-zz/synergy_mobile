function goToUser(e){
	Alloy.createController("user").getView().open();
}

var args = arguments[0] || {};
 
$.name.text = args.name;
$.email.text = args.email;