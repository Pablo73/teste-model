describe('02 - Criação do arquivo do driverModel', () => {
  it('Será verificado se o arquivo driver.model.js existe', async () => {
    expect(() => {
      require('../src/models/driver.model');
    }).not.toThrow();
  });

  it('Será verificado se o arquivo driver.model.js exporta um objeto', async () => {
    expect(typeof require('../src/models/driver.model')).toBe('object');
  });

  it('Será verificado se o index exporta o modelo driver', async () => {
    expect(require('../src/models').driverModel).not.toBe(undefined);
    expect(typeof require('../src/models').driverModel).toBe('object');
  });
});
