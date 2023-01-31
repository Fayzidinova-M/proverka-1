let i=1;
while (i<=5){
    console.log(`вывод ${i}`);
    i++
}
//Тарзи навишти WHILE^|^
const arr=[1,4,8,7]


for(let element of arr){
    console.log(element);
}
for(let element1 in arr){
    console.log(element1);
}



function plus(a,b){
return a+b;
}
function minus(a,b){
    return a-b;
}
function power(a,b){
    return a**b;
}
// функции высшего порядка

function calculate(a,b,fn){
    console.log(fn.name);
    const res=fn(a,b);
    return res;
}
let res=calculate(2,3, plus);
console.log(res);
res=calculate(2,3, minus);
console.log(res);
res=calculate(2,3, power);
console.log(res);