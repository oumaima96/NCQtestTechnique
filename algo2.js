function fibonacci(x) {

  const max = Math.pow(2, 30)
  const result = [1, 1];
  let i = 1;

  while (++i <= x) {
    value = result[i - 1] + result[i - 2] % max;
    result.push(value);
  }
  return result;

}

function solution(A, B) {

  let caches = fibonacci(A.length);
  let result = [];

  for (let i = 0; i < A.length; ++i) {
    var value = caches[A[i]] % Math.pow(2, B[i]);
    result.push(value);
  }

  return result;
}


//STATIC EXAMPLE
let A = [4, 4, 5, 5, 1]
let B = [3, 2, 4, 3, 1]
var result = solution(A, B)
console.log("result 1 = " + result)


//EXAMPLE RANDOM TEST RANGE [1..50,000]
var L=Math.floor(Math.random() * 50000)+1 ;
var A = []
var B = []
for (let i = 0; i < L; i++) {
  A[i] = Math.floor(Math.random() * L)+1;
}
for (let i = 0; i < L; i++) {
  B[i] = Math.floor(Math.random() * 30)+1;
}
var result = solution(A, B)
console.log("result 2 = " + result)
