<?php
declare(strict_types=1);

// RandomUserGenerator SDK utility: feature_add

class RandomUserGeneratorFeatureAdd
{
    public static function call(RandomUserGeneratorContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
