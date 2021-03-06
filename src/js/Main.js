'use strict';

import store from './store/store';
import Dashboard from './components/pages/Dashboard';
import EditCampaign from './components/pages/EditCampaign';
import ManageCampaigns from './components/pages/ManageCampaigns';
import Router from 'metal-router';

class Main {
	static run() {
		Router.route('/', Dashboard, store.getState, true);
		Router.route('/manage-campaigns', ManageCampaigns, store.getState, true);
		Router.route('/create-campaign', EditCampaign, store.getState, true);
		Router.route(/\/edit-campaign(\/\d*)?/, EditCampaign, store.getState, true);
		Router.router().dispatch();

		store.subscribe(Main.refreshState);
		return this;
	}

	static refreshState() {
		Router.activeComponent.setState(store.getState());
	}
}

export default Main;
