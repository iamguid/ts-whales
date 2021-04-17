import { swap } from "./swap.ts";

// original xorshift32 PRNG
const xs32 = (s: number)=>()=>((s^=s<<25,s^=s>>>7,s^=s<<2)>>>0)/2**32;

function getRandomInt(min: number, max: number, seed: number) {
    const rand = xs32(seed);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(rand() * (max - min) + min);
}

export function shuffle<TValue>(array: TValue[], seed: number) {
    for (let count = 0; count < 5; count++) {
        for (let i = 0; i < array.length; i++) {
            const randomIndex = getRandomInt(0, array.length - 1, seed)
            swap(array, i, randomIndex);
        }
    }

    return array;
}
