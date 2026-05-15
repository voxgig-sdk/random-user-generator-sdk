<?php
declare(strict_types=1);

// RandomUserGenerator SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RandomUserGeneratorUtility::setRegistrar(function (RandomUserGeneratorUtility $u): void {
    $u->clean = [RandomUserGeneratorClean::class, 'call'];
    $u->done = [RandomUserGeneratorDone::class, 'call'];
    $u->make_error = [RandomUserGeneratorMakeError::class, 'call'];
    $u->feature_add = [RandomUserGeneratorFeatureAdd::class, 'call'];
    $u->feature_hook = [RandomUserGeneratorFeatureHook::class, 'call'];
    $u->feature_init = [RandomUserGeneratorFeatureInit::class, 'call'];
    $u->fetcher = [RandomUserGeneratorFetcher::class, 'call'];
    $u->make_fetch_def = [RandomUserGeneratorMakeFetchDef::class, 'call'];
    $u->make_context = [RandomUserGeneratorMakeContext::class, 'call'];
    $u->make_options = [RandomUserGeneratorMakeOptions::class, 'call'];
    $u->make_request = [RandomUserGeneratorMakeRequest::class, 'call'];
    $u->make_response = [RandomUserGeneratorMakeResponse::class, 'call'];
    $u->make_result = [RandomUserGeneratorMakeResult::class, 'call'];
    $u->make_point = [RandomUserGeneratorMakePoint::class, 'call'];
    $u->make_spec = [RandomUserGeneratorMakeSpec::class, 'call'];
    $u->make_url = [RandomUserGeneratorMakeUrl::class, 'call'];
    $u->param = [RandomUserGeneratorParam::class, 'call'];
    $u->prepare_auth = [RandomUserGeneratorPrepareAuth::class, 'call'];
    $u->prepare_body = [RandomUserGeneratorPrepareBody::class, 'call'];
    $u->prepare_headers = [RandomUserGeneratorPrepareHeaders::class, 'call'];
    $u->prepare_method = [RandomUserGeneratorPrepareMethod::class, 'call'];
    $u->prepare_params = [RandomUserGeneratorPrepareParams::class, 'call'];
    $u->prepare_path = [RandomUserGeneratorPreparePath::class, 'call'];
    $u->prepare_query = [RandomUserGeneratorPrepareQuery::class, 'call'];
    $u->result_basic = [RandomUserGeneratorResultBasic::class, 'call'];
    $u->result_body = [RandomUserGeneratorResultBody::class, 'call'];
    $u->result_headers = [RandomUserGeneratorResultHeaders::class, 'call'];
    $u->transform_request = [RandomUserGeneratorTransformRequest::class, 'call'];
    $u->transform_response = [RandomUserGeneratorTransformResponse::class, 'call'];
});
