let arr = [0, 1, 2, 3, 4, null, NaN, undefined, true, 'stringg'];
    let evenNumbers = 0;
    let notEvenNumbers = 0;
    let zeroNumbers = 0;

    for (i=0; i<arr.length; i++) {
    
       if (Number.isInteger(arr[i])) {
         if ((arr[i] % 2) === 0 && (arr[i] !== 0)) {
           evenNumbers++;
         }
         if ((arr[i] % 2) === 1) {
           notEvenNumbers++;
         }
         if (arr[i] === 0) {
             zeroNumbers++;
             }
       }
    }

    console.log('Четных чисел массива: ' + evenNumbers);
    console.log('Нечетных чисел массива: ' + notEvenNumbers);
    console.log('Нулевых чисел массива: ' + zeroNumbers);
