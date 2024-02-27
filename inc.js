plus = document.querySelector(".btn-inc");
subs = document.querySelector(".btn-dec");
num = document.querySelector(".cnt");
val = document.querySelector(".value");
let x = 0;
plus.addEventListener("click" , () => {
    
   x++;
 
   num.innerText = x;
   
   console.log(x);
   
});

subs.addEventListener("click" , () => {
    
   if(x > 1){
      x--;
   
     num.innerText = x;

      console.log(x);
      
   }
   
  
}); 
