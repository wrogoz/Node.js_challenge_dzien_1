function delayq(tx,num){
    setTimeout(() => {
        let time=num*1000;
        
        console.log(tx);
    }, (parseInt(num)*1000);
};

console.log(delayq(`haha`,8));