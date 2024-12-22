import type Job from "./grid/job.js";

/* Grid Responses */
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

/* ThumbnailsRelay Responses */
export interface PingResponse {
    PingResult: string;
}

export interface IsAliveResponse {
    IsAliveResult: boolean;
}

export interface RequestThumbnailGenerationExResponse {
    RequestThumbnailGenerationExResult: {
        Base64EncodedThumbnailData: string;
        DependencyUrls: string[];
    }
}

export interface GetStatsResponse {
    GetStatsResult: {
        CpuUsage: number;
        RccServiceProcesses: number;
        ProcessorCount: number;
        TotalPhysicalMemoryGigabytes: number;
        AvailablePhysicalMemoryGigabytes: number;
        UploadSpeedKilobytesPerSecond: number;
        DownloadSpeedKilobytesPerSecond: number;
        RccVersion: string;
        ThumbnailsRelayVersion: string;
        LogicalProcessorCount: number;
    }
}

// it is the same thing
export type RequestAvatarThumbnailGenerationExResponse = {
    RequestAvatarThumbnailGenerationExResult: {
        Base64EncodedThumbnailData: string;
        DependencyUrls: string[];
    }
}