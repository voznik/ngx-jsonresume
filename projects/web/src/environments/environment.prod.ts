export const environment = {
  production: true,
  envName: 'PROD',
  test: false,
  i18nPrefix: '/ngx-jsonresume',
  appName: 'ngx-jsonresume',
  url: 'https://ngx-jsonresume.firebaseapp.com',
  firebaseConfig: {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID
  }
};
