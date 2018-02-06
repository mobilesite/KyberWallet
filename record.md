### 1、docs 文件夹

看起来无关紧要，不知道干什么的

### 2、env 文件夹

主要是用通过 process.env.npm_config_chain 这个环境变量来切换不同的网络，默认是 kovan，还有 ropsten 和 mainnet。package.json 中有--env.chain=ropsten 之类的配置。

里面有几个.json 文件用来配置不同环境下的配置项，包括连接的地址，支持哪些代币等等。

并通过一个 js 文件将配置作为一个对象进行了抛出。

```json
{
    "connections": {
        "http": [
            "https://ropsten.infura.io/DtzEYY0Km2BA3YwyJcBG",
            "https://ropsten.infura.io/0BRKxQ0SFvAxGL72cbXi",
            "https://ropsten.infura.io/Ho4cy66JFfTvvAVlXvii",
            "https://ropsten.infura.io/aFvzEJSCQtTUJJ0Ec0mW",
            "https://ropsten.infura.io/uF2YCXrIz7yUFEXd2yo0",
            "https://ropsten.infura.io/NhLyl78p5UrUgBN5GSty"
        ],
        "ws": "wss://ropsten.kyber.network/ws/"
    },
    "history_endpoint": "https://cache.kyber.network",
    "api_usd": "https://api.coinmarketcap.com",
    "tokens": {
        "ETH": {
            "name": "Ethereum",
            "symbol": "ETH",
            "icon": "eth.svg",
            "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "decimal": 18,
            "usd_id": "ethereum"
        },
        "KNC": {
            "name": "KyberNetwork",
            "symbol": "KNC",
            "icon": "knc.svg",
            "address": "0xa59826bfd12c6cddff70137a5f3e29b75215c531",
            "decimal": 18,
            "usd_id": "kyber-network"
        },
        "OMG": {
            "name": "OmiseGO",
            "symbol": "OMG",
            "icon": "omg.svg",
            "address": "0x98541419c0f9873acf6bf449cb7246f9df600d2c",
            "decimal": 18,
            "usd_id": "omisego"
        },
        "DGD": {
            "name": "DigixDAO",
            "symbol": "DGD",
            "icon": "dgd.svg",
            "address": "0xe8c213a416646b5dfc04845d1b3e471b35599722",
            "decimal": 9,
            "usd_id": "digixdao"
        },
        "CVC": {
            "name": "Civic",
            "symbol": "CVC",
            "icon": "cvc.svg",
            "address": "0x5313256342e3b2a12188b91eee310f8311b8aa73",
            "decimal": 8,
            "usd_id": "civic"
        },
        "FUN": {
            "name": "FunFair",
            "symbol": "FUN",
            "icon": "fun.svg",
            "address": "0xf96a8f7cd011a3cf2f2c8f5fdf8aaf0471ec3302",
            "decimal": 8,
            "usd_id": "funfair"
        },
        "MCO": {
            "name": "Monaco",
            "symbol": "MCO",
            "icon": "mco.svg",
            "address": "0xec8530552d545aa50668af7d75a96d9359d7388a",
            "decimal": 8,
            "usd_id": "monaco"
        },
        "GNT": {
            "name": "Golem",
            "symbol": "GNT",
            "icon": "gnt.svg",
            "address": "0x4d46106343242999b7617e6c1a8f6d4927831582",
            "decimal": 18,
            "usd_id": "golem-network-tokens"
        },
        "ADX": {
            "name": "AdEx",
            "symbol": "ADX",
            "icon": "adx.svg",
            "address": "0xf0de273c82a7eddd6057d963b848cd21309364bf",
            "decimal": 4,
            "usd_id": "adx-net"
        },
        "PAY": {
            "name": "TenX",
            "symbol": "PAY",
            "icon": "pay.svg",
            "address": "0xa8f3612baea3998fee82673506189dc277eb8973",
            "decimal": 18,
            "usd_id": "tenx"
        },
        "BAT": {
            "name": "BasicAttention",
            "symbol": "BAT",
            "icon": "bat.svg",
            "address": "0xfe35c93a01af76dbe1116f13dd903578f340ab7d",
            "decimal": 18,
            "usd_id": "basic-attention-token"
        },
        "EOS": {
            "name": "Eos",
            "symbol": "EOS",
            "icon": "eos.svg",
            "address": "0x7d7fd73fede850a0d3f044af79ba83490830ae4b",
            "decimal": 18,
            "usd_id": "eos"
        },
        "LINK": {
            "name": "ChainLink",
            "symbol": "LINK",
            "icon": "link.svg",
            "address": "0xfab56a845dbb07f6ffdadf225713de8617e37d5c",
            "decimal": 18,
            "usd_id": "chainlink"
        }
    },
    "ethScanUrl": "https://ropsten.etherscan.io/",
    "bank": "0xcbae93b11b0a7a944649f26f17ab5566a1526f6f",
    "reserve": "0x488b362e51a53e969cb28f42eadc41411f20a835",
    "pricing": "0x6dcf29f5dc0f207e6d850d9436e35281079bc063",
    "network": "0xe801403a9b8dae494f9088a4687c1c139fae2fe4",
    "wrapper": "0x54556ac5afbd73b6a9d1c3d2d679477dd33ea81f",
    "trade_topic":
        "0xec0d3e799aa270a144d7e3be084ccfc657450e33ecea1b1a4154c95cedaae5c3",
    "endpoint": "https://ropsten.infura.io/DtzEYY0Km2BA3YwyJcBG",
    "averageBlockTime": 6000,
    "networkId": 3,
    "chainName": "Ropsten",
    "faucet": "https://faucet.kyber.network/",
    "server_logs": {
        "url": "ropsten.etherscan.io",
        "api_key": "D8YAEQ3V4THAPDA9YSB1YGA1QY9KAMHY6M"
    }
}
```

