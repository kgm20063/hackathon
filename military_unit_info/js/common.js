const mapContainer = document.getElementById('map');
const tabs = document.querySelectorAll(".tabMenu li");
let moveLatLon;

let mapOptions = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.776383, 126.843730), //지도의 중심좌표.
  level: 5 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

function moveMap() {
  map.panTo(moveLatLon);
}

function corps1() { // 제1보병사단
  moveLatLon = new kakao.maps.LatLng(37.776383, 126.843730);
  
  moveMap();
}
function corps2() { // 제3보병사단
  moveLatLon = new kakao.maps.LatLng(38.243550, 127.414048);
  moveMap();
}
function corps3() { // 제5보병사단
  moveLatLon = new kakao.maps.LatLng(38.023487, 127.109811);
  moveMap();
}
function corps4() { // 제6보병사단
  moveLatLon = new kakao.maps.LatLng(38.242165, 127.250003);
  moveMap();
}
function corps5() { // 제7보병사단
  moveLatLon = new kakao.maps.LatLng(38.138561, 127.685901);
  moveMap();
}
function corps6() { // 제9보병사단
  moveLatLon = new kakao.maps.LatLng(37.702755, 126.796993);
  moveMap();
}
function corps7() { // 제12보병사단
  moveLatLon = new kakao.maps.LatLng(38.114501, 128.196289);
  moveMap();
}
function corps8() { // 제15보병사단
  moveLatLon = new kakao.maps.LatLng(38.054844, 127.525250);
  moveMap();
}
function corps9() { // 제17보병사단
  moveLatLon = new kakao.maps.LatLng(37.476609, 126.746114);
  moveMap();
}
function corps10() { // 제21보병사단
  moveLatLon = new kakao.maps.LatLng(38.084144, 127.975266);
  moveMap();
}
function corps11() { // 제22보병사단
  moveLatLon = new kakao.maps.LatLng(38.284153, 128.490796);
  moveMap();
}
function corps12() { // 제25보병사단
  moveLatLon = new kakao.maps.LatLng(37.890193, 126.954015);
  moveMap();
}
function corps13() { // 제28보병사단
  moveLatLon = new kakao.maps.LatLng(37.911247, 127.014179);
  moveMap();
}

const positions = [
  {
    title: '제1보병사단',
    latlng: new kakao.maps.LatLng(37.776383, 126.843730)
  },
  {
    title: '제3보병사단',
    latlng: new kakao.maps.LatLng(38.243550, 127.414048)
  },
  {
    title: '제5보병사단',
    latlng: new kakao.maps.LatLng(38.023487, 127.109811)
  },
  {
    title: '제6보병사단',
    latlng: new kakao.maps.LatLng(38.242165, 127.250003)
  },
  {
    title: '제7보병사단',
    latlng: new kakao.maps.LatLng(38.138561, 127.685901)
  },
  {
    title: '제9보병사단',
    latlng: new kakao.maps.LatLng(37.702755, 126.796993)
  },
  {
    title: '제12보병사단',
    latlng: new kakao.maps.LatLng(38.114501, 128.196289)
  },
  {
    title: '제15보병사단',
    latlng: new kakao.maps.LatLng(38.054844, 127.525250)
  },
  {
    title: '제17보병사단',
    latlng: new kakao.maps.LatLng(37.476609, 126.746114)
  },
  {
    title: '제21보병사단',
    latlng: new kakao.maps.LatLng(38.084144, 127.975266)
  },
  {
    title: '제22보병사단',
    latlng: new kakao.maps.LatLng(38.284153, 128.490796)
  },
  {
    title: '제25보병사단',
    latlng: new kakao.maps.LatLng(37.890193, 126.954015)
  },
  {
    title: '제28보병사단',
    latlng: new kakao.maps.LatLng(37.911247, 127.014179)
  },
];

for(let i = 0; i<positions.length; i++) {
  let marker = new kakao.maps.Marker({
    map: map,
    position: positions[i].latlng,
    title: positions[i].title
  });
};

tabs.forEach((el, idx) => {
  el.addEventListener("click", () => {
    if(idx == 0) corps1();
    if(idx == 1) corps2();
    if(idx == 2) corps3();
    if(idx == 3) corps4();
    if(idx == 4) corps5();
    if(idx == 5) corps6();
    if(idx == 6) corps7();
    if(idx == 7) corps8();
    if(idx == 8) corps9();
    if(idx == 9) corps10();
    if(idx == 10) corps11();
    if(idx == 11) corps12();
    if(idx == 12) corps13();
  })
});