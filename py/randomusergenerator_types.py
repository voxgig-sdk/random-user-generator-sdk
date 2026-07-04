# Typed models for the RandomUserGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetRandomUser:
    cell: Optional[str] = None
    dob: Optional[dict] = None
    email: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[dict] = None
    location: Optional[dict] = None
    login: Optional[dict] = None
    name: Optional[dict] = None
    nat: Optional[str] = None
    phone: Optional[str] = None
    picture: Optional[dict] = None
    registered: Optional[dict] = None


@dataclass
class GetRandomUserListMatch:
    cell: Optional[str] = None
    dob: Optional[dict] = None
    email: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[dict] = None
    location: Optional[dict] = None
    login: Optional[dict] = None
    name: Optional[dict] = None
    nat: Optional[str] = None
    phone: Optional[str] = None
    picture: Optional[dict] = None
    registered: Optional[dict] = None

