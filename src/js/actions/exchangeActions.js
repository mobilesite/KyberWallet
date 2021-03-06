
//import {RATE_EPSILON} from "../services/constants.js"
import constants from "../services/constants"
import * as converter from "../utils/converter"

export function selectTokenAsync(symbol, address, type, ethereum) {
  return {
    type: "EXCHANGE.SELECT_TOKEN_ASYNC",
    payload: { symbol, address, type, ethereum }
  }
}
export function selectToken(symbol, address, type) {
  return {
    type: "EXCHANGE.SELECT_TOKEN",
    payload: { symbol, address, type }
  }
}
export function checkSelectToken() {
  return {
    type: "EXCHANGE.CHECK_SELECT_TOKEN"
  }
}

export function caculateAmount() {
  return {
    type: "EXCHANGE.CACULATE_AMOUNT"
  }
}

export function inputChange(focus, value) {
  return {
    type: "EXCHANGE.INPUT_CHANGE",
    payload: { focus, value }
  }
}

export function focusInput(focus) {
  return {
    type: "EXCHANGE.FOCUS_INPUT",
    payload: focus
  }
}

export function thowErrorSourceAmount(message) {
  return {
    type: "EXCHANGE.THROW_SOURCE_AMOUNT_ERROR",
    payload: message
  }
}

export function thowErrorGasPrice(message) {
  return {
    type: "EXCHANGE.THROW_GAS_PRICE_ERROR",
    payload: message
  }
}

export function thowErrorRate(message) {
  return {
    type: "EXCHANGE.THROW_RATE_ERROR",
    payload: message
  }
}

export function goToStep(step) {
  return {
    type: "EXCHANGE.GO_TO_STEP",
    payload: step
  }
}

export function specifyGas(value) {
  return {
    type: "EXCHANGE.SPECIFY_GAS",
    payload: value
  }
}

export function specifyGasPrice(value) {
  return {
    type: "EXCHANGE.SPECIFY_GAS_PRICE",
    payload: value
  }
}

export function toggleAdvance() {
  return {
    type: "EXCHANGE.TOGGLE_ADVANCE",
  }
}

export function setRandomExchangeSelectedToken(random) {
  return {
    type: "EXCHANGE.SET_RANDOM_SELECTED_TOKEN",
    payload: random
  }
}

export function updateRateExchange(ethereum, source, dest,
  sourceAmount, isManual = false, rateInit = "0") {
  return {
    type: "EXCHANGE.UPDATE_RATE_PENDING",
    payload: { ethereum, source, dest, sourceAmount, isManual, rateInit }
  }
}

export function updatePrevSource(value) {
  return {
    type: "EXCHANGE.SET_PREV_SOURCE",
    payload: { value }
  }
}

export function updateRateExchangeComplete(rateInit, expectedPrice, slippagePrice) {
  // var rateBig = converter.stringToBigNumber(rate.expectedPrice)
  //  var offeredRate = rateBig.times(1 - constants.RATE_EPSILON).toFixed(0)

  //var rateBig = converter.stringToBigNumber(rate[0])
  //  var offeredRate = rate.expectedPrice
  //var expirationBlock = rate[1]
  //var reserveBalance = rate[2]
  return {
    type: "EXCHANGE.UPDATE_RATE",
    payload: { rateInit, expectedPrice, slippagePrice: converter.toT(slippagePrice, 18), rateInitSlippage:  converter.toT(rateInit, 18)}
  }

}


export function openPassphrase() {
  return {
    type: "EXCHANGE.OPEN_PASSPHRASE",
  }
}

export function hidePassphrase() {
  return {
    type: "EXCHANGE.HIDE_PASSPHRASE",
  }
}

export function hideConfirm() {
  return {
    type: "EXCHANGE.HIDE_CONFIRM",
  }
}

export function showConfirm() {
  return {
    type: "EXCHANGE.SHOW_CONFIRM",
  }
}

export function hideApprove() {
  return {
    type: "EXCHANGE.HIDE_APPROVE",
  }
}

export function showApprove() {
  return {
    type: "EXCHANGE.SHOW_APPROVE",
  }
}

export function changePassword() {
  return {
    type: "EXCHANGE.CHANGE_PASSPHRASE",
  }
}


export function prePareBroadcast(balanceData) {
  return {
    type: "EXCHANGE.PREPARE_BROADCAST",
    payload: { balanceData }
  }
}

export function finishExchange() {
  return {
    type: "EXCHANGE.FINISH_EXCHANGE"
  }
}

export function throwPassphraseError(message) {
  return {
    type: "EXCHANGE.THROW_ERROR_PASSPHRASE",
    payload: message
  }
}

export function processExchange(formId, ethereum, address, sourceToken,
  sourceAmount, destToken, destAddress,
  maxDestAmount, minConversionRate,
  throwOnFailure, nonce, gas,
  gasPrice, keystring, type, password, account, data, keyService, balanceData) {
  return {
    type: "EXCHANGE.PROCESS_EXCHANGE",
    payload: {
      formId, ethereum, address, sourceToken,
      sourceAmount, destToken, destAddress,
      maxDestAmount, minConversionRate,
      throwOnFailure, nonce, gas,
      gasPrice, keystring, type, password, account, data, keyService, balanceData
    }
  }
}

