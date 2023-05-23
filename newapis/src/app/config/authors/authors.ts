export interface Authors {
    id: number; 
    name: string;
  }

export class AuthorsC {
    id: number; 
    name: string;
    constructor(obj?: Authors) {
        this.name = obj && obj.name || '';
        this.id= obj && obj.id || 0
    }
}