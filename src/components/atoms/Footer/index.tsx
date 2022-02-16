import Text from "../../atoms/Text";
import S from "./styles";
import Pagination from "@material-ui/lab/Pagination";

const Footer = () => {
  return (
    <S.Footer>
      <Text type="footer">
        {"Copyright © 2010-2022 CryptoHouse Company  All rights reserved."}
      </Text>
      <Pagination count={10} />
    </S.Footer>
  );
};

export default Footer;
