import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerToken = z.lazy(() => {
  return z.object({
    jwt: z.string().min(1).max(1000),
  });
});

/**
 * Represents the identity token of the running container.
 * @typedef  {ContainerToken} containerToken - Represents the identity token of the running container. - Represents the identity token of the running container.
 * @property {string} - The JSON Web Token (JWT) that may be used to identify the running container. The JWT may be verified using the JSON Web Key Set (JWKS) available at https://matrix-rest-api.salad.com/.well-known/stash-jwks.json.
 */
export type ContainerToken = z.infer<typeof containerToken>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerTokenResponse = z.lazy(() => {
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
export const containerTokenRequest = z.lazy(() => {
  return z.object({ jwt: z.string().nullish() }).transform((data) => ({
    jwt: data['jwt'],
  }));
});
