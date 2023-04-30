# app-store-scraper-reviews

Simple Node.js module to scrape reviews from the App Store. Provides the ability to get all reviews or a number of reviews for a given app. Written in TypeScript and the API response is fully typed.

## Usage

```ts
import { getReviews } from 'app-store-scraper-reviews';

const reviews = await getReviews({
  country: 'us',
  appId: '1271273970',
  appName: 'hey-camera',
});
```

### Optional parameters

`numberOfReviews` (number) - The number of reviews to get. If this is not provided then all reviews will be fetched.

`sleep` (number) - The time in ms to wait before each API request to get reviews. 20 are grabbed per request.

### Response shape

```ts
[
  {
    id: string;
    type: string;
    attributes: {
      date: string;
      review: string;
      rating: number;
      isEdited: boolean;
      title: string;
      userName: string;
    }
  }
];
```

## FAQ

### How is this different than getting reviews using [app-store-scraper](https://github.com/facundoolano/app-store-scraper)?

That Node.js module uses a separate API and can get up to 500 reviews maximum. This module allows getting _all_ reviews by using a separate API and technique.

At a high level this is a port of the [python app-store-scraper](https://github.com/cowboy-bebug/app-store-scraper). I implemented that technique and approach here for this Node.js module.

This module [does what SerpApi sells](https://serpapi.com/blog/web-scraping-apple-app-store-product-info-and-reviews-with-nodejs/) but this is free.

## License

[MIT](LICENSE.md)
