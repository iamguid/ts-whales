import { FilterBuilder } from "./builder.ts";
import { CelGenerator } from "./cel.ts";

const filter1 = new FilterBuilder(
    FilterBuilder.group.or(
        FilterBuilder.string.eq("test", "test"),
        FilterBuilder.string.eq("test", "tset"),
    )
)

const filter2 = new FilterBuilder(
    FilterBuilder.group.or(
        FilterBuilder.number.eq("test", 1),
        FilterBuilder.number.eq("test", 2),
    )
)

const filter3 = new FilterBuilder(
    FilterBuilder.group.and(
        filter1.expression,
        filter2.expression
    )
)

const celGenerator = new CelGenerator();
const result = celGenerator.visitNode(filter3.expression);
console.log(result);