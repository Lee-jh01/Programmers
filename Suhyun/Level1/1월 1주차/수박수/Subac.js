function solution(n) {
    //0.28s
    let n=3;
    let answer="";

    for(let i=0; i<n; i++){
        answer+= i%2==0 ? '��' : '��';
    }
}
console.log(answer);

//0.05s
function solution(n) {
    return '����'.repeat(n/2) + (n%2 === 1 ? '��' : '');
   
}