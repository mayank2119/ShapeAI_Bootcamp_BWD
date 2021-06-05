import React from "react";

function footer() {
  var CurrYear=new Date().getFullYear(); 


  return(
<footer>
  <p>Copyright - {CurrYear}</p>
  </footer>
  );
}

export default footer;