import { AbstractModel } from './AbstractModels';

export interface User extends AbstractModel {
  id: string;
  email: string;

 }