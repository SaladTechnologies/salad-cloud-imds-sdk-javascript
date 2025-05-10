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
