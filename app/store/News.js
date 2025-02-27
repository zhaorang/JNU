Ext.define('JNU.store.News', {
    extend: 'Ext.data.Store',
    
    config:{
        model: 'JNU.model.News',
        autoLoad: true,
        pageSize: 5,

        proxy:{
            //type: 'jsonp',
            type: 'ajax',
            url:'feed/getNews.json',
   
            pageParam: 'page',
            limitParam: 'rpp',

            extraParams: {
                q: 'news'
            },

            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
}
});

