import { fetchReviews } from './api/fetchReviews';
import { getToken } from './api/getToken';
import { sleep as _sleep } from './util';
import { GetReviewsParams, Review, GetReviewsResponse } from './types';

export const getReviews = async ({
  country,
  appId,
  appName,
  numberOfReviews = 0,
  sleep = 1,
}: GetReviewsParams) => {
  const token = await getToken({
    country,
    appId,
    appName,
  });

  const reviews: Review[] = [];
  const offsetRegex = /offset=(\d+)/;
  let offset = 0;
  let reviewCount = 0;

  while (true) {
    const result: GetReviewsResponse = await fetchReviews({
      country,
      appId,
      appName,
      token,
      offset,
    });

    if (Array.isArray(result?.data)) {
      result.data.forEach((obj) => {
        reviews.push(obj);
        reviewCount++;
      });
    }

    if (numberOfReviews > 0 && reviewCount >= numberOfReviews) {
      break;
    }

    const match = result?.next?.match(offsetRegex);
    if (match) {
      offset = Number(match[1]);
    } else {
      break;
    }

    await _sleep(sleep);
  }

  return reviews;
};
