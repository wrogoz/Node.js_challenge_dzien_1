function delayq(tx,num){
    setTimeout(() => {
        console.log(tx);
    }, (parseInt(num)*1000);
};

console.log(delayq(`haha`,8));