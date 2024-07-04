<template>
    <div id="nn">
        <div v-for="(day, dayIndex) in schedule" :key="dayIndex" class="day-schedule" :style="{ 'margin-top': dayIndex === 0 ? '150px' : '0' }">
        <h2>DAY {{ dayIndex + 1 }}</h2>
            <div class="schedule">
                <div class="schedule-item" v-for="(item, index) in day.items" :key="index">
                    <div class="step-rectangle">
                        <span>{{ index + 1 }}</span>
                    </div>
                    
                    <div class="content">
                        <img :src="item.image" alt="location image" />
                        <div class="details">
                        <h3>{{ item.title }}</h3>
                        
                        <p class="item_t">{{ item.type }} - <span class="item_a">{{ item.address }}</span></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- 로딩스피너 코드-->
        <div class="loading-wrap loading-wrap--js">
            <div class="loading-box">
                <div class="loading-spinner loading-spinner--js"></div>
                <p id="loadingMessage">여행 동선을 만드는 중입니다...</p>
            </div>
        </div>
        <!-- 로딩스피너 코드-->
    </div>
</template>
    
    <script>
    export default {
    name: 'TravelRoute',
    data() {
        return {
        schedule: [
            {
            items: [
                {
                image: require('../assets/1_1.jpg'),  
                title: "해운대 달맞이길",
                type: "관광명소",
                address: "해운대구 달맞이길 190"
                },
                {
                image: require('../assets/1_2.jpg'),  
                title: "일품한우",
                type: "음식점",
                address: "해운대구 해운대로 570번길 49"
                },
                {
                image: require('../assets/2_1.jpg'),  
                title: "해운대 해수욕장",
                type: "관광명소",
                address: "해운대구 해운대해변로 264"
                },
                {
                image: require('../assets/2_2.jpg'),  
                title: "속시원한 대구탕",
                type: "음식점",
                address: "해운대구 달맞이길 229"
                }
            ]
            },
            {
            items: [
                {
                image: require('../assets/3_1.jpg'),  
                title: "부산 타워",
                type: "관광명소",
                address: "부산 중구 용두산길 37-55"
                },
                {
                image: require('../assets/3_2.jpg'),  
                title: "남포동",
                type: "관광명소",
                address: "부산 중구 남포동"
                },
                {
                image: require('../assets/4_1.jpg'),  
                title: "국제시장",
                type: "쇼핑",
                address: "부산 중구 신창동 4가"
                }
            ]
            },
            {
            items: [
                {
                image: require('../assets/4_2.jpg'),  
                title: "태종대",
                type: "관광명소",
                address: "부산 영도구 전망로 24"
                },
                {
                image: require('../assets/5_1.jpg'),  
                title: "감천문화마을",
                type: "관광명소",
                address: "부산 사하구 감내2로 203"
                }
            ]
            }
        ]
        };
    },
    methods: {
    //로딩스피너 코드
    simulateLoading() {
    var loadingSpinner = document.querySelector(".loading-wrap--js");
    var loadingMessage = document.getElementById("loadingMessage");

    loadingSpinner.style.display = "flex";
    loadingMessage.textContent = "여행 동선을 만드는 중입니다...";

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

};
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

#nn {
    position: relative;
    display: flex;
    justify-content: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    text-align: center;
    color: #2c3e50;
    background: linear-gradient(to right, #cdf1ff, white 40%, white, #fefaee 60%);
    }

    .day-schedule {
    margin-bottom: 40px;
    border: 2px solid #ccc; /* 구분선을 나타내는 경계선 스타일 지정 */
    border-radius: 20px; /* 사각형 경계선을 위한 둥근 경계 설정 */
    padding: 20px; /* 각 일정 항목의 내부 여백 설정 */
    width: 900px;
    align-items: center;
    text-align: center;
}

.schedule {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.schedule-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150%;
    margin-bottom: 20px;
    margin-left: 20px;
}

.step-rectangle {
    background: linear-gradient(to bottom right, #f7a4a6, #c18de7);
    color: white;
    width: 60px; /* 원래 80px 이지만 원을 사각형으로 변경하면 너비가 더 필요 */
    height: 60px; /* 원래 80px 에서 60px 로 변경 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    font-weight: bold;
    font-size: 2em;
    border-radius: 10px; /* 사각형으로 변경된 것에 맞게 원의 형태 제거 */
}

.content {
    display: flex;
    align-items: center;
    width: 100%;
}

.content img {
    width: 140px; /* 기존 60px에서 2배로 증가 */
    height: 140px; /* 기존 60px에서 2배로 증가 */
    border-radius: 50%;
    margin-right: 30px;
}

.details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.day-schedule h2 {
position: relative; /* h2 요소의 위치를 상대적으로 설정하여 사각형 위에 겹치게 함 */
z-index: 2; /* 사각형 위로 표시되도록 설정 */
font-size: 2.5em;
margin-top: 20px;
margin-bottom: 20px;
/* width: max-content; */
/* padding: 0 50px;
box-shadow: inset 0 -5px 0 #f974ac; */
}

.details h3 {
    margin: 0;
    font-size: 1.5em; 
    margin-bottom: 10px;
    
}

.details p {
    margin: 0;
    font-size: 1.3em; 
    color: gray;
}
</style>