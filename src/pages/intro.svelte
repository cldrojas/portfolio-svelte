<script>
  import github from "../assets/social/github.svg";
  import twitter from "../assets/social/twitter.svg";
  import mail from "../assets/social/mail.svg";
  import linkedin from "../assets/social/llinkedin.svg";
  import next from "../assets/nextArrow.svg";
</script>

<section class="intro" id="Intro">
  <div class="page">
    <nav class="social">
      <header>
        <p>Hi there! 👋 I am</p>
        <h1>Daniel Rojas</h1>
        <h2>Frontend Developer, coffee lover and cannabis grower</h2>
        <ul class="links">
          <li>
            <a
              href="https://github.com/cldrojas"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/cld_rojas"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href="mailto:cld.rojasz@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={mail} alt="mail" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/cldrojas/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </header>
    </nav>
    <a href="#Projects" class="next">
      <img src={next} alt="Go to next section" />
    </a>
  </div>
</section>

<style>
  .intro {
    display: flex;
    /* border: solid 1px green; */
    padding: 0 2rem;
    align-items: center;
    justify-content: center;
    background: #2b554e;
    background-color: #457f76;
    background-image: linear-gradient(
      0deg,
      rgba(10, 25, 47, 0.6082808123249299) 0%,
      rgba(10, 25, 47, 0.8995973389355743) 62%,
      rgba(10, 25, 47, 0.9416141456582633) 100%
    );
    background-attachment: fixed;
  }
  header {
    /* border: solid 1px green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    align-self: center;
  }
  ul {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    /* padding: 2rem 0; */
    /* border: solid 1px greenyellow; */
  }
  p {
    font-size: 1.3rem;
  }
  h1 {
    /* text-align: center; */
    font-size: 6rem;
  }
  .social {
    /* border: solid 1px blue; */
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .next {
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 1rem;
    height: 4rem;
    /* border: solid 1px red; */
  }
  .next > img {
    height: 2.5rem;
    animation: bounce 3s infinite;
    cursor: pointer;
  }

  @keyframes bounce {
    0%,
    60% {
      transform: translateY(0);
    }
    10%,
    30%,
    70% {
      transform: translateY(10px);
    }
  }

  /* .intro {
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
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 20%;
    line-height: 1.5;
    position: relative;
    min-width: 390px;
  }
  .header {
    display: grid;
    justify-content: center;
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
    right: 0;
    justify-content: center;
    align-items: center;
  }
  picture > img {
    width: 100%;
  }
  .social {
    margin-top: 2.5em;
    padding: 0 16px;
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
  @media (min-width: 1024px) {
    picture {
      opacity: 0;
    }
  } */
</style>
