import { z } from 'zod';

/**
 * Zod schema for the Token model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const token = z.lazy(() => {
  return z.object({
    jwt: z.string().min(1).max(1000),
  });
});

/**
 * The identity token of the current container instance.
 * @typedef  {Token} token - The identity token of the current container instance. - The identity token of the current container instance.
 * @property {string} - The JSON Web Token (JWT) that may be used to identify the running container. The JWT may be verified using the JSON Web Key Set (JWKS) available at https://matrix-rest-api.salad.com/.well-known/workload-jwks.json.
 */
export type Token = z.infer<typeof token>;

/**
 * Zod schema for mapping API responses to the Token application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokenResponse = z.lazy(() => {
  return z
    .object({
      jwt: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      jwt: data['jwt'],
    }));
});

/**
 * Zod schema for mapping the Token application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokenRequest = z.lazy(() => {
  return z
    .object({
      jwt: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      jwt: data['jwt'],
    }));
});
