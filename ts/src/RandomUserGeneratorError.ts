
import { Context } from './Context'


class RandomUserGeneratorError extends Error {

  isRandomUserGeneratorError = true

  sdk = 'RandomUserGenerator'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RandomUserGeneratorError
}

