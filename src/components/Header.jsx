import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-600">
              越谷市
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition">
              {t('header.home')}
            </Link>
            <Link to="/attractions" className="text-gray-700 hover:text-primary-600 transition">
              {t('header.attractions')}
            </Link>
            <Link to="/tourism" className="text-gray-700 hover:text-primary-600 transition">
              {t('header.tourism')}
            </Link>
            <Link to="/relocation" className="text-gray-700 hover:text-primary-600 transition">
              {t('header.relocation')}
            </Link>
            <Link to="/business" className="text-gray-700 hover:text-primary-600 transition">
              {t('header.business')}
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-primary-600 transition">
              {t('header.news')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition">
              {t('header.contact')}
            </Link>
          </nav>

          {/* 言語切替とモバイルメニューボタン */}
          <div className="flex items-center space-x-4">
            {/* 言語切替 */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('ja')}
                className={`px-3 py-1 rounded ${
                  i18n.language === 'ja'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition`}
              >
                日本語
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded ${
                  i18n.language === 'en'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition`}
              >
                English
              </button>
            </div>

            {/* モバイルメニューボタン */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="メニュー"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.home')}
              </Link>
              <Link
                to="/attractions"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.attractions')}
              </Link>
              <Link
                to="/tourism"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.tourism')}
              </Link>
              <Link
                to="/relocation"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.relocation')}
              </Link>
              <Link
                to="/business"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.business')}
              </Link>
              <Link
                to="/news"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.news')}
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.contact')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
