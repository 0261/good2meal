module.exports = {
    displayName: {
        name: 'good2meal.be',
        color: 'blue',
    },
    verbose: true,
    // notify: true,
    // notifyMode: 'always',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'js'],
    globals: {
        'ts-jest': {
            diagnostics: true,
        },
    },
};
