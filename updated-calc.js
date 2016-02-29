//add
document.getElementById('plus').onclick = function add(num1, num2){
  var num1 = document.getElementById('first').value;
  var num2 = document.getElementById('second').value;
  var w = parseFloat(num1) + parseFloat(num2);
  var plustring = num1 + "+" + num2 + "=" + w;
  if (num1 == " " || num2 == " ") {
    document.getElementById('result').innerHTML = 'Please input a number.'
  } else {
    document.getElementById('result').innerHTML = plustring;
  }
}


//subtract
document.getElementById('minus').onclick = function subtract(num1, num2){
  var num1 = document.getElementById('first').value;
  var num2 = document.getElementById('second').value;
  var x = parseFloat(num1) - parseFloat(num2);
  var minustring = num1 + "-" + num2 + "=" + x;
  if (num1 == " " || num2 == " ") {
    document.getElementById('result').innerHTML = 'Please input a number.'
  } else {
    document.getElementById('result').innerHTML = minustring;
  }
}

//multiply
document.getElementById('times').onclick = function multiply(num1, num2){
  var num1 = document.getElementById('first').value;
  var num2 = document.getElementById('second').value;
  var y = parseFloat(num1) * parseFloat(num2);
  var timestring = num1 + "x" + num2 + "=" + y;
  if (num1 == " " || num2 == " ") {
    document.getElementById('result').innerHTML = 'Please input a number.'
  } else {
    document.getElementById('result').innerHTML = timestring;
  }
}

//divide
document.getElementById('per').onclick = function divide(num1, num2){
  var num1 = document.getElementById('first').value;
  var num2 = document.getElementById('second').value;
  var z = parseFloat(num1) / parseFloat(num2);
  var perstring = num1 + "-" + num2 + "=" + z;
  if (num1 == " " || num2 == " ") {
    document.getElementById('result').innerHTML = 'Please input a number.'
  } else {
    document.getElementById('result').innerHTML = perstring;
  }
}
