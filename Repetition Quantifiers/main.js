var regex = /[\s,]+/;
var str = "My favourite colors are red, green and blue";
var parts = str.split(regex);
console.log(parts);

for(var part of parts){
    console.log(part);
}
