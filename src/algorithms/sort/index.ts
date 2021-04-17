import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";
import { bubbleSort } from "./bubbleSort.ts";
import { insertionSort } from "./insertionSort.ts";
import { selectionSort } from "./selectionSort.ts";
import { shuffle } from "./shuffle.ts";

const array = new Array(5000).fill(null).map((_, i) => i);
const comparator = (a: number, b: number) => b - a;

let i = 42;

bench({
    name: "runs100ForBubbleSort",
    runs: 100,
    func(b): void {
        b.start();
        shuffle(array, i++);
        bubbleSort(array, comparator);
        b.stop();
    },
});

i = 42;

bench({
    name: "runs100ForInsertionSort",
    runs: 100,
    func(b): void {
        b.start();
        shuffle(array, i++);
        insertionSort(array, comparator);
        b.stop();
    },
});

i = 42;

bench({
    name: "runs100ForSelectionSort",
    runs: 100,
    func(b): void {
        b.start();
        shuffle(array, i++);
        selectionSort(array, comparator);
        b.stop();
    },
});

runBenchmarks();
