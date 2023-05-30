export function AscIItoText(str) {
    console.log({str});
    var text = [];
    for (var i = 1; i < str.length; i++) {
        var charcode = String.fromCharCode(i);
        console.log(charcode);
        text.push(charcode);
    }
    return text;
}