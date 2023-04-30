import fetch from 'node-fetch';

export async function fetchReviews({
  country,
  appId,
  appName,
  token,
  offset,
}: {
  country: string;
  appId: string;
  appName: string;
  token: string;
  offset: number;
}) {
  const landingUrl = `https://apps.apple.com/${country}/app/${appName}/id${appId}`;
  const requestUrl = `https://amp-api.apps.apple.com/v1/catalog/${country}/apps/${appId}/reviews`;
  const params = new URLSearchParams();

  params.append('l', 'en-GB');
  params.append('offset', offset.toString());
  params.append('limit', '20');
  params.append('platform', 'web');
  params.append('additionalPlatforms', 'appletv,ipad,iphone,mac');

  const fetchResult = await fetch(`${requestUrl}?${params.toString()}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `bearer ${token}`,
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      Origin: 'https://apps.apple.com',
      Referer: landingUrl,
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    },
  });

  return fetchResult.json();
}
