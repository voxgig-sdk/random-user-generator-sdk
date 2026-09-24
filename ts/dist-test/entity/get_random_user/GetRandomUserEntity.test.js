"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetRandomUserEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RANDOM_USER_GENERATOR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RANDOM_USER_GENERATOR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RandomUserGeneratorSDK.test();
        const ent = testsdk.GetRandomUser();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RANDOM_USER_GENERATOR_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_random_user.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "cell": { "a": true, "h": "Cell", "n": "cell", "r": false, "t": "`$STRING`", "key$": "cell", "index$": 0 }, "dob": { "a": true, "h": "Dob", "n": "dob", "r": false, "t": "`$OBJECT`", "key$": "dob", "index$": 1 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": false, "t": "`$STRING`", "key$": "email", "index$": 2 }, "gender": { "a": true, "h": "Gender", "n": "gender", "r": false, "t": "`$STRING`", "key$": "gender", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$OBJECT`", "key$": "id", "index$": 4 }, "location": { "a": true, "h": "Location", "n": "location", "r": false, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "location", "index$": 5 }, "login": { "a": true, "h": "Login", "n": "login", "r": false, "t": "`$OBJECT`", "key$": "login", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$OBJECT`", "key$": "name", "index$": 7 }, "nat": { "a": true, "h": "Nat", "n": "nat", "r": false, "t": "`$STRING`", "key$": "nat", "index$": 8 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "t": "`$STRING`", "key$": "phone", "index$": 9 }, "picture": { "a": true, "h": "Picture", "n": "picture", "r": false, "t": "`$OBJECT`", "key$": "picture", "index$": 10 }, "registered": { "a": true, "h": "Registered", "n": "registered", "r": false, "t": "`$OBJECT`", "key$": "registered", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "get_random_user", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "login,registered", "k": "query", "n": "exc", "or": "exc", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "gender", "or": "gender", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "gender,name,email", "k": "query", "n": "inc", "or": "inc", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "US,GB,FR", "k": "query", "n": "nat", "or": "nat", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": 1, "k": "query", "n": "result", "or": "result", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "k": "query", "n": "seed", "or": "seed", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/", "q": { "exist": ["exc", "format", "gender", "inc", "nat", "page", "result", "seed"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "get_random_user", "name__orig": "get_random_user", "Name": "GetRandomUser", "name_": "get_random_user", "name-": "get-random-user", "NAME": "GET_RANDOM_USER", "index$": 0 }, { "active": true, "entity": "get_random_user", "key$": "BasicGetRandomUserFlow", "kind": "basic", "name": "BasicGetRandomUserFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "get_random_user_ref01" } }], "index$": 0 }] }, 'GetRandomUser', { "GET /": { "protocol": "http", "operationId": "getRandomUsers", "responses": { "200": { "description": "Successful response with random user data", "content": { "application/json": { "schema": { "type": "object", "properties": { "results": { "items": { "properties": { "cell": { "type": "string", "key$": "cell" }, "dob": { "properties": { "age": { "type": "integer" }, "date": { "format": "date-time", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/DateInfo", "key$": "dob" }, "email": { "format": "email", "type": "string", "key$": "email" }, "gender": { "enum": ["male", "female"], "type": "string", "key$": "gender" }, "id": { "properties": { "name": { "type": "string" }, "value": { "nullable": true, "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/ID", "key$": "id" }, "location": { "properties": { "city": { "type": "string" }, "coordinates": { "properties": { "latitude": { "type": "string" }, "longitude": { "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Coordinates" }, "country": { "type": "string" }, "postcode": { "oneOf": [{ "type": "string" }, { "type": "integer" }] }, "state": { "type": "string" }, "street": { "properties": { "name": { "type": "string" }, "number": { "type": "integer" } }, "type": "object", "x-ref": "#/components/schemas/Street" }, "timezone": { "properties": { "description": { "type": "string" }, "offset": { "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Timezone" } }, "type": "object", "x-ref": "#/components/schemas/Location", "key$": "location" }, "login": { "properties": { "md5": { "type": "string" }, "password": { "type": "string" }, "salt": { "type": "string" }, "sha1": { "type": "string" }, "sha256": { "type": "string" }, "username": { "type": "string" }, "uuid": { "format": "uuid", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Login", "key$": "login" }, "name": { "properties": { "first": { "type": "string" }, "last": { "type": "string" }, "title": { "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Name", "key$": "name" }, "nat": { "type": "string", "key$": "nat" }, "phone": { "type": "string", "key$": "phone" }, "picture": { "properties": { "large": { "format": "uri", "type": "string" }, "medium": { "format": "uri", "type": "string" }, "thumbnail": { "format": "uri", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Picture", "key$": "picture" }, "registered": { "properties": { "age": { "type": "integer" }, "date": { "format": "date-time", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/DateInfo", "key$": "registered" } }, "type": "object", "x-ref": "#/components/schemas/User", "index$": 0 }, "key$": "results", "type": "array" }, "info": { "key$": "info", "properties": { "page": { "type": "integer" }, "results": { "type": "integer" }, "seed": { "type": "string" }, "version": { "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Info" } }, "x-ref": "#/components/schemas/RandomUserResponse" }, "example": { "results": [{ "gender": "female", "name": { "title": "Miss", "first": "Jennie", "last": "Nichols" }, "location": { "street": { "number": 8929, "name": "Valwood Pkwy" }, "city": "Billings", "state": "Michigan", "country": "United States", "postcode": "63104", "coordinates": { "latitude": "-69.8246", "longitude": "134.8719" }, "timezone": { "offset": "+9:30", "description": "Adelaide, Darwin" } }, "email": "jennie.nichols@example.com", "login": { "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00", "username": "yellowpeacock117", "password": "addison", "salt": "sld1yGtd", "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3", "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b", "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d" }, "dob": { "date": "1992-03-08T15:13:16.688Z", "age": 30 }, "registered": { "date": "2007-07-09T05:51:59.390Z", "age": 14 }, "phone": "(272) 790-0888", "cell": "(489) 330-2385", "id": { "name": "SSN", "value": "405-88-3636" }, "picture": { "large": "https://randomuser.me/api/portraits/men/75.jpg", "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg" }, "nat": "US" }], "info": { "seed": "56d27f4a53bd5441", "results": 1, "page": 1, "version": "1.4" } } }, "application/xml": { "schema": { "type": "string" } }, "text/csv": { "schema": { "type": "string" } }, "application/yaml": { "schema": { "type": "string" } } } } }, "parameters": [{ "name": "results", "in": "query", "description": "Number of users to generate", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 0 }, { "name": "format", "in": "query", "description": "Format of the response data", "required": false, "schema": { "type": "string", "enum": ["json", "xml", "csv", "yaml"], "default": "json" }, "index$": 1 }, { "name": "gender", "in": "query", "description": "Gender of the generated users", "required": false, "schema": { "type": "string", "enum": ["male", "female"] }, "index$": 2 }, { "name": "nat", "in": "query", "description": "Nationality of the generated users (comma-separated list)", "required": false, "schema": { "type": "string" }, "example": "US,GB,FR", "index$": 3 }, { "name": "seed", "in": "query", "description": "Seed value for generating consistent results", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 5 }, { "name": "inc", "in": "query", "description": "Fields to include in the results (comma-separated)", "required": false, "schema": { "type": "string" }, "example": "gender,name,email", "index$": 6 }, { "name": "exc", "in": "query", "description": "Fields to exclude from the results (comma-separated)", "required": false, "schema": { "type": "string" }, "example": "login,registered", "index$": 7 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_random_user_ref01_data = Object.values(setup.data.existing.get_random_user)[0];
        // LIST
        const get_random_user_ref01_ent = client.GetRandomUser();
        const get_random_user_ref01_match = {};
        const get_random_user_ref01_list = (await get_random_user_ref01_ent.list(get_random_user_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_random_user/GetRandomUserTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RandomUserGeneratorSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_random_user01', 'get_random_user02', 'get_random_user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RANDOM_USER_GENERATOR_TEST_GET_RANDOM_USER_ENTID': idmap,
        'RANDOM_USER_GENERATOR_TEST_LIVE': 'FALSE',
        'RANDOM_USER_GENERATOR_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['RANDOM_USER_GENERATOR_TEST_GET_RANDOM_USER_ENTID'];
    const live = 'TRUE' === env.RANDOM_USER_GENERATOR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RANDOM_USER_GENERATOR_TEST_GET_RANDOM_USER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RandomUserGeneratorSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.RANDOM_USER_GENERATOR_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GetRandomUserEntity.test.js.map