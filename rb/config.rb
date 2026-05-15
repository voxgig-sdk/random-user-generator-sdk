# RandomUserGenerator SDK configuration

module RandomUserGeneratorConfig
  def self.make_config
    {
      "main" => {
        "name" => "RandomUserGenerator",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://randomuser.me/api",
        "auth" => {
          "prefix" => "Bearer",
        },
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
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "dob",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "email",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "gender",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "id",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "location",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "login",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "nat",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 8,
            },
            {
              "name" => "phone",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 9,
            },
            {
              "name" => "picture",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 10,
            },
            {
              "name" => "registered",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 11,
            },
          ],
          "name" => "get_random_user",
          "op" => {
            "list" => {
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
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "gender",
                        "orig" => "gender",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "gender,name,email",
                        "kind" => "query",
                        "name" => "inc",
                        "orig" => "inc",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "US,GB,FR",
                        "kind" => "query",
                        "name" => "nat",
                        "orig" => "nat",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "result",
                        "orig" => "result",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "seed",
                        "orig" => "seed",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/",
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
                  "active" => true,
                  "parts" => [],
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
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
