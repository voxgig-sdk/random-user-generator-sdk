# ProjectName SDK exists test

import pytest
from randomusergenerator_sdk import RandomUserGeneratorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RandomUserGeneratorSDK.test(None, None)
        assert testsdk is not None
