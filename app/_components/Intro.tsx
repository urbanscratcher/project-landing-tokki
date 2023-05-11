import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <h1>The Most Unique Korean Traditional Spirits</h1>
      <p>
        We want to stand shoulder to shoulder with other spirits around the
        globe
      </p>

      <div className={styles.video}>
        <div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-6j_ctn2rHU?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Intro;
