pipeline {
    agent any

    tools {
        nodejs 'Node18'  // Point to manually installed Node
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
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
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
            // Make sure this runs inside a node/workspace
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
        failure {
            echo 'Tests failed. Check the report.'
        }
    }
}