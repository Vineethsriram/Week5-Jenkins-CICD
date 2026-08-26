pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'node --version'
                sh 'node app.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'node app.test.js'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the console output above.'
        }
    }
}
