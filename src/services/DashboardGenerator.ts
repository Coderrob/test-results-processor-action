import * as fs from 'fs'
import { Summary, DashboardData, TestSuite } from '../types'

export class DashboardGenerator {
  private summary: Summary

  constructor(summaryPath: string) {
    this.summary = this.readJsonFile<Summary>(summaryPath)
  }

  private readJsonFile<T>(path: string): T {
    return JSON.parse(fs.readFileSync(path, 'utf-8'))
  }

  public generate(): void {
    const dashboardData = this.prepareDashboardData()
    this.writeDashboardData(dashboardData)
  }

  private prepareDashboardData(): DashboardData {
    const dashboardData: DashboardData = {
      failures: [],
      passes: [],
      skipped: [],
      dates: [],
    }

    this.summary.testSuites.forEach((suite: TestSuite) => {
      dashboardData.failures.push(suite.failed)
      dashboardData.passes.push(suite.passed)
      dashboardData.skipped.push(suite.skipped)
      dashboardData.dates.push(suite.name)
    })

    return dashboardData
  }

  private writeDashboardData(dashboardData: DashboardData): void {
    const dashboardDataPath = 'dashboard_data.json'
    fs.writeFileSync(dashboardDataPath, JSON.stringify(dashboardData, null, 2))
  }
}
