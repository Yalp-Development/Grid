import soap, { Client } from "soap";

import type Job from "./Job.js";

import type ScriptExecution from "./ScriptExecution.js";

import type * as Responses from "./Response.js"

import { fileURLToPath } from "url";

const wsdl = fileURLToPath(
    new URL("../assets/RCCService.wsdl", import.meta.url)
);

class GridService {
    private readonly url: string;

    constructor(ip: string, port: number) {
        this.url = `http://${ip}:${port}`;
    }

    async callToService(sender: string, options: object): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            soap.createClient(wsdl, (err: Error | null, client: Client) => {
                if (err) {
                    reject(err);
                } else {
                    client.setEndpoint(this.url);
                    client[sender](options, (error: Error | null, result: any) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    }

    public async HelloWorld(): Promise<Responses.HelloWorldResponse | null> {
        return this.callToService("HelloWorld", {});
    }

    public async GetVersion(): Promise<Responses.GetVersionResponse | null> {
        return this.callToService("GetVersion", {});
    }

    public async OpenJob(job: Job, script: ScriptExecution): Promise<Responses.OpenJobExResponse | null> {
        return this.OpenJobEx(job, script);
    }

    public async OpenJobEx(job: Job, script: ScriptExecution): Promise<Responses.OpenJobExResponse | null> {
        return this.callToService("OpenJob", { job, script });
    }

    public async BatchJob(job: Job, script: ScriptExecution): Promise<Responses.BatchJobExResponse | null> {
        return this.BatchJobEx(job, script);
    }

    public async BatchJobEx(job: Job, script: ScriptExecution): Promise<Responses.BatchJobExResponse | null> {
        return this.callToService("BatchJobEx", { job, script });
    }

    public async RenewLease(jobID: string, expirationInSeconds: number): Promise<Responses.RenewLeaseResponse | null> {
        return this.callToService("RenewLease", { jobID, expirationInSeconds });
    }

    public async Execute(jobID: string, script: ScriptExecution): Promise<Responses.ExecuteExResponse | null> {
        return this.ExecuteEx(jobID, script);
    }

    public async ExecuteEx(jobID: string, script: ScriptExecution): Promise<Responses.ExecuteExResponse | null> {
        return this.callToService("ExecuteEx", { jobID, script });
    }

    public async CloseJob(jobID: string): Promise<Responses.CloseJobResponse | null> {
        return this.callToService("CloseJob", { jobID });
    }

    public async GetExpiration(jobID: string): Promise<Responses.GetExpirationResponse | null> {
        return this.callToService("GetExpiration", { jobID });
    }

    public async Diag(type: string, jobID: string): Promise<Responses.DiagExResponse | null> {
        return this.DiagEx(type, jobID);
    }

    public async DiagEx(type: string, jobID: string): Promise<Responses.DiagExResponse | null> {
        return this.callToService("DiagEx", { type, jobID });
    }

    public async GetStatus(): Promise<Responses.GetStatusResponse | null> {
        return this.callToService("GetStatus", {});
    }

    public async GetAllJobs(): Promise<Responses.GetAllJobsExResponse | null> {
        return this.GetAllJobsEx();
    }

    public async GetAllJobsEx(): Promise<Responses.GetAllJobsExResponse | null> {
        return this.callToService("GetAllJobsEx", {});
    }

    public async CloseExpiredJobs(): Promise<Responses.CloseExpiredJobsResponse | null> {
        return this.callToService("CloseExpiredJobs", {});
    }

    public async CloseAllJobs(): Promise<Responses.CloseAllJobsResponse | null> {
        return this.callToService("CloseAllJobs", {});
    }
}

export default GridService;