疑问：

network、wrapper 分别是什么？如果 network 是网络地址的话，wrapper 又有什么用呢？从使用上看，两者都是地址，而且从源代码分析，两个都是合约地址。是否意味着 wrapper 合约里面嵌套着 network 合约。

```js
initContract() {
    this.erc20Contract = new this.rpc.eth.Contract(constants.ERC20)
    this.networkAddress = BLOCKCHAIN_INFO.network
    this.wrapperAddress = BLOCKCHAIN_INFO.wrapper
    this.networkContract = new this.rpc.eth.Contract(constants.KYBER_NETWORK, this.networkAddress)
    this.wrapperContract = new this.rpc.eth.Contract(constants.KYBER_WRAPPER, this.wrapperAddress)
}
```

### 3、lang 目录下主要是所支持的各个语言包（.json 文件）

默认是英语。

抛出了：

module.exports = { supportLanguage, defaultLanguage, loadAll, defaultAndActive, otherLang }

语言包的格式如下：

```json
{
    "pack": "cn",
    "pack_icon": "cn.svg",
    "pack_label": "中文",
    "pack_active": true,
    "layout": {
        "info": "信息",
        "terms_of_service": "服务条款",
        "privacy_policies": "隐私政策"
    },

    "transaction_list": {
        "transaction_history": "最近交易"
    },

    "address": {
        "address": "地址",
        "import_address": "导入地址",
        "my_balance": "余额",
        "total": "估值",
        "hide_zero_balance": "隐藏小额资产"
    },
    "transaction": {
        "exchange": "交易",
        "exchange_from": "从",
        "exchange_to": "到",

        "transfer": "转移",
        "transfer_to_address": "转移到地址",
        "amount": "数量",
        "select_token": "选择代币",

        "advanced": "高级选项",
        "transaction_fee": "交易费",

        "address_balance": "地址余额",
        "balance": "余额",
        "password_needed_exchange": "每笔交易都需要密码",

        "password_needed_transfer": "每笔转移都需要密码",
        "next": "下一个",
        "exit": "退出",
        "back": "主页",
        "new_tx": "新的转移",
        "new_ex": "新的交易",
        "done": "完成!",
        "failed": "失败!",
        "broadcasted": "交易上链完成!",
        "broadcasting": "交易上链中!",
        "success_ex_msg": "成功地将 ${source} 交易为 ${dest} 了",
        "success_tx_msg": "成功地将 ${token} 转移至 ${address}",
        "copy_tx": "拷贝交易哈希",
        "analyze_error": "失败原因",
        "copied": "拷贝成功",
        "analyze": "显示原因",

        "broadcast": "交易上链",
        "transaction": "交易",
        "broadcasted_title": "将您的交易广播至区块链",
        "close_browser_or_make_new_exchange":
            "您现在可以关闭浏览器窗口或进行另一币交易",
        "close_browser_or_make_new_transfer":
            "您现在可以关闭浏览器窗口或进行另一币转移",
        "broadcasting_blockchain": "您的交易正在被上链至区块链",
        "cound_not_broadcast": "无法将您的交易上链至区块链",
        "current_address_balance": "当前地址余额",
        "transaction_error": "交易错误",
        "waiting_transaction": "您的交易正在等待被挖掘",

        "about_to_exchange": "您将开始交易",
        "about_to_transfer": "您将开始转移",
        "processing": "处理中",
        "gas_limit": "燃料限额",
        "gas_price": "燃料价格",
        "for": "换至",
        "to": "至",
        "best_rate": "最小价格",
        "token_amount": "代币／数量",

        "transfer_tooltip": "转移以太或代币至其它地址",
        "transaction_gasprice_50":
            "更高的燃料价格，更快的交易速度。最高燃料价格：50 Gwei",
        "transaction_gasprice": "更高的燃料价格，更快的交易速度",
        "best_rate_tooltip": "市场波动时，更低的价格可以带来更好的成功率",
        "terms_and_conditions":
            "<span>条款和 <br  class='show-for-small-only'>条件</span>",

        "error_tx_log": "空的日志",
        "error_tx_contract": "警告！合约执行过程中发生了错误",
        "no_pedding_tx": "没有待处理的交易",
        "rate_info":
            "价格也许会在结算过程中发生变化。<br> 您可以点击\"高级选项\"来显示您的最低价格。"
    },

    "modal": {
        "enter_password": "输入密码",
        "confirm": "确认",
        "import": "导入",
        "enter_password_placeholder": "输入钱包密码进行确认",
        "select_hd_path": "选择硬盘派生路径",
        "select_trezor_address": "选择TREZOR地址",
        "select_ledger_address": "选择LEDGER地址",
        "select_address": "选择您想要使用的地址",
        "previous_addresses": "以前的地址",
        "more_addresses": "更多地址",
        "custom_path": "您的自定义路径",
        "view_on_etherscan": "在Etherscan上查看",
        "press_confirm_if_really_want": "请按确认以继续",
        "waiting_for_confirmation": "正在等待您钱包的确认信息",
        "confirm_exchange_title": "交易确认",
        "confirm_transfer_title": "转移确认",

        "select_your_language": "选择你的语言",
        "select_source_token": "选择原始代币",
        "select_dest_token": "选择终点代币",
        "select_trasfer_from_token": "选择 \"TRANSFER FROM\" 代币",

        "approve_exchange":
            "您需要获取Kyber钱包的许可才能在当前地址与<strong>${ token }</strong>交互",
        "eth_token_exchange": "ETH代币交易",
        "approve": "批准"
    },

    "error": {
        "select_same_token": "无法和同种代币进行交易",
        "select_token_token": "这个代币交易对目前还不支持",
        "source_amount_too_high": "原始数量过高",
        "source_amount_too_high_cap":
            "原始数量超过了你的额度。你的额度是${ cap }ETH",
        "source_amount_too_small": "原始数量过低",
        "source_amount_rate_error": "当前无法交易",
        "source_amount_too_high_for_reserve":
            "原始数量过高 （交易对目前还不支持）",
        "source_amount_is_not_number": "原始数量不是一个数字",

        "dest_address": "这不是一个地址",
        "amount_transfer_too_hign": "数量过高",
        "amount_must_be_number": "数量必须是一个数字",

        "error_occurred": "发生错误",
        "cannot_connect_metamask": "无法获取Metamask账户",
        "cannot_connect_trezor": "无法连接至Trezor",
        "cannot_connect_ledger": "无法连接至Ledger",
        "invalid_private_key": "无效的密钥",
        "no_balance": "您的地址上没有我们支持的代币。请导入其它的地址。",
        "clear_data_timeout":
            "由于您的会话超时，我们清除了您的数据 ${time} 分钟",
        "minutes": " 分钟",
        "time_out": "超时",
        "network_error": "目前无法连接到区块链。请稍后再尝试。",
        "term_error": "您必须先同意服务条款！",

        "path_not_support_by_trezor": "Trezor不支持这个路径",
        "check_right_application_selected": "检查是否选择了正确的应用",
        "network_not_match":
            "Metamask需要连接到${expectedName}网络，而您现在连接的是${currentName}",
        "network_not_match_unknow": "Metamask需要连接到${expectedName}",
        "not_supported": "不支持",
        "metamask_not_install":
            "无法连接至metamask。请确认您已经安装了metamask。",

        "gas_price_not_number": "燃料价格不是数字",
        "rate_not_number": "交易价格不是数字",
        "gas_price_limit": "燃料价格必须小于 ${maxGas} Gwei",
        "passphrase_error": "秘钥派生失败",
        "gas_price_exceeded_limit": "燃料价格超过了最高限制。t",
        "issue_token_ether":
            "交易失败，由于发送eth的同时还试图用该eth与其它代币交易。",
        "issue_allowance": "交易失败，由于许可数量低于srcAmount",
        "issue_balance": "交易失败，由于代币余额低于scrAmount",
        "issue_ether_amount": "交易失败，由于用户没有发送准确的eth数量",
        "issue_user_cap": "交易失败，由于原始数量超过了用户限额。",
        "min_rate_too_high": "你设置的最交易低价格太高了！"
    },

    "import": {
        "from_metamask": "连接至<br>Metatmask",
        "from_keystore": "选择或拖动<br />您的密钥库",
        "from_trezor": "从<br />Trezor导入",
        "from_ledger": "从<br />Ledger导入",
        "from_private_key": "请输入您的<br />密钥",
        "from_private_key_input_title": "请输入您的密钥",
        "from_private_key_input_title_placehoder": "请输入您的密钥"
    },

    "info": {
        "title": "Kyber测试网络",
        "version": "版本",
        "chain": "链",
        "node_endpoint": "节点端",
        "reserve_address": "储蓄库合约地址",
        "network_address": "网络合约地址",
        "kyber_homepage": "Kyber主页",
        "get_free_kovan": "获取免费的",
        "warning":
            "请不要发送以太或代币到以上的任何地址.<br></br>他们都是测试网络的地址！",
        "here": "这里"
    },

    "footer": {
        "info": "信息",
        "language": "语音"
    },

    "history": {
        "second_ago": "秒之前",
        "minutes_ago": "分钟之前",
        "hours_ago": "小时之前",
        "days_ago": "天之前",
        "months_ago": "月之前",
        "years_ago": "年之前",
        "date": "日期",
        "rate": "汇率",
        "description": "描述",
        "amount": "数量"
    },

    "terms": {
        "title": "Kyber钱包 - 使用条款",
        "content":
            "Kyber测试网络钱包提供了一个让大家能够实验和了解我们的交易和支付的服务平台。 目前的版本可能不安全。 使用它可能会导致资金损失，并可能危及用户的隐私。 用户对使用Kyber测试网络钱包的任何结果承担全部责任。",
        "use_testnet": "请务必使用测试网络的钱包！！！",
        "use_real": "请千万不要使用真实的以太坊账户！！！",
        "accept": "Accept"
    },

    "landing_page": {
        "title": "以太坊代币的去中心化交易",
        "trustless": "无需信赖",
        "instant": "迅速",
        "liquid": "流动性",
        "compatible": "兼容",
        "get_started": "开始"
    },

    "product_feedback": "产品反馈",
    "help": "帮助"
}
```

