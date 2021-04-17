import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";
import { bubbleSort } from "./bubbleSort.ts";
import { shuffle } from "./shuffle.ts";

const array = shuffle(new Array(5000).fill(null).map((_, i) => i), 42);

bench({
    name: "runs100ForBubbleSort",
    runs: 100,
    func(b): void {
        b.start();
        bubbleSort(array, (a, b) => b - a);
        b.stop();
    },
});

runBenchmarks();
