// set up text to print, each item in array is new line
var aText = new Array(
    "Hi , we are making warm, fresh and made-to-order donuts. we have kept our focus on offering a welcoming, family-friendly and delicious experience to everyone that visits  our stores. The teams who manage and work in our stores make all the difference, and we are very proud of their dedication and contributions.", 
    "We love to create donuts, and we love to create smiles! Our many fans tell us we are on the right track, and while there may be other donuts out there—we feel we’ve found a pretty special combination. We’re keeping it simple and delicious!",
      'This is our family serving your family, and we want you to come back! '
    );
    var iSpeed;
    if(window.innerWidth<700) iSpeed=40;
    else iSpeed=30;
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
        if(window.innerWidth<700){
    document.querySelector('.box').scrollTop=document.querySelector('.box').scrollHeight
        }
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();