# Data Structures Study Project

Um projeto TypeScript para estudar e implementar estruturas de dados fundamentais.

## 📋 Sobre o Projeto

Este projeto foi criado para facilitar o estudo de estruturas de dados utilizando TypeScript. Inclui implementações completas de várias estruturas de dados fundamentais com exemplos práticos de uso.

## 🚀 Como Usar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm

### Instalação
```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório
cd data-structure

# Instale as dependências
npm install
```

### Comandos Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev

# Compilar o projeto
npm run build

# Executar a versão compilada
npm start

# Compilar em modo watch (recompila automaticamente)
npm run build:watch

# Executar em modo watch com ts-node
npm run dev:watch

# Limpar arquivos de build
npm run clean
```

## 📚 Estruturas de Dados Implementadas

### Estruturas Lineares (`src/linear/`)

#### 📚 Stack (Pilha)
- **Arquivo**: `src/linear/Stack.ts`
- **Tipo**: LIFO (Last In, First Out)
- **Métodos principais**:
  - `push(element)` - Adiciona elemento no topo
  - `pop()` - Remove e retorna o elemento do topo
  - `peek()` - Visualiza o elemento do topo sem remover
  - `isEmpty()` - Verifica se está vazia
  - `size()` - Retorna o tamanho

#### 🔄 Queue (Fila)
- **Arquivo**: `src/linear/Queue.ts`
- **Tipo**: FIFO (First In, First Out)
- **Métodos principais**:
  - `enqueue(element)` - Adiciona elemento no final
  - `dequeue()` - Remove e retorna o primeiro elemento
  - `front()` - Visualiza o primeiro elemento
  - `rear()` - Visualiza o último elemento
  - `isEmpty()` - Verifica se está vazia
  - `size()` - Retorna o tamanho

#### 🔗 LinkedList (Lista Ligada)
- **Arquivo**: `src/linear/LinkedList.ts`
- **Tipo**: Lista de nós conectados
- **Métodos principais**:
  - `append(data)` - Adiciona no final
  - `prepend(data)` - Adiciona no início
  - `insert(index, data)` - Insere em posição específica
  - `remove(data)` - Remove primeira ocorrência
  - `get(index)` - Obtém elemento por índice
  - `indexOf(data)` - Encontra índice do elemento

### Estruturas de Árvore (`src/tree/`)

#### 🌳 Binary Search Tree (Árvore Binária de Busca)
- **Arquivo**: `src/tree/BinarySearchTree.ts`
- **Tipo**: Árvore ordenada (esquerda < raiz < direita)
- **Métodos principais**:
  - `insert(data)` - Insere elemento
  - `search(data)` - Busca elemento
  - `remove(data)` - Remove elemento
  - `inorderTraversal()` - Percurso em ordem
  - `preorderTraversal()` - Percurso pré-ordem
  - `postorderTraversal()` - Percurso pós-ordem
  - `height()` - Altura da árvore
  - `findMinValue()` / `findMaxValue()` - Valores mínimo/máximo

## 💡 Exemplos de Uso

### Exemplo Básico
```typescript
import { Stack, Queue, LinkedList, BinarySearchTree } from './src';

// Usando Stack
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// Usando Queue
const queue = new Queue<string>();
queue.enqueue("primeiro");
queue.enqueue("segundo");
console.log(queue.dequeue()); // "primeiro"

// Usando LinkedList
const list = new LinkedList<number>();
list.append(10);
list.prepend(5);
console.log(list.toArray()); // [5, 10]

// Usando Binary Search Tree
const bst = new BinarySearchTree<number>();
bst.insert(50);
bst.insert(30);
bst.insert(70);
console.log(bst.inorderTraversal()); // [30, 50, 70]
```

### Exemplos Avançados
O arquivo `src/examples/StackExamples.ts` contém implementações de:
- ✅ Verificação de parênteses balanceados
- 🔄 Reversão de strings
- 🧮 Avaliação de expressões pós-fixas

Para executar os exemplos:
```bash
npx ts-node src/examples/StackExamples.ts
```

## 📁 Estrutura do Projeto

```
src/
├── index.ts                 # Arquivo principal com demonstrações
├── linear/                  # Estruturas de dados lineares
│   ├── Stack.ts            # Implementação da Pilha
│   ├── Queue.ts            # Implementação da Fila
│   └── LinkedList.ts       # Implementação da Lista Ligada
├── tree/                    # Estruturas de dados em árvore
│   └── BinarySearchTree.ts # Implementação da Árvore Binária de Busca
├── examples/                # Exemplos práticos de uso
│   └── StackExamples.ts    # Exemplos com Stack
├── graph/                   # (Reservado para estruturas de grafos)
└── hash/                    # (Reservado para tabelas hash)
```

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **Node.js** - Runtime de execução
- **ts-node** - Execução direta de TypeScript
- **nodemon** - Auto-reload durante desenvolvimento

## 📖 Para Estudar

Este projeto serve como base para estudar:

1. **Complexidade de Tempo e Espaço** - Análise Big O de cada operação
2. **Padrões de Implementação** - Como implementar estruturas de dados do zero
3. **Casos de Uso** - Quando usar cada estrutura de dados
4. **Algoritmos Fundamentais** - Traversal, busca, inserção, remoção

## 🔄 Próximos Passos

- [ ] Implementar Hash Table
- [ ] Implementar Graph (Grafo)
- [ ] Adicionar algoritmos de ordenação
- [ ] Implementar Heap
- [ ] Adicionar testes unitários
- [ ] Implementar AVL Tree
- [ ] Adicionar análise de complexidade

## 🤝 Contribuição

Sinta-se à vontade para contribuir com:
- Novas estruturas de dados
- Otimizações nas implementações existentes
- Exemplos adicionais
- Documentação melhorada
- Testes unitários

## 📝 Licença

Este projeto está sob a licença ISC.