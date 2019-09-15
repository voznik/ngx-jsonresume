import { ArrayTypeComponent } from './array.type';
import { ObjectTypeComponent } from './object.type';

export const TYPES_COMPONENTS = [ArrayTypeComponent, ObjectTypeComponent];

export const TYPES = [
  { name: 'string', extends: 'input' },
  {
    name: 'number',
    extends: 'input',
    defaultOptions: {
      templateOptions: {
        type: 'number',
      },
    },
  },
  {
    name: 'integer',
    extends: 'input',
    defaultOptions: {
      templateOptions: {
        type: 'number',
      },
    },
  },
  { name: 'boolean', extends: 'checkbox' },
  { name: 'enum', extends: 'select' },
  // { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
  { name: 'array', component: ArrayTypeComponent },
  { name: 'object', component: ObjectTypeComponent },
];
