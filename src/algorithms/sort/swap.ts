export function swap<TValue>(array: TValue[], aIndex: number, bIndex: number) {
    const bItem = array[bIndex];
    const aItem = array[aIndex];
    array[aIndex] = bItem;
    array[bIndex] = aItem;
}
