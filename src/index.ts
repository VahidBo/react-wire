// read more about doc comment syntax in https://api-extractor.com/pages/tsdoc/doc_comment_syntax/

/**
 * connect react components with wire
 *
 * @packageDocumentation
 */

export { _WireImpl } from './wire.impl';
export { useWire } from './use-wire';
export { useWireState } from './use-wire-state';
export { useWireValue } from './use-wire-value';
export { useInterceptor } from './use-interceptor';
export { useFn } from './use-fn';

// TODO remove. kept for backward compatibility
export { useInterceptor as useInterferer } from './use-interceptor';
