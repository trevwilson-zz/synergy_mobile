function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "user";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.user = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "user"
    });
    $.__views.user && $.addTopLevelView($.__views.user);
    $.__views.name = Ti.UI.createLabel({
        text: "Trevor Wilson",
        id: "name"
    });
    $.__views.user.add($.__views.name);
    $.__views.email = Ti.UI.createLabel({
        text: "trevwilson16@gmail.com",
        id: "email"
    });
    $.__views.user.add($.__views.email);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;