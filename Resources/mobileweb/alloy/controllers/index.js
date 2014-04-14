function Controller() {
    function goToMatchmaker() {
        Alloy.createController("match").getView().open();
    }
    function goToUsers() {
        Alloy.createController("users").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Synergy",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Welcome to Synergy, a platform for collaboration",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Get Matched",
        width: "80%",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    goToMatchmaker ? $.__views.__alloyId2.addEventListener("click", goToMatchmaker) : __defers["$.__views.__alloyId2!click!goToMatchmaker"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Create a Project",
        width: "80%",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Find Users",
        width: "80%",
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    goToUsers ? $.__views.__alloyId4.addEventListener("click", goToUsers) : __defers["$.__views.__alloyId4!click!goToUsers"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.signedIn ? $.index.open() : Alloy.createController("splash").getView().open();
    __defers["$.__views.__alloyId2!click!goToMatchmaker"] && $.__views.__alloyId2.addEventListener("click", goToMatchmaker);
    __defers["$.__views.__alloyId4!click!goToUsers"] && $.__views.__alloyId4.addEventListener("click", goToUsers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;