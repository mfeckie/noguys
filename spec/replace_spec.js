
function testNode(text) {
  return {nodeValue: text};
}

var words = [
  "guys",
  "he/she",
  "his/her",
  "his / her",
  "actress",
  "he or she"
];

describe('detecting correct word groups', function() {
  words.forEach(function(word) {
    it('Replaces ' + word, function () {
        var node = testNode(word);
        handleText(node);
        expect(node.nodeValue).not.toContain(word);
    });

    it('Replaces capitalized' + word, function () {
        var capitalized = word;
        capitalized[0] = capitalized[0].toUpperCase();
        var node = testNode(capitalized);
        handleText(node);
        expect(node.nodeValue).not.toContain(capitalized);
    });
    it('Replaces uppercase' + word, function () {
        var uppercase = word.toUpperCase();

        var node = testNode(uppercase);
        handleText(node);
        expect(node.nodeValue).not.toContain(uppercase);
    });
  })
});
