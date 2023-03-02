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
            dir('frontend'){
                sh 'docker build  -t kavin22/repository_one:frontend .'
            }
            dir('backend'){
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

