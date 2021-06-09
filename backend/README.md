CZ:

Jediný požadavek pro spuštění aplikace je nainstalováný framework node.js (min. LTS).

Postup:

1, Zkopírování souboru .env.sample do .env a dle potřeby nastavení proměnných prostředí (stačí nechat tak jak jsou případně si upravit dle sebe ORIGIN_FRONTEND - doména originu včetně portu odkud se budou provolávat GraphQL API requesty z externí aplikace)
2, Instalace node_modules balíčků pomocí příkazu npm install (případně yarn install)
3, Sestavení aplikace za pomocí příkazu npm run build (případně yarn build) 
4, Spuštění aplikace pomocí npm run start (případně yarn start)


EN:

The only requirement to run the application is the installed framework node.js (min. LTS).

Workflow:

1, Copying the .env.sample file to .env and setting the environment variables as needed (just leave ORIGIN_FRONTEND - the domain of the origin including the port from which the GraphQL API requests from the external application will be called)
2, Installing node_modules packages using the npm install command (or yarn install)
3, Build the application using the npm run build command (or yarn build)
4, Starting the application using npm run start (or yarn start)