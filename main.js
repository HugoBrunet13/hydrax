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
    // console.log("\n-------------------------------\n\nCEZEX fetchMarkets()=>\n",await cezex.fetchMarkets());
    // console.log('\n-------------------------------\n\nCEZEX fetchBalance() => \n', await cezex.fetchBalance());
    // console.log("\n-------------------------------\n\nCEZEX fetchTickers()",await cezex.fetchTickers());
   // console.log('cezex: BTC/USD =>\n', await cezex.fetchTicker('BTC/USD')); 
    //console.log('\nCEZEX trades BTC/USD => \n',await cezex.fetchTrades("BTC/USD",122))
    //console.log('\nCEZEX OHLCV BTC/USD => \n',await cezex.fetchOHLCV("BTC/USD",'1h',1543791600000,2))

   
    //console.log('\n-----------------\nCEZEX fetchClosedOrders(\'BTC/USD\') CLOSED orders => \n', await cezex.fetchClosedOrders('BTC/USD'));
    //console.log('\n-----------------\nCEZEX fetchAllOrders(\'BTC/ETH\') ALL orders => \n', await cezex.fetchOrders('BTC/ETH'));

    //console.log('\n-----------------\nCEZEX fetchDepositAddress(\'BTC\') => \n', await cezex.fetchDepositAddress('BTC'));
    //console.log('CEZEX FetchOrder(ID=1191) => \n', await cezex.fetchOrder(1191,'DASH/ETH'));
    //console.log('CEZEX createOrder(\'BTC/ETH\') => \n', await cezex.createOrder('BTC/ETH','limit','sell',28888,254645));
   
   // console.log('CEZEX delete(ID=1216) => \n', await cezex.cancelOrder(1216,'BTC/ETH'));
    //console.log('CEZEX fetchOpenOrders(\'BTC/ETH\') OPEN order  => \n', await cezex.fetchOpenOrders('BTC/ETH')); 
   // console.log('\nCEZEX orderbook BTC/ETH => \n',await cezex.fetchOrderBook("BTC/ETH"))
   
    //console.log('CEZEX fetchMyTrades(BTC/USD) => \n', await cezex.fetchMyTrades('BTC/USD',1543781868000,1));
    
    console.log('CEZEX balance => \n', await cezex.fetchBalance());

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

  //console.log("BINANCE markets=>\n",await binance.fetchMarkets());
    //console.log("\ntickers:\n",await binance.fetchTickers());
    //console.log('binanc => BTC/USD =>\n', await binance.fetchTicker("BTC/USD"))   
    //console.log('\nBINANCE orderbook BTC/USD => \n',await binance.fetchOrderBook("BTC/USDT",5))
    //console.log('\nBINANCE trades BTC/USD => \n',await binance.fetchTrades("BTC/USDT"))
    console.log('\nBINANCE OHLCV BTC/USD => \n',await binance.fetchOHLCV("BTC/USDT",'3'))
  //  console.log('\nBINANCE orders => \n', await binance.fetchOrders("BTC/USDT"))
}   

testBitfinex= async () =>{
    let bitfinex    = new ccxt.bitfinex();
    console.log(bitfinex.name);
  // console.log("market:\n",await bitfinex.fetchMarkets());
    //console.log("\ntickers:\n",await bitfinex.fetchTickers());
   // console.log('bitfinex: BTC/USD =>\n', await coinex.fetchTicker("BTC/USD"))
 // console.log('\nBITFINEX orderbook BTC/USD => \n',await bitfinex.fetchOrderBook("BTC/USDT",5))
  //console.log('\n BITFINEX trades BTC/USD => \n',await bitfinex.fetchTrades("BTC/USDT")) 
  //console.log('\nBITFINEX OHLCV BTC/USD => \n',await bitfinex.fetchOHLCV("BTC/USDT"))
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


//console.log('\n--------------------------------------------------\n')
//testBxinth();
//testBitfinex();
//testBinance();
// testQuadrigacx();
//testCezex();
//console.log('\n--------------------------------------------------\n');




test = async () => {

     //creation exchange CEZEX object 
    const cezex = new ccxt.cezex ({
        'apiKey': 'QxdJ7sW4oPmWRsywwfDxC3sotTGaP82aj9Ia4KAk',
        'secret': '4Z4Z2a4wXp1QI8wxC2MQF5uEcYwyU3sz7wFllg5t',
    });

    const symbol = 'BTC/USD' //

    /*********************************************************************
     * ************************** Monitor price **************************
     * *******************************************************************
     * ***************   Tests of price monitoring functions *************
    * ******************************************************************** */

    //fetchTicker()
    //console.log("CEZEX fetchTicker('BTC/USD') => \n",await cezex.fetchTicker(symbol));

    //fetchOrderBook()
    //console.log("\nCEZEX fetchOrderBook('BTC/USD') => \n",await cezex.fetchOrderBook(symbol))

     //fetchOHLCV()
    //console.log("\nCEZEX fetchOHLCV('BTC/USD') => \n",await cezex.fetchOHLCV(symbol,'1w',1535752800000)) //OHLCV graph (weekly prices) since 01 sep 2018
    
    //fetchTrades()
    //console.log("\nCEZEX fetchTrades('BTC/USD') => \n",await cezex.fetchTrades(symbol,undefined, 2)) //error in API (since parameter does not work)
    
    /*********************************************************************
     * ***************** Place Trade & Monitor Positions *****************
     * *******************************************************************
     * *   Tests of placeOrder and position monitoring functions ********
    * ******************************************************************** */
    
    //createOrder()
    //console.log("\nCEZEX createOrder() => \n",await cezex.createOrder(symbol, 'limit','sell',1, 5000)); //order sell(1BTC->5000$) 
    
    //fetchOpenOrder()
    //console.log("\nCEZEX fetchOpenOrder('BTC/USD') => \n",await cezex.fetchOpenOrders(symbol));
    
    //cancelOrder()
    //console.log("\nCEZEX cancelOrder() => \n",await cezex.cancelOrder('ID', symbol));
    
    //fetchOrder(1226)
    //console.log("\nCEZEX fetchOrder(1226) => \n",await cezex.fetchOrder(1230,symbol));

    //fetchMyTrades()
    //console.log('CEZEX fetchMyTrades(BTC/USD) => \n', await cezex.fetchMyTrades(symbol,1543770000000,3));

}


test()