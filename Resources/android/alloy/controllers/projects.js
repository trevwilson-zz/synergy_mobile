function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "projects";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.projectsWin = Ti.UI.createWindow({
        backgroundColor: "#274e82",
        layout: "vertical",
        id: "projectsWin",
        title: "All Projects"
    });
    $.__views.projectsWin && $.addTopLevelView($.__views.projectsWin);
    $.__views.projectTable = Ti.UI.createTableView({
        width: "90%",
        layout: "vertical",
        top: "10dp",
        id: "projectTable"
    });
    $.__views.projectsWin.add($.__views.projectTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var collection = Alloy.createCollection("projects");
    collection.fetch({
        success: function() {
            var rows = [];
            _.each(collection.models, function(element) {
                var controller = Alloy.createController("projectRow", {
                    name: element.attributes.name,
                    tagline: element.attributes.tagline,
                    id: element.attributes.id
                });
                var view = controller.getView();
                rows.push(view);
                view = Titanium.UI.createTableViewRow({
                    id: "spacer",
                    height: "10dp",
                    color: "transparent"
                });
                rows.push(view);
            });
            $.projectTable.setData(rows);
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;