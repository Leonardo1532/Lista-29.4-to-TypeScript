// De acordo com o diagrama de classes acima, crie as respectivas classes, todas devem ter
// um método construtor respeitando as seguintes indicações:
// 1. A propriedade Titular da classe PacoteViagem deve receber seu valor através da
// propriedade Passageiro da classe PassagemArea;
// 2. O método CalcularValor() da classe PassagemArea deve fazer um acréscimo de
// 50% no valor base caso a propriedade PrimeiraClasse seja “true”
// 3. O método ExibirResumo da classe PassagemArea deve exibir uma mensagem com
// as seguintes informações: “Passagem em nome de {nome do passageiro}, no
// assento {assento} do voo {número do voo}, com destino para {local de destino do
// voo}!”

// 1. Encapsular as propriedades de todas as classes e criar seus respectivos métodos
// get/set (para definição e leitura dos valores dessa propriedade));
// 2. Na classe Cliente criar as seguintes validações no método set das respectivas
// propriedades:
// a. Nome deve conter no máximo 50 caracteres;
// b. Cpf deve conter no máximo 11 caracteres;
// 3. Na classe PassagemArea criar as seguintes validações no método set das
// respectivas propriedades:
// a. PrimeiraClasse deve aceitar somente um valor booleano;
// b. Valor deve ser sempre maior do que zero;

// 1. Com base no exercício anterior, organize a execução do código da seguinte maneira:
// a. Dê a opção de cadastrar um cliente e salve esse objeto em um array;
// b. Faça também a opção de cadastrar um Voo e salve esse objeto em um
// array;
// c. Por último, dê a opção de cadastrar um Pacote de Viagem e salve em um
// array;
// 2. Considere as seguintes validações na hora de montar esse sistema:
// a. Quando for cadastrar um pacote de viagem, na hora de escolher a
// passagem de Ida mostra uma lista com todos os Voo cadastrados;
// b. Na hora de cadastrar a passagem de Volta, exibir apenas os Voo que tem o
// local de partida igual ao local de destino do Voo de Ida escolhido;
// c. Na hora de escolher um assento na passagem aérea, verifique se esse
// assento já não foi escolhido nesse voo, em caso positivo peça para escolher
// outro assento;
// Fique a vontade para criar funções para ajudar na execução / organização do seu
// código!

// {
//     "assento": 35,
//     "primeiraClasse": true,
//     "valor": 8000,
//     "passageiro": {"nome": "Francisco",
//                    "cpf": "123.123.221.45",
//                    "dataNascimento": "12/10/1995"},
//     "voo": {"Empresa": "Gol",
//             "numero": "1029384756",
//                "data": "20/12/2023",
//             "horario": 15,
//             "localPartida": "(GRU airport) Aeroporto Internacional de São Paulo/Guarulhos",
//             "localDestino": "Paris - Charles de Gaulle (CDG, França)"}
//   }

let Clientes: Cliente[] = []
let Voos: Voo[] = []
let PacotesDeViagens: PacoteViagem[] = []
let PassagensAereas: PassagemAerea[] = []

class Cliente {
    Nome: string
    Cpf: string
    DataNascimento: string

    constructor(nome: string, cpf: string, dataNascimento: string) {
        this.setNome(nome)
        this.setCpf(cpf)
        this.setDataNascimento(dataNascimento)
    }

    setNome(nome: string) {
        let continuar = true
        while (continuar) {
            if (nome.length > 50) {
                console.log("O nome deve ter no máximo 50 caracteres!")
                nome = prompt("Insira um novo nome")
            } else {
                this.Nome = nome
                continuar = false
            }
        }
    }
    setCpf(cpf: string) {
        let continuar2 = true
        while (continuar2) {
            if (cpf.length > 11) {
                console.log("O cpf deve ter no máximo 11 caracteres!")
                cpf = prompt("Insira um novo cpf")
            } else {
                this.Cpf = cpf
                continuar2 = false
            }
        }
    }
    setDataNascimento(dataNascimento: string) {
        this.DataNascimento = dataNascimento
    }
}

class PassagemAerea {
    Assento: number
    PrimeiraClasse: boolean
    Valor: number
    Passageiro: Cliente
    Voo: Voo

    constructor(assento: number, primeiraClasse: string, valor: number, passageiro: Cliente, voo: Voo) {
        this.setAssento(assento)
        this.setPrimeiraClasse(primeiraClasse)
        this.setValor(valor)
        this.setPassageiro(passageiro)
        this.setVoo(voo)
    }

