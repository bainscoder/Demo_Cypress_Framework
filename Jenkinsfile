pipeline {
    agent any

    environment {
        PATH = "/Users/vinaykumar/.nvm/versions/node/v22.19.0/bin:${env.PATH}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cy:chrome'
            }
        }
    }
}