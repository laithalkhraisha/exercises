// 1. ‐9*3   =-27      
// 2. “value is “ + 50   =value is 50
// 3. 17 % 5     =25
// 4. 5 % 17  =5      
// 5. 5/10   =2      
// 6. (4 == 4)   true     
// 7. (4 != 5)  true  
// 8. (7 <= 8) true  
// 9. Math.ceil(x) ‐ Math.floor(x) 

function alertnum() {
  
    num = prompt("Please enter your number:", "");
 
    alert("the number is "+ "   " +num);
    
  }
  function numberorder() {
  
    num = prompt("Please enter your number:", "");
    num2 = prompt("Please enter your number:", "");
 if(num>num2){
    alert(num2+" "+num)
    

 }
 else if(num<num2){
    alert(num+" "+num2)
 }
 else{
   alert(num+" "+num2) 
 }
   
    
  }
  function numberlarg() {
  
    num = prompt("Please enter your number:", "");
    num2 = prompt("Please enter your number:", "");
 if(num>num2){
    alert(num)
    

 }
 else if(num<num2){
    alert(num2)
 }
 else{
   alert("equal") 
 }
   
    
  }
  function numbersum() {
  
    num =parseInt( prompt("Please enter your number:", ));
    num2 =parseInt( prompt("Please enter your number:", ));
 
    alert(num+num2);
    
  }
  function switchnum() {
  
    num =parseInt( prompt("Please enter your number:", ));
    switch(num){
        case 1:
    alert("ONE");
    break;
  case 2:
    alert("TWO");
    break;
  case 3:
    alert("THREE");
    break;
  case 4:
    alert("FOUR");
    break;
  case 5:
    alert("FIVE");
    break;
  case 6:
    alert("SIX");
    break;
  case 7:
    alert("SEVEN");
    break;
    case 8:
        alert("EIGHT");
    break;
    case 9:
        alert("NINE");
        break;
        default:
            alert("PLEASE TRY AGAIN, if there is none of the above.");
    }
    
 
    
    
  }
  function alertloop() {
  
    for(let i=0;i<=5;i++){
      alert(i);

    }
    
  }
  let numalert=[];
  function pushloop() {
  
    for(let i=0;i<=5;i++){
    numalert.push(i);

    }
    alert(numalert);
  }
  let multiples=[];
  function multiples3() {
  
    for(let i=1;i<=20;i++){
      if(i%3==0){
      multiples.push(i);
      
    }
    }
    alert(multiples);
  }
  function numberinput() {
   let put= prompt("input number ",); 
    while(parseInt(put) > 100){
      put= prompt("error number try again  ",); 

    }
    alert(put);
   
  }
  function numbernan() {
    let put= prompt("input number ",); 
     while(isNaN(put)==true || parseInt(put)>100){
       put= prompt("error number try again  ",); 
 
     }
     alert(put);
    
   }
var sum=0;
   function numsum() {
    let put= prompt("input number ",); 
     for(i=0;i<=parseInt(put);i++){
      sum+= i;

     }
     
     alert(sum);
    sum=0;
   }
   function average() {
    let put= prompt("input number ",); 
     for(i=0;i<=parseInt(put);i++){
      sum+= i;

     }
     
     alert(sum/i);
    sum=0;
   }