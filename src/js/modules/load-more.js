const loadMoreButton = document.getElementById("load-more");
const productsContainer = document.getElementById("products-container");

const products = [
  {
    title: "Плед 'Бежевий' (Плетінка) 120х100",
    image: "./img/products/2/4.webp",
    price: 899,
    id: 1,
  },
  {
    title: "Плед 'Зефір' (Ажур) 130х120",
    image: "./img/products/3/5.webp",
    price: 1099,
    id: 2,
  },
  {
    title: "Плед 'Сірий' (Геометрія) 200х100",
    image: "./img/products/5/3.webp",
    price: 1220,
    id: 3,
  },
  {
    title: "Плед 'Коричневий' (Сердця) 90х70",
    image: "./img/products/1/5.webp",
    price: 579,
    id: 4,
  },
  {
    title: "Плед 'Бежевий' (Плетінка) 120х100",
    image: "./img/products/7/2.webp",
    price: 899,
    id: 5,
  },
  {
    title: "Плед 'Зефір' (Ажур) 130х120",
    image: "./img/products/8/1.webp",
    price: 1099,
    id: 6,
  },
  {
    title: "Плед 'Сірий' (Геометрія) 200х100",
    image: "./img/products/5/4.webp",
    price: 1220,
    id: 7,
  },
  {
    title: "Плед 'Коричневий' (Сердця) 90х70",
    image: "./img/products/1/3.webp",
    price: 579,
    id: 8,
  },
];

const loadMore = () => {
  console.log("hello!");
  const template = products
    .map(product => {
      return `
      <article class="flex flex-col items-center rounded-lg px-4 py-5 shadow-md">
        <a href="single.html" class="block h-full w-full overflow-hidden"><img src="${product.image}" alt="product 1" class="mb-6 h-60 w-full rounded-lg object-cover" /></a>
        <h2 class="mb-2 font-balsamiq text-xl">${product.title}</h2>
        <p class="mb-2 text-xl font-semibold">${+product.price} ₴</p>
        <a href="#" class="group mb-2 flex items-center gap-2">
          <svg class="h-7 w-7 fill-none stroke-primary-200 transition-colors group-hover:stroke-secondary-300">
            <use href="./sprites/sprite.svg#icon-heart"></use>
          </svg>
          <span class="transition-colors group-hover:text-secondary-300">Додати в улюблені</span>
        </a>
        <a href="" class="mb-4 block rounded-2xl bg-primary-200 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-secondary-300 max-lg:mx-auto">В кошик</a>
        <a href="#" class="transition-colors hover:text-secondary-300">Придбати в один клік</a>
      </article>
    `;
    })
    .join("");
  productsContainer.insertAdjacentHTML("beforeend", template);
};

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", loadMore);
}
