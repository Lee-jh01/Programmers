//프로그래머스 Level 2,[1차] 뉴스 클러스터링
function stringSplit(str) {
    let arr = [];
    [...str.toUpperCase()].reduce( function(a,d) {
        if(a.toLowerCase() != a && d.toLowerCase() != d)
            arr.push(a+d);        
        return d;
    });
    return arr.sort();
}

function solution(str1, str2) {
    var answer = 0;
    var arr1 = stringSplit(str1);
    var arr2 = stringSplit(str2);
    
    var union = 0;
    var inter = 0;
    
    let i1=0,i2=0;
    while(true) {
        if(arr1.length <= i1) {
            union += arr2.slice(i2).length;
            break;
        }    
        if(arr2.length <= i2) {
            union += arr1.slice(i1).length;
            break;
        }        

        let a = arr1[i1];
        let b = arr2[i2];
        if(a == b) {
            inter++; union++;
            i1++;
            i2++;
        }
        else if(a>b) {
            union++;
            i2++;
        }
        else if(a<b) {
            union++;
            i1++;
        }           
    }

    if(inter==0 && union==0) 
        answer = 1;
    else 
        answer = inter/union;
    
    return Math.floor(answer*65536);
}