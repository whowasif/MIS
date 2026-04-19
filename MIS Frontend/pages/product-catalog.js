import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackCatalogProducts = [
  {
    id: 'fallback-1',
    name: 'Pro-Workstation Laptop v14',
    description:
      'Intel Core i9, 32GB RAM, 1TB SSD. Designed for heavy corporate workloads.',
    price: 1499,
    type: 'Hardware',
    categoryName: 'Hardware',
    filterCategory: 'hardware',
  },
  {
    id: 'fallback-2',
    name: 'NVIDIA GeForce RTX 4080',
    description:
      'Ultra-fast graphics performance for rendering and high-end gaming.',
    price: 1199,
    type: 'Hardware',
    categoryName: 'Components',
    filterCategory: 'components',
  },
  {
    id: 'fallback-3',
    name: 'MIS Enterprise Server X100',
    description:
      'Scalable storage and processing power for corporate data centers.',
    price: 4250,
    type: 'Hardware',
    categoryName: 'Hardware',
    filterCategory: 'hardware',
  },
  {
    id: 'fallback-4',
    name: 'Ergo-Precision Mouse',
    description:
      'Vertical design to reduce wrist strain during long office hours.',
    price: 89,
    type: 'Hardware',
    categoryName: 'Peripherals',
    filterCategory: 'peripherals',
  },
  {
    id: 'fallback-5',
    name: 'CyberShield Enterprise 2026',
    description:
      'Annual license for up to 50 users. Advanced threat detection and firewall.',
    price: 899,
    type: 'Software',
    categoryName: 'Software Licenses',
    filterCategory: 'software',
  },
  {
    id: 'fallback-6',
    name: 'MIS Master Z790 Board',
    description:
      'DDR5 support, PCIe 5.0, and advanced VRM cooling for enthusiasts.',
    price: 349,
    type: 'Hardware',
    categoryName: 'Components',
    filterCategory: 'components',
  },
]

const fallbackImages = [
  'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500',
  'https://images.pexels.com/photos/32728403/pexels-photo-32728403.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500',
  'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500',
  'https://images.pexels.com/photos/16645421/pexels-photo-16645421.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500',
  'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500',
  'https://images.pexels.com/photos/159235/computer-technology-pc-electronics-159235.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500',
]

