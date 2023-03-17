const { expect } = require('chai');
const sinon = require('sinon');
const { driverModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { expected } = require('./mocks/drivers.model.test');

describe('Testes de unidade do model de drivers', function () {
  afterEach(sinon.restore);

  it('Listar todos os drivers', async function () {
    sinon.stub(connection, 'execute').resolves([expected]);
    const result = await driverModel.findAll();
    expect(result).to.equal(expected);
  });
});
