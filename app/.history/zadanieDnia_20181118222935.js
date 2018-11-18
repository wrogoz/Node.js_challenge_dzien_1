

for(let i=2; i<(process.argv).length;i++){

    setTimeout(() => {
        console.log(process.argv[i])

    }, parseInt(process.argv[i])*1000);
}