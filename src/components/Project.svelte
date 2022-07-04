<script>
  export let name, imgUrl, previewUrl, repoUrl, technologies;
</script>

<article class="project">
  <img class="image" src={imgUrl} alt={name} />

  <div class="details">
    <div class="title">{name}</div>

    <div class="links">
      <a href={previewUrl} class="button">Preview</a>
      <a href={repoUrl} class="button">Source Code</a>
    </div>

    <ul class="technologies">
      {#each technologies as tech}
        <li class="tech">{tech}</li>
      {/each}
    </ul>
  </div>
</article>

<style>
  .project {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    border: solid 1px red;
  }
  .image {
    width: 100%;
    position: static;
    top: 0;
  }
  .details {
    display: flex;
    flex-direction: column;
    background: rgba(13, 33, 80, 0.483);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
  }
  .title {
    background-color: rgba(1, 84, 84, 0.428);
    position: absolute;
    bottom: 5rem;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .links {
    border: solid 1px green;
    display: flex;
    justify-content: space-around;
  }
  .technologies {
    display: flex;
  }
  .tech {
    padding: 4px;
  }
</style>
