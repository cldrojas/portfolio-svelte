<script>
  let open = false;

  const navItems = [
    { label: "Intro", href: "#Intro" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
  ];
  const toggleMenu = () => {
    if (window.innerWidth < 800) {
      open = !open;
    }
  };
</script>

<header>
  <nav>
    <ul>
      <li class="left"><button>cldrojas>_</button></li>
      {#each navItems as item}
        <li><a href={item.href} on:click={toggleMenu}>{item.label}</a></li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  ul {
    position: fixed;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  button {
    font-family: cascadia-code, sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    background-color: transparent;
    color: var(--text);
    border: none;
  }
</style>
