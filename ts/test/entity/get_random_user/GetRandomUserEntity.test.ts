

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RandomUserGeneratorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetRandomUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RANDOM_USER_GENERATOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('RANDOM_USER_GENERATOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RandomUserGeneratorSDK.test()
    const ent = testsdk.GetRandomUser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RANDOM_USER_GENERATOR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_random_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"cell","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"dob","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"format":"email","name":"email","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"gender","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"location","req":false,"type":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"index$":5},{"active":true,"name":"login","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"name","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"nat","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"phone","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"picture","req":false,"type":"`$OBJECT`","index$":10},{"active":true,"name":"registered","req":false,"type":"`$OBJECT`","index$":11}],"id":{"field":"id","name":"id"},"name":"get_random_user","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"login,registered","kind":"query","name":"exc","orig":"exc","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"gender","orig":"gender","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"gender,name,email","kind":"query","name":"inc","orig":"inc","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"US,GB,FR","kind":"query","name":"nat","orig":"nat","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"example":1,"kind":"query","name":"result","orig":"result","reqd":false,"type":"`$INTEGER`","index$":6},{"active":true,"kind":"query","name":"seed","orig":"seed","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /","json":"{\"operationId\":\"getRandomUsers\",\"parameters\":[{\"description\":\"Number of users to generate\",\"in\":\"query\",\"name\":\"results\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Format of the response data\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\",\"csv\",\"yaml\"],\"type\":\"string\"}},{\"description\":\"Gender of the generated users\",\"in\":\"query\",\"name\":\"gender\",\"required\":false,\"schema\":{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}},{\"description\":\"Nationality of the generated users (comma-separated list)\",\"example\":\"US,GB,FR\",\"in\":\"query\",\"name\":\"nat\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Seed value for generating consistent results\",\"in\":\"query\",\"name\":\"seed\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Fields to include in the results (comma-separated)\",\"example\":\"gender,name,email\",\"in\":\"query\",\"name\":\"inc\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Fields to exclude from the results (comma-separated)\",\"example\":\"login,registered\",\"in\":\"query\",\"name\":\"exc\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"info\":{\"page\":1,\"results\":1,\"seed\":\"56d27f4a53bd5441\",\"version\":\"1.4\"},\"results\":[{\"cell\":\"(489) 330-2385\",\"dob\":{\"age\":30,\"date\":\"1992-03-08T15:13:16.688Z\"},\"email\":\"jennie.nichols@example.com\",\"gender\":\"female\",\"id\":{\"name\":\"SSN\",\"value\":\"405-88-3636\"},\"location\":{\"city\":\"Billings\",\"coordinates\":{\"latitude\":\"-69.8246\",\"longitude\":\"134.8719\"},\"country\":\"United States\",\"postcode\":\"63104\",\"state\":\"Michigan\",\"street\":{\"name\":\"Valwood Pkwy\",\"number\":8929},\"timezone\":{\"description\":\"Adelaide, Darwin\",\"offset\":\"+9:30\"}},\"login\":{\"md5\":\"ab54ac4c0be9480ae8fa5e9e2a5196a3\",\"password\":\"addison\",\"salt\":\"sld1yGtd\",\"sha1\":\"edcf2ce613cbdea349133c52dc2f3b83168dc51b\",\"sha256\":\"48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d\",\"username\":\"yellowpeacock117\",\"uuid\":\"7a0eed16-9430-4d68-901f-c0d4c1c3bf00\"},\"name\":{\"first\":\"Jennie\",\"last\":\"Nichols\",\"title\":\"Miss\"},\"nat\":\"US\",\"phone\":\"(272) 790-0888\",\"picture\":{\"large\":\"https://randomuser.me/api/portraits/men/75.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/men/75.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/men/75.jpg\"},\"registered\":{\"age\":14,\"date\":\"2007-07-09T05:51:59.390Z\"}}]},\"schema\":{\"properties\":{\"info\":{\"properties\":{\"page\":{\"type\":\"integer\"},\"results\":{\"type\":\"integer\"},\"seed\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"cell\":{\"type\":\"string\"},\"dob\":{\"properties\":{\"age\":{\"type\":\"integer\"},\"date\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"email\":{\"format\":\"email\",\"type\":\"string\"},\"gender\":{\"enum\":[\"male\",\"female\"],\"type\":\"string\"},\"id\":{\"properties\":{\"name\":{\"type\":\"string\"},\"value\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"location\":{\"properties\":{\"city\":{\"type\":\"string\"},\"coordinates\":{\"properties\":{\"latitude\":{\"type\":\"string\"},\"longitude\":{\"type\":\"string\"}},\"type\":\"object\"},\"country\":{\"type\":\"string\"},\"postcode\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"state\":{\"type\":\"string\"},\"street\":{\"properties\":{\"name\":{\"type\":\"string\"},\"number\":{\"type\":\"integer\"}},\"type\":\"object\"},\"timezone\":{\"properties\":{\"description\":{\"type\":\"string\"},\"offset\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"login\":{\"properties\":{\"md5\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"},\"salt\":{\"type\":\"string\"},\"sha1\":{\"type\":\"string\"},\"sha256\":{\"type\":\"string\"},\"username\":{\"type\":\"string\"},\"uuid\":{\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"properties\":{\"first\":{\"type\":\"string\"},\"last\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"nat\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"picture\":{\"properties\":{\"large\":{\"format\":\"uri\",\"type\":\"string\"},\"medium\":{\"format\":\"uri\",\"type\":\"string\"},\"thumbnail\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"registered\":{\"properties\":{\"age\":{\"type\":\"integer\"},\"date\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"application/xml\":{\"schema\":{\"type\":\"string\"}},\"application/yaml\":{\"schema\":{\"type\":\"string\"}},\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with random user data\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["exc","format","gender","inc","nat","page","result","seed"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_random_user","name__orig":"get_random_user","Name":"GetRandomUser","name_":"get_random_user","name-":"get-random-user","NAME":"GET_RANDOM_USER","index$":0}, {"active":true,"entity":"get_random_user","key$":"BasicGetRandomUserFlow","kind":"basic","name":"BasicGetRandomUserFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"get_random_user_ref01"}}],"index$":0}]}, 'GetRandomUser')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_random_user_ref01_data = Object.values(setup.data.existing.get_random_user)[0] as any

    // LIST
    const get_random_user_ref01_ent = client.GetRandomUser()
    const get_random_user_ref01_match: any = {}

    const get_random_user_ref01_list = (await get_random_user_ref01_ent.list(get_random_user_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_random_user/GetRandomUserTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RandomUserGeneratorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_random_user01','get_random_user02','get_random_user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RANDOM_USER_GENERATOR_TEST_GET_RANDOM_USER_ENTID': idmap,
    'RANDOM_USER_GENERATOR_TEST_LIVE': 'FALSE',
    'RANDOM_USER_GENERATOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RANDOM_USER_GENERATOR_TEST_GET_RANDOM_USER_ENTID']

  const live = 'TRUE' === env.RANDOM_USER_GENERATOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RANDOM_USER_GENERATOR_TEST_GET_RANDOM_USER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RandomUserGeneratorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RANDOM_USER_GENERATOR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
