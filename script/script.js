// fungsi untuk hamburger Menu
const hamburger = document.getElementById("hamburgerNav");
const navigasi = document.getElementById("navigasi");
hamburger.addEventListener("click", function () {
  navigasi.classList.toggle("popUp");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navigasi.contains(e.target)) {
    navigasi.classList.remove("popUp");
  }
});

// fungsi untuk menjalankan animasi
const animationService = lottie.loadAnimation({
  container: document.getElementById("animasi2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "asset/service.json",
});

const produk1 = lottie.loadAnimation({
  container: document.getElementById("produk1"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "asset/beras.json",
});

const produk2 = lottie.loadAnimation({
  container: document.getElementById("produk2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "asset/jajanan.json",
});

const produk3 = lottie.loadAnimation({
  container: document.getElementById("produk3"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "asset/minuman.json",
});

const produk4 = lottie.loadAnimation({
  container: document.getElementById("produk4"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "asset/gas.json",
});


// Membuat slider gambar gallery
let currentSlideIndex = 0;
function nextSlide() {
  const slides = document.querySelectorAll(".slider-container img");
  slides[currentSlideIndex].classList.remove("active");
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  slides[currentSlideIndex].classList.add("active");
}
setInterval(nextSlide, 1500);








