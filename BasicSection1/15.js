// 문 : 문자열을 인자로 받는다고 할 때 홀수길이의 문자열은 가운데 1글자만, 짝수길이의 문자열은 가운데 2개의 문자를 출력해보자.

function solution(s) {
  let answer;
  let midIndex;
  if (s.length % 2) {
    midIndex = (s.length - 1) / 2;
    answer = s[midIndex];
  }
  if (!(s.length % 2)) {
    midIndex = s.length / 2;
    answer = `${s[midIndex - 1]}${s[midIndex - 1]}`;
  }

  return answer;
}

console.log("study => ", solution("study"));
console.log("good => ", solution("good"));

// substring 이용한 풀이

function solutionOther(s) {
  let answer;
  let midIndex = Math.floor(s.length / 2);
  if (s.length % 2) answer = s.substring(midIndex, midIndex + 1);
  else answer = s.substring(midIndex - 1, midIndex + 1);

  return answer;
}

console.log("study => ", solutionOther("study"));
console.log("good => ", solutionOther("good"));

// substr 이용한 풀이

function solutionOther2(s) {
  let answer;
  let midIndex = Math.floor(s.length / 2);
  if (s.length % 2) answer = s.substr(midIndex, 1);
  else answer = s.substr(midIndex - 1, 2);

  return answer;
}

console.log("study => ", solutionOther2("study"));
console.log("good => ", solutionOther2("good"));
