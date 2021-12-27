var regex = /^J/;
var names = ["James Bond", "Clark Kent", "John Rambo"];
for(var nam of names) {
    if(regex.test(nam)){
        console.log(nam);
    }
}
