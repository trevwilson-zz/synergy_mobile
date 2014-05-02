function Controller() {
    function goToLogin() {
        Alloy.createController("login").getView().open();
    }
    function goToSignup() {
        Alloy.createController("signup").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "splash";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.splash = Ti.UI.createWindow({
        backgroundColor: "#274e82",
        layout: "vertical",
        id: "splash"
    });
    $.__views.splash && $.addTopLevelView($.__views.splash);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        color: "white",
        top: "30dp",
        text: "Synergy",
        id: "__alloyId11"
    });
    $.__views.splash.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontSize: "24dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        text: "Welcome to Synergy, a platform for collaboration",
        id: "__alloyId12"
    });
    $.__views.splash.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        backgroundColor: "#2ba6cb",
        borderRadius: "25",
        top: "10dp",
        title: "Log In",
        width: "80%",
        id: "__alloyId13"
    });
    $.__views.splash.add($.__views.__alloyId13);
    goToLogin ? $.__views.__alloyId13.addEventListener("click", goToLogin) : __defers["$.__views.__alloyId13!click!goToLogin"] = true;
    $.__views.__alloyId14 = Ti.UI.createButton({
        backgroundColor: "#2ba6cb",
        borderRadius: "25",
        top: "10dp",
        title: "Sign Up",
        width: "80%",
        id: "__alloyId14"
    });
    $.__views.splash.add($.__views.__alloyId14);
    goToSignup ? $.__views.__alloyId14.addEventListener("click", goToSignup) : __defers["$.__views.__alloyId14!click!goToSignup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId13!click!goToLogin"] && $.__views.__alloyId13.addEventListener("click", goToLogin);
    __defers["$.__views.__alloyId14!click!goToSignup"] && $.__views.__alloyId14.addEventListener("click", goToSignup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;