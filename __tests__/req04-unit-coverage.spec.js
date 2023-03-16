const {
  executeTests,
  readCoverageFile,
  assertCoveragePercentage,
  clearNycCoverage,
} = require('./nyc-coverage');

describe('04 - Testes unitários da camada Model construídos', () => {
  let coverageResults;
  let coverageResultsArr;

  beforeAll(async (done) => {
    await executeTests();
    coverageResults = await readCoverageFile();
    coverageResultsArr = Object.entries(coverageResults);
    done();
  });

  afterAll(async (done) => {
    await clearNycCoverage();
    done();
  });

  it('Será validado que cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 70%', () => {
    assertCoveragePercentage(coverageResultsArr, 70, 1);
  });

  it('Será validado que cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 80%', () => {
    assertCoveragePercentage(coverageResultsArr, 80, 1);
  });

  it('Será validado que cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 90%', () => {
    assertCoveragePercentage(coverageResultsArr, 90, 1);
  });
});
