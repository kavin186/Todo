pipeline {
    agent any
    stages {
        
        
        stage('Build Docker image') {
        steps {
            dir('frontend'){
                sh 'pwd'
                sh 'ls'
                sh 'docker build  -t kavin22/repository_one:frontend .'
            }
            dir('backend'){
                sh 'pwd'
                sh 'ls'
                sh 'docker build  -t kavin22/repository_one:backend .'
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

