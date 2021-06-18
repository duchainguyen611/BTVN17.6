let number = [];

for(let i =0;i<10;i++){
    number[i] = +prompt("Nhap phan tu thu " + (i+1) +":");
}
let tg;
for(let i=0;i<9;i++){
    for(let j=i+1;j<10;j++){
        if(number[i]<number[j]){
            tg=number[i];
            number[i]=number[j];
            number[j]=tg;
        }
    }
}
for(let i=0;i<10;i++){
    document.write(number[i] +" ");
}
   