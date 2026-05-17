package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/random-user-generator-sdk/go"
	"github.com/voxgig-sdk/random-user-generator-sdk/go/core"

	vs "github.com/voxgig-sdk/random-user-generator-sdk/go/utility/struct"
)

func TestGetRandomUserEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GetRandomUser(nil)
		if ent == nil {
			t.Fatal("expected non-nil GetRandomUserEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := get_random_userBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "get_random_user." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set RANDOMUSERGENERATOR_TEST_GET_RANDOM_USER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		getRandomUserRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.get_random_user", setup.data)))
		var getRandomUserRef01Data map[string]any
		if len(getRandomUserRef01DataRaw) > 0 {
			getRandomUserRef01Data = core.ToMapAny(getRandomUserRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = getRandomUserRef01Data

		// LIST
		getRandomUserRef01Ent := client.GetRandomUser(nil)
		getRandomUserRef01Match := map[string]any{}

		getRandomUserRef01ListResult, err := getRandomUserRef01Ent.List(getRandomUserRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, getRandomUserRef01ListOk := getRandomUserRef01ListResult.([]any)
		if !getRandomUserRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", getRandomUserRef01ListResult)
		}

	})
}

func get_random_userBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "get_random_user", "GetRandomUserTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read get_random_user test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse get_random_user test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"get_random_user01", "get_random_user02", "get_random_user03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("RANDOMUSERGENERATOR_TEST_GET_RANDOM_USER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"RANDOMUSERGENERATOR_TEST_GET_RANDOM_USER_ENTID": idmap,
		"RANDOMUSERGENERATOR_TEST_LIVE":      "FALSE",
		"RANDOMUSERGENERATOR_TEST_EXPLAIN":   "FALSE",
		"RANDOMUSERGENERATOR_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["RANDOMUSERGENERATOR_TEST_GET_RANDOM_USER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["RANDOMUSERGENERATOR_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["RANDOMUSERGENERATOR_APIKEY"],
			},
			extra,
		})
		client = sdk.NewRandomUserGeneratorSDK(core.ToMapAny(mergedOpts))
	}

	live := env["RANDOMUSERGENERATOR_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["RANDOMUSERGENERATOR_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
