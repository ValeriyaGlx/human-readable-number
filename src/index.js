module.exports = function toReadable (number) {
let n = newArr;
let newArr=[];
let arr = n.toString().split('').map(a => Number(a));

for (i=0;i<arr.length;i++){


let a = arr[i];

    switch(a){
        case 0:
            newArr.push('');
        break;

        case 1:
            newArr.push('one');
        break;

        case 2:
            newArr.push('two');
        break;

        case 3:
            newArr.push('three');
        break;

        case 4:
            newArr.push('four');
        break;

        case 5:
            newArr.push('five');
        break;

        case 6:
            newArr.push('six');
        break;

        case 7:
            newArr.push('seven');
        break;

        case 8:
            newArr.push('eight');
        break;

        case 9:
            newArr.push('nine');
        break;


        default: return;

}
}

if (newArr.length > 2){
    newArr.splice(1, 0, 'hundred')
}
return newArr.join(' ')
}
