import { useRef } from 'react';
const useThrottle = (fn, options) => {
    const delayTime = options.delayTime || 0;
    const previous = useRef(0);
    const fnRef = useRef(fn);
    const run = (...args) => {
        const now = Date.now();
        if (now - previous.current > delayTime) {
            fnRef.current(...args);
            previous.current = now;
        }
    };
    return [run];
};
export default useThrottle;
// ns 内只触发一次
