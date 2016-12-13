declare module 'commonJSModule' {
  declare type MyEntity = {
    id: string,
    name: string,
  };

  declare type MyExport = {
    toEntity: (obj: Object) => MyEntity
  };

  declare function notExposed(): void;

  declare var exports: MyExport; 
}
