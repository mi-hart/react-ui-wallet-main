import React, { useState, useEffect, useContext } from "react";
import { Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import TokensContainer from "../components/TokensContainer";
import { Context } from '../reducers/store'

const ImportTokensScreen = ({ navigation }) => {
  const [searchKeyWord, setSearchKeyWord] = React.useState("");
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    console.log(searchKeyWord);
  }, [searchKeyWord]);

  const searchFilter = (text) => {
    let lowerText = text.toLowerCase();
    if (lowerText.includes(searchKeyWord)) {
      return false;
    }
    return true;
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <SearchBar placeholder="Search tokens" placeholderTextColor="#CCDDEE" value={searchKeyWord} onChangeText={setSearchKeyWord} />
        <Ionicons name={"add"} color="#fff" size={28} />
      </Header>
      <Body>
        <TokensContainer tokenImage={require("../assets/images/btc.png")}
          tokenName="Bitcoin"
          tokenAmount=""
          tokenSymbol="BTC"
          hide={searchFilter("BitcoinBTC")}
          isSwitch={state.CoinFullName.includes('Bitcoin') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/eth.png")}
          tokenName="Ethereum"
          tokenAmount=""
          tokenSymbol="ETH"
          hide={searchFilter("Ethereum")}
          isSwitch={state.CoinFullName.includes('Ethereum') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/bnb2.png")}
          tokenName="BNB Beacon Chain"
          tokenAmount=""
          tokenSymbol="BNB"
          hide={searchFilter("BNBBeaconChainBNB")}
          isSwitch={state.CoinFullName.includes('BNB Beacon Chain') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/bnb.png")}
          tokenName="BNB Smart Chain"
          tokenAmount=""
          tokenSymbol="BNB"
          hide={searchFilter("BNBSmartChainBNB")}
          isSwitch={state.CoinFullName.includes('BNB Smart Chain') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/cardano.png")}
          tokenName="Cardano"
          tokenAmount=""
          tokenSymbol="ADA"
          hide={searchFilter("CardanoADA")}
          isSwitch={state.CoinFullName.includes('Cardano') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/xrp.png")}
          tokenName="XRP"
          tokenAmount=""
          tokenSymbol="XRP"
          hide={searchFilter("XRP")}
          isSwitch={state.CoinFullName.includes('XRP') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/solana.png")}
          tokenName="Solana"
          tokenAmount=""
          tokenSymbol="SOL"
          hide={searchFilter("SolanaSOL")}
          isSwitch={state.CoinFullName.includes('Solana') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/doge.png")}
          tokenName="DogeCoin"
          tokenAmount=""
          tokenSymbol="DOGE"
          hide={searchFilter("DogeCoinDOGE")}
          isSwitch={state.CoinFullName.includes('DogeCoin') ? "show_check" : "show"}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/polkadot.png")}
          tokenName="Polkadot"
          tokenAmount=""
          tokenSymbol="DOT"
          hide={searchFilter("PolkadotDot")}
          isSwitch={state.CoinFullName.includes('Polkadot') ? "show_check" : "show"}
        >
        </TokensContainer>
      </Body>
    </Container>
  );
};

export default ImportTokensScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  width: 100%;
`;
const SearchBar = styled.TextInput`
  background: #3275bb;
  padding-left: 20px;
  font-size: 18px;
  color: #fff;
  width: 80%;
  padding: 0 20px;
  overflow: hidden;
`;
const Body = styled.View`
  padding: 0 20px;
`;
