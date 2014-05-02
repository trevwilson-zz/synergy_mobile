function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "project";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.project = Ti.UI.createWindow({
        backgroundColor: "#274e82",
        layout: "vertical",
        id: "project"
    });
    $.__views.project && $.addTopLevelView($.__views.project);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica"
        },
        id: "name"
    });
    $.__views.project.add($.__views.name);
    $.__views.tagline = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica"
        },
        id: "tagline"
    });
    $.__views.project.add($.__views.tagline);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var id = args.id;
    var collection = Alloy.createCollection("projects");
    collection.fetch({
        success: function() {
            var project = collection.get(id).toJSON();
            $.name.text = project.name;
            $.tagline.text = project.tagline;
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;