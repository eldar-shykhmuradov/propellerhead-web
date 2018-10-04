## Demo
http://dev-eclus.admin.s3-website-ap-southeast-2.amazonaws.com


# Elcus.Test project for Propellerhead

Front-end part of the Propellerhead test project called Elcus.

I would like to emphasise some notes:

**1**.I am backend developer.

**2**.Yes, I had experience developing front-end but it was a year ago.

**3**.My last front-end project`s Angular version was 4.But i had some problems with project setup and considering deadlines i decided to use AngularJS-seed project as base.

**4**.Again, considering deadlines i defined task as rough and ready user interface for backend part of the project, therefore code quality and ui/ux it is not about this project.

**5**.I prefer es6, but here i used it only ones for demo purpose because did not set up babel.

## Known issues

Ohhh...A lot :)

The most serious is that data is lost when refreshing page on item(customer/note) details.This is because bad architecture.I had to create them as components and include inside parent components.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need Node and npm installed


### Installing

to start it locally install dependencies:

```
npm install
```

And then start and watch it on localhost:8000

```
npm start
```

## Deployment


This application has been deployed on AWS infrastructure(S3) as static website.

http://dev-eclus.admin.s3-website-ap-southeast-2.amazonaws.com

## Built With

* [AngularJS](https://docs.angularjs.org/api) - Structural framework for dynamic web apps
* [Npm](https://docs.npmjs.com/) - Package manager



## Authors

* **Eldar Shykhmuradov**
