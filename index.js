import exonum from './src/'

const config = {
  driver: new exonum.drivers.Smartbit({
    network: 'testnet' // use testnet for testnet, mainnet by default
  }),
  provider: {
    nodes: ['http://167.99.130.47:8062'] // list of IP addresses of Exonum nodes
  }
}

const anchoring = new exonum.Anchoring(config)

anchoring.on('loaded', e => console.log('loaded', e.anchorHeight))
anchoring.on('synchronized', e => console.log('synchronized', e.anchorHeight))
anchoring.on('error', e => console.log('error', e))

anchoring.blockStatus(4301).then(e => console.log('block', e))
