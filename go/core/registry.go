package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetRandomUserEntityFunc func(client *RandomUserGeneratorSDK, entopts map[string]any) RandomUserGeneratorEntity

