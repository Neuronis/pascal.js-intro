
import { runFile, insp } from '../../helpers/testsHelper';

let pjs = runFile(import.meta.url, 'base.code');

test('MyTest', () => {
  expect(pjs.engine.results[0]).toBe(14);
});