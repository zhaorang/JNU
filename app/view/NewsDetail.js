/*
 * Jiangnan University Mobile Campus
 * Copyright(c) 1902-2012, Jiangnan University
 * zhaorang@jiangnan.edu.cn
 * 
 * http://dev.jiangnan.edu.cn
 */

//三级栏目：校园新闻.学校新闻.[明细]
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
        styleHtmlContent: true,
        tpl: '<center>{title}</br>{publishedDate}　作者:{author}</center></br>{content}'
    }
});

