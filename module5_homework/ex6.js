let arr1 = [1, true, undefined, 'uuuu', NaN];
    let arr2 = [1, true, undefined, 'uuuu', NaN];
    k = 0;

      for (i=0; i<arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
          k++;
        }
        if (Number.isNaN(arr1[i]) && Number.isNaN(arr2[i])) {
            k++;
        }
      }
    

      if (k == arr1.length) {
        console.log(true)
      }
      else {
        console.log(false)
      }