declare type Run = (...args: any) => void;
declare type Cancel = () => void;
declare type Res = Run | Cancel;
interface Options {
    delayTime: number;
    isImmediate?: boolean;
}
declare const useDebounce: <T extends any[]>(fn: (...args: T) => void, options: Options) => Res[];
export default useDebounce;
