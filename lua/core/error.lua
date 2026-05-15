-- RandomUserGenerator SDK error

local RandomUserGeneratorError = {}
RandomUserGeneratorError.__index = RandomUserGeneratorError


function RandomUserGeneratorError.new(code, msg, ctx)
  local self = setmetatable({}, RandomUserGeneratorError)
  self.is_sdk_error = true
  self.sdk = "RandomUserGenerator"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RandomUserGeneratorError:error()
  return self.msg
end


function RandomUserGeneratorError:__tostring()
  return self.msg
end


return RandomUserGeneratorError
