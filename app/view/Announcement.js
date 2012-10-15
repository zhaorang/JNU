/*
 * Jiangnan University Mobile Campus
 * Copyright(c) 1902-2012, Jiangnan University
 * zhaorang@jiangnan.edu.cn
 * 
 * http://dev.jiangnan.edu.cn
 */

//二级栏目：校园新闻.校园公告
Ext.define('JNU.view.Announcement',{
    extend: 'Ext.List',
    xtype: 'announcementlist',
    requires:[
        //'Ext.dataview.List',
        //'Ext.data.proxy.JsonP',
        'JNU.store.Announcement',
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],

    config: {
        title: '校园公告',
        store: {type:'announcement'},
        limit: 5,
        disableSelection: true,
    
        plugins:[
            {
                xclass: 'Ext.plugin.ListPaging',
                autoPaging: true,
                loadMoreText: '查看更多',
                noMoreRecordsText:'没有新记录了'
            },
            { 
                xclass: 'Ext.plugin.PullRefresh',
                pullRefreshText: '下拉可以刷新',
                releaseRefreshText: '松开即可刷新',
                loadingText: '正在刷新'
            }    
        ],
        emptyText: '<p class="no-searches">未加载到任何信息</p>',

        itemTpl: '{[Ext.String.ellipsis(values.title, 16)]}',
        onItemDisclosure: true
    }
});
