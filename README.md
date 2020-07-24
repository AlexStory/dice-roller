# dice-roller

Module to create dice and then roll them.

## Examples

```ts
import { Dice } from 'https://github.com/alexstory/dice-roller/mod.ts';

const d6 = new Dice(6);
const result = d6.roll();
console.log(result);

```

## API

### Dice

Class to create a custom n-sided die with `new Dice(n)`

There are also shorthands for the followind dice: d4, d6, d8, d10, d12, d20, d100

They can be used as follows:
```ts
import { d6 } from 'https://github.com/alexstory/dice-roller/mod.ts';

const die = d6();
const roll = die.roll();
console.log(roll);

```

