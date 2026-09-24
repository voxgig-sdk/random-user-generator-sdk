"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'RandomUserGenerator',
        slug: "random-user-generator",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://randomuser.me/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            get_random_user: {},
        }
    };
    entity = {
        "get_random_user": {
            "fields": [
                {
                    "name": "cell",
                    "title": "Cell",
                    "type": "`$STRING`"
                },
                {
                    "name": "dob",
                    "title": "Dob",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "email",
                    "title": "Email",
                    "type": "`$STRING`",
                    "format": "email"
                },
                {
                    "name": "gender",
                    "title": "Gender",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "login",
                    "title": "Login",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "nat",
                    "title": "Nat",
                    "type": "`$STRING`"
                },
                {
                    "name": "phone",
                    "title": "Phone",
                    "type": "`$STRING`"
                },
                {
                    "name": "picture",
                    "title": "Picture",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "registered",
                    "title": "Registered",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "exc",
                                        "orig": "exc",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "login,registered"
                                    },
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    },
                                    {
                                        "name": "gender",
                                        "orig": "gender",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "inc",
                                        "orig": "inc",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "gender,name,email"
                                    },
                                    {
                                        "name": "nat",
                                        "orig": "nat",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "US,GB,FR"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "result",
                                        "orig": "result",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "seed",
                                        "orig": "seed",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
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
                                    "seed"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map