const products = [
          {
            id: 1,
            title: "Premium Over-Ear Headphones",
            slug: "premium-over-ear-headphones",
            price: 199.9,
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The Premium Over-Ear Headphones deliver exceptional sound quality and outstanding comfort. With a sleek design and durable construction, they are perfect for long listening sessions.",
            moreDetails:
              "The Premium Over-Ear Headphones are designed to deliver exceptional sound, with deep bass, clear mids, and crisp highs. Their ear cushions are made from soft, breathable material for lasting comfort. The sleek design and durable construction provide both style and longevity. Ideal for everyday use, travel, or extended gaming sessions.",
            featured: false,
          },
          {
            id: 2,
            title: "Ultimate Ergonomic Gaming Chair",
            slug: "ultimate-ergonomic-gaming-chair",
            price: 499.9,
            image:
              "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The Ultimate Ergonomic Gaming Chair provides exceptional comfort and support for long gaming sessions. With a modern design and adjustable features, it is ideal for gamers who want both performance and style.",
            moreDetails:
              "The Ultimate Ergonomic Gaming Chair is designed to provide comfort and support during long gaming sessions. Its ergonomic design includes lumbar and neck cushions, adjustable armrests, and a reclining backrest. High-quality materials ensure durability, while the synthetic leather finish and sturdy base add style and stability. Ideal for gamers looking for a modern chair that combines comfort and functionality.",
            featured: false,
          },
          {
            id: 3,
            title: "RGB Mechanical Gaming Keyboard",
            slug: "rgb-mechanical-gaming-keyboard",
            price: 299.9,
            image:
              "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The RGB Mechanical Gaming Keyboard delivers precision and speed for demanding gamers. With customizable RGB lighting and durable mechanical switches, it provides a superior gaming experience.",
            moreDetails:
              "The RGB Mechanical Gaming Keyboard is built for high performance. Its durable mechanical switches provide fast, precise responses to every keystroke. Customizable RGB lighting offers a range of colors and effects to set the mood for your gaming sessions. The ergonomic design includes a removable wrist rest for comfort during extended use. With sturdy construction and advanced features, this keyboard is an essential addition to any gaming setup.",
            featured: false,
          },
          {
            id: 4,
            title: "High-Precision Gaming Mouse",
            slug: "high-precision-gaming-mouse",
            price: 149.9,
            image:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The High-Precision Gaming Mouse is designed for accuracy and comfort. With an advanced optical sensor, RGB lighting, and programmable buttons, it is ideal for gamers seeking reliable performance.",
            moreDetails:
              "The High-Precision Gaming Mouse is an excellent choice for gamers seeking top performance. Its advanced optical sensor provides the fast, accurate tracking needed for competitive play. Customizable RGB lighting lets you tailor its look to your setup, while programmable buttons can be configured to suit your play style. The ergonomic design and quality materials provide comfort during extended use. An essential addition to any gaming setup.",
            featured: false,
          },
          {
            id: 5,
            title: "Complete Gaming Desk",
            slug: "complete-gaming-desk",
            price: 9999.9,
            image:
              "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The Complete Gaming Desk is ideal for gamers who want an organized setup. With plenty of space, an ergonomic design, and a premium finish, it provides comfort and functionality during gaming sessions.",
            moreDetails:
              "The Complete Gaming Desk is designed to keep your gaming space comfortable and organized. Its spacious surface accommodates your peripherals and accessories, making it suitable for elaborate setups. The ergonomic design encourages healthy posture during long sessions, while the premium finish offers durability and a refined look. There is room for a monitor, keyboard, mouse, PC tower, and other essentials. Ideal for creating a professional, well-organized gaming space.",
            featured: false,
          },
          {
            id: 6,
            title: "4K UltraWide Gaming Monitor",
            slug: "4k-ultrawide-gaming-monitor",
            price: 1299.9,
            image:
              "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
            images: [
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
            ],
            description:
              "The 4K UltraWide Gaming Monitor delivers an immersive viewing experience with 4K resolution and a wide color gamut. Ideal for gamers and content creators, it combines excellent image quality with a sleek design.",
            moreDetails:
              "The 4K UltraWide Gaming Monitor is designed for gamers and content creators who want excellent image quality. Its 4K resolution delivers sharp detail, while vibrant colors bring every scene to life. The ultra-wide screen expands your field of view for immersive gaming and efficient multitasking. A sleek design and slim bezels complement any setup, while features such as a fast refresh rate and eye-comfort technologies help make long sessions more comfortable. A premium choice for performance and style.",
            featured: false,
          },
          {
            id: 7,
            title: "RGB Mid-Tower Gaming Case",
            slug: "rgb-mid-tower-gaming-case",
            price: 399.9,
            image:
              "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The RGB Mid-Tower Gaming Case combines style and functionality with RGB lighting and a tempered-glass panel.",
            moreDetails:
              "The RGB Mid-Tower Gaming Case is designed for gamers who want a balance of style and functionality. Its spacious interior accommodates high-performance components and supports effective airflow and cooling. Customizable RGB lighting lets you personalize your setup, while the tempered-glass side panel showcases your PC's components. Multiple cable-management options help keep the interior neat and organized. A premium choice for any gaming setup.",
            featured: false,
          },
          {
            id: 8,
            title: "RGB ATX Gaming Motherboard",
            slug: "rgb-atx-gaming-motherboard",
            price: 549.9,
            image:
              "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The RGB ATX Gaming Motherboard supports the latest processors and high-performance components. With customizable RGB lighting and advanced features, it is ideal for building a powerful, stylish PC.",
            moreDetails:
              "The RGB ATX Gaming Motherboard is a great foundation for a powerful, stylish PC. Compatible with the latest processors, it supports high-performance components for smooth, efficient gaming. Customizable RGB lighting lets you personalize your build. Multiple expansion slots, high-speed USB ports, and NVMe storage support provide flexibility and performance. Advanced features such as overclocking and thermal management help keep your system running efficiently under heavy loads.",
            featured: false,
          },
          {
            id: 9,
            title: "RTX 3080 RGB Gaming Graphics Card",
            slug: "rtx-3080-rgb-gaming-graphics-card",
            price: 2999.9,
            image:
              "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The RTX 3080 RGB Gaming Graphics Card delivers powerful performance for demanding games. With customizable RGB lighting and real-time ray tracing, it brings detailed graphics and immersive gameplay to your setup.",
            moreDetails:
              "The RTX 3080 RGB Gaming Graphics Card is designed for gaming and graphics-intensive applications. Real-time ray tracing creates detailed, immersive visuals, while customizable RGB lighting lets you match the card to your setup. Its powerful GPU architecture delivers high frame rates and smooth performance in demanding games. Ideal for enthusiasts and content creators seeking a high-quality visual experience.",
            featured: false,
          },
          {
            id: 10,
            title: "750W Modular Gaming Power Supply",
            slug: "750w-modular-gaming-power-supply",
            price: 349.9,
            image:
              "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The 750W Modular Gaming Power Supply delivers stable power and energy efficiency for high-performance systems. Its modular design and quiet fan support reliable, tidy operation.",
            moreDetails:
              "The 750W Modular Gaming Power Supply is designed to provide stable, reliable power for high-performance systems. Its 750W capacity supports demanding components, while the modular design simplifies cable management, reduces clutter, and improves airflow inside the case. The quiet fan automatically adjusts its speed to the system load for efficient, low-noise operation. Its energy-efficiency certification helps reduce power consumption, making it a practical choice for gaming builds.",
            featured: false,
          },
          {
            id: 11,
            title: "16GB RGB DDR4 Gaming RAM",
            slug: "16gb-rgb-ddr4-gaming-ram",
            price: 499.9,
            image:
              "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The 16GB RGB DDR4 Gaming RAM delivers speed and performance for gaming and multitasking. With customizable RGB lighting and a sturdy design, it brings efficiency and style to your gaming setup.",
            moreDetails:
              "The 16GB RGB DDR4 Gaming RAM is designed for reliable performance in games and multitasking. Its 16GB capacity and high frequency provide fast response times and smooth operation in demanding games and applications. Customizable RGB lighting adds style and can be synchronized with other RGB components. Its sturdy design and quality construction provide durability and reliability. Ideal for gamers who value both performance and appearance.",
            featured: false,
          },
          {
            id: 12,
            title: "4K Professional Drone with Intelligent Flight Modes",
            slug: "4k-professional-drone",
            price: 1999.9,
            image:
              "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The 4K Professional Drone captures high-quality aerial footage with stability and precision. Equipped with a 4K camera, intelligent flight modes, and a compact design, it is ideal for professional photography and videography.",
            moreDetails:
              "The 4K Professional Drone is designed for photographers and videographers who need quality and precision in their aerial footage. Its high-resolution 4K camera captures detailed video and photos. Intelligent flight modes, including Follow Me, Waypoint, and Orbit, make it easier to capture complex scenes steadily and accurately. The compact, foldable design is easy to carry and store, making it ideal for professionals on the go. A long-lasting battery provides more flight time so you can capture important moments without interruption.",
            featured: false,
          },
          {
            id: 13,
            title: "Smartwatch Fitness Tracker",
            slug: "smartwatch-fitness-tracker",
            price: 299.9,
            image:
              "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The Smartwatch Fitness Tracker is an ideal companion for your workouts. With advanced health tracking, built-in GPS, and a water-resistant design, it is perfect for an active, healthy lifestyle.",
            moreDetails:
              "The Smartwatch Fitness Tracker is designed to support an active, healthy lifestyle. Health features include heart-rate, blood-oxygen, and sleep-quality tracking to help you monitor your well-being. Built-in GPS accurately tracks outdoor activities, and the water-resistant design is suitable for everyday conditions. It also offers smart notifications, music controls, and other useful daily features. A reliable, practical companion for your activities.",
            featured: false,
          },
          {
            id: 14,
            title: "Waterproof 4K Action Camera",
            slug: "waterproof-4k-action-camera",
            price: 750.0,
            image:
              "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The Waterproof 4K Action Camera is made for capturing your adventures. With 4K resolution, a compact design, and water resistance, it is ideal for extreme sports, travel, and outdoor activities.",
            moreDetails:
              "The Waterproof 4K Action Camera makes it easy to capture your adventures. Its 4K resolution records high-definition video and photos with rich detail. The compact, water-resistant design is ready for extreme sports, travel, and outdoor activities. Advanced features such as image stabilization, voice control, and Wi-Fi make it easier to use and share your footage. A versatile, high-quality camera for documenting your most exciting moments.",
            featured: true,
          },
          {
            id: 15,
            title: "PlayStation 6",
            slug: "playstation-6",
            price: 1999.9,
            image:
              "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The PlayStation 6 is designed for gamers seeking an immersive, high-quality experience. With next-generation graphics, an ergonomic controller, and a vast game library, it offers hours of entertainment for the whole family.",
            moreDetails:
              "The PlayStation 6 combines powerful performance with an elegant design for an engaging gaming experience. Its next-generation processor and advanced graphics deliver sharp visuals and smooth gameplay. The ergonomic controller is comfortable during long sessions, and the extensive game library offers titles for a wide range of ages and tastes. Additional features include media playback, streaming apps, and online multiplayer, making it a complete entertainment hub.",
            featured: true,
          },
          {
            id: 16,
            title: "49-Inch Curved Ultra-Wide Monitor",
            slug: "49-inch-curved-ultra-wide-monitor",
            price: 3999.9,
            image:
              "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&auto=format&fit=crop&q=80",
            images: [
              "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80",
            ],
            description:
              "The 49-Inch Curved Ultra-Wide Monitor delivers an immersive experience with its expansive curved screen. Ideal for multitasking and gaming, it offers excellent image quality and viewing comfort.",
            moreDetails:
              "The 49-Inch Curved Ultra-Wide Monitor is designed for professionals and gamers seeking an expansive visual experience. Its curved ultra-wide screen creates a panoramic view, while high resolution and vibrant colors deliver excellent image quality. It is well suited to multitasking, letting you work across several windows without losing productivity. For gaming, the curved screen and fast refresh rate create a more immersive, fluid experience. Its modern design fits naturally into any setup.",
            featured: true,
          },
          {
            id: 17,
            title: "Smart TV 4K Ultra HD",
            slug: "smart-tv-4k-ultra-hd",
            price: 3499.9,
            image:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80",
            images: [],
            description:
              "The 4K Ultra HD Smart TV delivers an excellent viewing experience with 4K resolution, vibrant colors, and high-quality sound. With streaming apps and Wi-Fi connectivity, it is perfect for watching your favorite shows and movies.",
            moreDetails:
              "The 4K Ultra HD Smart TV is ideal for anyone seeking excellent picture quality and smart features. Its 4K resolution displays every detail with impressive clarity, while vibrant colors create an immersive viewing experience. High-quality sound complements the picture for a cinematic feel at home. Built-in streaming apps let you watch your favorite shows and movies directly on the TV, and Wi-Fi connectivity makes browsing quick and easy. Its modern, elegant design fits into any room.",
            featured: true,
          },
        ];
