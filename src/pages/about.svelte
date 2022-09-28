<script>
  import Skill from "../components/Skill.svelte";

  import mobileUrl from "../assets/mobile.svg";
  import composedUrl from "../assets/composed.svg";
  import pixelUrl from "../assets/geometry.svg";
  import hero from "../assets/newhero.jpg";
</script>

<section class="about" id="About">
  <div class="page">
    <h2 class="title">About</h2>
    <article>
      <picture>
        <img class="hero" src={hero} alt="Welcome" />
      </picture>
      <div class="description">
        <p>
          I'm software engeenier, passionate about frontend development and web
          technologies, I really enjoy building fast and responsive web
          applications
        </p>
        <p>
          I consider myself detail-oriented, cheerful and observant. I'm also
          very persistent, specially when it comes to precision and speed
        </p>
      </div>
    </article>
    <h3>My skills</h3>
    <div class="skills">
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
    </div>
  </div>
</section>

<style>
  .about {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--temp);
    background-color: var(--temp2);
    background-image: linear-gradient(
      0deg,
      rgba(10, 25, 47, 0.6082808123249299) 0%,
      rgba(10, 25, 47, 0.8995973389355743) 62%,
      rgba(10, 25, 47, 0.9416141456582633) 100%
    );
    background-attachment: fixed;
    color: var(--text);
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    align-items: center;
    align-self: center;
  }

  picture {
    display: flex;
    justify-content: center;
  }

  .hero {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    padding: 1rem;
    object-fit: cover;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 16px 0;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
    padding: 2rem;
  }

  .description {
    font-size: 1.3rem;
    text-align: center;
  }

  p {
    margin: 1rem 0;
    font-weight: 400;
    line-height: 1.5;
  }

  .skill-set {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
</style>
