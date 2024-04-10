# IUG2024

This project is a sample project for the Sofware AG IUG 2024 showcasing how easy it is to make a CI/CD workflow and deploying your own application. 

To recreate this demo you need to:

1. Create a new Angular 16 project:
```bash 
npx @angular/cli@v16-lts new my-app-name --defaults --style=less --routing
```

2. Add the @c8y/websdk (following the prompts to decide which kind of application to use. Best use the blueprint-package)
```bash 
cd my-app-name
ng add @c8y/websdk
```

3. Build your solution by running it locally:
```bash
ng serve -u http://yourtenant.cumulocity.com
```

4. Create a github workflow file to (this example using github workflows, it should be easy to use align it to anything else). Remember to create `c8y_password` secret adm align username and password.
```yaml
name: Angular C8Y Deployment
on:
  push:
    branches:
      - main

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Use Node.js 18
      uses: actions/setup-node@v1
      with:
        node-version: 18

    - name: Install Dependencies
      run: |
        npm ci

    - name: Deploy to C8Y
      env:
        C8Y_PASSWORD: ${{ secrets.c8y_password }}
      run: |
        ng deploy -U jan -P $C8Y_PASSWORD -T t81796392 -u http://jan.latest.stage.c8y.io
```

5. Add the repo to github
```
git remote add origin git@github.com:{{username}}/iug.git
git branch -M main
git push -u origin main
```

👀 check your tenant how it is automatically deployed.