Ext.define('JNU.view.NewsDetail',{
    extend: 'Ext.Panel',
    xtype: 'newsdetail',
    //requires:[
        //'Ext.dataview.List',
        //'Ext.data.proxy.JsonP',
        //'JNU.store.News'
    //],

    config: {
        title: '学校新闻',
        scrollable: 'vertical',
        tpl: '{firstName} {lastName}',
    }
});
