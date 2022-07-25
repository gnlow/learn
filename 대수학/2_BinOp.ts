import {
    Product,

} from "./1_Set.ts"

/** 이항연산 */
export type BinOp<S> = (...[a, b]: Product<S, S>) => S