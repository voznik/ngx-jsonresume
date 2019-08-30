const fs = require('fs-extra');

(async () => {
  const src = './dist';
  const dist = './functions/dist';
  await fs.remove(dist);
  await fs.copy(src, dist);
})();
