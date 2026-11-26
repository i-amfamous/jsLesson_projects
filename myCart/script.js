const cart = document.querySelector('.cart')
const CART_API = `https://fakestoreapi.com/products?utm_source=chatgpt.com`

const loadingMessage = document.createElement('p')
loadingMessage.classList.add('loading')

async function displayProducts(){
    loadingMessage.textContent = "Loading products..."
    cart.appendChild(loadingMessage)
    try{
        const response = await fetch(CART_API)
        if (!response.ok) {
            throw new Error(`Unable to load products (HTTP ${response.status})`)
        }

        const data = await response.json()
        console.log(data)
        
        loadingMessage.remove()
        data.forEach(product => {
            const cartItem = document.createElement('a')
            cartItem.classList.add('cartItem')
            cartItem.href = `./product.html?id=${product.id}`

            const productImg = document.createElement('img')
            productImg.classList.add('productImg')
            productImg.src = product.image
            productImg.alt = "product Image"

            const productName = document.createElement('h2')
            productName.classList.add('name')
            productName.textContent = product.title

            const productPrice = document.createElement('p')
            productPrice.classList.add('price')
            productPrice.textContent = `Price: ${product.price}`

            const addToCartBtn = document.createElement('button')
            addToCartBtn.classList.add('addbtn')
            addToCartBtn.textContent = "Add to Cart"

            cartItem.append(productImg, productName, productPrice, addToCartBtn)
            cart.appendChild(cartItem)
        })
    } catch (error) {
        console.error(error)
        cart.textContent = "Unable to load products. Please try again."
    }
}

displayProducts();