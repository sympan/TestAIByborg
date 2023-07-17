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
docker --version
allure --help
wsl # Launches a Linux-based terminal
git --version
```

If all the above are installed and working then we can proceed with assesing the deliverable.

NOTE:
The repository contains a Dockerfile to build the appropriate docker Image ( fully prepare the docker image) and a makefile will be used to manage this test project, once a user clones this repository.

START: clone the reporitory

Summarized workflow:
Build the image
Run the container (after stopping existing)
Execute the tests
Generate a static allure report or allure results in the DockerImage
Export the report or the test results locally automatically after mounting the folders respectively

Workflow using the make file
Use the following commands:
```shell
make => to build the image
make test-allure-report => Run all tests with allure report and export the results in the local repo.
make test-workers => run the app with 2 workers for faster execution
make test-allure-stepByStepReport => to generate a stepByStepReport and export it in the output folder of the local repo.
```

All the tests are executed in the Docker container.
Upon completion the results are copied in the local folders (allure-results && output)
Now we can launch Allure in our local machine to see the test results

We can't run allure in the container or the wsl because they are not configured to support engines to launch graphs and windows.
This is why we installed allure locally on our machine.
Now that we have mounted the folders from the container where the results are generated,
we copy the results from the container to the local repo.

However the user can type `make help` to see all the available targets I have provided to run these tests.

Note: It is important to choose an active expert (one that is LIVE)
Please find one and replace the name of the existing expert in the feature files.
Example: Given I check that the "PsychicRider" is LIVE
Action: update the name included in the quotes "PsychicRider"

This assignment was a great experience for me and I learned much about Docker and codeceptJS.
After all it was also fun and It's the main reason I wanted to participate.
