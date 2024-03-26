# Instructions

### Installing dependencies

First we have to install all the required dependencies, run: 

```
npm install
```

### Run the frontend

Now that already have the required dependencies, we can start our project using: 

```
npm run dev
```

----

## NOTES

- Is REQUIRED to have the backend running to have all the functionality.

- Credentiales
  - `username:` admin
  - `password:` admin

- Only the roles with the following names are allowed to be created (validated in the backend)

```
export enum RoleName {
  Admin = 'Admin',
  User = 'User',
  Manager = 'Manager',
  Developer = 'Developer',
  Designer = 'Designer',
  Tester = 'Tester',
  DevOps = 'DevOps'
}
```
