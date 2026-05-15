<?php
declare(strict_types=1);

// RandomUserGenerator SDK utility: result_body

class RandomUserGeneratorResultBody
{
    public static function call(RandomUserGeneratorContext $ctx): ?RandomUserGeneratorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
