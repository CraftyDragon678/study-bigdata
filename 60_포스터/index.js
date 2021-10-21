(async () => {
  const data = await (
    await fetch(
      'https://tilesrch.map.daum.net/tmap/msearch/L8/63/28.png?output=jsonp&query=%EB%8F%84%EC%84%9C%EA%B4%80&dimg=ns',
      {
        referrer: 'https://map.kakao.com',
      },
    )
  ).json();
  console.log(data);
})();

////////////////////////////

let xmin = 109;
let xmax = 147;
let ymin = 41;
let ymax = 84;

(
  await Promise.all(
    [...Array(xmax - xmin + 1)]
      .map((_, index) => xmin + index)
      .map((xtile) =>
        Promise.all(
          [...Array(ymax - ymin + 1)]
            .map((_, index) => ymin + index)
            .map(
              async (ytile) =>
                await (
                  await fetch(
                    `https://tilesrch.map.daum.net/tmap/msearch/L7/${xtile}/${ytile}.png?output=jsonp&query=${encodeURI(
                      '도서관',
                    )}`,
                  )
                ).json(),
            ),
        ),
      ),
  )
).flat();

// for (const xtile = xmin; xtile <= xmax; xtile += 1) {
//   for (const ytile = ymin; ytile <= ymay; ytile += 1) {
//     await (
//       await fetch(
//         `https://tilesrch.map.daum.net/tmap/msearch/L7/${xtile}/${ytile}.png?output=jsonp&query=${encodeURI(
//           '도서관',
//         )}`,
//       )
//     ).json();
//   }
// }
