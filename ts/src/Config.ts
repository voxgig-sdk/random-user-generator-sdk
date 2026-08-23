
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RandomUserGenerator',
        slug: "random-user-generator",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://randomuser.me/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_random_user: {
      },

    }
  }


  entity = {
    "get_random_user": {
      "fields": [
        {
          "name": "cell",
          "type": "`$STRING`"
        },
        {
          "name": "dob",
          "type": "`$OBJECT`"
        },
        {
          "name": "email",
          "type": "`$STRING`"
        },
        {
          "name": "gender",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$OBJECT`"
        },
        {
          "name": "location",
          "type": "`$OBJECT`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 2
          }
        },
        {
          "name": "login",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "type": "`$OBJECT`"
        },
        {
          "name": "nat",
          "type": "`$STRING`"
        },
        {
          "name": "phone",
          "type": "`$STRING`"
        },
        {
          "name": "picture",
          "type": "`$OBJECT`"
        },
        {
          "name": "registered",
          "type": "`$OBJECT`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "gender",
                    "orig": "gender",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "gender,name,email",
                    "kind": "query",
                    "name": "inc",
                    "orig": "inc",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "US,GB,FR",
                    "kind": "query",
                    "name": "nat",
                    "orig": "nat",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "result",
                    "orig": "result",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "seed",
                    "orig": "seed",
                    "type": "`$STRING`"
                  }
                ]
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
                  "seed"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

