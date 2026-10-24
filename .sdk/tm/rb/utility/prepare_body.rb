# RandomUserGenerator SDK utility: prepare_body
require_relative 'media'
module RandomUserGeneratorUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RandomUserGeneratorUtilities.raw_body(ctx.reqdata) if RandomUserGeneratorUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
