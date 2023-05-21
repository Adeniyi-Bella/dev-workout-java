# DEVELOPER WORKOUT

![image](https://github.com/Adeniyi-Bella/dev-workout-java/assets/37347588/6b416d2e-01dc-468c-b94e-f755baac40e3)

Aufgabe ist es eine Spring Boot Anwendung zu erstelle, welche über die REST-Schnittstelle /articles alle Einträge aus der Datei "assets/articles.json" liefert. Zusätzlich soll die Schnittstelle über eine Filterfunktionalität verfügen, so dass nach Tags gefiltert werden kann. 

## Anforderungen ##

- Spring Boot verwenden
- Gradle als Build Tool
- /articles liefert alle Artikel
- /articles erlaubt eine Filterung über Tags mit z.B. Parametern
- Grundfunktionalitäten sind getestet
- ... feel free to add some sugar to show your skills

## Technologies ##
- Frontend was a react project bootstrapped with vite.js.
- Backend was a java project bootstrapped with springboot and gradle as build tool according to the requirement.

## Good to know ##
- /articles returns all the articles
- To filter the articles according to tags, the search input was implemented on the front end. 
- No DB or DB migration was considered for this project. The rest controller consumed json data directly from the json file in resources. 

## Getting started ##
- First clone the repo.
- cd into repo directory.
- Start the server
```
directly from the IDE UI e.g intellij
# or
./gradlew bootRun
```
- The server is availale locally on port 8080
- Start the frontend
```
cd into src/main/reactUI
npm i
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
