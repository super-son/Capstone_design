<template>
  <div class="input-container">
    <div class="headerBox">
      <h2> <span class="highlight"> Everything About You </span> <br> Enter/Choose your Info!</h2>
    </div>
    <div class="formBox">
      <div class="form-group">
        <div class="form-group-left">
          <input type="text" placeholder="성별" disabled>
        </div>    
        <div class="form-group-right">
          <input type="text" v-model="gender" placeholder="ex) 남">
        </div>      
      </div>
      <div class="form-group">
        <div class="form-group-left">
          <input type="text" placeholder="나이" disabled>
        </div>    
        <div class="form-group-right">
          <input type="text" v-model="age" placeholder="ex) 25">
        </div>
      </div>
      <div class="form-group">
        <div class="form-group-left">
          <input type="text" placeholder="여행지" disabled>
        </div>    
        <div class="form-group-right">
          <input type="text" v-model="destination" placeholder="ex) 부산">
        </div>
      </div>
      <div class="form-group">
       <div class="form-group-left">
          <input type="text" placeholder="여행 시작일" disabled>
        </div>    
        <div class="form-group-right">
          <input type="date" v-model="travelStartDate" placeholder="ex) 여행 시작일">
        </div>
      </div>
      <div class="form-group">
       <div class="form-group-left">
          <input type="text" placeholder="여행 종료일" disabled>
        </div>    
        <div class="form-group-right">
          <input type="date" v-model="travelEndDate" placeholder="ex) 여행 종료일">
        </div>
      </div>
      <div class="inputBox">
        <button :disabled="!isFormValid" @click="submitForm">Complete!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: '',
      age: '',
      destination: '',
      travelStartDate: '',
      travelEndDate: ''
    };
  },
  watch: {
    travelStartDate(newStartDate) {
      if (newStartDate && this.travelEndDate && newStartDate > this.travelEndDate) {
        alert("여행 시작일은 종료일보다 이후일 수 없습니다.");
        this.travelStartDate = this.travelEndDate; // 시작일을 종료일로 재설정
      }
    },
    travelEndDate(newEndDate) {
      if (newEndDate && this.travelStartDate && newEndDate < this.travelStartDate) {
        alert("여행 종료일은 시작일보다 이전일 수 없습니다.");
        this.travelEndDate = this.travelStartDate; // 종료일을 시작일로 재설정
      }
    }
  },
  computed: {
    isFormValid() {
      return this.gender && this.age && this.destination && this.travelStartDate && this.travelEndDate;
    }
  },
  methods: {
    submitForm() {
      this.$router.push('/SelectStyle');
    }
  }
};
</script>

<style scoped>
.input-container {
  background: linear-gradient(to bottom right, #feeaf3, #e9e7f6);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 30%;
  height: auto;
}

.input-container .headerBox{
    height: 20%;
    width: 100%;
    align-content: center;
}

.input-container .headerBox h2 {
  font-size: 36px;
  text-align: center;
  color: #333;
}

.highlight {
  color: #f983b5; /* 강조 텍스트 색상 */
  font-size:20px; /* 강조 텍스트 크기 */
}

.formBox {
    height: 70%;
    width: 100%;
    align-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.formBox .form-group {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 세로 중앙 정렬 */
  height: 12%;
  margin-bottom: 40px; /* 각 그룹 블록들 사이에 간격 추가 */
}

.form-group .form-group-left {
  display: flex;
  justify-content: left;
  flex-basis: 20%;
  padding-left: 10%;
  height: 100%;
}

.form-group .form-group-left input{
  text-align: center;
  font-size: 18px;
  color: white;
  background-color: #F28EAC;
}

.form-group-left input::placeholder {
    color:white;
}

.form-group .form-group-right {
  display: flex;
  justify-content: right;
  flex-basis: 60%;
  padding-right: 10%;
  height: 100%;
}

.form-group .form-group-right input {
  font-size: 18px;
  padding-left: 20px;
  padding-right: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

.form-group input {
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 16px;
}

.inputBox{
    display: flex;
    height: 10%;
    width: 100%;
    align-content: center;
    justify-content: center;
    margin-top: 50px;
}

button {
  width: 22.5%;
  height: 80%;
  padding: 10px;
  font-size: 24px;
  background-color: #5d50c6;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #355c7d;
}

button:disabled {
  background-color: #ccc;
  cursor: "모든 정보를 입력해주세요";
}
</style>
