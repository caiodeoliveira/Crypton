import Pagination from "@material-ui/lab/Pagination";
import { PaginatorProps } from "./types";

export const Paginator = ({
  showFirstButton,
  showLastButton,
  count,
  page,
  onChange,
}: PaginatorProps) => {
  return (
    <Pagination
      count={count}
      page={page}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      onChange={onChange}
    />
  );
};
