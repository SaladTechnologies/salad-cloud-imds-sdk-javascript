import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const reallocatePrototype = z.lazy(() => {
  return z.object({
    reason: z.string().min(1).max(1000),
  });
});

/**
 * Represents a request to reallocate the current container instance to another SaladCloud node.
 * @typedef  {ReallocatePrototype} reallocatePrototype - Represents a request to reallocate the current container instance to another SaladCloud node. - Represents a request to reallocate the current container instance to another SaladCloud node.
 * @property {string} - The reason for reallocating the current container instance. This value is reported to SaladCloud support for quality assurance purposes of SaladCloud nodes.
 */
export type ReallocatePrototype = z.infer<typeof reallocatePrototype>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const reallocatePrototypeResponse = z.lazy(() => {
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
export const reallocatePrototypeRequest = z.lazy(() => {
  return z
    .object({
      reason: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});
