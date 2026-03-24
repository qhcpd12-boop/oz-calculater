import { appendNumber, setOperator, resetDisplay, calculate, VALID_NUMBERS, VALID_OPERATORS, currentInput, isError } from './index.js';
// index.js에서 필요한 함수와 변수들을 가져옴
// appendNumber: 숫자 버튼 클릭 시 디스플레이에 숫자 추가하는 함수
document.addEventListener("keydown", (event) => {// 키보드 입력 이벤트 리스너 추가//  사용자가 키보드를 눌렀을 때 실행되는 함수
    const key = event.key;// 사용자가 누른 키를 key 변수에 저장
    if (VALID_NUMBERS.includes(key)) appendNumber(key, currentInput);// 사용자가 누른 키가 VALID_NUMBERS 배열에 포함된 숫자(0~9) 
    // 중 하나이면 appendNumber 함수 호출하여 디스플레이에 숫자 추가
    if (VALID_OPERATORS.includes(key)) setOperator(key, currentInput);// 사용자가 누른 키가 VALID_OPERATORS 배열에 포함된 연산자(+,-,*,/) 중 
    // 하나이면 setOperator 함수 호출하여 연산자 설정
    if (key === "Enter") calculate();// 사용자가 누른 키가 Enter이면 calculate 함수 호출하여 계산 수행
    if (key === "Backspace") resetDisplay();// 사용자가 누른 키가 Backspace이면 resetDisplay 함수 호출하여 디스플레이 초기화
    // 이 이벤트 리스너는 사용자가 키보드를 통해 숫자와 연산자를 입력하고, Enter 키로 계산을 수행하며, Backspace 키로 디스플레이를 초기화할 수 있도록 함
    // 예를 들어, 사용자가 "5", "+", "3"을 순서대로 누르고 Enter 키를 누르면, calculate 함수가 호출되어 5 + 3의 결과인 8이 디스플레이에 표시됨. 
    // 사용자가 Backspace 키를 누르면 resetDisplay 함수가 호출되어 디스플레이가 초기화되고, 다시 숫자와 연산자를 입력할 수 있게 됨
    if (isError) resetDisplay();// isError가 true인 경우 resetDisplay 함수 호출하여 디스플레이 초기화. 
    // 계산에 필요한 값이 부족하거나 유효하지 않은 숫자가 입력된 경우 isError가 true로 설정되므로, 이 경우에도 디스플레이를 초기화하여 사용자가 다시 입력할 수 있도록 함
    // 예를 들어, 사용자가 연산자를 먼저 누르거나 유효하지 않은 숫자를 입력하면 isError가 true로 설정되고, 다음 키 입력 시 디스플레이가 초기화되어 사용자가 올바른 입력을 할 수 있도록 함
    if (key === "Enter") resetDisplay();// Enter 키로 계산을 수행한 후에도 디스플레이를 초기화하여 다음 계산을 준비할 수 있도록 함
    // 예를 들어, 사용자가 "5", "+", "3"을 순서대로 누르고 Enter 키를 누르면, calculate 함수가 호출되어 5 + 3의 결과인 8이 디스플레이에 표시된 후, 다시 Enter 키를 누르면 resetDisplay 함수가 호출되어 디스플레이가 초기화되고, 다음 계산을 입력할 수 있게 됨
    if (key === "Backspace") subDisplay();// Backspace 키로 디스플레이에서 한 글자 삭제할 수 있도록 함
    // 예 사용자가 "5", "6", "7"을 순서대로 누르고 Backspace 키를 누르면, subDisplay 함수가 호출되어 디스플레이에서 마지막 글자인 "7"이 삭제되고, "56"이 남게 됨. 
    // 사용자가 계속해서 Backspace 키를 누르면 디스플레이에서 한 글자씩 삭제되어 최종적으로는 디스플레이가 초기화될 수 있음
});