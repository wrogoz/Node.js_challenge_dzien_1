function delayq(num){
    setTimeout(() => {
        console.log(num)
    }, parseInt(num)*1000);
};

delayq(8);