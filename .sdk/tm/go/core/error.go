package core

type RandomUserGeneratorError struct {
	IsRandomUserGeneratorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRandomUserGeneratorError(code string, msg string, ctx *Context) *RandomUserGeneratorError {
	return &RandomUserGeneratorError{
		IsRandomUserGeneratorError: true,
		Sdk:              "RandomUserGenerator",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RandomUserGeneratorError) Error() string {
	return e.Msg
}
