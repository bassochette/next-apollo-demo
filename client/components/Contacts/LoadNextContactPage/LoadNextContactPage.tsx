import { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/store";
import { getContactPage } from "../../../redux/actions/contactActions";
import * as styles from "./loadNextContactPage.module.scss";

export const LoadNextContactPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { currentPage, pageCount } = useSelector(
    (state: State) => state.contacts
  );
  const loadNextPage = useCallback(async () => {
    getContactPage({ page: currentPage + 1, dispatch });
  }, [currentPage]);

  if (pageCount !== 0 && currentPage === pageCount) return <></>;

  return (
    <div onClick={loadNextPage} className={styles["load-more-button"]}>
      load more button
    </div>
  );
};
