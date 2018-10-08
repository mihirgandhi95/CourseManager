// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl : 'http://localhost:8080',
  YOUTUBE_API_URL: 'https://www.googleapis.com/youtube/v3/',
  YOUTUBE_API_KEY: 'AIzaSyB4M4RRsfThzWMiQ2ki3mcQ1POkAJOqbHs',
  OAUTH_ID: '607856133745-q7lcb4m97guvc5t6m23440lq1ei8qgv4.apps.googleusercontent.com',
  OAUTH_SECRET: 'CPxFA2ihxiVjGYBeGLpB0wFn',
  TinyMCE_API_KEY: 'wvij4gqlsgotcvyrfpqvmkw9h3b8vsi15ubbbxlx7gjzosqy',
  SLIDE_API_URL: 'https://slides.googleapis.com/$discovery/rest?version=v1',
  GOOGLE_CLIENT_ID: '607856133745-v6fagddhjv76lsmi5hamjd8krcao94ke.apps.googleusercontent.com'
};
