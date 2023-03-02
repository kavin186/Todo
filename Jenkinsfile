pipeline {
    agent any
    stages {
        
        
        stage('Build Docker image') {
        steps {
            dir('frontend'){
                sh 'docker build -t kavin22/frontend:v1.0 .'
            }
            dir('backend'){
                sh 'docker build -t kavin22/backend:v1.0 .'
            }
                
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

