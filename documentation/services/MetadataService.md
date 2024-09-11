# MetadataService

A list of all methods in the `MetadataService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                                             |
| :------------------------------------------ | :------------------------------------------------------ |
| [reallocateContainer](#reallocatecontainer) | Reallocates the running container to another Salad Node |
| [getContainerStatus](#getcontainerstatus)   | Gets the health statuses of the running container       |
| [getContainerToken](#getcontainertoken)     | Gets the identity token of the running container        |

## reallocateContainer

Reallocates the running container to another Salad Node

- HTTP Method: `POST`
- Endpoint: `/v1/reallocate`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | `[ReallocateContainer](../models/ReallocateContainer.md)` | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { ReallocateContainer, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const reallocateContainer: ReallocateContainer = {
    reason: 'laborum culpa',
  };

  const { data } = await saladCloudImdsSdk.metadata.reallocateContainer(input);

  console.log(data);
})();
```

## getContainerStatus

Gets the health statuses of the running container

- HTTP Method: `GET`
- Endpoint: `/v1/status`

**Return Type**

`ContainerStatus`

**Example Usage Code Snippet**

```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.getContainerStatus();

  console.log(data);
})();
```

## getContainerToken

Gets the identity token of the running container

- HTTP Method: `GET`
- Endpoint: `/v1/token`

**Return Type**

`ContainerToken`

**Example Usage Code Snippet**

```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.getContainerToken();

  console.log(data);
})();
```
