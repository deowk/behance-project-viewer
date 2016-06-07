import { Observable } from 'rx';
import { welcomeObs } from '../observables/welcome.obs';

function observableFromStore(store) {
    return Observable.create(observer =>
        store.subscribe(() => observer.onNext(store.getState()))
    )
}

export default function createObservables(store) {
    const state$ = observableFromStore(store);

    // initialise observables here
    welcomeObs(store, state$);
}
