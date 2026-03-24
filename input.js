// 입력 처리 함수
const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];//
const VALID_OPERATORS = ["+", "-", "*", "/"];//

const resetDisplay = () => {// 디스플레이 초기화
    // 기능 구현
    return "";
};

const setDisplay = (text) => {// 디스플레이에 텍스트 쓰는데로 나옴
    // 기능 구현
    return text;
};

const subDisplay = (currentInput) => { // 보조 디스플레이 설정. 현재 입력값을 보조 디스플레이에 보여주는 함수     
    // 기능구현
    return currentInput.slice(0, -1); // 현재 입력값에서 마지막 글자 제거
};

const appendNumber = (number, currentInput) => {// 숫자 버튼 클릭 시 디스플레이에 숫자 추가
    if (!VALID_NUMBERS.includes(number)) throw new Error("유효한 숫자를 입력하세요.");// number(사용자가 쓴숫자)가 위에 valid_numbers 배열(includes)에 입력된 숫자가 !아니면 
    // ""에 있는 글 에러로 띄움. valid_numbers 배열에 숫자 0~9가 포함되어 있으므로, 사용자가 입력한 숫자가 이 범위 내에 있는지 확인하는 역할을 함.문자가 입력되면 에러로 띄움
    return setDisplay(currentInput + number);// 현재 입력값(currentInput)에 숫자(number) 추가하여 디스플레이에 보여줄 값 반환 
};

const setOperator = (op, currentInput) => {// 연산자 버튼 클릭 시(op,currentInput) 연산자 설정 
    if (!VALID_OPERATORS.includes(op)) throw new Error("유효한 연산자를 선택하세요.");// op(사용자가 선택한 연산자)가 위에 valid_operators 
    // 배열(includes)에 입력된 연산자가 아니면 ""에 있는 글 에러로 띄움. valid_operators 배열에 연산자 +, -, *, /가 포함되어 있으므로, 
    // 사용자가 입력한 연산자가 이 범위 내에 있는지 확인하는 역할을 함.연산자가 아닌 값 (다른 문자,숫자)입력되면 에러로 띄움
    if (!currentInput) throw new Error("숫자를 먼저 입력하세요.");// currentInput이 비어있으면 ""에 있는 글 에러로 띄움. 
    // 연산자를 선택하기 전에 숫자를 입력해야 한다는 것을 알리는 역할을 함. 숫자가 입력되지 않은 상태에서 연산자를 선택하면 에러("숫자를 먼저입력하세요")로 띄움
    return currentInput + " " + op + " ";// 현재 입력값(currentInput)에 연산자(op)를 추가하여 디스플레이에 보여줄 값 반환. 
    // 예를 들어, currentInput이 "5"이고 op가 "+"이면, 반환되는 값은 "5 + "가 됨. 이렇게 하면 사용자가 숫자를 입력한 후에 연산자를 선택할 때, 디스플레이에 현재 입력된 숫자와 선택된 연산자가 함께 표시됨
};//

export { resetDisplay, setDisplay, subDisplay, appendNumber, setOperator, VALID_NUMBERS, VALID_OPERATORS };
// 입력 처리 함수들을 다른 모듈에서 사용할 수 있도록 내보냄
// 가져오는 건 import { resetDisplay, setDisplay, subDisplay, appendNumber, setOperator } from "./input.js"; 이런식으로 가져올 수 있음
