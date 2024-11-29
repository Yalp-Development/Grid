import type Job from "./Job.js";

export enum LuaType {
    LUA_TNIL = "LUA_TNIL",
    LUA_TBOOLEAN = "LUA_TBOOLEAN",
    LUA_TNUMBER = "LUA_TNUMBER",
    LUA_TSTRING = "LUA_TSTRING",
    LUA_TTABLE = "LUA_TTABLE",
}

export interface LuaValue {
    type: LuaType;
    value?: string;
    table?: LuaValue[];
}

export interface Status {
    version?: string;
    environmentCount: number;
}

export interface OpenJobExResponse {
    OpenJobExResult: LuaValue[];
}

export interface RenewLeaseResponse {
    RenewLeaseResult: number;
}

export interface ExecuteExResponse {
    ExecuteExResult: LuaValue[];
}

export interface CloseJobResponse {
    // empty response
}

export interface BatchJobExResponse {
    BatchJobExResult: LuaValue[];
}

export interface GetExpirationResponse {
    GetExpirationResult: number;
}

export interface GetAllJobsExResponse {
    GetAllJobsExResult: Job[];
}

export interface CloseExpiredJobsResponse {
    CloseExpiredJobsResult: number;
}

export interface CloseAllJobsResponse {
    CloseAllJobsResult: number;
}

export interface DiagExResponse {
    DiagExResult: LuaValue[];
}

export interface GetStatusResponse {
    GetStatusResult: Status;
}

export interface GetVersionResponse {
    GetVersionResult: string;
}

export interface HelloWorldResponse {
    HelloWorldResult?: string;
}
