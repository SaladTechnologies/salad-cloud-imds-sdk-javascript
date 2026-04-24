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

**Parameters**

| Name     | Type                              | Required | Description                                         |
| :------- | :-------------------------------- | :------- | :-------------------------------------------------- |
| metadata | [Metadata](../models/Metadata.md) | ✅       | A custom request header required by all operations. |

**Return Type**

`DeletionCost`

**Example Usage Code Snippet**

```typescript
import { Metadata, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const metadata = Metadata.TRUE_;

  const { data } = await saladCloudImdsSdk.metadata.getDeletionCost({
    metadata: metadata,
  });

  console.log(data);
})();
```

## replaceDeletionCost

Replaces the deletion cost of the current container instance

- HTTP Method: `PUT`
- Endpoint: `/v1/deletion-cost`

**Parameters**

| Name     | Type                                      | Required | Description                                         |
| :------- | :---------------------------------------- | :------- | :-------------------------------------------------- |
| body     | [DeletionCost](../models/DeletionCost.md) | ✅       | The request body.                                   |
| metadata | [Metadata](../models/Metadata.md)         | ✅       | A custom request header required by all operations. |

**Example Usage Code Snippet**

```typescript
import { DeletionCost, Metadata, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const metadata = Metadata.TRUE_;

  const deletionCost: DeletionCost = {
    deletionCost: 100,
  };

  const { data } = await saladCloudImdsSdk.metadata.replaceDeletionCost(deletionCost, {
    metadata: metadata,
  });

  console.log(data);
})();
```

## reallocate

Reallocates the current container instance to another SaladCloud node

- HTTP Method: `POST`
- Endpoint: `/v1/reallocate`

**Parameters**

| Name     | Type                                                    | Required | Description                                         |
| :------- | :------------------------------------------------------ | :------- | :-------------------------------------------------- |
| body     | [ReallocatePrototype](../models/ReallocatePrototype.md) | ✅       | The request body.                                   |
| metadata | [Metadata](../models/Metadata.md)                       | ✅       | A custom request header required by all operations. |

**Example Usage Code Snippet**

```typescript
import { Metadata, ReallocatePrototype, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const metadata = Metadata.TRUE_;

  const reallocatePrototype: ReallocatePrototype = {
    reason: 'Insufficient VRAM',
  };

  const { data } = await saladCloudImdsSdk.metadata.reallocate(reallocatePrototype, {
    metadata: metadata,
  });

  console.log(data);
})();
```

## recreate

Recreates the current container instance on the same SaladCloud node

- HTTP Method: `POST`
- Endpoint: `/v1/recreate`

**Parameters**

| Name     | Type                              | Required | Description                                         |
| :------- | :-------------------------------- | :------- | :-------------------------------------------------- |
| metadata | [Metadata](../models/Metadata.md) | ✅       | A custom request header required by all operations. |

**Example Usage Code Snippet**

```typescript
import { Metadata, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const metadata = Metadata.TRUE_;

  const { data } = await saladCloudImdsSdk.metadata.recreate({
    metadata: metadata,
  });

  console.log(data);
})();
```

## restart

Restarts the current container instance on the same SaladCloud node

- HTTP Method: `POST`
- Endpoint: `/v1/restart`

**Parameters**

| Name     | Type                              | Required | Description                                         |
| :------- | :-------------------------------- | :------- | :-------------------------------------------------- |
| metadata | [Metadata](../models/Metadata.md) | ✅       | A custom request header required by all operations. |

**Example Usage Code Snippet**

```typescript
import { Metadata, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const metadata = Metadata.TRUE_;

  const { data } = await saladCloudImdsSdk.metadata.restart({
    metadata: metadata,
  });

  console.log(data);
})();
```

## getStatus

Gets the health statuses of the current container instance

- HTTP Method: `GET`
- Endpoint: `/v1/status`

**Parameters**

| Name     | Type                              | Required | Description                                         |
| :------- | :-------------------------------- | :------- | :-------------------------------------------------- |
| metadata | [Metadata](../models/Metadata.md) | ✅       | A custom request header required by all operations. |

**Return Type**

`Status`

**Example Usage Code Snippet**

```typescript
import { Metadata, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const metadata = Metadata.TRUE_;

  const { data } = await saladCloudImdsSdk.metadata.getStatus({
    metadata: metadata,
  });

  console.log(data);
})();
```

## getToken

Gets the identity token of the current container instance

- HTTP Method: `GET`
- Endpoint: `/v1/token`

**Parameters**

| Name     | Type                              | Required | Description                                         |
| :------- | :-------------------------------- | :------- | :-------------------------------------------------- |
| metadata | [Metadata](../models/Metadata.md) | ✅       | A custom request header required by all operations. |

**Return Type**

`Token`

**Example Usage Code Snippet**

```typescript
import { Metadata, SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const metadata = Metadata.TRUE_;

  const { data } = await saladCloudImdsSdk.metadata.getToken({
    metadata: metadata,
  });

  console.log(data);
})();
```
