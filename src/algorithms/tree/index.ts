import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";

export class TreeNode {
    public children: TreeNode[] = [];
    public value: number;

    constructor(value: number) {
        this.value = value;
    }
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function generateTree(n: number) {
    const root = new TreeNode(0);
    const allNodes = [root];

    for (let i = 0; i < n; i++) {
        const extendNode = allNodes[getRandomInt(0, allNodes.length - 1)]
        const newNode = new TreeNode(i);
        extendNode.children.push(newNode);
        allNodes.push(newNode);
    }

    return root;
}

function recursiveTraverse(root: TreeNode) {
    function recursive(n: TreeNode) {
        for (const childNode of n.children) {
            recursive(childNode);
        }
    }

    recursive(root)
}

function stackTraverse(root: TreeNode) {
    const stack: TreeNode[] = [root];

    for (const node of stack) {
        stack.unshift();
        stack.push(...node.children);
    }
}

const root = generateTree(100000);

bench({
    name: "runs100ForRecursiveTraverse",
    runs: 100,
    func(b): void {
        b.start();
        recursiveTraverse(root);
        b.stop();
    },
});

bench({
    name: "runs100ForStackTraverse",
    runs: 100,
    func(b): void {
        b.start();
        stackTraverse(root);
        b.stop();
    },
});

runBenchmarks();