### 4、server 目录，主要是用于在本机启动一些后台接口的服务的

猜测这些接口没有的话也是可以的，直接用线上的就好了，或者直接由 mock 数据的平台进行数据 mock。

执行`npm run server`实际执行的是 server 目录下的 server_http.js 文件（package.json 中有配置）。

```js
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
```

上述代码用于允许任何域名跨域访问。cors 是一个可以进行各种参数配置，解决跨域问题的模块。

https://www.npmjs.com/package/cors

在该目录下保存着一个日志文件，error.log。采用了 simple-node-logger 模块来打日志。https://www.npmjs.com/package/simple-node-logger

在 server_http.js 中，通过 sqlitePersist.js 中创建的 SqlitePersist 类提供的方法先是初始化了各个表，然后提供了一系列接口服务，/getRate、/getHistory、/getHistoryTwoColumn、/getHistoryOneColumn、/countHistory、/getLatestBlock、/getRateUSD、/getLanguagePack 等接口服务。这些接口服务都是放在https://cache.kyber.network/下的。是因为web3.js无法实现这些功能呢，还是为了速度更快？

这些接口背后都是在 sqlitePersist.js 中创建的 SqlitePersist 类通过直接操作 sqlite 数据库而实现的。接口的返回的数据格式如下：

/getRate

