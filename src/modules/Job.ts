class Job {
    readonly id: string;
    readonly expirationInSeconds: number;
    readonly category: number;
    readonly cores: number;

    constructor(id: string, expirationInSeconds = 10, category = 0, cores = 1) {
        this.id = id;
        this.expirationInSeconds = expirationInSeconds;
        this.category = category;
        this.cores = cores;
    }
}

export default Job;
