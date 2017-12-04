var i,flag=0;
for(i=1;i<=100;i++){
if(i%3==0){
    flag=1;
    console.log(i+" Earth");
}
if(i%5==0){
    flag=1;
    console.log(i+" Jupiter");
}
if(i%9==0){
    flag=1;
    console.log(i+" Pluto");
}
if(flag==0){
    console.log(i+"--Not a multiple of 3,5,9--");
}
flag=0;
}