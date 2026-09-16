# RandomUserGenerator SDK feature factory

from randomusergenerator_sdk.feature.base_feature import RandomUserGeneratorBaseFeature
from randomusergenerator_sdk.feature.ratelimit_feature import RandomUserGeneratorRatelimitFeature
from randomusergenerator_sdk.feature.retry_feature import RandomUserGeneratorRetryFeature
from randomusergenerator_sdk.feature.test_feature import RandomUserGeneratorTestFeature
from randomusergenerator_sdk.feature.timeout_feature import RandomUserGeneratorTimeoutFeature


_FEATURES = {
    "base": lambda: RandomUserGeneratorBaseFeature(),
    "ratelimit": lambda: RandomUserGeneratorRatelimitFeature(),
    "retry": lambda: RandomUserGeneratorRetryFeature(),
    "test": lambda: RandomUserGeneratorTestFeature(),
    "timeout": lambda: RandomUserGeneratorTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
