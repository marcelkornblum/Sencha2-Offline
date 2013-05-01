Ext.define('Offline.view.Gallery', {
    extend: 'Ext.navigation.View',
    xtype: 'gallerypanel',
    requires: ['Ext.dataview.List'],
    config: {
    	title: 'Gallery',
    	navigationBar: false,
        baseCls: ['gallery'],
        items: [
        	{
		        xtype: 'list',
		        store: 'onlineStore',
		        itemTpl:'{title}',
		        fullscreen: true
		    }
	    ]
    }
});