import * as constants from '../constants/action-types';
import * as welcomeActions from '../actions/welcome-actions';

export function welcomeObs(store, state$) {
    // Reload sub nav items
    state$.distinctUntilChanged(state => state.router.location.pathname)
    .filter(state => state.router.location.pathname === 'welcome')
        .subscribe((state) => {
            store.dispatch(welcomeActions.UpdateWelcomeMsg());
        });
}
