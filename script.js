const students = [
  {
    name: "Diego",
    firstEva: 9.2,
    secondEva: 9.3
  },
  {
    name: "Mayara",
    firstEva: 5,
    secondEva: 4.5 
  },
  {
    name: "Jefferson",
    firstEva: 9,
    secondEva: 8
  },
  {
    name: "Natália",
    firstEva: 10,
    secondEva: 9.5
  },
  {
    name: "Bruna",
    firstEva: 7,
    secondEva: 7
  },
  {
    name: "Rafael",
    firstEva: 2,
    secondEva: 3
  },
  {
    name: "Carlos",
    firstEva: 7.5,
    secondEva: 6
  },
];

function average(firstEva, secondEva) {
  return ((firstEva + secondEva) / 2)
} 

function printStudentExcellentAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${average(student.firstEva, student.secondEva)} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso superior!`
}
function printStudentGoodAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${average(student.firstEva, student.secondEva)} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
}

function printStudentBadAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${average(student.firstEva, student.secondEva)} \n Não foi dessa vez, ${student.name}! Tente novamente!`
}

for (let student of students) {
  let aveExcellentMessage = printStudentExcellentAverage(student)
  let aveGoodMessage = printStudentGoodAverage(student)
  let aveBadMessage = printStudentBadAverage(student)

  if (average(student.firstEva, student.secondEva) > 8.5) {
    alert(aveExcellentMessage)
  } else if (average(student.firstEva, student.secondEva) >= 7) {
    alert(aveGoodMessage)
  } else {
    alert(aveBadMessage)
  }
}