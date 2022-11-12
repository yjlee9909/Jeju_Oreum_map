const data = marker;
function initMap() {
    const jeju = { lat: 33.3616658, lng: 126.5204118 };
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 10,
            center: jeju,
        }
    );
}
// 페이지 변경해주기!! - 10페이지 뿌려주는 방법 고민해보기
fetch(
    "https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=uD0LdhujYQQfWxU1YCR6Qyn%2BIesISjKYwPNXK90c0GwfHJxYqrR13xA7T4vM84mXNrPuWMrxKr%2BqEuFXY9v3nQ%3D%3D"
)
.then((r) => r.json())
.then((r) => console.log(r));


