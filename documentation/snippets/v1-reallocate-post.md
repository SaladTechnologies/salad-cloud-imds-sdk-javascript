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
