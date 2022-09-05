const { schema } = require('@uniswap/token-lists')
const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const tokenlist = require('../build/tokenlist.json')

function validate() {
  const ajv = new Ajv({ allErrors: true, verbose: true })
  addFormats(ajv)
  const validator = ajv.compile(schema)

  const valid = validator(tokenlist)
  if (valid) {
    console.log('valid\n')
  } else {
    console.log(validator.errors)
  }
}

function printAllToksn() {
  tokenlist.tokens.forEach((token) => {
    console.log(token.chainId, '\t', token.address, '\t', token.symbol, '\t')
  })
}

validate()
printAllToksn()
