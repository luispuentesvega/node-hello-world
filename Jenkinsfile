pipeline {
  agent any
  tools {node "node" }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/luispuentesvega/node-hello-world'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}