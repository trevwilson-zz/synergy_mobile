function Controller() {
    function goToProject() {
        Alloy.createController("project", {
            id: args.id
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "projectRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        top: "10dp",
        borderRadius: "3",
        backgroundColor: "white",
        layout: "vertical",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    goToProject ? $.__views.row.addEventListener("click", goToProject) : __defers["$.__views.row!click!goToProject"] = true;
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica"
        },
        id: "name"
    });
    $.__views.row.add($.__views.name);
    $.__views.tagline = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica"
        },
        id: "tagline"
    });
    $.__views.row.add($.__views.tagline);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.name;
    $.tagline.text = args.tagline;
    __defers["$.__views.row!click!goToProject"] && $.__views.row.addEventListener("click", goToProject);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;