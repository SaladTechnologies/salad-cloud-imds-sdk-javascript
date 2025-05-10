# MetadataService

A list of all methods in the `MetadataService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                                                           |
| :------------------------------------------ | :-------------------------------------------------------------------- |
| [getDeletionCost](#getdeletioncost)         | Gets the deletion cost of the current container instance              |
| [replaceDeletionCost](#replacedeletioncost) | Replaces the deletion cost of the current container instance          |
| [reallocate](#reallocate)                   | Reallocates the current container instance to another SaladCloud node |
| [recreate](#recreate)                       | Recreates the current container instance on the same SaladCloud node  |
| [restart](#restart)                         | Restarts the current container instance on the same SaladCloud node   |
| [getStatus](#getstatus)                     | Gets the health statuses of the current container instance            |
| [getToken](#gettoken)                       | Gets the identity token of the current container instance             |

## getDeletionCost

Gets the deletion cost of the current container instance

- HTTP Method: `GET`
- Endpoint: `/v1/deletion-cost`

**Return Type**

`DeletionCost`

**Example Usage Code Snippet**

```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.getDeletionCost();

  console.log(data);
})();
```

## replaceDeletionCost

Replaces the deletion cost of the current container instance

- HTTP Method: `PUT`
- Endpoint: `/v1/deletion-cost`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [DeletionCost](../models/DeletionCost.md) | ✅       | The request body. |

**Return Type**

`DeletionCost`

**Example Usage Code Snippet**

```typescript
import { DeletionCost, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const deletionCost: DeletionCost = {
    deletionCost: 100,
  };

  const { data } = await saladCloudImdsSdk.metadata.replaceDeletionCost(deletionCost);

  console.log(data);
})();
```

## reallocate

Reallocates the current container instance to another SaladCloud node

- HTTP Method: `POST`
- Endpoint: `/v1/reallocate`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [ReallocatePrototype](../models/ReallocatePrototype.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { ReallocatePrototype, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const reallocatePrototype: ReallocatePrototype = {
    reason: 'Insufficient VRAM',
  };

  const { data } = await saladCloudImdsSdk.metadata.reallocate(reallocatePrototype);

  console.log(data);
})();
```

## recreate

Recreates the current container instance on the same SaladCloud node

- HTTP Method: `POST`
- Endpoint: `/v1/recreate`

**Example Usage Code Snippet**

```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.recreate();

  console.log(data);
})();
```

## restart

Restarts the current container instance on the same SaladCloud node

- HTTP Method: `POST`
- Endpoint: `/v1/restart`

**Example Usage Code Snippet**

```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.restart();

  console.log(data);
})();
```

## getStatus

Gets the health statuses of the current container instance

- HTTP Method: `GET`
- Endpoint: `/v1/status`

**Return Type**

`Status`

**Example Usage Code Snippet**

```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.getStatus();

  console.log(data);
})();
```

## getToken

Gets the identity token of the current container instance

- HTTP Method: `GET`
- Endpoint: `/v1/token`

**Return Type**

`Token`

**Example Usage Code Snippet**

```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.getToken();

  console.log(data);
})();
```
