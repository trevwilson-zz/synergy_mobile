function login(e){
	var xhr = Titanium.Network.createHTTPClient({
	    timeout : 2000,
	    onload : function() {
	    	response = JSON.parse(this.responseText);
	        // Successful return, do something with it
	        if(response.success == true){
	        	Alloy.Globals.user_id = response.id;
	        	Alloy.createController("index").getView().open();
	        }
	        else{
	        	alert("Incorrect email or password");
	        }
	    },
	    onerror : function() {
	        Ti.API.error(this.responseText);
	    }
	
	});
	xhr.open('POST',"http://newsynergy.herokuapp.com/users/sign_in.json");
	
	xhr.send({"user[email]": $.email.value, "user[password]": $.password.value});
}