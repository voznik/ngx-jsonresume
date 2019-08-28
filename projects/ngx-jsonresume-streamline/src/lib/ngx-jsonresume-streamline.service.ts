import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NgxJsonresumeStreamlineService {
  constructor(private http: HttpClient) {}

  loadExample(type: string = 'resume') {
    // return this.http.get<any>(`assets/json-schema/${type}.json`);
    return this.http.get<any>(`https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json`);
  }
}
