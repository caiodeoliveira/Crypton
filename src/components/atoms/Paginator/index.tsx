import Pagination from "@material-ui/lab/Pagination";
import { PaginatorProps } from "./types";

export const Paginator = ({ count, page, onChange }: PaginatorProps) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant={"outlined"}
    />
  );
};
