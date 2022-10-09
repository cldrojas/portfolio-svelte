<script>
  export let name, description, imgUrl, logoUrl, previewUrl, repoUrl;
  // technologies;
</script>

<article class="project">
  <img class="image" src={imgUrl} alt={name} />

  <div class="overlay">
    <div class="details">
      <header>
        <img class="logo" src={logoUrl} alt={`${name}-logo`} />
        <h3>{name}</h3>
      </header>
      <p class="description">{description}</p>

      <!-- <ul class="technologies">
        <li class="tech first">Technologies:</li>
        {#each technologies as tech}
          <li class="tech">{tech}</li>
        {/each}
      </ul> -->

      <ul class="links">
        <a href={previewUrl} class="link">Preview App</a>
        <a href={repoUrl} class="link">Source Code</a>
      </ul>
    </div>
  </div>
</article>

<style>
  .project {
    display: flex;
    border-radius: 8px;
    width: 100%;
    height: 100%;
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
    /* top: 100%; */
    opacity: 0;
  }

  .project:hover .overlay {
    /* border: solid 1pc blue; */
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
  .description {
    /* border: solid 1px red; */
    padding: 1rem 0;
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
  }

  .link:hover {
    border: solid 1px white;
  }
</style>
