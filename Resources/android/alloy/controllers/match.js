function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "match";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.matchWin = Ti.UI.createWindow({
        backgroundColor: "#274e82",
        layout: "vertical",
        id: "matchWin",
        title: "Your Matches"
    });
    $.__views.matchWin && $.addTopLevelView($.__views.matchWin);
    $.__views.start = Ti.UI.createLabel({
        font: {
            fontSize: "24dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "30dp",
        text: "Sorry, no matches found.",
        id: "start"
    });
    $.__views.matchWin.add($.__views.start);
    $.__views.matchTable = Ti.UI.createTableView({
        width: "90%",
        layout: "vertical",
        top: "10dp",
        id: "matchTable"
    });
    $.__views.matchWin.add($.__views.matchTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var collection = Alloy.createCollection("matches");
    collection.fetch({
        success: function() {
            $.matchWin.remove($.start);
            var rows = [];
            _.each(collection.models, function(element) {
                console.log(element);
                var controller = Alloy.createController("projectRow", {
                    name: element.attributes[0].name,
                    tagline: element.attributes[0].tagline,
                    id: element.attributes[0].id
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