const content = document.querySelector('.content')
const cartItemList = document.querySelector('#cart-item-list')
const cartEmpty = document.querySelector('#cart-empty')
const cartCount = document.querySelector('#cart-count')
const cartItemCount = document.querySelector('#cart-item-count')
const cartSubtotal = document.querySelector('#cart-subtotal')
const checkoutButton = document.querySelector('.checkout-button')

function getNewProducts(product) {
    return {
        ...product,
        discountPrice: product.discountPrice ?? product.price
    }
}

const newProducts = products.map(getNewProducts)
const myCart = []

newProducts.forEach((product) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = product.image
    img.classList.add('imgUrl')
    img.alt = product.title

    const productName = document.createElement('h2')
    productName.classList.add('productName')
    productName.textContent = product.title

    const price = document.createElement('p')
    price.classList.add('price')

    const originalPrice = document.createElement('del')
    originalPrice.classList.add('original-price')
    originalPrice.textContent = `$${product.price.toFixed(2)}`

    const discountedPrice = document.createElement('span')
    discountedPrice.classList.add('discounted-price')
    discountedPrice.textContent = `$${(product.discountPrice ?? product.price).toFixed(2)}`

    price.append(originalPrice, discountedPrice)

    const desc = document.createElement('p')
    desc.classList.add('desc')
    desc.textContent = product.description

    const addButton = document.createElement('button')
    addButton.classList.add('btn')
    addButton.textContent = 'Add to Cart'

    addButton.addEventListener('click', () => {
        const existingItem = myCart.find((item) => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            myCart.push({ ...product, quantity: 1 })
        }

        renderCart()
    })

    card.append(img, productName, price, desc, addButton)
    content.append(card)
})

