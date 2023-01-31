let i=Number;
let tasks=new Array();//тарзи эълонкунии МАССИВ
for (i=0;i<=10;i++){
    tasks[i]='задача '+i;
    console.log(tasks[i]);
}
console.log('.........');
for (i=0;i<=10;i++){
    if (tasks[i]==='задача 2'){
        continue;
    }
    console.log(tasks[i]);
}
console.log('.........');
for (i=0;i<=10;i++){
    if (tasks[i]==='задача 2'){
        break;
    }
    console.log(tasks[i]);
}
//Фарки байни континю кати брик-а беннн
//континю хамуншартанги катора пафта давомаша кор кар
//брик шартба рафта а сикл бурумад888
//888888888888888888888