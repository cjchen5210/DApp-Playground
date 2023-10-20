"use client"

import Progress from "qier-progress"
import { useEffect, useRef } from "react"
import { useAppRouterListener } from "./useAppRouterListener"

export const useNProgress = () => {
    const events = useAppRouterListener();

    const instance = useRef(
        new Progress({color: "#fe6546", colorful: false}),
    );

    useEffect(() => {
        const disposers = [] as any[];
        disposers.push(
            events.onStart(() => {
                // console.log("route start");
                instance.current.start();
            }),
        )
        disposers.push(
            events.onComplete(() => {
                // console.log("route complete");
                instance.current.finish();
            })
        );
        return () => disposers.forEach((disposer) => disposer());
    }, []);
}