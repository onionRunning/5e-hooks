import { useRef } from 'react';
const useDebounce = (fn, options) => {
    const delayTime = options.delayTime || 0;
    const isImmediate = options.isImmediate || false;
    const timer = useRef(0);
    const fnRef = useRef(fn);
    const cancel = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    };
    const run = (...args) => {
        cancel();
        if (isImmediate) {
            const isCallNow = !timer.current;
            timer.current = setTimeout(() => {
                timer.current = null;
            }, delayTime);
            if (isCallNow)
                fnRef.current(...args);
            return;
        }
        timer.current = setTimeout(() => {
            fnRef.current(...args);
        }, delayTime);
    };
    return [run, cancel];
};
export default useDebounce;
