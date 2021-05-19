//문 : 홀수인 배열을 과 그 합을  구하고 홀수인 배열 중 최솟값 구하기

function solution(arr) {
  let answer = [];
  let minNum = Number.MAX_SAFE_INTEGER; // 값을 초기화 해나가는 과정
  let oddTotal;

  oddArr = arr.filter((item) => item % 2); // 0을 제외하고는 다 true이기때문에 이렇게 조건을 주어도 홀수 판별 가능!
  for (let odd of oddArr) {
    minNum = min(minNum, odd);
  }
  oddTotal = oddArr.reduce((a, b) => a + b, 0);

  answer = [oddTotal, minNum];
  return answer;
}

function min(a, b) {
  if (a > b) return b;
  if (a < b) return a;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 복습!
// 배열을 만들면 쉽지만 새로운 메모리를 할당하지 않고 진행해보기!

function oddSum(_arr) {
  let acc = 0;
  let minimunOdd = Number.MAX_SAFE_INTEGER;

  for (let num of _arr) {
    if (num % 2) {
      acc = acc + num;
      if (num < minimunOdd) {
        minimunOdd = num;
      }
    }
  }

  return `${acc}\n${minimunOdd}`;
}
