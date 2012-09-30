Date.dayNames = [
    '日',
    '一',
    '二',
    "三",
    "四",
    "五",
    "六"
];

Date.monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
];

Date.monthNumbers = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11
};

Date.getShortMonthName = function(month) {
    return Date.monthNames[month].substring(0, 3);
};

Date.getShortDayName = function(day) {
    return Date.dayNames[day].substring(0, 3);
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.parseCodes.S.s = '(?:st|nd|rd|th)';

if (Ext.picker.Picker){
    Ext.override(Ext.picker.Picker, {
        doneText: '完成'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': '天',
        'monthText': '月',
        'yearText': '年',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': '返回',
        'loadingText': '加载中...',
        'emptyText': '没有数据'
    });
}

if(Ext.util.Format){
    //Ext.util.Format.defaultDateFormat = 'm/d/Y';
    Ext.util.Format.defaultDateFormat = 'Y年m月d日';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = '确定';
    Ext.MessageBox.CANCEL.text = '取消';
    Ext.MessageBox.YES.text = '是';
    Ext.MessageBox.NO.text = '否';
}
