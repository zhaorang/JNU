Ext.define('CPES_LC.view.Home',{
    extend: 'Ext.form.Panel',
    xtype: 'homepanel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.Img'
    ],
    config: {
        title: '主页',
        iconCls: 'home',
        cls: 'home',
        scrollable: true,
                
        items: [
            {
                docked: 'top',
                xtype:'titlebar',
                title:'用电状态',
                items:[{
                    iconCls: 'refresh',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    action: 'refresh'
                }]
            },
            {
                xtype: 'fieldset',
                title: '电表信息',
                title: '青教公寓.8号门.2层.239',
                //instructions: '青教公寓.8号门.2层.239',
                
                items: [
                    {
                        xtype: 'textfield',
                        name: 'remainQuantity',
                        label: '剩余金额',
                        value:'加载中...',
                        disabled:true
                    },
                    {
                        xtype: 'textfield',
                        name: 'currentQuantity',
                        label: '总用电量',
                        value:'加载中...',
                        disabled:true
                    },
                    {
                        xtype: 'textfield',
                        name: 'statusQuantity',
                        label: '开关状态',
                        value:'加载中...',
                        disabled:true
                    },
                    {
                        xtype: 'textfield',
                        name: 'alertQuantity',
                        label: '运行状态',
                        value:'加载中...',
                        disabled:true
                    }
                ]
            },
            {
                xtype: 'image',
                src: getUrlPrefix()+'72hour.fwp?OPCNodeID='+getAmmeterNodeId()+'&SearchDate='+Ext.Date.format(new Date(), 'Y-n-j'), 
                mode:'normal',
                width:'100%'
            }
        ]
    }
})
