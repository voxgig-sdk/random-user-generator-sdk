// Typed models for the RandomUserGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetRandomUser {
  cell?: string
  dob?: Record<string, any>
  email?: string
  gender?: string
  id?: Record<string, any>
  location?: Record<string, any>
  login?: Record<string, any>
  name?: Record<string, any>
  nat?: string
  phone?: string
  picture?: Record<string, any>
  registered?: Record<string, any>
}

export type GetRandomUserListMatch = Partial<GetRandomUser>

