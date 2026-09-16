# RandomUserGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RandomUserGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      RandomUserGeneratorBaseFeature.new
    when "ratelimit"
      RandomUserGeneratorRatelimitFeature.new
    when "retry"
      RandomUserGeneratorRetryFeature.new
    when "test"
      RandomUserGeneratorTestFeature.new
    when "timeout"
      RandomUserGeneratorTimeoutFeature.new
    else
      RandomUserGeneratorBaseFeature.new
    end
  end
end