```json
[
    {
        "id": 1,
        "source": "ETH",
        "dest": "ETH",
        "rate": "0",
        "minRate": "0",
        "expBlock": "0",
        "balance": "0"
    },
    {
        "id": 2,
        "source": "ETH",
        "dest": "ETH",
        "rate": "0",
        "minRate": "0",
        "expBlock": "0",
        "balance": "0"
    }
]
```

/getUSD 各种代币兑美元的价格

```json
[
    {
        "symbol": "ETH",
        "price_usd": "1076.22"
    },
    {
        "symbol": "KNC",
        "price_usd": "3.98993"
    },
    {
        "symbol": "OMG",
        "price_usd": "17.4549"
    },
    {
        "symbol": "DGD",
        "price_usd": "189.409"
    },
    {
        "symbol": "CVC",
        "price_usd": "0.751849"
    },
    {
        "symbol": "FUN",
        "price_usd": "0.110938"
    },
    {
        "symbol": "MCO",
        "price_usd": "13.2256"
    },
    {
        "symbol": "GNT",
        "price_usd": "0.63423"
    },
    {
        "symbol": "ADX",
        "price_usd": "2.0149"
    },
    {
        "symbol": "PAY",
        "price_usd": "2.50536"
    },
    {
        "symbol": "BAT",
        "price_usd": "0.563943"
    },
    {
        "symbol": "EOS",
        "price_usd": "14.6735"
    },
    {
        "symbol": "LINK",
        "price_usd": "0.94457"
    }
]
```

