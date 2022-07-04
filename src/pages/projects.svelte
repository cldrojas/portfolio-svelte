<script>
  import Project from "../components/Project.svelte";
</script>

<section class="projects">
  <h2 class="title">Projects</h2>
  <Project
    name="To-DO List"
    imgUrl="src/assets/projects/todo.png"
    previewUrl="https://cldrojas.github.io/todo"
    repoUrl="github.com/cldrojas/todo"
    technologies={[
      "html",
      "css",
      "javascript",
      "svelte",
      "github-pages",
      "travis-ci",
    ]}
  />
</section>

<style>
  .projects {
    min-height: 100vh;
    padding: 8px 24px;
  }
  .title {
    margin-bottom: 16px;
  }
</style>
