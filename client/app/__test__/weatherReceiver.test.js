import weatherReceived from '../weatherReceived.js';

describe('Weather receiver', () => {

  let bodyMock;
  beforeEach(() => {
    bodyMock = {
      innerHTML: ''
    };
    weatherReceived.__Rewire__('body', bodyMock);
  });

  it('Should write place and temperature to HTML-body', () => {
    weatherReceived({
      temperature: 38,
      place: 'Kyiv',
    });

    expect(bodyMock.innerHTML).to.contain(38);
    expect(bodyMock.innerHTML).to.contain('Kyiv');
  });

  afterEach(() => {
    weatherReceived.__ResetDependency__('body');
  });

});
