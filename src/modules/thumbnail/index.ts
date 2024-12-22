import type * as Responses from "../responses.js";
import { callToService } from "../soap.js";
import { fileURLToPath } from "url";
import type { ImageFormat, ThumbnailType } from "./enums.js";

const wsdl = fileURLToPath(
    new URL("../../assets/ThumbnailsRelay.wsdl", import.meta.url)
);

class ThumbnailsRelay {
    private readonly url: string;

    constructor(ip: string, port: number) {
        this.url = `http://${ip}:${port}`;
    }

    async callToService(sender: string, options: object): Promise<any> {
        return callToService(wsdl, this.url, sender, options);
    }

    public async Ping() {
        const result: Responses.PingResponse = await this.callToService("Ping", {});
        return result.PingResult;
    }

    public async IsAlive() {
        const result: Responses.IsAliveResponse = await this.callToService("IsAlive", {});
        return result.IsAliveResult;
    }

    public async GetStats() {
        const result: Responses.GetStatsResponse = await this.callToService("GetStats", {});
        return result.GetStatsResult;
    }

    public async RequestThumbnailGenerationEx(
        thumbnailType: ThumbnailType,
        imageFormat: ImageFormat,
        width: number,
        height: number,
        assetUrl: string,
        baseUrl: string,
        mannequinOrUniverseId: number
    ) {
        const result: Responses.RequestThumbnailGenerationExResponse =
            await this.callToService("RequestThumbnailGenerationEx", {
                thumbnailType,
                imageFormat,
                width,
                height,
                assetUrl,
                baseUrl,
                mannequinOrUniverseId,
            });
        
        return result.RequestThumbnailGenerationExResult;
    }

    public async RequestAvatarThumbnailGenerationEx(
        thumbnailType: ThumbnailType,
        imageFormat: ImageFormat,
        width: number,
        height: number,
        characterAppearance: string,
        baseUrl: string,
        quadratic: boolean,
        baseHatZoom: number,
        maxHatZoom: number,
        cameraOffsetX: number,
        cameraOffsetY: number
    ) {
        const result: Responses.RequestAvatarThumbnailGenerationExResponse =
            await this.callToService("RequestAvatarThumbnailGenerationEx", {
                thumbnailType,
                imageFormat,
                width,
                height,
                characterAppearaance: characterAppearance, // roblox typo moment
                baseUrl,
                quadratic,
                baseHatZoom,
                maxHatZoom,
                cameraOffsetX,
                cameraOffsetY,
            });

        return result.RequestAvatarThumbnailGenerationExResult;
    }
}

export default ThumbnailsRelay;
