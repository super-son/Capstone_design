<template>
  <div class="main-container">
    <div class="content-container">
      <section class="left-panel">
        <h1><span class="highlight">Personalize</span> <br> your <br> journey</h1>
        <button @click="startJourney">Get Started</button>
      </section>
      <section class="right-panel">
        <div class="image-gallery">
          <div class="imageFlex1">
          <!-- 왼쪽 열의 이미지 -->
            <img src="../assets/gwanganlee.jpeg" alt="Description of image 1" class="leftTop-img">
            <img src="../assets/gamcheon.jpeg" alt="Description of image 1" class="leftBottom-img">
          </div>
          <!-- 오른쪽 열의 이미지 -->
          <div class="imageFlex2">
            <img src="../assets/centum.jpeg" alt="Description of image 3" class="right-img">
          </div>
        </div>
      </section>
    </div>
    <div class="footer-section">
      <form class = "submitForm" @submit.prevent="submitForm">
        <div class="relativeFormBox">
          <input class="formBoxInput" type="text" v-model="travelStyle" placeholder="끼룩에게 물어보세요" />
        </div>
      </form>
    </div>
    <div class="userInfo" v-if="showUserInfo" ref="userInfoSection">
        <user-info></user-info>
    </div>    
    <nav> 
      <router-link to="/UserInfo">1. User Info / </router-link>
      <router-link to="/SelectStyle">2. Select Style / </router-link>
      <router-link to="/TravelStyle">3. Travel Style / </router-link>
      <router-link to="/KakaoMap">4. Kakao Map / </router-link>
      <router-link to="/HowAbout">5. How About / </router-link>
      <router-link to="/TravelRoute">6. Travel Route / </router-link>
    </nav>
  </div>
</template>



<script>
import UserInfo from './UserInfo.vue';

export default {
  name: 'SelectPage', // [추가]name
  components: {
    UserInfo
  },
  data() {
    return {
      userAge: '',
      visitType: '',
      startDate: '',
      endDate: '',
      travelStyle: '',
      showUserInfo: false,

    };
  },
  methods: {
    startJourney() {
      // Start the journey - navigate to another view or perform an action
      this.showUserInfo = true;
      this.$nextTick(() => {
        this.scrollToUserInfo();
      });
    },
    scrollToUserInfo() {
      const userInfoSection = this.$refs.userInfoSection;
      if (userInfoSection) {
        userInfoSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    goToLoginPage() {
      // Navigate to login page
      this.$router.push('/login');
    },
    goToSignUpPage() {
      // Navigate to sign up page
      this.$router.push('/signup');
    },
    submitForm() {
      // Handle the form submission
      alert('Form Submitted!');
    }
  }
};
</script>

<style scoped>
.nn{
  margin-top : 400px;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(to right, #cdf1ff, white 40%, white, #fefaee 60%);
}

.content-container {
  display: flex;
  flex: 9; /* 전체 높이의 90% */
  box-sizing: border-box;
}

.left-panel {
  flex: 4;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(to right, #cdf1ff, white); 왼쪽에서 오른쪽으로 분홍색에서 노란색으로 변하는 그라데이션 */
  text-align: left;
  height: auto; /* 전체 높이를 부모 컨테이너와 동일하게 설정 */
}

.left-panel h1 {
  font-size: 60px; /* h1 태그의 기본 폰트 크기 */
  color: #333; /* 기본 텍스트 색상 */
}

.highlight {
  color: #e36499; /* 강조 텍스트 색상 */
  font-size: 60px; /* 강조 텍스트 크기 */
}

.right-panel {
  flex: 6;
  display: flex;
  padding: 20px;
  justify-content: center;
  /* background: linear-gradient(to right,white, #fefaee); 왼쪽에서 오른쪽으로 분홍색에서 노란색으로 변하는 그라데이션 */
}

.right-panel .image-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 개의 열로 나눔 */
  grid-template-rows: auto; /* 행 높이 자동 조절 */
  height: 100%; /* 컨테이너의 전체 높이 사용 */
  grid-gap: 10px; /* 그리드 사이의 간격 */
  padding: 10px;
  background-image: url('../assets/background.png'); /* 아이콘 이미지 경로 */
  background-position: center 10%; /* 배경 이미지를 중앙에 배치 */
  background-repeat: no-repeat; /* 배경 이미지 반복 없음 */
  background-size: 100% auto; /* 배경 이미지 크기 조정 */
}

.right-panel .leftTop-img {
  align-self: end;
}

.imageFlex1 {
  display: grid;
  justify-items:end;
  row-gap: 50px;
  height: auto;
}

.imageFlex2 {
  display: grid;
  height: auto;
  align-items: center;
  padding-left: 30px;
}

.right-panel .right-img {
  grid-column: 2; /* 두 번째 열에 배치 */
  grid-row: 1 / span 2; /* 첫 번째 행에서 시작해서 2개 행을 차지 */
}

.right-panel img {
  width: 100%; /* 컨테이너에 맞게 이미지 크기 조정 */
  height: auto; /* 이미지의 비율을 유지 */
  border-radius: 10px; /* 이미지의 모서리를 둥글게 */
}

.footer-section {
  flex: 1; /* 전체 높이의 10% */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
}

.footer-section .submitForm {
  display: flex;
  width: 50% ;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.footer-section .submitForm .relativeFormBox {
  display: flex;
  width: 80% ;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.footer-section .submitForm .formBoxInput {
  font-size: 20px;
  padding-left: 30px; 
}

.userInfo {
  width: 100%; /* 전체 너비를 사용 */
  min-height: 65vh; /* 최소 높이 설정 */
  padding: 20px; /* 패딩 추가 */
  box-sizing: border-box; /* 패딩과 보더가 너비에 포함되도록 설정 */
  display: flex; /* Flexbox 레이아웃 사용 */
  justify-content: center; /* 가로 방향으로 중앙 정렬 */
  overflow: auto; /* 내부 콘텐츠가 넘칠 경우 스크롤바 생성 */
}

input[type="text"], input[type="date"] {
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  width: 70%;
  height: 35%;
  border-radius: 10px;
}

button {
  width: 40%;
  background-color: #f28dab; /* 버튼의 배경색 */
  color: white; /* 버튼의 글자색 */
  padding: 15px 32px; /* 내부 여백 */
  font-size: 24px; /* 글자 크기 */
  border: none; /* 테두리 제거 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  cursor: pointer; /* 마우스 오버시 커서 변경 */
  font-weight: bold; /* 글자 굵게 */
  transition: background-color 0.3s; /* 호버 효과 시간 */
}

button:hover {
  background-color: #db5f92; /* 호버 시 배경색 변경 */
}
</style>
