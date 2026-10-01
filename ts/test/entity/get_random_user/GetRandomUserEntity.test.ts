

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cell":{"a":true,"h":"Cell","n":"cell","r":false,"t":"`$STRING`","key$":"cell","index$":0},"dob":{"a":true,"h":"Dob","n":"dob","r":false,"t":"`$OBJECT`","key$":"dob","index$":1},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":false,"t":"`$STRING`","key$":"email","index$":2},"gender":{"a":true,"h":"Gender","n":"gender","r":false,"t":"`$STRING`","key$":"gender","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$OBJECT`","key$":"id","index$":4},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"location","index$":5},"login":{"a":true,"h":"Login","n":"login","r":false,"t":"`$OBJECT`","key$":"login","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$OBJECT`","key$":"name","index$":7},"nat":{"a":true,"h":"Nat","n":"nat","r":false,"t":"`$STRING`","key$":"nat","index$":8},"phone":{"a":true,"h":"Phone","n":"phone","r":false,"t":"`$STRING`","key$":"phone","index$":9},"picture":{"a":true,"h":"Picture","n":"picture","r":false,"t":"`$OBJECT`","key$":"picture","index$":10},"registered":{"a":true,"h":"Registered","n":"registered","r":false,"t":"`$OBJECT`","key$":"registered","index$":11}},"id":{"field":"id","name":"id"},"name":"get_random_user","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"login,registered","k":"query","n":"exc","or":"exc","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"gender","or":"gender","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"gender,name,email","k":"query","n":"inc","or":"inc","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"US,GB,FR","k":"query","n":"nat","or":"nat","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":1,"k":"query","n":"result","or":"results","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"seed","or":"seed","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/","q":{"exist":["exc","format","gender","inc","nat","page","result","seed"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_random_user","name__orig":"get_random_user","Name":"GetRandomUser","name_":"get_random_user","name-":"get-random-user","NAME":"GET_RANDOM_USER","index$":0}, {"active":true,"entity":"get_random_user","key$":"BasicGetRandomUserFlow","kind":"basic","name":"BasicGetRandomUserFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"get_random_user_ref01"}}],"index$":0}]}, 'GetRandomUser', {"GET /":{"protocol":"http","parameters":[{"name":"results","in":"query","description":"Number of users to generate","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":0},{"name":"format","in":"query","description":"Format of the response data","required":false,"schema":{"type":"string","enum":["json","xml","csv","yaml"],"default":"json"},"index$":1},{"name":"gender","in":"query","description":"Gender of the generated users","required":false,"schema":{"type":"string","enum":["male","female"]},"index$":2},{"name":"nat","in":"query","description":"Nationality of the generated users (comma-separated list)","required":false,"schema":{"type":"string"},"example":"US,GB,FR","index$":3},{"name":"seed","in":"query","description":"Seed value for generating consistent results","required":false,"schema":{"type":"string"},"index$":4},{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":5},{"name":"inc","in":"query","description":"Fields to include in the results (comma-separated)","required":false,"schema":{"type":"string"},"example":"gender,name,email","index$":6},{"name":"exc","in":"query","description":"Fields to exclude from the results (comma-separated)","required":false,"schema":{"type":"string"},"example":"login,registered","index$":7}]}})
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
  
