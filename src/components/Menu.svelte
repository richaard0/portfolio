<script>
  import { fly, fade, slide } from "svelte/transition";
  import { isMenuOpen } from "../store.js";
  import { get } from "svelte/store";
  import { browser } from "$app/env";

  let scrollTop = null;
  let scrollLeft = null;

  let disableScroll = () => {
    if (browser) {
    }
  };

  let enableScroll = () => {
    if (browser) {
      window.onscroll = function () {};
    }
  };

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

<div class="mobileMenu" in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
  <button class="closeMobileMenu" on:click={handleMenu}>
    <i class="fa-solid fa-xmark" />
  </button>
  <div class="elements">
    <a data-before="home" href="#">home</a>
    <a data-before="projects" href="#">projects</a>
    <a data-before="resume" href="#">resume</a>
    <a data-before="about" href="#">about</a>
    <a data-before="contact" href="#">contact</a>
  </div>
</div>

<style>
  :root {
    --main-bg-color: #2e2837;
    --main-bg-color-light: #393145;
    --green: #00ff9c;
    --pink: #ff0089;
    --blue: #006cff;
    --white: #ffffff;
  }

  .no-scroll {
    overflow: hidden;
  }

  .mobileMenu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--main-bg-color);
    z-index: 200;
  }

  .elements {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mobileMenu p {
    margin: 0;
  }

  .mobileMenu a {
    color: var(--white);
    text-decoration: none;
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem;
  }

  .mobileMenu a::before {
    content: attr(data-before);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1vw;
    color: var(--main-bg-color-light);
    /* z-index: -1; */
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
    filter: blur(20px);
  }

  .mobileMenu a:hover {
    color: var(--green);
  }

  .mobileMenu a:hover::before {
    content: attr(data-before);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 35vw;
    color: var(--main-bg-color-light);
    z-index: -1;
    pointer-events: none;
    opacity: 1;
    filter: blur(0);
  }

  .closeMobileMenu {
    position: absolute;
    top: 0;
    right: 3vw;
    padding: 1rem;
    cursor: pointer;
    background: none;
    border: none;
    color: var(--white);
    font-size: 5rem;
  }
</style>
