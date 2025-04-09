// 변수
let age;
age = 30;
age = 30.5;

// 상수
const birthYear = 1991; // birthYear is a constant and cannot be reassigned

// 명명 규칙
// $, _ 기호만 사용 가능
let _name = "John";

// 숫자 시작 불가
// let 1stName = "John"; // Invalid variable name

// 예약어 불가
// let class = "Math"; // Invalid variable name

// ===========================================

// 자료형
// 1. 원시타입(기본형)

// 1) Number
let number = 10;
console.log(number % 2); // 모듈러 연산

let inf = Infinity; // 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // 수치 연산이 실패했을 때 결과

// 2) String
const yoon = "윤정";
const song = "송은";

let str = `Hello, ${yoon}!`; // 템플릿 리터럴 문법
let mergedStr = str + " How are you?"; // 문자열 연결

let str3 = `oh, ${song}! I am fine, and you?`;

// 3) Boolean
let isTrue = true;

// 4) Null
let empty = null;

// 5) Undefined
let none; // undefined는 변수가 선언되었지만 값이 할당되지 않은 상태를 나타냄

// ===========================================

// 형 변환
// 1. 묵시적
let num = 10;
let strNum1 = "20";
let result = num + strNum1; //1020

// 2. 명시적 - 내장함수 등을 이용해서 직접 형 변환을 명시
let strToNum1 = Number(strNum1);
console.log(strToNum1); // 20

let strNum2 = "200개";
console.log(Number(strNum2)); // NaN
console.log(parseInt(strNum2)); // 20, parseInt: 순수 숫자로 이루어져있지 않은 문자열도 정상적 변환, 단 첫 글자가 숫자가 아니면 NaN
