export class CommentModel {
    displayName: string;
    message: string;
    createdAt: Date;
    constructor(displayName: string, message: string, createdAt: Date) {
        this.displayName = displayName;
        this.message = message;
        this.createdAt = createdAt;
    }

}
