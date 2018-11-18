function delayq(num){
    setTimeout(() => {
        console.log(num);
    }, (parseInt(num))*1000);
};

console.log(delayq(8));