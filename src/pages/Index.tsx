import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import styles from "../scss/page/Index.module.scss";

import Title from "../components/title/Title";

function Index() {
  return (
    <>
      <div className={styles.root}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className={`${styles.logo} ${styles.react}`}
              alt="React logo"
            />
          </a>
        </div>
        <Title title={"template"} size={"xl"} status={"primary"} />
        <p className={styles.readTheDocs}>
          A template using vite with react, jest, storybook, type script, scss,
          and css modules.
        </p>
      </div>
    </>
  );
}

export default Index;
