import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const reallocateContainer = z.lazy(() => {
  return z.object({
    reason: z.string().min(1).max(1000),
  });
});

/**
 * Represents a request to reallocate a container.
 * @typedef  {ReallocateContainer} reallocateContainer - Represents a request to reallocate a container. - Represents a request to reallocate a container.
 * @property {string} - The reason for reallocating the container. This value is reported to SaladCloud support for quality assurance of Salad Nodes.
 */
export type ReallocateContainer = z.infer<typeof reallocateContainer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const reallocateContainerResponse = z.lazy(() => {
  return z
    .object({
      reason: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const reallocateContainerRequest = z.lazy(() => {
  return z.object({ reason: z.string().nullish() }).transform((data) => ({
    reason: data['reason'],
  }));
});
