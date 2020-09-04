import { get, post } from '../server';

export const loadOrg = () => {
    return get('/organizations')
}