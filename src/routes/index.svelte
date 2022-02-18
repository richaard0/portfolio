<script>
  export let data;
  console.log(data);
</script>

<nav class="sideNav">
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">projects</a></li>
    <li><a href="#">resume</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">contact</a></li>
  </ul>
</nav>

<nav class="mobileNav">
  <i class="fa-solid fa-bars" />
</nav>

<header>
  <div class="nameHeader">
    <h1 class="name">simon ricard</h1>
    <h3 class="name">full-stack developper</h3>
  </div>

  <div class="titleHeader">
    <p>{data.welcome}</p>
  </div>

  <button class="mainButton">
    <p>projects</p>
  </button>
</header>

<style>
  :root {
    --main-bg-color: #2e2837;
    --main-bg-color-light: #393145;
    --green: #00ff9c;
    --pink: #ff0089;
    --blue: #006cff;
    --white: #ffffff;
  }

  .mobileNav {
    display: none;
  }

  .sideNav {
    background: var(--green);
    position: fixed;
    top: 9rem;
    /* right: 6rem; */
    right: calc(100vw / 12);
    /* left: calc((100vw / 12) * 10); */
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: var(--pink) 4px 4px;
  }

  .sideNav ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    /* gap: 0.5rem; */
    margin: 0;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
  }

  .sideNav ul li {
    list-style: none;
  }

  .sideNav ul li a {
    color: var(--main-bg-color-light);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 900;
    padding: 0.1rem 0.4rem;
    border-radius: 0.5rem;
  }

  .sideNav ul li a:hover {
    color: var(--green);
    background-color: var(--blue);
    box-shadow: var(--pink) 3px 3px;
  }

  .sideNav ul li a:active {
    box-shadow: var(--pink) 2px 2px;
    transform: translateY(-5px);
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 60vh;
    gap: 5rem;
  }

  h1 {
    font-family: "Roboto Slab", serif;
    font-weight: 900;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 900;
    font-family: "Roboto Slab", serif;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-weight: bold;
    font-family: "Open Sans SemiCondensed", sans-serif;
    margin: 0;
    padding: 0;
  }

  .nameHeader h1 {
    color: var(--green);
    font-weight: 500;
    font-size: 6rem;
    text-shadow: var(--pink) 4px 4px, var(--blue) -3px -3px;
    line-height: 0.8;
  }

  .nameHeader h3 {
    color: var(--white);
    font-size: 2.5rem;
    font-weight: 500;
  }

  .titleHeader p {
    font-size: 3.5rem;
    font-weight: 500;
    font-family: "Roboto Slab", serif;
    margin: 0;
    padding: 0;
    color: var(--white);
    text-align: center;
    margin-top: 10rem;
  }

  .mainButton {
    background-color: var(--green);
    border: none;
    padding: 1.5rem 3.5rem;
    border-radius: 1rem;
    box-shadow: var(--pink) 4px 4px;
    cursor: pointer;
    align-self: center;
  }

  .mainButton:active {
    box-shadow: var(--pink) 0px 0px;
    transform: translateY(2px);
    transition: all 0.1s ease-in-out;
  }

  .mainButton p {
    margin: 0;
    font-family: "Open Sans SemiCondensed", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
  }

  @media (max-width: 1550px) {
    .sideNav {
      right: 3rem;
    }
  }

  @media (max-width: 1350px) {
    .sideNav {
      display: none;
    }

    .mobileNav {
      display: block;
      position: fixed;
      top: 8rem;
      right: 3rem;
      font-size: 4rem;
    }
  }
</style>
