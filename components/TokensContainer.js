import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Switch,
} from 'react-native';
import styled from "styled-components";

const TokensContainer = (props) => {
  const { tokenImage, tokenName, tokenAmount, tokenSymbol, hide, isSwitch } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  if (hide) {
    return null;
  }
  if (isSwitch) {
    return (
      <View style={{ width: "109%", paddingRight: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#eee" }}>
        <TokenLeft>
          <TokenName>
            <Image source={tokenImage} />
            <Token>
              <Name>{tokenName}</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>{tokenAmount}</TokenAmount>
            <TokenSymbol1>{tokenSymbol}</TokenSymbol1>
          </TokenCol2>
        </TokenLeft>
        <TokenRight>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled} />
        </TokenRight>
      </View>
    );
  }
  return (
    <View style={{ width: "109%", paddingRight: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#eee" }}>
      <TokenName>
        <Image source={tokenImage} />
        <Token>
          <Name>{tokenName}</Name>
        </Token>
      </TokenName>
      <TokenCol2>
        <TokenAmount>{tokenAmount}</TokenAmount>
        <TokenSymbol>{tokenSymbol}</TokenSymbol>
      </TokenCol2>
    </View>
  );
};

export default TokensContainer;

const TokenLeft = styled.View`
  width : 85%;
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;
`;

const TokenRight = styled.View`
`;
const Token = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenName = styled.View`
  flex-direction: row;
  padding: 20px 20px 20px 0;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
const Name = styled.Text`
  font-size: 18px;
  margin-left: 16px;
`;
const TokenAmount = styled.Text`
  font-size: 18px;
`;
const TokenSymbol = styled.Text`
  font-size: 18px;
  margin-left: 5px;
`;
const TokenSymbol1 = styled.Text`
  margin-left: 10px;
  color: #979797;
  font-size: 16px;
`;
const TokenCol2 = styled.View`
  flex-direction: row;
  align-items: center;
`;
