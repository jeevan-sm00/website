const addbtn = document.querySelectorAll(".addbtn");
const para = document.getElementById("para");

addbtn.forEach(btn =>{
    btn.addEventListener("click", event=>{
        if(btn.textContent ==="Add to Cart"){
        btn.textContent = "Added";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";

const addbtn = document.querySelectorAll(".addbtn");

addbtn.forEach(btn => {

    // Check whether this food was previously added
    const food = btn.dataset.food;

    if (localStorage.getItem(food) === "added") {
        btn.textContent = "Added";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
    }

    btn.addEventListener("click", event => {

        if (btn.textContent === "Add to Cart") {

            btn.textContent = "Added";
            btn.style.backgroundColor = "black";
            btn.style.color = "white";

            localStorage.setItem(food, "added");

        }
        else {

            btn.textContent = "Add to Cart";
            btn.style.backgroundColor = "white";
            btn.style.color = "black";

            localStorage.removeItem(food);
        }

    });
});




const divv = document.getElementById("lists");

function addfood(food,price){
    const newdiv = document.createElement("div");

    const foodname = document.createElement("p");
    foodname.textcontent = food;

    const foodprice = document.createElement("p");
    foodprice.textcontent = `₹${price}`;
    newdiv.appendChild(foodname);
    newdiv.appendChild(foodprice);

    divv.appendChild(newdiv);

}