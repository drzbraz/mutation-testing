exports.numeroPerfeito = (num) => {
    if (!num) return null

    var arrayResult = []
    for (let index = 0; index < num; index++) {
        if (num % index == 0) {
            arrayResult.push(index)
        }
    }

    var soma = 0
    for (let indexResult = 0; indexResult < arrayResult.length; indexResult++) {
        soma += arrayResult[indexResult]
    }

    return soma == num
}

exports.mediaIntersecao = (vetor1, vetor2) => {
    if (!vetor1 || !vetor2) return null

    var arrayResult = []
    for (let index1 = 0; index1 < vetor1.length; index1++) {
        for (let index2 = 0; index2 < vetor2.length; index2++) {
            if (vetor1[index1] == vetor2[index2]) {
                arrayResult.push(vetor1[index1])
            }
        }
    }

    var soma = 0
    for (let index = 0; index < arrayResult.length; index++) {
        soma += arrayResult[index]
    }

    var media = arrayResult.length ? soma / arrayResult.length : 0

    return media
}
