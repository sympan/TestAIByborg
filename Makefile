docker-build:
	docker build -t testaibyborg .

test-allure-report:
	docker run -it --rm --ipc=host -v $(PWD)/output:/app/output -v $(PWD)/allure-results:/app/allure-results testaibyborg sh -c "npx codeceptjs run --steps --plugins allure"

test-workers:
	docker run -it --rm --ipc=host -v $(PWD)/output:/app/output -v $(PWD)/allure-results:/app/allure-results testaibyborg sh -c "npx codeceptjs run-workers 2"

test-allure-stepByStepReport:
	docker run -it --rm --ipc=host -v $(PWD)/output:/app/output -v $(PWD)/allure-results:/app/allure-results testaibyborg sh -c "npx codeceptjs run --steps --plugins  stepByStepReport"

run-single-test:
	docker run -it --rm --ipc=host -v $(PWD)/output:/app/output -v $(PWD)/allure-results:/app/allure-results testaibyborg sh -c "npx codeceptjs run --grep \"Check signup modals on expert's page when clicking addToFavouritesButton\""



