function delay(num){
    setTimeout(() => {
        console.log(num)
    }, num*1000);
};
let arr=[]
for(let i=2; i<process.argv;i++){
   arr.push(process.argv);
}
console.log(arr);