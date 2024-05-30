// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido';
        }

        // Exibir a mensagem incluindo o nome do herói
        console.log(`${this.nome}, o ${this.tipo}, atacou usando ${ataque}`);
    }
}

// Exemplos de uso

// Criar instâncias de heróis
const mago = new Heroi('Gandalf', 300, 'mago');
const guerreiro = new Heroi('Aragorn', 87, 'guerreiro');
const monge = new Heroi('Aang', 112, 'monge');
const ninja = new Heroi('Naruto', 17, 'ninja');

// Chamar o método atacar para cada herói
mago.atacar();        // Saída: Gandalf, o mago, atacou usando magia
guerreiro.atacar();   // Saída: Aragorn, o guerreiro, atacou usando espada
monge.atacar();       // Saída: Aang, o monge, atacou usando artes marciais
ninja.atacar();       // Saída: Naruto, o ninja, atacou usando shuriken

/*
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/