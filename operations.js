export default function calculateOperation(firstNumber, secondNumber, operator) {// export default로 calculateOperation 함수를 정의하여 다른 모듈에서 사용할 수 있도록 내보냄
    switch (operator) {// switch문을 사용하여 operator의 값에 따라 다른 연산을 수행
        case '+':// 덧셈 연산자일 때
            return firstNumber + secondNumber;// firstNumber와 secondNumber를 더한 값을 반환
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            throw new Error('Invalid operator');// operator가 +, -, *, / 중 하나가 아니면 에러를 발생시킴
    }
}
