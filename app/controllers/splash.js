function goToLogin(e){
	Alloy.createController("login").getView().open();
}

function goToSignup(e){
	Alloy.createController("signup").getView().open();
}

function skipAuth(e){
	Alloy.createController("index").getView().open();
}
