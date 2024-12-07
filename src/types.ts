export const UTF_8 = 'utf-8'

export enum TestType {
  CUCUMBER = 'cucumber',
  JUNIT = 'junit',
  JUNIT_V2 = 'junit-v2',
  MOCHA = 'mocha',
  MSTEST = 'mstest',
  NUNIT = 'nunit',
  XUNIT = 'xunit',
}

export enum TestStatus {
  PASS = 'PASS',
  FAIL = 'FAIL',
}

export interface TestCase {
  id: string
  name: string
  total: number
  passed: number
  failed: number
  errors: number
  skipped: number
  duration: number
  status: string
  failure?: string
  stackTrace?: string
  tags: string[]
  metadata: Record<string, any>
  steps: any[]
  attachments: any[]
}

export interface TestSuite {
  id: string
  name: string
  total: number
  passed: number
  failed: number
  errors: number
  skipped: number
  duration: number
  status: string
  tags: string[]
  metadata: Record<string, any>
  cases: TestCase[]
}

export interface Summary {
  testSuites: TestSuite[]
}

export interface DashboardData {
  failures: number[]
  passes: number[]
  skipped: number[]
  dates: string[]
}
