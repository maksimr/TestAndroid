jest.dontMock('../');
var WelcomeText = require('../index');

describe('WelcomeText', function() {
  it('should render welcome text', function() {
    expect(WelcomeText).toBeDefined();
  });
});