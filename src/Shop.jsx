import { useState } from "react";
import "./shop.css";
function Shop() {
  const books = [
    {
      id: 1,
      title:
        "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
      author: "Mel Robbins",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg",
      price: 11.69,
    },
    {
      id: 2,
      title:
        "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips",
      author: "Dr. Nicole Apelian",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg",
      price: 37,
    },
    {
      id: 3,
      title: "Seven Things You Can't Say About China",
      author: "Tom Cotton",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg",
      price: 19.58,
    },
    {
      id: 4,
      title:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: "James Clear",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg",
      price: 14.49,
    },
    {
      id: 5,
      title: "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)",
      author: "Suzanne Collins",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg",
      price: 19.17,
    },
    {
      id: 6,
      title:
        "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life",
      author: "Dana Perino",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg",
      price: 20.3,
    },
    {
      id: 7,
      title: "How to Giggle: A Guide to Taking Life Less Seriously",
      author: "Hannah Berner",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg",
      price: 20.29,
    },
    {
      id: 8,
      title: "Strangers in Time: A World War II Novel",
      author: "David Baldacci",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg",
      price: 17.84,
    },
  ];
  // const filterPrice = books.filter((book) => book.price > 20);
  // const bookList = filterPrice.map((book) => (
  //   <div key={book.id}>
  //     <img src={book.image_url} alt={book.title} />
  //     <div>{book.title}</div>
  //     <div>{book.author}</div>
  //     <div>{book.price}$</div>
  //   </div>
  // ));
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);
  const [limit, setLimit] = useState(books.length);
  const [cart, setCart] = useState([]);
  const handleCart = (e) => {
    setCart([...cart, e]);
  };
  console.log(cart);
  let total = 0;
  const bookList = books
    .filter((book) => book.price > price)
    // .filter((book) => book.author.toLowerCase().includes(search.toLowerCase()))
    .filter(
      (book) =>
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, limit)
    .map((book, index) => (
      <div className="book-item" key={book.id}>
        <img
          src={book.image_url}
          alt={book.title}
          width={200}
          className="book-thumbnail"
        />
        <div className="book-title">{book.title}</div>
        <div className="book-auth">{book.author}</div>
        <div className="book-price">{book.price}</div>
        <button
          className="add-cart-btn"
          onClick={() => setCart([...cart, books[index]])}
        >
          add cart
        </button>
      </div>
    ));
  // cart.forEach((b) => (total += b.price));
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return (
    <>
      <header>
        <h1>Book Heaven</h1>
        <p>Your gateway to endless stories</p>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div className="page-container">
        {/* Left side - Shop content */}
        <div className="shop-content">
          <div className="shop-input">
            <div>
              <label>Search title and author:</label>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search books..."
                className="text-searchbox"
              />
            </div>
            <div>
              <label>Minimum price:</label>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="number-searchbox"
              />
            </div>
          </div>
          <p className="shop-length">
            Books displayed: <b>{bookList.length}</b>
          </p>
          <div className="books-container">{bookList}</div>
        </div>

        {/* Right side - Cart */}
        <div className="cart-container">
          {/* Cart Header */}
          <div className="cart-header">
            <div className="cart-title">
              <span className="icon-cart"></span>
              Shopping Cart
            </div>
            <div className="cart-badge">{cart.length}</div>
          </div>

          {/* Cart Body */}
          <div className="cart-body">
            {cart.length === 0 ? (
              <div className="cart-empty">
                <div className="cart-empty-icon">🛒</div>
                <div className="cart-empty-text">Your cart is empty</div>
              </div>
            ) : (
              <ul className="cart-items">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    {/* เพิ่มบรรทัดนี้เข้ามา */}
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="cart-item-image"
                    />

                    <div className="cart-item-info">
                      <div className="cart-item-title">
                        <span className="icon-book"></span>
                        {item.title}
                      </div>
                      <div className="cart-item-price">{item.price}</div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => {
                        const newCart = cart.filter((_, i) => i !== index);
                        setCart(newCart);
                      }}
                    >
                      <span className="icon-remove"></span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="cart-footer">
              {/* <div className="cart-summary">
                <div className="cart-subtotal">
                  <span>Items ({cart.length})</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div> */}

              <div className="cart-total">
                <span>Total </span>
                {/* <span>Total ({cart.length})</span> */}
                <span className="cart-total-amount">{total.toFixed(2)}</span>
              </div>

              <div className="cart-actions">
                {/* <button className="checkout-btn">
                  <span>💳</span>
                  Proceed to Checkout
                </button> */}
                <button onClick={() => setCart([])} className="clear-cart-btn">
                  <span className="icon-trash"></span>
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Shop;
// delete each cart in array ลบแต่ละ element ใน array
// เลือกสิ้นที่จะลบที่เราสามารถเลือกได้
