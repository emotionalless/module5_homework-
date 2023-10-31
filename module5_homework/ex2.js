var x = 'Число';
    typeOperand = typeof(x);

    switch (typeOperand) {
      case "number":
        console.log(x + " - это число");
        break;
      case "string":
        console.log(x + " - это строка");
        break;
      case "boolean":
        console.log(x + " - это логичечкий тип");
        break;
      default:
        console.log("Тип "+ x + " не определён"); 
    }
