// tslint:disable:no-string-literal
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JSONSchema4 } from 'json-schema';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import freshresumeSchema from '../assets/freshresume.schema.json';
import jsonresumeSchema from '../assets/jsonresume.schema.json';
import exampleResume from '../assets/resume.json';

enum SchemaType {
  JSR = 'jsonresume',
  FRESH = 'freshresume',
}

@Injectable()
export class NgxJsonresumeService {
  get exampleModel() {
    return exampleResume;
  }

  constructor(private http: HttpClient) {}

  loadSchema(type: SchemaType = SchemaType.JSR): Observable<JSONSchema4> {
    // return this.http.get<any>(`../assets/${type}.json`);
    // const rawUrl = `https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json`;
    // tslint:disable-next-line:max-line-length
    // const rawUrl = 'https://raw.githubusercontent.com/fresh-standard/fresh-resume-schema/master/schema/fresh-resume-schema_1.0.0-beta.json';
    // return this.http.get<any>(rawUrl);
    return of(jsonresumeSchema as JSONSchema4).pipe(
      map(schemaObj => {
        const newSchemaObj = { ...schemaObj };
        extendSchemaObj(newSchemaObj.properties);
        return newSchemaObj;
      })
    );
  }
}

export function extendSchemaObj(schemaLikeObj: JSONSchema4) {
  // const newSchemaObj: JSONSchema4 = {};
  for (const pkey in schemaLikeObj) {
    if (schemaLikeObj.hasOwnProperty(pkey)) {
      if (!schemaLikeObj[pkey].hasOwnProperty('title')) {
        schemaLikeObj[pkey]['title'] = toSentence(pkey);
      }
      if (schemaLikeObj[pkey].hasOwnProperty('properties')) {
        extendSchemaObj(schemaLikeObj[pkey]['properties']);
      }
      if (schemaLikeObj[pkey].hasOwnProperty('items')) {
        extendSchemaObj(schemaLikeObj[pkey]['items']['properties']);
      }
    }
  }
}

export function toSentence(str: string) {
  const newStr = str.replace(/([A-Z])/g, ' $1');
  return `${newStr.charAt(0).toUpperCase()}${newStr.substring(1)}`;
}
