const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                chrome: '40',
            },
        },
    ],
    '@babel/typescript',
    '@babel/preset-react',
];

module.exports = { presets };
