function singleton () {
  var lastValue;

  return function (array) {
    let value = selectFrom(array);
    while (value == lastValue) {
      console.log(array, lastValue, value);
      value = selectFrom(array);
    }
    lastValue = value;
    return value;
    function selectFrom (array) {
      return array[parseInt(Math.random()*array.length)];
    }
  }
}

export default singleton();
