export interface Options {
    delayTime: number;
}
declare type Run = (...args: any) => void;
declare const useThrottle: <T extends any[]>(fn: (...args: T) => void, options: Options) => Run[];
export default useThrottle;
