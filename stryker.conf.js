/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress', 'dashboard'],
    testRunner: 'jest',
    coverageAnalysis: 'perTest',
    files: ['**/*.js', '__tests__/**/*.js'],
    mutate: ['index.js'],
}
