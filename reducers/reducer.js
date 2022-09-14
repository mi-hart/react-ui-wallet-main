
const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                ImportedCoinFullName: action.importedcoinfullname,
                CoinImage: action.coinimage,
                CoinPrice: action.coinprice,
                CoinDailyChange: action.coindailychange,
            };
        case 'SET_SWAP1TOKEN':
            return {
                ...state,
                Swap1Token: action.swap1token,
            };
        case 'SET_SWAP2TOKEN':
            return {
                ...state,
                Swap2Token: action.swap2token,
            };
        case 'SET_BUYTOKEN':
            return {
                ...state,
                BuyToken: action.buytoken,
            };
        case 'SET_DETAILTOKEN':
            return {
                ...state,
                DetailToken: action.detailtoken,
            };
        case 'SET_BALANCE':
            return {
                ...state,
                CurrentETHBalance: action.currentethbalance,
            }
        case 'ADD_POST':
            return {
                ...state,
                ImportedCoinFullName: state.ImportedCoinFullName.concat(action.importedcoinfullname),
            };
        case 'ADD_COINPRICE':
            return {
                ...state,
                CoinPrice: state.CoinPrice.concat(action.coinprice),
            };
        case 'ADD_COINDAILYCHANGE':
            return {
                ...state,
                CoinDailyChange: state.CoinDailyChange.concat(action.coindailychange),
            };
        case 'REMOVE_POST':
            return {
                ...state,
                ImportedCoinFullName: state.ImportedCoinFullName.filter(importedcoinfullname => importedcoinfullname !== action.importedcoinfullname),
            };
        default:
            return state;
    }
};

export default Reducer;