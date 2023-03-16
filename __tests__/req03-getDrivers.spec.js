const { runSeed, connect } = require('./_utils');
const frisby = require('frisby');
const { allDriversResponse } = require('./_dataMock');
require('dotenv').config();

describe('03 - O endpoint /drivers deve estar funcionando corretamente', () => {
  const url = `http://${process.env.HOST}:${process.env.PORT}`;

  beforeAll(async () => await runSeed());
  afterAll(async () => await connect().end());

  it('Será validado o acesso ao endpoint através da rota /drivers', async () => {
    const { status } = await frisby.get(`${url}/drivers`);

    expect(status).toBeLessThan(400);
  });

  it('Será validado que é possível listar todos os motoristas', async () => {
    const { status, json } = await frisby.get(`${url}/drivers`);

    expect(status).toBe(200);
    expect(json).toEqual(allDriversResponse);
  });
});
