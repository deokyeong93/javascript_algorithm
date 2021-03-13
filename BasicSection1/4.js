// 문제 : 숫자 n 까지 자연수들의 합 구하기

// 1차 풀이
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}

// 2차 풀이 => 너무 기초적인 것들이라 재귀함수가 익수하지 않으니 재귀함수로 구현 한번 해보려고한다.
function solutionUp(n) {
  if (n === 1) return 1;
  if (n === 2) return 3;
  return (function add(a, b) {
    let c = a + b;
    if (b < n) return add(c, b + 1);
    // if (b < n) add(c, b + 1);
    // 이 코드를 사용해버리면 새로운 add함수가 호출되어도 값을 리턴하지 않기 때문에
    // 결국 이 함수의 최종 return은 c가 되어 undefined가 나오니 주의하자!!!!!!!
    else return c;
  })(1, 2);
}

console.log(solution(15));
console.log(solutionUp(15));

// n이 1과 2일 경우 좀 더 추상화 과정을 거쳐서 코드를 줄일 수 있을 것 같은데,
// 일단 알고리즘의 기초를 빠르게 공부중이라 다시 돌아와서 복습할 때 재구현해보자!!!
