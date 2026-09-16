# RandomUserGenerator SDK configuration

module RandomUserGeneratorConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "RandomUserGenerator",
        "slug" => "random-user-generator",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://randomuser.me/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_random_user" => {},
        },
      },
      "entity" => {
        "get_random_user" => {
          "fields" => [
            {
              "name" => "cell",
              "type" => "`$STRING`",
            },
            {
              "name" => "dob",
              "type" => "`$OBJECT`",
            },
            {
              "format" => "email",
              "name" => "email",
              "type" => "`$STRING`",
            },
            {
              "name" => "gender",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "location",
              "type" => "`$OBJECT`",
              "union" => {
                "branches" => 2,
                "count" => 1,
                "depth" => 2,
              },
            },
            {
              "name" => "login",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "nat",
              "type" => "`$STRING`",
            },
            {
              "name" => "phone",
              "type" => "`$STRING`",
            },
            {
              "name" => "picture",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "registered",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "get_random_user",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "login,registered",
                        "kind" => "query",
                        "name" => "exc",
                        "orig" => "exc",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "gender",
                        "orig" => "gender",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "gender,name,email",
                        "kind" => "query",
                        "name" => "inc",
                        "orig" => "inc",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "US,GB,FR",
                        "kind" => "query",
                        "name" => "nat",
                        "orig" => "nat",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "seed",
                        "orig" => "seed",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/",
                  "segments" => [],
                  "select" => {
                    "exist" => [
                      "exc",
                      "format",
                      "gender",
                      "inc",
                      "nat",
                      "page",
                      "result",
                      "seed",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RandomUserGeneratorFeatures.make_feature(name)
  end
end
