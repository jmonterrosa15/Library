export interface Book{
    key$?:string;
    title: string;
    author: string;
    numberOfPages: number;
    isRead: boolean;
}

export interface Update{
    id:string;
    updates?:any;
}