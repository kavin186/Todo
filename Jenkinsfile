pipeline {
    agent any
    stages {
        
        stage('Git Checkout'){
        steps{
                git branch: 'main', credentialsId: '54fa4530-c347-42db-91dd-d776232b5ab8', url: 'https://github.com/Kavin-bootlabs/cicd_demo.git'
            }
        }
        stage('Build Docker image') {
        steps {
                sh 'docker build -f frontend/Dockerfile -t kavin22/repository_one:frontend .'
                sh 'docker build -f backend/Dockerfile -t kavin22/repository_one:backend .'
            }
        }
        stage('Push Docker image') {
            steps {
               withCredentials([string(credentialsId: 'Dockerpwd', variable: 'Docker-psw')]) {
                sh 'docker login -u kavin22 -p ${Docker-psw}'
            }
               sh 'docker push kavin22/repository_one:frontend'
               sh 'docker push kavin22/repository_one:backend'
            }
        }
    }
}

