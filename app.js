  /*
  ваша часовая ставка 80$ и вы готовы работать не
  более 5 часов в день 5днейв неделе(кроме выходных).
  к вам приходит заказчик и предлагает заказ на 40 часов работы.
  сейчас понедельник.
  вы должны уехать через 11 дней.
  выведите в консоль:
  -Boolean переменную успеете ли вы взяться за работу?
  -сколько вы за неё попросите?
  */
 // dannie
const payRateUSD=80;
const projectHours=40;
const availableHours=(11-2)*5;
//resultat
console.log('смогу ли я работать? '+(availableHours>projectHours));
console.log('стоимость работ: ' + projectHours*payRateUSD);
const projectName='сайт магазина';
const price=2000;
const author='Василий Пупкин';

const template=author+' заказал '+ projectName+ ' по цене ' + price+'$';
console.log(template);

const template2=`${author} заказал ${projectName} по цене ${price} $`;
console.log(template2);

const template3='проект \n'+'цена: '+price+'$';
console.log(template3);
const template4=`проект
цена: ${price}$`;
console.log(template4);
const age='18';
console.log(age+5);//185
console.log(Number(age)+5);//23
console.log(age-3);//15
console.log(age/3);//6
console.log(age*3);//54
console.log(String(4)+7);//47
/*
вася положил 12000$ на вклад 7% годовых с
капитализацией 1 раз в месяц.
вывесты в консоль сможет ли он купить дом за 13 500$
через 2 года после снятии вклада. и остаток после покупки?
*/
 const summa=12000;
const stavka=0.07;
const depLenght=24;
const houseCost=13500;
const result=summa*(1+stavka/12)**24;
if (result>houseCost){
    console.log(`kupim: ${result} ostatok= ${result-houseCost}`);
}else{
    console.log(`net ostatok= ${result}`);
}
/*
== шарт барои фахмидани баробари факат киммат
=== шарт хам киммат хам намуди кимматро муайян мекунад. (string ми ё numberми ё ...)
бояд хаммавакт ===истиф кунем.
*/
const role='manager';
if (role==='manager'){
    console.log('meneger');
}else if(role==='admin'){
    console.log('admin');
}else if(role==='ceo'){
    console.log('CEO');
}else{
    console.log('tebya neznayem');
}
switch (role){
    case 'manager'://role==='manager'
        console.log('meneger');
        break;
    case 'admin':
        console.log('admin');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log('tebya ne znayem');
}
const num=1;
switch(true){
    case num>0:
        console.log('pologhitelniy');
        break;
    case num<0:
        console.log('otrisatelniy');
    default:
        console.log('nol');
}
const bmwx3=100000;
const fordFocusPrice=10000;
const budget=20000;
let message;
if (budget>100000){
     message='bmw';
}else if(budget>fordFocusPrice){
     message='ford';
}else{
     message='velosiped'
}
console.log(`kupim ${message}`);


10>0 ? console.log('bolshe 0'): console.log('menshe0');// 
/*
агар шартамо як катор бошад ана хамин хел нависта мешавад.
*/



/* 
методом  promt получите ответ пользователя
на вопрос Эсколько будет "сколько будет 7+ или -15?"
если ответ верен выведите в консоле "успех" если нет "вы робот".
а если он введет "я не робот" тоже "успех".
*/
const ies=prompt('сколько будет 7+или-15?');
switch (true){
    case ies ==='я не робот':
    case Number(ies)===22:
    case Number(ies)===-8:
        console.log('успех');
        break;
    default:
        console.log('вы робот');
}