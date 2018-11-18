function delay(num){
    setTimeout(() => {
        console.log(num)
    }, parseInt(num)*1000);
};
let arr=[]
for(let i=2; i<process.argv;i++){
   console.log(delay(process.argv[i]));
}
