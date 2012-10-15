Ext.define('JNU.controller.Announcement', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainpanel: 'mainpanel'
        },
        control: {
            'announcementlist': {
                disclose: 'showAnnouncementDetail',
                //itemtap: 'showDetail', 
            }    
        }
    },

    showAnnouncementDetail: function(list, record){
        this.getMainpanel().push({
            xtype: 'announcementdetail',
            data: record.data
        });
    }
});
