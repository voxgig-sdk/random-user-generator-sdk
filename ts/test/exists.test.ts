
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RandomUserGeneratorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RandomUserGeneratorSDK.test()
    equal(testsdk instanceof RandomUserGeneratorSDK, true,
      'RandomUserGeneratorSDK.test() must return a client synchronously')
  })

})