/getHistoryTwoColumn

```json
{
    "eth": [
        {
            "id": 1035,
            "actualDestAmount": "72435007953030924402",
            "actualSrcAmount": "1000000000000000000",
            "dest": "0x7d7fd73fede850a0d3f044af79ba83490830ae4b",
            "source": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "sender": null,
            "blockNumber": 2501159,
            "txHash":
                "0x01ca789571c4bb6746a72cf0167093277f2e800af06b5d77ea5e41d5c1d9a2b3",
            "timestamp": 1516606600,
            "status": "mined"
        },
        {
            "id": 1034,
            "actualDestAmount": "122174031265158964378",
            "actualSrcAmount": "2000000000000000000",
            "dest": "0x98541419c0f9873acf6bf449cb7246f9df600d2c",
            "source": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "sender": null,
            "blockNumber": 2501146,
            "txHash":
                "0x91987292f81b1ea8870b6d0445eaa033c8ba81ea4097f24faca08f25668a4b53",
            "timestamp": 1516606435,
            "status": "mined"
        }
    ]
}
```

/getLatestBlock
2501287

/countHistory
1036

/getLanguagePack
目前未实现，大概是用来进行语言包方面处理的

除了上面这些接口、日志的功能外，这个目录还有一个 eth 目录，这个目录主要是用来与以太坊进行连接和交互用的。


