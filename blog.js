function getContent(num=10) {
    let result = '';
    let count = 0;
    while (count < num) {
        result += '<p>What an amazing blog!</p>'
        count += 1;
    }
    return result;
}

module.exports = getContent;