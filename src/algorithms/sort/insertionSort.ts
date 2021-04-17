import { swap } from "./swap.ts";

export function insertionSort<TValue>(array: TValue[], comparator: (a: TValue, b: TValue) => number) {
    let i = 0;
    let j = 0;

    while (i < array.length) {
        i++;

        j = i;
        while (j >= 0 && comparator(array[j], array[j - 1]) > 0) {
            swap(array, j, j - 1);
            j--;
        }
    }
}