<?php
declare(strict_types=1);

// Typed models for the RandomUserGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetRandomUser entity data model. */
class GetRandomUser
{
    public ?string $cell = null;
    public ?array $dob = null;
    public ?string $email = null;
    public ?string $gender = null;
    public ?array $id = null;
    public ?array $location = null;
    public ?array $login = null;
    public ?array $name = null;
    public ?string $nat = null;
    public ?string $phone = null;
    public ?array $picture = null;
    public ?array $registered = null;
}

/** Match filter for GetRandomUser#list (any subset of GetRandomUser fields). */
class GetRandomUserListMatch
{
    public ?string $cell = null;
    public ?array $dob = null;
    public ?string $email = null;
    public ?string $gender = null;
    public ?array $id = null;
    public ?array $location = null;
    public ?array $login = null;
    public ?array $name = null;
    public ?string $nat = null;
    public ?string $phone = null;
    public ?array $picture = null;
    public ?array $registered = null;
}

