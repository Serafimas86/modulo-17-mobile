import { config } from './wdio.conf.js';
import { deviceName, platformVersion, app } from './android.info.js';
import { resolve } from 'path';

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        "appium:deviceName": deviceName,
        "appium:platformVersion": platformVersion,
        "appium:app": resolve('app/' + app),
        "appium:automationName": 'uiautomator2',
        "appium:noReset": true,
        "appium:fullReset": false, 
        "appium:appWaitActivity": "*"
    }
];

config.specs = [
    '../src/specs/*.js'
];

const _config = config;
export { _config as config };