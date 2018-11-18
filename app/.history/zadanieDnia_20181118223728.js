let arr=[];
function compareNumbers(a, b) {
    return a - b
}
for (let i = 2; i < (process.argv).length; i++) {
    arr.push(process.argv[i])
};
arr.sort(compareNumbers);
