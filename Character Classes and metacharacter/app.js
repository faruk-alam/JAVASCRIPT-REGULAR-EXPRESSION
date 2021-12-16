
const regex = /ca[kf]e/;
  const str = "He was eating cake in the cafe.";

 // Test the string against the regular expression
  if(regex.test(str)) {
          console.log("Match found!");
 } else {
          console.log("Match not found.");
 }
  //adding the global flag 
var regex2 = /ca[kf]e/g;
var str2 = "He was eating cake in the cafe.";
var matches = str2.match(regex2);
document.write("Found "+ matches.length + " matches : "+ matches);
console.log(matches);
