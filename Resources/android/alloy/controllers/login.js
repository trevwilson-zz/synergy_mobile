function Controller() {
    function login() {
        var xhr = Titanium.Network.createHTTPClient({
            timeout: 2e3,
            onload: function() {
                alert(this.responseText);
            },
            onerror: function() {
                Ti.API.error(this.responseText);
            }
        });
        xhr.open("POST", "http://newsynergy.herokuapp.com/users/sign_in.json");
        xhr.send({
            "user[email]": $.email.value,
            "user[password]": $.password.value
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "Email",
        id: "__alloyId4"
    });
    $.__views.login.add($.__views.__alloyId4);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "80%"
    });
    $.__views.login.add($.__views.email);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Password",
        id: "__alloyId5"
    });
    $.__views.login.add($.__views.__alloyId5);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        width: "80%"
    });
    $.__views.login.add($.__views.password);
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "Log In",
        width: "80%",
        id: "__alloyId6"
    });
    $.__views.login.add($.__views.__alloyId6);
    login ? $.__views.__alloyId6.addEventListener("click", login) : __defers["$.__views.__alloyId6!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId6!click!login"] && $.__views.__alloyId6.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;