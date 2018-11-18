let arr=[];

for (let i = 2; i < (process.argv).length; i++) {
    arr.push(process.argv[i])
};
console.log(arr)