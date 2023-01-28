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
на вопрос "сколько будет 7+ или -15?"
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
//ЛОГИКА-МАНТИК
/*
у нас есть пользователь который хочет зайти в наш систему и записать файл.
мы свами имеем параметры этого пользователя. и бля бля бла...
*/
const isAdmin=true;
const canWrite=true;

console.log(`системный файл ${isAdmin && canWrite}`);
/*
 анаминчанда аломати && шарти *ро ичро мекунад
агар мо ба чои ин аломати  || гузорим шарти ё(аломати кулула дарнаш плюс(магнит)) ро кабул мекунад
 агар мо инкор мекараги бошим пеш аз номи оператор аломати ! гузоштанамо дакор.
*/


console. log ('vasya' || 'oleg');//vasya
console.log(false ||'oleg');//oleg
console.log('vasya'||false);//vasya
console.log(false||false);//false

console.log('vasya'&&'oleg');//oleg
console.log('vasya'&&false);//false
console.log(false &&'oleg');//false
console.log(false && false);//false

const isAdmin1=false;
const fileName=isAdmin1&&'fale.mp4';
console.log(fileName)
/*
хаминчанда изадмин фолс (0) баробар
хамунба номи файл чоп намешад агар вай 
кимматаш тру(1)  бошад номи файли файл.мр4
чоп мешад.
*/


/*
бо аломати ?? хайки ин аломат агар мо
ё null ё дига киммат мегуфтаги бошим 
бачои дута хати рост || хамин дута
аломати савола ?? менависим
*/





/*
пользователь хочет приобрести игру в магазине.
он может это сделать только если:
-его баланс больше 100(balance)
или число бонусов больше 100(bonusBalance)
-он не забонен(isBanned)
-игра не куплена(isExist)
-игра в продаже(isSelling)
напишите условиедля покупки и выведите в консоль
результат.
*/

const balance1=1052;
const bonusBalance=90;
const isBanned=false;
const isExist=false;
const isSelling=true;
const otvet=(balance1>1000 || bonusBalance>100)
      && !isBanned
      && !isExist
      && isSelling;
console.log(`могу купить: ${otvet ? 'Да':"Hem"}`);//da



//ФУНКЦИИ
 function logName(name,surename){
    console.log(`моё имя  ${name} ${surename}`);
 }

 logName('Anton','Larichev');

 function countDepozitSum(depozitInUSD, month, rate){
    const sum=depozitInUSD*(1+rate/12)**month;
    return sum;
 }

 const  example1=countDepozitSum(1000,24,0.12);
 console.log(example1);

 const  example2=countDepozitSum(10785,24,0.12);
 console.log(example2);

 //Анонимные функции
 function powerOfTwo(num1){
    return num1*num1;
 }
 console.log(powerOfTwo(5));

 const poft=function(num1){
return num1*num1;
 }
 console.log(6);

//ика дарко нею аку хай хамтиношам 

//Стрелочные функции
const powOfT=(num2)=>num2*num2;
console.log(powOfT(5));

/*харду хамин функция вактое нависта мешавад
 ки агар кимматаш бади худаш биед.
 агар кимматаш пеш аз функция биедагар
 якум вариант нависта мешавад
*/
  
 //мисол як ададро ба дарачаи n бардоред.;

const toPowerArrow=(num3, n)=>num3**n;
console.log(toPowerArrow(2,3));
//условия в функциях
function canAccesWebSite(age){
    if(age <18){
        return false;
    }
    return true;
}
console.log(canAccesWebSite(16));

//функции в функциях
const kG_In_USD=7;
const kM_In_USD=5;
function calculateW(present){
    return present*kG_In_USD;
} 
function calculateKm(distance){
    return distance*kM_In_USD;
} 

function getExchangePrice(present1,present2,distance){
const price1=calculateW(present1);
const price2=calculateW(present2);
const distancePrice=calculateKm(distance);
return price1+price2+distancePrice;
 }
 console.log(getExchangePrice(1,2,10))