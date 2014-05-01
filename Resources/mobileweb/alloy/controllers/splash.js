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
        backgroundColor: "white",
        layout: "vertical",
        id: "splash"
    });
    $.__views.splash && $.addTopLevelView($.__views.splash);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        text: "Synergy",
        id: "__alloyId13"
    });
    $.__views.splash.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "Welcome to Synergy, a platform for collaboration",
        id: "__alloyId14"
    });
    $.__views.splash.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createButton({
        title: "Log In",
        width: "80%",
        id: "__alloyId15"
    });
    $.__views.splash.add($.__views.__alloyId15);
    goToLogin ? $.__views.__alloyId15.addEventListener("click", goToLogin) : __defers["$.__views.__alloyId15!click!goToLogin"] = true;
    $.__views.__alloyId16 = Ti.UI.createButton({
        title: "Sign Up",
        width: "80%",
        id: "__alloyId16"
    });
    $.__views.splash.add($.__views.__alloyId16);
    goToSignup ? $.__views.__alloyId16.addEventListener("click", goToSignup) : __defers["$.__views.__alloyId16!click!goToSignup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId15!click!goToLogin"] && $.__views.__alloyId15.addEventListener("click", goToLogin);
    __defers["$.__views.__alloyId16!click!goToSignup"] && $.__views.__alloyId16.addEventListener("click", goToSignup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;