这里面，baseProvider、httpProvider、wsProvider三个文件是用来封装出两个provider组件，一个是http服务的，一个是ws服务的。而baseProvider则是二者的共同基础，提供了一个BaseEthereumProvider类，类中提供了如下一些方法：

initContract 将三个合约对象、两个合约地址挂载到this上；

version 返回当前所用的web3.js的版本；

getLatestBlockFromEtherScan、getLatestBlockFromNode getLatestBlockFromEtherScan先从某个服务端API中去拿最新区块的区块number序号，拿不到的情况下再调用getLatestBlockFromNode去以太坊节点上拿。返回的是个数字。

疑问：

getRate、getAllRate、getAllRatesFromEtherscan、getAllRatesFromBlockchain、getAllRateFromNode、getAllRateUSD、getRateUSD、getLogExchange、getLogExchangeFromNode
等方法，暂时没弄清楚其细节。具体是在什么地方用到的还不是很清楚？


#### 获取 gasPrice

```js
new Promise((resolve, reject) => {
    web3.eth
        .getGasPrice()
        .then(result => {
            resolve(result);
        })
        .catch(err => {
            reject(err);
        });
});
```

#### 判断是否连接上节点

因为 web3.js 好像没有提供直接的 API，所以需要自行处理。我们可以通过获取最近一个块，看能不能获取到来实现节点连接成功与否的判断。

```js
new Promise((resolve, reject) => {
    web3.eth.getBlock('latest', false)
    .then(block => {
        resolve(block != null) {
            resolve(true)
        } else {
            resolve(false)
        }
    })
    .catch(err => {
        resolve(false)
    })
})
```

#### 使用 fetch 调用接口

fetch 是 JavaScript 的内置 API，可以直接使用，但记得要经过 babel 的转换。

```js
new Promise((resolve, reject) => {
    fetch(BLOCKCHAIN_INFO.history_endpoint + "/getLatestBlock", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data && typeof data == "number" && data > 0) {
                resolve(data);
            } else {
                throw "cannot get latest block from server";
            }
        })
        .catch(err => {
            web3.eth.getBlock("latest", false).then(block => {
                if (block != null) {
                    resolve(block.number);
                }
            });
        });
});
```

这里比较奇特的一点是，并没有直接使用`web3.eth.getBlock("latest", false).then`，而是先从服务端接口去取，可能是考虑缓存的原因，但是为什么要缓存呢？让速度更快吗？

刚刚又改成了从 api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${apikey}来获取,
比如 apikey = D8YAEQ3V4THAPDA9YSB1YGA1QY9KAMHY6M。

即从http://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=D8YAEQ3V4THAPDA9YSB1YGA1QY9KAMHY6M来获取。

返回的结果如下：

```json
{ 
    "jsonrpc": "2.0", 
    "id": 83, 
    "result": "0x4b9e30" 
}
```

#### 封装一个更通用的 fetch:

```js
const defaultHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}

export function fetchRequest(url, params, headers=defaultHeaders, method) {
    return new Promise((resolve, reject) => {
        let obj = {};

        if(method === 'POST'){
            obj.body = params;
        } else {
            if(params != null) {
                let paramsArr = [];

                Object.keys(params).map((item) => {
                    paramsArr.push(`${item}=${params[item]}`)
                })

                if(url.indexOf('?') > -1){
                    url += '&'
                } else {
                    url += '?'
                }

                url += ${paramsArr.join('&')}
            }
        }
        obj.method = method;
        obj.headers = headers;

        fetch(url, obj)
        .then(response => {
            return response.json()
        })
        .then(data => {
            resolve(data)
        })
        .catch(err => {
            reject(err)
        });
    });
}

export function get(url, params, headers=defaultHeaders){
    fetchRequest(url, params, headers, 'Get');
}

export function post(url, data, headers=defaultHeaders){
    fetchRequest(url, data, headers, 'Post');
}
```

### 拿一个以太坊账户的余额

直接通过

