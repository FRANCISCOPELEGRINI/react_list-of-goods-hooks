import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

let goodsFromMyServer = goodsFromServer;
// let goodsFromMyServer = goodsFromServer;

export const App: React.FC = () => {
  const [btnLight, setBtnLight] = useState('');

  function sort(sortBy: string) {
    switch (sortBy) {
      case 'SortAlphabetically':
        setBtnLight('SortAlphabetically');
        goodsFromMyServer = goodsFromMyServer.sort();
        break;
      case 'SortLength':
        setBtnLight('SortLength');
        goodsFromMyServer = goodsFromMyServer.sort(
          (a, b) => b.length - a.length,
        );
        break;
      case 'SortReserve':
        setBtnLight('SortReserve');
        goodsFromMyServer = goodsFromServer.reverse();
        break;
      case 'SortReset':
        setBtnLight('SortReset');
        goodsFromMyServer = [
          'Dumplings',
          'Carrot',
          'Eggs',
          'Ice cream',
          'Apple',
          'Bread',
          'Fish',
          'Honey',
          'Jam',
          'Garlic',
        ];
    }
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${btnLight !== 'SortAlphabetically' ? 'is-light' : ''}`}
          onClick={() => sort('SortAlphabetically')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info ${btnLight !== 'SortLength' ? 'is-light' : ''}`}
          onClick={() => sort('SortLength')}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info ${btnLight !== 'SortReserve' ? 'is-light' : ''}`}
          onClick={() => sort('SortReserve')}
        >
          Reverse
        </button>

        <button
          type="button"
          className={`button is-info ${btnLight !== 'SortReset' ? 'is-light' : ''}`}
          onClick={() => sort('SortReset')}
        >
          Reset
        </button>
      </div>
      <ul>
        <ul>
          {goodsFromMyServer.map(r => (
            <li data-cy="Good" key={r}>
              {r}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
