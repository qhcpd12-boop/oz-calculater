import calculateOperation from './operations.js';// 계산 수행 함수 가져오기
import { resetDisplay, setDisplay, subDisplay, appendNumber, setOperator, VALID_NUMBERS, VALID_OPERATORS } from './input.js';// 입력 처리 함수 가져오기
import { showError, removeError } from './error.js';// 에러 처리 함수 가져오기
import saveHistory from './history.js';// 계산 기록 저장 함수 가져오기

let history = [];// 계산 기록을 저장하는 배열
let currentInput = "";// 현재 입력값
let firstNumber = null;// 첫 번째 숫자
let operator = null;// 선택된 연산자
let isError = false;// 에러 상태를 나타내는 변수

export { calculateOperation, resetDisplay, setDisplay, subDisplay, appendNumber, setOperator, showError, removeError, saveHistory, VALID_NUMBERS, VALID_OPERATORS, history, currentInput, firstNumber, operator, isError };

export default function calculate() {// 계산 수행 함수 
    try {// 계산에 필요한 값이 모두 있는지 확인
        if (firstNumber === null || operator === null || !currentInput) {// firstNumber, operator, currentInput 중 하나라도 없으면 에러 처리
            isError = true;// 에러 상태로 설정
            throw new Error("계산에 필요한 값이 부족합니다.");// 에러 메시지로 "계산에 필요한 값이 부족합니다." 표시
        }
        const secondNumber = Number(currentInput);// currentInput을 숫자로 변환하여 secondNumber에 저장
        if (isNaN(secondNumber)) {// secondNumber가 유효한 숫자가 아니면 에러 처리
            isError = true;// 에러 상태로 설정
            throw new Error("유효한 숫자를 입력하세요.");// 에러 메시지로 "유효한 숫자를 입력하세요." 표시
        }
        const result = calculateOperation(firstNumber, secondNumber, operator);
        saveHistory(firstNumber, operator, secondNumber, result, history);
        const resultElement = document.getElementById("result");
        resultElement.classList.remove("d-none", "alert-danger");
        resultElement.classList.add("alert-info");
        resultElement.textContent = `결과: ${result}`;
        resetDisplay();
        firstNumber = null;
        operator = null;
    } catch (error) {
        showError(error.message);
    }
}
