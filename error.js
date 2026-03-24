// 에러 처리 함수
const showError = (message) => {// 에러 메시지 표시
    const resultElement = document.getElementById("result");// 에러 메시지 표시 "result" 요소 선택
    resultElement.textContent = message;//result라고 하는 요소의 텍스트 내용을 에러 메시지로 설정
    // 기능 구현
};

const removeError = () => {// 에러 메시지 제거
    const resultElement = document.getElementById("result");// 에러 메시지 제거 화면에 보이는 "result" 요소 선택
    resultElement.textContent = "";//result라고 하는 요소의 텍스트 내용을 빈 문자열로 설정하여 에러 메시지 제거
    // 기능 구현
};

export { showError, removeError };// 에러 처리 함수들을 다른 모듈에서 사용할 수 있도록 내보냄
//가져오는 건 import { showError, removeError } from "./error.js"; 이런식으로 가져올 수 있음
