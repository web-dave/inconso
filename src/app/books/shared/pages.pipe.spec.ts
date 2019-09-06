import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return "Ping: 300"', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform(300, 'Ping')).toBe('Ping: 300');
  });
  it('should return "S.=> 300"', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform(300, 'S.', '=>')).toBe('S.=> 300');
  });
  it('should return "Seitenzahl: 300"', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform(300)).toBe('Seitenzahl: 300');
  });
});
