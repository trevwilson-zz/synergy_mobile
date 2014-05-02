function Controller() {
    function goToMatchmaker() {
        Alloy.createController("match").getView().open();
    }
    function goToUsers() {
        Alloy.createController("users").getView().open();
    }
    function goToProjects() {
        Alloy.createController("projects").getView().open();
    }
    function logout() {
        Alloy.Globals.user_id = null;
        Alloy.createController("splash").getView().open();
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
        backgroundColor: "#274e82",
        layout: "vertical",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
    $.__views.start = Ti.UI.createLabel({
        font: {
            fontSize: "24dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "30dp",
        text: "Welcome to Synergy, a platform for collaboration",
        id: "start",
        width: "80%"
    });
    $.__views.win.add($.__views.start);
    $.__views.__alloyId0 = Ti.UI.createButton({
        backgroundColor: "#2ba6cb",
        borderRadius: "25",
        top: "20dp",
        title: "Get Matched",
        width: "80%",
        id: "__alloyId0"
    });
    $.__views.win.add($.__views.__alloyId0);
    goToMatchmaker ? $.__views.__alloyId0.addEventListener("click", goToMatchmaker) : __defers["$.__views.__alloyId0!click!goToMatchmaker"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica"
        },
        textAlign: Ti.UI.TEXT_ALIGN_CENTER,
        top: "10dp",
        text: "or",
        id: "__alloyId1"
    });
    $.__views.win.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        backgroundColor: "#2ba6cb",
        borderRadius: "25",
        top: "10dp",
        title: "Find Users",
        width: "70%",
        id: "__alloyId2"
    });
    $.__views.win.add($.__views.__alloyId2);
    goToUsers ? $.__views.__alloyId2.addEventListener("click", goToUsers) : __defers["$.__views.__alloyId2!click!goToUsers"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        backgroundColor: "#2ba6cb",
        borderRadius: "25",
        top: "10dp",
        title: "View All Projects",
        width: "70%",
        id: "__alloyId3"
    });
    $.__views.win.add($.__views.__alloyId3);
    goToProjects ? $.__views.__alloyId3.addEventListener("click", goToProjects) : __defers["$.__views.__alloyId3!click!goToProjects"] = true;
    $.__views.__alloyId4 = Ti.UI.createButton({
        backgroundColor: "#2ba6cb",
        borderRadius: "25",
        top: "10dp",
        title: "Log Out",
        width: "70%",
        id: "__alloyId4"
    });
    $.__views.win.add($.__views.__alloyId4);
    logout ? $.__views.__alloyId4.addEventListener("click", logout) : __defers["$.__views.__alloyId4!click!logout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.signedIn ? $.index.open() : Alloy.createController("splash").getView().open();
    __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    __defers["$.__views.__alloyId0!click!goToMatchmaker"] && $.__views.__alloyId0.addEventListener("click", goToMatchmaker);
    __defers["$.__views.__alloyId2!click!goToUsers"] && $.__views.__alloyId2.addEventListener("click", goToUsers);
    __defers["$.__views.__alloyId3!click!goToProjects"] && $.__views.__alloyId3.addEventListener("click", goToProjects);
    __defers["$.__views.__alloyId4!click!logout"] && $.__views.__alloyId4.addEventListener("click", logout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;