<template>
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
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  computed: {
    displayedImages() {
      return this.images.slice(this.currentIndex, this.currentIndex + 4);
    }
  },
  methods: {
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    next() {
      if (this.currentIndex < this.images.length - 4) {
        this.currentIndex++;
      }
    }
  }
};
</script>

<style scoped>
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
  margin-top: 300px; /* 필요한 경우 여백 조정 */
  position: relative; /* 부모 요소에 position: relative; 추가 */
}

.gallery {
  display: flex;
  flex-direction: column;
  margin: 0 10px; /* 양쪽에 여백 추가 */
  gap: 15px; /* word와 howabout 사이 여백 */
}

.word {
  font-size: 40px; 
  text-align: left;
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
  background-color: #ff69b4; /* 분홍색 배경 */
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
  background-color: #ff1493; /* 호버 시 더 진한 분홍색 배경 */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* 호버 시 그림자 강화 */
}

.prev-button:active, .next-button:active {
  background-color: #c71585; /* 클릭 시 더 어두운 색상 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 클릭 시 그림자 약화 */
}

.prev-button {
  margin-right: 10px; /* 동일한 여백 적용 */
}

.next-button {
  margin-left: 10px; /* 동일한 여백 적용 */
}

</style>
