import { mostViewed } from '../urls.js'

describe('URL configurations', () => {
    it('should match snapshots', () => {

        expect(mostViewed).toMatchSnapshot();

    });
})