<script>
  export let title;
  export let description;
  export let imgUrl;
</script>

<article class="skill">
  <div class="skill-details">
    <img src={imgUrl} alt={title} />
    <h3 class="skill-title">{title}</h3>
    <p class="skill-description">{description}</p>
  </div>
</article>

<style>
  .skill {
    border-radius: 8px;
    display: flex;
    background-color: var(--background);
    justify-content: center;
  }

  .skill-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }

  .skill-title {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
  }

  .skill-description {
    text-align: center;
    padding: 8px;
  }

  .skill img {
    height: 60px;
    width: 60px;
  }
</style>
