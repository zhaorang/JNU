/*
 * Jiangnan University Mobile Campus
 * Copyright(c) 1902-2012, Jiangnan University
 * zhaorang@jiangnan.edu.cn
 * 
 * http://dev.jiangnan.edu.cn
 */

//三级栏目：校园新闻.校园公告.[明细]
Ext.define('JNU.view.AnnouncementDetail',{
    extend: 'Ext.Panel',
    xtype: 'announcementdetail',
    //requires:[
        //'Ext.dataview.List',
        //'Ext.data.proxy.JsonP',
        //'JNU.store.News'
    //],

    config: {
        title: '校园公告',
        scrollable: 'vertical',
        styleHtmlContent: true,
        tpl: '<center>{title}</br>{publishedDate}　作者:{author}</center></br>{content}'
    }
});
