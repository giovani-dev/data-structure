import { Stack } from '../linear/Stack';

/**
 * Example: Balanced Parentheses Checker
 * Uses a stack to check if parentheses are balanced in a string
 */
export function isBalanced(expression: string): boolean {
  const stack = new Stack<string>();
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];
  const bracketPairs: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of expression) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.isEmpty() || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

/**
 * Example: Reverse a string using Stack
 */
export function reverseString(str: string): string {
  const stack = new Stack<string>();
  
  // Push all characters onto the stack
  for (const char of str) {
    stack.push(char);
  }
  
  // Pop all characters to build reversed string
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  
  return reversed;
}

/**
 * Example: Evaluate Postfix Expression
 */
export function evaluatePostfix(expression: string): number {
  const stack = new Stack<number>();
  const tokens = expression.split(' ');
  
  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      const b = stack.pop()!;
      const a = stack.pop()!;
      
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }
    }
  }
  
  return stack.pop()!;
}

// Demo the stack examples
if (require.main === module) {
  console.log('🔧 Stack Examples:\n');
  
  // Balanced parentheses
  console.log('📝 Balanced Parentheses:');
  const expressions = ['()', '()[]{}', '([{}])', '(()', ')(', '([)]'];
  expressions.forEach(expr => {
    console.log(`  "${expr}" -> ${isBalanced(expr) ? 'Balanced' : 'Not Balanced'}`);
  });
  
  // String reversal
  console.log('\n🔄 String Reversal:');
  const testString = 'Hello World!';
  console.log(`  Original: "${testString}"`);
  console.log(`  Reversed: "${reverseString(testString)}"`);
  
  // Postfix evaluation
  console.log('\n🧮 Postfix Expression Evaluation:');
  const postfixExpr = '3 4 + 2 * 7 /';
  console.log(`  Expression: "${postfixExpr}"`);
  console.log(`  Result: ${evaluatePostfix(postfixExpr)}`);
}