describe('01 - Estrutura básica', () => {
  it('Será verificado a existência dos arquivos models/index e a exportação que ele faz', async () => {
    expect(() => {
      require('../src/models');
    }).not.toThrow();

    expect(typeof require('../src/models')).toBe('object');
    expect(require('../src/models')).toHaveProperty('passengerModel');
  });
});
