user_id = require("alloy").Globals.user_id;

exports.definition = {
    config: {
        debug: 1,
        URL: "http://newsynergy.herokuapp.com/match/" + user_id + ".json",
        type: "GET",
        adapter: {
            type: "restapi",
            collection_name: "matches",
            idAttribute: "id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("matches", exports.definition, []);

collection = Alloy.C("matches", exports.definition, model);

exports.Model = model;

exports.Collection = collection;