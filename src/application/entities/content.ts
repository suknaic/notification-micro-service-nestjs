export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContenteLengthValid = this.validadeContentLength(content);

    if (!isContenteLengthValid) throw new Error('Content Length Error');

    this.content = content;
  }
}
