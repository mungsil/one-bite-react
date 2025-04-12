function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// default export: import 시 이름을 마음대로 정할 수 있으며, 중괄호 없이 import 가능
// default export는 한 모듈에 하나만 가능
export default function mul(a, b) {
  return a * b;
}

export { add };
