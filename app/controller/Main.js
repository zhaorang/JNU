Ext.define('JNU.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainpanel: 'mainpanel',
            titlebar: 'mainpanel titlebar' 
        },
        control: {
            'mainpanel':{
                activeitemchange: 'changeTitle'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        //系统初始化时设置标题栏文字
        this.getTitlebar().setTitle(this.getMainpanel().getActiveItem().getTitle());
    },

    changeTitle: function(tabpanel, value, oldValue, eOpts){
        this.getTitlebar().setTitle(value.tab.getTitle());
    }
});
