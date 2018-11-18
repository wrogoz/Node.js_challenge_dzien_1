function delayq(tx,num){
    setTimeout(() => {
        let time=parseInt(num)*1000;
        
        console.log(tx);
    }, time);
};

console.log(delayq(`haha`,8));