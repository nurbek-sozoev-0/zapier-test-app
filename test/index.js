require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../index');
const appTester = zapier.createAppTester(App);



describe('My App', () => {
  it('should load recipes', done => {
    const bundle = {}

    appTester(App.triggers.recipe.operation.perform, bundle)
        .then(results => {
          results.length.should.be.greaterThan(1);

          const firstResult = results[0]
          firstResult.should.have.property('id');
          console.log('test result: ', firstResult)
          done()
        })
        .catch(done)
  })
})
