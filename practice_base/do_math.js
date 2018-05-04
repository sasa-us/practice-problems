function do_math(num1, num2, operator) {
  console.log("inside");
  var result = 0;
  switch(operator) {
    case '+' :  result = num1 + num2;
    break;
    
    case '-': result = num1 - num2;
    break;
    
    case '*': result = num1 * num2;
    break;
    
    case '/': result = num1/num2;
    break;
    
    default: return result;
             
  }//end switch
  return result;
}

do_math(5, 2, '+');
