function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "project";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.project = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "project"
    });
    $.__views.project && $.addTopLevelView($.__views.project);
    $.__views.name = Ti.UI.createLabel({
        text: "Synergy",
        id: "name"
    });
    $.__views.project.add($.__views.name);
    $.__views.tagline = Ti.UI.createLabel({
        text: "A platform for collaboration",
        id: "tagline"
    });
    $.__views.project.add($.__views.tagline);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;