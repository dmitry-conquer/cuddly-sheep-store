const loadMoreButton = document.getElementById("load-more");
if (loadMoreButton) {
  const itemType = loadMoreButton.dataset.itemType;
  const productsContainer = document.getElementById("products-container");
  const patternsContainer = document.getElementById("pattenrs-container");

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

  const patterns = [
    {
      value: "Cable Weave",
      image: "./img/patterns/cable-weave.webp",
    },
    {
      value: "Criss Cross",
      image: "./img/patterns/criss-cross.webp",
    },
    {
      value: "Flat Cable",
      image: "./img/patterns/flat-cable.webp",
    },
  ];

  const loadMore = () => {
    let template;
    if (itemType === "products") {
      template = products
        .map(product => {
          return `
        <article class="flex flex-col items-center rounded-lg px-4 py-5 shadow-md">
          <a href="single.html" class="block h-full w-full overflow-hidden"><img src="${
            product.image
          }" alt="product 1" class="mb-6 h-60 w-full rounded-lg object-cover" /></a>
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
    } else if (itemType === "patterns") {
      template = patterns
        .map(pattern => {
          return `
        <label class="relative flex cursor-pointer flex-col items-center rounded-md p-4 shadow-md">
          <input type="radio" name="pattern-pick" value="${pattern.value}" class="peer sr-only" checked />
          <span
            class="absolute left-0 top-0 h-full w-full rounded-md border-2 border-transparent peer-checked:border-secondary-300"></span>
          <img src="${pattern.image}" alt="${pattern.value}" class="mb-3 h-28 w-28 object-contain sm:h-40 sm:w-40" />
          <h4 class="font-balsamiq">${pattern.value}</h4>
        </label>
        `;
        })
        .join("");
      patternsContainer.insertAdjacentHTML("beforeend", template);
      patternsContainer.parentNode.style.maxHeight = `${patternsContainer.parentNode.scrollHeight}px`;
    }
  };

  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", loadMore);
  }
}
