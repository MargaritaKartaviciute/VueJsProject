import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        alert,
        account,
        users
    }
});
