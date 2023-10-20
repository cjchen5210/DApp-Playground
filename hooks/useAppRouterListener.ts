import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { useRefValue } from "./useRefValue"

import { pick } from "@/lib/utils"

interface RouterNavigationEvent {}

type RouterEventFunction = (e: RouterNavigationEvent) => void 

const createRegister = () => {
    const props = {
        onStartQ: [] as RouterEventFunction[],
        onCompleteQ: [] as RouterEventFunction[],
        // onErrorQ; [] as RouterEventFunction[],
    } as {
        onStartQ: RouterEventFunction[],
        onCompleteQ: RouterEventFunction[],
        onStart: (cb: RouterEventFunction) => () => void,
        onComplete: (cb: RouterEventFunction) => () => void,
        // onError
    }

    props.onStart = (cb: RouterEventFunction) => {
        props.onStartQ.push(cb);
        return () => {
            props.onStartQ = props.onStartQ.filter(($) => $ !== cb)
        }
    }

    props.onComplete = (cb: RouterEventFunction) => {
        props.onCompleteQ.push(cb);
        return () => {
            props.onCompleteQ = props.onCompleteQ.filter(($) => $ !== cb)
        }
    }

    return props;
}

export const useAppRouterListener = () => {
    const [isRouterComplete, setIsRouterComplete] = useState(false);

    const startChangeCallback = () => {
        setIsRouterComplete(false);
        eventsRegisters.onStartQ.forEach(($) => $(buildEvent()));
    }
    const router = useRouter();
    useEffect(() => {
        const rawPush = router.push;
        const rawReplace = router.replace;

        router.push = (...rest) => {
            startChangeCallback();
            rawPush.apply(null, rest);
        }

        router.replace = (...rest) => {
            startChangeCallback();
            rawReplace.apply(null, rest);
        }

        return () => {
            router.push = rawPush;
            router.replace = rawReplace;
        }
    }, []);

    const eventsRegisters = useRefValue(createRegister);    

    const buildEvent = (): RouterNavigationEvent => {
        return {
            url: location.pathname + location.search,
        }
    }

    useEffect(() => {
        if (!isRouterComplete) return 

        eventsRegisters.onCompleteQ.forEach(($) => $(buildEvent()));
    }, [isRouterComplete]);

    const currentPathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (currentPathname === location.pathname && 
            searchParams?.toString() === new URLSearchParams(location.search).toString())
            {
                setIsRouterComplete(true);
            }
    }, [currentPathname, searchParams]);

    return pick(eventsRegisters, ["onStart", "onComplete"]);
}