let arr=[];

for (let i = 2; i < (process.argv).length; i++) {
    arr.push(process.argv[i])
};
for(let i=2; i<(process.argv).length;i++){

    setTimeout(() => {
        console.log(process.argv[i])

    }, parseInt(process.argv[i])*1000);
}