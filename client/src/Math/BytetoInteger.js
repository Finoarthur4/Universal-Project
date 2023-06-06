export function BytetoInteger(str, offset) {
    console.log({str});
    var caesar = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        var temp1 = parseInt(charcode);
        var temp2 = ((temp1+offset));
        caesar.push(temp2);
    }
    return caesar;
}