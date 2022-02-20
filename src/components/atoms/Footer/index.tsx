import Text from "../../atoms/Text";
import S from "./styles";
import { Paginator } from "../Paginator";
import { FooterProps } from "./types";

const Footer = ({ currentPages, totalPages, onClick }: FooterProps) => {
  return (
    <S.Footer>
      <Text type="footer">
        {"Copyright © 2021-2022 CryptoHouse Company  All rights reserved."}
      </Text>
      <S.PaginationContainer>
        <Paginator
          count={totalPages}
          page={currentPages}
          showFirstButton
          showLastButton
          onChange={onClick}
        />
      </S.PaginationContainer>
    </S.Footer>
  );
};

export default Footer;
