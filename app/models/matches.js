user_id = require('alloy').Globals.user_id;

exports.definition = {
    config: {
        debug: 1,
        URL: 'http://newsynergy.herokuapp.com/match/' + user_id + '.json',
        type: 'GET',
        adapter: {
            type: "restapi",
            collection_name: "matches",
            idAttribute: "id"
        }
    },      
    extendModel: function(Model) {      
        _.extend(Model.prototype, {
            // extended functions and properties go here
 
            // Implement the comparator method to sort the collection
            // comparator: function(project) {
                // return project.get('Name');
            // }
        });
 
        return Model;
    },
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {
            // extended functions and properties go here
        }); 
        return Collection;
    }
};