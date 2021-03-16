// 문 : 어떠한 문자열을 받더라도 모두 대문자로 출력하는 코드를 작성하라!
// 뭔가 문제들이 가벼워도 다양한 풀이법이 있다면 최대한 적어보려고한다.
// 이 글을 보고있는 누군가가 이리 쉬운 문제를 왜이리 꼬아서 풀기도하느냐라고 할 수 있는데
// 기본 문제일수록 오히려 다양한 방법으로 연습을 하기가 좋다. 궁극적으로 어려운 문제를 해결하기위해서는
// 다양한 작성법에 익숙해지는 것이 좋다고 생각한다.

function solution(s) {
  let answer = "";
  for (let i of s) {
    answer = answer + i.toUpperCase();
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

function solutionOther(s) {
  let answer = "";
  for (let i of s) {
    if (i === i.toLowerCase()) answer += i.toUpperCase();
    else answer += i;
  }

  return answer;
}

console.log("Other1 =>", solutionOther(str));

function solutionOther2(s) {
  let answer = "";
  for (let i of s) {
    const ascii = i.charCodeAt();
    if (ascii >= 65 && ascii <= 90) answer += String.fromCharCode(ascii);
    if (ascii >= 97 && ascii <= 122) answer += String.fromCharCode(ascii - 32);
  }

  return answer;
}

console.log("Other2 =>", solutionOther2(str));
