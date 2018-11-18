let arr=[];
function compareNumbers(a, b) {
    return a - b
}
for (let i = 2; i < (process.argv).length; i++) {
    arr.push(process.argv[i])
};
arr.sort(compareNumbers);
for(let i=0; i<arr.length;i++){
    setTimeout(() => {
        
    }, parseInt(arr[i])*1000);
}
