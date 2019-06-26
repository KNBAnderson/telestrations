export class Sheet {
    writing: string = '';
    drawingUrl: string = '';
    
    constructor() {}

    writeSomething(newWriting: string) {
        this.writing = newWriting;
        this.drawingUrl = null;
    }

    drawSomething(newDrawingUrl: string) {
        this.writing = null;
        this.drawingUrl = newDrawingUrl;
    }
}
