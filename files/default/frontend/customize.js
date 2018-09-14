import { deepPurple700 } from 'material-ui/styles/colors'

const description = `
You must set the following address for your instance: \`172.16.N.3\`  
**N** stands for your team number. **Do not forget** to regenerate MAC address!

Flags are stored into so-called capsules. A capsule looks like this:  
<code style="word-break: break-all;">VolgaCTF{eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJmbGFnIjoiNDIyOWQ2OTFiMDdiMTMzNDFkYTUzZjE3YWI5ZjI0MTY9IiwiZXhwaXJlcyI6IjIwMTctMDUtMTNUMTA6NTE6MDQrMDM6MDAifQ.GaLtzvxoLtA5XZL5cF-M24NFBkcjBWi_1EpAnE8fexrtN3mjeZe3Faw6UgEIb4F5yCpERZVUdQ8fTjkmVlK-ng}</code>

Data between \`VolgaCTF{\` and \`}\` is a [JSON Web Token](https://jwt.io) signed using ES256 algorithm. You will need the [public key](/api/capsule/v1/public_key) to decode a capsule and retrieve a flag from it. Flag format is \`^[\\da-f]{32}=$\`.

You should submit flags (**not capsules!**) to \`2018.final.volgactf.ru\`. Each flag lives for 6 minutes. New round is triggered every 2 minutes. Every 35 seconds the system randomly chooses one living flag from each service and tries to extract them.

1. New API (as of June 2018)
    + [Themis Finals API](https://github.com/themis-project/themis-finals-api) - public APIs description
    + [themis.finals](https://github.com/themis-project/themis-finals-py) - CLI & public API library for Python 2 & 3

    getinfo rate limit 10 r/s, submit rate limit 5 r/s

2. [**deprecated**] Old API (to be removed in 2019)
    + [Themis Finals Attack Protocol](https://github.com/themis-project/themis-finals-attack-protocol) - attack protocol
    + [themis.finals.attack.helper](https://github.com/themis-project/themis-finals-attack-helper-py) - attack helper library for Python 2 & 3

    submit rate limit - 200 attacks in a 60-second period
`

export default {
  competitionTitle: 'VolgaCTF 2018 Final',
  primary1Color: deepPurple700,
  accent1Color: 'f2c50a',
  headerColor: '#fff',
  indexTitle: 'Hello there!',
  indexDescription: description,
  competitionLogo: {
    src: 'src/images/volgactf-logo.svg',
    style: {
      height: '55px',
      marginTop: '5px',
      marginRight: '20px'
    },
    dist: '/assets/images/volgactf-logo.svg'
  },
  competitionNotifyLogo: {
    src: 'src/images/volgactf-notify-logo.png',
    dist: '/assets/images/volgactf-notify-logo.png'
  }
}
