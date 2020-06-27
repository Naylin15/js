import addCategory from '../../src/noteCategory/addCategory';

test('add category', () => {
    const object = addCategory({ title: 'abc'}, 'important');

    expect(object).toStrictEqual({ title: 'abc', category: 'important'});
});