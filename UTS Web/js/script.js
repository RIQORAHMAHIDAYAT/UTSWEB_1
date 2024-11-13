// Sidebar Toggle untuk Navbar
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Tutup navbar jika mengklik di luar sidebar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Element-elemen yang dibutuhkan untuk icon pencarian dan keranjang
const searchIcon = document.querySelector("#search");
const cartIcon = document.querySelector("#shopping-cart");
const searchModal = document.querySelector("#search-modal");
const cartModal = document.querySelector("#cart-modal");
const closeModalButtons = document.querySelectorAll(".close-modal");

// Buka pencarian ketika ikon pencarian diklik
searchIcon.onclick = () => {
    searchModal.classList.add("active");
};

// Buka keranjang ketika ikon keranjang diklik
cartIcon.onclick = () => {
    cartModal.classList.add("active");
};

// Tutup modal ketika tombol "X" diklik
closeModalButtons.forEach(button => {
    button.onclick = () => {
        searchModal.classList.remove("active");
        cartModal.classList.remove("active");
    };
});

// Tutup modal ketika mengklik di luar modal
window.onclick = (event) => {
    if (event.target === searchModal) {
        searchModal.classList.remove("active");
    } else if (event.target === cartModal) {
        cartModal.classList.remove("active");
    }
};
