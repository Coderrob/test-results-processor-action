import core from '@actions/core'
import { DashboardGenerator } from './services'
;(async function () {
  const testResults = core.getInput('test-results')
  const pagesRepo = core.getInput('pages-repo')

  const dashboardGenerator = new DashboardGenerator(summaryPath)
  dashboardGenerator.generate()
})()
