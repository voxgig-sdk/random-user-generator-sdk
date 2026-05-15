# RandomUserGenerator SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RandomUserGeneratorUtility.registrar = ->(u) {
  u.clean = RandomUserGeneratorUtilities::Clean
  u.done = RandomUserGeneratorUtilities::Done
  u.make_error = RandomUserGeneratorUtilities::MakeError
  u.feature_add = RandomUserGeneratorUtilities::FeatureAdd
  u.feature_hook = RandomUserGeneratorUtilities::FeatureHook
  u.feature_init = RandomUserGeneratorUtilities::FeatureInit
  u.fetcher = RandomUserGeneratorUtilities::Fetcher
  u.make_fetch_def = RandomUserGeneratorUtilities::MakeFetchDef
  u.make_context = RandomUserGeneratorUtilities::MakeContext
  u.make_options = RandomUserGeneratorUtilities::MakeOptions
  u.make_request = RandomUserGeneratorUtilities::MakeRequest
  u.make_response = RandomUserGeneratorUtilities::MakeResponse
  u.make_result = RandomUserGeneratorUtilities::MakeResult
  u.make_point = RandomUserGeneratorUtilities::MakePoint
  u.make_spec = RandomUserGeneratorUtilities::MakeSpec
  u.make_url = RandomUserGeneratorUtilities::MakeUrl
  u.param = RandomUserGeneratorUtilities::Param
  u.prepare_auth = RandomUserGeneratorUtilities::PrepareAuth
  u.prepare_body = RandomUserGeneratorUtilities::PrepareBody
  u.prepare_headers = RandomUserGeneratorUtilities::PrepareHeaders
  u.prepare_method = RandomUserGeneratorUtilities::PrepareMethod
  u.prepare_params = RandomUserGeneratorUtilities::PrepareParams
  u.prepare_path = RandomUserGeneratorUtilities::PreparePath
  u.prepare_query = RandomUserGeneratorUtilities::PrepareQuery
  u.result_basic = RandomUserGeneratorUtilities::ResultBasic
  u.result_body = RandomUserGeneratorUtilities::ResultBody
  u.result_headers = RandomUserGeneratorUtilities::ResultHeaders
  u.transform_request = RandomUserGeneratorUtilities::TransformRequest
  u.transform_response = RandomUserGeneratorUtilities::TransformResponse
}
