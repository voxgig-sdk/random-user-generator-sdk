# frozen_string_literal: true

# Typed models for the RandomUserGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetRandomUser entity data model.
#
# @!attribute [rw] cell
#   @return [String, nil]
#
# @!attribute [rw] dob
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Hash, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] login
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] nat
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] picture
#   @return [Hash, nil]
#
# @!attribute [rw] registered
#   @return [Hash, nil]
GetRandomUser = Struct.new(
  :cell,
  :dob,
  :email,
  :gender,
  :id,
  :location,
  :login,
  :name,
  :nat,
  :phone,
  :picture,
  :registered,
  keyword_init: true
)

# Match filter for GetRandomUser#list (any subset of GetRandomUser fields).
#
# @!attribute [rw] cell
#   @return [String, nil]
#
# @!attribute [rw] dob
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Hash, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] login
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] nat
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] picture
#   @return [Hash, nil]
#
# @!attribute [rw] registered
#   @return [Hash, nil]
GetRandomUserListMatch = Struct.new(
  :cell,
  :dob,
  :email,
  :gender,
  :id,
  :location,
  :login,
  :name,
  :nat,
  :phone,
  :picture,
  :registered,
  keyword_init: true
)

