# Next.js Frontend of Wordsmith

This project contains the Next.js app that acts as the frontend for the Wordsmith web app.

## Setup
To get a dev environment up-n-running, start by installing all of the dependencies using `npm install`. To run the service, you must also have access to a running instance of the [Wordsmith backend](https://github.com/htimsdroW/func-reversify). There are instructions on how to setup that service in its `README.md`. If you have access to the live testing environment, you can use that instead.

### Configuration
There are two environment variables that are required: REVERSIFY_FUNCTION_HOST and
REVERSIFY_FUNCTION_KEY. These should both be assigned in a file that has the name `.env.local` that, in turn, must reside in the project's root directory. You can use `.env.example` as a template. If you're using a local instance of the backend, then the REVERSIFY_FUNCTION_KEY value can be left blank. This because local Azure Functions require not access keys.

The local environment file, if it exists, will override the project variables that are available in `next.config.js`. That file is committed, and should not contain any secrets.

## Release

Continuous development was set up using Azure's source control integration for [Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid#create-a-static-web-app). Any commits to the main branch are built server-side; and if successful, the code is automatically deployed to the cloud service. **NOTE**: do not give unknown people merge-rights to main. The same guid can be followed if there is a desire to host the service at a new location. Do note, however, that the backend's access key must be manually entered as a Configuration if that is the case. Whereas the backend is coupled with the Azure ecosystem, this app should be deployable to most any hosting service.

## Scripts

### start dev environment
To start a dev environment, run `npm run dev`. This should not be used in production.

### start prod environment
To start a production environment, run `npm run start`. This script requires that the build script has ran beforehand.

### build for release
To compile the project into a release-friendly package, run `npm run build`.

### invoke the linter
To invoke the linter, run `npm run lint`.

### invoke the prettier
There is currently no prettier, help us out by creating a pull-request! =D
