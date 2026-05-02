# npm Workspace Setup for Astro + Sanity

## Summary

Set up the current folder as an npm workspace with two apps:

```txt
apps/
  web/   # Astro frontend
  cms/   # Sanity Studio
package.json
package-lock.json
.gitignore
```

Use npm because it is built into Node, simple to maintain, and sufficient for a two-app Astro/Sanity workspace.

## Step 1: Confirm Node and npm

From the project root:

```bash
node --version
npm --version
```

Use a modern Node LTS version. Node `20` or newer is a good default.

## Step 2: Create the Root `package.json`

From the project root:

```bash
npm init -y
```

Then edit `package.json` to look like this:

```json
{
  "name": "striepband",
  "version": "0.0.0",
  "private": true,
  "workspaces": [
    "apps/*"
  ],
  "scripts": {
    "dev:web": "npm run dev -w web",
    "dev:cms": "npm run dev -w cms",
    "build:web": "npm run build -w web",
    "build:cms": "npm run build -w cms"
  }
}
```

The important parts are:

```json
"private": true
```

and:

```json
"workspaces": [
  "apps/*"
]
```

## Step 3: Make Sure `apps/` Exists

You already have an empty `apps/` folder, but if needed:

```bash
mkdir -p apps
```

## Step 4: Add `.gitignore`

Create `.gitignore` in the project root:

```gitignore
node_modules

dist
.output
.astro
.sanity

.env
.env.*
!.env.example

.DS_Store
```

Commit `package-lock.json`. It is part of the workspace's reproducible dependency state.

## Step 5: Create the Astro App

From the project root:

```bash
npm create astro@latest apps/web
```

Recommended answers:

```txt
Template: Minimal
Install dependencies: Yes
TypeScript: Yes
Initialize git repository: No
```

If Astro asks for strict TypeScript, choose:

```txt
Strict
```

After creation, open `apps/web/package.json` and make sure the name is:

```json
{
  "name": "web"
}
```

If it is something else, change it to `web`.

## Step 6: Create the Sanity App

From the project root:

```bash
npm create sanity@latest apps/cms
```

Recommended answers:

```txt
Project: Create new project, unless you already have one
Dataset: production
Template: Clean project
TypeScript: Yes
Package manager: npm
```

After creation, open `apps/cms/package.json` and make sure the name is:

```json
{
  "name": "cms"
}
```

If it is something else, change it to `cms`.

## Step 7: Install from the Workspace Root

From the project root:

```bash
npm install
```

This should create or update one root `package-lock.json`.

Commit the lockfile. It is part of the workspace's reproducible dependency state.

## Step 8: Test Astro

From the root:

```bash
npm run dev:web
```

Astro should start, usually at:

```txt
http://localhost:4321
```

Stop it with `Ctrl+C` when done.

## Step 9: Test Sanity

From the root:

```bash
npm run dev:cms
```

Sanity should start, usually at:

```txt
http://localhost:3333
```

Stop it with `Ctrl+C` when done.

## Step 10: Test Production Builds

From the root:

```bash
npm run build:web
npm run build:cms
```

Both should complete successfully.

## Step 11: Optional Combined Dev Command

If you want one command to run both apps:

```bash
npm install -D concurrently
```

Then update the root `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:web\" \"npm run dev:cms\"",
    "dev:web": "npm run dev -w web",
    "dev:cms": "npm run dev -w cms",
    "build:web": "npm run build -w web",
    "build:cms": "npm run build -w cms"
  }
}
```

Then run:

```bash
npm run dev
```

## Step 12: Fix or Initialize Git

Earlier, `git status` failed even though a `.git` folder exists. Before committing, run:

```bash
git status
```

If it still fails, initialize Git from the project root:

```bash
git init
```

Then commit:

```bash
git add .
git commit -m "Initialize npm workspace with Astro and Sanity apps"
```

## Assumptions

- Astro lives in `apps/web`.
- Sanity Studio lives in `apps/cms`.
- npm workspaces are preferred over pnpm.
- `package-lock.json` should be committed.
- No shared package is needed yet.
