pipeline {
    agent any

    tools {
        nodejs 'Node18' // Must match the NodeJS tool name from Jenkins config
    }

    environment {
        VALIDUSERNAME = credentials('VALIDUSERNAME')
        VALIDPASSWORD = credentials('VALIDPASSWORD')
        INVALIDUSERNAME = credentials('INVALIDUSERNAME')
        INVALIDPASSWORD = credentials('INVALIDPASSWORD')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning the repository...'
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                echo 'Installing packages...'
                sh 'npm ci'
            }
        }

        stage('Install Playwright browsers') {
            steps {
                echo 'Installing required browsers...'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright tests') {
            steps {
                echo 'Executing Playwright tests...'
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Archiving Playwright report...'
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
        failure {
            echo 'One or more tests failed.'
        }
    }
}
