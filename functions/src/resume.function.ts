import { exec } from 'child_process';
// import { join } from 'path';
// import hackmyresume = require('hackmyresume');

export function validateResume() {
  return new Promise((resolve, reject) =>
    exec(
      // 'hackmyresume build /home/voznik/workspace/ngx-jsonresume/functions/src/resume.json TO /home/voznik/workspace/ngx-jsonresume/functions/dist/out/all',
      'hackmyresume validate /home/voznik/workspace/ngx-jsonresume/functions/src/resume.json',
      (err, stdout, stderr) => {
        console.log('!!!validateResume!!!');
        if (err) {
          console.error(`An error occurred: ${err.message}`);
          reject({ success: false });
        } else {
          console.log(`Result: ${stdout}`);
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            reject({ success: false });
          }
          resolve({ success: true });
        }
      }
    )
  );
}

export function buildResume() {
  return new Promise((resolve, reject) =>
    exec(
      'hackmyresume build src/resume.json TO dist/out/resume.html -t node_modules/jsonresume-theme-caffeine',
      (err, stdout, stderr) => {
        console.log('!!!validateResume!!!');
        if (err) {
          console.error(`An error occurred: ${err.message}`);
          reject({ success: false });
        } else {
          console.log(`Result: ${stdout}`);
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            reject({ success: false });
          }
          resolve({ success: true });
        }
      }
    )
  );
}
