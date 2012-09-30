Ext.define('JNU.controller.News', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            news: 'newspanel'
            
        },
        control: {
            'newspanel list': {
                itemtap: 'showPost'
            }    
        }
    },

    showPost: function(list, index, element, record){
        this.getNews().push({
            xtype: 'panel',
            title: record.get('title'),
            //html: unescape(record.get('content')),
            html: record.get('content'),
            scrollable: true,
            styleHtmlContent: true
        });
    }
});
