pipeline {
    agent any

    environment {
        BASE_URL = 'https://demowebshop.tricentis.com'
        EMAIL = 'your-email@example.com'
        PASSWORD = 'your-password'
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
                export PATH=$HOME/.nvm/versions/node/v22.19.0/bin:$PATH
                node -v
                npm -v
                '''
            }
        }

        stage('Create Environment File') {
            steps {
                sh '''
                cat > .env << EOF
                BASE_URL=$BASE_URL
                EMAIL=$EMAIL
                PASSWORD=$PASSWORD
                EOF

                echo "===== ENV FILE ====="
                cat .env
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                export PATH=$HOME/.nvm/versions/node/v22.19.0/bin:$PATH
                npm install
                '''
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh '''
                export PATH=$HOME/.nvm/versions/node/v22.19.0/bin:$PATH
                npm run cy:chrome
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
        }

        success {
            echo 'Pipeline Passed'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}