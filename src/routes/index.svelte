<script>
  import Menu from "../components/Menu.svelte";
  import Airplane from "../components/Airplane.svelte";
  import { get } from "svelte/store";
  import { isMenuOpen } from "../store.js";
  import { browser } from "$app/env";

  export let data;

  let handleMenu = () => {
    isMenuOpen.set(!get(isMenuOpen));
    if (browser) {
      const body = document.querySelector("body");
      if (get(isMenuOpen)) {
        body.classList.add("no-scroll");
      } else {
        body.classList.remove("no-scroll");
      }
    }
  };
</script>

{#if $isMenuOpen}
  <Menu />
{/if}
<Airplane />
<main>
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
    <i class="fa-solid fa-bars" on:click={handleMenu} />
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
</main>

<style>
  :root {
    --main-bg-color: #2e2837;
    --main-bg-color-light: #393145;
    --green: #00ff9c;
    --pink: rgba(255, 0, 137, 1);
    --blue: rgba(0, 108, 255, 1);
    --white: #ffffff;
  }

  @keyframes in {
    from {
      opacity: 0;
      /* transform: translateY(10px); */
    }
    to {
      opacity: 1;
      /* transform: translateY(0); */
    }
  }

  @keyframes out {
    from {
      opacity: 1;
      /* transform: translateY(0); */
    }
    to {
      opacity: 0;
      /* transform: translateY(10px); */
    }
  }

  /* @-webkit-keyframes text-flicker-in-glow {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      text-shadow: none;
    }
    10.1% {
      opacity: 1;
      text-shadow: none;
    }
    10.2% {
      opacity: 0;
      text-shadow: none;
    }
    20% {
      opacity: 0;
      text-shadow: none;
    }
    20.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    20.6% {
      opacity: 0;
      text-shadow: none;
    }
    30% {
      opacity: 0;
      text-shadow: none;
    }
    30.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.6% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 0;
      text-shadow: none;
    }
    45.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }
    55.1% {
      opacity: 0;
      text-shadow: none;
    }
    57% {
      opacity: 0;
      text-shadow: none;
    }
    57.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
    }
    60.1% {
      opacity: 0;
      text-shadow: none;
    }
    65% {
      opacity: 0;
      text-shadow: none;
    }
    65.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    75.1% {
      opacity: 0;
      text-shadow: none;
    }
    77% {
      opacity: 0;
      text-shadow: none;
    }
    77.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4),
        0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    85% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4),
        0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    85.1% {
      opacity: 0;
      text-shadow: none;
    }
    86% {
      opacity: 0;
      text-shadow: none;
    }
    86.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45),
        0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45),
        0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
    }
  } */
  @keyframes text-flicker-in-glow {
    0% {
      /* filter: blur(3px); */
    }
    10% {
      text-shadow: rgba(0, 108, 255, 1) -3px -3px;
    }
    10.1% {
      text-shadow: none;
    }
    10.2% {
      text-shadow: rgba(0, 108, 255, 1) -5px -5px;
    }
    20% {
      /* filter: blur(1px); */
      text-shadow: none;
    }
    20.1% {
      text-shadow: rgba(255, 0, 137, 1) 4px 4px, rgba(0, 108, 255, 1) -5px -5px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.25); */
    }
    22.6% {
      /* filter: blur(3px); */
      text-shadow: none;
    }
    30% {
      text-shadow: rgba(0, 108, 255, 1) -3px -3px;
    }
    30.1% {
      /* filter: blur(3px); */
      text-shadow: rgba(255, 0, 137, 1) 4px 4px, rgba(0, 108, 255, 1) -6px -6px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25); */
    }
    30.5% {
      /* filter: blur(7px); */
      text-shadow: rgba(255, 0, 137, 1) 5px 5px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25); */
    }
    30.6% {
      text-shadow: rgba(0, 108, 255, 1) -4px -4px;
    }
    30.7% {
      /* filter: blur(5px); */
      text-shadow: none;
    }
    45% {
      text-shadow: none;
    }
    45.1% {
      /* filter: blur(4px); */
      text-shadow: rgba(255, 0, 137, 1) 3px 3px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25); */
    }
    50% {
      /* filter: blur(4px); */
      text-shadow: rgba(255, 0, 137, 1) 4px 4px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25); */
    }
    55% {
      /* filter: blur(3px); */
      text-shadow: rgba(255, 0, 137, 1) 5px 5px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25); */
    }
    55.1% {
      text-shadow: none;
    }
    57% {
      text-shadow: none;
    }
    57.1% {
      /* filter: blur(3px); */
      text-shadow: rgba(255, 0, 137, 1) 2px 2px, rgba(0, 108, 255, 1) -6px -6px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35); */
    }
    60% {
      /* filter: blur(1px); */
      text-shadow: rgba(255, 0, 137, 1) 3px 3px, rgba(0, 108, 255, 1) -3px -3px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35); */
    }
    60.1% {
      text-shadow: none;
    }
    65% {
      text-shadow: none;
    }
    65.1% {
      /* filter: blur(1px); */
      text-shadow: rgba(255, 0, 137, 1) 8px 8px, rgba(0, 108, 255, 1) -6px -6px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), */
      /* 0 0 100px rgba(255, 255, 255, 0.1); */
    }
    75% {
      /* filter: blur(0px); */
      text-shadow: rgba(255, 0, 137, 1) 7px 7px, rgba(0, 108, 255, 1) -5px -5px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), */
      /* 0 0 100px rgba(255, 255, 255, 0.1); */
    }
    75.1% {
      text-shadow: none;
    }
    77% {
      text-shadow: none;
    }
    77.1% {
      text-shadow: rgba(255, 0, 137, 1) 3px 3px, rgba(0, 108, 255, 1) -2px -2px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4),
        0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1); */
    }
    85% {
      text-shadow: rgba(255, 0, 137, 1) 4px 4px, rgba(0, 108, 255, 1) -3px -3px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4),
        0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1); */
    }
    85.1% {
      text-shadow: none;
    }
    86% {
      text-shadow: none;
    }
    86.1% {
      text-shadow: rgba(255, 0, 137, 1) 5px 5px, rgba(0, 108, 255, 1) -5px -5px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45),
        0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1); */
    }
    100% {
      text-shadow: rgba(255, 0, 137, 1) 4px 4px, rgba(0, 108, 255, 1) -3px -3px;
      /* text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45),
        0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1); */
    }
  }

  main {
    position: relative;
    height: 100%;
  }

  .mobileNav {
    display: none;
  }

  .no-scroll {
    overflow: hidden;
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
    /* animation: out 0.5s ease-in-out; */
    transition: all 0.1s ease-in-out;
  }

  .sideNav ul li a:hover {
    color: var(--green);
    background-color: var(--blue);
    box-shadow: var(--pink) 3px 3px;
    /* animation: in 0.5s ease-in-out; */
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
    position: relative;
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
    animation: text-flicker-in-glow 4s linear forwards;
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
