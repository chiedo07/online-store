// icons 
let navbar = document.querySelector(".navbar");
let navbars = document.querySelector("#navs")
let cart = document.querySelector(".cart");
let search = document.querySelector(".search-btn");


document.querySelector("#menu-icon").onclick = () =>{
  navbar.classList.toggle("active");
  if(navbar.classList.contains("active")){
    navbars.style.display="block";
    cart.style.display = "none";
    search.style.display = "none";
  }
}
document.querySelector("#cart-icon").onclick = () =>{
  cart.classList.toggle("active");
  if (cart.classList.contains("active")){
    navbars.style.display="none";
    cart.style.display = "block";
    search.style.display = "none";
  } 
}

document.querySelector("#search-icon").onclick = () =>{
    search.classList.toggle("active");
    if (search.classList.contains("active")){
      navbars.style.display="none";
      cart.style.display = "none";
      search.style.display = "block";
    } 
}
window.onscroll = () => {
      navbars.style.display="none";
      cart.style.display = "none";
      search.style.display = "none";
}

// search input
const searchs = document.getElementById("search");
searchs.addEventListener("keyup", e =>{
  let currentinput = e.target.value.toLowerCase();
  let names = document.querySelectorAll("h3");
  names.forEach(nam => {
    if(nam.textContent.toLowerCase().includes(currentinput)){
        nam.parentNode.parentNode.style.display ="block";
    }else{
      nam.parentNode.parentNode.style.display ="none";
    }
  })
})

// Add to cart functionality
var count = 0;
let b = "";
let a = "";
function addtocart(men){
  count++;
  document.getElementById("cart-icon").innerHTML = count;
  var item = document.createElement("div");
  item.classList.add("cartimg");
  item.setAttribute("id",count);
  var img = document.createElement('img');
  img.setAttribute('src', men.children[0].currentSrc);
  var tittle = document.createElement("div");
  tittle.classList.add("tittles");
  const tit = men.children[1];
  t = tit;
  tittle.innerText = t.innerText;
  var prize = document.createElement("div");
  prize.classList.add("prizes");
  const pri = men.children[2].children[0];
  p = pri;
  prize.innerText = p.innerText;
  var counter = document.createElement("div");
  counter.classList.add("counterz");
  var add = document.createElement("span");
  add.classList.add("adds");
  var rem = document.createElement("span");
  rem.classList.add("rems");
  var tot = document.createElement("span");
  tot.classList.add("total");
  var plus = document.createTextNode("+");
  var num = document.createTextNode("1");
  var sub = document.createTextNode("-");
  var add = document.createElement("span");
  add.classList.add("adds");
  add.appendChild(plus);
  tot.appendChild(num);
  rem.appendChild(sub);
  counter.appendChild(add);
  counter.appendChild(tot);
  counter.appendChild(rem);
  var del = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  del.appendChild(txt);
  del.classList.add("delete");
  del.setAttribute("onclick", 'dell('+count+')');
  var cart = document.getElementById("cart1");
  item.append(img);
  item.append(tittle);
  item.append(prize);
  item.append(del);
  item.append(counter);
  
  cart.append(item);

  if (count == 0) {
    document.getElementById("chk").style.display = "none";
  }else{
    document.getElementById("chk").style.display="inline" ;
  }
  let x = 1;
  
  add.addEventListener("click" , () => {
     x++;
     tot.innerText = x;
     console.log(x); 
     let be =  men.children[2].children[0].innerText;
     a = '£' + be * x;
        prize.innerHTML = a
     console.log(b);  
     var sum = a + b ;
     console.log(sum)
       
  });
  
  rem.addEventListener("click" , () => {
     if(x > 1){
        x--;
     
        tot.innerText = x;
        console.log(x);  
        let be = men.children[2].children[0].innerText;
        a = '£' + be * x;
        prize.innerHTML = a
        console.log(a);  
        var sum = a + b ;
        console.log(sum)
        
     }
  });  
}

function dell(menu){
  document.getElementById(menu).remove();
   count--;
   document.getElementById("cart-icon").innerHTML = count;
   if (count == 0) {
    document.getElementById("cart-icon").innerHTML = "";
  }else{
    document.getElementsById("chk").style.display= "block";
  }
  if (count == 0) {
    document.getElementById("chk").style.display = "none";
  }else{
    document.getElementById("chk").style.display="inline" ;
  }
} 
function inc() {
positive = document.getElementsByClassName("adds");
negative = document.getElementsByClassName("rems");
value = document.getElementsByClassName("tots");
val = document.getElementsByClassName("prices");
let x = 0;
positive.addEventListener("click" , (men) => {
    
   x++;
   value.innerText = x;
   console.log(x);
   b = x * men.children[2].children[0];
    val.innerHTML = new Intl.NumberFormat('en-US',options).format(b);
    console.log(val);   
});

negative.addEventListener("click" , () => {
    
   if(x > 1){
      x--;
     value.innerText = x;
      

   }
}); 

}

//increaments


