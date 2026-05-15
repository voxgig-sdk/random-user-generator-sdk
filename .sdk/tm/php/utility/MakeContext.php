<?php
declare(strict_types=1);

// RandomUserGenerator SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RandomUserGeneratorMakeContext
{
    public static function call(array $ctxmap, ?RandomUserGeneratorContext $basectx): RandomUserGeneratorContext
    {
        return new RandomUserGeneratorContext($ctxmap, $basectx);
    }
}
