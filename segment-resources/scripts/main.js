"use strict";

function clearActive(elements) {
    for (var a in elements)
        for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function clearTransit(elements) {
    for (var a in elements)
        for (var b in elements[a].classList) "transit" === elements[a].classList[b] && elements[a].classList.remove("transit");
}

function addActive(elements, a) {
    elements[a].classList.add("active");
}

function addTransit(elements, a) {
    elements[a].classList.add("transit");
}

function printSequence(sequence, a, elements) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(elements, c);
}

function printBase3Sequence(sequence, a, elements) {
    //console.log(sequence[a]);
    for (var b = sequence[a], c = 0; c < b.length; c++)("1" === b[c] && addTransit(elements, c)) || ("2" === b[c] && addActive(elements, c));
}

function stepSequence() {
    clearActive(allElements), clearActive(numElements),
        clearActive(base3allElements), clearTransit(base3allElements),
        clearActive(base3numElements), clearTransit(base3numElements),
        allCounter >= allSequence.length && (allCounter = 0),
        printSequence(allSequence, allCounter, allElements),
        document.getElementById("display-all").innerHTML = allSequence[allCounter],
        allCounter++,
        numCounter >= numSequence.length && (numCounter = 0),
        printSequence(numSequence, numCounter, numElements),
        document.getElementById("display-num").innerHTML = numSequence[numCounter],
        numCounter++,
        base3allCounter >= base3allSequence.length && (base3allCounter = 0),
        printBase3Sequence(base3allSequence, base3allCounter, base3allElements),
        document.getElementById("display-all-3").innerHTML = base3allSequence[base3allCounter],
        base3allCounter++,
        base3numCounter >= base3numSequence.length && (base3numCounter = 0),
        printBase3Sequence(base3numSequence, base3numCounter, base3numElements),
        document.getElementById("display-num-3").innerHTML = base3numSequence[base3numCounter],
        base3numCounter++,
        setTimeout(stepSequence, frequency);
}

var frequency = 1e3,
    allSequence = ['0000000', '0000001', '0000010', '0000011', '0000100', '0000101', '0000110', '0000111', '0001000', '0001001', '0001010', '0001011', '0001100', '0001101', '0001110', '0001111', '0010000', '0010001', '0010010', '0010011', '0010100', '0010101', '0010110', '0010111', '0011000', '0011001', '0011010', '0011011', '0011100', '0011101', '0011110', '0011111', '0100000', '0100001', '0100010', '0100011', '0100100', '0100101', '0100110', '0100111', '0101000', '0101001', '0101010', '0101011', '0101100', '0101101', '0101110', '0101111', '0110000', '0110001', '0110010', '0110011', '0110100', '0110101', '0110110', '0110111', '0111000', '0111001', '0111010', '0111011', '0111100', '0111101', '0111110', '0111111', '1000000', '1000001', '1000010', '1000011', '1000100', '1000101', '1000110', '1000111', '1001000', '1001001', '1001010', '1001011', '1001100', '1001101', '1001110', '1001111', '1010000', '1010001', '1010010', '1010011', '1010100', '1010101', '1010110', '1010111', '1011000', '1011001', '1011010', '1011011', '1011100', '1011101', '1011110', '1011111', '1100000', '1100001', '1100010', '1100011', '1100100', '1100101', '1100110', '1100111', '1101000', '1101001', '1101010', '1101011', '1101100', '1101101', '1101110', '1101111', '1110000', '1110001', '1110010', '1110011', '1110100', '1110101', '1110110', '1110111', '1111000', '1111001', '1111010', '1111011', '1111100', '1111101', '1111110', '1111111'],
    allElements = document.getElementById("shape-all").getElementsByTagName("*"),
    allCounter = 0,

    numSequence = ['0111111', '0000011', '1101101', '1100111', '1010011', '1110110', '1111110', '0100011', '1111111', '1110111'],
    numElements = document.getElementById("shape-num").getElementsByTagName("*"),
    numCounter = 0,

    base3allSequence = ['000000', '000001', '000002', '000010', '000011', '000012', '000020', '000021', '000022', '000100', '000101', '000102', '000110', '000111', '000112', '000120', '000121', '000122', '000200', '000201', '000202', '000210', '000211', '000212', '000220', '000221', '000222', '001000', '001001', '001002', '001010', '001011', '001012', '001020', '001021', '001022', '001100', '001101', '001102', '001110', '001111', '001112', '001120', '001121', '001122', '001200', '001201', '001202', '001210', '001211', '001212', '001220', '001221', '001222', '002000', '002001', '002002', '002010', '002011', '002012', '002020', '002021', '002022', '002100'],
    base3allElements = document.getElementById("shape-base-3-all").getElementsByTagName("*"),
    base3allCounter = 0,

    base3numSequence = ['001111', '002222', '010000', '020000', '100101', '200202', '100011', '200022', '111000', '222000', '101010', '202020', '101110', '202220', '001011', '002022', '101111', '202222', '101011', '202022'],
    base3numElements = document.getElementById("shape-base-3-num").getElementsByTagName("*"),
    base3numCounter = 0;

window.onload = function() {
    stepSequence();
};