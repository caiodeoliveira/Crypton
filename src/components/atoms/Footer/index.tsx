import Text from "../../atoms/Text";
import S from "./styles";
import { Paginator } from "../Paginator";
import { FooterProps } from "./types";

const Footer = ({ currentPage, totalPages, onChange }: FooterProps) => {
  return (
    <S.Footer>
      <Paginator count={totalPages} page={currentPage} onChange={onChange} />
      <Text type="footer">
        {"Copyright © 2021-2022 CryptoHouse Company  All rights reserved."}
      </Text>
    </S.Footer>
  );
};

export default Footer;
