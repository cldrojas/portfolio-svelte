<script>
  import Project from "../components/Project.svelte";
</script>

<section class="projects">
  <h2 class="title">Projects</h2>
  <Project
    name="To-Do List"
    description="This is my first project using svelte, i loved svelte's syntax and architecture"
    imgUrl="src/assets/projects/todo.png"
    logoUrl="src/assets/projects/todo_logo.png"
    previewUrl="https://cldrojas.github.io/todo"
    repoUrl="https://github.com/cldrojas/todo"
    technologies={[
      "html",
      "css",
      "php",
      "vanilla",
      "porno",
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
