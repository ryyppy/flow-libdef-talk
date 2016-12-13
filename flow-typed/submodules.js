declare type npm$mymodule$Shared = number;

declare module 'mymodule/lib' {
  declare type MyExport = npm$mymodule$Shared;
  declare export default MyExport;
}

declare module 'mymodule/lib/something' {
  declare var exports: {
    shared: npm$mymodule$Shared,
  };
}
