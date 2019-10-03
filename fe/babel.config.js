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
const plugins = [
    'transform-class-properties'
];


module.exports = { presets, plugins };
