import createHTML from '../src/createHtml';

test('create HTML element', () => {
    const testHtml = createHTML({
        type: 'div',
        attributes: [{
            type: 'class',
            value: 'fourteen wide column'
        },
        {
            type: 'id',
            value: 'test'
        }],
        innerTag: {
            type: 'h2',
            description: 'this is a test'
        }
    });

    document.body.innerHTML =
    '<div  id="div">' +
    '</div>';

    document.getElementById('div').appendChild(testHtml);

    const testElement = document.getElementById('test');

    expect(testElement.className).toBe('fourteen wide column');
    expect(testElement.innerHTML).toBe('<h2>this is a test</h2>');
});