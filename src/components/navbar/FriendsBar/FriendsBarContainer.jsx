import React from 'react';
import StoreContext from '../../../StoreContext';
import FriendsBar from './FriendsBar';

const FriendsBarContainer = () => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					return (
						<FriendsBar state={state} />
					)
				}
			}
		</StoreContext.Consumer>
	)


}

export default FriendsBarContainer;