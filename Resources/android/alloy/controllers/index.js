function Controller() {
    function goToMatchmaker() {
        Alloy.createController("match").getView().open();
    }
    function goToUsers() {
        Alloy.createController("users").getView().open();
    }
    function doOpen() {
        $.win.activity && $.win.activity.invalidateOptionsMenu();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Welcome to Synergy, a platform for collaboration",
        id: "__alloyId0"
    });
    $.__views.win.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Get Matched",
        width: "80%",
        id: "__alloyId1"
    });
    $.__views.win.add($.__views.__alloyId1);
    goToMatchmaker ? $.__views.__alloyId1.addEventListener("click", goToMatchmaker) : __defers["$.__views.__alloyId1!click!goToMatchmaker"] = true;
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Create a Project",
        width: "80%",
        id: "__alloyId2"
    });
    $.__views.win.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Find Users",
        width: "80%",
        id: "__alloyId3"
    });
    $.__views.win.add($.__views.__alloyId3);
    goToUsers ? $.__views.__alloyId3.addEventListener("click", goToUsers) : __defers["$.__views.__alloyId3!click!goToUsers"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.signedIn ? $.index.open() : Alloy.createController("splash").getView().open();
    __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    __defers["$.__views.__alloyId1!click!goToMatchmaker"] && $.__views.__alloyId1.addEventListener("click", goToMatchmaker);
    __defers["$.__views.__alloyId3!click!goToUsers"] && $.__views.__alloyId3.addEventListener("click", goToUsers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;