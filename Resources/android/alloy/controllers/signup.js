function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.signup = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        text: "Email",
        id: "__alloyId8"
    });
    $.__views.signup.add($.__views.__alloyId8);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "80%"
    });
    $.__views.signup.add($.__views.email);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Password",
        id: "__alloyId9"
    });
    $.__views.signup.add($.__views.__alloyId9);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        width: "80%"
    });
    $.__views.signup.add($.__views.password);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Confirm Password",
        id: "__alloyId10"
    });
    $.__views.signup.add($.__views.__alloyId10);
    $.__views.passwordconfirmation = Ti.UI.createTextField({
        id: "passwordconfirmation",
        width: "80%"
    });
    $.__views.signup.add($.__views.passwordconfirmation);
    $.__views.__alloyId11 = Ti.UI.createButton({
        title: "Sign Up",
        width: "80%",
        id: "__alloyId11"
    });
    $.__views.signup.add($.__views.__alloyId11);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;