# RandomUserGenerator SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "RandomUserGenerator",
            "slug": "random-user-generator",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://randomuser.me/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_random_user": {},
            },
        },
        "entity": {
      "get_random_user": {
        "fields": [
          {
            "name": "cell",
            "title": "Cell",
            "type": "`$STRING`",
          },
          {
            "name": "dob",
            "title": "Dob",
            "type": "`$OBJECT`",
          },
          {
            "name": "email",
            "title": "Email",
            "type": "`$STRING`",
            "format": "email",
          },
          {
            "name": "gender",
            "title": "Gender",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$OBJECT`",
          },
          {
            "name": "location",
            "title": "Location",
            "type": "`$OBJECT`",
          },
          {
            "name": "login",
            "title": "Login",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$OBJECT`",
          },
          {
            "name": "nat",
            "title": "Nat",
            "type": "`$STRING`",
          },
          {
            "name": "phone",
            "title": "Phone",
            "type": "`$STRING`",
          },
          {
            "name": "picture",
            "title": "Picture",
            "type": "`$OBJECT`",
          },
          {
            "name": "registered",
            "title": "Registered",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "get_random_user",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "segments": [],
                "parts": [],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "exc",
                      "orig": "exc",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "login,registered",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "gender",
                      "orig": "gender",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "inc",
                      "orig": "inc",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gender,name,email",
                    },
                    {
                      "name": "nat",
                      "orig": "nat",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "US,GB,FR",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "result",
                      "orig": "result",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "seed",
                      "orig": "seed",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
