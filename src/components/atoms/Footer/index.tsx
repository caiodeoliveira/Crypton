import Text from "../../atoms/Text";
import S from "./styles";
import { Paginator } from "../Paginator";
import { FooterProps } from "./types";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const Footer = ({ currentPages, onChange }: FooterProps) => {
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    api.get(`coins/list`).then((response) => {
      console.log(response.data);
      setTotalPages(Number(response.data.length) / 110);
    });
  }, []);

  return (
    <S.Footer>
      <Text type="footer">
        {"Copyright © 2021-2022 CryptoHouse Company  All rights reserved."}
      </Text>
      <S.PaginationContainer>
        <Paginator count={totalPages} page={currentPages} onChange={onChange} />
      </S.PaginationContainer>
    </S.Footer>
  );
};

export default Footer;
