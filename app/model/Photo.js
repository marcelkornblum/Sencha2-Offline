Ext.define('Offline.model.Photo', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'string' }
        ]
    }
});