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
