<?php
declare(strict_types=1);

// RandomUserGenerator SDK utility: result_headers

class RandomUserGeneratorResultHeaders
{
    public static function call(RandomUserGeneratorContext $ctx): ?RandomUserGeneratorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
