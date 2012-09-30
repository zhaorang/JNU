/*
 * Jiangnan University Mobile Campus
 * Copyright(c) 1902-2012, Jiangnan University
 * zhaorang@jiangnan.edu.cn
 * 
 * http://dev.jiangnan.edu.cn
 *
 * 主要功能模块：
 * 校园新闻(Press)
 *      学校新闻(News)、校园公告、学术活动、后勤动态;
 * 学校概况(Info)
 *      简介(Intro)、现任领导、结构、地图、风光;
 *  校园服务
 *      服务电话、电话查询、校历查询、校车时刻;
 *  应用平台
 *      校园服务、数字办公、信息管理
 */


Ext.define("JNU.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        layout: {
            animation: 'slide',
            type: 'card'
        },

        items: [
            {
                docked: 'top',
                xtype:'titlebar',
                title:'加载中...',
                items:[{
                    iconCls: 'info',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    action: 'login'
                }]
            }
            ,{
                xtype:'presspanel'
            }
            ,{
                xtype:'infopanel'
            }
            //,{
                //xtype:'servicepanel'
            //}
            //,{
                //xtype:'apppanel'
            //}
        ]
    }
});
