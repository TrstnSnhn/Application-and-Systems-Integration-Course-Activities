# Application and Systems Integration Course Activities

This repository contains coursework activities for **Application and Systems Integration**.

## Activity 1: Hello World

The first activity is a simple Node.js project that prints:

```txt
Hello, World!
```

It also includes a `student.json` file containing the required student information for assignment validation.

## Project Structure

```txt
.
├── .github/workflows/
│   └── test.yml
├── test/
│   └── activity1.test.js
├── index.js
├── package.json
└── student.json
```

## Requirements

* Node.js
* npm

## Run the Project

```bash
node index.js
```

Expected output:

```txt
Hello, World!
```

## Run Tests

```bash
npm test
```

The automated tests check that:

1. The project prints `Hello, World!`
2. `student.json` has a filled `fullName`
3. `student.json` has a filled `studentNumber`
4. `student.json` has a filled `studentEmail`
5. `student.json` has a filled `personalEmail`
6. `student.json` has a filled `githubAccount`

## GitHub Actions

This repository uses GitHub Actions to automatically run the test suite whenever changes are pushed to the `main` branch.

A successful workflow run confirms that the activity requirements passed.
