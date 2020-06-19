import addCategory from '../../src/noteCategory/addCategory';
import { notes } from '../../src/index';
import * as index from '../../src/index';
jest.mock('../../src/index');

test('add category', () => {

    index.notes[0] = [{ title: 'abc' }];
    addCategory(0, 'important');

    expect(notes[0].category).toBe('important');
});