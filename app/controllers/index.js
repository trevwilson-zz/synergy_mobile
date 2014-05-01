function goToMatchmaker(e){
	Alloy.createController("match").getView().open();
}

function goToUsers(e){
	Alloy.createController("users").getView().open();
}

function goToProjects(e){
	Alloy.createController("projects").getView().open();
}

function logout(e){
	Alloy.Globals.user_id = null;
	Alloy.createController("splash").getView().open();
}

function doOpen(e){
	if($.win.activity){
		$.win.activity.invalidateOptionsMenu();
	}	
}

if(Alloy.Globals.signedIn){
	$.index.open();
}else{
	Alloy.createController("splash").getView().open();
}