import axios from 'axios';
// import proj4 from 'proj4';
// import dfd from 'danfojs-node';
// import path from 'path';
// import fs from 'fs';

axios.interceptors.response.use(undefined, async (error) => {
  const originalRequestConfig = error.config;

  return new Promise((resolve) => setTimeout(resolve, 1e3)).then(() =>
    axios.request(originalRequestConfig),
  );
});

// proj4.defs([
//   [
//     'EPSG:5181',
//     '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs',
//   ],
//   ['EPSG:4326', '+proj=longlat +ellps=WGS84 +no_defs'],
// ]);

const fetchTile = async (query, x, y, zoom = 7) => {
  const { data } = await axios.get(
    `https://tilesrch.map.daum.net/tmap/msearch/L${zoom}/${x}/${y}.png?output=jsonp&query=${encodeURI(
      query,
    )}&dimg=ns`,
    {
      headers: {
        Referer: 'https://map.kakao.com/',
      },
    },
  );

  return data.map((d) => ({
    ...d,
    lat: proj4('EPSG:5181', 'EPSG:4326', [d['x'] * 0.4, d['y'] * 0.4])[0],
    long: proj4('EPSG:5181', 'EPSG:4326', [d['x'] * 0.4, d['y'] * 0.4])[1],
  }));
};

const fetchRangeTile = async (
  query,
  xmin = 109,
  xmax = 147,
  ymin = 41,
  ymax = 84,
) => {
  const xrange = [...Array(xmax - xmin + 1)].map((_, index) => index + xmin);
  const yrange = [...Array(ymax - ymin + 1)].map((_, index) => index + ymin);
  let xtotal = 0;
  const data = (
    await Promise.all(
      xrange.map(async (xtile) => {
        const tiles = await Promise.all(
          yrange.map(async (ytile, index) => {
            const tile = await fetchTile(query, xtile, ytile);
            // if (index % 10 === 0)
            //   console.log(`${query}: [${xtile}/${xmax}, ${ytile}/${ymax}]`);
            return tile;
          }),
        );
        xtotal += 1;
        console.log(`${query}: [${xtotal}/${xmax - xmin + 1}]`);
        return tiles;
      }),
    )
  )
    .flat()
    .flat();
  const df = new dfd.DataFrame(data);
  return df;
};

