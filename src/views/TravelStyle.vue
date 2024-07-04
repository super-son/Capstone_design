<template>
  <div id="app">
    <Navbar />
    <main>
      <section class="hero">
        <div class="title-box">
          <h2>EVERYTHING ABOUT YOU</h2>
          <h1>Recommended travel destinations for you</h1>
        </div>
        <div class="content-box">
          <div class="content-header">
            <!-- <h2>추천 여행지</h2> -->
            <div class="TW3">당신의 맞춤 여행지 TOP 3</div>
          </div>
          <div class="recommendations">
            <ul>
              <li v-for="(place, index) in places" :key="index">
                <div class="rank">{{ index + 1 }}</div>
                <div class="place-info">
                  <h4>{{ place.name }}</h4>
                  <p>{{ place.address }}</p>
                </div>
              </li>
            </ul>
            <div class="map">
              <KakaoMap :places="places" />
            </div>
          </div>
        </div>
        <div class="hero-bottom">
            <div class="hero-bottom-header">
                <h2>추천 여행지로 동선까지 만들어 드릴까요?</h2>
                <h1>AI 여행 동선 만들기</h1>
            </div>
            <div class="hero-bottom-button-box">
                <button @click="callAI" class="recommendation-button">여행 동선 확인하기</button>
            </div>
        </div>
        <div class="gallery-container">
          <button @click="prev" v-show="currentIndex > 0 || currentIndex === 0" class="prev-button" :style="{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="gallery">
            <div class="word">이런 여행지는 어때요?😎</div>
            <div class="howabout">
              <img v-for="(image, index) in displayedImages" :src="image.src" :alt="image.alt" class="leftTop-img" :key="index">
            </div>
          </div>
          <button @click="next" v-show="currentIndex < images.length - displayedImages.length || currentIndex === images.length - displayedImages.length" class="next-button" :style="{ visibility: currentIndex === images.length - displayedImages.length ? 'hidden' : 'visible' }">
            <i class="fas fa-chevron-right"></i>
          </button >
        </div>
      </section>
      <!-- 로딩스피너 코드-->
    <div class="loading-wrap loading-wrap--js">
      <div class="loading-box">
        <div class="loading-spinner loading-spinner--js"></div>
        <p id="loadingMessage">맞춤 여행지를 찾는 중입니다...</p>
      </div>
    </div>
    <!-- 로딩스피너 코드-->
    </main>
  </div>
  
</template>

<script>
import Navbar from '../components/MusmaNav.vue';
import KakaoMap from './KakaoMap.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    KakaoMap
  },
  data() {
    return {
      places: [
        { name: '해운대 달맞이길', address: '부산광역시 해운대구 달맞이길 190' },
        { name: '일동한우', address: '부산광역시 해운대구 해운대해변로570번길 9' },
        { name: '해운대해수욕장', address: '부산광역시 해운대구 해운대해변로 264' }
      ],
      currentIndex: 0,
      images: [
        { src: require('../assets/how1.png'), alt: 'Description of image 1' },
        { src: require('../assets/how2.png'), alt: 'Description of image 2' },
        { src: require('../assets/how3.png'), alt: 'Description of image 3' },
        { src: require('../assets/how4.png'), alt: 'Description of image 4' },
        { src: require('../assets/how5.png'), alt: 'Description of image 5' },
        { src: require('../assets/how6.png'), alt: 'Description of image 6' },
        { src: require('../assets/how1.png'), alt: 'Description of image 7' },
        { src: require('../assets/how2.png'), alt: 'Description of image 8' }
      ],
    };
  },
  computed: {
    displayedImages() {
      return this.images.slice(this.currentIndex, this.currentIndex + 4);
    },
  },
  methods: { 
    callAI() {
      // 로직을 구현해서 새로운 추천 여행지를 불러옵니다.
      this.$router.push('/TravelRoute');
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    next() {
      if (this.currentIndex < this.images.length - 4) {
        this.currentIndex++;
      }
    },

    //로딩스피너 코드
    simulateLoading() {
      var loadingSpinner = document.querySelector(".loading-wrap--js");
      var loadingMessage = document.getElementById("loadingMessage");

      loadingSpinner.style.display = "flex";
      loadingMessage.textContent = "맞춤 여행지를 찾는 중입니다...";

      setTimeout(function () {
        loadingSpinner.style.display = "none";
        loadingMessage.textContent = "로딩 완료";
    }, 5000); // 로딩시간 조정
    }
    },

    mounted() {
      this.simulateLoading();
    },
    //로딩스피너 코드
}
</script>

<style scoped>

/* 로딩스피너 코드*/
.loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.loading-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8); /* 진한 반투명 배경 */
  padding: 20px;
  border-radius: 20px;
  margin-top: -100px; 
}
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 5px solid #1E90FF;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
  margin-top: 20px;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
