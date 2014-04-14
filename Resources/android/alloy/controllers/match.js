function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "match";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.matchWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "matchWin",
        title: "Your Matches"
    });
    $.__views.matchWin && $.addTopLevelView($.__views.matchWin);
    $.__views.__alloyId7 = Ti.UI.createButton({
        title: "Filter Results",
        width: "80%",
        id: "__alloyId7"
    });
    $.__views.matchWin.add($.__views.__alloyId7);
    $.__views.matchTable = Ti.UI.createTableView({
        id: "matchTable"
    });
    $.__views.matchWin.add($.__views.matchTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var collection = Alloy.createCollection("projects");
    collection.fetch({
        success: function() {
            var rows = [];
            _.each(collection.models, function(element) {
                console.log(element);
                var controller = Alloy.createController("matchRow", {
                    name: element.attributes.name,
                    tagline: element.attributes.tagline,
                    id: element.attributes.id
                });
                console.log("made controller");
                var view = controller.getView();
                console.log("made view");
                rows.push(view);
                console.log("pushed to row");
            });
            $.matchTable.setData(rows);
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;