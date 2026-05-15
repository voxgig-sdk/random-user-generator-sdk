<?php
declare(strict_types=1);

// RandomUserGenerator SDK exists test

require_once __DIR__ . '/../randomusergenerator_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RandomUserGeneratorSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
