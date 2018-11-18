function delayq(num){
    setTimeout(() => {
        console.log(num)
    }, parseInt(num)*1000);
};

for(let i=2; i<process.argv;i++){
   console.log(delayq(process.argv[i]));
}
