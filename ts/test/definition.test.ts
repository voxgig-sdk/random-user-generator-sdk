import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "get_random_user",
    "accessor": "GetRandomUser",
    "op": "list",
    "method": "GET",
    "path": "/",
    "args": [],
    "select": {
      "exc": "login,registered",
      "format": "json",
      "gender": "v1",
      "inc": "gender,name,email",
      "nat": "US,GB,FR",
      "page": 1,
      "result": 1,
      "seed": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json",
      "application/xml",
      "text/csv",
      "application/yaml"
    ],
    "query": [
      "results",
      "format",
      "gender",
      "nat",
      "seed",
      "page",
      "inc",
      "exc"
    ],
    "queryArgs": [
      {
        "name": "exc",
        "wire": "exc"
      },
      {
        "name": "format",
        "wire": "format"
      },
      {
        "name": "gender",
        "wire": "gender"
      },
      {
        "name": "inc",
        "wire": "inc"
      },
      {
        "name": "nat",
        "wire": "nat"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "result",
        "wire": "results"
      },
      {
        "name": "seed",
        "wire": "seed"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "gender": "female",
          "name": {
            "title": "Miss",
            "first": "Jennie",
            "last": "Nichols"
          },
          "location": {
            "street": {
              "number": 8929,
              "name": "Valwood Pkwy"
            },
            "city": "Billings",
            "state": "Michigan",
            "country": "United States",
            "postcode": "63104",
            "coordinates": {
              "latitude": "-69.8246",
              "longitude": "134.8719"
            },
            "timezone": {
              "offset": "+9:30",
              "description": "Adelaide, Darwin"
            }
          },
          "email": "jennie.nichols@example.com",
          "login": {
            "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
            "username": "yellowpeacock117",
            "password": "addison",
            "salt": "sld1yGtd",
            "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
            "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
            "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
          },
          "dob": {
            "date": "1992-03-08T15:13:16.688Z",
            "age": 30
          },
          "registered": {
            "date": "2007-07-09T05:51:59.390Z",
            "age": 14
          },
          "phone": "(272) 790-0888",
          "cell": "(489) 330-2385",
          "id": {
            "name": "SSN",
            "value": "405-88-3636"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/75.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
          },
          "nat": "US"
        }
      ],
      "info": {
        "seed": "56d27f4a53bd5441",
        "results": 1,
        "page": 1,
        "version": "1.4"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
