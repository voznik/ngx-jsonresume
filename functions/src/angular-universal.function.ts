import * as functions from 'firebase-functions';

const universal = require(`${process.cwd()}/dist/web-server/server`).app;

export const angularUniversalFunction = functions.https.onRequest(universal);
