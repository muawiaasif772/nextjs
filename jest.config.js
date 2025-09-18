module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  presets: [
    '@babel/preset-env',
     "@babel/preset-react",// Enables JSX
       "@babel/preset-typescript"

  ],

transform: {
  "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./babel-jest.config.js" }]
}
,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
