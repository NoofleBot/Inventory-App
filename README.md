# Inventory Management App

This app is meant to perform inventory management, to install and run it please use the instructions below.

## Installation Instructions
1. Clone the repository to your computer
```bash
git clone https://github.com/NoofleBot/Inventory-App
```

2. Change directory into the repository
```bash
cd Inventory-App
```

**SERVER SETUP:**

3. Run the docker compose file to initalize a containerized postgres database
```bash
docker compose up -d
```

4. Change directory into the server folder
```bash
cd server
```

5. Install the required server side npm modules with:
```bash
npm install
```

6. Run the migrations to establish the inventory database's schema
```bash
npx knex migrate:latest
```

7. Startup the express API server (detached from terminal)
```bash
(npm run express&)
```

**FRONTEND SETUP:**

7. Change directory into the frontend folder
```bash
cd ../frontend
```

8. Install the required npm modules with
```bash
npm install
```

9. Run the frontend
```bash
npm run frontend
```

10. Open the frontend in a browser by typing "o" and then pressing enter in the terminal window

<sub><sub>Alternatively go to [http://localhost:5173/](http://localhost:5173/ "Localhost at port 5173 using unsecured hypertext transfer protocol") in a web browser of your choice (**NOTE: Only Google Chrome is explicitly supported**)</sub></sub>
