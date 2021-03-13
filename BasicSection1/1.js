// 인자로 들어오는 세가지 숫자를 비교하는 문제는 어떻게 해결할 수 있을까?

// 나의 첫번째 답안. 세 수의 비교하여 가장 작은 수를 찾으려면 세 수를 각각 비교하는 과정 필요
// 두 수를 비교하여 작은 수를 반환
// 이후 반환한 값을 비교하지 않은 나머지 값과 한번 더 비교
// 보완점.. 일단은 세 수에 한정 되어있다. 어떻게 하면 파라미터의 수에 구애받지 않을까?
function calcu(a, b) {
  if (a - b < 0) return a;
  if (a - b > 0) return b;
}

function firstSolution(a, b, c) {
  let answer;
  answer = calcu(calcu(a, b), c);
  return answer;
}

console.log("첫번째 답안 =>", firstSolution(2, 5, 1));

// 답안지 답안
//   function solution(a ,b ,c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;
//   return answer;
// }

// 그러나 나는 정해진 인자의 수를 비교하기보다는 무수히 많은 인자의 경우도 비교하고싶다.
// 답안지데로라면 나의 비교는 끝없는 if와 전쟁을 해야한다.
// 최종적으로 만든 답안은

function solution(...x) {
  let iter = x[Symbol.iterator]();
  let answer = iter.next().value;
  let cur;
  function cal(a, b) {
    if (a < b) return a;
    if (a > b) return b;
  }
  while (!(cur = iter.next()).done) {
    cur = cur.value;
    answer = cal(answer, cur);
  }
  return answer;
}

console.log("두번째 나의 솔루션 답안 =>", solution(2, 5, 1));

// 첫번째 답만으로도 나는 함수를 쓴 나의 답이 더 괜찮아보이고,
// 나의 답을 3개의 인자가 아닌 여러개의 인자가 들어와도 출력이 가능하게만 바꾸면
// 이건 나의 답이 나아보인다. 같은 로직이지만 함수를 사용하는 편이 코드 작성량을 줄일 수 있을거라고 생각한다.
// 수를 다루기 위해서 함수를 사용하는 것이 낫고, JS에 대한 이해도가 높으면 더 좋은 문법 구사가 가능하다는게 실감난다.
