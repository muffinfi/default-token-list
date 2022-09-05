const fs = require('fs')
const path = require('path')

const files = ['mainnet.json', 'goerli.json', 'rinkeby.json']

const tokens = files
  .map((f) => path.join(__dirname, 'networks', f))
  .flatMap((f) => JSON.parse(fs.readFileSync(f, 'utf-8')))

const content = {
  name: 'Muffin Token List',
  logoURI: 'https://raw.githubusercontent.com/muffinfi/default-token-list/master/logo.svg',
  keywords: ['muffin'],
  timestamp: '2022-09-05T00:00:00.000+00:00',
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  tokens,
}

fs.writeFileSync(
  path.join(__dirname, '../build/tokenlist.json'),
  JSON.stringify(content, null, 2),
  'utf-8',
)
