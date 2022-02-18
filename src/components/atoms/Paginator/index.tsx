import Pagination from "@material-ui/lab/Pagination";
import { PaginatorProps } from "./types";

export const Paginator = ({
  totalPages,
  currentPage,
  showFirstButton,
  showLastButton,
}: PaginatorProps) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
    />
  );
};
