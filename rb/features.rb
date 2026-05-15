# RandomUserGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RandomUserGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      RandomUserGeneratorBaseFeature.new
    when "test"
      RandomUserGeneratorTestFeature.new
    else
      RandomUserGeneratorBaseFeature.new
    end
  end
end
