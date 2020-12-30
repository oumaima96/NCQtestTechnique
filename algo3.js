function solution(A){

  if (A.length == 0) return 0;
  else if (A.length == 1) return Math.abs(A[0]);
 

	let sums = new Array(A.length + 1);
	let result ;

	sums[0] = 0;
	
	for (var i = 0; i < A.length; i++) {
		sums[i + 1] = A[i] + sums[i];
	}

  sums.sort();
  
	for (var i = 1; i < sums.length; i++) {
    result = Math.min(result, Math.abs(sums[i] - sums[i - 1]));
	}
  
  return result;
}
//STATIC EXAMPLE
let A = [1, 5, 2, -2]
var result = solution(A)
console.log("result= 1 " + result)

//EXAMPLE RANDOM TEST RANGE [0..20,000]
var N=Math.floor(Math.random() * 20000) ;
var A = []
for (let i = 0; i < N; i++) {
  A[i] = Math.floor(Math.random() * 200 + 1) -100; 
}
var result = solution(A)
console.log("result= 2 " + result)