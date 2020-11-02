# Introduction

### Inst - React Minimalist GraphQL Dashboard

A React.js, Next.js, GraphQL, TypeScript powered dashboard template. Highly optimized for your next react application.


<br>

# Stack We Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
4. TypeScript
5. GraphQL
6. TypeGraphQL
7. Baseweb design for ui components https://v9-50-0.baseweb.design/
8. Now Deployment

<br>

# Getting Started

After downloading the file from Themeforest, You will find inst.zip file. Unzip the inst.zip and Follow the Installation guideline from below section.

<br>

## Installation

Make sure you have Node, Yarn already installed in your system. you can check if Node, Yarn available in your system by running below command,

```
node -v

yarn -v
```

If it's not installed in your system then please install them by checking official documentation of,

1. https://nodejs.org/en/
2. https://yarnpkg.com/lang/en/docs/install/

After that, Install Package dependency by running below command at the root directory of inst folder to get started with the project,

```
yarn
```

For starting development server run below command at the root directory

```
yarn dev
```

For starting production server run below command at the root directory

```
yarn build
```

> ### NOTE: Before start the project add your config credentials in `.env.local` file

<br/>

# Configuration

Create a .env.local file inside the frontend directory and fill up the configuration access token with your information for better example please check our .env.local.sample file.
(Rename the provided `.env.local.sample` to `.env.local` and add your config credentials.(the `.env.local.sample`file is define within the `project/fronted` folder).)

```.env
      GITHUB_AUTH_TOKEN=your_github_auth_token
      PRODUCT_HUNT_AUTH_TOKEN=your_product_hunt_auth_token
      FIREBASE_API_KEY=your_firebase_api_key
      FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
      FIREBASE_DATABASE_URL=your_firebase_database_url
      FIREBASE_PROJECT_ID=your_firebase_project_id
      FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
      FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
      FIREBASE_APP_ID=your_firebase_app_id
      FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

<br/>

# Folder Structure

```
/api
  /src
    /data
    /services
      /dashboard
      /integration
      /invoice
      /product
      /profile
/frontend
  /apollo
  /assets
  /components
  /containers
  /contexts
  /data [ui elements api data]
  /firebase
  /pages
  /types
  /utils
```

<br/>

# Routes

```
/
/apps
  /todo
  /firebase-crud
  /invoice
    /[id]
    /add
  /github
  /product-hunt
/shop
  /[slug]
  /checkout
/charts
  /area
  /column
  /bar
  /mixed
  /pie
  /radar
  /product-view
  /cash-flow
/forms
  /hook-form
/uielements
  /page-title
  /widget-card
  /carousel
  /cart-product
  /instagram-card
  /product-card
  /pricing-card
  /listgrid-card
/pricing
/profile
/settings
  /password
  /billing
  /applications
/login
/signup
/terms
/privacy
```

<br/>

# Explaining Containers

In the `containers` directory you will get folder for our `Calendar`, `Crud`, `Formik`, `HookForm[React hook form]`, `Posts`, `Shop`, `Todo` and `Widgets`.

All of these containers contains regular reactjs code.

<br/>

# Customization

Just like any standard React project, you can customize this template by checking the codebase.

Just go to the `/pages` directory for the feature you want to change or copy and from there follow the `import` you will get what you needed to change.

BaseUI has been used as UI Library for this template. So, for component, theme, color related customization check the BaseUI documentation directly from here https://v9-50-0.baseweb.design/ also check our UI elements props from here 

<br/>

# Deployment

We have provided now.sh deployment support by default. Follow below below instruction.

## [vercel.com](https://vercel.com)

We have given `vercel` deployment by default. For hosting the project in [vercel.com](https://vercel.com).

1.  Add your production credentials on `vercel.json`
2.  first you have to go `api` folder and run `vercel`

```
$ cd api/
$ vercel

```

3.  After deploying api you will get a url from vercel. You have to put that url in the `/frontend/vercel.json` `APOLLO_CLIENT_URL`.

4.  Now go to `frontend` folder and run `vercel`

```
$ cd frontend/
$ vercel

```

> **Make sure you have `vercel-cli` installed in your system.**
