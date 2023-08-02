const mapContainer = document.getElementById('map');
const tabs = document.querySelectorAll(".tabMenu li");
let moveLatLon;

let = mapOptions = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.776383, 126.843730), //지도의 중심좌표.
  level: 5 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

let markerPosition;
markerPosition = new kakao.maps.LatLng(37.776383, 126.843730)
markerPosition = new kakao.maps.LatLng(38.243550, 127.414048)
const marker = new kakao.maps.Marker({
  position: markerPosition
});
marker.setMap(map);

const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

function moveMap() {
  map.panTo(moveLatLon);
}

function corps1() {
  moveLatLon = new kakao.maps.LatLng(37.776383, 126.843730);
  moveMap();
}
function corps2() {
  moveLatLon = new kakao.maps.LatLng(38.243550, 127.414048);
  moveMap();
}
function corps3() {
  moveLatLon = new kakao.maps.LatLng(38.023487, 127.109811);
  moveMap();
}
function corps4() {
  moveLatLon = new kakao.maps.LatLng(38.242165, 127.250003);
  moveMap();
}

tabs.forEach((el, idx) => {
  el.addEventListener("click", () => {
    if(idx == 0) corps1(); 
    if(idx == 1) corps2();
    if(idx == 2) corps3();
    if(idx == 3) corps4();
    if(idx == 4) corps3();
    if(idx == 5) corps3();
    if(idx == 6) corps3();
    if(idx == 7) corps3();
    if(idx == 8) corps3();
    if(idx == 9) corps3();
    if(idx == 10) corps3();
    if(idx == 11) corps3();
    if(idx == 12) corps3();
  })
});