export interface PaginatorProps {
  count: number;
  page: number;
  onChange: React.ChangeEventHandler<unknown>;
  showLastButton: boolean;
  showFirstButton: boolean;
}
