const tuple = <A extends unknown[]>(...as: A) => as

/** 공집합 */
export const emptySet: Set<never> = new Set()
/** 부분집합 */
export type Subset<A extends Set<unknown>> = A // meaningless
/** 곱집합 */
export type Product<A, B> = Set<[A, B][]>
/** 곱집합 */
export function product<A, B>(setA: Set<A>, setB: Set<B>): Product<A, B> {
    return new Set(
        [...setA].map(a => [...setB].map(b => tuple(a, b)))
    )
}
/** 관계 */
export type Relation<A, B> = Subset<Product<A, B>>
/** 단사 함수 */
export type Injection<X, Y> = (x: X) => Y
/** 전사 함수 */
export type Surjection<X, Y> = (x: X) => Y
/** 전단사 함수 */
export interface Bijection<X, Y> extends Injection<X, Y>, Surjection <X, Y> {}