const ProductCatalog = (props) => {
  const catalogProducts =
    Array.isArray(props.products) && props.products.length > 0
      ? props.products
      : fallbackCatalogProducts

  const categoryOptions =
    Array.isArray(props.categories) && props.categories.length > 0
      ? props.categories
      : [
          { key: 'hardware', label: 'Hardware' },
          { key: 'components', label: 'Components' },
          { key: 'peripherals', label: 'Peripherals' },
          { key: 'software', label: 'Software Licenses' },
        ]

  return (
    <>
      <div className="product-catalog-container1">
        <Head>
          <title>Product-Catalog - Ideal Real Porpoise</title>
          <meta
            property="og:title"
            content="Product-Catalog - Ideal Real Porpoise"
          />
          <link
            rel="canonical"
            href="https://ideal-real-porpoise-ox0ksz.teleporthq.app/product-catalog"
          />
          <meta
            property="og:url"
            content="https://ideal-real-porpoise-ox0ksz.teleporthq.app/product-catalog"
          />
        </Head>
        <Navigation></Navigation>
        <section className="catalog-section">
          <div className="catalog-container">
            <header className="catalog-header">
              <div className="catalog-title-group">
                <h2 className="section-title">MIS Solution Product Catalog</h2>
                <p className="section-content">
                  Shop retail IT products by hardware, software, components,
                  accessories, office equipment, and power solutions.
                </p>
              </div>
              <div className="catalog-search-bar">
                <div className="search-input-wrapper">
                  <div className="search-icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="catalogSearch"
                    placeholder="Search hardware, components, licenses..."
                    aria-label="Search products"
                  />
                </div>
              </div>
            </header>
            <div className="catalog-main-layout">
              <aside className="catalog-filters">
                <div className="product-catalog-filter-group">
                  <h3 className="product-catalog-filter-title">Categories</h3>
                  <div className="category-select-wrap">
                    <select
                      id="catalogCategory"
                      aria-label="Filter by category"
                      className="category-select"
                    >
                      <option value="all">All Products</option>
                      {categoryOptions.map((category) => (
                        <option key={category.key} value={category.key}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="product-catalog-filter-group">
                  <h3 className="product-catalog-filter-title">Price Range</h3>
                  <div className="price-inputs">
                    <input
                      type="number"
                      placeholder="Min"
                      aria-label="Minimum Price"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      aria-label="Maximum Price"
                    />
                  </div>
                </div>
              </aside>
              <div id="productGrid" className="product-catalog-catalog-grid">
                {catalogProducts.map((product, index) => {
                  const priceLabel = `$${Number(product.price || 0).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                  const imageUrl = product.image || fallbackImages[index % fallbackImages.length]
                  const isSoftware = String(product.type || '').toLowerCase() === 'software'
                  const buttonLabel = isSoftware ? 'Buy License' : 'Add to Cart'

                  return (
                    <article
                      key={`${product.id}-${index}`}
                      data-category={product.filterCategory || 'components'}
                      className="product-catalog-product-card1"
                    >
                      <div className="product-catalog-product-image-box">
                        <img src={imageUrl} alt={product.name || 'Product image'} />
                        {index === 0 && <span className="product-badge">Featured</span>}
                      </div>
                      <div className="product-catalog-product-info">
                        <h4 className="product-catalog-product-name1">{product.name}</h4>
                        <p className="product-desc">{product.description}</p>
                        <div className="product-footer">
                          <span className="product-price">{priceLabel}</span>
                          <div className="product-card-actions">
                            <a href={`/products/${product.id}`} className="btn-link">
                              <span>View Details</span>
                            </a>
                            <button className="catalog-add-cart btn btn-primary btn-sm">
                              {buttonLabel}
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div id="cartBackdrop" className="catalog-cart-backdrop"></div>

            <aside
              id="catalogCartSidebar"
              className="catalog-cart-sidebar"
              aria-label="Shopping cart"
              aria-hidden="true"
            >
              <div className="catalog-cart-header">
                <h3>Your Cart</h3>
                <button
                  id="cartCloseBtn"
                  type="button"
                  className="catalog-cart-close"
                  aria-label="Close cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m18 6l-12 12M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <p id="cartEmptyState" className="catalog-cart-empty">
                Your cart is empty. Add products to continue.
              </p>
              <div id="cartItemsContainer" className="catalog-cart-items"></div>
              <div className="catalog-cart-footer">
                <div className="catalog-cart-total">
                  <span>Subtotal</span>
                  <strong id="cartSubtotalValue">$0.00</strong>
                </div>
                <a
                  id="cartCheckoutBtn"
                  href="/confirm-order"
                  className="btn btn-brand-white-text btn-lg"
                >
                  Confirm Order
                </a>
              </div>
            </aside>
          </div>
        </section>
        <div className="product-catalog-container2">
          <div className="product-catalog-container3">
            <Script
              html={`<script defer data-name="catalog-logic">
(function(){
  const CART_KEY = "misCart"
  const categorySelect = document.getElementById("catalogCategory")
  const productGrid = document.getElementById("productGrid")
  const productCards = document.querySelectorAll(".product-catalog-product-card1")
  const searchInput = document.getElementById("catalogSearch")
  const cartCloseBtn = document.getElementById("cartCloseBtn")
  const cartSidebar = document.getElementById("catalogCartSidebar")
  const cartBackdrop = document.getElementById("cartBackdrop")
  const cartItemsContainer = document.getElementById("cartItemsContainer")
  const cartSubtotalValue = document.getElementById("cartSubtotalValue")
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn")
  const cartEmptyState = document.getElementById("cartEmptyState")
  const bodyElement = document.body
  let cartItems = []

  const formatCurrency = (value) => "$" + value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const parsePrice = (priceText) => {
    const parsed = Number((priceText || "0").replace(/[^0-9.]/g, ""))
    return Number.isFinite(parsed) ? parsed : 0
  }

  const loadCart = () => {
    try {
      const storedCart = window.localStorage.getItem(CART_KEY)
      cartItems = storedCart ? JSON.parse(storedCart) : []
    } catch (error) {
      cartItems = []
    }
  }

  const saveCart = () => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  }

  const updateCartUI = () => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if (cartSubtotalValue) {
      cartSubtotalValue.textContent = formatCurrency(subtotal)
    }

    if (cartEmptyState) {
      cartEmptyState.style.display = cartItems.length ? "none" : "block"
    }

    if (cartCheckoutBtn) {
      if (cartItems.length) {
        cartCheckoutBtn.classList.remove("is-disabled")
        cartCheckoutBtn.removeAttribute("aria-disabled")
      } else {
        cartCheckoutBtn.classList.add("is-disabled")
        cartCheckoutBtn.setAttribute("aria-disabled", "true")
      }
    }

    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = cartItems
        .map((item) =>
          '<article class="catalog-cart-item" data-id="' + item.id + '">' +
            '<img src="' + item.image + '" alt="' + item.name + '" />' +
            '<div class="catalog-cart-item-copy">' +
              '<h4>' + item.name + '</h4>' +
              '<p>' + formatCurrency(item.price) + '</p>' +
              '<div class="catalog-cart-qty">' +
                '<button type="button" data-action="decrease" aria-label="Decrease quantity">-</button>' +
                '<span>' + item.quantity + '</span>' +
                '<button type="button" data-action="increase" aria-label="Increase quantity">+</button>' +
              '</div>' +
            '</div>' +
            '<button type="button" class="catalog-cart-remove" data-action="remove" aria-label="Remove item">Remove</button>' +
          '</article>'
        )
        .join("")
    }
  }

  const addProductToCart = (card) => {
    if (!card) return
    const nameEl = card.querySelector(".product-catalog-product-name1")
    const priceEl = card.querySelector(".product-price")
    const imageEl = card.querySelector(".product-catalog-product-image-box img")
    const name = nameEl ? nameEl.textContent.trim() : "Product"
    const price = parsePrice(priceEl ? priceEl.textContent : "0")
    const image = imageEl ? imageEl.getAttribute("src") : ""
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-")

    const existingItem = cartItems.find((item) => item.id === id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.push({ id, name, price, image, quantity: 1 })
    }

    saveCart()
    window.dispatchEvent(new Event("mis-cart-updated"))
    updateCartUI()
    openCart()
  }

  const openCart = () => {
    if (!cartSidebar || !cartBackdrop) return
    cartSidebar.classList.add("is-open")
    cartSidebar.setAttribute("aria-hidden", "false")
    cartBackdrop.classList.add("is-visible")
    document.body.classList.add("cart-open")
  }

  const closeCart = () => {
    if (!cartSidebar || !cartBackdrop) return
    cartSidebar.classList.remove("is-open")
    cartSidebar.setAttribute("aria-hidden", "true")
    cartBackdrop.classList.remove("is-visible")
    bodyElement.classList.remove("cart-open")
  }

  const applyFilters = () => {
    const selectedCategory = categorySelect ? categorySelect.value : "all"
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : ""

    productCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category")
      const productNameEl = card.querySelector(".product-catalog-product-name1")
      const productDescEl = card.querySelector(".product-desc")
      const productName = productNameEl ? productNameEl.textContent.toLowerCase() : ""
      const productDesc = productDescEl ? productDescEl.textContent.toLowerCase() : ""

      const categoryMatch = selectedCategory === "all" || cardCategory === selectedCategory
      const searchMatch =
        searchTerm === "" ||
        productName.includes(searchTerm) ||
        productDesc.includes(searchTerm)

      if (categoryMatch && searchMatch) {
        card.style.display = "flex"
      } else {
        card.style.display = "none"
      }
    })
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", applyFilters)
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters)
  }

  if (productGrid) {
    productGrid.addEventListener("click", (event) => {
      const addButton = event.target.closest(".catalog-add-cart")
      if (!addButton) return
      const card = addButton.closest(".product-catalog-product-card1")
      addProductToCart(card)
    })
  }

  if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", (event) => {
      const actionButton = event.target.closest("button[data-action]")
      if (!actionButton) return

      const cartItem = actionButton.closest(".catalog-cart-item")
      if (!cartItem) return

      const itemId = cartItem.getAttribute("data-id")
      const action = actionButton.getAttribute("data-action")
      const targetItem = cartItems.find((item) => item.id === itemId)
      if (!targetItem) return

      if (action === "increase") {
        targetItem.quantity += 1
      }

      if (action === "decrease") {
        targetItem.quantity = Math.max(1, targetItem.quantity - 1)
      }

      if (action === "remove") {
        cartItems = cartItems.filter((item) => item.id !== itemId)
      }

      saveCart()
      window.dispatchEvent(new Event("mis-cart-updated"))
      updateCartUI()
    })
  }

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", closeCart)
  }

  if (cartBackdrop) {
    cartBackdrop.addEventListener("click", closeCart)
  }

  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener("click", (event) => {
      if (!cartItems.length) {
        event.preventDefault()
      }
    })
  }

  const openCartFromNav = () => openCart()
  window.addEventListener("open-mis-cart", openCartFromNav)

  const shouldOpenFromQuery =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("cart") === "open"
  if (shouldOpenFromQuery) {
    openCart()
  }

  const onKeyDown = (event) => {
    if (event.key === "Escape") closeCart()
  }

  document.addEventListener("keydown", onKeyDown)

  window.addEventListener("beforeunload", () => {
    window.removeEventListener("open-mis-cart", openCartFromNav)
    document.removeEventListener("keydown", onKeyDown)
  })

  loadCart()
  updateCartUI()
  applyFilters()

  // Price Filter Mock (Visual Only as per scope)
  const priceInputs = document.querySelectorAll(".price-inputs input")
  priceInputs.forEach((input) => {
    input.addEventListener("change", () => {
      console.log("Price filter updated")
      // In a real production app, this would trigger a re-render or API call
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .product-catalog-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .product-catalog-thq-filter-icon-wrap-elm1 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .product-catalog-thq-filter-icon-wrap-elm2 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .product-catalog-thq-filter-icon-wrap-elm3 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .product-catalog-thq-filter-icon-wrap-elm4 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .product-catalog-thq-filter-icon-wrap-elm5 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .product-catalog-container2 {
            display: none;
          }
          .product-card-actions {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .product-catalog-container3 {
            display: contents;
          }
          .product-catalog-container4 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .product-catalog-icon31 {
            width: 24px;
            margin-right: 4px;
          }
          .product-catalog-text6 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listCatalogProducts } = await import('../lib/server/products')
    const products = await listCatalogProducts(100)
    const categoriesMap = new Map()
    const preferredLabels = {
      hardware: 'Hardware (Laptops, Desktops, Servers)',
      software: 'Software (Windows & Antivirus Licenses)',
      components: 'Components (Processors, RAM, Motherboards)',
      accessories: 'Accessories (Mouse, Keyboard, Cables)',
      'office-equipment': 'Office Equipment (Printers, Projectors, Scanners)',
      'power-solution': 'Power Solution (UPS, Batteries)',
    }

    products.forEach((product) => {
      const key = product.filterCategory || 'general'
      if (key === 'service') return
      if (!categoriesMap.has(key)) {
        categoriesMap.set(
          key,
          preferredLabels[key] || product.categoryName || product.type || 'General'
        )
      }
    })

    const categories = Array.from(categoriesMap.entries()).map(([key, label]) => ({
      key,
      label,
    }))

    return {
      props: {
        products,
        categories,
      },
    }
  } catch (error) {
    return {
      props: {
        products: [],
        categories: [],
      },
    }
  }
}

export default ProductCatalog