(async () => {
  // await Promise.all(
  //   ['도서관', '영화관', '미술관', '공연장', '놀이동산', '노래방'].map(
  //     async (query) => {
  //       const df = await fetchRangeTile(query);
  //       const fileName = path.join(
  //         '/Users/craftydragon678/Documents/study/study-bigdata/60_포스터',
  //         `${query}.csv`,
  //       );
  //       fs.writeFileSync(fileName, df.to_csv());
  //     },
  //   ),
  // );
  const { data } = await axios.get(
    // 'https://hogangnono.com/api/apt/bounding?map=google&level=16&screenWidth=649&screenHeight=1176&tradeType=0&areaFrom=0&areaTo=80&priceFrom=0&priceTo=301000&gapPriceFrom=0&gapPriceTo=151000&sinceFrom=0&sinceTo=30&floorAreaRatioFrom=0&floorAreaRatioTo=500&buildingCoverageRatioFrom=0&buildingCoverageRatioTo=100&rentalBusinessRatioFrom=0&rentalBusinessRatioTo=100&householdFrom=0&householdTo=5000&parking=0&profitRatio=0&rentRateFrom=0&rentRateTo=100&apt=dC7df&commute=false&commuteTarget=bnHe6&academy=false&latestRealTradeOnlyHighest=0&latestRealTradePeriod=3&priceDiffFrom&priceDiffTo&isAskingPriceBase=false&aptType=-1&asileType=0&heatType=0&isIgnorePin=false&populationFrom&populationTo&tradeCountFrom&tradeCountTo&offerHouseholdFrom&offerHouseholdTo&useSpeculationRegion=false&auctionState=-1&reconstructionStep=0&reconstructionStepFrom=1&reconstructionStepTo=10&r=77976&externalTradeRatioDate=0&externalTradeRatioType=2&income=0&startX=126.528249&endX=126.973882&startY=37.3492091&endY=37.9883798',
    // 'https://hogangnono.com/api/apt/bounding?map=google&level=16&screenWidth=649&screenHeight=1176&tradeType=0&areaFrom=0&areaTo=80&priceFrom=0&priceTo=301000&gapPriceFrom=0&gapPriceTo=151000&sinceFrom=0&sinceTo=30&floorAreaRatioFrom=0&floorAreaRatioTo=500&buildingCoverageRatioFrom=0&buildingCoverageRatioTo=100&rentalBusinessRatioFrom=0&rentalBusinessRatioTo=100&householdFrom=0&householdTo=5000&parking=0&profitRatio=0&rentRateFrom=0&rentRateTo=100&apt=dC7df&commute=false&commuteTarget=bnHe6&academy=false&latestRealTradeOnlyHighest=0&latestRealTradePeriod=3&priceDiffFrom&priceDiffTo&isAskingPriceBase=false&aptType=-1&asileType=0&heatType=0&isIgnorePin=false&populationFrom&populationTo&tradeCountFrom&tradeCountTo&offerHouseholdFrom&offerHouseholdTo&useSpeculationRegion=false&auctionState=-1&reconstructionStep=0&reconstructionStepFrom=1&reconstructionStepTo=10&r=77976&externalTradeRatioDate=0&externalTradeRatioType=2&income=0&startX=126.528249&endX=126.973882&startY=37.3492091&endY=37.9883798',
    // 'https://hogangnono.com/api/apt/bounding?map=google&level=16&screenWidth=649&screenHeight=1176&tradeType=0&areaFrom=0&areaTo=80&priceFrom=0&priceTo=301000&gapPriceFrom=0&gapPriceTo=151000&sinceFrom=0&sinceTo=30&floorAreaRatioFrom=0&floorAreaRatioTo=500&buildingCoverageRatioFrom=0&buildingCoverageRatioTo=100&rentalBusinessRatioFrom=0&rentalBusinessRatioTo=100&householdFrom=0&householdTo=5000&parking=0&profitRatio=0&rentRateFrom=0&rentRateTo=100&apt=dC7df&commute=false&commuteTarget=bnHe6&academy=false&latestRealTradeOnlyHighest=0&latestRealTradePeriod=3&priceDiffFrom&priceDiffTo&isAskingPriceBase=false&aptType=-1&asileType=0&heatType=0&isIgnorePin=false&populationFrom&populationTo&tradeCountFrom&tradeCountTo&offerHouseholdFrom&offerHouseholdTo&useSpeculationRegion=false&auctionState=-1&reconstructionStep=0&reconstructionStepFrom=1&reconstructionStepTo=10&r=77976&externalTradeRatioDate=0&externalTradeRatioType=2&income=0&startX=127.1418634&endX=127.1557894&startY=37.8503365&endY=37.8702592',
    // 'https://hogangnono.com/api/poi/bounding?map=google&category=&level=16&apt=dC7df&poi&isIgnorePin=false&startX=127.1418634&endX=127.1557894&startY=37.8503365&endY=37.8702592',
    'https://hogangnono.com/api/poi/bounding?map=google&category=&level=16&apt=dC7df&poi&isIgnorePin=false&startX=127.0897641&endX=127.1036902&startY=37.8079321&endY=37.8278663',
    {
      headers: {
        // 'x-hogangnono-event-log': '20c04358ce2aad2ccae37d73bb6603d10fa4200d',
        // 'x-hogangnono-ct': '1634177858215',
        // 'x-hogangnono-event-duration': '1006198',
        // 'x-hogangnono-event-log': '4b853af45ccc037a01f9cecfa4da9777d8e203fe',
        // 'x-hogangnono-ct': '1634177631135',
        // 'x-hogangnono-event-duration': '469340',
        'x-hogangnono-ct': 1634178344318,
        'x-hogangnono-event-duration': 589220,
        'x-hogangnono-event-log': 'ccc973e888a7c11340c566475b597b98e3f1be06',
      },
    },
  );
  console.log(data);
})();
