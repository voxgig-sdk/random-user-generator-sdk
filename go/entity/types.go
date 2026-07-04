// Typed models for the RandomUserGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GetRandomUser is the typed data model for the get_random_user entity.
type GetRandomUser struct {
	Cell *string `json:"cell,omitempty"`
	Dob *map[string]any `json:"dob,omitempty"`
	Email *string `json:"email,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *map[string]any `json:"id,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Login *map[string]any `json:"login,omitempty"`
	Name *map[string]any `json:"name,omitempty"`
	Nat *string `json:"nat,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Picture *map[string]any `json:"picture,omitempty"`
	Registered *map[string]any `json:"registered,omitempty"`
}

// GetRandomUserListMatch mirrors the get_random_user fields as an all-optional match
// filter (Go analog of Partial<GetRandomUser>).
type GetRandomUserListMatch struct {
	Cell *string `json:"cell,omitempty"`
	Dob *map[string]any `json:"dob,omitempty"`
	Email *string `json:"email,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *map[string]any `json:"id,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Login *map[string]any `json:"login,omitempty"`
	Name *map[string]any `json:"name,omitempty"`
	Nat *string `json:"nat,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Picture *map[string]any `json:"picture,omitempty"`
	Registered *map[string]any `json:"registered,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
