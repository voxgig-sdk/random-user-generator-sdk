# RandomUserGenerator SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "type": "`$STRING`",
          },
          {
            "name": "dob",
            "type": "`$OBJECT`",
          },
          {
            "name": "email",
            "type": "`$STRING`",
          },
          {
            "name": "gender",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$OBJECT`",
          },
          {
            "name": "location",
            "type": "`$OBJECT`",
            "union": {
              "branches": 2,
              "count": 1,
              "depth": 2,
            },
          },
          {
            "name": "login",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "type": "`$OBJECT`",
          },
          {
            "name": "nat",
            "type": "`$STRING`",
          },
          {
            "name": "phone",
            "type": "`$STRING`",
          },
          {
            "name": "picture",
            "type": "`$OBJECT`",
          },
          {
            "name": "registered",
            "type": "`$OBJECT`",
          },
        ],
        "name": "get_random_user",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "login,registered",
                      "kind": "query",
                      "name": "exc",
                      "orig": "exc",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "gender",
                      "orig": "gender",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "gender,name,email",
                      "kind": "query",
                      "name": "inc",
                      "orig": "inc",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "US,GB,FR",
                      "kind": "query",
                      "name": "nat",
                      "orig": "nat",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "result",
                      "orig": "result",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "seed",
                      "orig": "seed",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "parts": [],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
