# RandomUserGenerator SDK utility: make_context
require_relative '../core/context'
module RandomUserGeneratorUtilities
  MakeContext = ->(ctxmap, basectx) {
    RandomUserGeneratorContext.new(ctxmap, basectx)
  }
end
