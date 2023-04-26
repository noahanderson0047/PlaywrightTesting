import {Reporter} from '@playwright/test/reporter'
import * as fs from 'fs'

class MyReporter implements Reporter{
    onBegin(config, suite){
        console.log(`Execution of ${suite.allTests().length} test`)
    }

    onEnd(result){
        console.log(`Execution finished with status of ${result.status}`)
    }

    onTestBegin(test){
        console.log(`Execution of ${test.title} started`);
    }

    onTestEnd(test, result){
        const executionTime = result.duration;

        const data = {
            test: test.title,
            status: result.status,
            executionTime: executionTime,
            errors: result.errors,
        };
        const dataString = JSON.stringify(data, null, 2)
        console.log(dataString)

        fs.writeFileSync("test-result.json", dataString);
    }
}

export default MyReporter;
