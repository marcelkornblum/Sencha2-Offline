Ext.define("Offline.store.onlineStore", {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: "Offline.model.Photo",
        storeId: "onlineStore",
        proxy: {
            type: "jsonp",
            url: 'http://query.yahooapis.com/v1/public/yql?format=json&q=' +
                escape(
                    'select * from flickr.photos.search where api_key="49aef0dda7fee62cc93bfcefa0d817c8" and text="hello" limit 10'
                ),
            reader: {
                type: 'json',
                rootProperty: 'query.results.photo'
            }
        },
        autoLoad: true
    }
});