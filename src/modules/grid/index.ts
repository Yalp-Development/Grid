import type Job from "./job.js";
import type ScriptExecution from "./script.js";
import type * as Responses from "../responses.js"
import { callToService } from "../soap.js";
import { fileURLToPath } from "url";

const wsdl = fileURLToPath(
    new URL("../../assets/RCCService.wsdl", import.meta.url)
);

class GridService {
    private readonly url: string;

    constructor(ip: string, port: number) {
        this.url = `http://${ip}:${port}`;
    }

    async callToService(sender: string, options: object): Promise<any> {
        return callToService(wsdl, this.url, sender, options);
    }

    public async HelloWorld(): Promise<Responses.HelloWorldResponse> {
        return this.callToService("HelloWorld", {});
    }

    public async GetVersion(): Promise<Responses.GetVersionResponse> {
        return this.callToService("GetVersion", {});
    }

    public async OpenJob(job: Job, script: ScriptExecution): Promise<Responses.OpenJobExResponse> {
        return this.OpenJobEx(job, script);
    }

    public async OpenJobEx(job: Job, script: ScriptExecution): Promise<Responses.OpenJobExResponse> {
        return this.callToService("OpenJob", { job, script });
    }

    public async BatchJob(job: Job, script: ScriptExecution): Promise<Responses.BatchJobExResponse> {
        return this.BatchJobEx(job, script);
    }

    public async BatchJobEx(job: Job, script: ScriptExecution): Promise<Responses.BatchJobExResponse> {
        return this.callToService("BatchJobEx", { job, script });
    }

    public async RenewLease(jobID: string, expirationInSeconds: number): Promise<Responses.RenewLeaseResponse> {
        return this.callToService("RenewLease", { jobID, expirationInSeconds });
    }

    public async Execute(jobID: string, script: ScriptExecution): Promise<Responses.ExecuteExResponse> {
        return this.ExecuteEx(jobID, script);
    }

    public async ExecuteEx(jobID: string, script: ScriptExecution): Promise<Responses.ExecuteExResponse> {
        return this.callToService("ExecuteEx", { jobID, script });
    }

    public async CloseJob(jobID: string): Promise<Responses.CloseJobResponse> {
        return this.callToService("CloseJob", { jobID });
    }

    public async GetExpiration(jobID: string): Promise<Responses.GetExpirationResponse> {
        return this.callToService("GetExpiration", { jobID });
    }

    public async Diag(type: string, jobID: string): Promise<Responses.DiagExResponse> {
        return this.DiagEx(type, jobID);
    }

    public async DiagEx(type: string, jobID: string): Promise<Responses.DiagExResponse> {
        return this.callToService("DiagEx", { type, jobID });
    }

    public async GetStatus(): Promise<Responses.GetStatusResponse> {
        return this.callToService("GetStatus", {});
    }

    public async GetAllJobs(): Promise<Responses.GetAllJobsExResponse> {
        return this.GetAllJobsEx();
    }

    public async GetAllJobsEx(): Promise<Responses.GetAllJobsExResponse> {
        return this.callToService("GetAllJobsEx", {});
    }

    public async CloseExpiredJobs(): Promise<Responses.CloseExpiredJobsResponse> {
        return this.callToService("CloseExpiredJobs", {});
    }

    public async CloseAllJobs(): Promise<Responses.CloseAllJobsResponse> {
        return this.callToService("CloseAllJobs", {});
    }
}

export default GridService;