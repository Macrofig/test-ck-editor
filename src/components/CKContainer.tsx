import * as React from 'react';
import { useState, useEffect } from 'react';
import { CKEditor } from './CKEditor';

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Window {
        CACHED_CK?: any;
    }
}

export const CKContainer = () => {
    const [CK, setCK] = useState<any>();

    useEffect(() => {
        let unmounted = false;

        if (window.CACHED_CK) {
            setCK(window.CACHED_CK);
            return;
        }

        import(/* webpackChunkName: "cke-dependencies" */ '../CKPlugins').then((res) => {
            window.CACHED_CK = res;
            if (!unmounted) setCK(res);
        });

        return () => {
            unmounted = true;
        };
    }, [setCK]);

    if (!CK) return null;

    return <CKEditor CK={CK} />;
}