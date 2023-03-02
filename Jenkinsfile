pipeline {
    agent any
    stages {
        
        
        stage('Build Docker image') {
        steps {
            sh 'pwd'
            sh 'ls'
            dir('frontend'){
<<<<<<< HEAD
                sh 'docker build -t kavin22/frontend:v1.0 .'
            }
            dir('backend'){
=======
                sh 'pwd'
                sh 'ls'
                sh 'docker build -t kavin22/frontend:v1.0 .'
            }
            dir('backend'){
                sh 'pwd'
                sh 'ls'
>>>>>>> 0a5b50c32b7493280e393a74092387716757ecc1
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

