function solution(N, A) {

  let counters = []
  for (let i = 0; i < N; i++) counters.push(0)

  let max_counter = 0;
  let max_all_counters = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {

      let index = A[i] - 1;
      counters[index] = Math.max(counters[index] + 1, max_all_counters + 1);
      max_counter = Math.max(counters[index], max_counter);

    } 
    else max_all_counters = max_counter;
  }

  counters = counters.map((counter) => Math.max(counter, max_all_counters));
  
  return counters;
}


//STATIC EXAMPLE 
let N = 5;
let A = [3, 4, 4, 6, 1, 4, 4]
var result = solution(N, A)
console.log("result 1 = " + result);

//EXAMPLE RANDOM TEST RANGE [1..100,000]
var N=Math.floor(Math.random() * 100000)+1 ;
var M=Math.floor(Math.random() * 100000)+1 ;
var A = []
for (let i = 0; i < M; i++) {
  A[i] = Math.floor(Math.random() * N)+1;
}
var result = solution(N, A)
console.log("result 2 = " + result);