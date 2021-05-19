// 이미 1.js에서 연습하였던 문제고, 확장해서 생각해본 문제였다.
// 다시 살펴보니 반가웠고 쉽사리 주르륵 써지지는 않아서 조금 속상하다 ㅠ
// 노력은 배신하지 않는다! 계속 정진하자.

// 개인적으로 이터레이터를 계속 사용중인데,
// 최종적으로 이터러블 프로그래밍을 하는게 목표이기 때문에 숙련도를 올리려고 사용중입니다.
// 익숙하지 않은 문법이라면 아래 문법을 참고해주세요.
function solution(...x) {
  let answer = x[Symbol.iterator]();
  let minNum = answer.next().value;
  let num;
  while (!(num = answer.next()).done) {
    num = num.value;
    minNum = min(minNum, num);
  }
  return minNum;
}

// 다른 답안

function solutionOther(...x) {
  let answer;
  answer = Number.MAX_SAFE_INTEGER; // 값을 초기화 해놓은 과정, 상황에 따라 MIN_SAFE_INTEGER 사용하자.

  for (let i = 0; i < x.length; i++) {
    answer = min(answer, x[i]);
  }

  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] < answer) {
  //     //모범답안에서 사용한 식
  //     answer = x[i];
  //   }
  // }

  return answer;
}

function min(a, b) {
  if (a > b) return b;
  if (a < b) return a;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution(...arr));
console.log(solutionOther(...arr));

//복습
//최솟값 구하는 문제

function minimumNum(_arr) {
  let num = Number.MAX_SAFE_INTEGER;

  if (_arr.length < 1) throw new Error("길이가 1 이상의 배열을 집어넣으시오");

  for (let i of _arr) {
    if (i < num) num = i;
  }

  return num;
}
