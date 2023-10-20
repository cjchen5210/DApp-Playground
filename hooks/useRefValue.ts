import { useRef } from "react"

export const useRefValue = <T>(value: () => T): T => {
    const ref = useRef<T>();
    const onceRef = useRef(false);

    if (!onceRef.current) {
        ref.current = value();
        onceRef.current = true;
    }

    return ref.current!;
}