```js
new Promise((resolve, reject) => {
    web3.eth.getBalance(address).then(balance => {
        
    })
})
```

### 在以太坊虚拟机上执行交易，不会出现在区块链上

```
web3.eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
})
```

### 获取代币的余额：

需要通过智能合约去获取，

先拿到智能合约对象

web3.eth.Contract(constants.ERC20)

然后通过合约拿到

### 解码 ABI encoded parameters

```
web3.eth.abi.decodeParameters(typesArray, hexString);
```

```
web3.eth.abi.decodeParameters(['string', 'uint256'], '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000');
> Result { '0': 'Hello!%!', '1': '234' }
```

### 获取最近一个区块的区块序号

```js
function getLatestBlockFromNode(){
    new Promise(resolve, reject){
        web3.eth.getBlock("latest", false)
        .then(result => {
            resolve(result.number)
        })
        .catch(err => {
            reject(err)
        })
    }
}
```

### 调用智能合约中的方法

#### 创建智能合约对象

`new web3.eth.Contract(jsonInterface[, address][, options])`

第一个参数是智能合约中的abi对象，第二个参数是地址（可选，也可以后续通过.options.address指定），第三个参数，可选项，是携带的一些options参数

```
new web3.eth.Contract(constants.KYBER_NETWORK, this.networkAddress)
```

#### 在虚拟机中执行智能合约的方法

`myContract.methods.myMethod([param1[, param2[, ...]]]).call(options[, callback])`

```
getRate(source, dest, quantity) {
    return new Promise((resolve, rejected) => {
      this.networkContract.methods.getExpectedRate(source, dest, quantity).call().then((result) => {
        if (result != null) {
          resolve(result)
        }
      }).catch(e =>{
        rejected(e)
      })
    })
  }
```

这个就调用了KYBER_NETWORK的getExpectedRate方法，传入了三个参数source, dest, quantity，这三个参数正好是KYBER_NETWORK的智能合约ABI对象数组中name: "getExpectedRate"所对应的inputs(如下)：

```js
{
    constant: true,
    inputs: [
        { name: "source", type: "address" },
        { name: "dest", type: "address" },
        { name: "srcQuantity", type: "uint256" }
    ],
    name: "getExpectedRate",
    outputs: [
        { name: "expectedPrice", type: "uint256" },
        { name: "slippagePrice", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
}
```

### 怎么获得合约的某方法的编码过的ABI字节码，可以用在发送交易, 调用方法, 或作为参数传给另一个智能合约方法

`myContract.methods.myMethod([param1[, param2[, ...]]]).encodeABI()`

```js
var dataAbi = this.wrapperContract.methods.getExpectedRates(this.networkAddress, sources, dests, quantity).encodeABI()
var options = {
    host: serverPoint,
    path: `/api?module=proxy&action=eth_call&to=${this.wrapperAddress}&data=${dataAbi}&tag=latest&apikey=${api}`
}
```

### 修正一个导致在本机运行时，不能导入账户的错误

web3-eth库的index.js文件中，有一个错误，config一直没能添加进来，所以手动地加入：

```
var helpers = require('web3-core-helpers');

//下面的这几行是自己添加的
helpers.config = {
    defaultBlock: 'latest',
    defaultAccount: null
}
console.log('自己修改helpers，添加了config：', helpers);
```

同时需要修改webpack.config.js中的配置，以便于能够将上面这个修改打包进去。

```
exclude: /node_modules\/(?!(web3-eth)\/).*/,
```

### src/services/ethereum.js


### 国际化

react-localize-redux

https://ryandrewjohnson.github.io/react-localize-redux/getting-started/

### 交易

sagas的transferActions.js中：

```js
export function* processTransfer(action) {
  const { formId, ethereum, address,
    token, amount,
    destAddress, nonce, gas,
    gasPrice, keystring, type, password, account, data, keyService, balanceData } = action.payload
  var callService = token == constants.ETHER_ADDRESS ? "sendEtherFromAccount" : "sendTokenFromAccount"
  switch (type) {
    case "keystore":
      yield call(transferKeystore, action, callService)
      break
    case "privateKey":
    case "trezor":
    case "ledger":
      yield call(transferColdWallet, action, callService)
      break
    case "metamask":
      yield call(transferMetamask, action, callService)
      break
  }
}
```

