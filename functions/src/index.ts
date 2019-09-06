import * as _cors from 'cors';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { analysisFunction } from './analysis.function';
import { deleteUserDataFunction } from './delete-user-data.function';
import { functionsConfig } from './functions-config';
import { validateResume, buildResume } from './resume-validate.function';

// CORS configuration.
const options: _cors.CorsOptions = {
  origin: functionsConfig.whitelist
};
const cors = _cors;

// Initializes Cloud Functions.
admin.initializeApp(functions.config().firebase);

// Firestore settings.
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

/**
 * Trigger a function with an HTTP request.
 */
export const httpFunction = functions.https.onRequest(
  (request: functions.Request, response: functions.Response) => {
    cors(options)(request, response, () => analysisFunction(request, response));
  }
);

/**
 * Trigger a function on user deletion.
 */
export const authFunction = functions.auth
  .user()
  .onDelete((user: admin.auth.UserRecord) => {
    return deleteUserDataFunction(user);
  });

export * from './angular-universal.function';

// [START allAdd]
// [START addFunctionTrigger]
// Adds two numbers to each other.
export const validateResumeFunction = functions.https.onCall(data => {
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
