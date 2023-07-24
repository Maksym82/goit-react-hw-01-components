import { Profile } from './Profile/profile'
import user from './Profile/user.json'

import { Statistics } from './Statistics/statistics'
import data from './Statistics/data.json'

import { FriendList } from './FriendList/friendsData'
import friends from './FriendList/friendsArr.json'

import { TransactionHistory } from './TransactionHistory/transactionhistory'
import transactions from './TransactionHistory/transaction.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
      >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends = {friends}  />
      <TransactionHistory transactions={transactions} /> 
    </div>
  );
};

