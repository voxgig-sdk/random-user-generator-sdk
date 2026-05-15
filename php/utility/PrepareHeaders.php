<?php
declare(strict_types=1);

// RandomUserGenerator SDK utility: prepare_headers

class RandomUserGeneratorPrepareHeaders
{
    public static function call(RandomUserGeneratorContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
