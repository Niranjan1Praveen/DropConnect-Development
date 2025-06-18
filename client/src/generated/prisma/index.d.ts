
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Volunteer
 * 
 */
export type Volunteer = $Result.DefaultSelection<Prisma.$VolunteerPayload>
/**
 * Model CSR_Main_Table
 * 
 */
export type CSR_Main_Table = $Result.DefaultSelection<Prisma.$CSR_Main_TablePayload>
/**
 * Model VeltrixGlobalSolutions
 * 
 */
export type VeltrixGlobalSolutions = $Result.DefaultSelection<Prisma.$VeltrixGlobalSolutionsPayload>
/**
 * Model NoventraTechnologiesInc
 * 
 */
export type NoventraTechnologiesInc = $Result.DefaultSelection<Prisma.$NoventraTechnologiesIncPayload>
/**
 * Model AureviaInternationalHoldings
 * 
 */
export type AureviaInternationalHoldings = $Result.DefaultSelection<Prisma.$AureviaInternationalHoldingsPayload>
/**
 * Model ZentaraDynamicsCorporation
 * 
 */
export type ZentaraDynamicsCorporation = $Result.DefaultSelection<Prisma.$ZentaraDynamicsCorporationPayload>
/**
 * Model TrionyxSystemsWorldwide
 * 
 */
export type TrionyxSystemsWorldwide = $Result.DefaultSelection<Prisma.$TrionyxSystemsWorldwidePayload>
/**
 * Model Inbox
 * 
 */
