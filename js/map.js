// map1-SBS컴퓨터아트학원 종로
var container = document.getElementById('map1');
var option = {
    center: new kakao.maps.LatLng(37.58424, 127.00203),
    level: 3   
};

var map = new kakao.maps.Map(container, option);
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.58424, 127.00203)
});
marker.setMap(map);

// map2-SBS컴퓨터아트학원 서초
var container2 = document.getElementById('map2');
var option2 = {
    center: new kakao.maps.LatLng(37.55730, 126.92512),
    level: 3   
};

var map2 = new kakao.maps.Map(container2, option2);
var marker2 = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.55730, 126.92512)
});
marker2.setMap(map2);