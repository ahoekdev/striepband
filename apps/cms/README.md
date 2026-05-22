# Sanity

## Clone production data into development environment

When working on a feature, use the development environment to not disturb content changes on production

Export the production data to a local file

`sanity dataset export production production.tar.gz`

Import the data into the development environment, replacing existing content

`sanity dataset import production.tar.gz development --replace`

Run a migration with

`sanity migration run <migration_name>`