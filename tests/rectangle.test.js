import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle.js";

test.each`
length|width|expectedResult
${1}|${1}|${4}
${1}|${0}|${0} // What is result for 0 value?
${-1}|${-1}|${4} // What is result for negative value?
`('should properly calculate rectangle perimeter when length is $length and width is $width', ({ length, width, expectedResult }) => {
    //Given
    //When
    const outputText = getRectanglePerimeter(length, width);
    //Then
    expect(outputText).toBe(expectedResult)
});

test.each`
length|width|expectedResult
${1}|${1}|${1}
${1}|${0}|${0}
${-1}|${-1}|${1}
${-1}|${1}|${1} // What is result for negative value?
`('should properly calculate rectangle area when length is $length and width is $width', ({ length, width, expectedResult }) => {
    //Given
    //When
    const outputText = getRectangleArea(length, width);
    //Then
    expect(outputText).toBe(expectedResult)
});

test('should properly calculate rectangle area', () => {
    //Given
    console.log = jest.fn();
    //When
    const outputText = getRectangleInfo(10, 15);
    //Then
    expect(console.log.mock.calls[0][0]).toBe('The perimeter of a rectangle is 50 and the area is 150');
    expect(outputText).toBe(undefined);
});

