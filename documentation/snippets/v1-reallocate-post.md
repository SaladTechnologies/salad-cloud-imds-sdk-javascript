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
