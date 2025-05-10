import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
