import { action, observable, computed, runInAction, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')

import LeadStore from './leadStore';

let store = null;

function initializeStore(initialData = null) {
    const _store = store ?? new LeadStore()

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
    if (initialData) {
        _store.hydrate(initialData)
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const isServer = typeof window === 'undefined';
    const store = useMemo(() => isServer ? props.initialMobxState : initializeStore(initialState), [initialState])
    return store
}