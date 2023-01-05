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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Clientes = [];
var Voos = [];
var PacotesDeViagens = [];
var PassagensAereas = [];
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, dataNascimento) {
        this.setNome(nome);
        this.setCpf(cpf);
        this.setDataNascimento(dataNascimento);
    }
    Cliente.prototype.setNome = function (nome) {
        var continuar = true;
        while (continuar) {
            if (nome.length > 50) {
                console.log("O nome deve ter no máximo 50 caracteres!");
                nome = prompt("Insira um novo nome");
            }
            else {
                this.Nome = nome;
                continuar = false;
            }
        }
    };
    Cliente.prototype.setCpf = function (cpf) {
        var continuar2 = true;
        while (continuar2) {
            if (cpf.length > 11) {
                console.log("O cpf deve ter no máximo 11 caracteres!");
                cpf = prompt("Insira um novo cpf");
            }
            else {
                this.Cpf = cpf;
                continuar2 = false;
            }
        }
    };
    Cliente.prototype.setDataNascimento = function (dataNascimento) {
        this.DataNascimento = dataNascimento;
    };
    return Cliente;
}());
var PassagemAerea = /** @class */ (function () {
    function PassagemAerea(assento, primeiraClasse, valor, passageiro, voo) {
        this.setAssento(assento);
        this.setPrimeiraClasse(primeiraClasse);
        this.setValor(valor);
        this.setPassageiro(passageiro);
        this.setVoo(voo);
    }
    PassagemAerea.prototype.setAssento = function (assento) {
        this.Assento = assento;
    };
    PassagemAerea.prototype.setPrimeiraClasse = function (primeiraClasse) {
        if (primeiraClasse == "s") {
            this.PrimeiraClasse = true;
        }
        else if (primeiraClasse == "n")
            this.PrimeiraClasse = false;
    };
    PassagemAerea.prototype.setValor = function (valor) {
        var continuar3 = true;
        while (continuar3) {
            if (valor <= 0) {
                console.log("O valor deve ser maior que zero (0)");
                valor = parseInt(prompt("Insira um valor corretamente"));
            }
            else {
                this.Valor = valor;
                continuar3 = false;
            }
        }
    };
    PassagemAerea.prototype.setPassageiro = function (passageiro) {
        this.Passageiro = passageiro;
    };
    PassagemAerea.prototype.setVoo = function (voo) {
        this.Voo = voo;
    };
    PassagemAerea.prototype.CalcularValor = function () {
        var valorPrimeiraClasse = 0;
        if (this.PrimeiraClasse == true) {
            valorPrimeiraClasse = this.Valor + (this.Valor * 0.5);
            console.log("Com o acréscimo da Primeira Classe o valor total é:     R$ " + valorPrimeiraClasse);
            this.Valor = valorPrimeiraClasse;
        }
        else {
            valorPrimeiraClasse = this.Valor;
            console.log("Sua passagem Aérea foi de classe econômica!");
        }
    };
    PassagemAerea.prototype.ExibirResumo = function (passagemAereaAssento, vooNumero, vooLocalDestino) {
        console.log("Passagem em nome de: " + this.Passageiro.Nome);
        console.log("No assento: " + passagemAereaAssento);
        console.log("Do voo: " + vooNumero);
        console.log("Com destino para: " + vooLocalDestino);
    };
    return PassagemAerea;
}());
var Voo = /** @class */ (function () {
    function Voo(empresa, numero, data, horario, localPartida, localDestino) {
        this.setEmpresa(empresa);
        this.setNumero(numero);
        this.setData(data);
        this.setHorario(horario);
        this.setLocalPartida(localPartida);
        this.setLocalDestino(localDestino);
    }
    Voo.prototype.setEmpresa = function (empresa) {
        this.Empresa = empresa;
    };
    Voo.prototype.setNumero = function (numero) {
        this.Numero = numero;
    };
    Voo.prototype.setData = function (data) {
        this.Data = data;
    };
    Voo.prototype.setHorario = function (horario) {
        this.Horario = horario;
    };
    Voo.prototype.setLocalPartida = function (localPartida) {
        this.LocalPartida = localPartida;
    };
    Voo.prototype.setLocalDestino = function (localDestino) {
        this.LocalDestino = localDestino;
    };
    return Voo;
}());
var PacoteViagem = /** @class */ (function () {
    function PacoteViagem(titular, passagemIda, passagemVolta, valorTotal) {
        this.setTitular(titular);
        this.setPassagemIda(passagemIda);
        this.setPassagemVolta(passagemVolta);
        this.setValorTotal(valorTotal);
    }
    PacoteViagem.prototype.setTitular = function (titular) {
        this.Titular = titular;
    };
    PacoteViagem.prototype.setPassagemIda = function (passagemIda) {
        this.PassagemIda = passagemIda;
    };
    PacoteViagem.prototype.setPassagemVolta = function (passagemVolta) {
        this.PassagemVolta = passagemVolta;
    };
    PacoteViagem.prototype.setValorTotal = function (valorTotal) {
        this.ValorTotal = valorTotal;
    };
    return PacoteViagem;
}());
function Get() {
    return fetch('https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea')
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); });
}
function GetID(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea/" + id, {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) { return console.log(data); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function PostData(data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea", {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data)
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function PutData(id, data2) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea/" + id, {
                        method: 'PUT',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data2)
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function DeleteData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/V5rXr33Z/PassagemAerea/" + id, {
                        method: 'DELETE',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function AdicionarPassagemAerea() {
    var passagemAssento;
    var VerificacaoDeAssento = true;
    var nome = prompt("Insira um nome");
    var cpf = prompt("Insira um cpf");
    var dataNascimento = prompt("Insira uma data de nascimento");
    var clinte = new Cliente(nome, cpf, dataNascimento);
    Clientes.push(clinte);
    var empresa = prompt("Insira a Empresa");
    var numero = prompt("Insira o numero do voo");
    var data = prompt("Insira a data do voo");
    var horario = parseInt(prompt("Insira o horário do voo"));
    var localPartida = prompt("Insira o local de partida do voo");
    var localDestino = prompt("Insira o local de destino do voo");
    var voo = new Voo(empresa, numero, data, horario, localPartida, localDestino);
    Voos.push(voo);
    while (VerificacaoDeAssento) {
        passagemAssento = parseInt(prompt("Qual o assento da sua passagem de Ida?"));
        for (var v = 0; v <= PassagensAereas.length; v++) {
            if (PassagensAereas.length == 0) {
                console.log("Assento Disponível!");
                VerificacaoDeAssento = false;
            }
            else if (passagemAssento == PassagensAereas[v].Assento) {
                console.log("O assento ja foi escolhido, escolha outro!");
            }
            else {
                console.log("Assento Disponível!");
                VerificacaoDeAssento = false;
            }
        }
    }
    var passagemPrimeiraClasse = prompt("Deseja ir de primeira classe? s ou n");
    var passagemValor = parseFloat(prompt("Insira o valor da passagem Aérea"));
    var passageiroPassagemAerea = prompt("Insira o nome do passageiro");
    var passageiroPassagem;
    for (var v2 = 0; v2 < Clientes.length; v2++) {
        if (passageiroPassagemAerea == Clientes[v2].Nome) {
            passageiroPassagem = Clientes[v2];
        }
    }
    var passagemVooData = prompt("Insira a data do voo");
    var vooPassagem;
    for (var v3 = 0; v3 < Voos.length; v3++) {
        if (passagemVooData == Voos[v3].Data) {
            vooPassagem = Voos[v3];
        }
    }
    var passagem = new PassagemAerea(passagemAssento, passagemPrimeiraClasse, passagemValor, passageiroPassagem, vooPassagem);
    PassagensAereas.push(passagem);
    passagem.CalcularValor();
    passagem.ExibirResumo(passagemAssento, vooPassagem.Numero, vooPassagem.LocalDestino);
    PostData(passagem);
    for (var v4 = 0; v4 < Voos.length; v4++) {
        if (Voos[v4].LocalPartida == vooPassagem.LocalDestino) {
            console.log(Voos[v4]);
        }
    }
    return passagem;
}
var continuarExecutando = true;
while (continuarExecutando) {
    var opcao = prompt("Para cadastrar um cliente insira (1), Para cadastrar um Voo (2), Para cadastrar um pacote de viagem (3), Para mostrar todas passagens Aéreas (4), Para Mostrar uma passagem aérea pelo ID (5), Para editar uma passagem aérea (6), Para deletar uma passagem aérea (7)");
    switch (opcao) {
        case "1":
            var nome = prompt("Insira um nome");
            var cpf = prompt("Insira um cpf");
            var dataNascimento = prompt("Insira uma data de nascimento");
            var clinte1 = new Cliente(nome, cpf, dataNascimento);
            Clientes.push(clinte1);
            break;
        case "2":
            var empresa = prompt("Insira a Empresa");
            var numero = prompt("Insira o numero do voo");
            var data = prompt("Insira a data do voo");
            var horario = parseInt(prompt("Insira o horário do voo"));
            var localPartida = prompt("Insira o local de partida do voo");
            var localDestino = prompt("Insira o local de destino do voo");
            var voo1 = new Voo(empresa, numero, data, horario, localPartida, localDestino);
            Voos.push(voo1);
            var empresa2 = prompt("Insira a Empresa");
            var numero2 = prompt("Insira o numero do voo");
            var data2 = prompt("Insira a data do voo");
            var horario2 = parseInt(prompt("Insira o horário do voo"));
            var localPartida2 = prompt("Insira o local de partida do voo");
            var localDestino2 = prompt("Insira o local de destino do voo");
            var voo2 = new Voo(empresa2, numero2, data2, horario2, localPartida2, localDestino2);
            Voos.push(voo2);
            break;
        case "3":
            var titular = prompt("Insira o nome do Titular");
            var titularPacoteViagem = void 0;
            for (var index6 = 0; index6 < Clientes.length; index6++) {
                if (titular == Clientes[index6].Nome) {
                    titularPacoteViagem = Clientes[index6];
                }
            }
            console.log(Voos);
            var passagemIdaAssento = void 0;
            var VerificacaoDeAssento = true;
            while (VerificacaoDeAssento) {
                passagemIdaAssento = parseInt(prompt("Qual o assento da sua passagem de Ida?"));
                for (var i = 0; i <= PassagensAereas.length; i++) {
                    if (PassagensAereas.length == 0) {
                        console.log("Assento Disponível!");
                        VerificacaoDeAssento = false;
                    }
                    else if (passagemIdaAssento == PassagensAereas[i].Assento) {
                        console.log("O assento ja foi escolhido, escolha outro!");
                    }
                    else {
                        console.log("Assento Disponível!");
                        VerificacaoDeAssento = false;
                    }
                }
            }
            var passagemIdaPrimeiraClasse = prompt("Deseja ir de primeira classe? s ou n");
            var passagemIdaValor = parseFloat(prompt("Insira o valor da passagem Aérea"));
            var passageiroIda = prompt("Insira o nome do passageiro");
            var passageiroPassagemIda = void 0;
            for (var index2 = 0; index2 < Clientes.length; index2++) {
                if (passageiroIda == Clientes[index2].Nome) {
                    passageiroPassagemIda = Clientes[index2];
                }
            }
            var passagemIdaVoo = prompt("Insira a data do voo");
            var vooIda = void 0;
            for (var index3 = 0; index3 < Voos.length; index3++) {
                if (passagemIdaVoo == Voos[index3].Data) {
                    vooIda = Voos[index3];
                }
            }
            var passagemIda = new PassagemAerea(passagemIdaAssento, passagemIdaPrimeiraClasse, passagemIdaValor, passageiroPassagemIda, vooIda);
            PassagensAereas.push(passagemIda);
            passagemIda.CalcularValor();
            passagemIda.ExibirResumo(passagemIdaAssento, vooIda.Numero, vooIda.LocalDestino);
            PostData(passagemIda);
            for (var contador = 0; contador < Voos.length; contador++) {
                if (Voos[contador].LocalPartida == vooIda.LocalDestino) {
                    console.log(Voos[contador]);
                }
            }
            var passagemVoltaAssento = void 0;
            VerificacaoDeAssento = true;
            while (VerificacaoDeAssento) {
                passagemVoltaAssento = parseInt(prompt("Qual o assento da sua passagem de Volta?"));
                for (var i = 0; i < PassagensAereas.length; i++) {
                    if (PassagensAereas.length == 0) {
                        console.log("Assento Disponível!");
                        VerificacaoDeAssento = false;
                    }
                    else if (passagemVoltaAssento == PassagensAereas[i].Assento) {
                        console.log("O assento ja foi escolhido, escolha outro!");
                    }
                    else {
                        console.log("Assento Disponível!");
                        VerificacaoDeAssento = false;
                    }
                }
            }
            var passagemVoltaPrimeiraClasse = prompt("Deseja ir de primeira classe? s ou n");
            var passagemVoltaValor = parseFloat(prompt("Insira o valor da passagem Aérea"));
            var passageiroVolta = prompt("Insira o nome do passageiro");
            var passageiroPassagemVolta = void 0;
            for (var index4 = 0; index4 < Clientes.length; index4++) {
                if (passageiroVolta == Clientes[index4].Nome) {
                    passageiroPassagemVolta = Clientes[index4];
                }
            }
            var passagemVoltaVoo = prompt("Insira a data do voo");
            var vooVolta = void 0;
            for (var index5 = 0; index5 < Voos.length; index5++) {
                if (passagemVoltaVoo == Voos[index5].Data) {
                    vooVolta = Voos[index5];
                }
            }
            var passagemVolta = new PassagemAerea(passagemVoltaAssento, passagemVoltaPrimeiraClasse, passagemVoltaValor, passageiroPassagemVolta, vooVolta);
            PassagensAereas.push(passagemVolta);
            passagemVolta.CalcularValor();
            passagemVolta.ExibirResumo(passagemVoltaAssento, vooVolta.Numero, vooVolta.LocalDestino);
            PostData(passagemVolta);
            var valorTotalPacote = passagemIdaValor + passagemVoltaValor;
            var pacoteViagem1 = new PacoteViagem(titularPacoteViagem, passagemIda, passagemVolta, valorTotalPacote);
            PacotesDeViagens.push(pacoteViagem1);
            break;
        case "4":
            Get();
            break;
        case "5":
            var id1 = prompt("Insira um id para localizar uma passagem aérea");
            GetID(id1);
            break;
        case "6":
            var id2 = prompt("Insira um id da passagem aérea que deseja atualizar");
            PutData(id2, AdicionarPassagemAerea());
            break;
        case "7":
            var id3 = prompt("Insira um id da passagem aérea que deseja deletar");
            DeleteData(id3);
            break;
        default:
            console.log("Opção Inválida");
            break;
    }
    var desejaContinuar = prompt("Deseja continuar executando? s ou n");
    if (desejaContinuar != "s") {
        continuarExecutando = false;
    }
}
