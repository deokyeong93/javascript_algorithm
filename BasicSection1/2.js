// 당면한 문제) 세 수 중 가장 큰 수를 구하고, 남은 두수의 합이  최대값보다 큰지 알아보기.

// 나의 풀이
// 1. a,b,c중 가장 큰 수를 먼저 찾는다.
// 2. 가장 큰 수를 제외한 두 수를 찾는다.
// 3, 가장 큰 수 < 남은 두 수의 합인 경우 YES 아닌 경우 NO를 반환한다.

function solution(a, b, c) {
  let arr = [a, b, c];
  maxNum = max(max(a, b), c);
  left = arr
    .filter((item) => item !== maxNum) //
    .reduce((a, b) => a + b, 0);
  if (maxNum < left) return "YES";
  if (maxNum > left) return "NO";
}

function max(a, b) {
  if (a > b) return a;
  if (a < b) return b;
}

console.log(solution(13, 33, 17));

// 다른 답안

function solution2(a, b, c) {
  let answer = "NO";
  let sum = a + b + c;
  if (a > b) return (max2 = a);
  else max2 = b;
  if (c > max2) return (max = c);
  if (sum - max2 > max2) answer = "YES";

  return answer;
}

console.log(solution2(17, 33, 17));

// 나의 풀이 발전시키기
// 1. Array API를 사용했던 방식을 지워보자.. 아직 알고리즘은 학습중이라 잘 모르겠지만
// API사용을 안 하고 사고하는 방법도 익혀야 하는 것 같다..
// 2. 애초에 세 수의 합을 구해놓고, 최대값을 빼주는 방향으로 해주면
// 복잡하게 남은 두 수를 구하는 방식을 굳이 구하지 않고 남은 작은 두 수의 합, 최대값을 모두 구하여
// 두 수를 비교하는 것이 가능하다.

function solutionUp(a, b, c) {
  let answer = "NO";
  let sum = a + b + c;
  maxNum = max(max(a, b), c);
  if (sum - maxNum > maxNum) answer = "YES";
  return answer;
}

console.log(solutionUp(13, 22, 17));

// 학습 사항 추가!
// Math.min(...arr), Math.max(...arr) 내장 함수를 사용하면
// 전개 연산자 사용하기싫으면 Math.min.apply(null, arr)이런식으로 사용하는데 그냥 전개연산자 사용하자.
// Math.min(1,2,3,4) // 1 이런식이다.
// 아주 쉽게 최소 최대값을 구할 수 있다..

// 복습
// 최대값 구하기 문제랑 똑같음

const exArr = [6, 7, 11];

function isCanMakeTriangle(arr) {
  const findMaxNum = (_arr) => {
    let num = Number.MIN_SAFE_INTEGER;
    for (let arrNum of _arr) {
      if (arrNum > num) num = arrNum;
    }
    return num;
  };

  const addRemainTwoNumber = (_arr, _maxNum) => {
    return _arr.reduce((a, b) => a + b) - _maxNum;
  };

  if (findMaxNum(arr) < addRemainTwoNumber(arr, findMaxNum(arr))) return "YES";
  return "NO";
}
