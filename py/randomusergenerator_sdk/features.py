# RandomUserGenerator SDK feature factory

from randomusergenerator_sdk.feature.base_feature import RandomUserGeneratorBaseFeature
from randomusergenerator_sdk.feature.test_feature import RandomUserGeneratorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RandomUserGeneratorBaseFeature(),
        "test": lambda: RandomUserGeneratorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
