<?php
declare(strict_types=1);

// RandomUserGenerator SDK utility: prepare_body

class RandomUserGeneratorPrepareBody
{
    public static function call(RandomUserGeneratorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