    setAssento(assento: number) {
        this.Assento = assento
    }

    setPrimeiraClasse(primeiraClasse: string) {
        if (primeiraClasse == "s") {
            this.PrimeiraClasse = true
        } else if (primeiraClasse == "n")
            this.PrimeiraClasse = false
    }

    setValor(valor: number) {
        let continuar3 = true
        while (continuar3) {
            if (valor <= 0) {
                console.log("O valor deve ser maior que zero (0)")
                valor = parseInt(prompt("Insira um valor corretamente"))
            } else {
                this.Valor = valor
                continuar3 = false
            }
        }
    }

    setPassageiro(passageiro: Cliente) {
        this.Passageiro = passageiro
    }

    setVoo(voo: Voo) {
        this.Voo = voo
    }

    CalcularValor() {
        let valorPrimeiraClasse = 0
        if (this.PrimeiraClasse == true) {
            valorPrimeiraClasse = this.Valor + (this.Valor * 0.5)
            console.log("Com o acréscimo da Primeira Classe o valor total é:     R$ " + valorPrimeiraClasse)
            this.Valor = valorPrimeiraClasse
        } else {
            valorPrimeiraClasse = this.Valor
            console.log("Sua passagem Aérea foi de classe econômica!")
        }
    }
    ExibirResumo(passagemAereaAssento: number, vooNumero: string, vooLocalDestino: string) {

        console.log("Passagem em nome de: " + this.Passageiro.Nome)
        console.log("No assento: " + passagemAereaAssento)
        console.log("Do voo: " + vooNumero)
        console.log("Com destino para: " + vooLocalDestino)
    }
}

class Voo {
    Empresa: string
    Numero: string
    Data: string
    Horario: number
    LocalPartida: string
    LocalDestino: string

    constructor(empresa: string, numero: string, data: string, horario: number, localPartida: string, localDestino: string) {
        this.setEmpresa(empresa)
        this.setNumero(numero)
        this.setData(data)
        this.setHorario(horario)
        this.setLocalPartida(localPartida)
        this.setLocalDestino(localDestino)
    }

    setEmpresa(empresa: string) {
        this.Empresa = empresa
    }
    setNumero(numero: string) {
        this.Numero = numero
    }
    setData(data: string) {
        this.Data = data
    }
    setHorario(horario: number) {
        this.Horario = horario
    }
    setLocalPartida(localPartida: string) {
        this.LocalPartida = localPartida
    }
    setLocalDestino(localDestino: string) {
        this.LocalDestino = localDestino
    }
}

class PacoteViagem {
    Titular: Cliente
    PassagemIda: PassagemAerea
    PassagemVolta: PassagemAerea
    ValorTotal: number

    constructor(titular: Cliente, passagemIda: PassagemAerea, passagemVolta: PassagemAerea, valorTotal: number) {
        this.setTitular(titular)
        this.setPassagemIda(passagemIda)
        this.setPassagemVolta(passagemVolta)
        this.setValorTotal(valorTotal)
    }

    setTitular(titular: Cliente) {
        this.Titular = titular
    }
    setPassagemIda(passagemIda: PassagemAerea) {
        this.PassagemIda = passagemIda
    }
    setPassagemVolta(passagemVolta: PassagemAerea) {
        this.PassagemVolta = passagemVolta
    }
    setValorTotal(valorTotal: number) {
        this.ValorTotal = valorTotal
    }
}


