export class Quote {
    showDescription:Boolean;
    constructor(public Name:string, public quote: string, public author:string, public completeDate: Date, public upvote:number, public downvote:number){
        this.showDescription=false;
    }
    // Name: string
    // quote: string
    // author: string
}
