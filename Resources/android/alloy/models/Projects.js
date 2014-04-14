exports.definition = {
    config: {
        debug: 1,
        URL: "http://newsynergy.herokuapp.com/projects.json",
        type: "GET",
        adapter: {
            type: "restapi",
            collection_name: "projects",
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

model = Alloy.M("projects", exports.definition, []);

collection = Alloy.C("projects", exports.definition, model);

exports.Model = model;

exports.Collection = collection;