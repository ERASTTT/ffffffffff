function secret(){
console.log('The secret of life is 28');
}
secret();



let txt = 'JS';
console.log(txt.toLowerCase());


let txt3 = 'я люблю JS!';
console.log(txt3.substring(2,7))


let txt4 = 'Я не спасательный круг';
let n = 30;
if(txt4.length > n){
console.log(txt4.slice(0,20)+'...');
} else{
console.log(txt4);
}


let txt5 = 'Я-люблю-JS!';
console.log(txt5.replace(/-/g, '!'));



let txt6 = 'я люблю JS';
console.log(txt6.split(' '));



let txt7 = 'Привет всем ';
console.log(txt7.split(""));


