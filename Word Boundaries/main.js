var regex = /(\bcar\w*)/g;
var str = "Words begining with car: cart, carrot, cartoon. Words ending with car: oscar, supercar.";
var replacement = '<b>$1</b>';
var result = str.replace(regex, replacement);
console.log(result);