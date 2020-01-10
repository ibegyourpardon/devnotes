//是否允许公众号获取地理位置是一次性的;
var GLat;
var GLng;
var GProvince;
var GCity;
var GDistrict;
wx.getLocation({
    type: 'gcj02', //wgs84 或 gcj02
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
 
 
 
 
        GLat = latitude;       //将纬度赋值给全局参数
        GLng = longitude;      //将经度赋值给全局参数
 
 
        var LATLNG_MJKD = longitude + ',' + latitude;  //调用百度转换接口时所需的参数;
 
 
        //将js-sdk转换为百度坐标
        var urlgetbd = 'http://api.map.baidu.com/geoconv/v1/?coords=' + LATLNG_MJKD + '&from=1&to=5&ak='+AK秘钥;
        var lng;
        var lat;
        $.get(urlgetbd, function (data) {
            if (data.status === 0) {
                lng = data.result[0].x;//经度
                lat = data.result[0].y;//纬度
 
 
                var MJKD_LATLNG = lat + ',' + lng;     //调用百度地图接口时所需的参数;
                //alert("调用百度地图api的参数" + MJKD_LATLNG);
                var url = 'http://api.map.baidu.com/geocoder/v2/?ak='+AK秘钥+'&callback=renderReverse&location=' + MJKD_LATLNG + '&output=json&pois=1';
                $.get(url, function (data) {
                    //alert(url);
                    //alert(data.status);
                    if (data.status === 0) {
                        //alert("经纬度："+ GLat +"，"+ GLng + data.result.addressComponent.province + data.result.addressComponent.city + data.result.addressComponent.district);
 
 
                        var province = data.result.addressComponent.province;      //省名
                        var city = data.result.addressComponent.city;              //城市名
                        var district = data.result.addressComponent.district;      //区县名
 
//将获取到的参数传到MVC控制台方法中,
                        var myData = { Lng: longitude, Lat: latitude, Province: province, City: city, District: district, };
                        $.get("/Smart2017/InsertLocationInfo", myData, function (result) {
                            // alert("添加成功");
                        });
                    }
                }, 'jsonp');
            }
        }, 'jsonp');
 
 
    },
    fail: function (res) {
        //alert('获取位置失败');
    }
});