function renderCart() {
    cartItemList.replaceChildren()

    let totalQuantity = 0
    let subtotal = 0

    myCart.forEach((item) => {
        const itemUnitPrice = item.discountPrice ?? item.price

        totalQuantity += item.quantity
        subtotal += itemUnitPrice * item.quantity

        const row = document.createElement('div')
        row.classList.add('cart-row')

        const image = document.createElement('img')
        image.classList.add('cart-product-image')
        image.src = item.image
        image.alt = item.title

        const details = document.createElement('div')
        details.classList.add('cart-product-details')

        const name = document.createElement('h3')
        name.classList.add('cart-product-name')
        name.textContent = item.title

        const itemPriceTag = document.createElement('p')
        itemPriceTag.classList.add('cart-product-price')
        itemPriceTag.textContent = `$${(item.discountPrice ?? item.price).toFixed(2)} each`

        const quantityControls = document.createElement('div')
        quantityControls.classList.add('quantity-controls')

        const decreaseButton = document.createElement('button')
        decreaseButton.type = 'button'
        decreaseButton.textContent = '-'
        decreaseButton.setAttribute('aria-label', `Decrease quantity of ${item.title}`)
        decreaseButton.disabled = item.quantity === 1

        decreaseButton.addEventListener('click', () => {
            item.quantity -= 1
            renderCart()
        })

        const quantity = document.createElement('span')
        quantity.textContent = item.quantity

        const increaseButton = document.createElement('button')
        increaseButton.type = 'button'
        increaseButton.textContent = '+'
        increaseButton.setAttribute('aria-label', `Increase quantity of ${item.title}`)

        increaseButton.addEventListener('click', () => {
            item.quantity += 1
            renderCart()
        })

        quantityControls.append(decreaseButton, quantity, increaseButton)
        details.append(name, itemPriceTag, quantityControls)

        const deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.classList.add('delete-button')
        deleteButton.textContent = 'Delete'
        deleteButton.setAttribute('aria-label', `Remove ${item.title} from cart`)

        deleteButton.addEventListener('click', () => {
            const itemIndex = myCart.findIndex((cartItem) => cartItem.id === item.id)
            myCart.splice(itemIndex, 1)
            renderCart()
        })

        row.append(image, details, deleteButton)
        cartItemList.append(row)
    })

    cartEmpty.hidden = myCart.length > 0
    cartCount.textContent = totalQuantity
    cartItemCount.textContent = totalQuantity
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`
    checkoutButton.disabled = myCart.length === 0
}

renderCart()
