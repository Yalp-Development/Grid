import type * as Responses from "../responses.js"
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

    public async Ping(): Promise<Responses.PingResponse> {
        return this.callToService("Ping", {});
    }

    public async IsAlive(): Promise<Responses.IsAliveResponse> {
        return this.callToService("IsAlive", {});
    }

    public async GetStats(): Promise<Responses.GetStatsResponse> {
        return this.callToService("GetStats", {});
    }

    public async RequestThumbnailGenerationEx(
        thumbnailType: ThumbnailType,
        imageFormat: ImageFormat,
        width: number,
        height: number,
        assetUrl: string,
        baseUrl: string,
        mannequinOrUniverseId: number
    ): Promise<Responses.RequestThumbnailGenerationExResponse> {
        return this.callToService("RequestThumbnailGenerationEx", {
            thumbnailType,
            imageFormat,
            width,
            height,
            assetUrl,
            baseUrl,
            mannequinOrUniverseId,
        });
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
        cameraOffsetY: number,
    ): Promise<Responses.RequestAvatarThumbnailGenerationExResponse> {
        return this.callToService("RequestAvatarThumbnailGenerationEx", {
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
    }
}

export default ThumbnailsRelay;