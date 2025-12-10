import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* メインビジュアル */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('home.catchphrase')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {t('home.description')}
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            もっと詳しく
          </button>
        </div>
      </section>

      {/* 越谷の魅力（4つの柱） */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            越谷の魅力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 自然・公園 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-primary-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">自然・公園</h3>
                <p className="text-gray-600">
                  しらこばと水上公園や大相模調節池など、豊かな自然が身近にあります。
                </p>
              </div>
            </div>

            {/* 歴史・文化 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-secondary-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">歴史・文化</h3>
                <p className="text-gray-600">
                  越谷だるまや花田苑など、伝統文化が息づく街です。
                </p>
              </div>
            </div>

            {/* グルメ・特産品 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-accent-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">グルメ・特産品</h3>
                <p className="text-gray-600">
                  越谷ねぎや越谷いちごなど、美味しい特産品が豊富です。
                </p>
              </div>
            </div>

            {/* アクセスの良さ */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-primary-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">アクセスの良さ</h3>
                <p className="text-gray-600">
                  東京都心から約30分。通勤・通学にも便利な立地です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 数字で見る越谷 */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            数字で見る越谷
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">
                34万人
              </div>
              <p className="text-gray-600">人口</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary-600 mb-2">
                60.24km²
              </div>
              <p className="text-gray-600">面積</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-600 mb-2">
                30分
              </div>
              <p className="text-gray-600">都心へのアクセス</p>
            </div>
          </div>
        </div>
      </section>

      {/* ピックアップコンテンツ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            おすすめスポット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">スポット {item}</h3>
                  <p className="text-gray-600 mb-4">
                    越谷市の魅力的なスポットをご紹介します。
                  </p>
                  <button className="text-primary-600 font-semibold hover:text-primary-700">
                    詳しく見る →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            越谷市への移住を検討されている方へ
          </h2>
          <p className="text-xl mb-8">
            暮らしやすさと自然が調和する越谷市で、新しい生活を始めませんか？
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            移住情報を見る
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
