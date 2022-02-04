import React from "react";
import S from "./styles";
import Text from "../../atoms/Text";

const HeaderCrypto: React.FC = () => {
  return (
    <S.Container>
      <S.CryptoPosition>#</S.CryptoPosition>
      <Text type={"paragraph_text"}>#</Text>
      <Text type={"paragraph_text"}>Name</Text>
      <Text type={"paragraph_text"}>Price</Text>
      <Text type={"paragraph_text"}>24h %</Text>
      <Text type={"paragraph_text"}>7d %</Text>
      <Text type={"paragraph_text"}>Market Cap</Text>
      <Text type={"paragraph_text"}>Volume(24h)</Text>
      <Text type={"paragraph_text"}>Circulating Supply</Text>
      <Text type={"paragraph_text"}>Last 7 Days</Text>
    </S.Container>
  );
};

export default HeaderCrypto;
