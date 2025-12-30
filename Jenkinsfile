pipeline {
    agent any

    environment {
        VALIDUSERNAME = credentials('VALIDUSERNAME')
        VALIDPASSWORD = credentials('VALIDPASSWORD')
        INVALIDUSERNAME = credentials('INVALIDUSERNAME')
        INVALIDPASSWORD = credentials('INVALIDPASSWORD')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ci'
            }
        }

        stage('Install Playwright browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}