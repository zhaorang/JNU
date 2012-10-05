Ext.define('JNU.controller.News', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            news: 'mainpanel'
        },
        control: {
            'newslist': {
                disclose: 'showDetail'
            }    
        }
    },

    showDetail: function(list, record){
        this.getNews().push({
            xtype: 'newsdetail',
            data: record.data
        });
    }
});
