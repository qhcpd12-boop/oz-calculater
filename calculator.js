// 현재 입력값
let currentInput = "";
let firstNumber = null;
let operator = null;
let history = [];

// 숫자 입력
function inputNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

// 연산자 선택
function setOperator(op) {
  firstNumber = Number(currentInput);
  operator = op;
  currentInput = "";
}

// 계산 실행
function calculate() {
  let secondNumber = Number(currentInput);
  let result = 0;

  if (operator === "+") result = firstNumber + secondNumber;
  else if (operator === "-") result = firstNumber - secondNumber;
  else if (operator === "*") result = firstNumber * secondNumber;
  else if (operator === "/") result = firstNumber / secondNumber;

  document.getElementById("display").value = result;

  // 계산 기록 저장
  history.push({
    firstNumber: firstNumber,
    operator: operator,
    secondNumber: secondNumber,
    result: result
  });

  console.log(history);

  // 다음 계산 준비
  currentInput = result.toString();
  firstNumber = null;
  operator = null;
}

// 전체 초기화 (C)
function clearAll() {
  currentInput = "";
  firstNumber = null;
  operator = null;
  document.getElementById("display").value = "0";
}

// 한 글자 삭제 (←)
function backspace() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("display").value = currentInput || "0";
}