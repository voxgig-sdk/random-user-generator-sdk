# RandomUserGenerator SDK utility: make_context

from projectname_sdk.core.context import RandomUserGeneratorContext


def make_context_util(ctxmap, basectx):
    return RandomUserGeneratorContext(ctxmap, basectx)
