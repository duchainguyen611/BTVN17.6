let number = [];

for(let i =0;i<10;i++){
    number[i] = +prompt("Nhap phan tu thu " + (i+1) +":");
}
console.log(number);
let V = +prompt("Nhap 1 so nguyen bat ki:");
let check = false;
for(let i=0;i<10;i++){
    if( V == number[i]){
        number[i]=number[i+1];
        i++;
        number[9]=0;
        check=true;
    }
    document.write(number[i]+" ");
}
if(check==false){
    alert("V is not in the array");
}