// 문 : 특정 문자열이 있을 때 그 문자열에 들어가는 특정 글자의 수를 구해보자.

function solution(s, t) {
  let answer = 0;
  for (let i of s) {
    if (i === t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// 다른 풀이

function solutionOther(s, t) {
  let answer;
  answer = s.split(t).length; // 끝자리에 걸리더라도 뒷 문자열이 ''이 배열에 들어간다.
  return answer - 1;
}

let str2 = "COMPUTERPROGRAMMING";
console.log(solutionOther(str2, "R"));
