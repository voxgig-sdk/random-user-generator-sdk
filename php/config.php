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
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'title' => 'Cell',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dob',
              'title' => 'Dob',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'email',
              'title' => 'Email',
              'type' => '`$STRING`',
              'format' => 'email',
            ],
            [
              'name' => 'gender',
              'title' => 'Gender',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'location',
              'title' => 'Location',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'login',
              'title' => 'Login',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'nat',
              'title' => 'Nat',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'phone',
              'title' => 'Phone',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'picture',
              'title' => 'Picture',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'registered',
              'title' => 'Registered',
              'type' => '`$OBJECT`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'get_random_user',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'segments' => [],
                  'parts' => [],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'exc',
                        'orig' => 'exc',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'login,registered',
                      ],
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'gender',
                        'orig' => 'gender',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'inc',
                        'orig' => 'inc',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'gender,name,email',
                      ],
                      [
                        'name' => 'nat',
                        'orig' => 'nat',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'US,GB,FR',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'result',
                        'orig' => 'result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'seed',
                        'orig' => 'seed',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
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
