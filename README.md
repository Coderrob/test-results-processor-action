# test-trends-action

GitHub Action to create or update GitHub Pages with latest test results and test run insights.

```yaml
jobs:
  process-and-publish-test-results:
    uses: Coderrob/test-results-processor-action/.github/workflows/test-results-processor-workflow.yml@v1
    with:
      test-results: 'test_results.zip'
      github-token: ${{ secrets.GITHUB_TOKEN }}
```
