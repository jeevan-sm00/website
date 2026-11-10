const addbtn = document.querySelectorAll(".addbtn");

addbtn.forEach(btn =>{
    btn.addEventListener("click", event=>{
        if(btn.textContent ==="Add to Cart"){
        btn.textContent = "Added";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";



    }
    else{
        btn.textContent = "Add to Cart";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";        
    }

    });
});



const divv = document.getElementById("divv");
const total = document.getElementById("total");
let totalprice = 0;


function addfood(food,price){
    
    const existingfood = document.getElementById(food);

    if (existingfood) {
        existingfood.remove();
        totalprice -= price;
        total.textContent = `₹${totalprice}`;

    }
    else {
        
    const newfood = document.createElement("div");
    newfood.id = food;
    newfood.classList.add("food-item");

    const foodname = document.createElement("span");
    
    foodname.textContent = food;

    const foodprice = document.createElement("span");
    foodprice.textContent = `₹${price}`;

    newfood.appendChild(foodname);
    newfood.appendChild(foodprice);

    divv.appendChild(newfood);

    totalprice += price;

    total.textContent = `₹${totalprice}`;
    
}
}




