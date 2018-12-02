var http = require('http');
var ccxt = require('ccxt');

testCezex = async () =>{
 
    const cezex = new ccxt.cezex ({
        'apiKey': 'QxdJ7sW4oPmWRsywwfDxC3sotTGaP82aj9Ia4KAk',
        'secret': '4Z4Z2a4wXp1QI8wxC2MQF5uEcYwyU3sz7wFllg5t',
        // 'uid': 395037,
        // 'timeout': 30000,
        // 'enableRateLimit': true,  
    });

    console.log(cezex.name,'\n');
    //console.log("market:\n",await cezex.fetchMarkets());
    //console.log("\ntickers:\n",await cezex.fetchTickers());
    //console.log('cezex: BTC/USD =>\n', await cezex.fetchTicker('BTC/USD')); 
    //console.log('\nCEZEX orderbook BTC/USD => \n',await cezex.fetchOrderBook("BTC/USD", 5, 5))
    //console.log('\nCEZEX trades BTC/USD => \n',await cezex.fetchTrades("BTC/USD",10))
    //console.log('\nCEZEX OHLCV BTC/USD => \n',await cezex.fetchOHLCV("BTC/USD",'1d'))
    console.log('CEZEX fetchOrder(\'BTC/USD\') => \n', await cezex.fetchOrders('BTC/USD'));
}

testBxinth = async () =>{
    let bxinth    = new ccxt.bxinth();
    // console.log(bxinth.id);
    //console.log("market:\n",await bxinth.fetchMarkets());
    // console.log('bxinth: BTC/USD =>\n', await bxinth.fetchTicker("BTC/USD"))
    console.log('\nBXINTH orders => \n', await bxinth.fetchOrders("BTC/USD"))
}

testBinance = async () =>{
    let binance    = new ccxt.binance();
    console.log(binance.name);
    //console.log("market:\n",await binance.fetchMarkets());
    //console.log("\ntickers:\n",await binance.fetchTickers());
    //console.log('binanc => BTC/USD =>\n', await binance.fetchTicker("BTC/USD"))

    //console.log('\nBINANCE orderbook BTC/USD => \n',await binance.fetchOrderBook("BTC/USDT",5))
    //console.log('\nBINANCE trades BTC/USD => \n',await binance.fetchTrades("BTC/USDT"))
    //console.log('\nBINANCE OHLCV BTC/USD => \n',await binance.fetchOHLCV("BTC/USDT",'3m'))
    console.log('\nBINANCE orders => \n', await binance.fetchOrders("BTC/USDT"))
}   

testBitfinex= async () =>{
    let bitfinex    = new ccxt.bitfinex();
    console.log(bitfinex.name);
 //   console.log("market:\n",await bitfinex.fetchMarkets());
    //console.log("\ntickers:\n",await bitfinex.fetchTickers());
   // console.log('bitfinex: BTC/USD =>\n', await coinex.fetchTicker("BTC/USD"))
  // console.log('\nBITFINEX orderbook BTC/USD => \n',await bitfinex.fetchOrderBook("BTC/USDT",5))
  //console.log('\n BITFINEX trades BTC/USD => \n',await bitfinex.fetchTrades("BTC/USDT")) 
  console.log('\nBITFINEX OHLCV BTC/USD => \n',await bitfinex.fetchOHLCV("BTC/USDT"))
  await bitfinex.Dept
}

testQuadrigacx = async () => {
let ncoe = 1;
    // from variable id
const exchangeId = 'quadrigacx', exchangeClass = ccxt[exchangeId]
                    , quadrigacx = new ccxt.quadrigacx ({
                        'apiKey': 'qvFrjjJEEF',
                        'secret': 'f18f8f178696d36a760a6c4f13bc6fa7',
                        'uid': 395037,
                        'timeout': 30000,
                        'enableRateLimit': true,
                        
                    }, { nonce () { console.log(this.microseconds ());return this.microseconds () }});

    console.log(quadrigacx.name)
    //console.log("\nmarket:\n",await quadrigacx.fetchMarkets());
    console.log('\nQUADRIGACX orders => \n', await quadrigacx.fetchOrder("BTC/USDT"))
}


console.log('\n--------------------------------------------------\n')
//testBxinth();
//testBitfinex();
//testBinance();
// testQuadrigacx();
testCezex();
console.log('\n--------------------------------------------------\n')