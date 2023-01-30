const roles=['superUser','iAm','lol','user','admin','manager'];

let elIndex=roles.indexOf('admin');
console.log(elIndex);
// ин индекси элемента меевад
const res=roles.slice(2,4);
// ин оператор мебурад а 2юм эл (2куш) то 4ум элемента (4 кушне)лекин массивба намерасад
console.log(res);
console.log(roles);
const res2=roles.splice(2,2);
//инаш якбора а массив мебурад хам сони а эл 2 сар кара 4та ояндаша
console.log(res2);
console.log(roles);
const res4=roles.reverse();
console.log(res4);
console.log(roles);
//инам сплайсбоин мссава дига мекунад ин поскуно е чаппа мекунад
// бо оператори конкат хай вай дута массива конкатенатсия мекунад 2 та массива