#loadingMessage {
  font-size: 24px;
  color: white; /* 흰색 텍스트 */
  padding: 10px;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /*텍스트 그림자*/
}
 /* 로딩스피너 코드*/

/* 전체 스타일 */
main {
  padding: 20px;
  background: linear-gradient(to right, #cdf1ff, white 40%, white, #fefaee 60%);
}

.hero {
  margin-top: 120px;
  margin-bottom: 120px;
  margin-left: 350px;
  margin-right: 350px;
  text-align: center;
  background: linear-gradient(to bottom, rgba(248, 94, 159, 0.13), rgba(85, 68, 189, 0.13) 100%);
  box-shadow: 0 0 20px rgba(0,0,0,0.1); /* 그림자 추가 */
  border-radius: 100px; /* 모서리 둥글게 */
  display: flex;
  flex-direction: column;
  height: auto;
  /* align-items: center; */
  min-height: 100vh; /* 최소 높이 설정 */
}

.title-box {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 30px;
  color: #f974ac;
}

.TW3 {
  font-size: 40px; 
  font-Weight : bold;
  display: inline;
  box-shadow: inset 0 -7px 0 #f3c000;
  color: #000000;
}

h1 {
  font-size: 60px;
  margin: 10px 0;
}

.content-box {
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: space-between;
}

.content-header {
  width: 90%;
  margin-left:100px;
  text-align: left;
}

.hero-bottom {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/background.png'); /* 아이콘 이미지 경로 */
  background-position: center 10%; /* 배경 이미지를 중앙에 배치 */
  background-repeat: no-repeat; /* 배경 이미지 반복 없음 */
  background-size:26% auto; /* 배경 이미지 크기 조정 */
}

.recommendations {
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start;
  flex: 1 0 50%; */
  margin-top: 40px;
  /* width: 1000px; */
}

ul {
  list-style: none;
  padding: 0;
  
  margin-left: 100px;
  width: 30%;
  flex: 4.5; /* 4:6 비율 설정 */
}

li {
  background: #fff;
  width: 90%;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

li:nth-child(1) .rank {
  background: #FF5722; /* 첫 번째 li의 rank */
}

li:nth-child(2) .rank {
  background: #FACD49; /* 두 번째 li의 rank */
}

li:nth-child(3) .rank {
  background: #F85E9F; /* 세 번째 li의 rank */
}

.map {
  flex: 5.5; /* 4:6 비율 설정 */
  width: 100%;
  height:100%;
  z-index: 0;
}

.rank {
  color: #fff;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 32px;
  margin-left: 20px;
}

.place-info {
  text-align: left;
  font-size: 20px;
  margin-left: 20px;
}

.place-info p {
  color:#969598
}

.hero-bottom-button-box {
  width: 15%;
}

.recommendation-button {
  flex: 0 0 30%;
  width: 100%;
  height: 100px;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 10px 20px;
  background: #6b6bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

.recommendation-button:hover {
  background: #5959e6;
}

/* /////////////////////////////////////////////////////////// */

.container{
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative; /* 부모 요소에 position: relative; 추가 */
}

.gallery-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:200px;
  /* margin-left:100px; */
  margin-top: 50px; /* 필요한 경우 여백 조정
  position: relative; /* 부모 요소에 position: relative; 추가 */
}

.gallery {
  display: flex;
  flex-direction: column;
  margin: 0 10px; /* 양쪽에 여백 추가 */
  gap: 25px; /* word와 howabout 사이 여백 */
}

.word {
  font-size: 40px; 
  text-align: left;
  font-weight: bold;
}

.howabout {
  display: flex;
  justify-content: space-between; /* 각 사진들을 동일한 간격으로 배치 */
  width: 100%; /* 부모 요소인 .gallery에 가득 차도록 설정 */
  overflow-x: hidden; /* 넘치는 콘텐츠를 숨김 */
}

.leftTop-img {
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: 15px;
  width: 300px; /* 이미지 너비 고정 */
  height: 500px; /* 이미지 높이 고정 */
  object-fit: cover; /* 이미지 비율 유지 */
}

.prev-button, .next-button {
  background-color: #f28dab; /* 분홍색 배경 */
  border: none; /* 테두리 제거 */
  color: white; /* 아이콘 색상 흰색 */
  padding: 10px 20px; /* 패딩 조정 */
  cursor: pointer;
  border-radius: 50%; /* 둥근 모서리 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  font-size: 16px; /* 글꼴 크기 조정 */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* 전환 효과 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.prev-button:hover, .next-button:hover {
  background-color: #db5f92; /* 호버 시 더 진한 분홍색 배경 */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* 호버 시 그림자 강화 */
}

.prev-button:active, .next-button:active {
  background-color: #db5f92; /* 클릭 시 더 어두운 색상 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 클릭 시 그림자 약화 */
}

.prev-button {
  margin-right: 10px; /* 동일한 여백 적용 */
}

.next-button {
  margin-left: 10px; /* 동일한 여백 적용 */
}
</style>
