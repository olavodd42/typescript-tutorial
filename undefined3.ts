function getValue(): string | undefined {
    return 'hello';
  }
              
  let value = getValue();
  // Informa ao TypeScript que value não é undefined ou null
  console.log('value length: ' + value!.length);