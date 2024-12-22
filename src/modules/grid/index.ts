import type Job from "./job.js";
import type ScriptExecution from "./script.js";
import type * as Responses from "../responses.js";
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

    public async HelloWorld() {
        const result: Responses.HelloWorldResponse = await this.callToService("HelloWorld", {});
        return result.HelloWorldResult;
    }

    public async GetVersion() {
        const result: Responses.GetVersionResponse = await this.callToService("GetVersion", {});
        return result.GetVersionResult;
    }

    public async OpenJob(job: Job, script: ScriptExecution) {
        return this.OpenJobEx(job, script);
    }

    public async OpenJobEx(job: Job, script: ScriptExecution) {
        const result: Responses.OpenJobExResponse = await this.callToService("OpenJob", { job, script });
        return result.OpenJobExResult;
    }

    public async BatchJob(job: Job, script: ScriptExecution) {
        return this.BatchJobEx(job, script);
    }

    public async BatchJobEx(job: Job, script: ScriptExecution) {
        const result: Responses.BatchJobExResponse = await this.callToService("BatchJobEx", { job, script });
        return result.BatchJobExResult;
    }

    public async RenewLease(jobID: string, expirationInSeconds: number) {
        const result: Responses.RenewLeaseResponse = await this.callToService("RenewLease", { jobID, expirationInSeconds });
        return result.RenewLeaseResult;
    }

    public async Execute(jobID: string, script: ScriptExecution) {
        return this.ExecuteEx(jobID, script);
    }

    public async ExecuteEx(jobID: string, script: ScriptExecution) {
        const result: Responses.ExecuteExResponse = await this.callToService("ExecuteEx", { jobID, script });
        return result.ExecuteExResult;
    }

    public async CloseJob(jobID: string) {
        return this.callToService("CloseJob", { jobID });
    }

    public async GetExpiration(jobID: string) {
        const result: Responses.GetExpirationResponse = await this.callToService("GetExpiration", { jobID });
        return result.GetExpirationResult;
    }

    public async Diag(type: string, jobID: string) {
        return this.DiagEx(type, jobID);
    }

    public async DiagEx(type: string, jobID: string) {
        const result: Responses.DiagExResponse = await this.callToService("DiagEx", { type, jobID });
        return result.DiagExResult;
    }

    public async GetStatus() {
        const result: Responses.GetStatusResponse = await this.callToService("GetStatus", {});
        return result.GetStatusResult;
    }

    public async GetAllJobs() {
        return this.GetAllJobsEx();
    }

    public async GetAllJobsEx() {
        const result: Responses.GetAllJobsExResponse = await this.callToService("GetAllJobsEx", {});
        return result.GetAllJobsExResult;
    }

    public async CloseExpiredJobs() {
        const result: Responses.CloseExpiredJobsResponse = await this.callToService("CloseExpiredJobs", {});
        return result.CloseExpiredJobsResult;
    }

    public async CloseAllJobs() {
        const result: Responses.CloseAllJobsResponse = await this.callToService("CloseAllJobs", {});
        return result.CloseAllJobsResult;
    }
}

export default GridService;
