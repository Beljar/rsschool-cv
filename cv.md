# Frontend Dev
## Ilia Kotov
*I code to make world more usable*  
## Contacts
Email: [iliavkotov@gmail.com](mailto:iliavkotov@gmail.com)\
Telegram: [#IliaCat](https://t.me/IliaCat)
## Skills
* Javascript
* React
* Typescript
* HTML
* Css/Sass
* Redux
* MobX
* Git
* Webpack

## Code example
```javascript
import * as React from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'src/hooks/useQuery';
import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';

type Props = {
  searchString?: string;
};

export const Search: React.FC<Props> = ({ searchString = '' }) => {
  const [curSearchString, setCurSearchString] = React.useState('');
  const [, setQuery] = useQuery();
  React.useEffect(() => {
    setCurSearchString(searchString);
  }, [searchString]);
  const searchHandle = () => {
    setQuery({ searchBy: 'title' }, curSearchString);
  };
  return (
    <div className={scss.search}>
      <div className={scss.searchBg} />
      <div className={scss.searchImgWrapper}>
        <div className={scss.searchImg} />
      </div>
      <div className={scss.searchContentWrapper}>
        <div className={scss.searchContent}>
          <div className={scss.searchBlock}>
            <h1>FIND YOUR MOVIE</h1>
            <div className={scss.row}>
              <Input
                id="search"
                value={curSearchString}
                placeholder="What do you want to watch?"
                onChange={(value) => {
                  setCurSearchString(value);
                }}
                onEnter={searchHandle}
              />
              <Button className={scss.searchBtn} width={223} height={57} type="filled" onClick={searchHandle}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchString: state.request.searchBy === 'title' ? state.request.search : '',
});

export default connect(mapStateToProps)(Search);
```
## Experience
**EPAM Russia**\
*May 2021 - June 2022*\
Frontend Developer
## Education
2008 Plekhanov Russian University of Economics /  Bachelor in Engineering, Bachelor in Economics\
2018 Rice University / Fundamentals of Computing (non-credit on-line specialization course on Coursera platform)
## Languages
* **Russian**: native
* **English**: B2 by CEFR
* **Spanish**: beginner