import { QueryManager } from '../../../core/QueryManager';
import { mockSingleLink, MockedResponse } from './mockLink';
import { InMemoryCache } from '../../../cache';

// Helper method for the tests that construct a query manager out of a
// a list of mocked responses for a mocked network interface.
export default (...mockedResponses: MockedResponse[]) => {
  return new QueryManager({
    link: mockSingleLink(...mockedResponses),
    cache: new InMemoryCache({ addTypename: false }),
  });
};
