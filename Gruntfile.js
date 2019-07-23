const config = require('./config');

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: `https://${config.env}.${config.domain}`,
    suite: config.suite,
    maxInstances: config.maxInstances,

    greetingMessage: 'Running project: <%= pkg.name %>, Version: <%= pkg.version %>',
    eslintSuccessMessage: 'ESLint: 0 errors, 0 warnings',
    clean: {
      errorShots: ['errorShots'],
      reports: ['allure-results', 'allure-report'],
    },
    eslint: {
      options: {
        config: './.eslintrc',
      },
      target: ['test/steps/*.js'],
    },
    webdriver: {
      options: {
        suite: '<%= suite %>',
        baseUrl: '<%= env %>',
        maxInstances: '<%= maxInstances %>',
      },
      test: {
        configFile: './wdio.conf.js',
      },
    },
    exec: {
      createHtmlReport: {
        command: '"node_modules/.bin/allure" generate ./allure-results -c && "node_modules/.bin/allure" open',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-continue');

  grunt.registerTask('print-info', 'Lets print some info about the project.',
    () => {
      grunt.log.write(grunt.config('greetingMessage'));
    });
  grunt.registerTask('print-linting-success-message', 'Print successful code linting message.',
    () => {
      grunt.log.write(grunt.config('eslintSuccessMessage'));
    });

  grunt.registerTask('default', [
    'print-info',
    'clean:errorShots',
    'clean:reports',
    'eslint',
    'print-linting-success-message',
    'continue:on',
    'webdriver',
  ]);

  grunt.registerTask('api', [
    'clean:mochaData',
    'eslint',
    'print-linting-success-message',
    'mochaTest',
  ]);

  grunt.registerTask('createHtmlReport', [
    'exec:createHtmlReport',
  ]);
};
