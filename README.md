# cypress-testing
Cypress automated testing project

This is a sample test project with Cypress, in which a few areas of google store phone section have been automated. 

# Install
Need to have npm in your machine (nodejs)

Npm install cypress

Note: you can use a package.json to install cypress as dev dependency

Npm install --save-dev cypress It will create the node_modules which you don’t have to git, just run npm install once you clone the project and it will create the dependencies in your machine

#  How to run 
After pulling the code, open with visual code

You can run the tests in Cypress play ground. Use: 'npx cypress open' command  

It will open a playground for you. Under the Integration folder, you'll see GoogleStoreSanity suite. 

You can run the tests one by one or run all of the using a button on right top corner. 

# Structure of the suite 

It's a data drive framework. The data are mostly kept in a Config file. 

For ease, a number of commonly used functions are kept in the Utils file. Both Config and Utils are under the GoogleSanitySuite folder.

Moreover, iframe related custom commands are kept in the Command file. 



# Word of caution 
A few tests from the checkout sections have been failing. Intermittently, the cart showed empty. 
Moreover, in the checkout page, often captcha was triggered.

Looks like production environments are not best for testing excercises :)
