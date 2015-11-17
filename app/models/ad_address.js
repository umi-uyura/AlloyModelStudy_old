exports.definition = {
  config: {
    columns: {
      'id': 'integer',
      'ken_id': 'integer',
      'town_id': 'integer',
      'zip': 'text',
      'office_flg': 'integer',
      'delete_flg': 'integer',
      'ken_name': 'text',
      'ken_furi': 'text',
      'city_name': 'text',
      'city_furi': 'text',
      'town_name': 'text',
      'town_furi': 'text',
      'town_memo': 'text',
      'kyoto_street': 'text',
      'block_name': 'text',
      'block_furi': 'text',
      'memo': 'text',
      'office_name': 'text',
      'office_furi': 'text',
      'office_address': 'text',
      'new_id': 'integer'
    },
    adapter: {
      type: 'sql',
      collection_name: 'ad_address',
      idAttribute: 'id',
      db_file: 'zenkoku.sqlite3'
    }
  },
  extendModel: function(Model) {
    _.extend(Model.prototype, {
      // extended functions and properties go here
    });

    return Model;
  },
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {
      // extended functions and properties go here

      // For Backbone v1.1.2, uncomment the following to override the
      // fetch method to account for a breaking change in Backbone.
      /*
       fetch: function(options) {
       options = options ? _.clone(options) : {};
       options.reset = true;
       return Backbone.Collection.prototype.fetch.call(this, options);
       }
       */
    });

    return Collection;
  }
};
