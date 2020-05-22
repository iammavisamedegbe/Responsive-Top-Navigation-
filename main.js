function toggleNav(){
  var x = document.getElementById("MyNav");
   if (x.className === "mainNav") {
     x.className += " responsive";
   } else {
     x.className = "mainNav";
   }

}
