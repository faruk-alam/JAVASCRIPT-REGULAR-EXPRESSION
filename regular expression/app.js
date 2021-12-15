   // Literal syntax
   var str = "Mr. Gray";
   var regex1 = /Mr\./;
   if(regex1.test(str)){
       console.log("found match.")
   }
   else{
       console.log("found no match.")
   }

 // Constructor syntax
 var regex2 = new RegExp("Mr\\.");
 if(regex2.test(str)){
    console.log("found match.")
}
else{
    console.log("found no match.")
}