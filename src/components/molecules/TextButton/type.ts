type TextButtonTypes = "login" | "recover_data";

export default interface TextButtonProps {
  id?: string;
  type: TextButtonTypes;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}
