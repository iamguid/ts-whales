import { swap } from "./swap.ts";

export function selectionSort<TValue>(array: TValue[], comparator: (a: TValue, b: TValue) => number) {
    for (let i = 0; i < array.length; i++) {

        let minIndex = i;

        for (let j = i; j < array.length; j++) {
            if (comparator(array[j], array[minIndex]) > 0) {
                minIndex = j;
                continue;
            }
        }

        if (minIndex !== i) {
            swap(array, minIndex, i)
        }
    }
}
