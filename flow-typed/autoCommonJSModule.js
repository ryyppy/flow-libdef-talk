declare module 'autoCommonJSModule' {
  declare function exposed1(): void;
  declare var SOME_CONSTANT: string;

  /**
   * If there is no module specific export declaration,
   * flow automatically make this a commonjs module
   */
}
