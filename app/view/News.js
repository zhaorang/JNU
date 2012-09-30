Ext.define('JNU.view.News',{
    extend: 'Ext.navigation.View',
    xtype: 'newspanel',
    requires:[
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],

    config: {
        title: '学校新闻',
        //iconCls: 'bookmarks',
        //scrollable: true,
        
        items: {
            xtype: 'list',
            itemTpl: '{title}',
            title: '学校新闻',

            store: {
                autoLoad: true,
                fields: ['title', 'author', 'content'],
                proxy:{
                    //type: 'jsonp',
                    type: 'ajax',
                    url: 'app/profile/getNews.json',
                    
                    reader: {
                        type: 'json',
                        rootProperty: 'responseData.feed.entries'
                    }
                }
            }
        }
    }
})
