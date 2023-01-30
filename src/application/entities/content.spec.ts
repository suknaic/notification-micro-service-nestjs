import { Content } from './content';

describe('Notification Content Value Object', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('voce recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able notification content with less than 5 characters', () => {
    expect(() => new Content('sol')).toThrow();
  });

  it('should not be able notification content with more than 240 characters', () => {
    expect(() => new Content('sol'.repeat(241))).toThrow();
  });
});
