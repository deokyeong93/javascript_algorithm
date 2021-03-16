//문 : 문자열 중 가장 길이가 긴 문자열 반환해보기

function solution(s) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;

  for (let i of s) {
    if (i.length > max) {
      max = i.length;
      answer = i;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
