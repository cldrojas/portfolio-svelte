<script>
  import Project from "../components/Project.svelte";
</script>

<section class="projects">
  <h2 class="title">Projects</h2>
  <div class="projects-list">
    <Project
      name="To-Do List"
      description="This is my first project using svelte, it's a frontend mentor challenge"
      imgUrl="src/assets/projects/todo.png"
      logoUrl="src/assets/projects/todo_logo.png"
      previewUrl="https://cldrojas.github.io/todo"
      repoUrl="https://github.com/cldrojas/todo"
      technologies={[
        "html",
        "css",
        "javascript",
        "svelte",
        "webpack",
        "travis-ci",
        "github-pages",
      ]}
    />
    <Project
      name="Verónica"
      description="Landing page for promoting my girlfriend's work"
      imgUrl="src/assets/projects/vero.png"
      logoUrl="src/assets/projects/vero_logo.png"
      previewUrl="https://cldrojas.github.io/veronica"
      repoUrl="https://github.com/cldrojas/veronica"
      technologies={[
        "html",
        "css",
        "javascript",
        "svelte",
        "webpack",
        "travis-ci",
        "github-pages",
      ]}
    />
    <Project
      name="Rick & Morty"
      description="A single page application that shows Rick & Morty characters"
      imgUrl="src/assets/projects/rick.png"
      logoUrl="src/assets/projects/rick_logo.png"
      previewUrl="https://cldrojas.github.io/spa-node/"
      repoUrl="https://github.com/cldrojas/spa-node"
      technologies={[
        "html",
        "css",
        "javascript",
        "node",
        "webpack",
        "travis-ci",
        "github-pages",
      ]}
    />
  </div>
</section>

<style>
  .projects {
    width: 100%;
    min-height: 100vh;
    padding: 8px 24px;
  }
  .title {
    margin-bottom: 16px;
  }
  .projects-list {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
  }
</style>
