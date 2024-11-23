import styles from "../ui/style.module.scss";

function Search() {
  return (
    <form action="/search/index.php" className={styles.top_search}>
      <input
        aria-label="Search"
        id="title-search-input"
        type="text"
        name="q"
        placeholder=""
        className={styles.top_search_input}
        value=""
      />
      <input
        type="submit"
        name="s"
        value="ПОИСК"
        className={styles.top_search_submit}
      />
    </form>
  );
}

export default Search;
