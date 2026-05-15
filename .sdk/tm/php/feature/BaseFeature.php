<?php
declare(strict_types=1);

// RandomUserGenerator SDK base feature

class RandomUserGeneratorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RandomUserGeneratorContext $ctx, array $options): void {}
    public function PostConstruct(RandomUserGeneratorContext $ctx): void {}
    public function PostConstructEntity(RandomUserGeneratorContext $ctx): void {}
    public function SetData(RandomUserGeneratorContext $ctx): void {}
    public function GetData(RandomUserGeneratorContext $ctx): void {}
    public function GetMatch(RandomUserGeneratorContext $ctx): void {}
    public function SetMatch(RandomUserGeneratorContext $ctx): void {}
    public function PrePoint(RandomUserGeneratorContext $ctx): void {}
    public function PreSpec(RandomUserGeneratorContext $ctx): void {}
    public function PreRequest(RandomUserGeneratorContext $ctx): void {}
    public function PreResponse(RandomUserGeneratorContext $ctx): void {}
    public function PreResult(RandomUserGeneratorContext $ctx): void {}
    public function PreDone(RandomUserGeneratorContext $ctx): void {}
    public function PreUnexpected(RandomUserGeneratorContext $ctx): void {}
}