export function checkTokenBalanceOfColdWallet(formId, ethereum, address, sourceToken,
  sourceAmount, destToken, destAddress,
  maxDestAmount, minConversionRate,
  throwOnFailure, nonce, gas,
  gasPrice, keystring, type, password, account, data, keyService) {
  return {
    type: "EXCHANGE.CHECK_TOKEN_BALANCE_COLD_WALLET",
    payload: {
      formId, ethereum, address, sourceToken,
      sourceAmount, destToken, destAddress,
      maxDestAmount, minConversionRate,
      throwOnFailure, nonce, gas,
      gasPrice, keystring, type, password, account, data, keyService
    }
  }
}

export function doApprove(ethereum, sourceToken, sourceAmount, nonce, gas, gasPrice,
  keystring, password, accountType, account, keyService) {
  return {
    type: "EXCHANGE.PROCESS_APPROVE",
    payload: {
      ethereum, sourceToken, sourceAmount, nonce, gas, gasPrice,
      keystring, password, accountType, account, keyService
    }
  }
}
export function doTransaction(id, ethereum, tx, account, data) {
  return {
    type: "EXCHANGE.TX_BROADCAST_PENDING",
    payload: { ethereum, tx, account, data },
    meta: id,
  }
}

export function doTransactionComplete(txHash) {
  return {
    type: "EXCHANGE.TX_BROADCAST_FULFILLED",
    payload: txHash,
  }
}

export function doTransactionFail(error) {
  return {
    type: "EXCHANGE.TX_BROADCAST_REJECTED",
    payload: error
  }
}

export function doApprovalTransaction(id, ethereum, tx, callback) {
  return {
    type: "EXCHANGE.APPROVAL_TX_BROADCAST_PENDING",
    payload: { ethereum, tx, callback },
    meta: id,
  }
}

export function doApprovalTransactionComplete(txHash, id) {
  return {
    type: "EXCHANGE.APPROVAL_TX_BROADCAST_FULFILLED",
    payload: txHash,
    meta: id,
  }
}

export function doApprovalTransactionFail(error) {
  return {
    type: "EXCHANGE.APPROVAL_TX_BROADCAST_REJECTED",
    payload: error,
  }
}

export function makeNewExchange() {
  return {
    type: "EXCHANGE.MAKE_NEW_EXCHANGE"
  }
}

export function updateCurrentBalance(sourceBalance, destBalance) {
  return {
    type: "EXCHANGE.UPDATE_CURRENT_BALANCE",
    payload: { sourceBalance, destBalance }
  }
}

export function setTermAndServices(value) {
  return {
    type: "EXCHANGE.SET_TERM_AND_SERVICES",
    payload: { value }
  }
}

export function setMinRate(value) {
  return {
    type: "EXCHANGE.SET_MIN_RATE",
    payload: { value }
  }
}

export function resetMinRate() {
  return {
    type: "EXCHANGE.RESET_MIN_RATE",
  }
}


export function estimateGas() {
  return {
    type: "EXCHANGE.ESTIMATE_GAS_USED",
  }
}

export function setEstimateGas(gas) {
  return {
    type: "EXCHANGE.SET_GAS_USED",
    payload: { gas }
  }
}

export function swapToken() {
  return {
    type: "EXCHANGE.SWAP_TOKEN",
  }
}

export function setCapExchange(maxCap) {
  return {
    type: "EXCHANGE.SET_CAP_EXCHANGE",
    payload: { maxCap }
  }
}

export function setMaxGasPrice(ethereum) {
  return {
    type: "EXCHANGE.SET_MAX_GAS_PRICE",
    payload: ethereum
  }
}

export function setMaxGasPriceComplete(maxGasPrice) {
  var maxGasPriceGwei = converter.weiToGwei(maxGasPrice)
  return {
    type: "EXCHANGE.SET_MAX_GAS_PRICE_COMPLETE",
    payload: maxGasPriceGwei
  }
}

export function analyzeError(ethereum, txHash) {
  return {
    type: "EXCHANGE.ANALYZE_ERROR",
    payload: { ethereum, txHash}
  }
}

export function setAnalyzeError(networkIssues, reserveIssues){
  return {
    type: "EXCHANGE.SET_ANALYZE_ERROR",
    payload: { networkIssues, reserveIssues }
  }
}


export function fetchGas(){
  return {
    type: "EXCHANGE.FETCH_GAS"
  }
}
export function fetchGasSuccess(){
  return {
    type: "EXCHANGE.FETCH_GAS_SUCCESS"
  }
}

export function checkKyberEnable(){
  return {
    type: "EXCHANGE.CHECK_KYBER_ENABLE"
  }
}

export function setKyberEnable(enable){
  return {
    type: "EXCHANGE.SET_KYBER_ENABLE",
    payload: enable
  }
}