/*
 * Jiangnan University Mobile Campus
 * Copyright(c) 1902-2012, Jiangnan University
 * zhaorang@jiangnan.edu.cn
 * 
 * http://dev.jiangnan.edu.cn
 */


Ext.define('JNU.view.Info',{
    extend: 'Ext.tab.Panel',
    xtype: 'infopanel',
    //requires:[
        //'Ext.TitleBar'
    //],

    config: {
        title: '学校概况',
        iconCls: 'home',
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
                xtype: 'intropanel',
            }
        ] 
    }
});
