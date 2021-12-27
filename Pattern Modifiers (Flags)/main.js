var reg1 = /color/g;
var reg2 = /color/gi;
var str = "Color red is more visible than color blue in daylight.";
var match = str.match(reg1);
console.log("Found " + match.length +": "+ match);
match = str.match(reg2);
console.log("Found " + match.length +": "+ match);