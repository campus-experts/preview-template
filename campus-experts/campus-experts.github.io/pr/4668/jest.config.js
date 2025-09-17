/** @type {import('@endbug/jest-pr-reporter').ReporterOptions} */
const reporterOptions = {
  githubToken: process.env.GH_TOKEN,
  owner: process.env.GITHUB_REPOSITORY_OWNER,
  repo:
    process.env.GITHUB_REPOSITORY &&
    process.env.GITHUB_REPOSITORY.split('/')[1],
  prNumber: Number(process.env.PR_NUMBER),
  sha: process.env.GITHUB_SHA,
  workspace: process.env.GITHUB_WORKSPACE,
  workflowRunId: process.env.GITHUB_RUN_ID,
  jobName: process.env.GITHUB_JOB,
  customHeader: 'jest-tests',
  footerFailed: `## 🛠️ Next Steps

1. **Review** the failing tests above
2. **Fix** your files so that the tests pass
3. **Push changes** and ensure CI passes

> [!TIP]
> Need help? Check the [README](https://github.com/campus-experts/campus-experts.github.io#readme) or ask in the Discord.
`.trim(),
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: '<rootDir>/_scripts/jest-global-setup.ts',
  setupFilesAfterEnv: ['<rootDir>/_scripts/jest-setup.ts'],
  reporters:
    process.env.GITHUB_EVENT_NAME === 'pull_request'
      ? [['@endbug/jest-pr-reporter', reporterOptions], 'summary']
      : ['default'],
};
