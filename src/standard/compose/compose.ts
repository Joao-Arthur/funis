/* eslint-disable max-len */
type unknownFn = (arg: unknown) => unknown;

export function compose<A, B>(
    fnA: (a: A) => B,
): (initialValue: A) => B;

export function compose<A, B, C>(
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => C;

export function compose<A, B, C, D>(
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => D;

export function compose<A, B, C, D, E>(
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => E;

export function compose<A, B, C, D, E, F>(
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => F;

export function compose<A, B, C, D, E, F, G>(
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => G;

export function compose<A, B, C, D, E, F, G, H>(
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => H;

export function compose<A, B, C, D, E, F, G, H, I>(
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => I;

export function compose<A, B, C, D, E, F, G, H, I, J>(
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => J;

export function compose<A, B, C, D, E, F, G, H, I, J, K>(
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => K;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L>(
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => L;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => M;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => N;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => O;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => P;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => Q;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => R;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => S;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    fnS: (s: S) => T,
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => T;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
    fnT: (t: T) => U,
    fnS: (s: S) => T,
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => U;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
    fnU: (u: U) => V,
    fnT: (t: T) => U,
    fnS: (s: S) => T,
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => V;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
    fnV: (v: V) => W,
    fnU: (u: U) => V,
    fnT: (t: T) => U,
    fnS: (s: S) => T,
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => W;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
    fnW: (w: W) => X,
    fnV: (v: V) => W,
    fnU: (u: U) => V,
    fnT: (t: T) => U,
    fnS: (s: S) => T,
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => X;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
    fnX: (x: X) => Y,
    fnW: (w: W) => X,
    fnV: (v: V) => W,
    fnU: (u: U) => V,
    fnT: (t: T) => U,
    fnS: (s: S) => T,
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => Y;

export function compose<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    fnY: (y: Y) => Z,
    fnX: (x: X) => Y,
    fnW: (w: W) => X,
    fnV: (v: V) => W,
    fnU: (u: U) => V,
    fnT: (t: T) => U,
    fnS: (s: S) => T,
    fnR: (r: R) => S,
    fnQ: (q: Q) => R,
    fnP: (p: P) => Q,
    fnO: (o: O) => P,
    fnN: (n: N) => O,
    fnM: (m: M) => N,
    fnL: (l: L) => M,
    fnK: (k: K) => L,
    fnJ: (j: J) => K,
    fnI: (i: I) => J,
    fnH: (h: H) => I,
    fnG: (g: G) => H,
    fnF: (f: F) => G,
    fnE: (e: E) => F,
    fnD: (d: D) => E,
    fnC: (c: C) => D,
    fnB: (b: B) => C,
    fnA: (a: A) => B,
): (initialValue: A) => Z;

export function compose(...fns: unknownFn[]): unknownFn {
    return initialParam => fns.reduceRight((curr, fn) => fn(curr), initialParam);
}