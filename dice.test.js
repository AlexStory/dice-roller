import { assert } from "https://deno.land/std@0.61.0/testing/asserts.ts";
import { Dice } from './dice.ts'

Deno.test("d6 rolls between 1-6", () => {
    let die = new Dice(6)
    for (let i = 0; i < 999; i++) {
        const roll = die.roll()
        const lte6 = roll <= 6
        const gt0 = roll > 0
        assert(lte6 && gt0, `got a ${roll}`)
    }
})