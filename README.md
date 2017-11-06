# Learn by Example: Vue

This tutorial is aimed for you to understand minimum knowledge to quickly to get started into a project.  
Its started when I used to code with Vue but forget almost everything after several months I didn't code with Vue at all.  
So I create this tutorial for me to remember quickly the minimum knowledge I need to become productive enough again with Vue.  
I hope you can learn from this too.

#### How to use
- Clone this repo. You will need to read code examples in this project later.
- Start with reading the wiki. It will give you what files needed to be read to understand the topic.

#### Requirement
- NodeJS v8.9.x (for vue-cli and npm)

## Table of Content
- [Installation]()
- Project Structures
- Vue Router
- Component Interactions
- Integration with CSS Framework

## Installation
- Install project template using vue-cli
    - vue-cli is only used to get the vue webpack template
    - [Vue has many templates](https://github.com/vuejs-templates) for us to getting started quickly. In this tutorial, we will use webpack templates which is template ready for production.
    - Step to install:
        - `npm install -g vue-cli`
        - `vue init webpack vue-learn-by-example`
            - Vue build > Runtime + Compiler
            - Install vue-router > Yes
            - Use ESLint to lint your code > Yes
            - Pick an ESLint preset > Standard
            - Setup unit tests with Karma + Mocha > Yes
            - Setup e2e tests with Nighwatch > Yes
        - `cd vue-learn-by-example`
        - `npm install`
        - `npm run dev`
    - You won't need to understand everything in webpack configuration. Just use `npm run dev` to run the project and `npm run build` to create compiled files used in production
    - References:
      - https://github.com/vuejs/vue-cli
      - https://github.com/vuejs-templates/webpack
