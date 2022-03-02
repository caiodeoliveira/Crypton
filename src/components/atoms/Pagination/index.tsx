import { PaginationProps } from "./types";

export const Pagination = ({
  showFirstButton,
  showLastButton,
  count,
  page,
  onChange,
}: PaginationProps) => {
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
