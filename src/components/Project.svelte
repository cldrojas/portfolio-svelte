<script>
  export let name,
    description,
    imgDesktop,
    imgMobile,
    logoUrl,
    previewUrl,
    repoUrl;
</script>

<article class="project">
  <picture>
    <source media="(min-width: 860px)" srcset={imgDesktop} />
    <img class="image" src={imgMobile} alt={name} />
  </picture>

  <div class="overlay">
    <div class="details">
      <header>
        <img class="logo" src={logoUrl} alt={`${name}-logo`} />
        <h3>{name}</h3>
      </header>
      <h4 class="description">{description}</h4>

      <ul class="links">
        <a
          href={previewUrl}
          target="__blank"
          rel="noopener noreferrer"
          class="link">Preview App</a
        >
        <a
          href={repoUrl}
          target="__blank"
          rel="noopener noreferrer"
          class="link">Source Code</a
        >
      </ul>
    </div>
  </div>
</article>

<style>
  .project {
    display: flex;
    border-radius: 8px;
    width: 100%;
    min-height: 13rem;
    /* border: solid 1px red; */
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .overlay {
    position: absolute;
    background-color: var(--darkBlueGradient);
    transition: ease-in-out 0.25s;
    width: 100%;
    height: 100%;
    top: 100%;
    opacity: 0;
    visibility: hidden;
  }

  .project:hover .overlay {
    /* border: solid 1pc blue; */
    visibility: visible;
    top: 0;
    opacity: 1;
  }

  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    /* border: solid 1px blue; */
  }
  picture {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .image {
    height: 100%;
    width: 100%;
    aspect-ratio: cover;
  }
  .description {
    /* border: solid 1px red; */
    font-weight: 500;
  }
  .logo {
    height: 35px;
    width: 35px;
    object-fit: contain;
  }
  .details {
    /* border: solid 1px red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  .links {
    padding: 1rem 0;
    justify-content: space-around;
  }
  .link {
    line-height: 1.3;
    border: solid 1px transparent;
    border-radius: 0.3rem;
    padding: 0.5rem;
    transition: border 0.3s;
    border: solid 1px #5a5a5a9e;
  }

  .link:hover {
    border: solid 1px whitesmoke;
  }
</style>
