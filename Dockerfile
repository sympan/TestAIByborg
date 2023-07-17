# Use Ubuntu as the base image
FROM mcr.microsoft.com/playwright:v1.36.0-jammy

# Update package repositories and install dependencies
RUN apt-get update && \
    apt-get install -y curl unzip openjdk-8-jdk

# Install Allure from Maven repository - We can use it in case we want static report generation
RUN curl -o allure-2.14.0.zip -Ls https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.14.0/allure-commandline-2.14.0.zip && unzip allure-2.14.0.zip && rm allure-2.14.0.zip && ln -s allure-2.14.0 allure

# Set the working directory
WORKDIR /app

# Copy the "TestAIByborg" project to the container
COPY . /app

# Export the "output" and "allure-results" folders
VOLUME /app/output
VOLUME /app/allure-results

# Run npm install to install project dependencies
RUN npm install
RUN npm fund

# Run codecept JS tests and generate an Allure report
CMD ["npx", "codeceptjs", "run", "--steps", "--plugins", "allure"]
