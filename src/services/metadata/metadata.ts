import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ReallocateContainer, reallocateContainerRequest } from './models/reallocate-container';
import { ContainerStatus, containerStatusResponse } from './models/container-status';
import { ContainerToken, containerTokenResponse } from './models/container-token';

export class MetadataService extends BaseService {
  /**
   * Reallocates the running container to another Salad Node
   * @returns {Promise<HttpResponse<any>>} No Content
   */
  async reallocateContainer(
    body: ReallocateContainer,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v1/reallocate')
      .setRequestSchema(reallocateContainerRequest)
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   * Gets the health statuses of the running container
   * @returns {Promise<HttpResponse<ContainerStatus>>} OK
   */
  async getContainerStatus(requestConfig?: RequestConfig): Promise<HttpResponse<ContainerStatus>> {
    const request = new RequestBuilder<ContainerStatus>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v1/status')
      .setRequestSchema(z.any())
      .setResponseSchema(containerStatusResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<ContainerStatus>(request);
  }

  /**
   * Gets the identity token of the running container
   * @returns {Promise<HttpResponse<ContainerToken>>} OK
   */
  async getContainerToken(requestConfig?: RequestConfig): Promise<HttpResponse<ContainerToken>> {
    const request = new RequestBuilder<ContainerToken>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v1/token')
      .setRequestSchema(z.any())
      .setResponseSchema(containerTokenResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<ContainerToken>(request);
  }
}
