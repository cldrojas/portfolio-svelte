<script>
  import github from "../assets/social/github.svg";
  import twitter from "../assets/social/twitter.svg";
  import mail from "../assets/social/mail.svg";

  import hero from "../assets/hero.png";
</script>

<section class="intro" id="intro">
  <header class="header">
    <h2>I&apos;m Daniel Rojas</h2>
    <h3>A Frontend Developer based in Arica, Chile</h3>
  </header>
  <div class="social">
    <ul>
      <li>
        <a href="https://github.com/cldrojas">
          <img src={github} alt="github" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/cld_rojas">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
      <li>
        <a href="mailto:cldrojasz@gmail.com">
          <img src={mail} alt="mail" />
        </a>
      </li>
    </ul>
    <h4>Lets work together, here you cand find me</h4>
  </div>
  <picture>
    <img src={hero} alt="Daniel Rojas" />
  </picture>
</section>

<style>
  .intro {
    background: #0a192ff0;
    background-color: #0cbaba;
    background-image: linear-gradient(
      0deg,
      rgba(10, 25, 47, 0.6082808123249299) 0%,
      rgba(10, 25, 47, 0.8995973389355743) 62%,
      rgba(10, 25, 47, 0.9416141456582633) 100%
    );
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: var(--text);
    display: flex;
    height: 100vh;
    flex-direction: column;
    padding-top: 20%;
    line-height: 1.5;
  }
  .header {
    margin-left: 24px;
  }
  .header > h2 {
    font-size: 2.3rem;
  }
  .header h3 {
    font-size: 1.7rem;
    font-weight: 600;
    width: 19ch;
  }
  picture {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }
  picture > img {
    width: 100%;
    position: relative;
  }
  .social {
    margin-top: 2.5em;
  }
  .social ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
  }
  .social h4 {
    margin: 10px 0 0 24px;
  }
  .social img {
    width: 36px;
    height: 36px;
  }
</style>
