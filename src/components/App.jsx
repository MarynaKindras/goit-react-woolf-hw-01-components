import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistic/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  function shouldForwardProp(propName, target) {
    if (typeof target === 'string') {
      return isPropValid(propName);
    }
    return true;
  }
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <div
        style={{
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: 'rgb(194 200 207)',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
      >
        <p style={{ marginBottom: '30px' }}>1 - Профіль соціальної мережі</p>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <p style={{ marginTop: '30px', marginBottom: '30px' }}>
          2- Секція статистики
        </p>
        <Statistics title="UPLOAD STATS" stats={data} />
        <p style={{ marginTop: '30px', marginBottom: '30px' }}>
          3 - Список друзів
        </p>
        <FriendList friends={friends} />
        <p style={{ marginTop: '30px', marginBottom: '30px' }}>
          4 - Історія транзакцій
        </p>
        <TransactionHistory items={transactions} />
      </div>
    </StyleSheetManager>
  );
};
