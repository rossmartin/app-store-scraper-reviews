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

### Optional Parameters

`numberOfReviews` (number) - The number of reviews to get. If this is not provided then all reviews will be fetched.

`sleep` (number) - The time in ms to wait before each API request to get reviews. 20 are grabbed per request.

### Response Example

```json
[
  {
    "id": "6637304379",
    "type": "user-reviews",
    "attributes": {
      "date": "2020-11-12T16:15:38Z",
      "review": "When Siri didn’t do this, I was glad to find an app that would accomplish it and set up a Siri command to do it as well. \n\nJust wish I could use options like Portrait mode on my iPhone.",
      "rating": 4,
      "isEdited": false,
      "title": "Glad to find",
      "userName": "Joe Wi"
    }
  }
]
```

## FAQ

### How is this different than getting reviews using [app-store-scraper](https://github.com/facundoolano/app-store-scraper)?

That Node.js module uses a separate API and can get up to 500 reviews maximum. This module allows getting _all_ reviews by using a separate API and technique.

At a high level this is a port of the [python app-store-scraper](https://github.com/cowboy-bebug/app-store-scraper). I implemented that technique and approach here for this Node.js module.

This module [does what SerpApi sells](https://serpapi.com/blog/web-scraping-apple-app-store-product-info-and-reviews-with-nodejs/) but this is free.

### Why is the review count different than what is seen on the landing page?

The review count seen on the landing page differs from the actual number of reviews fetched. This is because only some users who rated the app also leave reviews.

### Why do I get more reviews returned than what is supplied to the `numberOfReviews` param?

The maximum number of reviews fetched per request is 20. To minimise the number of calls, the limit of 20 is hardcoded. It is possible to get more results than what is passed to `numberOfReviews`.

## License

[MIT](LICENSE.md)
