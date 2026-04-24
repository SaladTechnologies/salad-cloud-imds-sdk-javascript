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
