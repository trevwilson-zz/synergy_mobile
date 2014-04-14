function login(e){
	var xhr = Titanium.Network.createHTTPClient({
	    timeout : 2000,
	    onload : function() {
	        // Successful return, do something with it
	        alert(this.responseText);
	    },
	    onerror : function() {
	        Ti.API.error(this.responseText);
	    }
	
	});
	xhr.open('POST',"http://newsynergy.herokuapp.com/users/sign_in.json");
	
	xhr.send({"user[email]": $.email.value, "user[password]": $.password.value});
}