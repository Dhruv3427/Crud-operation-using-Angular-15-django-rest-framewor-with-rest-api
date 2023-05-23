export interface Publishers {
    id: number; 
    name: string;
  }

export class PublishersC {
    id: number; 
    name: string;
    constructor(obj?: Publishers) {
        this.name = obj && obj.name || '';
        this.id= obj && obj.id || 0
    }
}