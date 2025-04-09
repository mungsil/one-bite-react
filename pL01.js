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
