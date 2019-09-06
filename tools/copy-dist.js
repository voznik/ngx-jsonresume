const fs = require('fs-extra');

(async () => {
  const src = './dist';
  const public = './functions/dist';
  await fs.remove(public);
  await fs.copy(src, public);
})();
