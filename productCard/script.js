const image = document.querySelector(".myImages");
const next = document.querySelector(".next");
const productName = document.querySelector(".productName");
const price = document.querySelector(".price");
const discount = document.querySelector(".discount");
const describ = document.querySelector(".decrib");

const data = [
  {
    id: 1,
    prdouctName: "Men Joggers",
    productImage: "img/1.JPG",
    productPrice: 1000,
    description:
      "When the school name is changed it should changed across all fields of the website and every feature in it(report cards, teachers, students, footer, dashboards and many more) , also the Moto of the school should be used on the report cards instead of the TechX own, ",
    discount: 40,
  },
  {
    id: 2,
    prdouctName: "Casual T-Shirts",
    productImage: "img/2.JPG",
    productPrice: 110,
    description:
      "Also the students directory alsow users to be able to choose to see all students, females or males(gender based, make it an option like a drop down and the year when searching to print report cards the year should be selectable(options), I mean it should b years the school has used before or data it has",
    discount: 34,
  },
  {
    id: 3,
    prdouctName: "Men White Suit",
    productImage: "img/3.JPG",
    productPrice: 170,
    description:
      "Add a feature to Both the superadmin and the schools, for instance im a new school and I want to import my school data from a civ file into the school management system, allow me to be able to import them and every data will be moved into it respective sections and fields and also if the db doesn't have any field for certain details, the system should automatically create them and those that are not available should be marked with N/A",
    discount: 30,
  },
];

//Default image on load
image.src = "img/1.JPG";
function changeImage() {
  let randomNumber = Math.floor(Math.random() * data.length);
  image.src = data[randomNumber].productImage;
  productName.textContent = data[randomNumber].prdouctName;
  price.textContent = `$ ${data[randomNumber].productPrice}.00`;
  describ.textContent = data[randomNumber].description;
  discount.textContent = `Discount: ${data[randomNumber].discount}%`;
}

next.addEventListener("click", changeImage);

let buyButton = document.querySelector(".buy");
const quantity = document.querySelector(".quantity");
const quantityPrice = document.querySelector(".quantityPrice");

const notification = document.querySelector(".notification");

let myQuantity = 0;
quantityPrice.textContent = myQuantity
function buyItem() {
  myQuantity += 1;
  quantityPrice.textContent = myQuantity;
  console.log(myQuantity);

  const myMessage = document.createElement("p");
  myMessage.classList.add("message");

  setTimeout(() => {
    myMessage.textContent = "Added to Cart";
    myMessage.style.backgroundColor = " rgba(207, 207, 207, 0.29)";
    setTimeout(()=>{
        myMessage.remove()
    },5000)
  });

  notification.appendChild(myMessage);
}

buyButton.addEventListener("click", buyItem);
