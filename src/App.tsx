import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

const initialGoods = [...goodsFromServer];

enum SortType {
  None,
  Alphabetically,
  Length,
  Reverse,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<string[]>(initialGoods);
  const [activeSort, setActiveSort] = useState<SortType>(SortType.None);

  function handleSort(type: SortType) {
    setActiveSort(type);

    switch (type) {
      case SortType.Alphabetically:
        setGoods(prev => [...prev].sort((a, b) => a.localeCompare(b)));
        break;

      case SortType.Length:
        setGoods(prev => [...prev].sort((a, b) => a.length - b.length));
        break;

      case SortType.Reverse:
        setGoods(prev => [...prev].reverse());
        break;

      case SortType.None:
        setGoods([...initialGoods]);
        break;
    }
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${
            activeSort !== SortType.Alphabetically ? 'is-light' : ''
          }`}
          onClick={() => handleSort(SortType.Alphabetically)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info ${
            activeSort !== SortType.Length ? 'is-light' : ''
          }`}
          onClick={() => handleSort(SortType.Length)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info ${
            activeSort !== SortType.Reverse ? 'is-light' : ''
          }`}
          onClick={() => handleSort(SortType.Reverse)}
        >
          Reverse
        </button>

        {activeSort !== SortType.None && (
          <button
            type="button"
            className="button is-warning"
            onClick={() => handleSort(SortType.None)}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(item => (
          <li data-cy="Good" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