services/keys/baseKey.js中：

```js
//发送以太币
export const sendEtherFromAccount = (
  id, ethereum, account, sourceToken, sourceAmount,
  destAddress, nonce, gas, gasPrice, keystring, accountType,
  password) => {

  const txParams = {
    from:account,
    nonce: nonce,
    gasPrice: gasPrice,
    gasLimit: gas,
    to: destAddress,
    value: sourceAmount,
    // EIP 155 chainId - mainnet: 1, ropsten: 3
    chainId: BLOCKCHAIN_INFO.networkId
  }

  return { txParams, keystring, password }
}

//发送其他代币
export const sendTokenFromAccount = (
  id, ethereum, account, sourceToken, sourceAmount,
  destAddress, nonce, gas, gasPrice, keystring, accountType,
  password) => {

  var txData = ethereum.call("sendTokenData")(
    sourceToken, sourceAmount, destAddress)
  const txParams = {
    from:account,
    nonce: nonce,
    gasPrice: gasPrice,
    gasLimit: gas,
    to: sourceToken,
    value: '0x0', //这个地方是不是错误的？
    data: txData,
    // EIP 155 chainId - mainnet: 1, ropsten: 3
    chainId: BLOCKCHAIN_INFO.networkId
  }
  return { txParams, keystring, password }
}
```

sendEtherFromAccount发送以太币：

直接从将传入的参数进行了组装后返回，返回的是`{ txParams, keystring, password }`的形式

sendTokenFromAccount发送其他太币：
调用的是

var txData = ethereum.call("sendTokenData")(
    sourceToken, sourceAmount, destAddress)

方法来获得txData。

然后同样也是组成了{ txParams, keystring, password }进行返回。不同的是，txParams中所包含的字段数量是不一样的。

ethereum: 是一个EthereumService类的实例。

EthereumService类提供了一个call方法：

```js
call(fn) {
    return this.currentProvider[fn].bind(this.currentProvider)
}
```

执行的是this.currentProvider上的方法，并且指定执行时this为this.currentProvider。

this.currentProvider是HttpEthereumProvider类 或者 WebsocketEthereumProvider类的实例，而HttpEthereumProvider类 或者 WebsocketEthereumProvider类都扩展自BaseEthereumProvider类，所以call方法最后应该可以访问 BaseEthereumProvider类 以及 HttpEthereumProvider类 或者 WebsocketEthereumProvider类中的方法。

sendTokenData就是BaseEthereumProvider类中的方法。

```js
sendTokenData(sourceToken, sourceAmount, destAddress) {
    var tokenContract = this.erc20Contract
    tokenContract.options.address = sourceToken
    return tokenContract.methods.transfer(destAddress, sourceAmount).encodeABI()
}
```

调用的实际上是以发送者的地址为地址的ERC20合约实例的`.transfer(destAddress, sourceAmount).encodeABI()`方法，传入参数是发往的地址和数量。

其中， `this.erc20Contract = new this.rpc.eth.Contract(constants.ERC20)`

function* transferKeystore(action, callService) {
  const { formId, ethereum, address,
    token, amount,
    destAddress, nonce, gas,
    gasPrice, keystring, type, password, account, data, keyService, balanceData } = action.payload
  try {
    var rawTx = yield call(keyService.callSignTransaction, callService, formId, ethereum, address,
      token, amount,
      destAddress, nonce, gas,
      gasPrice, keystring, type, password)
  } catch (e) {
    yield put(actions.throwPassphraseError(e.message))
    return
  }
  try {
    yield put(actions.prePareBroadcast(balanceData))
    const hash = yield call(ethereum.call("sendRawTransaction"), rawTx, ethereum)
    yield call(runAfterBroadcastTx, ethereum, rawTx, hash, account, data)
  } catch (e) {
    yield call(doTransactionFail, ethereum, account, e.message)
  }

}






