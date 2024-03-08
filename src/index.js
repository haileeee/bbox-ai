'use strict'

import util from 'util'
import events from 'events'

var BBox = function () {
  events.EventEmitter.call(this)
  console.log(`bbox--{{hello}}`)
}

/**
* inherits core emitter class within this class
* @method inherits
*/
util.inherits(BBox, events.EventEmitter)

/**
* NLP conversation
* @method NLPflow
*
*/
BBox.prototype.nlpflow = function (inFlow) {
  // pass to validtor FIRST TODO
  let outFlow = {}
  outFlow.type = 'caleai'
  outFlow.action = 'npl-reply'
  if (inFlow.text === 'hello') {
    outFlow.data = 'hello how can CALE help?'
  } else if (inFlow.text === 'chart last week daily') {
    outFlow.data = 'working on preparing those charts, please wait'
  } else if (inFlow.text === 'happy') {
    outFlow.data = 'hello how can CALE help?'
  } else if (inFlow.text === 'sad') {
    outFlow.data = 'hello how can CALE help?'
  } else if (inFlow.text === 'family') {
    outFlow.data = 'All those on the Internet are family'
  } else {
    outFlow.data = 'sorry CALE cannot help.  CALE is still learning.'
  }
  return outFlow
}

/**
* Predict time series
* @method predictFlow
*
*/
BBox.prototype.predictflow = function () {
  let outFlow = {}
  outFlow.type = 'CALEAI'
  outFlow.action = 'prediction'
  if (inFLow.text === 'hello') {
    outFlow.data = 'This is not operational yet, still testing' // call prediction flow
  }
  return outFlow
}

export default BBox
