// 실습 1: 버튼 클릭 이벤트
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log("버튼 클릭됨");
});

// 실습 2: 텍스트 변경하기
const text = document.querySelector("#text");
const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", function () {
  text.textContent = "Hello JavaScript";
});

// 실습 3: 실시간 입력 감지
const input = document.querySelector("#name");
const preview = document.querySelector("#preview");
input.addEventListener("input", function () {
  preview.textContent = input.value;
});

// 실습 4: 마우스 감지
const boxHover = document.querySelector("#box-hover");
boxHover.addEventListener("mouseover", function () {
  boxHover.style.color = "orange";
});
boxHover.addEventListener("mouseout", function () {
  boxHover.style.color = "black";
});

// 실습 5: 스타일 변경
const boxStyle = document.querySelector("#box-style");
const colorButton = document.querySelector("#color");
colorButton.addEventListener("click", function () {
  boxStyle.style.color = "orange";
  boxStyle.style.fontSize = "20px";
});

// 실습 6: 점수 판별
const scoreInput = document.querySelector("#score");
const checkButton = document.querySelector("#check");
const result = document.querySelector("#result");

checkButton.addEventListener("click", function () {
  const score = Number(scoreInput.value);

  if (scoreInput.value === "") {
    result.textContent = "점수를 입력하세요.";
  } else if (score >= 60) {
    result.textContent = "합격";
  } else {
    result.textContent = "불합격";
  }
});

// 추가 과제: 콘솔 계산기
const calculatorButton = document.querySelector("#calculator");

calculatorButton.addEventListener("click", function () {
  runCalculator();
});

function runCalculator() {
  const num1 = Number(prompt("첫 번째 숫자를 입력하세요."));
  const operator = prompt("연산자를 입력하세요. (+, -, *, /)");
  const num2 = Number(prompt("두 번째 숫자를 입력하세요."));

  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      console.log("0으로 나눌 수 없습니다.");
      return;
    }
    result = num1 / num2;
  } else {
    console.log("올바른 연산자를 입력하세요.");
    return;
  }

  console.log(num1 + " " + operator + " " + num2 + " = " + result);
}
