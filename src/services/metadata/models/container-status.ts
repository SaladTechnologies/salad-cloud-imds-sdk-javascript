import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerStatus = z.lazy(() => {
  return z.object({
    ready: z.boolean(),
    started: z.boolean(),
  });
});

/**
 * Represents the health statuses of the running container.
 * @typedef  {ContainerStatus} containerStatus - Represents the health statuses of the running container. - Represents the health statuses of the running container.
 * @property {boolean} - `true` if the running container is ready. If a readiness probe is defined, this returns the latest result of the probe. If a readiness probe is not defined but a startup probe is defined, this returns the same value as the `started` property. If neither a readiness probe nor a startup probe are defined, returns `true`.
 * @property {boolean} - `true` if the running container is started. If a startup probe is defined, this returns the latest result of the probe. If a startup probe is not defined, returns `true`.
 */
export type ContainerStatus = z.infer<typeof containerStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerStatusResponse = z.lazy(() => {
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerStatusRequest = z.lazy(() => {
  return z.object({ ready: z.boolean().nullish(), started: z.boolean().nullish() }).transform((data) => ({
    ready: data['ready'],
    started: data['started'],
  }));
});
