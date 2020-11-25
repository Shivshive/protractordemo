## Protractor Notes

#### browser.ignoreSynchronization = true/false

> The simple answer is that it makes protractor not wait for Angular promises, such as those from $http or $timeout to resolve, which you might want to do if you're testing behaviour during > $http or $timeout (e.g., a "loading" message), or testing non-Angular sites or pages, such as a separate login page.

For example, to test a button that sets a loading message during a request you can set it to true when fetching an element + checking its contents

```javascript

element(by.css('button[type="submit"]')).click();
browser.ignoreSynchronization = true;
expect(element(by.css('.message')).getText().toBe('Loading...');    
browser.ignoreSynchronization = false;
expect(element(by.css('.message')).getText().toBe('Loaded'); 

```

[Get More Info Stack Overflow](https://stackoverflow.com/questions/28808463/what-is-browser-ignoresynchronization-in-protractor)

---

#### Execution of jasmine hooks

```
    jasmineStarted      // Executed Before execution of whole spec.js files.
        suiteStarted    // Executed Before execution of each describe block
            specStarted // Executted Before execution of each it block
            specDone    // Executed After execution of each it block
        suiteDone       // Executed After execution of each describe block
    jasmineDone         // Executed After execution of whole spec.js files

```

---

