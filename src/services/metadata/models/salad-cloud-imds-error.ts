import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type ISaladCloudImdsErrorSchema = {
  code?: string;
  detail?: string;
  errors?: any;
  instance?: string;
  status?: number;
  title?: string;
  type?: string;
};

export const saladCloudImdsErrorResponse = z.lazy(() => {
  return z
    .object({
      code: z.string().min(1).max(100).optional(),
      detail: z.string().min(1).max(10000).optional(),
      errors: z.any().optional(),
      instance: z.string().min(1).max(2048).optional(),
      status: z.number().gte(100).lte(599).optional(),
      title: z.string().min(1).max(10000).optional(),
      type: z.string().min(1).max(2048).optional(),
    })
    .transform((data) => ({
      code: data['code'],
      detail: data['detail'],
      errors: data['errors'],
      instance: data['instance'],
      status: data['status'],
      title: data['title'],
      type: data['type'],
    }));
});

export class SaladCloudImdsError extends ThrowableError {
  public code?: string;
  public detail?: string;
  public errors?: any;
  public instance?: string;
  public status?: number;
  public title?: string;
  public type?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = saladCloudImdsErrorResponse.parse(response);

    this.code = parsedResponse.code;
    this.detail = parsedResponse.detail;
    this.errors = parsedResponse.errors;
    this.instance = parsedResponse.instance;
    this.status = parsedResponse.status;
    this.title = parsedResponse.title;
    this.type = parsedResponse.type;
  }

  public throw() {
    throw new SaladCloudImdsError(this.message, this.response);
  }
}
