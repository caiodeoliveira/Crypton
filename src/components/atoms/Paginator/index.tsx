import Pagination from "@material-ui/lab/Pagination";
import { PaginatorProps } from "./types";

export const Paginator = ({
  count,
  showFirstButton,
  showLastButton,
}: PaginatorProps) => {
  return (
    <Pagination
      count={count}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
    />
  );
};