export type Inbox = $Result.DefaultSelection<Prisma.$InboxPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  VOLUNTEER: 'VOLUNTEER',
  ORGANIZATION: 'ORGANIZATION',
  CORPORATE: 'CORPORATE'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteer`: Exposes CRUD operations for the **Volunteer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteer.findMany()
    * ```
    */
  get volunteer(): Prisma.VolunteerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cSR_Main_Table`: Exposes CRUD operations for the **CSR_Main_Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CSR_Main_Tables
    * const cSR_Main_Tables = await prisma.cSR_Main_Table.findMany()
    * ```
    */
  get cSR_Main_Table(): Prisma.CSR_Main_TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veltrixGlobalSolutions`: Exposes CRUD operations for the **VeltrixGlobalSolutions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VeltrixGlobalSolutions
    * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.findMany()
    * ```
    */
  get veltrixGlobalSolutions(): Prisma.VeltrixGlobalSolutionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noventraTechnologiesInc`: Exposes CRUD operations for the **NoventraTechnologiesInc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoventraTechnologiesIncs
    * const noventraTechnologiesIncs = await prisma.noventraTechnologiesInc.findMany()
    * ```
    */
  get noventraTechnologiesInc(): Prisma.NoventraTechnologiesIncDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aureviaInternationalHoldings`: Exposes CRUD operations for the **AureviaInternationalHoldings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AureviaInternationalHoldings
    * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.findMany()
    * ```
    */
  get aureviaInternationalHoldings(): Prisma.AureviaInternationalHoldingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zentaraDynamicsCorporation`: Exposes CRUD operations for the **ZentaraDynamicsCorporation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZentaraDynamicsCorporations
    * const zentaraDynamicsCorporations = await prisma.zentaraDynamicsCorporation.findMany()
    * ```
    */
  get zentaraDynamicsCorporation(): Prisma.ZentaraDynamicsCorporationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trionyxSystemsWorldwide`: Exposes CRUD operations for the **TrionyxSystemsWorldwide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrionyxSystemsWorldwides
    * const trionyxSystemsWorldwides = await prisma.trionyxSystemsWorldwide.findMany()
    * ```
    */
  get trionyxSystemsWorldwide(): Prisma.TrionyxSystemsWorldwideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inbox`: Exposes CRUD operations for the **Inbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inboxes
    * const inboxes = await prisma.inbox.findMany()
    * ```
    */
  get inbox(): Prisma.InboxDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    Volunteer: 'Volunteer',
    CSR_Main_Table: 'CSR_Main_Table',
    VeltrixGlobalSolutions: 'VeltrixGlobalSolutions',
    NoventraTechnologiesInc: 'NoventraTechnologiesInc',
    AureviaInternationalHoldings: 'AureviaInternationalHoldings',
    ZentaraDynamicsCorporation: 'ZentaraDynamicsCorporation',
    TrionyxSystemsWorldwide: 'TrionyxSystemsWorldwide',
    Inbox: 'Inbox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "volunteer" | "cSR_Main_Table" | "veltrixGlobalSolutions" | "noventraTechnologiesInc" | "aureviaInternationalHoldings" | "zentaraDynamicsCorporation" | "trionyxSystemsWorldwide" | "inbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Volunteer: {
        payload: Prisma.$VolunteerPayload<ExtArgs>
        fields: Prisma.VolunteerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findFirst: {
            args: Prisma.VolunteerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findMany: {
            args: Prisma.VolunteerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          create: {
            args: Prisma.VolunteerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          createMany: {
            args: Prisma.VolunteerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          delete: {
            args: Prisma.VolunteerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          update: {
            args: Prisma.VolunteerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteer>
          }
          groupBy: {
            args: Prisma.VolunteerGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerCountAggregateOutputType> | number
          }
        }
      }
      CSR_Main_Table: {
        payload: Prisma.$CSR_Main_TablePayload<ExtArgs>
        fields: Prisma.CSR_Main_TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CSR_Main_TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CSR_Main_TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>
          }
          findFirst: {
            args: Prisma.CSR_Main_TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CSR_Main_TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>
          }
          findMany: {
            args: Prisma.CSR_Main_TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>[]
          }
          create: {
            args: Prisma.CSR_Main_TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>
          }
          createMany: {
            args: Prisma.CSR_Main_TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CSR_Main_TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>[]
          }
          delete: {
            args: Prisma.CSR_Main_TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>
          }
          update: {
            args: Prisma.CSR_Main_TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>
          }
          deleteMany: {
            args: Prisma.CSR_Main_TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CSR_Main_TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CSR_Main_TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>[]
          }
          upsert: {
            args: Prisma.CSR_Main_TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSR_Main_TablePayload>
          }
          aggregate: {
            args: Prisma.CSR_Main_TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCSR_Main_Table>
          }
          groupBy: {
            args: Prisma.CSR_Main_TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<CSR_Main_TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.CSR_Main_TableCountArgs<ExtArgs>
            result: $Utils.Optional<CSR_Main_TableCountAggregateOutputType> | number
          }
        }
      }
      VeltrixGlobalSolutions: {
        payload: Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>
        fields: Prisma.VeltrixGlobalSolutionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeltrixGlobalSolutionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeltrixGlobalSolutionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>
          }
          findFirst: {
            args: Prisma.VeltrixGlobalSolutionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeltrixGlobalSolutionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>
          }
          findMany: {
            args: Prisma.VeltrixGlobalSolutionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>[]
          }
          create: {
            args: Prisma.VeltrixGlobalSolutionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>
          }
          createMany: {
            args: Prisma.VeltrixGlobalSolutionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeltrixGlobalSolutionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>[]
          }
          delete: {
            args: Prisma.VeltrixGlobalSolutionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>
          }
          update: {
            args: Prisma.VeltrixGlobalSolutionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>
          }
          deleteMany: {
            args: Prisma.VeltrixGlobalSolutionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeltrixGlobalSolutionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeltrixGlobalSolutionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>[]
          }
          upsert: {
            args: Prisma.VeltrixGlobalSolutionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeltrixGlobalSolutionsPayload>
          }
          aggregate: {
            args: Prisma.VeltrixGlobalSolutionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeltrixGlobalSolutions>
          }
          groupBy: {
            args: Prisma.VeltrixGlobalSolutionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeltrixGlobalSolutionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeltrixGlobalSolutionsCountArgs<ExtArgs>
            result: $Utils.Optional<VeltrixGlobalSolutionsCountAggregateOutputType> | number
          }
        }
      }
      NoventraTechnologiesInc: {
        payload: Prisma.$NoventraTechnologiesIncPayload<ExtArgs>
        fields: Prisma.NoventraTechnologiesIncFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoventraTechnologiesIncFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoventraTechnologiesIncFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>
          }
          findFirst: {
            args: Prisma.NoventraTechnologiesIncFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoventraTechnologiesIncFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>
          }
          findMany: {
            args: Prisma.NoventraTechnologiesIncFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>[]
          }
          create: {
            args: Prisma.NoventraTechnologiesIncCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>
          }
          createMany: {
            args: Prisma.NoventraTechnologiesIncCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoventraTechnologiesIncCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>[]
          }
          delete: {
            args: Prisma.NoventraTechnologiesIncDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>
          }
          update: {
            args: Prisma.NoventraTechnologiesIncUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>
          }
          deleteMany: {
            args: Prisma.NoventraTechnologiesIncDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoventraTechnologiesIncUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoventraTechnologiesIncUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>[]
          }
          upsert: {
            args: Prisma.NoventraTechnologiesIncUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoventraTechnologiesIncPayload>
          }
          aggregate: {
            args: Prisma.NoventraTechnologiesIncAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoventraTechnologiesInc>
          }
          groupBy: {
            args: Prisma.NoventraTechnologiesIncGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoventraTechnologiesIncGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoventraTechnologiesIncCountArgs<ExtArgs>
            result: $Utils.Optional<NoventraTechnologiesIncCountAggregateOutputType> | number
          }
        }
      }
      AureviaInternationalHoldings: {
        payload: Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>
        fields: Prisma.AureviaInternationalHoldingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AureviaInternationalHoldingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AureviaInternationalHoldingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>
          }
          findFirst: {
            args: Prisma.AureviaInternationalHoldingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AureviaInternationalHoldingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>
          }
          findMany: {
            args: Prisma.AureviaInternationalHoldingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>[]
          }
          create: {
            args: Prisma.AureviaInternationalHoldingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>
          }
          createMany: {
            args: Prisma.AureviaInternationalHoldingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AureviaInternationalHoldingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>[]
          }
          delete: {
            args: Prisma.AureviaInternationalHoldingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>
          }
          update: {
            args: Prisma.AureviaInternationalHoldingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>
          }
          deleteMany: {
            args: Prisma.AureviaInternationalHoldingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AureviaInternationalHoldingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AureviaInternationalHoldingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>[]
          }
          upsert: {
            args: Prisma.AureviaInternationalHoldingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AureviaInternationalHoldingsPayload>
          }
          aggregate: {
            args: Prisma.AureviaInternationalHoldingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAureviaInternationalHoldings>
          }
          groupBy: {
            args: Prisma.AureviaInternationalHoldingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AureviaInternationalHoldingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AureviaInternationalHoldingsCountArgs<ExtArgs>
            result: $Utils.Optional<AureviaInternationalHoldingsCountAggregateOutputType> | number
          }
        }
      }
      ZentaraDynamicsCorporation: {
        payload: Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>
        fields: Prisma.ZentaraDynamicsCorporationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZentaraDynamicsCorporationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZentaraDynamicsCorporationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>
          }
          findFirst: {
            args: Prisma.ZentaraDynamicsCorporationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZentaraDynamicsCorporationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>
          }
          findMany: {
            args: Prisma.ZentaraDynamicsCorporationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>[]
          }
          create: {
            args: Prisma.ZentaraDynamicsCorporationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>
          }
          createMany: {
            args: Prisma.ZentaraDynamicsCorporationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZentaraDynamicsCorporationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>[]
          }
          delete: {
            args: Prisma.ZentaraDynamicsCorporationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>
          }
          update: {
            args: Prisma.ZentaraDynamicsCorporationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>
          }
          deleteMany: {
            args: Prisma.ZentaraDynamicsCorporationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZentaraDynamicsCorporationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZentaraDynamicsCorporationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>[]
          }
          upsert: {
            args: Prisma.ZentaraDynamicsCorporationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZentaraDynamicsCorporationPayload>
          }
          aggregate: {
            args: Prisma.ZentaraDynamicsCorporationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZentaraDynamicsCorporation>
          }
          groupBy: {
            args: Prisma.ZentaraDynamicsCorporationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZentaraDynamicsCorporationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZentaraDynamicsCorporationCountArgs<ExtArgs>
            result: $Utils.Optional<ZentaraDynamicsCorporationCountAggregateOutputType> | number
          }
        }
      }
      TrionyxSystemsWorldwide: {
        payload: Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>
        fields: Prisma.TrionyxSystemsWorldwideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrionyxSystemsWorldwideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrionyxSystemsWorldwideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>
          }
          findFirst: {
            args: Prisma.TrionyxSystemsWorldwideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrionyxSystemsWorldwideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>
          }
          findMany: {
            args: Prisma.TrionyxSystemsWorldwideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>[]
          }
          create: {
            args: Prisma.TrionyxSystemsWorldwideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>
          }
          createMany: {
            args: Prisma.TrionyxSystemsWorldwideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrionyxSystemsWorldwideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>[]
          }
          delete: {
            args: Prisma.TrionyxSystemsWorldwideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>
          }
          update: {
            args: Prisma.TrionyxSystemsWorldwideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>
          }
          deleteMany: {
            args: Prisma.TrionyxSystemsWorldwideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrionyxSystemsWorldwideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrionyxSystemsWorldwideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>[]
          }
          upsert: {
            args: Prisma.TrionyxSystemsWorldwideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrionyxSystemsWorldwidePayload>
          }
          aggregate: {
            args: Prisma.TrionyxSystemsWorldwideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrionyxSystemsWorldwide>
          }
          groupBy: {
            args: Prisma.TrionyxSystemsWorldwideGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrionyxSystemsWorldwideGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrionyxSystemsWorldwideCountArgs<ExtArgs>
            result: $Utils.Optional<TrionyxSystemsWorldwideCountAggregateOutputType> | number
          }
        }
      }
      Inbox: {
        payload: Prisma.$InboxPayload<ExtArgs>
        fields: Prisma.InboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          findFirst: {
            args: Prisma.InboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          findMany: {
            args: Prisma.InboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>[]
          }
          create: {
            args: Prisma.InboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          createMany: {
            args: Prisma.InboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>[]
          }
          delete: {
            args: Prisma.InboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          update: {
            args: Prisma.InboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          deleteMany: {
            args: Prisma.InboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>[]
          }
          upsert: {
            args: Prisma.InboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          aggregate: {
            args: Prisma.InboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInbox>
          }
          groupBy: {
            args: Prisma.InboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboxCountArgs<ExtArgs>
            result: $Utils.Optional<InboxCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    volunteer?: VolunteerOmit
    cSR_Main_Table?: CSR_Main_TableOmit
    veltrixGlobalSolutions?: VeltrixGlobalSolutionsOmit
    noventraTechnologiesInc?: NoventraTechnologiesIncOmit
    aureviaInternationalHoldings?: AureviaInternationalHoldingsOmit
    zentaraDynamicsCorporation?: ZentaraDynamicsCorporationOmit
    trionyxSystemsWorldwide?: TrionyxSystemsWorldwideOmit
    inbox?: InboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Event: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | UserCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    createdAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    createdAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    profileImage: number
    createdAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    role?: boolean
    Event?: boolean | User$EventArgs<ExtArgs>
    Volunteer?: boolean | User$VolunteerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "profileImage" | "createdAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | User$EventArgs<ExtArgs>
    Volunteer?: boolean | User$VolunteerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
      Volunteer: Prisma.$VolunteerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      lastName: string
      profileImage: string
      createdAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends User$EventArgs<ExtArgs> = {}>(args?: Subset<T, User$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Volunteer<T extends User$VolunteerArgs<ExtArgs> = {}>(args?: Subset<T, User$VolunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Event
   */
  export type User$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.Volunteer
   */
  export type User$VolunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    volunteerCapacity: number | null
  }

  export type EventSumAggregateOutputType = {
    volunteerCapacity: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    eventName: string | null
    eventDescription: string | null
    organizerName: string | null
    email: string | null
    contact: string | null
    eventLocation: string | null
    volunteerCapacity: number | null
    registrationLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    SkillsRequired: string | null
    InternshipRoles: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    eventName: string | null
    eventDescription: string | null
    organizerName: string | null
    email: string | null
    contact: string | null
    eventLocation: string | null
    volunteerCapacity: number | null
    registrationLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    SkillsRequired: string | null
    InternshipRoles: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    eventName: number
    eventDescription: number
    organizerName: number
    email: number
    contact: number
    eventLocation: number
    volunteerCapacity: number
    registrationLink: number
    createdAt: number
    updatedAt: number
    userId: number
    SkillsRequired: number
    InternshipRoles: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    volunteerCapacity?: true
  }

  export type EventSumAggregateInputType = {
    volunteerCapacity?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    eventName?: true
    eventDescription?: true
    organizerName?: true
    email?: true
    contact?: true
    eventLocation?: true
    volunteerCapacity?: true
    registrationLink?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    SkillsRequired?: true
    InternshipRoles?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    eventName?: true
    eventDescription?: true
    organizerName?: true
    email?: true
    contact?: true
    eventLocation?: true
    volunteerCapacity?: true
    registrationLink?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    SkillsRequired?: true
    InternshipRoles?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    eventName?: true
    eventDescription?: true
    organizerName?: true
    email?: true
    contact?: true
    eventLocation?: true
    volunteerCapacity?: true
    registrationLink?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    SkillsRequired?: true
    InternshipRoles?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    eventName: string
    eventDescription: string
    organizerName: string
    email: string
    contact: string
    eventLocation: string
    volunteerCapacity: number
    registrationLink: string | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    SkillsRequired: string | null
    InternshipRoles: string | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    email?: boolean
    contact?: boolean
    eventLocation?: boolean
    volunteerCapacity?: boolean
    registrationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    SkillsRequired?: boolean
    InternshipRoles?: boolean
    User?: boolean | Event$UserArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    email?: boolean
    contact?: boolean
    eventLocation?: boolean
    volunteerCapacity?: boolean
    registrationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    SkillsRequired?: boolean
    InternshipRoles?: boolean
    User?: boolean | Event$UserArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    email?: boolean
    contact?: boolean
    eventLocation?: boolean
    volunteerCapacity?: boolean
    registrationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    SkillsRequired?: boolean
    InternshipRoles?: boolean
    User?: boolean | Event$UserArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    email?: boolean
    contact?: boolean
    eventLocation?: boolean
    volunteerCapacity?: boolean
    registrationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    SkillsRequired?: boolean
    InternshipRoles?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventName" | "eventDescription" | "organizerName" | "email" | "contact" | "eventLocation" | "volunteerCapacity" | "registrationLink" | "createdAt" | "updatedAt" | "userId" | "SkillsRequired" | "InternshipRoles", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Event$UserArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Event$UserArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Event$UserArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventName: string
      eventDescription: string
      organizerName: string
      email: string
      contact: string
      eventLocation: string
      volunteerCapacity: number
      registrationLink: string | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
      SkillsRequired: string | null
      InternshipRoles: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Event$UserArgs<ExtArgs> = {}>(args?: Subset<T, Event$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly eventName: FieldRef<"Event", 'String'>
    readonly eventDescription: FieldRef<"Event", 'String'>
    readonly organizerName: FieldRef<"Event", 'String'>
    readonly email: FieldRef<"Event", 'String'>
    readonly contact: FieldRef<"Event", 'String'>
    readonly eventLocation: FieldRef<"Event", 'String'>
    readonly volunteerCapacity: FieldRef<"Event", 'Int'>
    readonly registrationLink: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly userId: FieldRef<"Event", 'String'>
    readonly SkillsRequired: FieldRef<"Event", 'String'>
    readonly InternshipRoles: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.User
   */
  export type Event$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Volunteer
   */

  export type AggregateVolunteer = {
    _count: VolunteerCountAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  export type VolunteerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    salutation: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    homeStreet: string | null
    homeCity: string | null
    homeState: string | null
    postalCode: string | null
    homeCountry: string | null
    mobilePhone: string | null
    employer: string | null
    educationalLevel: string | null
    maritalStatus: string | null
    employmentStatus: string | null
    willingTravelDistance: string | null
    helpInDisaster: boolean | null
    hasDisability: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    salutation: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    homeStreet: string | null
    homeCity: string | null
    homeState: string | null
    postalCode: string | null
    homeCountry: string | null
    mobilePhone: string | null
    employer: string | null
    educationalLevel: string | null
    maritalStatus: string | null
    employmentStatus: string | null
    willingTravelDistance: string | null
    helpInDisaster: boolean | null
    hasDisability: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerCountAggregateOutputType = {
    id: number
    userId: number
    salutation: number
    firstName: number
    lastName: number
    dateOfBirth: number
    gender: number
    homeStreet: number
    homeCity: number
    homeState: number
    postalCode: number
    homeCountry: number
    mobilePhone: number
    employer: number
    educationalLevel: number
    maritalStatus: number
    employmentStatus: number
    willingTravelDistance: number
    helpInDisaster: number
    hasDisability: number
    skills: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VolunteerMinAggregateInputType = {
    id?: true
    userId?: true
    salutation?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    homeStreet?: true
    homeCity?: true
    homeState?: true
    postalCode?: true
    homeCountry?: true
    mobilePhone?: true
    employer?: true
    educationalLevel?: true
    maritalStatus?: true
    employmentStatus?: true
    willingTravelDistance?: true
    helpInDisaster?: true
    hasDisability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerMaxAggregateInputType = {
    id?: true
    userId?: true
    salutation?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    homeStreet?: true
    homeCity?: true
    homeState?: true
    postalCode?: true
    homeCountry?: true
    mobilePhone?: true
    employer?: true
    educationalLevel?: true
    maritalStatus?: true
    employmentStatus?: true
    willingTravelDistance?: true
    helpInDisaster?: true
    hasDisability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerCountAggregateInputType = {
    id?: true
    userId?: true
    salutation?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    homeStreet?: true
    homeCity?: true
    homeState?: true
    postalCode?: true
    homeCountry?: true
    mobilePhone?: true
    employer?: true
    educationalLevel?: true
    maritalStatus?: true
    employmentStatus?: true
    willingTravelDistance?: true
    helpInDisaster?: true
    hasDisability?: true
    skills?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VolunteerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteer to aggregate.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volunteers
    **/
    _count?: true | VolunteerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerMaxAggregateInputType
  }

  export type GetVolunteerAggregateType<T extends VolunteerAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteer[P]>
      : GetScalarType<T[P], AggregateVolunteer[P]>
  }




  export type VolunteerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithAggregationInput | VolunteerOrderByWithAggregationInput[]
    by: VolunteerScalarFieldEnum[] | VolunteerScalarFieldEnum
    having?: VolunteerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerCountAggregateInputType | true
    _min?: VolunteerMinAggregateInputType
    _max?: VolunteerMaxAggregateInputType
  }

  export type VolunteerGroupByOutputType = {
    id: string
    userId: string
    salutation: string | null
    firstName: string
    lastName: string
    dateOfBirth: Date | null
    gender: string | null
    homeStreet: string | null
    homeCity: string | null
    homeState: string | null
    postalCode: string | null
    homeCountry: string | null
    mobilePhone: string
    employer: string | null
    educationalLevel: string | null
    maritalStatus: string | null
    employmentStatus: string | null
    willingTravelDistance: string | null
    helpInDisaster: boolean
    hasDisability: boolean
    skills: string[]
    createdAt: Date
    updatedAt: Date
    _count: VolunteerCountAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  type GetVolunteerGroupByPayload<T extends VolunteerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    salutation?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    homeStreet?: boolean
    homeCity?: boolean
    homeState?: boolean
    postalCode?: boolean
    homeCountry?: boolean
    mobilePhone?: boolean
    employer?: boolean
    educationalLevel?: boolean
    maritalStatus?: boolean
    employmentStatus?: boolean
    willingTravelDistance?: boolean
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    salutation?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    homeStreet?: boolean
    homeCity?: boolean
    homeState?: boolean
    postalCode?: boolean
    homeCountry?: boolean
    mobilePhone?: boolean
    employer?: boolean
    educationalLevel?: boolean
    maritalStatus?: boolean
    employmentStatus?: boolean
    willingTravelDistance?: boolean
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    salutation?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    homeStreet?: boolean
    homeCity?: boolean
    homeState?: boolean
    postalCode?: boolean
    homeCountry?: boolean
    mobilePhone?: boolean
    employer?: boolean
    educationalLevel?: boolean
    maritalStatus?: boolean
    employmentStatus?: boolean
    willingTravelDistance?: boolean
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectScalar = {
    id?: boolean
    userId?: boolean
    salutation?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    homeStreet?: boolean
    homeCity?: boolean
    homeState?: boolean
    postalCode?: boolean
    homeCountry?: boolean
    mobilePhone?: boolean
    employer?: boolean
    educationalLevel?: boolean
    maritalStatus?: boolean
    employmentStatus?: boolean
    willingTravelDistance?: boolean
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VolunteerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "salutation" | "firstName" | "lastName" | "dateOfBirth" | "gender" | "homeStreet" | "homeCity" | "homeState" | "postalCode" | "homeCountry" | "mobilePhone" | "employer" | "educationalLevel" | "maritalStatus" | "employmentStatus" | "willingTravelDistance" | "helpInDisaster" | "hasDisability" | "skills" | "createdAt" | "updatedAt", ExtArgs["result"]["volunteer"]>
  export type VolunteerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VolunteerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volunteer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      salutation: string | null
      firstName: string
      lastName: string
      dateOfBirth: Date | null
      gender: string | null
      homeStreet: string | null
      homeCity: string | null
      homeState: string | null
      postalCode: string | null
      homeCountry: string | null
      mobilePhone: string
      employer: string | null
      educationalLevel: string | null
      maritalStatus: string | null
      employmentStatus: string | null
      willingTravelDistance: string | null
      helpInDisaster: boolean
      hasDisability: boolean
      skills: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["volunteer"]>
    composites: {}
  }

  type VolunteerGetPayload<S extends boolean | null | undefined | VolunteerDefaultArgs> = $Result.GetResult<Prisma.$VolunteerPayload, S>

  type VolunteerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerCountAggregateInputType | true
    }

  export interface VolunteerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volunteer'], meta: { name: 'Volunteer' } }
    /**
     * Find zero or one Volunteer that matches the filter.
     * @param {VolunteerFindUniqueArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerFindUniqueArgs>(args: SelectSubset<T, VolunteerFindUniqueArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volunteer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerFindUniqueOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerFindFirstArgs>(args?: SelectSubset<T, VolunteerFindFirstArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteer.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerFindManyArgs>(args?: SelectSubset<T, VolunteerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volunteer.
     * @param {VolunteerCreateArgs} args - Arguments to create a Volunteer.
     * @example
     * // Create one Volunteer
     * const Volunteer = await prisma.volunteer.create({
     *   data: {
     *     // ... data to create a Volunteer
     *   }
     * })
     * 
     */
    create<T extends VolunteerCreateArgs>(args: SelectSubset<T, VolunteerCreateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volunteers.
     * @param {VolunteerCreateManyArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerCreateManyArgs>(args?: SelectSubset<T, VolunteerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volunteers and returns the data saved in the database.
     * @param {VolunteerCreateManyAndReturnArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volunteer.
     * @param {VolunteerDeleteArgs} args - Arguments to delete one Volunteer.
     * @example
     * // Delete one Volunteer
     * const Volunteer = await prisma.volunteer.delete({
     *   where: {
     *     // ... filter to delete one Volunteer
     *   }
     * })
     * 
     */
    delete<T extends VolunteerDeleteArgs>(args: SelectSubset<T, VolunteerDeleteArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volunteer.
     * @param {VolunteerUpdateArgs} args - Arguments to update one Volunteer.
     * @example
     * // Update one Volunteer
     * const volunteer = await prisma.volunteer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerUpdateArgs>(args: SelectSubset<T, VolunteerUpdateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volunteers.
     * @param {VolunteerDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerDeleteManyArgs>(args?: SelectSubset<T, VolunteerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerUpdateManyArgs>(args: SelectSubset<T, VolunteerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers and returns the data updated in the database.
     * @param {VolunteerUpdateManyAndReturnArgs} args - Arguments to update many Volunteers.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volunteer.
     * @param {VolunteerUpsertArgs} args - Arguments to update or create a Volunteer.
     * @example
     * // Update or create a Volunteer
     * const volunteer = await prisma.volunteer.upsert({
     *   create: {
     *     // ... data to create a Volunteer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteer we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerUpsertArgs>(args: SelectSubset<T, VolunteerUpsertArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteer.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends VolunteerCountArgs>(
      args?: Subset<T, VolunteerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerAggregateArgs>(args: Subset<T, VolunteerAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAggregateType<T>>

    /**
     * Group by Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volunteer model
   */
  readonly fields: VolunteerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volunteer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Volunteer model
   */
  interface VolunteerFieldRefs {
    readonly id: FieldRef<"Volunteer", 'String'>
    readonly userId: FieldRef<"Volunteer", 'String'>
    readonly salutation: FieldRef<"Volunteer", 'String'>
    readonly firstName: FieldRef<"Volunteer", 'String'>
    readonly lastName: FieldRef<"Volunteer", 'String'>
    readonly dateOfBirth: FieldRef<"Volunteer", 'DateTime'>
    readonly gender: FieldRef<"Volunteer", 'String'>
    readonly homeStreet: FieldRef<"Volunteer", 'String'>
    readonly homeCity: FieldRef<"Volunteer", 'String'>
    readonly homeState: FieldRef<"Volunteer", 'String'>
    readonly postalCode: FieldRef<"Volunteer", 'String'>
    readonly homeCountry: FieldRef<"Volunteer", 'String'>
    readonly mobilePhone: FieldRef<"Volunteer", 'String'>
    readonly employer: FieldRef<"Volunteer", 'String'>
    readonly educationalLevel: FieldRef<"Volunteer", 'String'>
    readonly maritalStatus: FieldRef<"Volunteer", 'String'>
    readonly employmentStatus: FieldRef<"Volunteer", 'String'>
    readonly willingTravelDistance: FieldRef<"Volunteer", 'String'>
    readonly helpInDisaster: FieldRef<"Volunteer", 'Boolean'>
    readonly hasDisability: FieldRef<"Volunteer", 'Boolean'>
    readonly skills: FieldRef<"Volunteer", 'String[]'>
    readonly createdAt: FieldRef<"Volunteer", 'DateTime'>
    readonly updatedAt: FieldRef<"Volunteer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Volunteer findUnique
   */
  export type VolunteerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findUniqueOrThrow
   */
  export type VolunteerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findFirst
   */
  export type VolunteerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findFirstOrThrow
   */
  export type VolunteerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findMany
   */
  export type VolunteerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteers to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer create
   */
  export type VolunteerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to create a Volunteer.
     */
    data: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
  }

  /**
   * Volunteer createMany
   */
  export type VolunteerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volunteer createManyAndReturn
   */
  export type VolunteerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer update
   */
  export type VolunteerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to update a Volunteer.
     */
    data: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
    /**
     * Choose, which Volunteer to update.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer updateMany
   */
  export type VolunteerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
  }

  /**
   * Volunteer updateManyAndReturn
   */
  export type VolunteerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer upsert
   */
  export type VolunteerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The filter to search for the Volunteer to update in case it exists.
     */
    where: VolunteerWhereUniqueInput
    /**
     * In case the Volunteer found by the `where` argument doesn't exist, create a new Volunteer with this data.
     */
    create: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
    /**
     * In case the Volunteer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
  }

  /**
   * Volunteer delete
   */
  export type VolunteerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter which Volunteer to delete.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer deleteMany
   */
  export type VolunteerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteers to delete
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to delete.
     */
    limit?: number
  }

  /**
   * Volunteer without action
   */
  export type VolunteerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
  }


  /**
   * Model CSR_Main_Table
   */

  export type AggregateCSR_Main_Table = {
    _count: CSR_Main_TableCountAggregateOutputType | null
    _avg: CSR_Main_TableAvgAggregateOutputType | null
    _sum: CSR_Main_TableSumAggregateOutputType | null
    _min: CSR_Main_TableMinAggregateOutputType | null
    _max: CSR_Main_TableMaxAggregateOutputType | null
  }

  export type CSR_Main_TableAvgAggregateOutputType = {
    NumberOfVolunteers: number | null
    VolunteerHoursLogged: Decimal | null
    CommunityBeneficiaries: number | null
    CSRBudgetAllocated: Decimal | null
    CSRBudgetUtilized: Decimal | null
    VolunteerFeedbackScore: number | null
    CommunitySatisfactionScore: number | null
  }

  export type CSR_Main_TableSumAggregateOutputType = {
    NumberOfVolunteers: number | null
    VolunteerHoursLogged: Decimal | null
    CommunityBeneficiaries: number | null
    CSRBudgetAllocated: Decimal | null
    CSRBudgetUtilized: Decimal | null
    VolunteerFeedbackScore: number | null
    CommunitySatisfactionScore: number | null
  }

  export type CSR_Main_TableMinAggregateOutputType = {
    EventID: string | null
    ActivityName: string | null
    LocationVillageCity: string | null
    District: string | null
    State: string | null
    DateOfImplementation: Date | null
    NumberOfVolunteers: number | null
    CorporateSponsor: string | null
    NGOPartner: string | null
    VolunteerHoursLogged: Decimal | null
    GenderDistribution: string | null
    CommunityBeneficiaries: number | null
    CSRBudgetAllocated: Decimal | null
    CSRBudgetUtilized: Decimal | null
    VolunteerFeedbackScore: number | null
    CommunitySatisfactionScore: number | null
    RemarksChallenges: string | null
  }

  export type CSR_Main_TableMaxAggregateOutputType = {
    EventID: string | null
    ActivityName: string | null
    LocationVillageCity: string | null
    District: string | null
    State: string | null
    DateOfImplementation: Date | null
    NumberOfVolunteers: number | null
    CorporateSponsor: string | null
    NGOPartner: string | null
    VolunteerHoursLogged: Decimal | null
    GenderDistribution: string | null
    CommunityBeneficiaries: number | null
    CSRBudgetAllocated: Decimal | null
    CSRBudgetUtilized: Decimal | null
    VolunteerFeedbackScore: number | null
    CommunitySatisfactionScore: number | null
    RemarksChallenges: string | null
  }

  export type CSR_Main_TableCountAggregateOutputType = {
    EventID: number
    ActivityName: number
    LocationVillageCity: number
    District: number
    State: number
    DateOfImplementation: number
    NumberOfVolunteers: number
    CorporateSponsor: number
    NGOPartner: number
    VolunteerHoursLogged: number
    GenderDistribution: number
    CommunityBeneficiaries: number
    CSRBudgetAllocated: number
    CSRBudgetUtilized: number
    VolunteerFeedbackScore: number
    CommunitySatisfactionScore: number
    RemarksChallenges: number
    _all: number
  }


  export type CSR_Main_TableAvgAggregateInputType = {
    NumberOfVolunteers?: true
    VolunteerHoursLogged?: true
    CommunityBeneficiaries?: true
    CSRBudgetAllocated?: true
    CSRBudgetUtilized?: true
    VolunteerFeedbackScore?: true
    CommunitySatisfactionScore?: true
  }

  export type CSR_Main_TableSumAggregateInputType = {
    NumberOfVolunteers?: true
    VolunteerHoursLogged?: true
    CommunityBeneficiaries?: true
    CSRBudgetAllocated?: true
    CSRBudgetUtilized?: true
    VolunteerFeedbackScore?: true
    CommunitySatisfactionScore?: true
  }

  export type CSR_Main_TableMinAggregateInputType = {
    EventID?: true
    ActivityName?: true
    LocationVillageCity?: true
    District?: true
    State?: true
    DateOfImplementation?: true
    NumberOfVolunteers?: true
    CorporateSponsor?: true
    NGOPartner?: true
    VolunteerHoursLogged?: true
    GenderDistribution?: true
    CommunityBeneficiaries?: true
    CSRBudgetAllocated?: true
    CSRBudgetUtilized?: true
    VolunteerFeedbackScore?: true
    CommunitySatisfactionScore?: true
    RemarksChallenges?: true
  }

  export type CSR_Main_TableMaxAggregateInputType = {
    EventID?: true
    ActivityName?: true
    LocationVillageCity?: true
    District?: true
    State?: true
    DateOfImplementation?: true
    NumberOfVolunteers?: true
    CorporateSponsor?: true
    NGOPartner?: true
    VolunteerHoursLogged?: true
    GenderDistribution?: true
    CommunityBeneficiaries?: true
    CSRBudgetAllocated?: true
    CSRBudgetUtilized?: true
    VolunteerFeedbackScore?: true
    CommunitySatisfactionScore?: true
    RemarksChallenges?: true
  }

  export type CSR_Main_TableCountAggregateInputType = {
    EventID?: true
    ActivityName?: true
    LocationVillageCity?: true
    District?: true
    State?: true
    DateOfImplementation?: true
    NumberOfVolunteers?: true
    CorporateSponsor?: true
    NGOPartner?: true
    VolunteerHoursLogged?: true
    GenderDistribution?: true
    CommunityBeneficiaries?: true
    CSRBudgetAllocated?: true
    CSRBudgetUtilized?: true
    VolunteerFeedbackScore?: true
    CommunitySatisfactionScore?: true
    RemarksChallenges?: true
    _all?: true
  }

  export type CSR_Main_TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CSR_Main_Table to aggregate.
     */
    where?: CSR_Main_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSR_Main_Tables to fetch.
     */
    orderBy?: CSR_Main_TableOrderByWithRelationInput | CSR_Main_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CSR_Main_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSR_Main_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSR_Main_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CSR_Main_Tables
    **/
    _count?: true | CSR_Main_TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CSR_Main_TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CSR_Main_TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CSR_Main_TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CSR_Main_TableMaxAggregateInputType
  }

  export type GetCSR_Main_TableAggregateType<T extends CSR_Main_TableAggregateArgs> = {
        [P in keyof T & keyof AggregateCSR_Main_Table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCSR_Main_Table[P]>
      : GetScalarType<T[P], AggregateCSR_Main_Table[P]>
  }




  export type CSR_Main_TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CSR_Main_TableWhereInput
    orderBy?: CSR_Main_TableOrderByWithAggregationInput | CSR_Main_TableOrderByWithAggregationInput[]
    by: CSR_Main_TableScalarFieldEnum[] | CSR_Main_TableScalarFieldEnum
    having?: CSR_Main_TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CSR_Main_TableCountAggregateInputType | true
    _avg?: CSR_Main_TableAvgAggregateInputType
    _sum?: CSR_Main_TableSumAggregateInputType
    _min?: CSR_Main_TableMinAggregateInputType
    _max?: CSR_Main_TableMaxAggregateInputType
  }

  export type CSR_Main_TableGroupByOutputType = {
    EventID: string
    ActivityName: string
    LocationVillageCity: string
    District: string
    State: string
    DateOfImplementation: Date
    NumberOfVolunteers: number
    CorporateSponsor: string
    NGOPartner: string
    VolunteerHoursLogged: Decimal
    GenderDistribution: string
    CommunityBeneficiaries: number
    CSRBudgetAllocated: Decimal
    CSRBudgetUtilized: Decimal
    VolunteerFeedbackScore: number
    CommunitySatisfactionScore: number
    RemarksChallenges: string
    _count: CSR_Main_TableCountAggregateOutputType | null
    _avg: CSR_Main_TableAvgAggregateOutputType | null
    _sum: CSR_Main_TableSumAggregateOutputType | null
    _min: CSR_Main_TableMinAggregateOutputType | null
    _max: CSR_Main_TableMaxAggregateOutputType | null
  }

  type GetCSR_Main_TableGroupByPayload<T extends CSR_Main_TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CSR_Main_TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CSR_Main_TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CSR_Main_TableGroupByOutputType[P]>
            : GetScalarType<T[P], CSR_Main_TableGroupByOutputType[P]>
        }
      >
    >


  export type CSR_Main_TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    ActivityName?: boolean
    LocationVillageCity?: boolean
    District?: boolean
    State?: boolean
    DateOfImplementation?: boolean
    NumberOfVolunteers?: boolean
    CorporateSponsor?: boolean
    NGOPartner?: boolean
    VolunteerHoursLogged?: boolean
    GenderDistribution?: boolean
    CommunityBeneficiaries?: boolean
    CSRBudgetAllocated?: boolean
    CSRBudgetUtilized?: boolean
    VolunteerFeedbackScore?: boolean
    CommunitySatisfactionScore?: boolean
    RemarksChallenges?: boolean
  }, ExtArgs["result"]["cSR_Main_Table"]>

  export type CSR_Main_TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    ActivityName?: boolean
    LocationVillageCity?: boolean
    District?: boolean
    State?: boolean
    DateOfImplementation?: boolean
    NumberOfVolunteers?: boolean
    CorporateSponsor?: boolean
    NGOPartner?: boolean
    VolunteerHoursLogged?: boolean
    GenderDistribution?: boolean
    CommunityBeneficiaries?: boolean
    CSRBudgetAllocated?: boolean
    CSRBudgetUtilized?: boolean
    VolunteerFeedbackScore?: boolean
    CommunitySatisfactionScore?: boolean
    RemarksChallenges?: boolean
  }, ExtArgs["result"]["cSR_Main_Table"]>

  export type CSR_Main_TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    ActivityName?: boolean
    LocationVillageCity?: boolean
    District?: boolean
    State?: boolean
    DateOfImplementation?: boolean
    NumberOfVolunteers?: boolean
    CorporateSponsor?: boolean
    NGOPartner?: boolean
    VolunteerHoursLogged?: boolean
    GenderDistribution?: boolean
    CommunityBeneficiaries?: boolean
    CSRBudgetAllocated?: boolean
    CSRBudgetUtilized?: boolean
    VolunteerFeedbackScore?: boolean
    CommunitySatisfactionScore?: boolean
    RemarksChallenges?: boolean
  }, ExtArgs["result"]["cSR_Main_Table"]>

  export type CSR_Main_TableSelectScalar = {
    EventID?: boolean
    ActivityName?: boolean
    LocationVillageCity?: boolean
    District?: boolean
    State?: boolean
    DateOfImplementation?: boolean
    NumberOfVolunteers?: boolean
    CorporateSponsor?: boolean
    NGOPartner?: boolean
    VolunteerHoursLogged?: boolean
    GenderDistribution?: boolean
    CommunityBeneficiaries?: boolean
    CSRBudgetAllocated?: boolean
    CSRBudgetUtilized?: boolean
    VolunteerFeedbackScore?: boolean
    CommunitySatisfactionScore?: boolean
    RemarksChallenges?: boolean
  }

  export type CSR_Main_TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EventID" | "ActivityName" | "LocationVillageCity" | "District" | "State" | "DateOfImplementation" | "NumberOfVolunteers" | "CorporateSponsor" | "NGOPartner" | "VolunteerHoursLogged" | "GenderDistribution" | "CommunityBeneficiaries" | "CSRBudgetAllocated" | "CSRBudgetUtilized" | "VolunteerFeedbackScore" | "CommunitySatisfactionScore" | "RemarksChallenges", ExtArgs["result"]["cSR_Main_Table"]>

  export type $CSR_Main_TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CSR_Main_Table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      EventID: string
      ActivityName: string
      LocationVillageCity: string
      District: string
      State: string
      DateOfImplementation: Date
      NumberOfVolunteers: number
      CorporateSponsor: string
      NGOPartner: string
      VolunteerHoursLogged: Prisma.Decimal
      GenderDistribution: string
      CommunityBeneficiaries: number
      CSRBudgetAllocated: Prisma.Decimal
      CSRBudgetUtilized: Prisma.Decimal
      VolunteerFeedbackScore: number
      CommunitySatisfactionScore: number
      RemarksChallenges: string
    }, ExtArgs["result"]["cSR_Main_Table"]>
    composites: {}
  }

  type CSR_Main_TableGetPayload<S extends boolean | null | undefined | CSR_Main_TableDefaultArgs> = $Result.GetResult<Prisma.$CSR_Main_TablePayload, S>

  type CSR_Main_TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CSR_Main_TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CSR_Main_TableCountAggregateInputType | true
    }

  export interface CSR_Main_TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CSR_Main_Table'], meta: { name: 'CSR_Main_Table' } }
    /**
     * Find zero or one CSR_Main_Table that matches the filter.
     * @param {CSR_Main_TableFindUniqueArgs} args - Arguments to find a CSR_Main_Table
     * @example
     * // Get one CSR_Main_Table
     * const cSR_Main_Table = await prisma.cSR_Main_Table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CSR_Main_TableFindUniqueArgs>(args: SelectSubset<T, CSR_Main_TableFindUniqueArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CSR_Main_Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CSR_Main_TableFindUniqueOrThrowArgs} args - Arguments to find a CSR_Main_Table
     * @example
     * // Get one CSR_Main_Table
     * const cSR_Main_Table = await prisma.cSR_Main_Table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CSR_Main_TableFindUniqueOrThrowArgs>(args: SelectSubset<T, CSR_Main_TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CSR_Main_Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSR_Main_TableFindFirstArgs} args - Arguments to find a CSR_Main_Table
     * @example
     * // Get one CSR_Main_Table
     * const cSR_Main_Table = await prisma.cSR_Main_Table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CSR_Main_TableFindFirstArgs>(args?: SelectSubset<T, CSR_Main_TableFindFirstArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CSR_Main_Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSR_Main_TableFindFirstOrThrowArgs} args - Arguments to find a CSR_Main_Table
     * @example
     * // Get one CSR_Main_Table
     * const cSR_Main_Table = await prisma.cSR_Main_Table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CSR_Main_TableFindFirstOrThrowArgs>(args?: SelectSubset<T, CSR_Main_TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CSR_Main_Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSR_Main_TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CSR_Main_Tables
     * const cSR_Main_Tables = await prisma.cSR_Main_Table.findMany()
     * 
     * // Get first 10 CSR_Main_Tables
     * const cSR_Main_Tables = await prisma.cSR_Main_Table.findMany({ take: 10 })
     * 
     * // Only select the `EventID`
     * const cSR_Main_TableWithEventIDOnly = await prisma.cSR_Main_Table.findMany({ select: { EventID: true } })
     * 
     */
    findMany<T extends CSR_Main_TableFindManyArgs>(args?: SelectSubset<T, CSR_Main_TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CSR_Main_Table.
     * @param {CSR_Main_TableCreateArgs} args - Arguments to create a CSR_Main_Table.
     * @example
     * // Create one CSR_Main_Table
     * const CSR_Main_Table = await prisma.cSR_Main_Table.create({
     *   data: {
     *     // ... data to create a CSR_Main_Table
     *   }
     * })
     * 
     */
    create<T extends CSR_Main_TableCreateArgs>(args: SelectSubset<T, CSR_Main_TableCreateArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CSR_Main_Tables.
     * @param {CSR_Main_TableCreateManyArgs} args - Arguments to create many CSR_Main_Tables.
     * @example
     * // Create many CSR_Main_Tables
     * const cSR_Main_Table = await prisma.cSR_Main_Table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CSR_Main_TableCreateManyArgs>(args?: SelectSubset<T, CSR_Main_TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CSR_Main_Tables and returns the data saved in the database.
     * @param {CSR_Main_TableCreateManyAndReturnArgs} args - Arguments to create many CSR_Main_Tables.
     * @example
     * // Create many CSR_Main_Tables
     * const cSR_Main_Table = await prisma.cSR_Main_Table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CSR_Main_Tables and only return the `EventID`
     * const cSR_Main_TableWithEventIDOnly = await prisma.cSR_Main_Table.createManyAndReturn({
     *   select: { EventID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CSR_Main_TableCreateManyAndReturnArgs>(args?: SelectSubset<T, CSR_Main_TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CSR_Main_Table.
     * @param {CSR_Main_TableDeleteArgs} args - Arguments to delete one CSR_Main_Table.
     * @example
     * // Delete one CSR_Main_Table
     * const CSR_Main_Table = await prisma.cSR_Main_Table.delete({
     *   where: {
     *     // ... filter to delete one CSR_Main_Table
     *   }
     * })
     * 
     */
    delete<T extends CSR_Main_TableDeleteArgs>(args: SelectSubset<T, CSR_Main_TableDeleteArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CSR_Main_Table.
     * @param {CSR_Main_TableUpdateArgs} args - Arguments to update one CSR_Main_Table.
     * @example
     * // Update one CSR_Main_Table
     * const cSR_Main_Table = await prisma.cSR_Main_Table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CSR_Main_TableUpdateArgs>(args: SelectSubset<T, CSR_Main_TableUpdateArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CSR_Main_Tables.
     * @param {CSR_Main_TableDeleteManyArgs} args - Arguments to filter CSR_Main_Tables to delete.
     * @example
     * // Delete a few CSR_Main_Tables
     * const { count } = await prisma.cSR_Main_Table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CSR_Main_TableDeleteManyArgs>(args?: SelectSubset<T, CSR_Main_TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CSR_Main_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSR_Main_TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CSR_Main_Tables
     * const cSR_Main_Table = await prisma.cSR_Main_Table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CSR_Main_TableUpdateManyArgs>(args: SelectSubset<T, CSR_Main_TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CSR_Main_Tables and returns the data updated in the database.
     * @param {CSR_Main_TableUpdateManyAndReturnArgs} args - Arguments to update many CSR_Main_Tables.
     * @example
     * // Update many CSR_Main_Tables
     * const cSR_Main_Table = await prisma.cSR_Main_Table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CSR_Main_Tables and only return the `EventID`
     * const cSR_Main_TableWithEventIDOnly = await prisma.cSR_Main_Table.updateManyAndReturn({
     *   select: { EventID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CSR_Main_TableUpdateManyAndReturnArgs>(args: SelectSubset<T, CSR_Main_TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CSR_Main_Table.
     * @param {CSR_Main_TableUpsertArgs} args - Arguments to update or create a CSR_Main_Table.
     * @example
     * // Update or create a CSR_Main_Table
     * const cSR_Main_Table = await prisma.cSR_Main_Table.upsert({
     *   create: {
     *     // ... data to create a CSR_Main_Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CSR_Main_Table we want to update
     *   }
     * })
     */
    upsert<T extends CSR_Main_TableUpsertArgs>(args: SelectSubset<T, CSR_Main_TableUpsertArgs<ExtArgs>>): Prisma__CSR_Main_TableClient<$Result.GetResult<Prisma.$CSR_Main_TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CSR_Main_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSR_Main_TableCountArgs} args - Arguments to filter CSR_Main_Tables to count.
     * @example
     * // Count the number of CSR_Main_Tables
     * const count = await prisma.cSR_Main_Table.count({
     *   where: {
     *     // ... the filter for the CSR_Main_Tables we want to count
     *   }
     * })
    **/
    count<T extends CSR_Main_TableCountArgs>(
      args?: Subset<T, CSR_Main_TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CSR_Main_TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CSR_Main_Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSR_Main_TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CSR_Main_TableAggregateArgs>(args: Subset<T, CSR_Main_TableAggregateArgs>): Prisma.PrismaPromise<GetCSR_Main_TableAggregateType<T>>

    /**
     * Group by CSR_Main_Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSR_Main_TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CSR_Main_TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CSR_Main_TableGroupByArgs['orderBy'] }
        : { orderBy?: CSR_Main_TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CSR_Main_TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCSR_Main_TableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CSR_Main_Table model
   */
  readonly fields: CSR_Main_TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CSR_Main_Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CSR_Main_TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CSR_Main_Table model
   */
  interface CSR_Main_TableFieldRefs {
    readonly EventID: FieldRef<"CSR_Main_Table", 'String'>
    readonly ActivityName: FieldRef<"CSR_Main_Table", 'String'>
    readonly LocationVillageCity: FieldRef<"CSR_Main_Table", 'String'>
    readonly District: FieldRef<"CSR_Main_Table", 'String'>
    readonly State: FieldRef<"CSR_Main_Table", 'String'>
    readonly DateOfImplementation: FieldRef<"CSR_Main_Table", 'DateTime'>
    readonly NumberOfVolunteers: FieldRef<"CSR_Main_Table", 'Int'>
    readonly CorporateSponsor: FieldRef<"CSR_Main_Table", 'String'>
    readonly NGOPartner: FieldRef<"CSR_Main_Table", 'String'>
    readonly VolunteerHoursLogged: FieldRef<"CSR_Main_Table", 'Decimal'>
    readonly GenderDistribution: FieldRef<"CSR_Main_Table", 'String'>
    readonly CommunityBeneficiaries: FieldRef<"CSR_Main_Table", 'Int'>
    readonly CSRBudgetAllocated: FieldRef<"CSR_Main_Table", 'Decimal'>
    readonly CSRBudgetUtilized: FieldRef<"CSR_Main_Table", 'Decimal'>
    readonly VolunteerFeedbackScore: FieldRef<"CSR_Main_Table", 'Int'>
    readonly CommunitySatisfactionScore: FieldRef<"CSR_Main_Table", 'Int'>
    readonly RemarksChallenges: FieldRef<"CSR_Main_Table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CSR_Main_Table findUnique
   */
  export type CSR_Main_TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * Filter, which CSR_Main_Table to fetch.
     */
    where: CSR_Main_TableWhereUniqueInput
  }

  /**
   * CSR_Main_Table findUniqueOrThrow
   */
  export type CSR_Main_TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * Filter, which CSR_Main_Table to fetch.
     */
    where: CSR_Main_TableWhereUniqueInput
  }

  /**
   * CSR_Main_Table findFirst
   */
  export type CSR_Main_TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * Filter, which CSR_Main_Table to fetch.
     */
    where?: CSR_Main_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSR_Main_Tables to fetch.
     */
    orderBy?: CSR_Main_TableOrderByWithRelationInput | CSR_Main_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CSR_Main_Tables.
     */
    cursor?: CSR_Main_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSR_Main_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSR_Main_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CSR_Main_Tables.
     */
    distinct?: CSR_Main_TableScalarFieldEnum | CSR_Main_TableScalarFieldEnum[]
  }

  /**
   * CSR_Main_Table findFirstOrThrow
   */
  export type CSR_Main_TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * Filter, which CSR_Main_Table to fetch.
     */
    where?: CSR_Main_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSR_Main_Tables to fetch.
     */
    orderBy?: CSR_Main_TableOrderByWithRelationInput | CSR_Main_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CSR_Main_Tables.
     */
    cursor?: CSR_Main_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSR_Main_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSR_Main_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CSR_Main_Tables.
     */
    distinct?: CSR_Main_TableScalarFieldEnum | CSR_Main_TableScalarFieldEnum[]
  }

  /**
   * CSR_Main_Table findMany
   */
  export type CSR_Main_TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * Filter, which CSR_Main_Tables to fetch.
     */
    where?: CSR_Main_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSR_Main_Tables to fetch.
     */
    orderBy?: CSR_Main_TableOrderByWithRelationInput | CSR_Main_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CSR_Main_Tables.
     */
    cursor?: CSR_Main_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSR_Main_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSR_Main_Tables.
     */
    skip?: number
    distinct?: CSR_Main_TableScalarFieldEnum | CSR_Main_TableScalarFieldEnum[]
  }

  /**
   * CSR_Main_Table create
   */
  export type CSR_Main_TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * The data needed to create a CSR_Main_Table.
     */
    data: XOR<CSR_Main_TableCreateInput, CSR_Main_TableUncheckedCreateInput>
  }

  /**
   * CSR_Main_Table createMany
   */
  export type CSR_Main_TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CSR_Main_Tables.
     */
    data: CSR_Main_TableCreateManyInput | CSR_Main_TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CSR_Main_Table createManyAndReturn
   */
  export type CSR_Main_TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * The data used to create many CSR_Main_Tables.
     */
    data: CSR_Main_TableCreateManyInput | CSR_Main_TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CSR_Main_Table update
   */
  export type CSR_Main_TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * The data needed to update a CSR_Main_Table.
     */
    data: XOR<CSR_Main_TableUpdateInput, CSR_Main_TableUncheckedUpdateInput>
    /**
     * Choose, which CSR_Main_Table to update.
     */
    where: CSR_Main_TableWhereUniqueInput
  }

  /**
   * CSR_Main_Table updateMany
   */
  export type CSR_Main_TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CSR_Main_Tables.
     */
    data: XOR<CSR_Main_TableUpdateManyMutationInput, CSR_Main_TableUncheckedUpdateManyInput>
    /**
     * Filter which CSR_Main_Tables to update
     */
    where?: CSR_Main_TableWhereInput
    /**
     * Limit how many CSR_Main_Tables to update.
     */
    limit?: number
  }

  /**
   * CSR_Main_Table updateManyAndReturn
   */
  export type CSR_Main_TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * The data used to update CSR_Main_Tables.
     */
    data: XOR<CSR_Main_TableUpdateManyMutationInput, CSR_Main_TableUncheckedUpdateManyInput>
    /**
     * Filter which CSR_Main_Tables to update
     */
    where?: CSR_Main_TableWhereInput
    /**
     * Limit how many CSR_Main_Tables to update.
     */
    limit?: number
  }

  /**
   * CSR_Main_Table upsert
   */
  export type CSR_Main_TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * The filter to search for the CSR_Main_Table to update in case it exists.
     */
    where: CSR_Main_TableWhereUniqueInput
    /**
     * In case the CSR_Main_Table found by the `where` argument doesn't exist, create a new CSR_Main_Table with this data.
     */
    create: XOR<CSR_Main_TableCreateInput, CSR_Main_TableUncheckedCreateInput>
    /**
     * In case the CSR_Main_Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CSR_Main_TableUpdateInput, CSR_Main_TableUncheckedUpdateInput>
  }

  /**
   * CSR_Main_Table delete
   */
  export type CSR_Main_TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
    /**
     * Filter which CSR_Main_Table to delete.
     */
    where: CSR_Main_TableWhereUniqueInput
  }

  /**
   * CSR_Main_Table deleteMany
   */
  export type CSR_Main_TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CSR_Main_Tables to delete
     */
    where?: CSR_Main_TableWhereInput
    /**
     * Limit how many CSR_Main_Tables to delete.
     */
    limit?: number
  }

  /**
   * CSR_Main_Table without action
   */
  export type CSR_Main_TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSR_Main_Table
     */
    select?: CSR_Main_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSR_Main_Table
     */
    omit?: CSR_Main_TableOmit<ExtArgs> | null
  }


  /**
   * Model VeltrixGlobalSolutions
   */

  export type AggregateVeltrixGlobalSolutions = {
    _count: VeltrixGlobalSolutionsCountAggregateOutputType | null
    _avg: VeltrixGlobalSolutionsAvgAggregateOutputType | null
    _sum: VeltrixGlobalSolutionsSumAggregateOutputType | null
    _min: VeltrixGlobalSolutionsMinAggregateOutputType | null
    _max: VeltrixGlobalSolutionsMaxAggregateOutputType | null
  }

  export type VeltrixGlobalSolutionsAvgAggregateOutputType = {
    HouseholdsCovered: number | null
    AwarenessKitsDistributed: number | null
    MockDrillsConducted: number | null
  }

  export type VeltrixGlobalSolutionsSumAggregateOutputType = {
    HouseholdsCovered: number | null
    AwarenessKitsDistributed: number | null
    MockDrillsConducted: number | null
  }

  export type VeltrixGlobalSolutionsMinAggregateOutputType = {
    EventID: string | null
    HouseholdsCovered: number | null
    AwarenessKitsDistributed: number | null
    MockDrillsConducted: number | null
    EarlyWarningSystemInstalled: string | null
    LocalAuthorityCollaboration: string | null
  }

  export type VeltrixGlobalSolutionsMaxAggregateOutputType = {
    EventID: string | null
    HouseholdsCovered: number | null
    AwarenessKitsDistributed: number | null
    MockDrillsConducted: number | null
    EarlyWarningSystemInstalled: string | null
    LocalAuthorityCollaboration: string | null
  }

  export type VeltrixGlobalSolutionsCountAggregateOutputType = {
    EventID: number
    HouseholdsCovered: number
    AwarenessKitsDistributed: number
    MockDrillsConducted: number
    EarlyWarningSystemInstalled: number
    LocalAuthorityCollaboration: number
    _all: number
  }


  export type VeltrixGlobalSolutionsAvgAggregateInputType = {
    HouseholdsCovered?: true
    AwarenessKitsDistributed?: true
    MockDrillsConducted?: true
  }

  export type VeltrixGlobalSolutionsSumAggregateInputType = {
    HouseholdsCovered?: true
    AwarenessKitsDistributed?: true
    MockDrillsConducted?: true
  }

  export type VeltrixGlobalSolutionsMinAggregateInputType = {
    EventID?: true
    HouseholdsCovered?: true
    AwarenessKitsDistributed?: true
    MockDrillsConducted?: true
    EarlyWarningSystemInstalled?: true
    LocalAuthorityCollaboration?: true
  }

  export type VeltrixGlobalSolutionsMaxAggregateInputType = {
    EventID?: true
    HouseholdsCovered?: true
    AwarenessKitsDistributed?: true
    MockDrillsConducted?: true
    EarlyWarningSystemInstalled?: true
    LocalAuthorityCollaboration?: true
  }

  export type VeltrixGlobalSolutionsCountAggregateInputType = {
    EventID?: true
    HouseholdsCovered?: true
    AwarenessKitsDistributed?: true
    MockDrillsConducted?: true
    EarlyWarningSystemInstalled?: true
    LocalAuthorityCollaboration?: true
    _all?: true
  }

  export type VeltrixGlobalSolutionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeltrixGlobalSolutions to aggregate.
     */
    where?: VeltrixGlobalSolutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeltrixGlobalSolutions to fetch.
     */
    orderBy?: VeltrixGlobalSolutionsOrderByWithRelationInput | VeltrixGlobalSolutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeltrixGlobalSolutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeltrixGlobalSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeltrixGlobalSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VeltrixGlobalSolutions
    **/
    _count?: true | VeltrixGlobalSolutionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeltrixGlobalSolutionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeltrixGlobalSolutionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeltrixGlobalSolutionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeltrixGlobalSolutionsMaxAggregateInputType
  }

  export type GetVeltrixGlobalSolutionsAggregateType<T extends VeltrixGlobalSolutionsAggregateArgs> = {
        [P in keyof T & keyof AggregateVeltrixGlobalSolutions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeltrixGlobalSolutions[P]>
      : GetScalarType<T[P], AggregateVeltrixGlobalSolutions[P]>
  }




  export type VeltrixGlobalSolutionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeltrixGlobalSolutionsWhereInput
    orderBy?: VeltrixGlobalSolutionsOrderByWithAggregationInput | VeltrixGlobalSolutionsOrderByWithAggregationInput[]
    by: VeltrixGlobalSolutionsScalarFieldEnum[] | VeltrixGlobalSolutionsScalarFieldEnum
    having?: VeltrixGlobalSolutionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeltrixGlobalSolutionsCountAggregateInputType | true
    _avg?: VeltrixGlobalSolutionsAvgAggregateInputType
    _sum?: VeltrixGlobalSolutionsSumAggregateInputType
    _min?: VeltrixGlobalSolutionsMinAggregateInputType
    _max?: VeltrixGlobalSolutionsMaxAggregateInputType
  }

  export type VeltrixGlobalSolutionsGroupByOutputType = {
    EventID: string
    HouseholdsCovered: number
    AwarenessKitsDistributed: number
    MockDrillsConducted: number
    EarlyWarningSystemInstalled: string
    LocalAuthorityCollaboration: string
    _count: VeltrixGlobalSolutionsCountAggregateOutputType | null
    _avg: VeltrixGlobalSolutionsAvgAggregateOutputType | null
    _sum: VeltrixGlobalSolutionsSumAggregateOutputType | null
    _min: VeltrixGlobalSolutionsMinAggregateOutputType | null
    _max: VeltrixGlobalSolutionsMaxAggregateOutputType | null
  }

  type GetVeltrixGlobalSolutionsGroupByPayload<T extends VeltrixGlobalSolutionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeltrixGlobalSolutionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeltrixGlobalSolutionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeltrixGlobalSolutionsGroupByOutputType[P]>
            : GetScalarType<T[P], VeltrixGlobalSolutionsGroupByOutputType[P]>
        }
      >
    >


  export type VeltrixGlobalSolutionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    HouseholdsCovered?: boolean
    AwarenessKitsDistributed?: boolean
    MockDrillsConducted?: boolean
    EarlyWarningSystemInstalled?: boolean
    LocalAuthorityCollaboration?: boolean
  }, ExtArgs["result"]["veltrixGlobalSolutions"]>

  export type VeltrixGlobalSolutionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    HouseholdsCovered?: boolean
    AwarenessKitsDistributed?: boolean
    MockDrillsConducted?: boolean
    EarlyWarningSystemInstalled?: boolean
    LocalAuthorityCollaboration?: boolean
  }, ExtArgs["result"]["veltrixGlobalSolutions"]>

  export type VeltrixGlobalSolutionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    HouseholdsCovered?: boolean
    AwarenessKitsDistributed?: boolean
    MockDrillsConducted?: boolean
    EarlyWarningSystemInstalled?: boolean
    LocalAuthorityCollaboration?: boolean
  }, ExtArgs["result"]["veltrixGlobalSolutions"]>

  export type VeltrixGlobalSolutionsSelectScalar = {
    EventID?: boolean
    HouseholdsCovered?: boolean
    AwarenessKitsDistributed?: boolean
    MockDrillsConducted?: boolean
    EarlyWarningSystemInstalled?: boolean
    LocalAuthorityCollaboration?: boolean
  }

  export type VeltrixGlobalSolutionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EventID" | "HouseholdsCovered" | "AwarenessKitsDistributed" | "MockDrillsConducted" | "EarlyWarningSystemInstalled" | "LocalAuthorityCollaboration", ExtArgs["result"]["veltrixGlobalSolutions"]>

  export type $VeltrixGlobalSolutionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VeltrixGlobalSolutions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      EventID: string
      HouseholdsCovered: number
      AwarenessKitsDistributed: number
      MockDrillsConducted: number
      EarlyWarningSystemInstalled: string
      LocalAuthorityCollaboration: string
    }, ExtArgs["result"]["veltrixGlobalSolutions"]>
    composites: {}
  }

  type VeltrixGlobalSolutionsGetPayload<S extends boolean | null | undefined | VeltrixGlobalSolutionsDefaultArgs> = $Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload, S>

  type VeltrixGlobalSolutionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeltrixGlobalSolutionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeltrixGlobalSolutionsCountAggregateInputType | true
    }

  export interface VeltrixGlobalSolutionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VeltrixGlobalSolutions'], meta: { name: 'VeltrixGlobalSolutions' } }
    /**
     * Find zero or one VeltrixGlobalSolutions that matches the filter.
     * @param {VeltrixGlobalSolutionsFindUniqueArgs} args - Arguments to find a VeltrixGlobalSolutions
     * @example
     * // Get one VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeltrixGlobalSolutionsFindUniqueArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsFindUniqueArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VeltrixGlobalSolutions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeltrixGlobalSolutionsFindUniqueOrThrowArgs} args - Arguments to find a VeltrixGlobalSolutions
     * @example
     * // Get one VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeltrixGlobalSolutionsFindUniqueOrThrowArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VeltrixGlobalSolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeltrixGlobalSolutionsFindFirstArgs} args - Arguments to find a VeltrixGlobalSolutions
     * @example
     * // Get one VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeltrixGlobalSolutionsFindFirstArgs>(args?: SelectSubset<T, VeltrixGlobalSolutionsFindFirstArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VeltrixGlobalSolutions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeltrixGlobalSolutionsFindFirstOrThrowArgs} args - Arguments to find a VeltrixGlobalSolutions
     * @example
     * // Get one VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeltrixGlobalSolutionsFindFirstOrThrowArgs>(args?: SelectSubset<T, VeltrixGlobalSolutionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VeltrixGlobalSolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeltrixGlobalSolutionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.findMany()
     * 
     * // Get first 10 VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.findMany({ take: 10 })
     * 
     * // Only select the `EventID`
     * const veltrixGlobalSolutionsWithEventIDOnly = await prisma.veltrixGlobalSolutions.findMany({ select: { EventID: true } })
     * 
     */
    findMany<T extends VeltrixGlobalSolutionsFindManyArgs>(args?: SelectSubset<T, VeltrixGlobalSolutionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VeltrixGlobalSolutions.
     * @param {VeltrixGlobalSolutionsCreateArgs} args - Arguments to create a VeltrixGlobalSolutions.
     * @example
     * // Create one VeltrixGlobalSolutions
     * const VeltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.create({
     *   data: {
     *     // ... data to create a VeltrixGlobalSolutions
     *   }
     * })
     * 
     */
    create<T extends VeltrixGlobalSolutionsCreateArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsCreateArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VeltrixGlobalSolutions.
     * @param {VeltrixGlobalSolutionsCreateManyArgs} args - Arguments to create many VeltrixGlobalSolutions.
     * @example
     * // Create many VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeltrixGlobalSolutionsCreateManyArgs>(args?: SelectSubset<T, VeltrixGlobalSolutionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VeltrixGlobalSolutions and returns the data saved in the database.
     * @param {VeltrixGlobalSolutionsCreateManyAndReturnArgs} args - Arguments to create many VeltrixGlobalSolutions.
     * @example
     * // Create many VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VeltrixGlobalSolutions and only return the `EventID`
     * const veltrixGlobalSolutionsWithEventIDOnly = await prisma.veltrixGlobalSolutions.createManyAndReturn({
     *   select: { EventID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeltrixGlobalSolutionsCreateManyAndReturnArgs>(args?: SelectSubset<T, VeltrixGlobalSolutionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VeltrixGlobalSolutions.
     * @param {VeltrixGlobalSolutionsDeleteArgs} args - Arguments to delete one VeltrixGlobalSolutions.
     * @example
     * // Delete one VeltrixGlobalSolutions
     * const VeltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.delete({
     *   where: {
     *     // ... filter to delete one VeltrixGlobalSolutions
     *   }
     * })
     * 
     */
    delete<T extends VeltrixGlobalSolutionsDeleteArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsDeleteArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VeltrixGlobalSolutions.
     * @param {VeltrixGlobalSolutionsUpdateArgs} args - Arguments to update one VeltrixGlobalSolutions.
     * @example
     * // Update one VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeltrixGlobalSolutionsUpdateArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsUpdateArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VeltrixGlobalSolutions.
     * @param {VeltrixGlobalSolutionsDeleteManyArgs} args - Arguments to filter VeltrixGlobalSolutions to delete.
     * @example
     * // Delete a few VeltrixGlobalSolutions
     * const { count } = await prisma.veltrixGlobalSolutions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeltrixGlobalSolutionsDeleteManyArgs>(args?: SelectSubset<T, VeltrixGlobalSolutionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeltrixGlobalSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeltrixGlobalSolutionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeltrixGlobalSolutionsUpdateManyArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeltrixGlobalSolutions and returns the data updated in the database.
     * @param {VeltrixGlobalSolutionsUpdateManyAndReturnArgs} args - Arguments to update many VeltrixGlobalSolutions.
     * @example
     * // Update many VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VeltrixGlobalSolutions and only return the `EventID`
     * const veltrixGlobalSolutionsWithEventIDOnly = await prisma.veltrixGlobalSolutions.updateManyAndReturn({
     *   select: { EventID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VeltrixGlobalSolutionsUpdateManyAndReturnArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VeltrixGlobalSolutions.
     * @param {VeltrixGlobalSolutionsUpsertArgs} args - Arguments to update or create a VeltrixGlobalSolutions.
     * @example
     * // Update or create a VeltrixGlobalSolutions
     * const veltrixGlobalSolutions = await prisma.veltrixGlobalSolutions.upsert({
     *   create: {
     *     // ... data to create a VeltrixGlobalSolutions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VeltrixGlobalSolutions we want to update
     *   }
     * })
     */
    upsert<T extends VeltrixGlobalSolutionsUpsertArgs>(args: SelectSubset<T, VeltrixGlobalSolutionsUpsertArgs<ExtArgs>>): Prisma__VeltrixGlobalSolutionsClient<$Result.GetResult<Prisma.$VeltrixGlobalSolutionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VeltrixGlobalSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeltrixGlobalSolutionsCountArgs} args - Arguments to filter VeltrixGlobalSolutions to count.
     * @example
     * // Count the number of VeltrixGlobalSolutions
     * const count = await prisma.veltrixGlobalSolutions.count({
     *   where: {
     *     // ... the filter for the VeltrixGlobalSolutions we want to count
     *   }
     * })
    **/
    count<T extends VeltrixGlobalSolutionsCountArgs>(
      args?: Subset<T, VeltrixGlobalSolutionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeltrixGlobalSolutionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VeltrixGlobalSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeltrixGlobalSolutionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeltrixGlobalSolutionsAggregateArgs>(args: Subset<T, VeltrixGlobalSolutionsAggregateArgs>): Prisma.PrismaPromise<GetVeltrixGlobalSolutionsAggregateType<T>>

    /**
     * Group by VeltrixGlobalSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeltrixGlobalSolutionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeltrixGlobalSolutionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeltrixGlobalSolutionsGroupByArgs['orderBy'] }
        : { orderBy?: VeltrixGlobalSolutionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeltrixGlobalSolutionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeltrixGlobalSolutionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VeltrixGlobalSolutions model
   */
  readonly fields: VeltrixGlobalSolutionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VeltrixGlobalSolutions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeltrixGlobalSolutionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VeltrixGlobalSolutions model
   */
  interface VeltrixGlobalSolutionsFieldRefs {
    readonly EventID: FieldRef<"VeltrixGlobalSolutions", 'String'>
    readonly HouseholdsCovered: FieldRef<"VeltrixGlobalSolutions", 'Int'>
    readonly AwarenessKitsDistributed: FieldRef<"VeltrixGlobalSolutions", 'Int'>
    readonly MockDrillsConducted: FieldRef<"VeltrixGlobalSolutions", 'Int'>
    readonly EarlyWarningSystemInstalled: FieldRef<"VeltrixGlobalSolutions", 'String'>
    readonly LocalAuthorityCollaboration: FieldRef<"VeltrixGlobalSolutions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VeltrixGlobalSolutions findUnique
   */
  export type VeltrixGlobalSolutionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * Filter, which VeltrixGlobalSolutions to fetch.
     */
    where: VeltrixGlobalSolutionsWhereUniqueInput
  }

  /**
   * VeltrixGlobalSolutions findUniqueOrThrow
   */
  export type VeltrixGlobalSolutionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * Filter, which VeltrixGlobalSolutions to fetch.
     */
    where: VeltrixGlobalSolutionsWhereUniqueInput
  }

  /**
   * VeltrixGlobalSolutions findFirst
   */
  export type VeltrixGlobalSolutionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * Filter, which VeltrixGlobalSolutions to fetch.
     */
    where?: VeltrixGlobalSolutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeltrixGlobalSolutions to fetch.
     */
    orderBy?: VeltrixGlobalSolutionsOrderByWithRelationInput | VeltrixGlobalSolutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeltrixGlobalSolutions.
     */
    cursor?: VeltrixGlobalSolutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeltrixGlobalSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeltrixGlobalSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeltrixGlobalSolutions.
     */
    distinct?: VeltrixGlobalSolutionsScalarFieldEnum | VeltrixGlobalSolutionsScalarFieldEnum[]
  }

  /**
   * VeltrixGlobalSolutions findFirstOrThrow
   */
  export type VeltrixGlobalSolutionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * Filter, which VeltrixGlobalSolutions to fetch.
     */
    where?: VeltrixGlobalSolutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeltrixGlobalSolutions to fetch.
     */
    orderBy?: VeltrixGlobalSolutionsOrderByWithRelationInput | VeltrixGlobalSolutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeltrixGlobalSolutions.
     */
    cursor?: VeltrixGlobalSolutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeltrixGlobalSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeltrixGlobalSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeltrixGlobalSolutions.
     */
    distinct?: VeltrixGlobalSolutionsScalarFieldEnum | VeltrixGlobalSolutionsScalarFieldEnum[]
  }

  /**
   * VeltrixGlobalSolutions findMany
   */
  export type VeltrixGlobalSolutionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * Filter, which VeltrixGlobalSolutions to fetch.
     */
    where?: VeltrixGlobalSolutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeltrixGlobalSolutions to fetch.
     */
    orderBy?: VeltrixGlobalSolutionsOrderByWithRelationInput | VeltrixGlobalSolutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VeltrixGlobalSolutions.
     */
    cursor?: VeltrixGlobalSolutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeltrixGlobalSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeltrixGlobalSolutions.
     */
    skip?: number
    distinct?: VeltrixGlobalSolutionsScalarFieldEnum | VeltrixGlobalSolutionsScalarFieldEnum[]
  }

  /**
   * VeltrixGlobalSolutions create
   */
  export type VeltrixGlobalSolutionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * The data needed to create a VeltrixGlobalSolutions.
     */
    data: XOR<VeltrixGlobalSolutionsCreateInput, VeltrixGlobalSolutionsUncheckedCreateInput>
  }

  /**
   * VeltrixGlobalSolutions createMany
   */
  export type VeltrixGlobalSolutionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VeltrixGlobalSolutions.
     */
    data: VeltrixGlobalSolutionsCreateManyInput | VeltrixGlobalSolutionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeltrixGlobalSolutions createManyAndReturn
   */
  export type VeltrixGlobalSolutionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * The data used to create many VeltrixGlobalSolutions.
     */
    data: VeltrixGlobalSolutionsCreateManyInput | VeltrixGlobalSolutionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeltrixGlobalSolutions update
   */
  export type VeltrixGlobalSolutionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * The data needed to update a VeltrixGlobalSolutions.
     */
    data: XOR<VeltrixGlobalSolutionsUpdateInput, VeltrixGlobalSolutionsUncheckedUpdateInput>
    /**
     * Choose, which VeltrixGlobalSolutions to update.
     */
    where: VeltrixGlobalSolutionsWhereUniqueInput
  }

  /**
   * VeltrixGlobalSolutions updateMany
   */
  export type VeltrixGlobalSolutionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VeltrixGlobalSolutions.
     */
    data: XOR<VeltrixGlobalSolutionsUpdateManyMutationInput, VeltrixGlobalSolutionsUncheckedUpdateManyInput>
    /**
     * Filter which VeltrixGlobalSolutions to update
     */
    where?: VeltrixGlobalSolutionsWhereInput
    /**
     * Limit how many VeltrixGlobalSolutions to update.
     */
    limit?: number
  }

  /**
   * VeltrixGlobalSolutions updateManyAndReturn
   */
  export type VeltrixGlobalSolutionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * The data used to update VeltrixGlobalSolutions.
     */
    data: XOR<VeltrixGlobalSolutionsUpdateManyMutationInput, VeltrixGlobalSolutionsUncheckedUpdateManyInput>
    /**
     * Filter which VeltrixGlobalSolutions to update
     */
    where?: VeltrixGlobalSolutionsWhereInput
    /**
     * Limit how many VeltrixGlobalSolutions to update.
     */
    limit?: number
  }

  /**
   * VeltrixGlobalSolutions upsert
   */
  export type VeltrixGlobalSolutionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * The filter to search for the VeltrixGlobalSolutions to update in case it exists.
     */
    where: VeltrixGlobalSolutionsWhereUniqueInput
    /**
     * In case the VeltrixGlobalSolutions found by the `where` argument doesn't exist, create a new VeltrixGlobalSolutions with this data.
     */
    create: XOR<VeltrixGlobalSolutionsCreateInput, VeltrixGlobalSolutionsUncheckedCreateInput>
    /**
     * In case the VeltrixGlobalSolutions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeltrixGlobalSolutionsUpdateInput, VeltrixGlobalSolutionsUncheckedUpdateInput>
  }

  /**
   * VeltrixGlobalSolutions delete
   */
  export type VeltrixGlobalSolutionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
    /**
     * Filter which VeltrixGlobalSolutions to delete.
     */
    where: VeltrixGlobalSolutionsWhereUniqueInput
  }

  /**
   * VeltrixGlobalSolutions deleteMany
   */
  export type VeltrixGlobalSolutionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeltrixGlobalSolutions to delete
     */
    where?: VeltrixGlobalSolutionsWhereInput
    /**
     * Limit how many VeltrixGlobalSolutions to delete.
     */
    limit?: number
  }

  /**
   * VeltrixGlobalSolutions without action
   */
  export type VeltrixGlobalSolutionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeltrixGlobalSolutions
     */
    select?: VeltrixGlobalSolutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeltrixGlobalSolutions
     */
    omit?: VeltrixGlobalSolutionsOmit<ExtArgs> | null
  }


  /**
   * Model NoventraTechnologiesInc
   */

  export type AggregateNoventraTechnologiesInc = {
    _count: NoventraTechnologiesIncCountAggregateOutputType | null
    _avg: NoventraTechnologiesIncAvgAggregateOutputType | null
    _sum: NoventraTechnologiesIncSumAggregateOutputType | null
    _min: NoventraTechnologiesIncMinAggregateOutputType | null
    _max: NoventraTechnologiesIncMaxAggregateOutputType | null
  }

  export type NoventraTechnologiesIncAvgAggregateOutputType = {
    AreaRestoredSqM: Decimal | null
    NativeFloraPlanted: number | null
    WasteRemovedKg: Decimal | null
    BiodiversitySpeciesCount: number | null
  }

  export type NoventraTechnologiesIncSumAggregateOutputType = {
    AreaRestoredSqM: Decimal | null
    NativeFloraPlanted: number | null
    WasteRemovedKg: Decimal | null
    BiodiversitySpeciesCount: number | null
  }

  export type NoventraTechnologiesIncMinAggregateOutputType = {
    EventID: string | null
    AreaRestoredSqM: Decimal | null
    NativeFloraPlanted: number | null
    WasteRemovedKg: Decimal | null
    BiodiversitySpeciesCount: number | null
    WaterQualityImprovementScore: string | null
  }

  export type NoventraTechnologiesIncMaxAggregateOutputType = {
    EventID: string | null
    AreaRestoredSqM: Decimal | null
    NativeFloraPlanted: number | null
    WasteRemovedKg: Decimal | null
    BiodiversitySpeciesCount: number | null
    WaterQualityImprovementScore: string | null
  }

  export type NoventraTechnologiesIncCountAggregateOutputType = {
    EventID: number
    AreaRestoredSqM: number
    NativeFloraPlanted: number
    WasteRemovedKg: number
    BiodiversitySpeciesCount: number
    WaterQualityImprovementScore: number
    _all: number
  }


  export type NoventraTechnologiesIncAvgAggregateInputType = {
    AreaRestoredSqM?: true
    NativeFloraPlanted?: true
    WasteRemovedKg?: true
    BiodiversitySpeciesCount?: true
  }

  export type NoventraTechnologiesIncSumAggregateInputType = {
    AreaRestoredSqM?: true
    NativeFloraPlanted?: true
    WasteRemovedKg?: true
    BiodiversitySpeciesCount?: true
  }

  export type NoventraTechnologiesIncMinAggregateInputType = {
    EventID?: true
    AreaRestoredSqM?: true
    NativeFloraPlanted?: true
    WasteRemovedKg?: true
    BiodiversitySpeciesCount?: true
    WaterQualityImprovementScore?: true
  }

  export type NoventraTechnologiesIncMaxAggregateInputType = {
    EventID?: true
    AreaRestoredSqM?: true
    NativeFloraPlanted?: true
    WasteRemovedKg?: true
    BiodiversitySpeciesCount?: true
    WaterQualityImprovementScore?: true
  }

  export type NoventraTechnologiesIncCountAggregateInputType = {
    EventID?: true
    AreaRestoredSqM?: true
    NativeFloraPlanted?: true
    WasteRemovedKg?: true
    BiodiversitySpeciesCount?: true
    WaterQualityImprovementScore?: true
    _all?: true
  }

  export type NoventraTechnologiesIncAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoventraTechnologiesInc to aggregate.
     */
    where?: NoventraTechnologiesIncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoventraTechnologiesIncs to fetch.
     */
    orderBy?: NoventraTechnologiesIncOrderByWithRelationInput | NoventraTechnologiesIncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoventraTechnologiesIncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoventraTechnologiesIncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoventraTechnologiesIncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoventraTechnologiesIncs
    **/
    _count?: true | NoventraTechnologiesIncCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoventraTechnologiesIncAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoventraTechnologiesIncSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoventraTechnologiesIncMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoventraTechnologiesIncMaxAggregateInputType
  }

  export type GetNoventraTechnologiesIncAggregateType<T extends NoventraTechnologiesIncAggregateArgs> = {
        [P in keyof T & keyof AggregateNoventraTechnologiesInc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoventraTechnologiesInc[P]>
      : GetScalarType<T[P], AggregateNoventraTechnologiesInc[P]>
  }




  export type NoventraTechnologiesIncGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoventraTechnologiesIncWhereInput
    orderBy?: NoventraTechnologiesIncOrderByWithAggregationInput | NoventraTechnologiesIncOrderByWithAggregationInput[]
    by: NoventraTechnologiesIncScalarFieldEnum[] | NoventraTechnologiesIncScalarFieldEnum
    having?: NoventraTechnologiesIncScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoventraTechnologiesIncCountAggregateInputType | true
    _avg?: NoventraTechnologiesIncAvgAggregateInputType
    _sum?: NoventraTechnologiesIncSumAggregateInputType
    _min?: NoventraTechnologiesIncMinAggregateInputType
    _max?: NoventraTechnologiesIncMaxAggregateInputType
  }

  export type NoventraTechnologiesIncGroupByOutputType = {
    EventID: string
    AreaRestoredSqM: Decimal
    NativeFloraPlanted: number
    WasteRemovedKg: Decimal
    BiodiversitySpeciesCount: number
    WaterQualityImprovementScore: string
    _count: NoventraTechnologiesIncCountAggregateOutputType | null
    _avg: NoventraTechnologiesIncAvgAggregateOutputType | null
    _sum: NoventraTechnologiesIncSumAggregateOutputType | null
    _min: NoventraTechnologiesIncMinAggregateOutputType | null
    _max: NoventraTechnologiesIncMaxAggregateOutputType | null
  }

  type GetNoventraTechnologiesIncGroupByPayload<T extends NoventraTechnologiesIncGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoventraTechnologiesIncGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoventraTechnologiesIncGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoventraTechnologiesIncGroupByOutputType[P]>
            : GetScalarType<T[P], NoventraTechnologiesIncGroupByOutputType[P]>
        }
      >
    >


  export type NoventraTechnologiesIncSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    AreaRestoredSqM?: boolean
    NativeFloraPlanted?: boolean
    WasteRemovedKg?: boolean
    BiodiversitySpeciesCount?: boolean
    WaterQualityImprovementScore?: boolean
  }, ExtArgs["result"]["noventraTechnologiesInc"]>

  export type NoventraTechnologiesIncSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    AreaRestoredSqM?: boolean
    NativeFloraPlanted?: boolean
    WasteRemovedKg?: boolean
    BiodiversitySpeciesCount?: boolean
    WaterQualityImprovementScore?: boolean
  }, ExtArgs["result"]["noventraTechnologiesInc"]>

  export type NoventraTechnologiesIncSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    AreaRestoredSqM?: boolean
    NativeFloraPlanted?: boolean
    WasteRemovedKg?: boolean
    BiodiversitySpeciesCount?: boolean
    WaterQualityImprovementScore?: boolean
  }, ExtArgs["result"]["noventraTechnologiesInc"]>

  export type NoventraTechnologiesIncSelectScalar = {
    EventID?: boolean
    AreaRestoredSqM?: boolean
    NativeFloraPlanted?: boolean
    WasteRemovedKg?: boolean
    BiodiversitySpeciesCount?: boolean
    WaterQualityImprovementScore?: boolean
  }

  export type NoventraTechnologiesIncOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EventID" | "AreaRestoredSqM" | "NativeFloraPlanted" | "WasteRemovedKg" | "BiodiversitySpeciesCount" | "WaterQualityImprovementScore", ExtArgs["result"]["noventraTechnologiesInc"]>

  export type $NoventraTechnologiesIncPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoventraTechnologiesInc"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      EventID: string
      AreaRestoredSqM: Prisma.Decimal
      NativeFloraPlanted: number
      WasteRemovedKg: Prisma.Decimal
      BiodiversitySpeciesCount: number
      WaterQualityImprovementScore: string
    }, ExtArgs["result"]["noventraTechnologiesInc"]>
    composites: {}
  }

  type NoventraTechnologiesIncGetPayload<S extends boolean | null | undefined | NoventraTechnologiesIncDefaultArgs> = $Result.GetResult<Prisma.$NoventraTechnologiesIncPayload, S>

  type NoventraTechnologiesIncCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoventraTechnologiesIncFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoventraTechnologiesIncCountAggregateInputType | true
    }

  export interface NoventraTechnologiesIncDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoventraTechnologiesInc'], meta: { name: 'NoventraTechnologiesInc' } }
    /**
     * Find zero or one NoventraTechnologiesInc that matches the filter.
     * @param {NoventraTechnologiesIncFindUniqueArgs} args - Arguments to find a NoventraTechnologiesInc
     * @example
     * // Get one NoventraTechnologiesInc
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoventraTechnologiesIncFindUniqueArgs>(args: SelectSubset<T, NoventraTechnologiesIncFindUniqueArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoventraTechnologiesInc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoventraTechnologiesIncFindUniqueOrThrowArgs} args - Arguments to find a NoventraTechnologiesInc
     * @example
     * // Get one NoventraTechnologiesInc
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoventraTechnologiesIncFindUniqueOrThrowArgs>(args: SelectSubset<T, NoventraTechnologiesIncFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoventraTechnologiesInc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoventraTechnologiesIncFindFirstArgs} args - Arguments to find a NoventraTechnologiesInc
     * @example
     * // Get one NoventraTechnologiesInc
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoventraTechnologiesIncFindFirstArgs>(args?: SelectSubset<T, NoventraTechnologiesIncFindFirstArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoventraTechnologiesInc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoventraTechnologiesIncFindFirstOrThrowArgs} args - Arguments to find a NoventraTechnologiesInc
     * @example
     * // Get one NoventraTechnologiesInc
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoventraTechnologiesIncFindFirstOrThrowArgs>(args?: SelectSubset<T, NoventraTechnologiesIncFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoventraTechnologiesIncs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoventraTechnologiesIncFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoventraTechnologiesIncs
     * const noventraTechnologiesIncs = await prisma.noventraTechnologiesInc.findMany()
     * 
     * // Get first 10 NoventraTechnologiesIncs
     * const noventraTechnologiesIncs = await prisma.noventraTechnologiesInc.findMany({ take: 10 })
     * 
     * // Only select the `EventID`
     * const noventraTechnologiesIncWithEventIDOnly = await prisma.noventraTechnologiesInc.findMany({ select: { EventID: true } })
     * 
     */
    findMany<T extends NoventraTechnologiesIncFindManyArgs>(args?: SelectSubset<T, NoventraTechnologiesIncFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoventraTechnologiesInc.
     * @param {NoventraTechnologiesIncCreateArgs} args - Arguments to create a NoventraTechnologiesInc.
     * @example
     * // Create one NoventraTechnologiesInc
     * const NoventraTechnologiesInc = await prisma.noventraTechnologiesInc.create({
     *   data: {
     *     // ... data to create a NoventraTechnologiesInc
     *   }
     * })
     * 
     */
    create<T extends NoventraTechnologiesIncCreateArgs>(args: SelectSubset<T, NoventraTechnologiesIncCreateArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoventraTechnologiesIncs.
     * @param {NoventraTechnologiesIncCreateManyArgs} args - Arguments to create many NoventraTechnologiesIncs.
     * @example
     * // Create many NoventraTechnologiesIncs
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoventraTechnologiesIncCreateManyArgs>(args?: SelectSubset<T, NoventraTechnologiesIncCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoventraTechnologiesIncs and returns the data saved in the database.
     * @param {NoventraTechnologiesIncCreateManyAndReturnArgs} args - Arguments to create many NoventraTechnologiesIncs.
     * @example
     * // Create many NoventraTechnologiesIncs
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoventraTechnologiesIncs and only return the `EventID`
     * const noventraTechnologiesIncWithEventIDOnly = await prisma.noventraTechnologiesInc.createManyAndReturn({
     *   select: { EventID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoventraTechnologiesIncCreateManyAndReturnArgs>(args?: SelectSubset<T, NoventraTechnologiesIncCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoventraTechnologiesInc.
     * @param {NoventraTechnologiesIncDeleteArgs} args - Arguments to delete one NoventraTechnologiesInc.
     * @example
     * // Delete one NoventraTechnologiesInc
     * const NoventraTechnologiesInc = await prisma.noventraTechnologiesInc.delete({
     *   where: {
     *     // ... filter to delete one NoventraTechnologiesInc
     *   }
     * })
     * 
     */
    delete<T extends NoventraTechnologiesIncDeleteArgs>(args: SelectSubset<T, NoventraTechnologiesIncDeleteArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoventraTechnologiesInc.
     * @param {NoventraTechnologiesIncUpdateArgs} args - Arguments to update one NoventraTechnologiesInc.
     * @example
     * // Update one NoventraTechnologiesInc
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoventraTechnologiesIncUpdateArgs>(args: SelectSubset<T, NoventraTechnologiesIncUpdateArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoventraTechnologiesIncs.
     * @param {NoventraTechnologiesIncDeleteManyArgs} args - Arguments to filter NoventraTechnologiesIncs to delete.
     * @example
     * // Delete a few NoventraTechnologiesIncs
     * const { count } = await prisma.noventraTechnologiesInc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoventraTechnologiesIncDeleteManyArgs>(args?: SelectSubset<T, NoventraTechnologiesIncDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoventraTechnologiesIncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoventraTechnologiesIncUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoventraTechnologiesIncs
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoventraTechnologiesIncUpdateManyArgs>(args: SelectSubset<T, NoventraTechnologiesIncUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoventraTechnologiesIncs and returns the data updated in the database.
     * @param {NoventraTechnologiesIncUpdateManyAndReturnArgs} args - Arguments to update many NoventraTechnologiesIncs.
     * @example
     * // Update many NoventraTechnologiesIncs
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoventraTechnologiesIncs and only return the `EventID`
     * const noventraTechnologiesIncWithEventIDOnly = await prisma.noventraTechnologiesInc.updateManyAndReturn({
     *   select: { EventID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoventraTechnologiesIncUpdateManyAndReturnArgs>(args: SelectSubset<T, NoventraTechnologiesIncUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoventraTechnologiesInc.
     * @param {NoventraTechnologiesIncUpsertArgs} args - Arguments to update or create a NoventraTechnologiesInc.
     * @example
     * // Update or create a NoventraTechnologiesInc
     * const noventraTechnologiesInc = await prisma.noventraTechnologiesInc.upsert({
     *   create: {
     *     // ... data to create a NoventraTechnologiesInc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoventraTechnologiesInc we want to update
     *   }
     * })
     */
    upsert<T extends NoventraTechnologiesIncUpsertArgs>(args: SelectSubset<T, NoventraTechnologiesIncUpsertArgs<ExtArgs>>): Prisma__NoventraTechnologiesIncClient<$Result.GetResult<Prisma.$NoventraTechnologiesIncPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoventraTechnologiesIncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoventraTechnologiesIncCountArgs} args - Arguments to filter NoventraTechnologiesIncs to count.
     * @example
     * // Count the number of NoventraTechnologiesIncs
     * const count = await prisma.noventraTechnologiesInc.count({
     *   where: {
     *     // ... the filter for the NoventraTechnologiesIncs we want to count
     *   }
     * })
    **/
    count<T extends NoventraTechnologiesIncCountArgs>(
      args?: Subset<T, NoventraTechnologiesIncCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoventraTechnologiesIncCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoventraTechnologiesInc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoventraTechnologiesIncAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoventraTechnologiesIncAggregateArgs>(args: Subset<T, NoventraTechnologiesIncAggregateArgs>): Prisma.PrismaPromise<GetNoventraTechnologiesIncAggregateType<T>>

    /**
     * Group by NoventraTechnologiesInc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoventraTechnologiesIncGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoventraTechnologiesIncGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoventraTechnologiesIncGroupByArgs['orderBy'] }
        : { orderBy?: NoventraTechnologiesIncGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoventraTechnologiesIncGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoventraTechnologiesIncGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoventraTechnologiesInc model
   */
  readonly fields: NoventraTechnologiesIncFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoventraTechnologiesInc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoventraTechnologiesIncClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoventraTechnologiesInc model
   */
  interface NoventraTechnologiesIncFieldRefs {
    readonly EventID: FieldRef<"NoventraTechnologiesInc", 'String'>
    readonly AreaRestoredSqM: FieldRef<"NoventraTechnologiesInc", 'Decimal'>
    readonly NativeFloraPlanted: FieldRef<"NoventraTechnologiesInc", 'Int'>
    readonly WasteRemovedKg: FieldRef<"NoventraTechnologiesInc", 'Decimal'>
    readonly BiodiversitySpeciesCount: FieldRef<"NoventraTechnologiesInc", 'Int'>
    readonly WaterQualityImprovementScore: FieldRef<"NoventraTechnologiesInc", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NoventraTechnologiesInc findUnique
   */
  export type NoventraTechnologiesIncFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * Filter, which NoventraTechnologiesInc to fetch.
     */
    where: NoventraTechnologiesIncWhereUniqueInput
  }

  /**
   * NoventraTechnologiesInc findUniqueOrThrow
   */
  export type NoventraTechnologiesIncFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * Filter, which NoventraTechnologiesInc to fetch.
     */
    where: NoventraTechnologiesIncWhereUniqueInput
  }

  /**
   * NoventraTechnologiesInc findFirst
   */
  export type NoventraTechnologiesIncFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * Filter, which NoventraTechnologiesInc to fetch.
     */
    where?: NoventraTechnologiesIncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoventraTechnologiesIncs to fetch.
     */
    orderBy?: NoventraTechnologiesIncOrderByWithRelationInput | NoventraTechnologiesIncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoventraTechnologiesIncs.
     */
    cursor?: NoventraTechnologiesIncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoventraTechnologiesIncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoventraTechnologiesIncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoventraTechnologiesIncs.
     */
    distinct?: NoventraTechnologiesIncScalarFieldEnum | NoventraTechnologiesIncScalarFieldEnum[]
  }

  /**
   * NoventraTechnologiesInc findFirstOrThrow
   */
  export type NoventraTechnologiesIncFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * Filter, which NoventraTechnologiesInc to fetch.
     */
    where?: NoventraTechnologiesIncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoventraTechnologiesIncs to fetch.
     */
    orderBy?: NoventraTechnologiesIncOrderByWithRelationInput | NoventraTechnologiesIncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoventraTechnologiesIncs.
     */
    cursor?: NoventraTechnologiesIncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoventraTechnologiesIncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoventraTechnologiesIncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoventraTechnologiesIncs.
     */
    distinct?: NoventraTechnologiesIncScalarFieldEnum | NoventraTechnologiesIncScalarFieldEnum[]
  }

  /**
   * NoventraTechnologiesInc findMany
   */
  export type NoventraTechnologiesIncFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * Filter, which NoventraTechnologiesIncs to fetch.
     */
    where?: NoventraTechnologiesIncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoventraTechnologiesIncs to fetch.
     */
    orderBy?: NoventraTechnologiesIncOrderByWithRelationInput | NoventraTechnologiesIncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoventraTechnologiesIncs.
     */
    cursor?: NoventraTechnologiesIncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoventraTechnologiesIncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoventraTechnologiesIncs.
     */
    skip?: number
    distinct?: NoventraTechnologiesIncScalarFieldEnum | NoventraTechnologiesIncScalarFieldEnum[]
  }

  /**
   * NoventraTechnologiesInc create
   */
  export type NoventraTechnologiesIncCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * The data needed to create a NoventraTechnologiesInc.
     */
    data: XOR<NoventraTechnologiesIncCreateInput, NoventraTechnologiesIncUncheckedCreateInput>
  }

  /**
   * NoventraTechnologiesInc createMany
   */
  export type NoventraTechnologiesIncCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoventraTechnologiesIncs.
     */
    data: NoventraTechnologiesIncCreateManyInput | NoventraTechnologiesIncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoventraTechnologiesInc createManyAndReturn
   */
  export type NoventraTechnologiesIncCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * The data used to create many NoventraTechnologiesIncs.
     */
    data: NoventraTechnologiesIncCreateManyInput | NoventraTechnologiesIncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoventraTechnologiesInc update
   */
  export type NoventraTechnologiesIncUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * The data needed to update a NoventraTechnologiesInc.
     */
    data: XOR<NoventraTechnologiesIncUpdateInput, NoventraTechnologiesIncUncheckedUpdateInput>
    /**
     * Choose, which NoventraTechnologiesInc to update.
     */
    where: NoventraTechnologiesIncWhereUniqueInput
  }

  /**
   * NoventraTechnologiesInc updateMany
   */
  export type NoventraTechnologiesIncUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoventraTechnologiesIncs.
     */
    data: XOR<NoventraTechnologiesIncUpdateManyMutationInput, NoventraTechnologiesIncUncheckedUpdateManyInput>
    /**
     * Filter which NoventraTechnologiesIncs to update
     */
    where?: NoventraTechnologiesIncWhereInput
    /**
     * Limit how many NoventraTechnologiesIncs to update.
     */
    limit?: number
  }

  /**
   * NoventraTechnologiesInc updateManyAndReturn
   */
  export type NoventraTechnologiesIncUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * The data used to update NoventraTechnologiesIncs.
     */
    data: XOR<NoventraTechnologiesIncUpdateManyMutationInput, NoventraTechnologiesIncUncheckedUpdateManyInput>
    /**
     * Filter which NoventraTechnologiesIncs to update
     */
    where?: NoventraTechnologiesIncWhereInput
    /**
     * Limit how many NoventraTechnologiesIncs to update.
     */
    limit?: number
  }

  /**
   * NoventraTechnologiesInc upsert
   */
  export type NoventraTechnologiesIncUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * The filter to search for the NoventraTechnologiesInc to update in case it exists.
     */
    where: NoventraTechnologiesIncWhereUniqueInput
    /**
     * In case the NoventraTechnologiesInc found by the `where` argument doesn't exist, create a new NoventraTechnologiesInc with this data.
     */
    create: XOR<NoventraTechnologiesIncCreateInput, NoventraTechnologiesIncUncheckedCreateInput>
    /**
     * In case the NoventraTechnologiesInc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoventraTechnologiesIncUpdateInput, NoventraTechnologiesIncUncheckedUpdateInput>
  }

  /**
   * NoventraTechnologiesInc delete
   */
  export type NoventraTechnologiesIncDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
    /**
     * Filter which NoventraTechnologiesInc to delete.
     */
    where: NoventraTechnologiesIncWhereUniqueInput
  }

  /**
   * NoventraTechnologiesInc deleteMany
   */
  export type NoventraTechnologiesIncDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoventraTechnologiesIncs to delete
     */
    where?: NoventraTechnologiesIncWhereInput
    /**
     * Limit how many NoventraTechnologiesIncs to delete.
     */
    limit?: number
  }

  /**
   * NoventraTechnologiesInc without action
   */
  export type NoventraTechnologiesIncDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoventraTechnologiesInc
     */
    select?: NoventraTechnologiesIncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoventraTechnologiesInc
     */
    omit?: NoventraTechnologiesIncOmit<ExtArgs> | null
  }


  /**
   * Model AureviaInternationalHoldings
   */

  export type AggregateAureviaInternationalHoldings = {
    _count: AureviaInternationalHoldingsCountAggregateOutputType | null
    _avg: AureviaInternationalHoldingsAvgAggregateOutputType | null
    _sum: AureviaInternationalHoldingsSumAggregateOutputType | null
    _min: AureviaInternationalHoldingsMinAggregateOutputType | null
    _max: AureviaInternationalHoldingsMaxAggregateOutputType | null
  }

  export type AureviaInternationalHoldingsAvgAggregateOutputType = {
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
  }

  export type AureviaInternationalHoldingsSumAggregateOutputType = {
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
  }

  export type AureviaInternationalHoldingsMinAggregateOutputType = {
    EventID: string | null
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
    GeoTaggingEnabled: string | null
    PostPlantationCareProvided: string | null
  }

  export type AureviaInternationalHoldingsMaxAggregateOutputType = {
    EventID: string | null
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
    GeoTaggingEnabled: string | null
    PostPlantationCareProvided: string | null
  }

  export type AureviaInternationalHoldingsCountAggregateOutputType = {
    EventID: number
    TreesPlanted: number
    SaplingSurvivalRatePercent: number
    SpeciesDiversityCount: number
    GeoTaggingEnabled: number
    PostPlantationCareProvided: number
    _all: number
  }


  export type AureviaInternationalHoldingsAvgAggregateInputType = {
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
  }

  export type AureviaInternationalHoldingsSumAggregateInputType = {
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
  }

  export type AureviaInternationalHoldingsMinAggregateInputType = {
    EventID?: true
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
    GeoTaggingEnabled?: true
    PostPlantationCareProvided?: true
  }

  export type AureviaInternationalHoldingsMaxAggregateInputType = {
    EventID?: true
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
    GeoTaggingEnabled?: true
    PostPlantationCareProvided?: true
  }

  export type AureviaInternationalHoldingsCountAggregateInputType = {
    EventID?: true
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
    GeoTaggingEnabled?: true
    PostPlantationCareProvided?: true
    _all?: true
  }

  export type AureviaInternationalHoldingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AureviaInternationalHoldings to aggregate.
     */
    where?: AureviaInternationalHoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AureviaInternationalHoldings to fetch.
     */
    orderBy?: AureviaInternationalHoldingsOrderByWithRelationInput | AureviaInternationalHoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AureviaInternationalHoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AureviaInternationalHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AureviaInternationalHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AureviaInternationalHoldings
    **/
    _count?: true | AureviaInternationalHoldingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AureviaInternationalHoldingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AureviaInternationalHoldingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AureviaInternationalHoldingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AureviaInternationalHoldingsMaxAggregateInputType
  }

  export type GetAureviaInternationalHoldingsAggregateType<T extends AureviaInternationalHoldingsAggregateArgs> = {
        [P in keyof T & keyof AggregateAureviaInternationalHoldings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAureviaInternationalHoldings[P]>
      : GetScalarType<T[P], AggregateAureviaInternationalHoldings[P]>
  }




  export type AureviaInternationalHoldingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AureviaInternationalHoldingsWhereInput
    orderBy?: AureviaInternationalHoldingsOrderByWithAggregationInput | AureviaInternationalHoldingsOrderByWithAggregationInput[]
    by: AureviaInternationalHoldingsScalarFieldEnum[] | AureviaInternationalHoldingsScalarFieldEnum
    having?: AureviaInternationalHoldingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AureviaInternationalHoldingsCountAggregateInputType | true
    _avg?: AureviaInternationalHoldingsAvgAggregateInputType
    _sum?: AureviaInternationalHoldingsSumAggregateInputType
    _min?: AureviaInternationalHoldingsMinAggregateInputType
    _max?: AureviaInternationalHoldingsMaxAggregateInputType
  }

  export type AureviaInternationalHoldingsGroupByOutputType = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
    _count: AureviaInternationalHoldingsCountAggregateOutputType | null
    _avg: AureviaInternationalHoldingsAvgAggregateOutputType | null
    _sum: AureviaInternationalHoldingsSumAggregateOutputType | null
    _min: AureviaInternationalHoldingsMinAggregateOutputType | null
    _max: AureviaInternationalHoldingsMaxAggregateOutputType | null
  }

  type GetAureviaInternationalHoldingsGroupByPayload<T extends AureviaInternationalHoldingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AureviaInternationalHoldingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AureviaInternationalHoldingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AureviaInternationalHoldingsGroupByOutputType[P]>
            : GetScalarType<T[P], AureviaInternationalHoldingsGroupByOutputType[P]>
        }
      >
    >


  export type AureviaInternationalHoldingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }, ExtArgs["result"]["aureviaInternationalHoldings"]>

  export type AureviaInternationalHoldingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }, ExtArgs["result"]["aureviaInternationalHoldings"]>

  export type AureviaInternationalHoldingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }, ExtArgs["result"]["aureviaInternationalHoldings"]>

  export type AureviaInternationalHoldingsSelectScalar = {
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }

  export type AureviaInternationalHoldingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EventID" | "TreesPlanted" | "SaplingSurvivalRatePercent" | "SpeciesDiversityCount" | "GeoTaggingEnabled" | "PostPlantationCareProvided", ExtArgs["result"]["aureviaInternationalHoldings"]>

  export type $AureviaInternationalHoldingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AureviaInternationalHoldings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      EventID: string
      TreesPlanted: number
      SaplingSurvivalRatePercent: Prisma.Decimal
      SpeciesDiversityCount: number
      GeoTaggingEnabled: string
      PostPlantationCareProvided: string
    }, ExtArgs["result"]["aureviaInternationalHoldings"]>
    composites: {}
  }

  type AureviaInternationalHoldingsGetPayload<S extends boolean | null | undefined | AureviaInternationalHoldingsDefaultArgs> = $Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload, S>

  type AureviaInternationalHoldingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AureviaInternationalHoldingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AureviaInternationalHoldingsCountAggregateInputType | true
    }

  export interface AureviaInternationalHoldingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AureviaInternationalHoldings'], meta: { name: 'AureviaInternationalHoldings' } }
    /**
     * Find zero or one AureviaInternationalHoldings that matches the filter.
     * @param {AureviaInternationalHoldingsFindUniqueArgs} args - Arguments to find a AureviaInternationalHoldings
     * @example
     * // Get one AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AureviaInternationalHoldingsFindUniqueArgs>(args: SelectSubset<T, AureviaInternationalHoldingsFindUniqueArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AureviaInternationalHoldings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AureviaInternationalHoldingsFindUniqueOrThrowArgs} args - Arguments to find a AureviaInternationalHoldings
     * @example
     * // Get one AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AureviaInternationalHoldingsFindUniqueOrThrowArgs>(args: SelectSubset<T, AureviaInternationalHoldingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AureviaInternationalHoldings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AureviaInternationalHoldingsFindFirstArgs} args - Arguments to find a AureviaInternationalHoldings
     * @example
     * // Get one AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AureviaInternationalHoldingsFindFirstArgs>(args?: SelectSubset<T, AureviaInternationalHoldingsFindFirstArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AureviaInternationalHoldings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AureviaInternationalHoldingsFindFirstOrThrowArgs} args - Arguments to find a AureviaInternationalHoldings
     * @example
     * // Get one AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AureviaInternationalHoldingsFindFirstOrThrowArgs>(args?: SelectSubset<T, AureviaInternationalHoldingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AureviaInternationalHoldings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AureviaInternationalHoldingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.findMany()
     * 
     * // Get first 10 AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.findMany({ take: 10 })
     * 
     * // Only select the `EventID`
     * const aureviaInternationalHoldingsWithEventIDOnly = await prisma.aureviaInternationalHoldings.findMany({ select: { EventID: true } })
     * 
     */
    findMany<T extends AureviaInternationalHoldingsFindManyArgs>(args?: SelectSubset<T, AureviaInternationalHoldingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AureviaInternationalHoldings.
     * @param {AureviaInternationalHoldingsCreateArgs} args - Arguments to create a AureviaInternationalHoldings.
     * @example
     * // Create one AureviaInternationalHoldings
     * const AureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.create({
     *   data: {
     *     // ... data to create a AureviaInternationalHoldings
     *   }
     * })
     * 
     */
    create<T extends AureviaInternationalHoldingsCreateArgs>(args: SelectSubset<T, AureviaInternationalHoldingsCreateArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AureviaInternationalHoldings.
     * @param {AureviaInternationalHoldingsCreateManyArgs} args - Arguments to create many AureviaInternationalHoldings.
     * @example
     * // Create many AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AureviaInternationalHoldingsCreateManyArgs>(args?: SelectSubset<T, AureviaInternationalHoldingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AureviaInternationalHoldings and returns the data saved in the database.
     * @param {AureviaInternationalHoldingsCreateManyAndReturnArgs} args - Arguments to create many AureviaInternationalHoldings.
     * @example
     * // Create many AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AureviaInternationalHoldings and only return the `EventID`
     * const aureviaInternationalHoldingsWithEventIDOnly = await prisma.aureviaInternationalHoldings.createManyAndReturn({
     *   select: { EventID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AureviaInternationalHoldingsCreateManyAndReturnArgs>(args?: SelectSubset<T, AureviaInternationalHoldingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AureviaInternationalHoldings.
     * @param {AureviaInternationalHoldingsDeleteArgs} args - Arguments to delete one AureviaInternationalHoldings.
     * @example
     * // Delete one AureviaInternationalHoldings
     * const AureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.delete({
     *   where: {
     *     // ... filter to delete one AureviaInternationalHoldings
     *   }
     * })
     * 
     */
    delete<T extends AureviaInternationalHoldingsDeleteArgs>(args: SelectSubset<T, AureviaInternationalHoldingsDeleteArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AureviaInternationalHoldings.
     * @param {AureviaInternationalHoldingsUpdateArgs} args - Arguments to update one AureviaInternationalHoldings.
     * @example
     * // Update one AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AureviaInternationalHoldingsUpdateArgs>(args: SelectSubset<T, AureviaInternationalHoldingsUpdateArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AureviaInternationalHoldings.
     * @param {AureviaInternationalHoldingsDeleteManyArgs} args - Arguments to filter AureviaInternationalHoldings to delete.
     * @example
     * // Delete a few AureviaInternationalHoldings
     * const { count } = await prisma.aureviaInternationalHoldings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AureviaInternationalHoldingsDeleteManyArgs>(args?: SelectSubset<T, AureviaInternationalHoldingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AureviaInternationalHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AureviaInternationalHoldingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AureviaInternationalHoldingsUpdateManyArgs>(args: SelectSubset<T, AureviaInternationalHoldingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AureviaInternationalHoldings and returns the data updated in the database.
     * @param {AureviaInternationalHoldingsUpdateManyAndReturnArgs} args - Arguments to update many AureviaInternationalHoldings.
     * @example
     * // Update many AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AureviaInternationalHoldings and only return the `EventID`
     * const aureviaInternationalHoldingsWithEventIDOnly = await prisma.aureviaInternationalHoldings.updateManyAndReturn({
     *   select: { EventID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AureviaInternationalHoldingsUpdateManyAndReturnArgs>(args: SelectSubset<T, AureviaInternationalHoldingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AureviaInternationalHoldings.
     * @param {AureviaInternationalHoldingsUpsertArgs} args - Arguments to update or create a AureviaInternationalHoldings.
     * @example
     * // Update or create a AureviaInternationalHoldings
     * const aureviaInternationalHoldings = await prisma.aureviaInternationalHoldings.upsert({
     *   create: {
     *     // ... data to create a AureviaInternationalHoldings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AureviaInternationalHoldings we want to update
     *   }
     * })
     */
    upsert<T extends AureviaInternationalHoldingsUpsertArgs>(args: SelectSubset<T, AureviaInternationalHoldingsUpsertArgs<ExtArgs>>): Prisma__AureviaInternationalHoldingsClient<$Result.GetResult<Prisma.$AureviaInternationalHoldingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AureviaInternationalHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AureviaInternationalHoldingsCountArgs} args - Arguments to filter AureviaInternationalHoldings to count.
     * @example
     * // Count the number of AureviaInternationalHoldings
     * const count = await prisma.aureviaInternationalHoldings.count({
     *   where: {
     *     // ... the filter for the AureviaInternationalHoldings we want to count
     *   }
     * })
    **/
    count<T extends AureviaInternationalHoldingsCountArgs>(
      args?: Subset<T, AureviaInternationalHoldingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AureviaInternationalHoldingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AureviaInternationalHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AureviaInternationalHoldingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AureviaInternationalHoldingsAggregateArgs>(args: Subset<T, AureviaInternationalHoldingsAggregateArgs>): Prisma.PrismaPromise<GetAureviaInternationalHoldingsAggregateType<T>>

    /**
     * Group by AureviaInternationalHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AureviaInternationalHoldingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AureviaInternationalHoldingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AureviaInternationalHoldingsGroupByArgs['orderBy'] }
        : { orderBy?: AureviaInternationalHoldingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AureviaInternationalHoldingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAureviaInternationalHoldingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AureviaInternationalHoldings model
   */
  readonly fields: AureviaInternationalHoldingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AureviaInternationalHoldings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AureviaInternationalHoldingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AureviaInternationalHoldings model
   */
  interface AureviaInternationalHoldingsFieldRefs {
    readonly EventID: FieldRef<"AureviaInternationalHoldings", 'String'>
    readonly TreesPlanted: FieldRef<"AureviaInternationalHoldings", 'Int'>
    readonly SaplingSurvivalRatePercent: FieldRef<"AureviaInternationalHoldings", 'Decimal'>
    readonly SpeciesDiversityCount: FieldRef<"AureviaInternationalHoldings", 'Int'>
    readonly GeoTaggingEnabled: FieldRef<"AureviaInternationalHoldings", 'String'>
    readonly PostPlantationCareProvided: FieldRef<"AureviaInternationalHoldings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AureviaInternationalHoldings findUnique
   */
  export type AureviaInternationalHoldingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * Filter, which AureviaInternationalHoldings to fetch.
     */
    where: AureviaInternationalHoldingsWhereUniqueInput
  }

  /**
   * AureviaInternationalHoldings findUniqueOrThrow
   */
  export type AureviaInternationalHoldingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * Filter, which AureviaInternationalHoldings to fetch.
     */
    where: AureviaInternationalHoldingsWhereUniqueInput
  }

  /**
   * AureviaInternationalHoldings findFirst
   */
  export type AureviaInternationalHoldingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * Filter, which AureviaInternationalHoldings to fetch.
     */
    where?: AureviaInternationalHoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AureviaInternationalHoldings to fetch.
     */
    orderBy?: AureviaInternationalHoldingsOrderByWithRelationInput | AureviaInternationalHoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AureviaInternationalHoldings.
     */
    cursor?: AureviaInternationalHoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AureviaInternationalHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AureviaInternationalHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AureviaInternationalHoldings.
     */
    distinct?: AureviaInternationalHoldingsScalarFieldEnum | AureviaInternationalHoldingsScalarFieldEnum[]
  }

  /**
   * AureviaInternationalHoldings findFirstOrThrow
   */
  export type AureviaInternationalHoldingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * Filter, which AureviaInternationalHoldings to fetch.
     */
    where?: AureviaInternationalHoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AureviaInternationalHoldings to fetch.
     */
    orderBy?: AureviaInternationalHoldingsOrderByWithRelationInput | AureviaInternationalHoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AureviaInternationalHoldings.
     */
    cursor?: AureviaInternationalHoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AureviaInternationalHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AureviaInternationalHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AureviaInternationalHoldings.
     */
    distinct?: AureviaInternationalHoldingsScalarFieldEnum | AureviaInternationalHoldingsScalarFieldEnum[]
  }

  /**
   * AureviaInternationalHoldings findMany
   */
  export type AureviaInternationalHoldingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * Filter, which AureviaInternationalHoldings to fetch.
     */
    where?: AureviaInternationalHoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AureviaInternationalHoldings to fetch.
     */
    orderBy?: AureviaInternationalHoldingsOrderByWithRelationInput | AureviaInternationalHoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AureviaInternationalHoldings.
     */
    cursor?: AureviaInternationalHoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AureviaInternationalHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AureviaInternationalHoldings.
     */
    skip?: number
    distinct?: AureviaInternationalHoldingsScalarFieldEnum | AureviaInternationalHoldingsScalarFieldEnum[]
  }

  /**
   * AureviaInternationalHoldings create
   */
  export type AureviaInternationalHoldingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * The data needed to create a AureviaInternationalHoldings.
     */
    data: XOR<AureviaInternationalHoldingsCreateInput, AureviaInternationalHoldingsUncheckedCreateInput>
  }

  /**
   * AureviaInternationalHoldings createMany
   */
  export type AureviaInternationalHoldingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AureviaInternationalHoldings.
     */
    data: AureviaInternationalHoldingsCreateManyInput | AureviaInternationalHoldingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AureviaInternationalHoldings createManyAndReturn
   */
  export type AureviaInternationalHoldingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * The data used to create many AureviaInternationalHoldings.
     */
    data: AureviaInternationalHoldingsCreateManyInput | AureviaInternationalHoldingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AureviaInternationalHoldings update
   */
  export type AureviaInternationalHoldingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * The data needed to update a AureviaInternationalHoldings.
     */
    data: XOR<AureviaInternationalHoldingsUpdateInput, AureviaInternationalHoldingsUncheckedUpdateInput>
    /**
     * Choose, which AureviaInternationalHoldings to update.
     */
    where: AureviaInternationalHoldingsWhereUniqueInput
  }

  /**
   * AureviaInternationalHoldings updateMany
   */
  export type AureviaInternationalHoldingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AureviaInternationalHoldings.
     */
    data: XOR<AureviaInternationalHoldingsUpdateManyMutationInput, AureviaInternationalHoldingsUncheckedUpdateManyInput>
    /**
     * Filter which AureviaInternationalHoldings to update
     */
    where?: AureviaInternationalHoldingsWhereInput
    /**
     * Limit how many AureviaInternationalHoldings to update.
     */
    limit?: number
  }

  /**
   * AureviaInternationalHoldings updateManyAndReturn
   */
  export type AureviaInternationalHoldingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * The data used to update AureviaInternationalHoldings.
     */
    data: XOR<AureviaInternationalHoldingsUpdateManyMutationInput, AureviaInternationalHoldingsUncheckedUpdateManyInput>
    /**
     * Filter which AureviaInternationalHoldings to update
     */
    where?: AureviaInternationalHoldingsWhereInput
    /**
     * Limit how many AureviaInternationalHoldings to update.
     */
    limit?: number
  }

  /**
   * AureviaInternationalHoldings upsert
   */
  export type AureviaInternationalHoldingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * The filter to search for the AureviaInternationalHoldings to update in case it exists.
     */
    where: AureviaInternationalHoldingsWhereUniqueInput
    /**
     * In case the AureviaInternationalHoldings found by the `where` argument doesn't exist, create a new AureviaInternationalHoldings with this data.
     */
    create: XOR<AureviaInternationalHoldingsCreateInput, AureviaInternationalHoldingsUncheckedCreateInput>
    /**
     * In case the AureviaInternationalHoldings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AureviaInternationalHoldingsUpdateInput, AureviaInternationalHoldingsUncheckedUpdateInput>
  }

  /**
   * AureviaInternationalHoldings delete
   */
  export type AureviaInternationalHoldingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
    /**
     * Filter which AureviaInternationalHoldings to delete.
     */
    where: AureviaInternationalHoldingsWhereUniqueInput
  }

  /**
   * AureviaInternationalHoldings deleteMany
   */
  export type AureviaInternationalHoldingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AureviaInternationalHoldings to delete
     */
    where?: AureviaInternationalHoldingsWhereInput
    /**
     * Limit how many AureviaInternationalHoldings to delete.
     */
    limit?: number
  }

  /**
   * AureviaInternationalHoldings without action
   */
  export type AureviaInternationalHoldingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AureviaInternationalHoldings
     */
    select?: AureviaInternationalHoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AureviaInternationalHoldings
     */
    omit?: AureviaInternationalHoldingsOmit<ExtArgs> | null
  }


  /**
   * Model ZentaraDynamicsCorporation
   */

  export type AggregateZentaraDynamicsCorporation = {
    _count: ZentaraDynamicsCorporationCountAggregateOutputType | null
    _avg: ZentaraDynamicsCorporationAvgAggregateOutputType | null
    _sum: ZentaraDynamicsCorporationSumAggregateOutputType | null
    _min: ZentaraDynamicsCorporationMinAggregateOutputType | null
    _max: ZentaraDynamicsCorporationMaxAggregateOutputType | null
  }

  export type ZentaraDynamicsCorporationAvgAggregateOutputType = {
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
  }

  export type ZentaraDynamicsCorporationSumAggregateOutputType = {
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
  }

  export type ZentaraDynamicsCorporationMinAggregateOutputType = {
    EventID: string | null
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
    GeoTaggingEnabled: string | null
    PostPlantationCareProvided: string | null
  }

  export type ZentaraDynamicsCorporationMaxAggregateOutputType = {
    EventID: string | null
    TreesPlanted: number | null
    SaplingSurvivalRatePercent: Decimal | null
    SpeciesDiversityCount: number | null
    GeoTaggingEnabled: string | null
    PostPlantationCareProvided: string | null
  }

  export type ZentaraDynamicsCorporationCountAggregateOutputType = {
    EventID: number
    TreesPlanted: number
    SaplingSurvivalRatePercent: number
    SpeciesDiversityCount: number
    GeoTaggingEnabled: number
    PostPlantationCareProvided: number
    _all: number
  }


  export type ZentaraDynamicsCorporationAvgAggregateInputType = {
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
  }

  export type ZentaraDynamicsCorporationSumAggregateInputType = {
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
  }

  export type ZentaraDynamicsCorporationMinAggregateInputType = {
    EventID?: true
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
    GeoTaggingEnabled?: true
    PostPlantationCareProvided?: true
  }

  export type ZentaraDynamicsCorporationMaxAggregateInputType = {
    EventID?: true
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
    GeoTaggingEnabled?: true
    PostPlantationCareProvided?: true
  }

  export type ZentaraDynamicsCorporationCountAggregateInputType = {
    EventID?: true
    TreesPlanted?: true
    SaplingSurvivalRatePercent?: true
    SpeciesDiversityCount?: true
    GeoTaggingEnabled?: true
    PostPlantationCareProvided?: true
    _all?: true
  }

  export type ZentaraDynamicsCorporationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZentaraDynamicsCorporation to aggregate.
     */
    where?: ZentaraDynamicsCorporationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZentaraDynamicsCorporations to fetch.
     */
    orderBy?: ZentaraDynamicsCorporationOrderByWithRelationInput | ZentaraDynamicsCorporationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZentaraDynamicsCorporationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZentaraDynamicsCorporations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZentaraDynamicsCorporations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZentaraDynamicsCorporations
    **/
    _count?: true | ZentaraDynamicsCorporationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZentaraDynamicsCorporationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZentaraDynamicsCorporationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZentaraDynamicsCorporationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZentaraDynamicsCorporationMaxAggregateInputType
  }

  export type GetZentaraDynamicsCorporationAggregateType<T extends ZentaraDynamicsCorporationAggregateArgs> = {
        [P in keyof T & keyof AggregateZentaraDynamicsCorporation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZentaraDynamicsCorporation[P]>
      : GetScalarType<T[P], AggregateZentaraDynamicsCorporation[P]>
  }




  export type ZentaraDynamicsCorporationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZentaraDynamicsCorporationWhereInput
    orderBy?: ZentaraDynamicsCorporationOrderByWithAggregationInput | ZentaraDynamicsCorporationOrderByWithAggregationInput[]
    by: ZentaraDynamicsCorporationScalarFieldEnum[] | ZentaraDynamicsCorporationScalarFieldEnum
    having?: ZentaraDynamicsCorporationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZentaraDynamicsCorporationCountAggregateInputType | true
    _avg?: ZentaraDynamicsCorporationAvgAggregateInputType
    _sum?: ZentaraDynamicsCorporationSumAggregateInputType
    _min?: ZentaraDynamicsCorporationMinAggregateInputType
    _max?: ZentaraDynamicsCorporationMaxAggregateInputType
  }

  export type ZentaraDynamicsCorporationGroupByOutputType = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
    _count: ZentaraDynamicsCorporationCountAggregateOutputType | null
    _avg: ZentaraDynamicsCorporationAvgAggregateOutputType | null
    _sum: ZentaraDynamicsCorporationSumAggregateOutputType | null
    _min: ZentaraDynamicsCorporationMinAggregateOutputType | null
    _max: ZentaraDynamicsCorporationMaxAggregateOutputType | null
  }

  type GetZentaraDynamicsCorporationGroupByPayload<T extends ZentaraDynamicsCorporationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZentaraDynamicsCorporationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZentaraDynamicsCorporationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZentaraDynamicsCorporationGroupByOutputType[P]>
            : GetScalarType<T[P], ZentaraDynamicsCorporationGroupByOutputType[P]>
        }
      >
    >


  export type ZentaraDynamicsCorporationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }, ExtArgs["result"]["zentaraDynamicsCorporation"]>

  export type ZentaraDynamicsCorporationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }, ExtArgs["result"]["zentaraDynamicsCorporation"]>

  export type ZentaraDynamicsCorporationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }, ExtArgs["result"]["zentaraDynamicsCorporation"]>

  export type ZentaraDynamicsCorporationSelectScalar = {
    EventID?: boolean
    TreesPlanted?: boolean
    SaplingSurvivalRatePercent?: boolean
    SpeciesDiversityCount?: boolean
    GeoTaggingEnabled?: boolean
    PostPlantationCareProvided?: boolean
  }

  export type ZentaraDynamicsCorporationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EventID" | "TreesPlanted" | "SaplingSurvivalRatePercent" | "SpeciesDiversityCount" | "GeoTaggingEnabled" | "PostPlantationCareProvided", ExtArgs["result"]["zentaraDynamicsCorporation"]>

  export type $ZentaraDynamicsCorporationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZentaraDynamicsCorporation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      EventID: string
      TreesPlanted: number
      SaplingSurvivalRatePercent: Prisma.Decimal
      SpeciesDiversityCount: number
      GeoTaggingEnabled: string
      PostPlantationCareProvided: string
    }, ExtArgs["result"]["zentaraDynamicsCorporation"]>
    composites: {}
  }

  type ZentaraDynamicsCorporationGetPayload<S extends boolean | null | undefined | ZentaraDynamicsCorporationDefaultArgs> = $Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload, S>

  type ZentaraDynamicsCorporationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZentaraDynamicsCorporationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZentaraDynamicsCorporationCountAggregateInputType | true
    }

  export interface ZentaraDynamicsCorporationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZentaraDynamicsCorporation'], meta: { name: 'ZentaraDynamicsCorporation' } }
    /**
     * Find zero or one ZentaraDynamicsCorporation that matches the filter.
     * @param {ZentaraDynamicsCorporationFindUniqueArgs} args - Arguments to find a ZentaraDynamicsCorporation
     * @example
     * // Get one ZentaraDynamicsCorporation
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZentaraDynamicsCorporationFindUniqueArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationFindUniqueArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZentaraDynamicsCorporation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZentaraDynamicsCorporationFindUniqueOrThrowArgs} args - Arguments to find a ZentaraDynamicsCorporation
     * @example
     * // Get one ZentaraDynamicsCorporation
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZentaraDynamicsCorporationFindUniqueOrThrowArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZentaraDynamicsCorporation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZentaraDynamicsCorporationFindFirstArgs} args - Arguments to find a ZentaraDynamicsCorporation
     * @example
     * // Get one ZentaraDynamicsCorporation
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZentaraDynamicsCorporationFindFirstArgs>(args?: SelectSubset<T, ZentaraDynamicsCorporationFindFirstArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZentaraDynamicsCorporation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZentaraDynamicsCorporationFindFirstOrThrowArgs} args - Arguments to find a ZentaraDynamicsCorporation
     * @example
     * // Get one ZentaraDynamicsCorporation
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZentaraDynamicsCorporationFindFirstOrThrowArgs>(args?: SelectSubset<T, ZentaraDynamicsCorporationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZentaraDynamicsCorporations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZentaraDynamicsCorporationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZentaraDynamicsCorporations
     * const zentaraDynamicsCorporations = await prisma.zentaraDynamicsCorporation.findMany()
     * 
     * // Get first 10 ZentaraDynamicsCorporations
     * const zentaraDynamicsCorporations = await prisma.zentaraDynamicsCorporation.findMany({ take: 10 })
     * 
     * // Only select the `EventID`
     * const zentaraDynamicsCorporationWithEventIDOnly = await prisma.zentaraDynamicsCorporation.findMany({ select: { EventID: true } })
     * 
     */
    findMany<T extends ZentaraDynamicsCorporationFindManyArgs>(args?: SelectSubset<T, ZentaraDynamicsCorporationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZentaraDynamicsCorporation.
     * @param {ZentaraDynamicsCorporationCreateArgs} args - Arguments to create a ZentaraDynamicsCorporation.
     * @example
     * // Create one ZentaraDynamicsCorporation
     * const ZentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.create({
     *   data: {
     *     // ... data to create a ZentaraDynamicsCorporation
     *   }
     * })
     * 
     */
    create<T extends ZentaraDynamicsCorporationCreateArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationCreateArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZentaraDynamicsCorporations.
     * @param {ZentaraDynamicsCorporationCreateManyArgs} args - Arguments to create many ZentaraDynamicsCorporations.
     * @example
     * // Create many ZentaraDynamicsCorporations
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZentaraDynamicsCorporationCreateManyArgs>(args?: SelectSubset<T, ZentaraDynamicsCorporationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZentaraDynamicsCorporations and returns the data saved in the database.
     * @param {ZentaraDynamicsCorporationCreateManyAndReturnArgs} args - Arguments to create many ZentaraDynamicsCorporations.
     * @example
     * // Create many ZentaraDynamicsCorporations
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZentaraDynamicsCorporations and only return the `EventID`
     * const zentaraDynamicsCorporationWithEventIDOnly = await prisma.zentaraDynamicsCorporation.createManyAndReturn({
     *   select: { EventID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZentaraDynamicsCorporationCreateManyAndReturnArgs>(args?: SelectSubset<T, ZentaraDynamicsCorporationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZentaraDynamicsCorporation.
     * @param {ZentaraDynamicsCorporationDeleteArgs} args - Arguments to delete one ZentaraDynamicsCorporation.
     * @example
     * // Delete one ZentaraDynamicsCorporation
     * const ZentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.delete({
     *   where: {
     *     // ... filter to delete one ZentaraDynamicsCorporation
     *   }
     * })
     * 
     */
    delete<T extends ZentaraDynamicsCorporationDeleteArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationDeleteArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZentaraDynamicsCorporation.
     * @param {ZentaraDynamicsCorporationUpdateArgs} args - Arguments to update one ZentaraDynamicsCorporation.
     * @example
     * // Update one ZentaraDynamicsCorporation
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZentaraDynamicsCorporationUpdateArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationUpdateArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZentaraDynamicsCorporations.
     * @param {ZentaraDynamicsCorporationDeleteManyArgs} args - Arguments to filter ZentaraDynamicsCorporations to delete.
     * @example
     * // Delete a few ZentaraDynamicsCorporations
     * const { count } = await prisma.zentaraDynamicsCorporation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZentaraDynamicsCorporationDeleteManyArgs>(args?: SelectSubset<T, ZentaraDynamicsCorporationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZentaraDynamicsCorporations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZentaraDynamicsCorporationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZentaraDynamicsCorporations
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZentaraDynamicsCorporationUpdateManyArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZentaraDynamicsCorporations and returns the data updated in the database.
     * @param {ZentaraDynamicsCorporationUpdateManyAndReturnArgs} args - Arguments to update many ZentaraDynamicsCorporations.
     * @example
     * // Update many ZentaraDynamicsCorporations
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZentaraDynamicsCorporations and only return the `EventID`
     * const zentaraDynamicsCorporationWithEventIDOnly = await prisma.zentaraDynamicsCorporation.updateManyAndReturn({
     *   select: { EventID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZentaraDynamicsCorporationUpdateManyAndReturnArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZentaraDynamicsCorporation.
     * @param {ZentaraDynamicsCorporationUpsertArgs} args - Arguments to update or create a ZentaraDynamicsCorporation.
     * @example
     * // Update or create a ZentaraDynamicsCorporation
     * const zentaraDynamicsCorporation = await prisma.zentaraDynamicsCorporation.upsert({
     *   create: {
     *     // ... data to create a ZentaraDynamicsCorporation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZentaraDynamicsCorporation we want to update
     *   }
     * })
     */
    upsert<T extends ZentaraDynamicsCorporationUpsertArgs>(args: SelectSubset<T, ZentaraDynamicsCorporationUpsertArgs<ExtArgs>>): Prisma__ZentaraDynamicsCorporationClient<$Result.GetResult<Prisma.$ZentaraDynamicsCorporationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZentaraDynamicsCorporations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZentaraDynamicsCorporationCountArgs} args - Arguments to filter ZentaraDynamicsCorporations to count.
     * @example
     * // Count the number of ZentaraDynamicsCorporations
     * const count = await prisma.zentaraDynamicsCorporation.count({
     *   where: {
     *     // ... the filter for the ZentaraDynamicsCorporations we want to count
     *   }
     * })
    **/
    count<T extends ZentaraDynamicsCorporationCountArgs>(
      args?: Subset<T, ZentaraDynamicsCorporationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZentaraDynamicsCorporationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZentaraDynamicsCorporation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZentaraDynamicsCorporationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZentaraDynamicsCorporationAggregateArgs>(args: Subset<T, ZentaraDynamicsCorporationAggregateArgs>): Prisma.PrismaPromise<GetZentaraDynamicsCorporationAggregateType<T>>

    /**
     * Group by ZentaraDynamicsCorporation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZentaraDynamicsCorporationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZentaraDynamicsCorporationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZentaraDynamicsCorporationGroupByArgs['orderBy'] }
        : { orderBy?: ZentaraDynamicsCorporationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZentaraDynamicsCorporationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZentaraDynamicsCorporationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZentaraDynamicsCorporation model
   */
  readonly fields: ZentaraDynamicsCorporationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZentaraDynamicsCorporation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZentaraDynamicsCorporationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZentaraDynamicsCorporation model
   */
  interface ZentaraDynamicsCorporationFieldRefs {
    readonly EventID: FieldRef<"ZentaraDynamicsCorporation", 'String'>
    readonly TreesPlanted: FieldRef<"ZentaraDynamicsCorporation", 'Int'>
    readonly SaplingSurvivalRatePercent: FieldRef<"ZentaraDynamicsCorporation", 'Decimal'>
    readonly SpeciesDiversityCount: FieldRef<"ZentaraDynamicsCorporation", 'Int'>
    readonly GeoTaggingEnabled: FieldRef<"ZentaraDynamicsCorporation", 'String'>
    readonly PostPlantationCareProvided: FieldRef<"ZentaraDynamicsCorporation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ZentaraDynamicsCorporation findUnique
   */
  export type ZentaraDynamicsCorporationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * Filter, which ZentaraDynamicsCorporation to fetch.
     */
    where: ZentaraDynamicsCorporationWhereUniqueInput
  }

  /**
   * ZentaraDynamicsCorporation findUniqueOrThrow
   */
  export type ZentaraDynamicsCorporationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * Filter, which ZentaraDynamicsCorporation to fetch.
     */
    where: ZentaraDynamicsCorporationWhereUniqueInput
  }

  /**
   * ZentaraDynamicsCorporation findFirst
   */
  export type ZentaraDynamicsCorporationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * Filter, which ZentaraDynamicsCorporation to fetch.
     */
    where?: ZentaraDynamicsCorporationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZentaraDynamicsCorporations to fetch.
     */
    orderBy?: ZentaraDynamicsCorporationOrderByWithRelationInput | ZentaraDynamicsCorporationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZentaraDynamicsCorporations.
     */
    cursor?: ZentaraDynamicsCorporationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZentaraDynamicsCorporations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZentaraDynamicsCorporations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZentaraDynamicsCorporations.
     */
    distinct?: ZentaraDynamicsCorporationScalarFieldEnum | ZentaraDynamicsCorporationScalarFieldEnum[]
  }

  /**
   * ZentaraDynamicsCorporation findFirstOrThrow
   */
  export type ZentaraDynamicsCorporationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * Filter, which ZentaraDynamicsCorporation to fetch.
     */
    where?: ZentaraDynamicsCorporationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZentaraDynamicsCorporations to fetch.
     */
    orderBy?: ZentaraDynamicsCorporationOrderByWithRelationInput | ZentaraDynamicsCorporationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZentaraDynamicsCorporations.
     */
    cursor?: ZentaraDynamicsCorporationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZentaraDynamicsCorporations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZentaraDynamicsCorporations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZentaraDynamicsCorporations.
     */
    distinct?: ZentaraDynamicsCorporationScalarFieldEnum | ZentaraDynamicsCorporationScalarFieldEnum[]
  }

  /**
   * ZentaraDynamicsCorporation findMany
   */
  export type ZentaraDynamicsCorporationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * Filter, which ZentaraDynamicsCorporations to fetch.
     */
    where?: ZentaraDynamicsCorporationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZentaraDynamicsCorporations to fetch.
     */
    orderBy?: ZentaraDynamicsCorporationOrderByWithRelationInput | ZentaraDynamicsCorporationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZentaraDynamicsCorporations.
     */
    cursor?: ZentaraDynamicsCorporationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZentaraDynamicsCorporations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZentaraDynamicsCorporations.
     */
    skip?: number
    distinct?: ZentaraDynamicsCorporationScalarFieldEnum | ZentaraDynamicsCorporationScalarFieldEnum[]
  }

  /**
   * ZentaraDynamicsCorporation create
   */
  export type ZentaraDynamicsCorporationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * The data needed to create a ZentaraDynamicsCorporation.
     */
    data: XOR<ZentaraDynamicsCorporationCreateInput, ZentaraDynamicsCorporationUncheckedCreateInput>
  }

  /**
   * ZentaraDynamicsCorporation createMany
   */
  export type ZentaraDynamicsCorporationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZentaraDynamicsCorporations.
     */
    data: ZentaraDynamicsCorporationCreateManyInput | ZentaraDynamicsCorporationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZentaraDynamicsCorporation createManyAndReturn
   */
  export type ZentaraDynamicsCorporationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * The data used to create many ZentaraDynamicsCorporations.
     */
    data: ZentaraDynamicsCorporationCreateManyInput | ZentaraDynamicsCorporationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZentaraDynamicsCorporation update
   */
  export type ZentaraDynamicsCorporationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * The data needed to update a ZentaraDynamicsCorporation.
     */
    data: XOR<ZentaraDynamicsCorporationUpdateInput, ZentaraDynamicsCorporationUncheckedUpdateInput>
    /**
     * Choose, which ZentaraDynamicsCorporation to update.
     */
    where: ZentaraDynamicsCorporationWhereUniqueInput
  }

  /**
   * ZentaraDynamicsCorporation updateMany
   */
  export type ZentaraDynamicsCorporationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZentaraDynamicsCorporations.
     */
    data: XOR<ZentaraDynamicsCorporationUpdateManyMutationInput, ZentaraDynamicsCorporationUncheckedUpdateManyInput>
    /**
     * Filter which ZentaraDynamicsCorporations to update
     */
    where?: ZentaraDynamicsCorporationWhereInput
    /**
     * Limit how many ZentaraDynamicsCorporations to update.
     */
    limit?: number
  }

  /**
   * ZentaraDynamicsCorporation updateManyAndReturn
   */
  export type ZentaraDynamicsCorporationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * The data used to update ZentaraDynamicsCorporations.
     */
    data: XOR<ZentaraDynamicsCorporationUpdateManyMutationInput, ZentaraDynamicsCorporationUncheckedUpdateManyInput>
    /**
     * Filter which ZentaraDynamicsCorporations to update
     */
    where?: ZentaraDynamicsCorporationWhereInput
    /**
     * Limit how many ZentaraDynamicsCorporations to update.
     */
    limit?: number
  }

  /**
   * ZentaraDynamicsCorporation upsert
   */
  export type ZentaraDynamicsCorporationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * The filter to search for the ZentaraDynamicsCorporation to update in case it exists.
     */
    where: ZentaraDynamicsCorporationWhereUniqueInput
    /**
     * In case the ZentaraDynamicsCorporation found by the `where` argument doesn't exist, create a new ZentaraDynamicsCorporation with this data.
     */
    create: XOR<ZentaraDynamicsCorporationCreateInput, ZentaraDynamicsCorporationUncheckedCreateInput>
    /**
     * In case the ZentaraDynamicsCorporation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZentaraDynamicsCorporationUpdateInput, ZentaraDynamicsCorporationUncheckedUpdateInput>
  }

  /**
   * ZentaraDynamicsCorporation delete
   */
  export type ZentaraDynamicsCorporationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
    /**
     * Filter which ZentaraDynamicsCorporation to delete.
     */
    where: ZentaraDynamicsCorporationWhereUniqueInput
  }

  /**
   * ZentaraDynamicsCorporation deleteMany
   */
  export type ZentaraDynamicsCorporationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZentaraDynamicsCorporations to delete
     */
    where?: ZentaraDynamicsCorporationWhereInput
    /**
     * Limit how many ZentaraDynamicsCorporations to delete.
     */
    limit?: number
  }

  /**
   * ZentaraDynamicsCorporation without action
   */
  export type ZentaraDynamicsCorporationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZentaraDynamicsCorporation
     */
    select?: ZentaraDynamicsCorporationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZentaraDynamicsCorporation
     */
    omit?: ZentaraDynamicsCorporationOmit<ExtArgs> | null
  }


  /**
   * Model TrionyxSystemsWorldwide
   */

  export type AggregateTrionyxSystemsWorldwide = {
    _count: TrionyxSystemsWorldwideCountAggregateOutputType | null
    _avg: TrionyxSystemsWorldwideAvgAggregateOutputType | null
    _sum: TrionyxSystemsWorldwideSumAggregateOutputType | null
    _min: TrionyxSystemsWorldwideMinAggregateOutputType | null
    _max: TrionyxSystemsWorldwideMaxAggregateOutputType | null
  }

  export type TrionyxSystemsWorldwideAvgAggregateOutputType = {
    TankersSupplied: number | null
    WaterDeliveredLiters: number | null
    HouseholdsReached: number | null
    WaterDistributionPoints: number | null
    HygieneKitsDistributed: number | null
  }

  export type TrionyxSystemsWorldwideSumAggregateOutputType = {
    TankersSupplied: number | null
    WaterDeliveredLiters: number | null
    HouseholdsReached: number | null
    WaterDistributionPoints: number | null
    HygieneKitsDistributed: number | null
  }

  export type TrionyxSystemsWorldwideMinAggregateOutputType = {
    EventID: string | null
    TankersSupplied: number | null
    WaterDeliveredLiters: number | null
    HouseholdsReached: number | null
    WaterDistributionPoints: number | null
    HygieneKitsDistributed: number | null
  }

  export type TrionyxSystemsWorldwideMaxAggregateOutputType = {
    EventID: string | null
    TankersSupplied: number | null
    WaterDeliveredLiters: number | null
    HouseholdsReached: number | null
    WaterDistributionPoints: number | null
    HygieneKitsDistributed: number | null
  }

  export type TrionyxSystemsWorldwideCountAggregateOutputType = {
    EventID: number
    TankersSupplied: number
    WaterDeliveredLiters: number
    HouseholdsReached: number
    WaterDistributionPoints: number
    HygieneKitsDistributed: number
    _all: number
  }


  export type TrionyxSystemsWorldwideAvgAggregateInputType = {
    TankersSupplied?: true
    WaterDeliveredLiters?: true
    HouseholdsReached?: true
    WaterDistributionPoints?: true
    HygieneKitsDistributed?: true
  }

  export type TrionyxSystemsWorldwideSumAggregateInputType = {
    TankersSupplied?: true
    WaterDeliveredLiters?: true
    HouseholdsReached?: true
    WaterDistributionPoints?: true
    HygieneKitsDistributed?: true
  }

  export type TrionyxSystemsWorldwideMinAggregateInputType = {
    EventID?: true
    TankersSupplied?: true
    WaterDeliveredLiters?: true
    HouseholdsReached?: true
    WaterDistributionPoints?: true
    HygieneKitsDistributed?: true
  }

  export type TrionyxSystemsWorldwideMaxAggregateInputType = {
    EventID?: true
    TankersSupplied?: true
    WaterDeliveredLiters?: true
    HouseholdsReached?: true
    WaterDistributionPoints?: true
    HygieneKitsDistributed?: true
  }

  export type TrionyxSystemsWorldwideCountAggregateInputType = {
    EventID?: true
    TankersSupplied?: true
    WaterDeliveredLiters?: true
    HouseholdsReached?: true
    WaterDistributionPoints?: true
    HygieneKitsDistributed?: true
    _all?: true
  }

  export type TrionyxSystemsWorldwideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrionyxSystemsWorldwide to aggregate.
     */
    where?: TrionyxSystemsWorldwideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrionyxSystemsWorldwides to fetch.
     */
    orderBy?: TrionyxSystemsWorldwideOrderByWithRelationInput | TrionyxSystemsWorldwideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrionyxSystemsWorldwideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrionyxSystemsWorldwides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrionyxSystemsWorldwides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrionyxSystemsWorldwides
    **/
    _count?: true | TrionyxSystemsWorldwideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrionyxSystemsWorldwideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrionyxSystemsWorldwideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrionyxSystemsWorldwideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrionyxSystemsWorldwideMaxAggregateInputType
  }

  export type GetTrionyxSystemsWorldwideAggregateType<T extends TrionyxSystemsWorldwideAggregateArgs> = {
        [P in keyof T & keyof AggregateTrionyxSystemsWorldwide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrionyxSystemsWorldwide[P]>
      : GetScalarType<T[P], AggregateTrionyxSystemsWorldwide[P]>
  }




  export type TrionyxSystemsWorldwideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrionyxSystemsWorldwideWhereInput
    orderBy?: TrionyxSystemsWorldwideOrderByWithAggregationInput | TrionyxSystemsWorldwideOrderByWithAggregationInput[]
    by: TrionyxSystemsWorldwideScalarFieldEnum[] | TrionyxSystemsWorldwideScalarFieldEnum
    having?: TrionyxSystemsWorldwideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrionyxSystemsWorldwideCountAggregateInputType | true
    _avg?: TrionyxSystemsWorldwideAvgAggregateInputType
    _sum?: TrionyxSystemsWorldwideSumAggregateInputType
    _min?: TrionyxSystemsWorldwideMinAggregateInputType
    _max?: TrionyxSystemsWorldwideMaxAggregateInputType
  }

  export type TrionyxSystemsWorldwideGroupByOutputType = {
    EventID: string
    TankersSupplied: number
    WaterDeliveredLiters: number
    HouseholdsReached: number
    WaterDistributionPoints: number
    HygieneKitsDistributed: number
    _count: TrionyxSystemsWorldwideCountAggregateOutputType | null
    _avg: TrionyxSystemsWorldwideAvgAggregateOutputType | null
    _sum: TrionyxSystemsWorldwideSumAggregateOutputType | null
    _min: TrionyxSystemsWorldwideMinAggregateOutputType | null
    _max: TrionyxSystemsWorldwideMaxAggregateOutputType | null
  }

  type GetTrionyxSystemsWorldwideGroupByPayload<T extends TrionyxSystemsWorldwideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrionyxSystemsWorldwideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrionyxSystemsWorldwideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrionyxSystemsWorldwideGroupByOutputType[P]>
            : GetScalarType<T[P], TrionyxSystemsWorldwideGroupByOutputType[P]>
        }
      >
    >


  export type TrionyxSystemsWorldwideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TankersSupplied?: boolean
    WaterDeliveredLiters?: boolean
    HouseholdsReached?: boolean
    WaterDistributionPoints?: boolean
    HygieneKitsDistributed?: boolean
  }, ExtArgs["result"]["trionyxSystemsWorldwide"]>

  export type TrionyxSystemsWorldwideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TankersSupplied?: boolean
    WaterDeliveredLiters?: boolean
    HouseholdsReached?: boolean
    WaterDistributionPoints?: boolean
    HygieneKitsDistributed?: boolean
  }, ExtArgs["result"]["trionyxSystemsWorldwide"]>

  export type TrionyxSystemsWorldwideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EventID?: boolean
    TankersSupplied?: boolean
    WaterDeliveredLiters?: boolean
    HouseholdsReached?: boolean
    WaterDistributionPoints?: boolean
    HygieneKitsDistributed?: boolean
  }, ExtArgs["result"]["trionyxSystemsWorldwide"]>

  export type TrionyxSystemsWorldwideSelectScalar = {
    EventID?: boolean
    TankersSupplied?: boolean
    WaterDeliveredLiters?: boolean
    HouseholdsReached?: boolean
    WaterDistributionPoints?: boolean
    HygieneKitsDistributed?: boolean
  }

  export type TrionyxSystemsWorldwideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EventID" | "TankersSupplied" | "WaterDeliveredLiters" | "HouseholdsReached" | "WaterDistributionPoints" | "HygieneKitsDistributed", ExtArgs["result"]["trionyxSystemsWorldwide"]>

  export type $TrionyxSystemsWorldwidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrionyxSystemsWorldwide"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      EventID: string
      TankersSupplied: number
      WaterDeliveredLiters: number
      HouseholdsReached: number
      WaterDistributionPoints: number
      HygieneKitsDistributed: number
    }, ExtArgs["result"]["trionyxSystemsWorldwide"]>
    composites: {}
  }

  type TrionyxSystemsWorldwideGetPayload<S extends boolean | null | undefined | TrionyxSystemsWorldwideDefaultArgs> = $Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload, S>

  type TrionyxSystemsWorldwideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrionyxSystemsWorldwideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrionyxSystemsWorldwideCountAggregateInputType | true
    }

  export interface TrionyxSystemsWorldwideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrionyxSystemsWorldwide'], meta: { name: 'TrionyxSystemsWorldwide' } }
    /**
     * Find zero or one TrionyxSystemsWorldwide that matches the filter.
     * @param {TrionyxSystemsWorldwideFindUniqueArgs} args - Arguments to find a TrionyxSystemsWorldwide
     * @example
     * // Get one TrionyxSystemsWorldwide
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrionyxSystemsWorldwideFindUniqueArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideFindUniqueArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrionyxSystemsWorldwide that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrionyxSystemsWorldwideFindUniqueOrThrowArgs} args - Arguments to find a TrionyxSystemsWorldwide
     * @example
     * // Get one TrionyxSystemsWorldwide
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrionyxSystemsWorldwideFindUniqueOrThrowArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrionyxSystemsWorldwide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrionyxSystemsWorldwideFindFirstArgs} args - Arguments to find a TrionyxSystemsWorldwide
     * @example
     * // Get one TrionyxSystemsWorldwide
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrionyxSystemsWorldwideFindFirstArgs>(args?: SelectSubset<T, TrionyxSystemsWorldwideFindFirstArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrionyxSystemsWorldwide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrionyxSystemsWorldwideFindFirstOrThrowArgs} args - Arguments to find a TrionyxSystemsWorldwide
     * @example
     * // Get one TrionyxSystemsWorldwide
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrionyxSystemsWorldwideFindFirstOrThrowArgs>(args?: SelectSubset<T, TrionyxSystemsWorldwideFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrionyxSystemsWorldwides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrionyxSystemsWorldwideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrionyxSystemsWorldwides
     * const trionyxSystemsWorldwides = await prisma.trionyxSystemsWorldwide.findMany()
     * 
     * // Get first 10 TrionyxSystemsWorldwides
     * const trionyxSystemsWorldwides = await prisma.trionyxSystemsWorldwide.findMany({ take: 10 })
     * 
     * // Only select the `EventID`
     * const trionyxSystemsWorldwideWithEventIDOnly = await prisma.trionyxSystemsWorldwide.findMany({ select: { EventID: true } })
     * 
     */
    findMany<T extends TrionyxSystemsWorldwideFindManyArgs>(args?: SelectSubset<T, TrionyxSystemsWorldwideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrionyxSystemsWorldwide.
     * @param {TrionyxSystemsWorldwideCreateArgs} args - Arguments to create a TrionyxSystemsWorldwide.
     * @example
     * // Create one TrionyxSystemsWorldwide
     * const TrionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.create({
     *   data: {
     *     // ... data to create a TrionyxSystemsWorldwide
     *   }
     * })
     * 
     */
    create<T extends TrionyxSystemsWorldwideCreateArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideCreateArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrionyxSystemsWorldwides.
     * @param {TrionyxSystemsWorldwideCreateManyArgs} args - Arguments to create many TrionyxSystemsWorldwides.
     * @example
     * // Create many TrionyxSystemsWorldwides
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrionyxSystemsWorldwideCreateManyArgs>(args?: SelectSubset<T, TrionyxSystemsWorldwideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrionyxSystemsWorldwides and returns the data saved in the database.
     * @param {TrionyxSystemsWorldwideCreateManyAndReturnArgs} args - Arguments to create many TrionyxSystemsWorldwides.
     * @example
     * // Create many TrionyxSystemsWorldwides
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrionyxSystemsWorldwides and only return the `EventID`
     * const trionyxSystemsWorldwideWithEventIDOnly = await prisma.trionyxSystemsWorldwide.createManyAndReturn({
     *   select: { EventID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrionyxSystemsWorldwideCreateManyAndReturnArgs>(args?: SelectSubset<T, TrionyxSystemsWorldwideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrionyxSystemsWorldwide.
     * @param {TrionyxSystemsWorldwideDeleteArgs} args - Arguments to delete one TrionyxSystemsWorldwide.
     * @example
     * // Delete one TrionyxSystemsWorldwide
     * const TrionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.delete({
     *   where: {
     *     // ... filter to delete one TrionyxSystemsWorldwide
     *   }
     * })
     * 
     */
    delete<T extends TrionyxSystemsWorldwideDeleteArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideDeleteArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrionyxSystemsWorldwide.
     * @param {TrionyxSystemsWorldwideUpdateArgs} args - Arguments to update one TrionyxSystemsWorldwide.
     * @example
     * // Update one TrionyxSystemsWorldwide
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrionyxSystemsWorldwideUpdateArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideUpdateArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrionyxSystemsWorldwides.
     * @param {TrionyxSystemsWorldwideDeleteManyArgs} args - Arguments to filter TrionyxSystemsWorldwides to delete.
     * @example
     * // Delete a few TrionyxSystemsWorldwides
     * const { count } = await prisma.trionyxSystemsWorldwide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrionyxSystemsWorldwideDeleteManyArgs>(args?: SelectSubset<T, TrionyxSystemsWorldwideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrionyxSystemsWorldwides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrionyxSystemsWorldwideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrionyxSystemsWorldwides
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrionyxSystemsWorldwideUpdateManyArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrionyxSystemsWorldwides and returns the data updated in the database.
     * @param {TrionyxSystemsWorldwideUpdateManyAndReturnArgs} args - Arguments to update many TrionyxSystemsWorldwides.
     * @example
     * // Update many TrionyxSystemsWorldwides
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrionyxSystemsWorldwides and only return the `EventID`
     * const trionyxSystemsWorldwideWithEventIDOnly = await prisma.trionyxSystemsWorldwide.updateManyAndReturn({
     *   select: { EventID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrionyxSystemsWorldwideUpdateManyAndReturnArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrionyxSystemsWorldwide.
     * @param {TrionyxSystemsWorldwideUpsertArgs} args - Arguments to update or create a TrionyxSystemsWorldwide.
     * @example
     * // Update or create a TrionyxSystemsWorldwide
     * const trionyxSystemsWorldwide = await prisma.trionyxSystemsWorldwide.upsert({
     *   create: {
     *     // ... data to create a TrionyxSystemsWorldwide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrionyxSystemsWorldwide we want to update
     *   }
     * })
     */
    upsert<T extends TrionyxSystemsWorldwideUpsertArgs>(args: SelectSubset<T, TrionyxSystemsWorldwideUpsertArgs<ExtArgs>>): Prisma__TrionyxSystemsWorldwideClient<$Result.GetResult<Prisma.$TrionyxSystemsWorldwidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrionyxSystemsWorldwides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrionyxSystemsWorldwideCountArgs} args - Arguments to filter TrionyxSystemsWorldwides to count.
     * @example
     * // Count the number of TrionyxSystemsWorldwides
     * const count = await prisma.trionyxSystemsWorldwide.count({
     *   where: {
     *     // ... the filter for the TrionyxSystemsWorldwides we want to count
     *   }
     * })
    **/
    count<T extends TrionyxSystemsWorldwideCountArgs>(
      args?: Subset<T, TrionyxSystemsWorldwideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrionyxSystemsWorldwideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrionyxSystemsWorldwide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrionyxSystemsWorldwideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrionyxSystemsWorldwideAggregateArgs>(args: Subset<T, TrionyxSystemsWorldwideAggregateArgs>): Prisma.PrismaPromise<GetTrionyxSystemsWorldwideAggregateType<T>>

    /**
     * Group by TrionyxSystemsWorldwide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrionyxSystemsWorldwideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrionyxSystemsWorldwideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrionyxSystemsWorldwideGroupByArgs['orderBy'] }
        : { orderBy?: TrionyxSystemsWorldwideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrionyxSystemsWorldwideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrionyxSystemsWorldwideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrionyxSystemsWorldwide model
   */
  readonly fields: TrionyxSystemsWorldwideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrionyxSystemsWorldwide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrionyxSystemsWorldwideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrionyxSystemsWorldwide model
   */
  interface TrionyxSystemsWorldwideFieldRefs {
    readonly EventID: FieldRef<"TrionyxSystemsWorldwide", 'String'>
    readonly TankersSupplied: FieldRef<"TrionyxSystemsWorldwide", 'Int'>
    readonly WaterDeliveredLiters: FieldRef<"TrionyxSystemsWorldwide", 'Int'>
    readonly HouseholdsReached: FieldRef<"TrionyxSystemsWorldwide", 'Int'>
    readonly WaterDistributionPoints: FieldRef<"TrionyxSystemsWorldwide", 'Int'>
    readonly HygieneKitsDistributed: FieldRef<"TrionyxSystemsWorldwide", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrionyxSystemsWorldwide findUnique
   */
  export type TrionyxSystemsWorldwideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * Filter, which TrionyxSystemsWorldwide to fetch.
     */
    where: TrionyxSystemsWorldwideWhereUniqueInput
  }

  /**
   * TrionyxSystemsWorldwide findUniqueOrThrow
   */
  export type TrionyxSystemsWorldwideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * Filter, which TrionyxSystemsWorldwide to fetch.
     */
    where: TrionyxSystemsWorldwideWhereUniqueInput
  }

  /**
   * TrionyxSystemsWorldwide findFirst
   */
  export type TrionyxSystemsWorldwideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * Filter, which TrionyxSystemsWorldwide to fetch.
     */
    where?: TrionyxSystemsWorldwideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrionyxSystemsWorldwides to fetch.
     */
    orderBy?: TrionyxSystemsWorldwideOrderByWithRelationInput | TrionyxSystemsWorldwideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrionyxSystemsWorldwides.
     */
    cursor?: TrionyxSystemsWorldwideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrionyxSystemsWorldwides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrionyxSystemsWorldwides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrionyxSystemsWorldwides.
     */
    distinct?: TrionyxSystemsWorldwideScalarFieldEnum | TrionyxSystemsWorldwideScalarFieldEnum[]
  }

  /**
   * TrionyxSystemsWorldwide findFirstOrThrow
   */
  export type TrionyxSystemsWorldwideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * Filter, which TrionyxSystemsWorldwide to fetch.
     */
    where?: TrionyxSystemsWorldwideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrionyxSystemsWorldwides to fetch.
     */
    orderBy?: TrionyxSystemsWorldwideOrderByWithRelationInput | TrionyxSystemsWorldwideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrionyxSystemsWorldwides.
     */
    cursor?: TrionyxSystemsWorldwideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrionyxSystemsWorldwides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrionyxSystemsWorldwides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrionyxSystemsWorldwides.
     */
    distinct?: TrionyxSystemsWorldwideScalarFieldEnum | TrionyxSystemsWorldwideScalarFieldEnum[]
  }

  /**
   * TrionyxSystemsWorldwide findMany
   */
  export type TrionyxSystemsWorldwideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * Filter, which TrionyxSystemsWorldwides to fetch.
     */
    where?: TrionyxSystemsWorldwideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrionyxSystemsWorldwides to fetch.
     */
    orderBy?: TrionyxSystemsWorldwideOrderByWithRelationInput | TrionyxSystemsWorldwideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrionyxSystemsWorldwides.
     */
    cursor?: TrionyxSystemsWorldwideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrionyxSystemsWorldwides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrionyxSystemsWorldwides.
     */
    skip?: number
    distinct?: TrionyxSystemsWorldwideScalarFieldEnum | TrionyxSystemsWorldwideScalarFieldEnum[]
  }

  /**
   * TrionyxSystemsWorldwide create
   */
  export type TrionyxSystemsWorldwideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * The data needed to create a TrionyxSystemsWorldwide.
     */
    data: XOR<TrionyxSystemsWorldwideCreateInput, TrionyxSystemsWorldwideUncheckedCreateInput>
  }

  /**
   * TrionyxSystemsWorldwide createMany
   */
  export type TrionyxSystemsWorldwideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrionyxSystemsWorldwides.
     */
    data: TrionyxSystemsWorldwideCreateManyInput | TrionyxSystemsWorldwideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrionyxSystemsWorldwide createManyAndReturn
   */
  export type TrionyxSystemsWorldwideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * The data used to create many TrionyxSystemsWorldwides.
     */
    data: TrionyxSystemsWorldwideCreateManyInput | TrionyxSystemsWorldwideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrionyxSystemsWorldwide update
   */
  export type TrionyxSystemsWorldwideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * The data needed to update a TrionyxSystemsWorldwide.
     */
    data: XOR<TrionyxSystemsWorldwideUpdateInput, TrionyxSystemsWorldwideUncheckedUpdateInput>
    /**
     * Choose, which TrionyxSystemsWorldwide to update.
     */
    where: TrionyxSystemsWorldwideWhereUniqueInput
  }

  /**
   * TrionyxSystemsWorldwide updateMany
   */
  export type TrionyxSystemsWorldwideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrionyxSystemsWorldwides.
     */
    data: XOR<TrionyxSystemsWorldwideUpdateManyMutationInput, TrionyxSystemsWorldwideUncheckedUpdateManyInput>
    /**
     * Filter which TrionyxSystemsWorldwides to update
     */
    where?: TrionyxSystemsWorldwideWhereInput
    /**
     * Limit how many TrionyxSystemsWorldwides to update.
     */
    limit?: number
  }

  /**
   * TrionyxSystemsWorldwide updateManyAndReturn
   */
  export type TrionyxSystemsWorldwideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * The data used to update TrionyxSystemsWorldwides.
     */
    data: XOR<TrionyxSystemsWorldwideUpdateManyMutationInput, TrionyxSystemsWorldwideUncheckedUpdateManyInput>
    /**
     * Filter which TrionyxSystemsWorldwides to update
     */
    where?: TrionyxSystemsWorldwideWhereInput
    /**
     * Limit how many TrionyxSystemsWorldwides to update.
     */
    limit?: number
  }

  /**
   * TrionyxSystemsWorldwide upsert
   */
  export type TrionyxSystemsWorldwideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * The filter to search for the TrionyxSystemsWorldwide to update in case it exists.
     */
    where: TrionyxSystemsWorldwideWhereUniqueInput
    /**
     * In case the TrionyxSystemsWorldwide found by the `where` argument doesn't exist, create a new TrionyxSystemsWorldwide with this data.
     */
    create: XOR<TrionyxSystemsWorldwideCreateInput, TrionyxSystemsWorldwideUncheckedCreateInput>
    /**
     * In case the TrionyxSystemsWorldwide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrionyxSystemsWorldwideUpdateInput, TrionyxSystemsWorldwideUncheckedUpdateInput>
  }

  /**
   * TrionyxSystemsWorldwide delete
   */
  export type TrionyxSystemsWorldwideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
    /**
     * Filter which TrionyxSystemsWorldwide to delete.
     */
    where: TrionyxSystemsWorldwideWhereUniqueInput
  }

  /**
   * TrionyxSystemsWorldwide deleteMany
   */
  export type TrionyxSystemsWorldwideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrionyxSystemsWorldwides to delete
     */
    where?: TrionyxSystemsWorldwideWhereInput
    /**
     * Limit how many TrionyxSystemsWorldwides to delete.
     */
    limit?: number
  }

  /**
   * TrionyxSystemsWorldwide without action
   */
  export type TrionyxSystemsWorldwideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrionyxSystemsWorldwide
     */
    select?: TrionyxSystemsWorldwideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrionyxSystemsWorldwide
     */
    omit?: TrionyxSystemsWorldwideOmit<ExtArgs> | null
  }


  /**
   * Model Inbox
   */

  export type AggregateInbox = {
    _count: InboxCountAggregateOutputType | null
    _avg: InboxAvgAggregateOutputType | null
    _sum: InboxSumAggregateOutputType | null
    _min: InboxMinAggregateOutputType | null
    _max: InboxMaxAggregateOutputType | null
  }

  export type InboxAvgAggregateOutputType = {
    id: number | null
  }

  export type InboxSumAggregateOutputType = {
    id: number | null
  }

  export type InboxMinAggregateOutputType = {
    id: number | null
    eventId: string | null
    eventName: string | null
    eventDescription: string | null
    organizerName: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InboxMaxAggregateOutputType = {
    id: number | null
    eventId: string | null
    eventName: string | null
    eventDescription: string | null
    organizerName: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InboxCountAggregateOutputType = {
    id: number
    eventId: number
    eventName: number
    eventDescription: number
    organizerName: number
    status: number
    createdAt: number
    _all: number
  }


  export type InboxAvgAggregateInputType = {
    id?: true
  }

  export type InboxSumAggregateInputType = {
    id?: true
  }

  export type InboxMinAggregateInputType = {
    id?: true
    eventId?: true
    eventName?: true
    eventDescription?: true
    organizerName?: true
    status?: true
    createdAt?: true
  }

  export type InboxMaxAggregateInputType = {
    id?: true
    eventId?: true
    eventName?: true
    eventDescription?: true
    organizerName?: true
    status?: true
    createdAt?: true
  }

  export type InboxCountAggregateInputType = {
    id?: true
    eventId?: true
    eventName?: true
    eventDescription?: true
    organizerName?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inbox to aggregate.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inboxes
    **/
    _count?: true | InboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboxMaxAggregateInputType
  }

  export type GetInboxAggregateType<T extends InboxAggregateArgs> = {
        [P in keyof T & keyof AggregateInbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInbox[P]>
      : GetScalarType<T[P], AggregateInbox[P]>
  }




  export type InboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboxWhereInput
    orderBy?: InboxOrderByWithAggregationInput | InboxOrderByWithAggregationInput[]
    by: InboxScalarFieldEnum[] | InboxScalarFieldEnum
    having?: InboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboxCountAggregateInputType | true
    _avg?: InboxAvgAggregateInputType
    _sum?: InboxSumAggregateInputType
    _min?: InboxMinAggregateInputType
    _max?: InboxMaxAggregateInputType
  }

  export type InboxGroupByOutputType = {
    id: number
    eventId: string
    eventName: string
    eventDescription: string
    organizerName: string
    status: string
    createdAt: Date
    _count: InboxCountAggregateOutputType | null
    _avg: InboxAvgAggregateOutputType | null
    _sum: InboxSumAggregateOutputType | null
    _min: InboxMinAggregateOutputType | null
    _max: InboxMaxAggregateOutputType | null
  }

  type GetInboxGroupByPayload<T extends InboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboxGroupByOutputType[P]>
            : GetScalarType<T[P], InboxGroupByOutputType[P]>
        }
      >
    >


  export type InboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inbox"]>

  export type InboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inbox"]>

  export type InboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inbox"]>

  export type InboxSelectScalar = {
    id?: boolean
    eventId?: boolean
    eventName?: boolean
    eventDescription?: boolean
    organizerName?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "eventName" | "eventDescription" | "organizerName" | "status" | "createdAt", ExtArgs["result"]["inbox"]>

  export type $InboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: string
      eventName: string
      eventDescription: string
      organizerName: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["inbox"]>
    composites: {}
  }

  type InboxGetPayload<S extends boolean | null | undefined | InboxDefaultArgs> = $Result.GetResult<Prisma.$InboxPayload, S>

  type InboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboxCountAggregateInputType | true
    }

  export interface InboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inbox'], meta: { name: 'Inbox' } }
    /**
     * Find zero or one Inbox that matches the filter.
     * @param {InboxFindUniqueArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboxFindUniqueArgs>(args: SelectSubset<T, InboxFindUniqueArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboxFindUniqueOrThrowArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboxFindUniqueOrThrowArgs>(args: SelectSubset<T, InboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxFindFirstArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboxFindFirstArgs>(args?: SelectSubset<T, InboxFindFirstArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxFindFirstOrThrowArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboxFindFirstOrThrowArgs>(args?: SelectSubset<T, InboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inboxes
     * const inboxes = await prisma.inbox.findMany()
     * 
     * // Get first 10 Inboxes
     * const inboxes = await prisma.inbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboxWithIdOnly = await prisma.inbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboxFindManyArgs>(args?: SelectSubset<T, InboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inbox.
     * @param {InboxCreateArgs} args - Arguments to create a Inbox.
     * @example
     * // Create one Inbox
     * const Inbox = await prisma.inbox.create({
     *   data: {
     *     // ... data to create a Inbox
     *   }
     * })
     * 
     */
    create<T extends InboxCreateArgs>(args: SelectSubset<T, InboxCreateArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inboxes.
     * @param {InboxCreateManyArgs} args - Arguments to create many Inboxes.
     * @example
     * // Create many Inboxes
     * const inbox = await prisma.inbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboxCreateManyArgs>(args?: SelectSubset<T, InboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inboxes and returns the data saved in the database.
     * @param {InboxCreateManyAndReturnArgs} args - Arguments to create many Inboxes.
     * @example
     * // Create many Inboxes
     * const inbox = await prisma.inbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inboxes and only return the `id`
     * const inboxWithIdOnly = await prisma.inbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InboxCreateManyAndReturnArgs>(args?: SelectSubset<T, InboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inbox.
     * @param {InboxDeleteArgs} args - Arguments to delete one Inbox.
     * @example
     * // Delete one Inbox
     * const Inbox = await prisma.inbox.delete({
     *   where: {
     *     // ... filter to delete one Inbox
     *   }
     * })
     * 
     */
    delete<T extends InboxDeleteArgs>(args: SelectSubset<T, InboxDeleteArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inbox.
     * @param {InboxUpdateArgs} args - Arguments to update one Inbox.
     * @example
     * // Update one Inbox
     * const inbox = await prisma.inbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboxUpdateArgs>(args: SelectSubset<T, InboxUpdateArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inboxes.
     * @param {InboxDeleteManyArgs} args - Arguments to filter Inboxes to delete.
     * @example
     * // Delete a few Inboxes
     * const { count } = await prisma.inbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboxDeleteManyArgs>(args?: SelectSubset<T, InboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inboxes
     * const inbox = await prisma.inbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboxUpdateManyArgs>(args: SelectSubset<T, InboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inboxes and returns the data updated in the database.
     * @param {InboxUpdateManyAndReturnArgs} args - Arguments to update many Inboxes.
     * @example
     * // Update many Inboxes
     * const inbox = await prisma.inbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inboxes and only return the `id`
     * const inboxWithIdOnly = await prisma.inbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InboxUpdateManyAndReturnArgs>(args: SelectSubset<T, InboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inbox.
     * @param {InboxUpsertArgs} args - Arguments to update or create a Inbox.
     * @example
     * // Update or create a Inbox
     * const inbox = await prisma.inbox.upsert({
     *   create: {
     *     // ... data to create a Inbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inbox we want to update
     *   }
     * })
     */
    upsert<T extends InboxUpsertArgs>(args: SelectSubset<T, InboxUpsertArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxCountArgs} args - Arguments to filter Inboxes to count.
     * @example
     * // Count the number of Inboxes
     * const count = await prisma.inbox.count({
     *   where: {
     *     // ... the filter for the Inboxes we want to count
     *   }
     * })
    **/
    count<T extends InboxCountArgs>(
      args?: Subset<T, InboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InboxAggregateArgs>(args: Subset<T, InboxAggregateArgs>): Prisma.PrismaPromise<GetInboxAggregateType<T>>

    /**
     * Group by Inbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboxGroupByArgs['orderBy'] }
        : { orderBy?: InboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inbox model
   */
  readonly fields: InboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inbox model
   */
  interface InboxFieldRefs {
    readonly id: FieldRef<"Inbox", 'Int'>
    readonly eventId: FieldRef<"Inbox", 'String'>
    readonly eventName: FieldRef<"Inbox", 'String'>
    readonly eventDescription: FieldRef<"Inbox", 'String'>
    readonly organizerName: FieldRef<"Inbox", 'String'>
    readonly status: FieldRef<"Inbox", 'String'>
    readonly createdAt: FieldRef<"Inbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inbox findUnique
   */
  export type InboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox findUniqueOrThrow
   */
  export type InboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox findFirst
   */
  export type InboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inboxes.
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inboxes.
     */
    distinct?: InboxScalarFieldEnum | InboxScalarFieldEnum[]
  }

  /**
   * Inbox findFirstOrThrow
   */
  export type InboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inboxes.
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inboxes.
     */
    distinct?: InboxScalarFieldEnum | InboxScalarFieldEnum[]
  }

  /**
   * Inbox findMany
   */
  export type InboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Filter, which Inboxes to fetch.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inboxes.
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    distinct?: InboxScalarFieldEnum | InboxScalarFieldEnum[]
  }

  /**
   * Inbox create
   */
  export type InboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * The data needed to create a Inbox.
     */
    data: XOR<InboxCreateInput, InboxUncheckedCreateInput>
  }

  /**
   * Inbox createMany
   */
  export type InboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inboxes.
     */
    data: InboxCreateManyInput | InboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inbox createManyAndReturn
   */
  export type InboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * The data used to create many Inboxes.
     */
    data: InboxCreateManyInput | InboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inbox update
   */
  export type InboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * The data needed to update a Inbox.
     */
    data: XOR<InboxUpdateInput, InboxUncheckedUpdateInput>
    /**
     * Choose, which Inbox to update.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox updateMany
   */
  export type InboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inboxes.
     */
    data: XOR<InboxUpdateManyMutationInput, InboxUncheckedUpdateManyInput>
    /**
     * Filter which Inboxes to update
     */
    where?: InboxWhereInput
    /**
     * Limit how many Inboxes to update.
     */
    limit?: number
  }

  /**
   * Inbox updateManyAndReturn
   */
  export type InboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * The data used to update Inboxes.
     */
    data: XOR<InboxUpdateManyMutationInput, InboxUncheckedUpdateManyInput>
    /**
     * Filter which Inboxes to update
     */
    where?: InboxWhereInput
    /**
     * Limit how many Inboxes to update.
     */
    limit?: number
  }

  /**
   * Inbox upsert
   */
  export type InboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * The filter to search for the Inbox to update in case it exists.
     */
    where: InboxWhereUniqueInput
    /**
     * In case the Inbox found by the `where` argument doesn't exist, create a new Inbox with this data.
     */
    create: XOR<InboxCreateInput, InboxUncheckedCreateInput>
    /**
     * In case the Inbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboxUpdateInput, InboxUncheckedUpdateInput>
  }

  /**
   * Inbox delete
   */
  export type InboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Filter which Inbox to delete.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox deleteMany
   */
  export type InboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inboxes to delete
     */
    where?: InboxWhereInput
    /**
     * Limit how many Inboxes to delete.
     */
    limit?: number
  }

  /**
   * Inbox without action
   */
  export type InboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    eventName: 'eventName',
    eventDescription: 'eventDescription',
    organizerName: 'organizerName',
    email: 'email',
    contact: 'contact',
    eventLocation: 'eventLocation',
    volunteerCapacity: 'volunteerCapacity',
    registrationLink: 'registrationLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    SkillsRequired: 'SkillsRequired',
    InternshipRoles: 'InternshipRoles'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const VolunteerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    salutation: 'salutation',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    homeStreet: 'homeStreet',
    homeCity: 'homeCity',
    homeState: 'homeState',
    postalCode: 'postalCode',
    homeCountry: 'homeCountry',
    mobilePhone: 'mobilePhone',
    employer: 'employer',
    educationalLevel: 'educationalLevel',
    maritalStatus: 'maritalStatus',
    employmentStatus: 'employmentStatus',
    willingTravelDistance: 'willingTravelDistance',
    helpInDisaster: 'helpInDisaster',
    hasDisability: 'hasDisability',
    skills: 'skills',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VolunteerScalarFieldEnum = (typeof VolunteerScalarFieldEnum)[keyof typeof VolunteerScalarFieldEnum]


  export const CSR_Main_TableScalarFieldEnum: {
    EventID: 'EventID',
    ActivityName: 'ActivityName',
    LocationVillageCity: 'LocationVillageCity',
    District: 'District',
    State: 'State',
    DateOfImplementation: 'DateOfImplementation',
    NumberOfVolunteers: 'NumberOfVolunteers',
    CorporateSponsor: 'CorporateSponsor',
    NGOPartner: 'NGOPartner',
    VolunteerHoursLogged: 'VolunteerHoursLogged',
    GenderDistribution: 'GenderDistribution',
    CommunityBeneficiaries: 'CommunityBeneficiaries',
    CSRBudgetAllocated: 'CSRBudgetAllocated',
    CSRBudgetUtilized: 'CSRBudgetUtilized',
    VolunteerFeedbackScore: 'VolunteerFeedbackScore',
    CommunitySatisfactionScore: 'CommunitySatisfactionScore',
    RemarksChallenges: 'RemarksChallenges'
  };

  export type CSR_Main_TableScalarFieldEnum = (typeof CSR_Main_TableScalarFieldEnum)[keyof typeof CSR_Main_TableScalarFieldEnum]


  export const VeltrixGlobalSolutionsScalarFieldEnum: {
    EventID: 'EventID',
    HouseholdsCovered: 'HouseholdsCovered',
    AwarenessKitsDistributed: 'AwarenessKitsDistributed',
    MockDrillsConducted: 'MockDrillsConducted',
    EarlyWarningSystemInstalled: 'EarlyWarningSystemInstalled',
    LocalAuthorityCollaboration: 'LocalAuthorityCollaboration'
  };

  export type VeltrixGlobalSolutionsScalarFieldEnum = (typeof VeltrixGlobalSolutionsScalarFieldEnum)[keyof typeof VeltrixGlobalSolutionsScalarFieldEnum]


  export const NoventraTechnologiesIncScalarFieldEnum: {
    EventID: 'EventID',
    AreaRestoredSqM: 'AreaRestoredSqM',
    NativeFloraPlanted: 'NativeFloraPlanted',
    WasteRemovedKg: 'WasteRemovedKg',
    BiodiversitySpeciesCount: 'BiodiversitySpeciesCount',
    WaterQualityImprovementScore: 'WaterQualityImprovementScore'
  };

  export type NoventraTechnologiesIncScalarFieldEnum = (typeof NoventraTechnologiesIncScalarFieldEnum)[keyof typeof NoventraTechnologiesIncScalarFieldEnum]


  export const AureviaInternationalHoldingsScalarFieldEnum: {
    EventID: 'EventID',
    TreesPlanted: 'TreesPlanted',
    SaplingSurvivalRatePercent: 'SaplingSurvivalRatePercent',
    SpeciesDiversityCount: 'SpeciesDiversityCount',
    GeoTaggingEnabled: 'GeoTaggingEnabled',
    PostPlantationCareProvided: 'PostPlantationCareProvided'
  };

  export type AureviaInternationalHoldingsScalarFieldEnum = (typeof AureviaInternationalHoldingsScalarFieldEnum)[keyof typeof AureviaInternationalHoldingsScalarFieldEnum]


  export const ZentaraDynamicsCorporationScalarFieldEnum: {
    EventID: 'EventID',
    TreesPlanted: 'TreesPlanted',
    SaplingSurvivalRatePercent: 'SaplingSurvivalRatePercent',
    SpeciesDiversityCount: 'SpeciesDiversityCount',
    GeoTaggingEnabled: 'GeoTaggingEnabled',
    PostPlantationCareProvided: 'PostPlantationCareProvided'
  };

  export type ZentaraDynamicsCorporationScalarFieldEnum = (typeof ZentaraDynamicsCorporationScalarFieldEnum)[keyof typeof ZentaraDynamicsCorporationScalarFieldEnum]


  export const TrionyxSystemsWorldwideScalarFieldEnum: {
    EventID: 'EventID',
    TankersSupplied: 'TankersSupplied',
    WaterDeliveredLiters: 'WaterDeliveredLiters',
    HouseholdsReached: 'HouseholdsReached',
    WaterDistributionPoints: 'WaterDistributionPoints',
    HygieneKitsDistributed: 'HygieneKitsDistributed'
  };

  export type TrionyxSystemsWorldwideScalarFieldEnum = (typeof TrionyxSystemsWorldwideScalarFieldEnum)[keyof typeof TrionyxSystemsWorldwideScalarFieldEnum]


  export const InboxScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    eventName: 'eventName',
    eventDescription: 'eventDescription',
    organizerName: 'organizerName',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InboxScalarFieldEnum = (typeof InboxScalarFieldEnum)[keyof typeof InboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    Event?: EventListRelationFilter
    Volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    Event?: EventOrderByRelationAggregateInput
    Volunteer?: VolunteerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    Event?: EventListRelationFilter
    Volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    eventDescription?: StringFilter<"Event"> | string
    organizerName?: StringFilter<"Event"> | string
    email?: StringFilter<"Event"> | string
    contact?: StringFilter<"Event"> | string
    eventLocation?: StringFilter<"Event"> | string
    volunteerCapacity?: IntFilter<"Event"> | number
    registrationLink?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    userId?: StringNullableFilter<"Event"> | string | null
    SkillsRequired?: StringNullableFilter<"Event"> | string | null
    InternshipRoles?: StringNullableFilter<"Event"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    eventLocation?: SortOrder
    volunteerCapacity?: SortOrder
    registrationLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    SkillsRequired?: SortOrderInput | SortOrder
    InternshipRoles?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    eventName?: StringFilter<"Event"> | string
    eventDescription?: StringFilter<"Event"> | string
    organizerName?: StringFilter<"Event"> | string
    email?: StringFilter<"Event"> | string
    contact?: StringFilter<"Event"> | string
    eventLocation?: StringFilter<"Event"> | string
    volunteerCapacity?: IntFilter<"Event"> | number
    registrationLink?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    userId?: StringNullableFilter<"Event"> | string | null
    SkillsRequired?: StringNullableFilter<"Event"> | string | null
    InternshipRoles?: StringNullableFilter<"Event"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    eventLocation?: SortOrder
    volunteerCapacity?: SortOrder
    registrationLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    SkillsRequired?: SortOrderInput | SortOrder
    InternshipRoles?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    eventName?: StringWithAggregatesFilter<"Event"> | string
    eventDescription?: StringWithAggregatesFilter<"Event"> | string
    organizerName?: StringWithAggregatesFilter<"Event"> | string
    email?: StringWithAggregatesFilter<"Event"> | string
    contact?: StringWithAggregatesFilter<"Event"> | string
    eventLocation?: StringWithAggregatesFilter<"Event"> | string
    volunteerCapacity?: IntWithAggregatesFilter<"Event"> | number
    registrationLink?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    SkillsRequired?: StringNullableWithAggregatesFilter<"Event"> | string | null
    InternshipRoles?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type VolunteerWhereInput = {
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    id?: StringFilter<"Volunteer"> | string
    userId?: StringFilter<"Volunteer"> | string
    salutation?: StringNullableFilter<"Volunteer"> | string | null
    firstName?: StringFilter<"Volunteer"> | string
    lastName?: StringFilter<"Volunteer"> | string
    dateOfBirth?: DateTimeNullableFilter<"Volunteer"> | Date | string | null
    gender?: StringNullableFilter<"Volunteer"> | string | null
    homeStreet?: StringNullableFilter<"Volunteer"> | string | null
    homeCity?: StringNullableFilter<"Volunteer"> | string | null
    homeState?: StringNullableFilter<"Volunteer"> | string | null
    postalCode?: StringNullableFilter<"Volunteer"> | string | null
    homeCountry?: StringNullableFilter<"Volunteer"> | string | null
    mobilePhone?: StringFilter<"Volunteer"> | string
    employer?: StringNullableFilter<"Volunteer"> | string | null
    educationalLevel?: StringNullableFilter<"Volunteer"> | string | null
    maritalStatus?: StringNullableFilter<"Volunteer"> | string | null
    employmentStatus?: StringNullableFilter<"Volunteer"> | string | null
    willingTravelDistance?: StringNullableFilter<"Volunteer"> | string | null
    helpInDisaster?: BoolFilter<"Volunteer"> | boolean
    hasDisability?: BoolFilter<"Volunteer"> | boolean
    skills?: StringNullableListFilter<"Volunteer">
    createdAt?: DateTimeFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeFilter<"Volunteer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VolunteerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    salutation?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    homeStreet?: SortOrderInput | SortOrder
    homeCity?: SortOrderInput | SortOrder
    homeState?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    homeCountry?: SortOrderInput | SortOrder
    mobilePhone?: SortOrder
    employer?: SortOrderInput | SortOrder
    educationalLevel?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    employmentStatus?: SortOrderInput | SortOrder
    willingTravelDistance?: SortOrderInput | SortOrder
    helpInDisaster?: SortOrder
    hasDisability?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VolunteerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    salutation?: StringNullableFilter<"Volunteer"> | string | null
    firstName?: StringFilter<"Volunteer"> | string
    lastName?: StringFilter<"Volunteer"> | string
    dateOfBirth?: DateTimeNullableFilter<"Volunteer"> | Date | string | null
    gender?: StringNullableFilter<"Volunteer"> | string | null
    homeStreet?: StringNullableFilter<"Volunteer"> | string | null
    homeCity?: StringNullableFilter<"Volunteer"> | string | null
    homeState?: StringNullableFilter<"Volunteer"> | string | null
    postalCode?: StringNullableFilter<"Volunteer"> | string | null
    homeCountry?: StringNullableFilter<"Volunteer"> | string | null
    mobilePhone?: StringFilter<"Volunteer"> | string
    employer?: StringNullableFilter<"Volunteer"> | string | null
    educationalLevel?: StringNullableFilter<"Volunteer"> | string | null
    maritalStatus?: StringNullableFilter<"Volunteer"> | string | null
    employmentStatus?: StringNullableFilter<"Volunteer"> | string | null
    willingTravelDistance?: StringNullableFilter<"Volunteer"> | string | null
    helpInDisaster?: BoolFilter<"Volunteer"> | boolean
    hasDisability?: BoolFilter<"Volunteer"> | boolean
    skills?: StringNullableListFilter<"Volunteer">
    createdAt?: DateTimeFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeFilter<"Volunteer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type VolunteerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    salutation?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    homeStreet?: SortOrderInput | SortOrder
    homeCity?: SortOrderInput | SortOrder
    homeState?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    homeCountry?: SortOrderInput | SortOrder
    mobilePhone?: SortOrder
    employer?: SortOrderInput | SortOrder
    educationalLevel?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    employmentStatus?: SortOrderInput | SortOrder
    willingTravelDistance?: SortOrderInput | SortOrder
    helpInDisaster?: SortOrder
    hasDisability?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VolunteerCountOrderByAggregateInput
    _max?: VolunteerMaxOrderByAggregateInput
    _min?: VolunteerMinOrderByAggregateInput
  }

  export type VolunteerScalarWhereWithAggregatesInput = {
    AND?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    OR?: VolunteerScalarWhereWithAggregatesInput[]
    NOT?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Volunteer"> | string
    userId?: StringWithAggregatesFilter<"Volunteer"> | string
    salutation?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    firstName?: StringWithAggregatesFilter<"Volunteer"> | string
    lastName?: StringWithAggregatesFilter<"Volunteer"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Volunteer"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    homeStreet?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    homeCity?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    homeState?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    homeCountry?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    mobilePhone?: StringWithAggregatesFilter<"Volunteer"> | string
    employer?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    educationalLevel?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    maritalStatus?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    employmentStatus?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    willingTravelDistance?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    helpInDisaster?: BoolWithAggregatesFilter<"Volunteer"> | boolean
    hasDisability?: BoolWithAggregatesFilter<"Volunteer"> | boolean
    skills?: StringNullableListFilter<"Volunteer">
    createdAt?: DateTimeWithAggregatesFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Volunteer"> | Date | string
  }

  export type CSR_Main_TableWhereInput = {
    AND?: CSR_Main_TableWhereInput | CSR_Main_TableWhereInput[]
    OR?: CSR_Main_TableWhereInput[]
    NOT?: CSR_Main_TableWhereInput | CSR_Main_TableWhereInput[]
    EventID?: StringFilter<"CSR_Main_Table"> | string
    ActivityName?: StringFilter<"CSR_Main_Table"> | string
    LocationVillageCity?: StringFilter<"CSR_Main_Table"> | string
    District?: StringFilter<"CSR_Main_Table"> | string
    State?: StringFilter<"CSR_Main_Table"> | string
    DateOfImplementation?: DateTimeFilter<"CSR_Main_Table"> | Date | string
    NumberOfVolunteers?: IntFilter<"CSR_Main_Table"> | number
    CorporateSponsor?: StringFilter<"CSR_Main_Table"> | string
    NGOPartner?: StringFilter<"CSR_Main_Table"> | string
    VolunteerHoursLogged?: DecimalFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    GenderDistribution?: StringFilter<"CSR_Main_Table"> | string
    CommunityBeneficiaries?: IntFilter<"CSR_Main_Table"> | number
    CSRBudgetAllocated?: DecimalFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized?: DecimalFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore?: IntFilter<"CSR_Main_Table"> | number
    CommunitySatisfactionScore?: IntFilter<"CSR_Main_Table"> | number
    RemarksChallenges?: StringFilter<"CSR_Main_Table"> | string
  }

  export type CSR_Main_TableOrderByWithRelationInput = {
    EventID?: SortOrder
    ActivityName?: SortOrder
    LocationVillageCity?: SortOrder
    District?: SortOrder
    State?: SortOrder
    DateOfImplementation?: SortOrder
    NumberOfVolunteers?: SortOrder
    CorporateSponsor?: SortOrder
    NGOPartner?: SortOrder
    VolunteerHoursLogged?: SortOrder
    GenderDistribution?: SortOrder
    CommunityBeneficiaries?: SortOrder
    CSRBudgetAllocated?: SortOrder
    CSRBudgetUtilized?: SortOrder
    VolunteerFeedbackScore?: SortOrder
    CommunitySatisfactionScore?: SortOrder
    RemarksChallenges?: SortOrder
  }

  export type CSR_Main_TableWhereUniqueInput = Prisma.AtLeast<{
    EventID?: string
    AND?: CSR_Main_TableWhereInput | CSR_Main_TableWhereInput[]
    OR?: CSR_Main_TableWhereInput[]
    NOT?: CSR_Main_TableWhereInput | CSR_Main_TableWhereInput[]
    ActivityName?: StringFilter<"CSR_Main_Table"> | string
    LocationVillageCity?: StringFilter<"CSR_Main_Table"> | string
    District?: StringFilter<"CSR_Main_Table"> | string
    State?: StringFilter<"CSR_Main_Table"> | string
    DateOfImplementation?: DateTimeFilter<"CSR_Main_Table"> | Date | string
    NumberOfVolunteers?: IntFilter<"CSR_Main_Table"> | number
    CorporateSponsor?: StringFilter<"CSR_Main_Table"> | string
    NGOPartner?: StringFilter<"CSR_Main_Table"> | string
    VolunteerHoursLogged?: DecimalFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    GenderDistribution?: StringFilter<"CSR_Main_Table"> | string
    CommunityBeneficiaries?: IntFilter<"CSR_Main_Table"> | number
    CSRBudgetAllocated?: DecimalFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized?: DecimalFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore?: IntFilter<"CSR_Main_Table"> | number
    CommunitySatisfactionScore?: IntFilter<"CSR_Main_Table"> | number
    RemarksChallenges?: StringFilter<"CSR_Main_Table"> | string
  }, "EventID">

  export type CSR_Main_TableOrderByWithAggregationInput = {
    EventID?: SortOrder
    ActivityName?: SortOrder
    LocationVillageCity?: SortOrder
    District?: SortOrder
    State?: SortOrder
    DateOfImplementation?: SortOrder
    NumberOfVolunteers?: SortOrder
    CorporateSponsor?: SortOrder
    NGOPartner?: SortOrder
    VolunteerHoursLogged?: SortOrder
    GenderDistribution?: SortOrder
    CommunityBeneficiaries?: SortOrder
    CSRBudgetAllocated?: SortOrder
    CSRBudgetUtilized?: SortOrder
    VolunteerFeedbackScore?: SortOrder
    CommunitySatisfactionScore?: SortOrder
    RemarksChallenges?: SortOrder
    _count?: CSR_Main_TableCountOrderByAggregateInput
    _avg?: CSR_Main_TableAvgOrderByAggregateInput
    _max?: CSR_Main_TableMaxOrderByAggregateInput
    _min?: CSR_Main_TableMinOrderByAggregateInput
    _sum?: CSR_Main_TableSumOrderByAggregateInput
  }

  export type CSR_Main_TableScalarWhereWithAggregatesInput = {
    AND?: CSR_Main_TableScalarWhereWithAggregatesInput | CSR_Main_TableScalarWhereWithAggregatesInput[]
    OR?: CSR_Main_TableScalarWhereWithAggregatesInput[]
    NOT?: CSR_Main_TableScalarWhereWithAggregatesInput | CSR_Main_TableScalarWhereWithAggregatesInput[]
    EventID?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    ActivityName?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    LocationVillageCity?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    District?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    State?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    DateOfImplementation?: DateTimeWithAggregatesFilter<"CSR_Main_Table"> | Date | string
    NumberOfVolunteers?: IntWithAggregatesFilter<"CSR_Main_Table"> | number
    CorporateSponsor?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    NGOPartner?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    VolunteerHoursLogged?: DecimalWithAggregatesFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    GenderDistribution?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
    CommunityBeneficiaries?: IntWithAggregatesFilter<"CSR_Main_Table"> | number
    CSRBudgetAllocated?: DecimalWithAggregatesFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized?: DecimalWithAggregatesFilter<"CSR_Main_Table"> | Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore?: IntWithAggregatesFilter<"CSR_Main_Table"> | number
    CommunitySatisfactionScore?: IntWithAggregatesFilter<"CSR_Main_Table"> | number
    RemarksChallenges?: StringWithAggregatesFilter<"CSR_Main_Table"> | string
  }

  export type VeltrixGlobalSolutionsWhereInput = {
    AND?: VeltrixGlobalSolutionsWhereInput | VeltrixGlobalSolutionsWhereInput[]
    OR?: VeltrixGlobalSolutionsWhereInput[]
    NOT?: VeltrixGlobalSolutionsWhereInput | VeltrixGlobalSolutionsWhereInput[]
    EventID?: StringFilter<"VeltrixGlobalSolutions"> | string
    HouseholdsCovered?: IntFilter<"VeltrixGlobalSolutions"> | number
    AwarenessKitsDistributed?: IntFilter<"VeltrixGlobalSolutions"> | number
    MockDrillsConducted?: IntFilter<"VeltrixGlobalSolutions"> | number
    EarlyWarningSystemInstalled?: StringFilter<"VeltrixGlobalSolutions"> | string
    LocalAuthorityCollaboration?: StringFilter<"VeltrixGlobalSolutions"> | string
  }

  export type VeltrixGlobalSolutionsOrderByWithRelationInput = {
    EventID?: SortOrder
    HouseholdsCovered?: SortOrder
    AwarenessKitsDistributed?: SortOrder
    MockDrillsConducted?: SortOrder
    EarlyWarningSystemInstalled?: SortOrder
    LocalAuthorityCollaboration?: SortOrder
  }

  export type VeltrixGlobalSolutionsWhereUniqueInput = Prisma.AtLeast<{
    EventID?: string
    AND?: VeltrixGlobalSolutionsWhereInput | VeltrixGlobalSolutionsWhereInput[]
    OR?: VeltrixGlobalSolutionsWhereInput[]
    NOT?: VeltrixGlobalSolutionsWhereInput | VeltrixGlobalSolutionsWhereInput[]
    HouseholdsCovered?: IntFilter<"VeltrixGlobalSolutions"> | number
    AwarenessKitsDistributed?: IntFilter<"VeltrixGlobalSolutions"> | number
    MockDrillsConducted?: IntFilter<"VeltrixGlobalSolutions"> | number
    EarlyWarningSystemInstalled?: StringFilter<"VeltrixGlobalSolutions"> | string
    LocalAuthorityCollaboration?: StringFilter<"VeltrixGlobalSolutions"> | string
  }, "EventID">

  export type VeltrixGlobalSolutionsOrderByWithAggregationInput = {
    EventID?: SortOrder
    HouseholdsCovered?: SortOrder
    AwarenessKitsDistributed?: SortOrder
    MockDrillsConducted?: SortOrder
    EarlyWarningSystemInstalled?: SortOrder
    LocalAuthorityCollaboration?: SortOrder
    _count?: VeltrixGlobalSolutionsCountOrderByAggregateInput
    _avg?: VeltrixGlobalSolutionsAvgOrderByAggregateInput
    _max?: VeltrixGlobalSolutionsMaxOrderByAggregateInput
    _min?: VeltrixGlobalSolutionsMinOrderByAggregateInput
    _sum?: VeltrixGlobalSolutionsSumOrderByAggregateInput
  }

  export type VeltrixGlobalSolutionsScalarWhereWithAggregatesInput = {
    AND?: VeltrixGlobalSolutionsScalarWhereWithAggregatesInput | VeltrixGlobalSolutionsScalarWhereWithAggregatesInput[]
    OR?: VeltrixGlobalSolutionsScalarWhereWithAggregatesInput[]
    NOT?: VeltrixGlobalSolutionsScalarWhereWithAggregatesInput | VeltrixGlobalSolutionsScalarWhereWithAggregatesInput[]
    EventID?: StringWithAggregatesFilter<"VeltrixGlobalSolutions"> | string
    HouseholdsCovered?: IntWithAggregatesFilter<"VeltrixGlobalSolutions"> | number
    AwarenessKitsDistributed?: IntWithAggregatesFilter<"VeltrixGlobalSolutions"> | number
    MockDrillsConducted?: IntWithAggregatesFilter<"VeltrixGlobalSolutions"> | number
    EarlyWarningSystemInstalled?: StringWithAggregatesFilter<"VeltrixGlobalSolutions"> | string
    LocalAuthorityCollaboration?: StringWithAggregatesFilter<"VeltrixGlobalSolutions"> | string
  }

  export type NoventraTechnologiesIncWhereInput = {
    AND?: NoventraTechnologiesIncWhereInput | NoventraTechnologiesIncWhereInput[]
    OR?: NoventraTechnologiesIncWhereInput[]
    NOT?: NoventraTechnologiesIncWhereInput | NoventraTechnologiesIncWhereInput[]
    EventID?: StringFilter<"NoventraTechnologiesInc"> | string
    AreaRestoredSqM?: DecimalFilter<"NoventraTechnologiesInc"> | Decimal | DecimalJsLike | number | string
    NativeFloraPlanted?: IntFilter<"NoventraTechnologiesInc"> | number
    WasteRemovedKg?: DecimalFilter<"NoventraTechnologiesInc"> | Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount?: IntFilter<"NoventraTechnologiesInc"> | number
    WaterQualityImprovementScore?: StringFilter<"NoventraTechnologiesInc"> | string
  }

  export type NoventraTechnologiesIncOrderByWithRelationInput = {
    EventID?: SortOrder
    AreaRestoredSqM?: SortOrder
    NativeFloraPlanted?: SortOrder
    WasteRemovedKg?: SortOrder
    BiodiversitySpeciesCount?: SortOrder
    WaterQualityImprovementScore?: SortOrder
  }

  export type NoventraTechnologiesIncWhereUniqueInput = Prisma.AtLeast<{
    EventID?: string
    AND?: NoventraTechnologiesIncWhereInput | NoventraTechnologiesIncWhereInput[]
    OR?: NoventraTechnologiesIncWhereInput[]
    NOT?: NoventraTechnologiesIncWhereInput | NoventraTechnologiesIncWhereInput[]
    AreaRestoredSqM?: DecimalFilter<"NoventraTechnologiesInc"> | Decimal | DecimalJsLike | number | string
    NativeFloraPlanted?: IntFilter<"NoventraTechnologiesInc"> | number
    WasteRemovedKg?: DecimalFilter<"NoventraTechnologiesInc"> | Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount?: IntFilter<"NoventraTechnologiesInc"> | number
    WaterQualityImprovementScore?: StringFilter<"NoventraTechnologiesInc"> | string
  }, "EventID">

  export type NoventraTechnologiesIncOrderByWithAggregationInput = {
    EventID?: SortOrder
    AreaRestoredSqM?: SortOrder
    NativeFloraPlanted?: SortOrder
    WasteRemovedKg?: SortOrder
    BiodiversitySpeciesCount?: SortOrder
    WaterQualityImprovementScore?: SortOrder
    _count?: NoventraTechnologiesIncCountOrderByAggregateInput
    _avg?: NoventraTechnologiesIncAvgOrderByAggregateInput
    _max?: NoventraTechnologiesIncMaxOrderByAggregateInput
    _min?: NoventraTechnologiesIncMinOrderByAggregateInput
    _sum?: NoventraTechnologiesIncSumOrderByAggregateInput
  }

  export type NoventraTechnologiesIncScalarWhereWithAggregatesInput = {
    AND?: NoventraTechnologiesIncScalarWhereWithAggregatesInput | NoventraTechnologiesIncScalarWhereWithAggregatesInput[]
    OR?: NoventraTechnologiesIncScalarWhereWithAggregatesInput[]
    NOT?: NoventraTechnologiesIncScalarWhereWithAggregatesInput | NoventraTechnologiesIncScalarWhereWithAggregatesInput[]
    EventID?: StringWithAggregatesFilter<"NoventraTechnologiesInc"> | string
    AreaRestoredSqM?: DecimalWithAggregatesFilter<"NoventraTechnologiesInc"> | Decimal | DecimalJsLike | number | string
    NativeFloraPlanted?: IntWithAggregatesFilter<"NoventraTechnologiesInc"> | number
    WasteRemovedKg?: DecimalWithAggregatesFilter<"NoventraTechnologiesInc"> | Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount?: IntWithAggregatesFilter<"NoventraTechnologiesInc"> | number
    WaterQualityImprovementScore?: StringWithAggregatesFilter<"NoventraTechnologiesInc"> | string
  }

  export type AureviaInternationalHoldingsWhereInput = {
    AND?: AureviaInternationalHoldingsWhereInput | AureviaInternationalHoldingsWhereInput[]
    OR?: AureviaInternationalHoldingsWhereInput[]
    NOT?: AureviaInternationalHoldingsWhereInput | AureviaInternationalHoldingsWhereInput[]
    EventID?: StringFilter<"AureviaInternationalHoldings"> | string
    TreesPlanted?: IntFilter<"AureviaInternationalHoldings"> | number
    SaplingSurvivalRatePercent?: DecimalFilter<"AureviaInternationalHoldings"> | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFilter<"AureviaInternationalHoldings"> | number
    GeoTaggingEnabled?: StringFilter<"AureviaInternationalHoldings"> | string
    PostPlantationCareProvided?: StringFilter<"AureviaInternationalHoldings"> | string
  }

  export type AureviaInternationalHoldingsOrderByWithRelationInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type AureviaInternationalHoldingsWhereUniqueInput = Prisma.AtLeast<{
    EventID?: string
    AND?: AureviaInternationalHoldingsWhereInput | AureviaInternationalHoldingsWhereInput[]
    OR?: AureviaInternationalHoldingsWhereInput[]
    NOT?: AureviaInternationalHoldingsWhereInput | AureviaInternationalHoldingsWhereInput[]
    TreesPlanted?: IntFilter<"AureviaInternationalHoldings"> | number
    SaplingSurvivalRatePercent?: DecimalFilter<"AureviaInternationalHoldings"> | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFilter<"AureviaInternationalHoldings"> | number
    GeoTaggingEnabled?: StringFilter<"AureviaInternationalHoldings"> | string
    PostPlantationCareProvided?: StringFilter<"AureviaInternationalHoldings"> | string
  }, "EventID">

  export type AureviaInternationalHoldingsOrderByWithAggregationInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
    _count?: AureviaInternationalHoldingsCountOrderByAggregateInput
    _avg?: AureviaInternationalHoldingsAvgOrderByAggregateInput
    _max?: AureviaInternationalHoldingsMaxOrderByAggregateInput
    _min?: AureviaInternationalHoldingsMinOrderByAggregateInput
    _sum?: AureviaInternationalHoldingsSumOrderByAggregateInput
  }

  export type AureviaInternationalHoldingsScalarWhereWithAggregatesInput = {
    AND?: AureviaInternationalHoldingsScalarWhereWithAggregatesInput | AureviaInternationalHoldingsScalarWhereWithAggregatesInput[]
    OR?: AureviaInternationalHoldingsScalarWhereWithAggregatesInput[]
    NOT?: AureviaInternationalHoldingsScalarWhereWithAggregatesInput | AureviaInternationalHoldingsScalarWhereWithAggregatesInput[]
    EventID?: StringWithAggregatesFilter<"AureviaInternationalHoldings"> | string
    TreesPlanted?: IntWithAggregatesFilter<"AureviaInternationalHoldings"> | number
    SaplingSurvivalRatePercent?: DecimalWithAggregatesFilter<"AureviaInternationalHoldings"> | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntWithAggregatesFilter<"AureviaInternationalHoldings"> | number
    GeoTaggingEnabled?: StringWithAggregatesFilter<"AureviaInternationalHoldings"> | string
    PostPlantationCareProvided?: StringWithAggregatesFilter<"AureviaInternationalHoldings"> | string
  }

  export type ZentaraDynamicsCorporationWhereInput = {
    AND?: ZentaraDynamicsCorporationWhereInput | ZentaraDynamicsCorporationWhereInput[]
    OR?: ZentaraDynamicsCorporationWhereInput[]
    NOT?: ZentaraDynamicsCorporationWhereInput | ZentaraDynamicsCorporationWhereInput[]
    EventID?: StringFilter<"ZentaraDynamicsCorporation"> | string
    TreesPlanted?: IntFilter<"ZentaraDynamicsCorporation"> | number
    SaplingSurvivalRatePercent?: DecimalFilter<"ZentaraDynamicsCorporation"> | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFilter<"ZentaraDynamicsCorporation"> | number
    GeoTaggingEnabled?: StringFilter<"ZentaraDynamicsCorporation"> | string
    PostPlantationCareProvided?: StringFilter<"ZentaraDynamicsCorporation"> | string
  }

  export type ZentaraDynamicsCorporationOrderByWithRelationInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type ZentaraDynamicsCorporationWhereUniqueInput = Prisma.AtLeast<{
    EventID?: string
    AND?: ZentaraDynamicsCorporationWhereInput | ZentaraDynamicsCorporationWhereInput[]
    OR?: ZentaraDynamicsCorporationWhereInput[]
    NOT?: ZentaraDynamicsCorporationWhereInput | ZentaraDynamicsCorporationWhereInput[]
    TreesPlanted?: IntFilter<"ZentaraDynamicsCorporation"> | number
    SaplingSurvivalRatePercent?: DecimalFilter<"ZentaraDynamicsCorporation"> | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFilter<"ZentaraDynamicsCorporation"> | number
    GeoTaggingEnabled?: StringFilter<"ZentaraDynamicsCorporation"> | string
    PostPlantationCareProvided?: StringFilter<"ZentaraDynamicsCorporation"> | string
  }, "EventID">

  export type ZentaraDynamicsCorporationOrderByWithAggregationInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
    _count?: ZentaraDynamicsCorporationCountOrderByAggregateInput
    _avg?: ZentaraDynamicsCorporationAvgOrderByAggregateInput
    _max?: ZentaraDynamicsCorporationMaxOrderByAggregateInput
    _min?: ZentaraDynamicsCorporationMinOrderByAggregateInput
    _sum?: ZentaraDynamicsCorporationSumOrderByAggregateInput
  }

  export type ZentaraDynamicsCorporationScalarWhereWithAggregatesInput = {
    AND?: ZentaraDynamicsCorporationScalarWhereWithAggregatesInput | ZentaraDynamicsCorporationScalarWhereWithAggregatesInput[]
    OR?: ZentaraDynamicsCorporationScalarWhereWithAggregatesInput[]
    NOT?: ZentaraDynamicsCorporationScalarWhereWithAggregatesInput | ZentaraDynamicsCorporationScalarWhereWithAggregatesInput[]
    EventID?: StringWithAggregatesFilter<"ZentaraDynamicsCorporation"> | string
    TreesPlanted?: IntWithAggregatesFilter<"ZentaraDynamicsCorporation"> | number
    SaplingSurvivalRatePercent?: DecimalWithAggregatesFilter<"ZentaraDynamicsCorporation"> | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntWithAggregatesFilter<"ZentaraDynamicsCorporation"> | number
    GeoTaggingEnabled?: StringWithAggregatesFilter<"ZentaraDynamicsCorporation"> | string
    PostPlantationCareProvided?: StringWithAggregatesFilter<"ZentaraDynamicsCorporation"> | string
  }

  export type TrionyxSystemsWorldwideWhereInput = {
    AND?: TrionyxSystemsWorldwideWhereInput | TrionyxSystemsWorldwideWhereInput[]
    OR?: TrionyxSystemsWorldwideWhereInput[]
    NOT?: TrionyxSystemsWorldwideWhereInput | TrionyxSystemsWorldwideWhereInput[]
    EventID?: StringFilter<"TrionyxSystemsWorldwide"> | string
    TankersSupplied?: IntFilter<"TrionyxSystemsWorldwide"> | number
    WaterDeliveredLiters?: IntFilter<"TrionyxSystemsWorldwide"> | number
    HouseholdsReached?: IntFilter<"TrionyxSystemsWorldwide"> | number
    WaterDistributionPoints?: IntFilter<"TrionyxSystemsWorldwide"> | number
    HygieneKitsDistributed?: IntFilter<"TrionyxSystemsWorldwide"> | number
  }

  export type TrionyxSystemsWorldwideOrderByWithRelationInput = {
    EventID?: SortOrder
    TankersSupplied?: SortOrder
    WaterDeliveredLiters?: SortOrder
    HouseholdsReached?: SortOrder
    WaterDistributionPoints?: SortOrder
    HygieneKitsDistributed?: SortOrder
  }

  export type TrionyxSystemsWorldwideWhereUniqueInput = Prisma.AtLeast<{
    EventID?: string
    AND?: TrionyxSystemsWorldwideWhereInput | TrionyxSystemsWorldwideWhereInput[]
    OR?: TrionyxSystemsWorldwideWhereInput[]
    NOT?: TrionyxSystemsWorldwideWhereInput | TrionyxSystemsWorldwideWhereInput[]
    TankersSupplied?: IntFilter<"TrionyxSystemsWorldwide"> | number
    WaterDeliveredLiters?: IntFilter<"TrionyxSystemsWorldwide"> | number
    HouseholdsReached?: IntFilter<"TrionyxSystemsWorldwide"> | number
    WaterDistributionPoints?: IntFilter<"TrionyxSystemsWorldwide"> | number
    HygieneKitsDistributed?: IntFilter<"TrionyxSystemsWorldwide"> | number
  }, "EventID">

  export type TrionyxSystemsWorldwideOrderByWithAggregationInput = {
    EventID?: SortOrder
    TankersSupplied?: SortOrder
    WaterDeliveredLiters?: SortOrder
    HouseholdsReached?: SortOrder
    WaterDistributionPoints?: SortOrder
    HygieneKitsDistributed?: SortOrder
    _count?: TrionyxSystemsWorldwideCountOrderByAggregateInput
    _avg?: TrionyxSystemsWorldwideAvgOrderByAggregateInput
    _max?: TrionyxSystemsWorldwideMaxOrderByAggregateInput
    _min?: TrionyxSystemsWorldwideMinOrderByAggregateInput
    _sum?: TrionyxSystemsWorldwideSumOrderByAggregateInput
  }

  export type TrionyxSystemsWorldwideScalarWhereWithAggregatesInput = {
    AND?: TrionyxSystemsWorldwideScalarWhereWithAggregatesInput | TrionyxSystemsWorldwideScalarWhereWithAggregatesInput[]
    OR?: TrionyxSystemsWorldwideScalarWhereWithAggregatesInput[]
    NOT?: TrionyxSystemsWorldwideScalarWhereWithAggregatesInput | TrionyxSystemsWorldwideScalarWhereWithAggregatesInput[]
    EventID?: StringWithAggregatesFilter<"TrionyxSystemsWorldwide"> | string
    TankersSupplied?: IntWithAggregatesFilter<"TrionyxSystemsWorldwide"> | number
    WaterDeliveredLiters?: IntWithAggregatesFilter<"TrionyxSystemsWorldwide"> | number
    HouseholdsReached?: IntWithAggregatesFilter<"TrionyxSystemsWorldwide"> | number
    WaterDistributionPoints?: IntWithAggregatesFilter<"TrionyxSystemsWorldwide"> | number
    HygieneKitsDistributed?: IntWithAggregatesFilter<"TrionyxSystemsWorldwide"> | number
  }

  export type InboxWhereInput = {
    AND?: InboxWhereInput | InboxWhereInput[]
    OR?: InboxWhereInput[]
    NOT?: InboxWhereInput | InboxWhereInput[]
    id?: IntFilter<"Inbox"> | number
    eventId?: StringFilter<"Inbox"> | string
    eventName?: StringFilter<"Inbox"> | string
    eventDescription?: StringFilter<"Inbox"> | string
    organizerName?: StringFilter<"Inbox"> | string
    status?: StringFilter<"Inbox"> | string
    createdAt?: DateTimeFilter<"Inbox"> | Date | string
  }

  export type InboxOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InboxWhereInput | InboxWhereInput[]
    OR?: InboxWhereInput[]
    NOT?: InboxWhereInput | InboxWhereInput[]
    eventId?: StringFilter<"Inbox"> | string
    eventName?: StringFilter<"Inbox"> | string
    eventDescription?: StringFilter<"Inbox"> | string
    organizerName?: StringFilter<"Inbox"> | string
    status?: StringFilter<"Inbox"> | string
    createdAt?: DateTimeFilter<"Inbox"> | Date | string
  }, "id">

  export type InboxOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InboxCountOrderByAggregateInput
    _avg?: InboxAvgOrderByAggregateInput
    _max?: InboxMaxOrderByAggregateInput
    _min?: InboxMinOrderByAggregateInput
    _sum?: InboxSumOrderByAggregateInput
  }

  export type InboxScalarWhereWithAggregatesInput = {
    AND?: InboxScalarWhereWithAggregatesInput | InboxScalarWhereWithAggregatesInput[]
    OR?: InboxScalarWhereWithAggregatesInput[]
    NOT?: InboxScalarWhereWithAggregatesInput | InboxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inbox"> | number
    eventId?: StringWithAggregatesFilter<"Inbox"> | string
    eventName?: StringWithAggregatesFilter<"Inbox"> | string
    eventDescription?: StringWithAggregatesFilter<"Inbox"> | string
    organizerName?: StringWithAggregatesFilter<"Inbox"> | string
    status?: StringWithAggregatesFilter<"Inbox"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inbox"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    role?: $Enums.Role
    Event?: EventCreateNestedManyWithoutUserInput
    Volunteer?: VolunteerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    role?: $Enums.Role
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Event?: EventUpdateManyWithoutUserNestedInput
    Volunteer?: VolunteerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
    Volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EventCreateInput = {
    id?: string
    eventName: string
    eventDescription: string
    organizerName: string
    email: string
    contact: string
    eventLocation: string
    volunteerCapacity: number
    registrationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SkillsRequired?: string | null
    InternshipRoles?: string | null
    User?: UserCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    eventName: string
    eventDescription: string
    organizerName: string
    email: string
    contact: string
    eventLocation: string
    volunteerCapacity: number
    registrationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    SkillsRequired?: string | null
    InternshipRoles?: string | null
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    volunteerCapacity?: IntFieldUpdateOperationsInput | number
    registrationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SkillsRequired?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRoles?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    volunteerCapacity?: IntFieldUpdateOperationsInput | number
    registrationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    SkillsRequired?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRoles?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateManyInput = {
    id?: string
    eventName: string
    eventDescription: string
    organizerName: string
    email: string
    contact: string
    eventLocation: string
    volunteerCapacity: number
    registrationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    SkillsRequired?: string | null
    InternshipRoles?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    volunteerCapacity?: IntFieldUpdateOperationsInput | number
    registrationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SkillsRequired?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRoles?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    volunteerCapacity?: IntFieldUpdateOperationsInput | number
    registrationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    SkillsRequired?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRoles?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolunteerCreateInput = {
    id?: string
    salutation?: string | null
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    homeStreet?: string | null
    homeCity?: string | null
    homeState?: string | null
    postalCode?: string | null
    homeCountry?: string | null
    mobilePhone: string
    employer?: string | null
    educationalLevel?: string | null
    maritalStatus?: string | null
    employmentStatus?: string | null
    willingTravelDistance?: string | null
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: VolunteerCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateInput = {
    id?: string
    userId: string
    salutation?: string | null
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    homeStreet?: string | null
    homeCity?: string | null
    homeState?: string | null
    postalCode?: string | null
    homeCountry?: string | null
    mobilePhone: string
    employer?: string | null
    educationalLevel?: string | null
    maritalStatus?: string | null
    employmentStatus?: string | null
    willingTravelDistance?: string | null
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: VolunteerCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    homeStreet?: NullableStringFieldUpdateOperationsInput | string | null
    homeCity?: NullableStringFieldUpdateOperationsInput | string | null
    homeState?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    homeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: StringFieldUpdateOperationsInput | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    educationalLevel?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    willingTravelDistance?: NullableStringFieldUpdateOperationsInput | string | null
    helpInDisaster?: BoolFieldUpdateOperationsInput | boolean
    hasDisability?: BoolFieldUpdateOperationsInput | boolean
    skills?: VolunteerUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    homeStreet?: NullableStringFieldUpdateOperationsInput | string | null
    homeCity?: NullableStringFieldUpdateOperationsInput | string | null
    homeState?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    homeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: StringFieldUpdateOperationsInput | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    educationalLevel?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    willingTravelDistance?: NullableStringFieldUpdateOperationsInput | string | null
    helpInDisaster?: BoolFieldUpdateOperationsInput | boolean
    hasDisability?: BoolFieldUpdateOperationsInput | boolean
    skills?: VolunteerUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerCreateManyInput = {
    id?: string
    userId: string
    salutation?: string | null
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    homeStreet?: string | null
    homeCity?: string | null
    homeState?: string | null
    postalCode?: string | null
    homeCountry?: string | null
    mobilePhone: string
    employer?: string | null
    educationalLevel?: string | null
    maritalStatus?: string | null
    employmentStatus?: string | null
    willingTravelDistance?: string | null
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: VolunteerCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    homeStreet?: NullableStringFieldUpdateOperationsInput | string | null
    homeCity?: NullableStringFieldUpdateOperationsInput | string | null
    homeState?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    homeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: StringFieldUpdateOperationsInput | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    educationalLevel?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    willingTravelDistance?: NullableStringFieldUpdateOperationsInput | string | null
    helpInDisaster?: BoolFieldUpdateOperationsInput | boolean
    hasDisability?: BoolFieldUpdateOperationsInput | boolean
    skills?: VolunteerUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    homeStreet?: NullableStringFieldUpdateOperationsInput | string | null
    homeCity?: NullableStringFieldUpdateOperationsInput | string | null
    homeState?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    homeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: StringFieldUpdateOperationsInput | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    educationalLevel?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    willingTravelDistance?: NullableStringFieldUpdateOperationsInput | string | null
    helpInDisaster?: BoolFieldUpdateOperationsInput | boolean
    hasDisability?: BoolFieldUpdateOperationsInput | boolean
    skills?: VolunteerUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CSR_Main_TableCreateInput = {
    EventID: string
    ActivityName: string
    LocationVillageCity: string
    District: string
    State: string
    DateOfImplementation: Date | string
    NumberOfVolunteers: number
    CorporateSponsor: string
    NGOPartner: string
    VolunteerHoursLogged: Decimal | DecimalJsLike | number | string
    GenderDistribution: string
    CommunityBeneficiaries: number
    CSRBudgetAllocated: Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized: Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore: number
    CommunitySatisfactionScore: number
    RemarksChallenges: string
  }

  export type CSR_Main_TableUncheckedCreateInput = {
    EventID: string
    ActivityName: string
    LocationVillageCity: string
    District: string
    State: string
    DateOfImplementation: Date | string
    NumberOfVolunteers: number
    CorporateSponsor: string
    NGOPartner: string
    VolunteerHoursLogged: Decimal | DecimalJsLike | number | string
    GenderDistribution: string
    CommunityBeneficiaries: number
    CSRBudgetAllocated: Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized: Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore: number
    CommunitySatisfactionScore: number
    RemarksChallenges: string
  }

  export type CSR_Main_TableUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    ActivityName?: StringFieldUpdateOperationsInput | string
    LocationVillageCity?: StringFieldUpdateOperationsInput | string
    District?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    DateOfImplementation?: DateTimeFieldUpdateOperationsInput | Date | string
    NumberOfVolunteers?: IntFieldUpdateOperationsInput | number
    CorporateSponsor?: StringFieldUpdateOperationsInput | string
    NGOPartner?: StringFieldUpdateOperationsInput | string
    VolunteerHoursLogged?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GenderDistribution?: StringFieldUpdateOperationsInput | string
    CommunityBeneficiaries?: IntFieldUpdateOperationsInput | number
    CSRBudgetAllocated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore?: IntFieldUpdateOperationsInput | number
    CommunitySatisfactionScore?: IntFieldUpdateOperationsInput | number
    RemarksChallenges?: StringFieldUpdateOperationsInput | string
  }

  export type CSR_Main_TableUncheckedUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    ActivityName?: StringFieldUpdateOperationsInput | string
    LocationVillageCity?: StringFieldUpdateOperationsInput | string
    District?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    DateOfImplementation?: DateTimeFieldUpdateOperationsInput | Date | string
    NumberOfVolunteers?: IntFieldUpdateOperationsInput | number
    CorporateSponsor?: StringFieldUpdateOperationsInput | string
    NGOPartner?: StringFieldUpdateOperationsInput | string
    VolunteerHoursLogged?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GenderDistribution?: StringFieldUpdateOperationsInput | string
    CommunityBeneficiaries?: IntFieldUpdateOperationsInput | number
    CSRBudgetAllocated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore?: IntFieldUpdateOperationsInput | number
    CommunitySatisfactionScore?: IntFieldUpdateOperationsInput | number
    RemarksChallenges?: StringFieldUpdateOperationsInput | string
  }

  export type CSR_Main_TableCreateManyInput = {
    EventID: string
    ActivityName: string
    LocationVillageCity: string
    District: string
    State: string
    DateOfImplementation: Date | string
    NumberOfVolunteers: number
    CorporateSponsor: string
    NGOPartner: string
    VolunteerHoursLogged: Decimal | DecimalJsLike | number | string
    GenderDistribution: string
    CommunityBeneficiaries: number
    CSRBudgetAllocated: Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized: Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore: number
    CommunitySatisfactionScore: number
    RemarksChallenges: string
  }

  export type CSR_Main_TableUpdateManyMutationInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    ActivityName?: StringFieldUpdateOperationsInput | string
    LocationVillageCity?: StringFieldUpdateOperationsInput | string
    District?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    DateOfImplementation?: DateTimeFieldUpdateOperationsInput | Date | string
    NumberOfVolunteers?: IntFieldUpdateOperationsInput | number
    CorporateSponsor?: StringFieldUpdateOperationsInput | string
    NGOPartner?: StringFieldUpdateOperationsInput | string
    VolunteerHoursLogged?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GenderDistribution?: StringFieldUpdateOperationsInput | string
    CommunityBeneficiaries?: IntFieldUpdateOperationsInput | number
    CSRBudgetAllocated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore?: IntFieldUpdateOperationsInput | number
    CommunitySatisfactionScore?: IntFieldUpdateOperationsInput | number
    RemarksChallenges?: StringFieldUpdateOperationsInput | string
  }

  export type CSR_Main_TableUncheckedUpdateManyInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    ActivityName?: StringFieldUpdateOperationsInput | string
    LocationVillageCity?: StringFieldUpdateOperationsInput | string
    District?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    DateOfImplementation?: DateTimeFieldUpdateOperationsInput | Date | string
    NumberOfVolunteers?: IntFieldUpdateOperationsInput | number
    CorporateSponsor?: StringFieldUpdateOperationsInput | string
    NGOPartner?: StringFieldUpdateOperationsInput | string
    VolunteerHoursLogged?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GenderDistribution?: StringFieldUpdateOperationsInput | string
    CommunityBeneficiaries?: IntFieldUpdateOperationsInput | number
    CSRBudgetAllocated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CSRBudgetUtilized?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    VolunteerFeedbackScore?: IntFieldUpdateOperationsInput | number
    CommunitySatisfactionScore?: IntFieldUpdateOperationsInput | number
    RemarksChallenges?: StringFieldUpdateOperationsInput | string
  }

  export type VeltrixGlobalSolutionsCreateInput = {
    EventID: string
    HouseholdsCovered: number
    AwarenessKitsDistributed: number
    MockDrillsConducted: number
    EarlyWarningSystemInstalled: string
    LocalAuthorityCollaboration: string
  }

  export type VeltrixGlobalSolutionsUncheckedCreateInput = {
    EventID: string
    HouseholdsCovered: number
    AwarenessKitsDistributed: number
    MockDrillsConducted: number
    EarlyWarningSystemInstalled: string
    LocalAuthorityCollaboration: string
  }

  export type VeltrixGlobalSolutionsUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    HouseholdsCovered?: IntFieldUpdateOperationsInput | number
    AwarenessKitsDistributed?: IntFieldUpdateOperationsInput | number
    MockDrillsConducted?: IntFieldUpdateOperationsInput | number
    EarlyWarningSystemInstalled?: StringFieldUpdateOperationsInput | string
    LocalAuthorityCollaboration?: StringFieldUpdateOperationsInput | string
  }

  export type VeltrixGlobalSolutionsUncheckedUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    HouseholdsCovered?: IntFieldUpdateOperationsInput | number
    AwarenessKitsDistributed?: IntFieldUpdateOperationsInput | number
    MockDrillsConducted?: IntFieldUpdateOperationsInput | number
    EarlyWarningSystemInstalled?: StringFieldUpdateOperationsInput | string
    LocalAuthorityCollaboration?: StringFieldUpdateOperationsInput | string
  }

  export type VeltrixGlobalSolutionsCreateManyInput = {
    EventID: string
    HouseholdsCovered: number
    AwarenessKitsDistributed: number
    MockDrillsConducted: number
    EarlyWarningSystemInstalled: string
    LocalAuthorityCollaboration: string
  }

  export type VeltrixGlobalSolutionsUpdateManyMutationInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    HouseholdsCovered?: IntFieldUpdateOperationsInput | number
    AwarenessKitsDistributed?: IntFieldUpdateOperationsInput | number
    MockDrillsConducted?: IntFieldUpdateOperationsInput | number
    EarlyWarningSystemInstalled?: StringFieldUpdateOperationsInput | string
    LocalAuthorityCollaboration?: StringFieldUpdateOperationsInput | string
  }

  export type VeltrixGlobalSolutionsUncheckedUpdateManyInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    HouseholdsCovered?: IntFieldUpdateOperationsInput | number
    AwarenessKitsDistributed?: IntFieldUpdateOperationsInput | number
    MockDrillsConducted?: IntFieldUpdateOperationsInput | number
    EarlyWarningSystemInstalled?: StringFieldUpdateOperationsInput | string
    LocalAuthorityCollaboration?: StringFieldUpdateOperationsInput | string
  }

  export type NoventraTechnologiesIncCreateInput = {
    EventID: string
    AreaRestoredSqM: Decimal | DecimalJsLike | number | string
    NativeFloraPlanted: number
    WasteRemovedKg: Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount: number
    WaterQualityImprovementScore: string
  }

  export type NoventraTechnologiesIncUncheckedCreateInput = {
    EventID: string
    AreaRestoredSqM: Decimal | DecimalJsLike | number | string
    NativeFloraPlanted: number
    WasteRemovedKg: Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount: number
    WaterQualityImprovementScore: string
  }

  export type NoventraTechnologiesIncUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    AreaRestoredSqM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NativeFloraPlanted?: IntFieldUpdateOperationsInput | number
    WasteRemovedKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount?: IntFieldUpdateOperationsInput | number
    WaterQualityImprovementScore?: StringFieldUpdateOperationsInput | string
  }

  export type NoventraTechnologiesIncUncheckedUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    AreaRestoredSqM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NativeFloraPlanted?: IntFieldUpdateOperationsInput | number
    WasteRemovedKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount?: IntFieldUpdateOperationsInput | number
    WaterQualityImprovementScore?: StringFieldUpdateOperationsInput | string
  }

  export type NoventraTechnologiesIncCreateManyInput = {
    EventID: string
    AreaRestoredSqM: Decimal | DecimalJsLike | number | string
    NativeFloraPlanted: number
    WasteRemovedKg: Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount: number
    WaterQualityImprovementScore: string
  }

  export type NoventraTechnologiesIncUpdateManyMutationInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    AreaRestoredSqM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NativeFloraPlanted?: IntFieldUpdateOperationsInput | number
    WasteRemovedKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount?: IntFieldUpdateOperationsInput | number
    WaterQualityImprovementScore?: StringFieldUpdateOperationsInput | string
  }

  export type NoventraTechnologiesIncUncheckedUpdateManyInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    AreaRestoredSqM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NativeFloraPlanted?: IntFieldUpdateOperationsInput | number
    WasteRemovedKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    BiodiversitySpeciesCount?: IntFieldUpdateOperationsInput | number
    WaterQualityImprovementScore?: StringFieldUpdateOperationsInput | string
  }

  export type AureviaInternationalHoldingsCreateInput = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
  }

  export type AureviaInternationalHoldingsUncheckedCreateInput = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
  }

  export type AureviaInternationalHoldingsUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type AureviaInternationalHoldingsUncheckedUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type AureviaInternationalHoldingsCreateManyInput = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
  }

  export type AureviaInternationalHoldingsUpdateManyMutationInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type AureviaInternationalHoldingsUncheckedUpdateManyInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type ZentaraDynamicsCorporationCreateInput = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
  }

  export type ZentaraDynamicsCorporationUncheckedCreateInput = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
  }

  export type ZentaraDynamicsCorporationUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type ZentaraDynamicsCorporationUncheckedUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type ZentaraDynamicsCorporationCreateManyInput = {
    EventID: string
    TreesPlanted: number
    SaplingSurvivalRatePercent: Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount: number
    GeoTaggingEnabled: string
    PostPlantationCareProvided: string
  }

  export type ZentaraDynamicsCorporationUpdateManyMutationInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type ZentaraDynamicsCorporationUncheckedUpdateManyInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TreesPlanted?: IntFieldUpdateOperationsInput | number
    SaplingSurvivalRatePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SpeciesDiversityCount?: IntFieldUpdateOperationsInput | number
    GeoTaggingEnabled?: StringFieldUpdateOperationsInput | string
    PostPlantationCareProvided?: StringFieldUpdateOperationsInput | string
  }

  export type TrionyxSystemsWorldwideCreateInput = {
    EventID: string
    TankersSupplied: number
    WaterDeliveredLiters: number
    HouseholdsReached: number
    WaterDistributionPoints: number
    HygieneKitsDistributed: number
  }

  export type TrionyxSystemsWorldwideUncheckedCreateInput = {
    EventID: string
    TankersSupplied: number
    WaterDeliveredLiters: number
    HouseholdsReached: number
    WaterDistributionPoints: number
    HygieneKitsDistributed: number
  }

  export type TrionyxSystemsWorldwideUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TankersSupplied?: IntFieldUpdateOperationsInput | number
    WaterDeliveredLiters?: IntFieldUpdateOperationsInput | number
    HouseholdsReached?: IntFieldUpdateOperationsInput | number
    WaterDistributionPoints?: IntFieldUpdateOperationsInput | number
    HygieneKitsDistributed?: IntFieldUpdateOperationsInput | number
  }

  export type TrionyxSystemsWorldwideUncheckedUpdateInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TankersSupplied?: IntFieldUpdateOperationsInput | number
    WaterDeliveredLiters?: IntFieldUpdateOperationsInput | number
    HouseholdsReached?: IntFieldUpdateOperationsInput | number
    WaterDistributionPoints?: IntFieldUpdateOperationsInput | number
    HygieneKitsDistributed?: IntFieldUpdateOperationsInput | number
  }

  export type TrionyxSystemsWorldwideCreateManyInput = {
    EventID: string
    TankersSupplied: number
    WaterDeliveredLiters: number
    HouseholdsReached: number
    WaterDistributionPoints: number
    HygieneKitsDistributed: number
  }

  export type TrionyxSystemsWorldwideUpdateManyMutationInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TankersSupplied?: IntFieldUpdateOperationsInput | number
    WaterDeliveredLiters?: IntFieldUpdateOperationsInput | number
    HouseholdsReached?: IntFieldUpdateOperationsInput | number
    WaterDistributionPoints?: IntFieldUpdateOperationsInput | number
    HygieneKitsDistributed?: IntFieldUpdateOperationsInput | number
  }

  export type TrionyxSystemsWorldwideUncheckedUpdateManyInput = {
    EventID?: StringFieldUpdateOperationsInput | string
    TankersSupplied?: IntFieldUpdateOperationsInput | number
    WaterDeliveredLiters?: IntFieldUpdateOperationsInput | number
    HouseholdsReached?: IntFieldUpdateOperationsInput | number
    WaterDistributionPoints?: IntFieldUpdateOperationsInput | number
    HygieneKitsDistributed?: IntFieldUpdateOperationsInput | number
  }

  export type InboxCreateInput = {
    eventId: string
    eventName: string
    eventDescription: string
    organizerName: string
    status?: string
    createdAt?: Date | string
  }

  export type InboxUncheckedCreateInput = {
    id?: number
    eventId: string
    eventName: string
    eventDescription: string
    organizerName: string
    status?: string
    createdAt?: Date | string
  }

  export type InboxUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxCreateManyInput = {
    id?: number
    eventId: string
    eventName: string
    eventDescription: string
    organizerName: string
    status?: string
    createdAt?: Date | string
  }

  export type InboxUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type VolunteerNullableScalarRelationFilter = {
    is?: VolunteerWhereInput | null
    isNot?: VolunteerWhereInput | null
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    eventLocation?: SortOrder
    volunteerCapacity?: SortOrder
    registrationLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    SkillsRequired?: SortOrder
    InternshipRoles?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    volunteerCapacity?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    eventLocation?: SortOrder
    volunteerCapacity?: SortOrder
    registrationLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    SkillsRequired?: SortOrder
    InternshipRoles?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    eventLocation?: SortOrder
    volunteerCapacity?: SortOrder
    registrationLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    SkillsRequired?: SortOrder
    InternshipRoles?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    volunteerCapacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VolunteerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    salutation?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    homeStreet?: SortOrder
    homeCity?: SortOrder
    homeState?: SortOrder
    postalCode?: SortOrder
    homeCountry?: SortOrder
    mobilePhone?: SortOrder
    employer?: SortOrder
    educationalLevel?: SortOrder
    maritalStatus?: SortOrder
    employmentStatus?: SortOrder
    willingTravelDistance?: SortOrder
    helpInDisaster?: SortOrder
    hasDisability?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    salutation?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    homeStreet?: SortOrder
    homeCity?: SortOrder
    homeState?: SortOrder
    postalCode?: SortOrder
    homeCountry?: SortOrder
    mobilePhone?: SortOrder
    employer?: SortOrder
    educationalLevel?: SortOrder
    maritalStatus?: SortOrder
    employmentStatus?: SortOrder
    willingTravelDistance?: SortOrder
    helpInDisaster?: SortOrder
    hasDisability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    salutation?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    homeStreet?: SortOrder
    homeCity?: SortOrder
    homeState?: SortOrder
    postalCode?: SortOrder
    homeCountry?: SortOrder
    mobilePhone?: SortOrder
    employer?: SortOrder
    educationalLevel?: SortOrder
    maritalStatus?: SortOrder
    employmentStatus?: SortOrder
    willingTravelDistance?: SortOrder
    helpInDisaster?: SortOrder
    hasDisability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CSR_Main_TableCountOrderByAggregateInput = {
    EventID?: SortOrder
    ActivityName?: SortOrder
    LocationVillageCity?: SortOrder
    District?: SortOrder
    State?: SortOrder
    DateOfImplementation?: SortOrder
    NumberOfVolunteers?: SortOrder
    CorporateSponsor?: SortOrder
    NGOPartner?: SortOrder
    VolunteerHoursLogged?: SortOrder
    GenderDistribution?: SortOrder
    CommunityBeneficiaries?: SortOrder
    CSRBudgetAllocated?: SortOrder
    CSRBudgetUtilized?: SortOrder
    VolunteerFeedbackScore?: SortOrder
    CommunitySatisfactionScore?: SortOrder
    RemarksChallenges?: SortOrder
  }

  export type CSR_Main_TableAvgOrderByAggregateInput = {
    NumberOfVolunteers?: SortOrder
    VolunteerHoursLogged?: SortOrder
    CommunityBeneficiaries?: SortOrder
    CSRBudgetAllocated?: SortOrder
    CSRBudgetUtilized?: SortOrder
    VolunteerFeedbackScore?: SortOrder
    CommunitySatisfactionScore?: SortOrder
  }

  export type CSR_Main_TableMaxOrderByAggregateInput = {
    EventID?: SortOrder
    ActivityName?: SortOrder
    LocationVillageCity?: SortOrder
    District?: SortOrder
    State?: SortOrder
    DateOfImplementation?: SortOrder
    NumberOfVolunteers?: SortOrder
    CorporateSponsor?: SortOrder
    NGOPartner?: SortOrder
    VolunteerHoursLogged?: SortOrder
    GenderDistribution?: SortOrder
    CommunityBeneficiaries?: SortOrder
    CSRBudgetAllocated?: SortOrder
    CSRBudgetUtilized?: SortOrder
    VolunteerFeedbackScore?: SortOrder
    CommunitySatisfactionScore?: SortOrder
    RemarksChallenges?: SortOrder
  }

  export type CSR_Main_TableMinOrderByAggregateInput = {
    EventID?: SortOrder
    ActivityName?: SortOrder
    LocationVillageCity?: SortOrder
    District?: SortOrder
    State?: SortOrder
    DateOfImplementation?: SortOrder
    NumberOfVolunteers?: SortOrder
    CorporateSponsor?: SortOrder
    NGOPartner?: SortOrder
    VolunteerHoursLogged?: SortOrder
    GenderDistribution?: SortOrder
    CommunityBeneficiaries?: SortOrder
    CSRBudgetAllocated?: SortOrder
    CSRBudgetUtilized?: SortOrder
    VolunteerFeedbackScore?: SortOrder
    CommunitySatisfactionScore?: SortOrder
    RemarksChallenges?: SortOrder
  }

  export type CSR_Main_TableSumOrderByAggregateInput = {
    NumberOfVolunteers?: SortOrder
    VolunteerHoursLogged?: SortOrder
    CommunityBeneficiaries?: SortOrder
    CSRBudgetAllocated?: SortOrder
    CSRBudgetUtilized?: SortOrder
    VolunteerFeedbackScore?: SortOrder
    CommunitySatisfactionScore?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VeltrixGlobalSolutionsCountOrderByAggregateInput = {
    EventID?: SortOrder
    HouseholdsCovered?: SortOrder
    AwarenessKitsDistributed?: SortOrder
    MockDrillsConducted?: SortOrder
    EarlyWarningSystemInstalled?: SortOrder
    LocalAuthorityCollaboration?: SortOrder
  }

  export type VeltrixGlobalSolutionsAvgOrderByAggregateInput = {
    HouseholdsCovered?: SortOrder
    AwarenessKitsDistributed?: SortOrder
    MockDrillsConducted?: SortOrder
  }

  export type VeltrixGlobalSolutionsMaxOrderByAggregateInput = {
    EventID?: SortOrder
    HouseholdsCovered?: SortOrder
    AwarenessKitsDistributed?: SortOrder
    MockDrillsConducted?: SortOrder
    EarlyWarningSystemInstalled?: SortOrder
    LocalAuthorityCollaboration?: SortOrder
  }

  export type VeltrixGlobalSolutionsMinOrderByAggregateInput = {
    EventID?: SortOrder
    HouseholdsCovered?: SortOrder
    AwarenessKitsDistributed?: SortOrder
    MockDrillsConducted?: SortOrder
    EarlyWarningSystemInstalled?: SortOrder
    LocalAuthorityCollaboration?: SortOrder
  }

  export type VeltrixGlobalSolutionsSumOrderByAggregateInput = {
    HouseholdsCovered?: SortOrder
    AwarenessKitsDistributed?: SortOrder
    MockDrillsConducted?: SortOrder
  }

  export type NoventraTechnologiesIncCountOrderByAggregateInput = {
    EventID?: SortOrder
    AreaRestoredSqM?: SortOrder
    NativeFloraPlanted?: SortOrder
    WasteRemovedKg?: SortOrder
    BiodiversitySpeciesCount?: SortOrder
    WaterQualityImprovementScore?: SortOrder
  }

  export type NoventraTechnologiesIncAvgOrderByAggregateInput = {
    AreaRestoredSqM?: SortOrder
    NativeFloraPlanted?: SortOrder
    WasteRemovedKg?: SortOrder
    BiodiversitySpeciesCount?: SortOrder
  }

  export type NoventraTechnologiesIncMaxOrderByAggregateInput = {
    EventID?: SortOrder
    AreaRestoredSqM?: SortOrder
    NativeFloraPlanted?: SortOrder
    WasteRemovedKg?: SortOrder
    BiodiversitySpeciesCount?: SortOrder
    WaterQualityImprovementScore?: SortOrder
  }

  export type NoventraTechnologiesIncMinOrderByAggregateInput = {
    EventID?: SortOrder
    AreaRestoredSqM?: SortOrder
    NativeFloraPlanted?: SortOrder
    WasteRemovedKg?: SortOrder
    BiodiversitySpeciesCount?: SortOrder
    WaterQualityImprovementScore?: SortOrder
  }

  export type NoventraTechnologiesIncSumOrderByAggregateInput = {
    AreaRestoredSqM?: SortOrder
    NativeFloraPlanted?: SortOrder
    WasteRemovedKg?: SortOrder
    BiodiversitySpeciesCount?: SortOrder
  }

  export type AureviaInternationalHoldingsCountOrderByAggregateInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type AureviaInternationalHoldingsAvgOrderByAggregateInput = {
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
  }

  export type AureviaInternationalHoldingsMaxOrderByAggregateInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type AureviaInternationalHoldingsMinOrderByAggregateInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type AureviaInternationalHoldingsSumOrderByAggregateInput = {
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
  }

  export type ZentaraDynamicsCorporationCountOrderByAggregateInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type ZentaraDynamicsCorporationAvgOrderByAggregateInput = {
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
  }

  export type ZentaraDynamicsCorporationMaxOrderByAggregateInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type ZentaraDynamicsCorporationMinOrderByAggregateInput = {
    EventID?: SortOrder
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
    GeoTaggingEnabled?: SortOrder
    PostPlantationCareProvided?: SortOrder
  }

  export type ZentaraDynamicsCorporationSumOrderByAggregateInput = {
    TreesPlanted?: SortOrder
    SaplingSurvivalRatePercent?: SortOrder
    SpeciesDiversityCount?: SortOrder
  }

  export type TrionyxSystemsWorldwideCountOrderByAggregateInput = {
    EventID?: SortOrder
    TankersSupplied?: SortOrder
    WaterDeliveredLiters?: SortOrder
    HouseholdsReached?: SortOrder
    WaterDistributionPoints?: SortOrder
    HygieneKitsDistributed?: SortOrder
  }

  export type TrionyxSystemsWorldwideAvgOrderByAggregateInput = {
    TankersSupplied?: SortOrder
    WaterDeliveredLiters?: SortOrder
    HouseholdsReached?: SortOrder
    WaterDistributionPoints?: SortOrder
    HygieneKitsDistributed?: SortOrder
  }

  export type TrionyxSystemsWorldwideMaxOrderByAggregateInput = {
    EventID?: SortOrder
    TankersSupplied?: SortOrder
    WaterDeliveredLiters?: SortOrder
    HouseholdsReached?: SortOrder
    WaterDistributionPoints?: SortOrder
    HygieneKitsDistributed?: SortOrder
  }

  export type TrionyxSystemsWorldwideMinOrderByAggregateInput = {
    EventID?: SortOrder
    TankersSupplied?: SortOrder
    WaterDeliveredLiters?: SortOrder
    HouseholdsReached?: SortOrder
    WaterDistributionPoints?: SortOrder
    HygieneKitsDistributed?: SortOrder
  }

  export type TrionyxSystemsWorldwideSumOrderByAggregateInput = {
    TankersSupplied?: SortOrder
    WaterDeliveredLiters?: SortOrder
    HouseholdsReached?: SortOrder
    WaterDistributionPoints?: SortOrder
    HygieneKitsDistributed?: SortOrder
  }

  export type InboxCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InboxMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    eventDescription?: SortOrder
    organizerName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type VolunteerCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    connect?: VolunteerWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type VolunteerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    connect?: VolunteerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VolunteerUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    upsert?: VolunteerUpsertWithoutUserInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUserInput, VolunteerUpdateWithoutUserInput>, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VolunteerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    upsert?: VolunteerUpsertWithoutUserInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUserInput, VolunteerUpdateWithoutUserInput>, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutEventInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutEventNestedInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    upsert?: UserUpsertWithoutEventInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventInput, UserUpdateWithoutEventInput>, UserUncheckedUpdateWithoutEventInput>
  }

  export type VolunteerCreateskillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutVolunteerInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VolunteerUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutVolunteerNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    upsert?: UserUpsertWithoutVolunteerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerInput, UserUpdateWithoutVolunteerInput>, UserUncheckedUpdateWithoutVolunteerInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EventCreateWithoutUserInput = {
    id?: string
    eventName: string
    eventDescription: string
    organizerName: string
    email: string
    contact: string
    eventLocation: string
    volunteerCapacity: number
    registrationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SkillsRequired?: string | null
    InternshipRoles?: string | null
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: string
    eventName: string
    eventDescription: string
    organizerName: string
    email: string
    contact: string
    eventLocation: string
    volunteerCapacity: number
    registrationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SkillsRequired?: string | null
    InternshipRoles?: string | null
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerCreateWithoutUserInput = {
    id?: string
    salutation?: string | null
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    homeStreet?: string | null
    homeCity?: string | null
    homeState?: string | null
    postalCode?: string | null
    homeCountry?: string | null
    mobilePhone: string
    employer?: string | null
    educationalLevel?: string | null
    maritalStatus?: string | null
    employmentStatus?: string | null
    willingTravelDistance?: string | null
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: VolunteerCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerUncheckedCreateWithoutUserInput = {
    id?: string
    salutation?: string | null
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    homeStreet?: string | null
    homeCity?: string | null
    homeState?: string | null
    postalCode?: string | null
    homeCountry?: string | null
    mobilePhone: string
    employer?: string | null
    educationalLevel?: string | null
    maritalStatus?: string | null
    employmentStatus?: string | null
    willingTravelDistance?: string | null
    helpInDisaster?: boolean
    hasDisability?: boolean
    skills?: VolunteerCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerCreateOrConnectWithoutUserInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    eventDescription?: StringFilter<"Event"> | string
    organizerName?: StringFilter<"Event"> | string
    email?: StringFilter<"Event"> | string
    contact?: StringFilter<"Event"> | string
    eventLocation?: StringFilter<"Event"> | string
    volunteerCapacity?: IntFilter<"Event"> | number
    registrationLink?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    userId?: StringNullableFilter<"Event"> | string | null
    SkillsRequired?: StringNullableFilter<"Event"> | string | null
    InternshipRoles?: StringNullableFilter<"Event"> | string | null
  }

  export type VolunteerUpsertWithoutUserInput = {
    update: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutUserInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type VolunteerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    homeStreet?: NullableStringFieldUpdateOperationsInput | string | null
    homeCity?: NullableStringFieldUpdateOperationsInput | string | null
    homeState?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    homeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: StringFieldUpdateOperationsInput | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    educationalLevel?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    willingTravelDistance?: NullableStringFieldUpdateOperationsInput | string | null
    helpInDisaster?: BoolFieldUpdateOperationsInput | boolean
    hasDisability?: BoolFieldUpdateOperationsInput | boolean
    skills?: VolunteerUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    homeStreet?: NullableStringFieldUpdateOperationsInput | string | null
    homeCity?: NullableStringFieldUpdateOperationsInput | string | null
    homeState?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    homeCountry?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: StringFieldUpdateOperationsInput | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    educationalLevel?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    willingTravelDistance?: NullableStringFieldUpdateOperationsInput | string | null
    helpInDisaster?: BoolFieldUpdateOperationsInput | boolean
    hasDisability?: BoolFieldUpdateOperationsInput | boolean
    skills?: VolunteerUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutEventInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    role?: $Enums.Role
    Volunteer?: VolunteerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    role?: $Enums.Role
    Volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
  }

  export type UserUpsertWithoutEventInput = {
    update: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
  }

  export type UserUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Volunteer?: VolunteerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutVolunteerInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    role?: $Enums.Role
    Event?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVolunteerInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    role?: $Enums.Role
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVolunteerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
  }

  export type UserUpsertWithoutVolunteerInput = {
    update: XOR<UserUpdateWithoutVolunteerInput, UserUncheckedUpdateWithoutVolunteerInput>
    create: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteerInput, UserUncheckedUpdateWithoutVolunteerInput>
  }

  export type UserUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Event?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateManyUserInput = {
    id?: string
    eventName: string
    eventDescription: string
    organizerName: string
    email: string
    contact: string
    eventLocation: string
    volunteerCapacity: number
    registrationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SkillsRequired?: string | null
    InternshipRoles?: string | null
  }

  export type EventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    volunteerCapacity?: IntFieldUpdateOperationsInput | number
    registrationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SkillsRequired?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRoles?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    volunteerCapacity?: IntFieldUpdateOperationsInput | number
    registrationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SkillsRequired?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRoles?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    volunteerCapacity?: IntFieldUpdateOperationsInput | number
    registrationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SkillsRequired?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRoles?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}