import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
