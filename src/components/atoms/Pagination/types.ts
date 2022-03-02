export interface PaginationProps {
  count: number;
  page: number;
  onChange: React.ChangeEventHandler<unknown>;
  showLastButton: boolean;
  showFirstButton: boolean;
}
