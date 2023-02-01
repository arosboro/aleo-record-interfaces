/** @type {import('ts-jest').JestConfigWithTsJest} */
import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testRegex: "./tests/.*.tests.ts$",
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;