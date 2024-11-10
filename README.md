### Running development environment
`docker compose --profile dev build`   
`docker compose --profile dev up -d`

### Running production environment
`docker compose --profile prod build`   
`docker compose --profile prod up -d`

### Application
In the development environment, you can freely modify any resources in the `frontend/app` and `backend/app` folder, with updates appearing instantly in the system.
When moving to production, all data from this folder is copied into the app container volume for a smooth deployment.
