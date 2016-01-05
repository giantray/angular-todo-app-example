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
