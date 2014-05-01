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
        id: "name"
    });
    $.__views.user.add($.__views.name);
    $.__views.email = Ti.UI.createLabel({
        id: "email"
    });
    $.__views.user.add($.__views.email);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var id = args.id;
    var collection = Alloy.createCollection("users");
    collection.fetch({
        success: function() {
            var user = collection.get(id).toJSON();
            $.name.text = user.name;
            $.email.text = user.email;
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;