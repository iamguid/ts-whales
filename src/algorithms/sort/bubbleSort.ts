import { swap } from "./swap.ts";

export function bubbleSort<TValue>(array: TValue[], comparator: (a: TValue, b: TValue) => number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const compare = comparator(array[i], array[j]);
            
            if (compare === 0) {
                continue;
            } else if (compare > 0) {
                swap(array, i, j)
                continue;
            }
        }
    }
}
