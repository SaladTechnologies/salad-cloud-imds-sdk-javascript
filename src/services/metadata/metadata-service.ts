import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { DeletionCost, deletionCostRequest, deletionCostResponse } from './models/deletion-cost';
import { SaladCloudImdsError } from './models/salad-cloud-imds-error';
import {
  GetDeletionCostParams,
  GetStatusParams,
  GetTokenParams,
  ReallocateParams,
  RecreateParams,
  ReplaceDeletionCostParams,
  RestartParams,
} from './request-params';
import { ReallocatePrototype, reallocatePrototypeRequest } from './models/reallocate-prototype';
import { Status, statusResponse } from './models/status';
import { Token, tokenResponse } from './models/token';

/**
 * Service class for MetadataService operations.
 * Provides methods to interact with MetadataService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class MetadataService extends BaseService {
  /**
   * Gets the deletion cost of the current container instance
   * @param {Metadata} params.metadata - A custom request header required by all operations.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<DeletionCost>>} - OK
   */
  async getDeletionCost(
    params: GetDeletionCostParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeletionCost>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v1/deletion-cost')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: deletionCostResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 404,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({
        key: 'Metadata',
        value: params?.metadata,
      })
      .build();
    return this.client.call<DeletionCost>(request);
  }

  /**
   * Replaces the deletion cost of the current container instance
   * @param {Metadata} params.metadata - A custom request header required by all operations.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async replaceDeletionCost(
    body: DeletionCost,
    params: ReplaceDeletionCostParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/v1/deletion-cost')
      .setRequestSchema(deletionCostRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 404,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({
        key: 'Metadata',
        value: params?.metadata,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Reallocates the current container instance to another SaladCloud node
   * @param {Metadata} params.metadata - A custom request header required by all operations.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async reallocate(
    body: ReallocatePrototype,
    params: ReallocateParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v1/reallocate')
      .setRequestSchema(reallocatePrototypeRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 404,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({
        key: 'Metadata',
        value: params?.metadata,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Recreates the current container instance on the same SaladCloud node
   * @param {Metadata} params.metadata - A custom request header required by all operations.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async recreate(params: RecreateParams, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v1/recreate')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 404,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({
        key: 'Metadata',
        value: params?.metadata,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Restarts the current container instance on the same SaladCloud node
   * @param {Metadata} params.metadata - A custom request header required by all operations.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async restart(params: RestartParams, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v1/restart')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 404,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({
        key: 'Metadata',
        value: params?.metadata,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Gets the health statuses of the current container instance
   * @param {Metadata} params.metadata - A custom request header required by all operations.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Status>>} - OK
   */
  async getStatus(params: GetStatusParams, requestConfig?: RequestConfig): Promise<HttpResponse<Status>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v1/status')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 404,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({
        key: 'Metadata',
        value: params?.metadata,
      })
      .build();
    return this.client.call<Status>(request);
  }

  /**
   * Gets the identity token of the current container instance
   * @param {Metadata} params.metadata - A custom request header required by all operations.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Token>>} - OK
   */
  async getToken(params: GetTokenParams, requestConfig?: RequestConfig): Promise<HttpResponse<Token>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v1/token')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: tokenResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: SaladCloudImdsError,
        contentType: ContentType.Json,
        status: 404,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({
        key: 'Metadata',
        value: params?.metadata,
      })
      .build();
    return this.client.call<Token>(request);
  }
}
