/*
 * Jiangnan University Mobile Campus
 * Copyright(c) 1902-2012, Jiangnan University
 * zhaorang@jiangnan.edu.cn
 * 
 * http://dev.jiangnan.edu.cn
 */

Ext.define('JNU.view.Press',{
    extend: 'Ext.tab.Panel',
    xtype: 'presspanel',
    requires:[
        'JNU.view.News',
        'JNU.view.NewsDetail'
    ],

    config: {
        title: '校园新闻',
        iconCls: 'bookmarks',
        activeItem: 0,
        tabBar:{
            docked: 'top',
            ui: 'neutral',
            layout: {
                pack: 'center'
            }
        },
        
        items:[
            { 
                xtype: 'newslist',
            }
        ] 
    }
});
