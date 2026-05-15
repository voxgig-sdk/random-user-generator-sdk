package voxgigrandomusergeneratorsdk

import (
	"github.com/voxgig-sdk/random-user-generator-sdk/core"
	"github.com/voxgig-sdk/random-user-generator-sdk/entity"
	"github.com/voxgig-sdk/random-user-generator-sdk/feature"
	_ "github.com/voxgig-sdk/random-user-generator-sdk/utility"
)

// Type aliases preserve external API.
type RandomUserGeneratorSDK = core.RandomUserGeneratorSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RandomUserGeneratorEntity = core.RandomUserGeneratorEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RandomUserGeneratorError = core.RandomUserGeneratorError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetRandomUserEntityFunc = func(client *core.RandomUserGeneratorSDK, entopts map[string]any) core.RandomUserGeneratorEntity {
		return entity.NewGetRandomUserEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRandomUserGeneratorSDK = core.NewRandomUserGeneratorSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
