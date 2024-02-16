let mainEl = document.getElementById("main");

fetch('https://products-api-2ttf.onrender.com/api/products')
    .then(response => response.json())
    .then(data => {
        let img1 = data[0].image;
        let img2 = data[1].image;
        let img3 = data[2].image;

        let code = ` <nav class="nav-container">
            <h1>New ARRIVALS</h1>
            <div class="icon-container">
                <div class="icon-inside-container">
                    <i class="fa-solid icon fa-cart-shopping"></i>
                    <i class="fa-brands  icon-opera fa-opera"></i>
                </div>
                <i class="fa-solid fa-user"></i>
            </div>
        </nav>
        <div class="input-insta-container">
            <input placeholder="Search videos, people, and more" type="text" />
            <div class="insta-container">
                <h3>INSTAGRAM</h3>
                <hr class="insta-line" />
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div class="center-container">
            <div class="contentet-container">
                <hr />
                <h1>FABRIC THAT</h1>
                <hr class="second-line"/>
                <h1>SPEAKS</h1>
                <hr class="third-line"/>
                <div>
                    <button class="view-all-btn">VIEW ALL</button>
                    <button class="watch-now-btn">Watch now</button>
                </div>
            </div>
            <div class="yellow-img-container">
                <img class="yellow-img" src=${img1} />
            <h1 class="new-edition">New Edition</h1>
            </div>
        </div>
        <div class="card-container">
        <div class="card">
              <h1>Shirts</h1>
              <img src=${img2} class="card-image">
        </div>
        <div class="card">
            <h1>Hoodis</h1>
            <img src=${img3} class="card-image">
      </div>
      <div class="text-card">
        <h1> <span class="semi-colon">"</span>Fasion is not about clothes. it is about a look <span class="semi-colon">"</span></h1>
  </div>
</div>`;

        mainEl.innerHTML = code;


    })