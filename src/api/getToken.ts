import fetch from 'node-fetch';
import cheerio from 'cheerio';

export async function getToken({
  country,
  appId,
  appName,
}: {
  country: string;
  appId: string;
  appName: string;
}): Promise<string> {
  const landingUrl = `https://apps.apple.com/${country}/app/${appName}/id${appId}`;
  const fetchResult = await fetch(landingUrl);

  if (fetchResult.status !== 200) {
    throw new Error(fetchResult.statusText);
  }

  const html = await fetchResult.text();
  const $ = cheerio.load(html);
  const metaConfigContent = $(
    'meta[name="web-experience-app/config/environment"]'
  ).attr('content');
  const metaObject = JSON.parse(decodeURIComponent(metaConfigContent!));
  const token = metaObject.MEDIA_API.token;

  return token;
}
