const id = new URLSearchParams(window.location.search).get('id')
const details = document.querySelector('#product-details')

async function showProduct() {
    if (!id) {
        details.textContent = 'Product not found.'
        return
    }

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) throw new Error(`Request failed: ${response.status}`)

        const product = await response.json()

        const productImg = document.createElement('img')
        productImg.classList.add('productImg')
        productImg.src = product.image
        productImg.alt = product.title

        const productName = document.createElement('h2')
        productName.classList.add('name')
        productName.textContent = product.title

        const productPrice = document.createElement('p')
        productPrice.classList.add('price')
        productPrice.textContent = `Price: $${product.price}`

        const productDescription = document.createElement('p')
        productDescription.textContent = product.description

        const addToCartBtn = document.createElement('button')
        addToCartBtn.classList.add('addbtn')
        addToCartBtn.textContent = "Add to Cart"

        details.replaceChildren(productImg, productName, productPrice, productDescription, addToCartBtn)
    } catch (error) {
        console.error(error)
        details.textContent = 'Unable to load this product.'
    }
}

showProduct()