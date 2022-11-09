const questions = [
    "O que aprendi hoje? ",
    "O que me deixou aborrecido? ",
    "O que eu poderia fazer para melhorar? ",
    "O que me deixou feliz hoje? ",
    "Quantas pessoas ajudei hoje? ",
]


const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + "> ")
}


ask() //Posso passar o valor do index aqui como parâmetro.


const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())

    answers.length < questions.length
        ? ask(answers.length)
        : process.exit()
})

// process.on("exit", () => {
//     console.log(`    
//     Finalizado!

//     O que você aprendeu hoje foi: ${answers[0]}
//     O te aborreceu hoje foi: ${answers[1]}
//     O que poderia melhorar foi : ${answers[2]}
//     O que te deixou feliz hoje! ${answers[3]}
//     Você ajudou ${answers[4]} pessoas hoje!       
//     `);
// })

