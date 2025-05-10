import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { MetadataService } from './services/metadata';

export * from './services/metadata';

export * from './http';
export { Environment } from './http/environment';

export class SaladCloudImdsSdk {
  public readonly metadata: MetadataService;

  constructor(public config: SdkConfig) {
    this.metadata = new MetadataService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.metadata.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.metadata.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.metadata.timeoutMs = timeoutMs;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
