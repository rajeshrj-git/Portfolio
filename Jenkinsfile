pipeline {
  agent any
  environment {
    REPO = 'https://github.com/rajeshrj-git/Portfolio.git'
    BRANCH = 'main'
    BUILD_DIR = 'out'  // ✅ Next.js uses 'out/'
  }
  stages {
    stage('Checkout') {
      steps { git branch: env.BRANCH, url: env.REPO, credentialsId: 'github-credentials' }
    }
    stage('Install & Build') {
      steps {
        sh 'npm install'
        sh 'npm run build && next export'  // ✅ Generates /out
      }
    }
    stage('Deploy') {
      steps {
        sh 'npx gh-pages -d ${BUILD_DIR} --repo ${REPO}'
        echo "✅ Deployed: https://rajeshrj-git.github.io/Portfolio/"
      }
    }
  }
}
