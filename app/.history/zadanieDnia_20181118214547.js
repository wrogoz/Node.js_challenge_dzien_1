function delay(num){
    setTimeout(() => {
        console.log(num)
    }, num*1000);
}

for(let i=2; i<process.argv;i++){
   console.log( delay(parseInt(process.argv[i])));
}