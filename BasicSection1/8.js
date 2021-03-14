// 핵심 쟁점 : 배열 안의 9가지 숫자 중 총 합이 100이 되는 경우의 숫자들을 반환하시오, 여러가지 경우일 때는 아무거나 한 가지 반환하여라

// 1. 주어진 배열의 총합을 먼저 알아보고자 하였다.
// 2. 총합이 100만 나오면 되기에 총합에서 100을 빼주었다.
// 3. 두 가지 수의 조합이 총합에서 100을 뺀 수가 나오는 경우, 그 조합을 전체 배열에서 빼주고 그 경우를 저장해준다.
// 4. 따로 빼둔 경우 중 아무거나 출력을한다.

// 나의 풀이
function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  let cases = []; // 정답의 경우의 수를 담을 배열을 만듦
  let children = []; // 정답인 경우의 배열

  for (let i = 0; i < arr.length; i++) {
    let falseChild1 = arr[i]; // 예외상황의 요소 1
    let falseChild2; // 예외 상황의 요소 2
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (falseChild1 + arr[j] === sum - 100) {
          falseChild2 = arr[j];
          children = arr.filter(
            (item) => item !== falseChild1 && item !== falseChild2
          );
          cases.push(children);
        }
      }
    }
  } // 1가지를 뽑고 전체 숫자를 반복하는 경우이기 때문에 같은 경우가 2번 나온다.
  for (let i = 0; i < cases.length / 2; i++) {
    cases.pop();
  } // 중복된 경우를 제거 해준다.

  let random = Math.floor(Math.random() * cases.length); // 문제에서 주어진대로 경우의 수 중 아무거나 뽑기위해 몇 번째 경우가 나올지 정해준다.
  answer = cases[random];

  return answer.join(" ");
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 답안 업그레이드!

function solutionUp(arr) {
  let answer = arr;
  let copy;
  let sum = arr.reduce((a, b) => a + b, 0);
  let cases = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      copy = [...arr]; //  단순히 배열을 같은 주소만 바라보게 하면  splice나 pop, push같은 API를 사용할 시 원본에 영향을 주기때문에 얕은 복사를 해주어야한다.
      if (arr[i] + arr[j] === sum - 100) {
        copy.splice(j, 1); // 뒤에서 부터 꺼내주어야 앞의 i의 번째 수가 바뀌지 않는다. 항상 i < j 이기때문에 가능
        copy.splice(i, 1); // splice가 원본 배열을 바꾸어주는 API임을 알고 있다면 이해될 것이다.
        cases.push(copy);
      }
    }
  }

  // 첫번째 풀이에서는 쓸데없이 같은 경우도 중복해서 돌았는데, j가 i와 같지 않도록 애초에 j순서를 i순서 하나 뒤에 오도록 설정하니
  // 쓸데없이 중복된 경우를 한번 더 체크할 필요가 없어졌다.

  let random = Math.floor(Math.random() * cases.length); // 문제에서 주어진대로 경우의 수 중 아무거나 뽑기위해 몇 번째 경우가 나올지 정해준다.
  answer = cases[random];

  return answer.join(" ");
}

let arr2 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log("up => ", solutionUp(arr2));
