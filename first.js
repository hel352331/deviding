var first_number = +prompt("Input first number");
if (isNaN(first_number) || first_number == 0){
  alert("Input correct number");
}else{
  var second_number = +prompt("Input second number");
  if (isNaN(second_number) || second_number == 0 || second_number > first_number){
    alert("Input correct number");
  }else{
    var result = first_number % second_number;
    if(result == 0){
      alert('The rest is 0');
    }else{
      alert("The rest is " + result);
    }
  }
}
