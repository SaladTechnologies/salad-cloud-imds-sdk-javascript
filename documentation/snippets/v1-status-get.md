```typescript
import { SaladCloudImdsSdk } from '@saladtechnologies-oss/salad-cloud-imds-sdk';

(async () => {
  const saladCloudImdsSdk = new SaladCloudImdsSdk({});

  const { data } = await saladCloudImdsSdk.metadata.getContainerStatus();

  console.log(data);
})();
```
