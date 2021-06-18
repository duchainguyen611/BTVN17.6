
let number = [];

for(let i =0;i<10;i++){
    number[i] = +prompt("Nhap phan tu thu " + (i+1) +":");
}
do{
    console.log(number);
    let V = +prompt("Nhap 1 so nguyen bat ki:");
    let check = false;
    for(let i=0;i<10;i++){
        if( V == number[i]){
            alert("V is in the array");
            check = true;
        }
    }
    if(check==false){
        alert("V is not in the array");
    }
}while(1);