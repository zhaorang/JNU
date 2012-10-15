Ext.define('JNU.store.Announcement', {
    extend: 'Ext.data.Store',
    alias  : 'store.announcement',
    
    config:{
        model: 'JNU.model.News',
        autoLoad: true,
        pageSize: 5,

        proxy:{
            //type: 'jsonp',
            type: 'ajax',
            url:'feed/getAnnouncement.json',
   
            pageParam: 'page',
            limitParam: 'rpp',

            extraParams: {
                q: 'announcement'
            },

            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
}
});
