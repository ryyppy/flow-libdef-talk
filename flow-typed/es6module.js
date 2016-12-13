declare module 'es6module' {
  declare export var buffers: Array<string>;
  declare export var otherBuffer: string;

  declare type MyES6Module= {
    buffers: typeof buffers, 
  };
 
  declare export default MyES6Module;
}
