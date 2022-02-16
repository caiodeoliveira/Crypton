import Text from "../../atoms/Text";
import S from "./styles";
import { Paginator } from "../Paginator";

const Footer = () => {
  return (
    <S.Footer>
      <Text type="footer">
        {"Copyright © 2010-2022 CryptoHouse Company  All rights reserved."}
      </Text>
      <S.PaginationContainer>
        <Paginator count={5} showFirstButton showLastButton />
      </S.PaginationContainer>
    </S.Footer>
  );
};

export default Footer;
