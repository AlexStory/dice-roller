import { assert } from "https://deno.land/std@0.61.0/testing/asserts.ts";
import { 
    Dice,
    d4,
    d6,
    d8,
    d10,
    d12,
    d20,
    d100, 
} from './dice.ts'

Deno.test("d6 rolls between 1-6", () => {
    let die = new Dice(6)
    for (let i = 0; i < 999; i++) {
        const roll = die.roll()
        const lte6 = roll <= 6
        const gt0 = roll > 0
        assert(lte6 && gt0, `got a ${roll}`)
    }
})

Deno.test("can use d4 shorthand", () => {
    const die = d4();
    const roll = die.roll();
    assert(roll <= 4 && roll > 0);
})