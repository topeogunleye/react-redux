module.exports = {
    extends: [
      // Extend from plugin configs to get recommended rules.
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      // Disable formatting rules in ESLint that Prettier will handle.
      // Make sure this is the last config to override others.
      'eslint-config-prettier',
    ],
    settings: {
      react: {
        // Automatically detect the version of React to use.
        version: 'detect',
      },
      // Configure how ESLint resolves imports.
      'import/resolver': {
        node: {
          paths: ['src'], // Specify your source directory.
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      // Add your custom rules here to override extended configs.
    },
  };
  