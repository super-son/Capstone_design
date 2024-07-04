<template>
  <div class="map-box">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const mapContainer = this.$refs.map;
      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 초기 중심 좌표
        level: 4 // 지도의 확대 레벨 (숫자가 클수록 멀리서 보임)
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      const geocoder = new kakao.maps.services.Geocoder();

      const addresses = [
        { address: '부산 수영구 광안해변로 219', info: '광안리 해수욕장' },
        { address: '부산광역시 기장군 용궁길 86', info: '해동 용궁사' },
        { address: '부산광역시 해운대구 센텀남대로 35', info: '신세계백화점 센텀시티' }
      ];

      const bounds = new kakao.maps.LatLngBounds();

      addresses.forEach(({ address, info }) => {
        geocoder.addressSearch(address, function(result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new kakao.maps.Marker({
              map: map,
              position: coords
            });

            const infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${info}</div>`
            });
            infowindow.open(map, marker);

            bounds.extend(coords);
            map.setBounds(bounds);
          }
        });
      });
    }
  }
}
</script>

<style scoped>
.map-box {
    display: flex;
    justify-content: center;
    align-content: center;
}

.map {
    width: 90%; 
    height: 570px;
    border-radius: 20px;
}
</style>