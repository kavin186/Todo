pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('docker-psw')
	}

	stages {

        stage('Git Checkout'){

        steps{
                git branch: 'main', credentialsId: '54fa4530-c347-42db-91dd-d776232b5ab8', url: 'https://github.com/Kavin-bootlabs/cicd_demo.git'
            }
        }

		stage('Build') {

			steps {
				sh 'docker build -f frontend/Dockerfile -t kavin22/repository_one:frontend .'
                sh 'docker build -f backend/Dockerfile -t kavin22/repository_one:backend .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
                
				sh 'docker push kavin22/repository_one:frontend '
                sh 'docker push kavin22/repository_one:backend '
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}