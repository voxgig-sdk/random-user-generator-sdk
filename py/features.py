# RandomUserGenerator SDK feature factory

from feature.base_feature import RandomUserGeneratorBaseFeature
from feature.test_feature import RandomUserGeneratorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RandomUserGeneratorBaseFeature(),
        "test": lambda: RandomUserGeneratorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
