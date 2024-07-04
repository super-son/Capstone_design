<template>
  <div class="survey-container">
    <div class="main text">
      <div class="main_text1">EVERYTHING ABOUT YOU</div>
      <div class="main_text2">Choose your travel style!</div>
    </div>
    <div class="likert-question" v-for="(question, index) in questions" :key="index">
      <div class="images-container">
        <img :src="question.agreeImage" alt="Agree Image" class="question-image">
        <img :src="question.disagreeImage" alt="Disagree Image" class="question-image">
      </div>
      <div class="likert-options">
        <div class="likert-label" v-for="(option, optionIndex) in options" :key="optionIndex" :class="{ 'selected': selectedOptions[index] === optionIndex }" @click="selectOption(index, optionIndex)"></div>
      </div>
      <div class="likert-texts">
        <div class="likert-text agree-text">{{ question.agreeText }}</div>
        <div class="likert-text disagree-text">{{ question.disagreeText }}</div>
      </div>
    </div>
    <button class="submit-button" @click="submitForm">Submit</button>

    <!-- 로딩스피너 코드-->
    <div class="loading-wrap loading-wrap--js">
      <div class="loading-box">
        <div class="loading-spinner loading-spinner--js"></div>
        <p id="loadingMessage">선택지를 만드는 중입니다...</p>
      </div>
    </div>
    <!-- 로딩스피너 코드-->

  </div>
  
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { agreeImage: require('../assets/1_1.jpg'), disagreeImage: require('../assets/1_2.jpg'), agreeText: '자연', disagreeText: '도시' },
        { agreeImage: require('../assets/2_1.jpg'), disagreeImage: require('../assets/2_2.jpg'), agreeText: '숙박', disagreeText: '당일' },
        { agreeImage: require('../assets/3_1.jpg'), disagreeImage: require('../assets/3_2.jpg'), agreeText: '새로운 지역', disagreeText: '익숙한 지역' },
        { agreeImage: require('../assets/4_1.jpg'), disagreeImage: require('../assets/4_2.jpg'), agreeText: '비싸지만 편한 숙소', disagreeText: '저렴하지만 불편한 숙소' },
        { agreeImage: require('../assets/5_1.jpg'), disagreeImage: require('../assets/5_2.jpg'), agreeText: '휴양', disagreeText: '체험' },
        { agreeImage: require('../assets/6_1.jpg'), disagreeImage: require('../assets/6_2.jpg'), agreeText: '유명하지 않은 방문지', disagreeText: '유명한 방문지' },
        { agreeImage: require('../assets/7_1.jpg'), disagreeImage: require('../assets/7_2.jpg'), agreeText: '계획적인 여행', disagreeText: '즉흥적인 여행' },
        { agreeImage: require('../assets/8_1.jpg'), disagreeImage: require('../assets/8_2.jpg'), agreeText: '사진촬영에 관심 없음', disagreeText: '사진촬영을 좋아함' }
      ],
      options: [1,2,3,4,5,6,7],
      selectedOptions: Array.from({ length: 8 }, () => null)
    };
  },
  methods: {
    selectOption(questionIndex, optionIndex) {
      this.selectedOptions[questionIndex] = optionIndex;
    },
    submitForm() {
      this.$router.push('/TravelStyle');
    },

    //로딩스피너 코드
    simulateLoading() {
    var loadingSpinner = document.querySelector(".loading-wrap--js");
    var loadingMessage = document.getElementById("loadingMessage");

    loadingSpinner.style.display = "flex";
    loadingMessage.textContent = "선택지를 만드는 중입니다...";

    setTimeout(function () {
      loadingSpinner.style.display = "none";
      loadingMessage.textContent = "로딩 완료";
    }, 5000); // 로딩시간 조정
    }
    },
    mounted() {
      this.simulateLoading();
    }
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

.main-texts {
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  margin-bottom: 40px; /* 간격 띄우기 */
}

.main_text1 {
  font-size: 20px; /* 텍스트 크기 키우기 */
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px; /* 간격 띄우기 */
  color: #F85E9F;
  text-align: center;
}

.main_text2 {
  font-size: 40px; /* 텍스트 크기 키우기 */
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
}

.survey-container {
  margin-top: 120px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 500px;
  margin-right: 500px;
  background: linear-gradient(to right, rgba(248, 94, 159, 0.13) 0%, rgba(85, 68, 189, 0.13) 100%);
  border-radius: 100px;
}

.likert-question {
  border-radius: 8px;
  padding: 20px 20px 20px 20px; /* 가로 패딩 설정 */
  margin-bottom: 20px;
  text-align: center;
}

.images-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.question-image {
  width: 200px; /* 이미지 크기 고정 */
  height: 200px; /* 이미지 크기 고정 */
  object-fit: cover; /* 이미지를 채우도록 설정 */
}

.likert-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.likert-label {
  width: 60px;
  height: 60px;
  margin-left: 30px;
  margin-right: 30px;
  border: 2px solid #000;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: background-color 0.3s;

  /* 중앙으로 갈수록 크기를 줄이도록 설정 */
  transform: scale(calc(1 - 0.05 * var(--scale-factor)));
}

/* 각 원의 크기를 조절하기 위한 클래스 */
.likert-label:nth-child(1),
.likert-label:nth-child(7) { --scale-factor: 2; }
.likert-label:nth-child(2),
.likert-label:nth-child(6) { --scale-factor: 4; }
.likert-label:nth-child(3),
.likert-label:nth-child(5) { --scale-factor: 6; }
.likert-label:nth-child(4) { --scale-factor: 8; }

.likert-label:hover {
  background-color: #F85E9F; /* 마우스를 올렸을 때의 배경색 */
}

.likert-label.selected {
  background-color: #F85E9F; /* 선택된 원의 배경색 */
}

.likert-label.selected:hover {
  background-color: #F85E9F; /* 선택된 원에 마우스를 올렸을 때의 배경색 */
}

.likert-label span {
  position: absolute;
  top: -20px;
  white-space: nowrap;
  font-size: 18px; /* 폰트 크기 조정 */
  font-family: 'Arial', sans-serif; /* 예쁜 폰트 사용 */
}

.likert-texts {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.likert-text {
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  /* text-align: left; */
  font-weight: bold;
}

.agree-text {
  margin-left: 30px; /* 왼쪽 여백 추가 */
}

.disagree-text {
  margin-right: 30px; /* 오른쪽 여백 추가 */
}

.submit-button {
  margin-top: 50px;
  margin-bottom:50px;
  padding: 10px 20px;
  background-color: #6A0DAD; /* 보라색 */
  color: #fff; /* 흰색 텍스트 */
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #4B0082; /* 보라색 (더 어두운 색상) */
}

</style> 