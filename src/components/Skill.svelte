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
    border-radius: 10px;
    margin: 8px 0;
    padding: 16px 24px;
  }
  .skill-details {
    display: flex;
    align-items: center;
  }

  .skill:nth-child(even) .skill-details {
    flex-direction: row-reverse;
  }

  .skill-title {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .skill-description {
    width: 30ch;
  }

  .skill img {
    height: 60px;
    margin-top: 16px;
  }
</style>
