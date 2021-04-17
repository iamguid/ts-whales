import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";
import { bubbleSort } from "./bubbleSort.ts";
import { insertionSort } from "./insertionSort.ts";
import { shuffle } from "./shuffle.ts";

const array = new Array(5000).fill(null).map((_, i) => i);

let i = 42;

bench({
    name: "runs100ForBubbleSort",
    runs: 100,
    func(b): void {
        b.start();
        shuffle(array, i++);
        bubbleSort(array, (a, b) => b - a);
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
        insertionSort(array, (a, b) => b - a);
        b.stop();
    },
});

runBenchmarks();
