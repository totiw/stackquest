const execSync = require("child_process").execSync;
require("dotenv").config();

const DEFAULT_HOST = "0.0.0.0";
const DEFAULT_PORT = 3000;

const EXE_HOST = process.env.HOST || DEFAULT_HOST;
const EXE_PORT = process.env.PORT || DEFAULT_PORT;

execSync(`npx next dev -H ${EXE_HOST} -p ${EXE_PORT}`);
