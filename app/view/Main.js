Ext.define('Offline.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        title: '',
        fullscreen: true,
        tabBar: {
            ui: 'light',
            layout: {
                pack: 'center'
            }
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Hello World',
            },
            {
                xtype: 'hello',
            },
            {
                xtype: 'world',
            },
            {
                xtype: 'gallerypanel',
            }
        ]
    }
});
