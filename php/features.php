<?php
declare(strict_types=1);

// RandomUserGenerator SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RandomUserGeneratorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RandomUserGeneratorBaseFeature();
            case "test":
                return new RandomUserGeneratorTestFeature();
            default:
                return new RandomUserGeneratorBaseFeature();
        }
    }
}
