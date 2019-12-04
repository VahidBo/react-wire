<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@forminator/react-wire](./react-wire.md) &gt; [useFn](./react-wire.usefn.md)

## useFn() function

subscribe for function calls

<b>Signature:</b>

```typescript
export declare function useFn<Fs, K extends keyof Methods<Fs>>(
  wire: Wire<any, Fs>,
  name: K,
  fn: Fs[K],
): void;
```

## Parameters

| Parameter | Type                             | Description                       |
| --------- | -------------------------------- | --------------------------------- |
| wire      | <code>Wire&lt;any, Fs&gt;</code> |                                   |
| name      | <code>K</code>                   | name of <code>fns</code> function |
| fn        | <code>Fs[K]</code>               | memoized callback function        |

<b>Returns:</b>

`void`

## Example

```ts
// subscribe for `sample` function call
useFn(
  wire,
  'sample',
  useCallback(value => {
    console.log(value);
  }, []),
);

// call `sample` function
wire.fns.sample(5);
```