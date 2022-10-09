<script>
  import projects from "../data";
  import Project from "../components/Project.svelte";
</script>

<section class="projects" id="Projects">
  <div class="page">
    <h2 class="title">Projects</h2>
    <div class="projects-list">
      {#each projects as project}
        <Project {...project} />
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .projects-list {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
</style>
