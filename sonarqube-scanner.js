const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://localhost:9000",
  login:"admin",
  password:"1234",
  options: {
    "sonar.sources": "./src",
	  "sonar.tests": "./src",
	  "sonar.test.inclusions": "**/*.test.jsx,**/*.test.js",
    "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml"
  },
},
() => process.exit()
);