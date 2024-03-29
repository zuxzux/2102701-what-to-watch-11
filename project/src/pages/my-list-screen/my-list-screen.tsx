import FilmListComponent from '../../components/films-list/films-list';
import {Link} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {useAppDispatch} from '../../hooks';
import {fetchFavoritesAction, logoutAction} from '../../store/api-actions';
import { useEffect } from 'react';

function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.DATA.filmsFavorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to='/'
              onClick={
                () => {
                  dispatch(logoutAction());
                }
              }
              className="user-block__link"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmListComponent films={films}/>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
