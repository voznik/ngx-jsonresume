// tslint:disable:prefer-const no-unused-variable
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { join } from 'path';
import { readFileSync } from 'fs';
import { tmpdir } from 'os';
import demoData from './resume.json';

const filePath = 'resume.json';
const collection = (name: string) => admin.firestore().collection(name);
const bucket = admin.storage().bucket();

// Download file from bucket.
async function readDefaultResumeFile() {
  const tempFilePath = join(tmpdir(), filePath);
  await bucket.file(filePath).download({ destination: tempFilePath });
  console.log('Image downloaded locally to', tempFilePath);
  return readFileSync(tempFilePath, { encoding: 'utf8' });
}

/** Cloud Function that adds demo data to app for a user. */
export const addUserRef = functions.auth.user().onCreate((user, context) => {
  return collection('users')
    .doc(user.uid)
    .set({
      ...user,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log('Successfully created new user:', user.uid);
      // const demoData = require('./resume.json');
      return collection('resumes')
        .doc(user.uid)
        .set(demoData);
    })
    .then(() =>
      console.log('Successfully created new resume for user:', user.uid)
    )
    .catch(function(error) {
      console.error('Error creating document: ', error);
    });
});

/** Cloud Function that adds demo data to app for a user. */
export const deleteUserRef = functions.auth.user().onDelete((user, context) => {
  return Promise.all([
    collection('users')
      .doc(user.uid)
      .delete(),
    collection('resumes')
      .doc(user.uid)
      .delete(),
  ])
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
});

/** Cloud Function that adds demo data to app for a user. */
export const addUserDataDemo = functions.https.onRequest((req, res) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    if (typeof body.content !== 'object') {
      return Promise.reject('Needs a content field to add demo data');
    }
    return collection('resumes')
      .add(body.content)
      .then(() => res.send('data added'));
  }
  return;
});
