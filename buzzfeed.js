function whenButtonClicked(){
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
 
document.getElementById("text").innerHTML = "New text!";
document.getElementById("text").innerHTML = choices[0]; 
// var mostCommonElement = choices[0]
 // for(var x = 0; x < choices.length; x++){
  // var current = choices[x];
   //for(var y = x;){
      
    //}
 // }  

 
}
