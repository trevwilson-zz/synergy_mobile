var args = arguments[0] || {};
 
$.name.text = args.name;
$.tagline.text = args.tagline;

function goToProject(e){
	Alloy.createController("project", {"id":args.id}).getView().open();
}
