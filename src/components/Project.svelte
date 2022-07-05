<script>
  export let name,
    description,
    imgUrl,
    logoUrl,
    previewUrl,
    repoUrl,
    technologies;
</script>

<article class="project">
  <img class="image" src={imgUrl} alt={name} />

  <div class="wrapper">
    <div class="details">
      <img class="logo" src={logoUrl} alt={`${name}-logo`} />
      <h3 class="title">{name}</h3>
      <p class="description">{description}</p>
      <div class="links">
        <a href={previewUrl} class="link">Preview App</a>
        <a href={repoUrl} class="link">Source Code</a>
      </div>

      <ul class="technologies">
        <li class="tech" />
        {#each technologies as tech}
          <li class="tech">{tech}</li>
        {/each}
      </ul>
    </div>
  </div>
</article>

<style>
  .project {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    max-width: 400px;
  }
  .image {
    width: 100%;
    position: static;
    top: 0;
  }
  .wrapper {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    position: absolute;
  }
  .logo {
    position: absolute;
    top: 2em;
    width: 4em;
    height: 4em;
    padding: 16px;
    border-radius: 10px;
    background-color: var(--darkBackground);
  }
  .wrapper:hover .details {
    opacity: 1;
    padding: 40px;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    transition: all ease 0.3s;
    position: absolute;
    background-color: #102a43d7;
    opacity: 0;
  }
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
  }
  .description {
    font-weight: 400;
  }
  .links {
    display: flex;
    justify-content: space-around;
  }
  .link {
    border: solid 1px var(--link);
    padding: 8px;
    border-radius: 4px;
  }
  .technologies {
    display: flex;
  }
  .tech {
    display: inline;
    min-width: fit-content;
  }
</style>
