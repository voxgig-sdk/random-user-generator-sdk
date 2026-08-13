# RandomUserGenerator SDK utility: make_context

from randomusergenerator_sdk.core.context import RandomUserGeneratorContext


def make_context_util(ctxmap, basectx):
    return RandomUserGeneratorContext(ctxmap, basectx)
