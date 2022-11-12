let dataList = [];
async function initMap() {
    
    // 데이터 불러오기
    let perPageNum = 10;
    for (let pageNum = 1; pageNum <= perPageNum ; pageNum++) {

        const response = await fetch(
            `https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=${pageNum}&perPage=10&serviceKey=uD0LdhujYQQfWxU1YCR6Qyn%2BIesISjKYwPNXK90c0GwfHJxYqrR13xA7T4vM84mXNrPuWMrxKr%2BqEuFXY9v3nQ%3D%3D`)
        .then(data => data.json())
        .then (data => {return data});
        dataList.push(...response.data);
    }
    console.log(dataList);

    // dataList에서 위도 경도 뽑아서 출력하기

    // 마커 찍기

    const jeju = { lat: 33.3616658, lng: 126.5204118 };
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 10,
            center: jeju,
        }
    );

    for (let idx = 0; idx < dataList.length; idx++) {
        let marker = new google.maps.Marker({
            position: {lat: parseFloat(dataList[idx].위도), lng: parseFloat(dataList[idx].경도)},
            map: map,
        });
    }
    

}





