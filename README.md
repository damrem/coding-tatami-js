##### Coding Tatami JS

* blank unit test workbench for coding kata/dojo
* once launched, automatically re-runs tests on each code change
* simple modular approach (coming soon: advanced modular approach)

---

1st, you need to install [Node.js](http://nodejs.org/).

Then install the Karma CLI, clone the project from [github](https://github.com/damrem/coding-tatami-js.git), cd into it, install the project dependencies and run the tests!

```
$ git clone https://github.com/damrem/coding-tatami-js.git
$ npm install -g karma-cli
$ cd coding-tatami-js
$ npm install
$ npm test
```

**Edit your app/tests** in your favorite editor and watch **the tests automatically run on each code change**, that's all folks!

---
Made with:
* [Node.js]()
* [Karma](http://karma-runner.github.io/0.12/index.html) (test runner)
* [Jasmine](http://jasmine.github.io/) (test framework)
* [PhantomJS]() (headless browser)
* [tutorial by Jason Krol](http://kroltech.com/2013/11/javascript-tdd-with-jasmine-and-karma/)
