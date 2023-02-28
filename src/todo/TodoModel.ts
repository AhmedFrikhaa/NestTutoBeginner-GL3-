export class TodoModel {
  id: string;
  name: string;
  description: string;
  date: Date;
  status: string;
  constructor(id: string, name: string, description: string) {
    this.id = id;
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
