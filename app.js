//Massiv
const users=['anna','vika','katya'];
console.log(users);
users[2]='kristina';
console.log(users);

const arrLength=users.push('nikita');
/* хамин push бади охирон элемент якти дига 
элемент куш мекунад агар unshift нависим
а хама пеш якти дига эл куш мекунад
*/
console.log(users);
console.log(arrLength);
users.unshift('vasya');
console.log(users);
users.pop();
users.shift();
console.log (users);
users.pop();
users.shift();
console.log(users);
/*
хаминчашанда оператори 
поп а акибу оператори 
шифт а пеш якта якта элемента 
удалит мекунад
*/

