import { z } from 'zod';

/**
 * Zod schema for the ReallocatePrototype model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ReallocatePrototype application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ReallocatePrototype application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
