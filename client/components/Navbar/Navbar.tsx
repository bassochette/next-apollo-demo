import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import * as styles from "./navbar.module.scss";
import { searchContactPage } from "../../redux/actions/searchContactsActions";

export const Navbar: FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    // TODO: debounce!
    searchContactPage({
      query: event.target.value,
      page: 0,
      dispatch,
    });
  };

  return (
    <section className={styles["navbar-container"]}>
      <input
        type="text"
        className={styles["search-box"]}
        value={query}
        onChange={_onChange}
      />
    </section>
  );
};
