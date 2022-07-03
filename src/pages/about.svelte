<script>
  import Skill from "../components/Skill.svelte";

  import mobileUrl from "../assets/mobile.svg";
  import composedUrl from "../assets/composed.svg";
  import pixelUrl from "../assets/geometry.svg";
</script>

<section class="about" id="about">
  <h2 class="title">About</h2>
  <p class="description">
    I'm a software engeenier, passionate about building fast and responsive web
    applications.
  </p>
  <p class="description">
    I consider myself detail-oriented, cheerful and observant. I'm very
    persistent too, always looking for precision and speed.
  </p>
  <p class="description">
    Currently i'm looking for my first job as a frontend developer.
  </p>
  <h2>My skills</h2>
  <div class="skill-set">
    <Skill
      title="Mobile-first design"
      imgUrl={mobileUrl}
      description="Today, most of the internet access happens via mobile devices"
    />
    <Skill
      title="Composed app"
      imgUrl={composedUrl}
      description="Applications divided by small pieces of code make them easly mantainable"
    />
    <Skill
      title="Pixel perfect code"
      imgUrl={pixelUrl}
      description="Pixel perfect is one of the best
      ways to build awsome mockup based applications"
    />
  </div>
</section>

<style>
  .about {
    padding: 16px 24px;
    height: 100vh;
    background-color: var(--darkBackground);
    color: var(--text);
  }

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 16px 0;
  }

  .about > p {
    margin-left: 8px;
    border-radius: 10px;
    margin-bottom: 16px;
    font-weight: 400;
    max-width: 72ch;
  }

  .skill-set {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
  }
</style>
