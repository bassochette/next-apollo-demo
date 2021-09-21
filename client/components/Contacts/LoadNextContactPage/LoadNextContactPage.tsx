import { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/store";
import { getContactPage } from "../../../redux/actions/contactActions";
import { searchContactPage } from "../../../redux/actions/searchContactsActions";
import * as styles from "./loadNextContactPage.module.scss";

export const LoadNextContactPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { currentPage, pageCount, query } = useSelector(
    (state: State) => state.contacts
  );
  const noMorePage = pageCount !== 0 && currentPage + 1 === pageCount;

  const loadNextPage = useCallback(async () => {
    if (noMorePage) return;
    if (query) {
      searchContactPage({
        query,
        page: currentPage + 1,
        dispatch,
        clear: false,
      });
    } else {
      getContactPage({ page: currentPage + 1, dispatch });
    }
  }, [currentPage, query, noMorePage]);

  return (
    <div
      onClick={loadNextPage}
      className={`${styles["load-more-button"]} ${
        noMorePage && styles["disabled"]
      }`.trim()}
    >
      {!noMorePage && "load more button"}
      {noMorePage && "That's all folks!"}
    </div>
  );
};
