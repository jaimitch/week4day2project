/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/



function handValue(hand) {

  var handResult = 0;

  var ace = 0;

  for (var i = 0; i < hand.length; i++) {

      if(hand[i] === "K" || hand[i] === "Q" || hand[i] === "J"){
        
        handResult += 10;
        // console.log(handResult);
      }
      else if (hand[i] === "A") {
        
        handResult += 11;
        ace += 1;
        // console.log(handResult);
        
      }
      else {

        handResult += parseInt(hand[i]);
      
    }
        
  }
     while (handResult > 21){
       if (ace >=1){
         handResult -= 10;
         ace -= 1;
       }

     }
          

  return handResult;

}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/