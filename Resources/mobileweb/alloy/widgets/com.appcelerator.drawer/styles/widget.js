function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.drawer/" + s : s.substring(0, index) + "/com.appcelerator.drawer/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "#274e82",
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        font: {
            fontFamily: "Helvetica"
        }
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Button",
    style: {
        backgroundColor: "#2ba6cb",
        borderRadius: "25"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TableView",
    style: {
        width: "90%",
        layout: "vertical",
        top: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "h2",
    style: {
        color: "white",
        font: {
            fontSize: "24dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "h1",
    style: {
        color: "white",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "form-label",
    style: {
        color: "white",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "drawer",
    style: {
        left: 0,
        right: 0,
        bottom: -48,
        width: Ti.UI.FILL,
        height: 64,
        layout: "vertical",
        opacity: .75
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "pulltab",
    style: {
        backgroundImage: "/images/com.appcelerator.drawer/PullTabUp.png",
        center: {
            x: "50%"
        },
        top: 0,
        width: 48,
        height: 16,
        accessibilityLabel: "Drawer",
        accessibilityValue: "Closed",
        accessibilityHint: "Click to open the drawer"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "buttonbar",
    style: {
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: 48,
        backgroundColor: "black",
        layout: "horizontal"
    }
} ];