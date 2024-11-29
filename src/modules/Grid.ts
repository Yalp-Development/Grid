import soap, { Client } from "soap";

import type Job from "./Job.js";

import type Script from "./Script.js";

import { fileURLToPath } from "url";

// i hate myself
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

    public async HelloWorld(): Promise<any> {
        return this.callToService("HelloWorld", {});
    }

    public async GetVersion(): Promise<any> {
        return this.callToService("GetVersion", {});
    }

    public async OpenJob(job: Job, script: Script): Promise<any> {
        return this.OpenJobEx(job, script);
    }

    public async OpenJobEx(job: Job, script: Script): Promise<any> {
        return this.callToService("OpenJob", { job, script });
    }

    public async BatchJob(job: Job, script: Script): Promise<any> {
        return this.BatchJobEx(job, script);
    }

    public async BatchJobEx(job: Job, script: Script): Promise<any> {
        return this.callToService("BatchJobEx", { job, script });
    }

    public async RenewLease(jobID: string, expirationInSeconds: number): Promise<any> {
        return this.callToService("RenewLease", { jobID, expirationInSeconds });
    }

    public async Execute(jobID: string, script: Script): Promise<any> {
        return this.ExecuteEx(jobID, script);
    }

    public async ExecuteEx(jobID: string, script: Script): Promise<any> {
        return this.callToService("ExecuteEx", { jobID, script });
    }

    public async CloseJob(jobID: string): Promise<any> {
        return this.callToService("CloseJob", { jobID });
    }

    public async GetExpiration(jobID: string): Promise<any> {
        return this.callToService("GetExpiration", { jobID });
    }

    public async Diag(type: string, jobID: string): Promise<any> {
        return this.DiagEx(type, jobID);
    }

    public async DiagEx(type: string, jobID: string): Promise<any> {
        return this.callToService("DiagEx", { type, jobID });
    }

    public async GetStatus(): Promise<any> {
        return this.callToService("GetStatus", {});
    }

    public async GetAllJobs(): Promise<any> {
        return this.GetAllJobsEx();
    }

    public async GetAllJobsEx(): Promise<any> {
        return this.callToService("GetAllJobsEx", {});
    }

    public async CloseExpiredJobs(): Promise<any> {
        return this.callToService("CloseExpiredJobs", {});
    }

    public async CloseAllJobs(): Promise<any> {
        return this.callToService("CloseAllJobs", {});
    }
}

export default GridService;