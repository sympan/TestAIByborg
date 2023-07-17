# ByBorg-IP

Recruitment Assignment

This project is a skills assessment in test automation.
CodeceptJS and BDD are used to perform tests on 3 different quiz questions regarding the Oranum.com website, which is based on a white-labeled online platform.

In order to execute the test code available in this repository, it is required for users to satisfy some specific environment setup. We will use a Windows setup for this assignment, but it can definitely apply to Linux users as well.

Please ensure that you have installed the following:

- Docker Desktop
- Java
- Allure: Download and unzip it in C:/, then add it to the environment PATH variable. This allows running `allure serve <folder>` to launch a service for displaying the test results.
- WSL2 (If you are a Windows user)
- Git (if you don't use an IDE like VSCode)
- VSCode or another editor/IDE for easier code review and pull requests from GitHub.

To validate that all of the above is installed and working correctly, open a command prompt and run the following commands:

```shell
java --version
docker --version
allure --help
wsl # Launches a Linux-based terminal
git --version
```

If all the above are installed and working then we can proceed with assesing the deliverable.

NOTE:
The repository contains a Dockerfile to build the appropriate docker Image ( fully prepare the docker image) and a makefile will be used to manage this test project, once a user clones this repository.

How to START: clone the reporitory

Summarized workflow using the makefile:
Build the image
Run the container (after stopping existing)
Select and configure in the features a LIVE expert, if we want to pass all the tests.
Execute the desired targets
Launch the report or the test results locally using 
```shell
allure serve allure-results
```
Or open the .html file in the ./outputs folder

Note: It is important to choose an active expert (one that is LIVE) to pass all the tests.
Please find one and replace the name of the existing expert in the feature files.
Example: Given I check that the "PsychicRider" is LIVE
Action: update the name included in the quotes "PsychicRider"

In case the selected expert is not LIVE relative error messages with be thrown and the tests for quiz3 will fail.


Workflow using the make file
Use the following commands:
```shell
make => to build the image
make test-allure-report => Run all tests with allure report and export the results in the local repo.
make test-workers => run the app with 2 workers for faster execution
make test-allure-stepByStepReport => to generate a stepByStepReport and export it in the output folder of the local repo.
make run-single-test
```
If we want to run another single test using the ```make run-single-test```
simple copy from the features file the scenario you want and the update the make file command:
```shell
docker run -it --rm --ipc=host -v $(PWD)/output:/app/output -v $(PWD)/allure-results:/app/allure-results testaibyborg sh -c "npx codeceptjs run --grep \"<scenario>\""
```

All the tests are executed in the Docker container.
Upon completion the results are copied in the local folders (allure-results && output)
Now we can launch Allure in our local machine to see the test results

We can't run allure in the container or the wsl because they are not configured to support engines to launch graphs and windows.
This is why we installed allure locally on our machine.
Now that we have mounted the folders from the container where the results are generated,
we copy the results from the container to the local repo automatically.

This assignment was a great experience for me and I learned much about Docker and codeceptJS.
After all it was also fun and It's the main reason I wanted to participate.

Many parts of the code can be improved using alongside more global parameters in the config.js file.
Additionally we can enhance the make file with more useful commands to run tests individually.
The allure reporting could also be improved to add more tags and provide a more meaningful report that wasn't the target of this assignment.
In the future we can add proper configuration to support the Test Suite of the product with proper reporting information.
