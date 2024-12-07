import fs from 'fs'
import { parse } from 'test-results-parser'
import { TestType } from '../types'

const { log } = console

describe('DashboardGenerator', () => {
  describe('parser', () => {
    it('should read a test file', () => {
      const mochaResultsFilePath =
        './tests/data/multiple-suites-multiple-tests.json'
      const data = fs.readFileSync(mochaResultsFilePath)
      expect(data).toBeDefined()
      const result = parse({
        type: TestType.MOCHA,
        files: [mochaResultsFilePath],
      })
      log(JSON.stringify(result))
    })
  })
})
