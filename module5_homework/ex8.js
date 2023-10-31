let map = new Map([['name', 'Viktor'], ['age', 12]]);

    for (let key of map.keys()) {
      console.log('Ключ - ' + key+', '+'значение - '+ map.get(key))
    }