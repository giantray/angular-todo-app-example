angular.module('giantray.util',[]);

angular.module('giantray.util').factory('localStorageSvr',function(){
   var util = {};

    util.getItem = function(key){
        return window.localStorage? localStorage.getItem(key): Cookie.read(key);
    };

    util.setItem = function(key,val){
        if (window.localStorage) {
            localStorage.setItem(key, val);
        } else {
            Cookie.write(key, val);
        }
    }

    return util;
});

angular.module('giantray.util').filter('prettyDate',function($filter){
    return function (time) {

        var date = new Date(time || ""),
            diff = (((new Date()).getTime() - date.getTime()) / 1000),
            day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0) return;

        if (day_diff >= 31) return $filter('date')(date.getTime(), 'yyyy-MM-dd HH:mm:ss ');

        return day_diff == 0 && (
            diff < 60 && "刚刚" || diff < 120 && "1 分钟之前" || diff < 3600 && Math.floor(diff / 60) + " 分钟之前" || diff < 7200 && "1 小时之前" || diff < 86400 && Math.floor(diff / 3600) + " 小时之前") || day_diff == 1 && "昨天" || day_diff < 7 && day_diff + " 天之前" || day_diff < 31 && Math.ceil(day_diff / 7) + " 星期之前";
    }
})
