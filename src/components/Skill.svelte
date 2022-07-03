<script>
  export let title;
  export let description;
  export let imgUrl;
</script>

<article class="skill">
  <h3 class="skill-title">{title}</h3>
  <div class="skill-details">
    <p class="skill-description">{description}</p>
    <img src={imgUrl} alt={title} />
  </div>
</article>

<style>
  .skill {
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    margin: 8px 4px;
    width: 100%;
    border-radius: 8px;
    padding: 16px 8px;
  }

  .skill:nth-child(even) .skill-details {
    flex-direction: row-reverse;
  }

  .skill-details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px 0;
  }

  .skill-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 16px;
  }

  .skill-description {
    max-width: 23ch;
  }

  .skill img {
    height: 60px;
    width: 60px;
  }
</style>
