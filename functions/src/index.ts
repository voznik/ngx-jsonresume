import cors = require('cors');
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { functionsConfig } from './functions-config';
import { validateResume, buildResume } from './resume.function';

// CORS configuration.
const options: cors.CorsOptions = {
  origin: functionsConfig.whitelist,
};

// Initializes Cloud Functions.
admin.initializeApp(functions.config().firebase);

// Firestore settings.
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

/**
 * Trigger a function with an HTTP request.
 */
export const validateResumeFunction = functions.https.onRequest(
  (req: functions.Request, res: functions.Response) => {
    cors(options)(req, res, () => {
      return validateResume().then(result => res.send(result));
    });
  }
);

export * from './angular-universal.function';
export * from './user.function';

// [START allAdd]
// [START addFunctionTrigger]
// Adds two numbers to each other.
export const buildResumeFunction = functions.https.onCall(data => {
  // [END addFunctionTrigger]
  // [START readAddData]
  // Numbers passed from the client.
  const firstNumber = data.firstNumber;
  const secondNumber = data.secondNumber;
  // [END readAddData]

  // [START addHttpsError]
  // Checking that attributes are present and are numbers.
  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with ' +
        'two arguments "firstNumber" and "secondNumber" which must both be numbers.'
    );
  }
  return validateResume()
    .then(() => buildResume())
    .then(success => {
      console.log('success', success);
      return success;
    })
    .catch(err => err);
});
// [END allAdd]
