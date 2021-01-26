function fibonacci(number){
  var number0 = 0;
  var number1 = 1;
  var numberN = 1;
  var number = parseInt(number);
  if(number == 0 || number == 1){
    console.log(number); 
  }else{
    for(var i  = 2; i < number; i++ ){
      number0 = number1;
      number1 = numberN;
      numberN = number0 + number1;
    }
  }
  console.log(numberN);
}

function nFibonacci(n){
  var n = parseInt(n);
  for(var i = 0; i < n; i++){
    console.log(fibonacci(i));
  }
}

nFibonacci(10);