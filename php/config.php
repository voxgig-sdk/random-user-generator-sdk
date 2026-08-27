<?php
declare(strict_types=1);

// RandomUserGenerator SDK configuration

class RandomUserGeneratorConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RandomUserGenerator",
                "slug" => "random-user-generator",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://randomuser.me/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_random_user" => [],
                ],
            ],
            "entity" => [
        'get_random_user' => [
          'fields' => [
            [
              'name' => 'cell',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dob',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'email',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'gender',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'location',
              'type' => '`$OBJECT`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 2,
              ],
            ],
            [
              'name' => 'login',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'nat',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'phone',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'picture',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'registered',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'get_random_user',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'login,registered',
                        'kind' => 'query',
                        'name' => 'exc',
                        'orig' => 'exc',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'gender',
                        'orig' => 'gender',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'gender,name,email',
                        'kind' => 'query',
                        'name' => 'inc',
                        'orig' => 'inc',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'US,GB,FR',
                        'kind' => 'query',
                        'name' => 'nat',
                        'orig' => 'nat',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'result',
                        'orig' => 'result',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'seed',
                        'orig' => 'seed',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [
                    'exist' => [
                      'exc',
                      'format',
                      'gender',
                      'inc',
                      'nat',
                      'page',
                      'result',
                      'seed',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RandomUserGeneratorFeatures::make_feature($name);
    }
}
