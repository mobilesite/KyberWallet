
var Web3 = require("web3")
var BaseEthereumProvider =  require("./baseProvider")

class HttpEthereumProvider extends BaseEthereumProvider {
    constructor(props) {
        super(props)
        this.rpcUrl = props.url
        this.rpc = new Web3(new Web3.providers.HttpProvider(this.rpcUrl, 9000))
        this.connection = true
        this.initContract()        
        this.intervalId = null
    }

    isConnected(){
        return this.connection
    }

    async subcribeNewBlock(callBack){        
        //callBack()
        while(true){
          await this.delay(10000) // 10秒钟执行一次
          await callBack()
          //this.intervalId = setInterval(callBack, 10000)
        }
    }

    delay(second) {
      return new Promise(resolve => setTimeout(resolve, second))
    }

    clearSubcription(){
        clearInterval(this.intervalId)
    }

}


module.exports = HttpEthereumProvider