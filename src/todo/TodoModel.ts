import { v4 as uuidv4 } from 'uuid';

export class TodoModel {
  id: number;
  name: string;
  description: string;
  date: Date;
  status: string;
  constructor(name: string, description: string) {
    this.id = uuidv4();
    this.date = new Date(Date.now());
    this.name = name;
    this.description = description;
    this.status = TodoStatusEnum.waiting;
  }
}

export enum TodoStatusEnum {
  'waiting' = 'En attente',
  'actif' = 'En cours',
  'done' = 'Finalisé',
}
