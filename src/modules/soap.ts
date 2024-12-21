import soap, { Client } from "soap";

export async function callToService(wsdl: string, url: string, sender: string, options: object): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        soap.createClient(wsdl, (err: Error | null, client: Client) => {
            if (err) {
                reject(err);
            } else {
                client.setEndpoint(url);
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