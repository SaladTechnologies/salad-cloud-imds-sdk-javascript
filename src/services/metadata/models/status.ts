import { z } from 'zod';

/**
 * Zod schema for the Status model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const status = z.lazy(() => {
  return z.object({
    ready: z.boolean(),
    started: z.boolean(),
  });
});

/**
 * The health statuses of the current container instance.
 * @typedef  {Status} status - The health statuses of the current container instance. - The health statuses of the current container instance.
 * @property {boolean} - `true` if the running container is ready. If a readiness probe is defined, this returns the latest result of the probe. If a readiness probe is not defined but a startup probe is defined, this returns the same value as the `started` property. If neither a readiness probe nor a startup probe are defined, returns `true`.
 * @property {boolean} - `true` if the running container is started. If a startup probe is defined, this returns the latest result of the probe. If a startup probe is not defined, returns `true`.
 */
export type Status = z.infer<typeof status>;

/**
 * Zod schema for mapping API responses to the Status application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const statusResponse = z.lazy(() => {
  return z
    .object({
      ready: z.boolean(),
      started: z.boolean(),
    })
    .transform((data) => ({
      ready: data['ready'],
      started: data['started'],
    }));
});

/**
 * Zod schema for mapping the Status application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const statusRequest = z.lazy(() => {
  return z
    .object({
      ready: z.boolean(),
      started: z.boolean(),
    })
    .transform((data) => ({
      ready: data['ready'],
      started: data['started'],
    }));
});
