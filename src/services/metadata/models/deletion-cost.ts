import { z } from 'zod';

/**
 * Zod schema for the DeletionCost model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const deletionCost = z.lazy(() => {
  return z.object({
    deletionCost: z.number().gte(-2147483648).lte(2147483647),
  });
});

/**
 * The deletion cost of the current container instance.
 * @typedef  {DeletionCost} deletionCost - The deletion cost of the current container instance. - The deletion cost of the current container instance.
 * @property {number} - An integer value that identifies the relative cost to the application running across the container group if the current container instance is deleted. A higher value indicates a higher cost, and a lower value indicates a lower cost. If the container group is scaled down, the scheduler will attempt to delete the container instances with the lowest deletion costs first.
 */
export type DeletionCost = z.infer<typeof deletionCost>;

/**
 * Zod schema for mapping API responses to the DeletionCost application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deletionCostResponse = z.lazy(() => {
  return z
    .object({
      deletion_cost: z.number().gte(-2147483648).lte(2147483647),
    })
    .transform((data) => ({
      deletionCost: data['deletion_cost'],
    }));
});

/**
 * Zod schema for mapping the DeletionCost application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deletionCostRequest = z.lazy(() => {
  return z
    .object({
      deletionCost: z.number().gte(-2147483648).lte(2147483647),
    })
    .transform((data) => ({
      deletion_cost: data['deletionCost'],
    }));
});