function Get() {
    return fetch('https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

async function GetID(id: string) {
    const response = await fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea/" + id, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

async function PostData(data: PassagemAerea) {
    // let data = AdicionarCarro()
    const response = await fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function PutData(id: string, data2: PassagemAerea) {
    // let data2 = AdicionarCarro()
    const response = await fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea/" + id, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data2)
    });
    return response.json();
}

async function DeleteData(id: string) {
    const response = await fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea/" + id, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
    return response.json();
}

function AdicionarPassagemAerea(): PassagemAerea {
    let passagemAssento: number
    let VerificacaoDeAssento = true

    let nome = prompt("Insira um nome")
    let cpf = prompt("Insira um cpf")
    let dataNascimento = prompt("Insira uma data de nascimento")
    let clinte = new Cliente(nome, cpf, dataNascimento)
    Clientes.push(clinte)

    let empresa = prompt("Insira a Empresa")

    let numero = prompt("Insira o numero do voo")

    let data = prompt("Insira a data do voo")

    let horario = parseInt(prompt("Insira o horário do voo"))

    let localPartida = prompt("Insira o local de partida do voo")

    let localDestino = prompt("Insira o local de destino do voo")

    let voo = new Voo(empresa, numero, data, horario, localPartida, localDestino)
    Voos.push(voo)

    while (VerificacaoDeAssento) {

        passagemAssento = parseInt(prompt("Qual o assento da sua passagem de Ida?"))

        for (let v = 0; v <= PassagensAereas.length; v++) {

            if (PassagensAereas.length == 0) {
                console.log("Assento Disponível!")
                VerificacaoDeAssento = false
            } else if (passagemAssento == PassagensAereas[v].Assento) {
                console.log("O assento ja foi escolhido, escolha outro!")

            } else {
                console.log("Assento Disponível!")
                VerificacaoDeAssento = false
            }
        }
    }

    let passagemPrimeiraClasse = prompt("Deseja ir de primeira classe? s ou n")

    let passagemValor = parseFloat(prompt("Insira o valor da passagem Aérea"))

    let passageiroPassagemAerea = prompt("Insira o nome do passageiro")

    let passageiroPassagem: Cliente

    for (let v2 = 0; v2 < Clientes.length; v2++) {
        if (passageiroPassagemAerea == Clientes[v2].Nome) {
            passageiroPassagem = Clientes[v2]
        }
    }
    let passagemVooData = prompt("Insira a data do voo")

    let vooPassagem: Voo

    for (let v3 = 0; v3 < Voos.length; v3++) {
        if (passagemVooData == Voos[v3].Data) {
            vooPassagem = Voos[v3]
        }
    }

    let passagem = new PassagemAerea(passagemAssento, passagemPrimeiraClasse, passagemValor, passageiroPassagem, vooPassagem)
    PassagensAereas.push(passagem)
    passagem.CalcularValor()
    passagem.ExibirResumo(passagemAssento, vooPassagem.Numero, vooPassagem.LocalDestino)
    PostData(passagem)

    for (let v4 = 0; v4 < Voos.length; v4++) {
        if (Voos[v4].LocalPartida == vooPassagem.LocalDestino) {
            console.log(Voos[v4])
        }
    }
    return passagem
}

let continuarExecutando = true
while (continuarExecutando) {
    let opcao = prompt("Para cadastrar um cliente insira (1), Para cadastrar um Voo (2), Para cadastrar um pacote de viagem (3), Para mostrar todas passagens Aéreas (4), Para Mostrar uma passagem aérea pelo ID (5), Para editar uma passagem aérea (6), Para deletar uma passagem aérea (7)")
    switch (opcao) {
        case "1":
            let nome = prompt("Insira um nome")
            let cpf = prompt("Insira um cpf")
            let dataNascimento = prompt("Insira uma data de nascimento")
            let clinte1 = new Cliente(nome, cpf, dataNascimento)
            Clientes.push(clinte1)
            break;
        case "2":
            let empresa = prompt("Insira a Empresa")

            let numero = prompt("Insira o numero do voo")

            let data = prompt("Insira a data do voo")

            let horario = parseInt(prompt("Insira o horário do voo"))

            let localPartida = prompt("Insira o local de partida do voo")

            let localDestino = prompt("Insira o local de destino do voo")

            let voo1 = new Voo(empresa, numero, data, horario, localPartida, localDestino)
            Voos.push(voo1)

            let empresa2 = prompt("Insira a Empresa")

            let numero2 = prompt("Insira o numero do voo")

            let data2 = prompt("Insira a data do voo")

            let horario2 = parseInt(prompt("Insira o horário do voo"))

            let localPartida2 = prompt("Insira o local de partida do voo")

            let localDestino2 = prompt("Insira o local de destino do voo")

            let voo2 = new Voo(empresa2, numero2, data2, horario2, localPartida2, localDestino2)
            Voos.push(voo2)
            break;

        case "3":

            let titular = prompt("Insira o nome do Titular")
            let titularPacoteViagem: Cliente
            for (let index6 = 0; index6 < Clientes.length; index6++) {
                if (titular == Clientes[index6].Nome) {
                    titularPacoteViagem = Clientes[index6]
                }
            }

            console.log(Voos)

            let passagemIdaAssento: number
            let VerificacaoDeAssento = true
            while (VerificacaoDeAssento) {

                passagemIdaAssento = parseInt(prompt("Qual o assento da sua passagem de Ida?"))

                for (let i = 0; i <= PassagensAereas.length; i++) {

                    if (PassagensAereas.length == 0) {
                        console.log("Assento Disponível!")
                        VerificacaoDeAssento = false
                    } else if (passagemIdaAssento == PassagensAereas[i].Assento) {
                        console.log("O assento ja foi escolhido, escolha outro!")

                    } else {
                        console.log("Assento Disponível!")
                        VerificacaoDeAssento = false
                    }
                }
            }

            let passagemIdaPrimeiraClasse = prompt("Deseja ir de primeira classe? s ou n")

            let passagemIdaValor = parseFloat(prompt("Insira o valor da passagem Aérea"))

            let passageiroIda = prompt("Insira o nome do passageiro")

            let passageiroPassagemIda: Cliente

            for (let index2 = 0; index2 < Clientes.length; index2++) {
                if (passageiroIda == Clientes[index2].Nome) {
                    passageiroPassagemIda = Clientes[index2]
                }
            }
            let passagemIdaVoo = prompt("Insira a data do voo")

            let vooIda: Voo

            for (let index3 = 0; index3 < Voos.length; index3++) {
                if (passagemIdaVoo == Voos[index3].Data) {
                    vooIda = Voos[index3]
                }
            }

            let passagemIda = new PassagemAerea(passagemIdaAssento, passagemIdaPrimeiraClasse, passagemIdaValor, passageiroPassagemIda, vooIda)
            PassagensAereas.push(passagemIda)
            passagemIda.CalcularValor()
            passagemIda.ExibirResumo(passagemIdaAssento, vooIda.Numero, vooIda.LocalDestino)
            PostData(passagemIda)

            for (let contador = 0; contador < Voos.length; contador++) {
                if (Voos[contador].LocalPartida == vooIda.LocalDestino) {
                    console.log(Voos[contador])
                }
            }

            let passagemVoltaAssento: number
            VerificacaoDeAssento = true
            while (VerificacaoDeAssento) {

                passagemVoltaAssento = parseInt(prompt("Qual o assento da sua passagem de Volta?"))

                for (let i = 0; i < PassagensAereas.length; i++) {

                    if (PassagensAereas.length == 0) {
                        console.log("Assento Disponível!")
                        VerificacaoDeAssento = false
                    } else if (passagemVoltaAssento == PassagensAereas[i].Assento) {
                        console.log("O assento ja foi escolhido, escolha outro!")

                    } else {
                        console.log("Assento Disponível!")
                        VerificacaoDeAssento = false
                    }
                }
            }

            let passagemVoltaPrimeiraClasse = prompt("Deseja ir de primeira classe? s ou n")

            let passagemVoltaValor = parseFloat(prompt("Insira o valor da passagem Aérea"))

            let passageiroVolta = prompt("Insira o nome do passageiro")
            let passageiroPassagemVolta: Cliente
            for (let index4 = 0; index4 < Clientes.length; index4++) {
                if (passageiroVolta == Clientes[index4].Nome) {
                    passageiroPassagemVolta = Clientes[index4]
                }
            }
            let passagemVoltaVoo = prompt("Insira a data do voo")
            let vooVolta: Voo
            for (let index5 = 0; index5 < Voos.length; index5++) {
                if (passagemVoltaVoo == Voos[index5].Data) {
                    vooVolta = Voos[index5]
                }
            }
            let passagemVolta = new PassagemAerea(passagemVoltaAssento, passagemVoltaPrimeiraClasse, passagemVoltaValor, passageiroPassagemVolta, vooVolta)
            PassagensAereas.push(passagemVolta)
            passagemVolta.CalcularValor()
            passagemVolta.ExibirResumo(passagemVoltaAssento, vooVolta.Numero, vooVolta.LocalDestino)
            PostData(passagemVolta)


            let valorTotalPacote = passagemIdaValor + passagemVoltaValor

            let pacoteViagem1 = new PacoteViagem(titularPacoteViagem, passagemIda, passagemVolta, valorTotalPacote)
            PacotesDeViagens.push(pacoteViagem1)
            break;

        case "4":
            Get()
            break;

        case "5":
            let id1 = prompt("Insira um id para localizar uma passagem aérea")
            GetID(id1)
            break;

        case "6":
            let id2 = prompt("Insira um id da passagem aérea que deseja atualizar")
            PutData(id2, AdicionarPassagemAerea())
            break;

        case "7":
            let id3 = prompt("Insira um id da passagem aérea que deseja deletar")
            DeleteData(id3)
            break;

        default:
            console.log("Opção Inválida")
            break;

    }
    let desejaContinuar = prompt("Deseja continuar executando? s ou n")
    if (desejaContinuar != "s") {
        continuarExecutando = false
    }
}