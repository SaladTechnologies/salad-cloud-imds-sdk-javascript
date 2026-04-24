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
