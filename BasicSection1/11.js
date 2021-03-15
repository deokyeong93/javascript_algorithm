//  문 : 주어진 문자열에 대문자 갯수를 구해보자!

function solution(s) {
  let answer = 0;
  let strUp = s.toUpperCase();
  // 전부 다 대문자로 만들고
  for (let i in s) {
    if (strUp[i] === s[i]) answer++;
    // 같은 문자에 대소문자만 다른 경우이니
    // 같은 자리수가 둘 다 대문자이면 숫자를 1 세준다.
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

function solutionOther(s) {
  let answer = 0;
  for (let i of s) {
    if (i.toUpperCase() === i) answer++; //각 문자를 대문자로 만들고 원 문자와 대문자인지 비교해주는 방식, 이 쪽이 더 나아보인다.
  }
  return answer;
}

let str2 = "KoreaTimeGood";
console.log(solutionOther(str2));

//  ASCII NUM을 이용한 풀이 대문자 65~90, 소문자 97~122 란거 정도는 외워두자.

function solutionUp(s) {
  let answer = 0;

  for (let i of s) {
    const num = i.charCodeAt();
    if (num > 65 && num < 90) answer++; //각 문자를 대문자로 만들고 원 문자와 대문자인지 비교해주는 방식, 이 쪽이 더 나아보인다.
  }
  return answer;
}

let str3 = "KoreaTimeGood";
console.log(solutionUp(str3));
