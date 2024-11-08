
//multiplyArray([1, 24, 3, 4, 2], 3);    expected: [3, 72, 9, 12, 6]
//multiplyArray([1, 24, 3, 4, 2]);        expected: [2, 48, 6, 8, 4]

function multiplyArray(array, factor){

    console.log("main array is :  " + array + " and factor is  :  " + factor);

    let newArray=[];
    let value= factor??2;
    for (let i=0; i<array.length; i++) {
        newArray[i] = value * array[i];
    } 
    console.log(newArray);
}

 multiplyArray([1, 24, 3, 4, 2], 3);
 multiplyArray([1, 24, 3, 4, 2]);