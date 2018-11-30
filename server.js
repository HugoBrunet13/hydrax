var http = require('http');
var ccxt = require('ccxt');

var server = http.createServer(function(req, res) {
res.writeHead(200);


testCezex = async () =>{
    let cezex    = new ccxt.cezex();
   console.log(cezex.id);

    console.log("market:\n",await cezex.fetchMarkets());
  //  console.log("\tickers:\n",await cezex.fetchTickers());
    //console.log(kraken.id, await kraken.fetchOrderBook(kraken.symbols[0]));
}

testBxinth = async () =>{
    let bxinth    = new ccxt.bxinth();
   console.log(bxinth.id);

  //  console.log("market:\n",await bxinth.fetchMarkets());
    console.log("\ntickers:\n",await bxinth.fetchTickers());
    //console.loœg(kraken.id, await kraken.fetchOrderBook(kraken.symbols[0]));
}

testBinance = async () =>{
    let binance    = new ccxt.binance();
   console.log(binance.name);

 //   console.log("market:\n",await binance.fetchMarkets());
   // console.log("\tickers:\n",await binance.fetchTickers());
    //console.log(kraken.id, await kraken.fetchOrderBook(kraken.symbols[0]));
}

testCezex();
//testBxinth();
//testBinance();
res.end('Hi everybody!');
});
server.listen(8080);