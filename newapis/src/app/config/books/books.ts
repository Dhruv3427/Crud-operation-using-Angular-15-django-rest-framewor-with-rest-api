export class Books {
    id?: any;
    content?: string;
    name?: string;
    page?: string;
    authors_id?: number;
  }

  export class BooksC {
    content?: string;
    name?: string;
    page?: string;
    authors_id?: number;
    constructor(obj?: Books) {
        this.name = obj && obj.name || ''
        this.content = obj && obj.content || ''
        this.page = obj && obj.page || ''
        this.authors_id = obj && obj.authors_id || 0
    }
}