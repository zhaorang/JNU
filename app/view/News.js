Ext.define('JNU.view.News',{
    extend: 'Ext.List',
    xtype: 'newslist',
    requires:[
        //'Ext.dataview.List',
        //'Ext.data.proxy.JsonP',
        'JNU.store.News'
    ],

    config: {
        title: '学校新闻',
        iconCls: 'bookmarks',
        //scrollable: true,
        itemTpl: '{firstName} {lastName}',
        store: 'News',
        onItemDisclosure: true
    }
});
