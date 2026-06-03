pipeline {

    agent any

    environment {
        PATH = "/Users/vinaykumar/.nvm/versions/node/v22.19.0/bin:${env.PATH}"

        BASE_URL = "https://demowebshop.tricentis.com"
        EMAIL = "test+20@gmail.com"
        PASSWORD = "Test@123"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/bainscoder/Demo_Cypress_Framework.git'
            }
        }

        stage('Node Version') {
            steps {
                sh '''
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cy:chrome'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npm run allure:generate'
            }
        }
    }

    post {

        always {


            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true

            archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
        }

        success {
            echo 'Cypress Pipeline Passed'
        }

        failure {
            echo 'Cypress Pipeline Failed'
        }
    }
}