/**
 * Available query parameters for the Brave Search Suggest API.
 *
 * @param {string} q - The user's suggest search query term. Query can not be empty. The max query length is 400 characters and word limit is 50.
 * @param {string} lang - The suggest search language preference, where potentially the results could come from.
 * The 2 or more character language code for which the suggest search results are provided. This is a just a hint for calculating suggest responses. For a list of possible values, see Language Codes. Defaults to en.
 * @param {number} count - The number of suggestions returned. This is done as best effort. Default is 5 and the maximum is 20.
 * @param {boolean} rich - Whether to enhance suggestions with rich results. The default is false. This is an extra option in plan which needs to be enabled.
 * @param {string} country - The suggest search query country, where potentially the results could come from.
 * The country string is limited to 2 character country codes of supported countries. This is a just a hint for calculating suggest responses. For a list of supported supported values, see Country Codes. Defaults to US.
 */
export type SuggestSearchApiQueryParams = {
  q: string;
  lang?: string;
  count?: number;
  rich?: boolean;
  country?: string;
};

/************************************ Suggest Search API Request Headers *******************************/

/**
 * Accept Header
 * The default supported media type is application/json.
 */
type AcceptHeader = {
  Accept?: string; // application/json
};

/**
 * Accept-Encoding Header
 * The supported compression type is gzip.
 */
type AcceptEncodingHeader = {
  "Accept-Encoding"?: string; // gzip
};

/**
 * Api-Version Header
 * The Brave Suggest Search API version to use.
 * This is denoted by the format YYYY-MM-DD. Default is the latest that is available.
 */
type ApiVersionHeader = {
  "Api-Version"?: string; // YYYY-MM-DD
};

/**
 * Cache-Control Header
 * Search will return cached suggestions by default.
 * To prevent caching set the Cache-Control header to no-cache.
 * This is currently done as best effort.
 */
type CacheControlHeader = {
  "Cache-Control"?: string; // no-cache
};

/**
 * User-Agent Header
 * The user agent of the client sending the request.
 * Search can utilize the user agent to provide a different experience depending on the client sending the request.
 * The user agent should follow the commonly used browser agent strings on each platform.
 */
type UserAgentHeader = {
  "User-Agent"?: string; // User agent string examples by platform
};

/**
 * X-Subscription-Token Header
 * Subscribed plan secret token to authenticate the request.
 */
type SubscriptionTokenHeader = {
  "X-Subscription-Token": string; // Authentication token
};

/**
 * Suggest Search API Request Headers
 * The following type includes all the optional headers for the Suggest Search API.
 */
export type SuggestSearchApiHeaders = AcceptHeader & AcceptEncodingHeader & ApiVersionHeader & CacheControlHeader & UserAgentHeader & SubscriptionTokenHeader;

/************************************ Suggest Search API Response *******************************/

// Query model
type Query = {
  original: string; // The original query that was requested.
};

// SuggestResult model
export type SuggestResult = {
  query: string; // Suggested query completion.
  is_entity: boolean; // Whether the suggested enriched query is an entity.
  title: string; // The suggested query enriched title.
  description: string; // The suggested query enriched description.
  img: string; // The suggested query enriched image URL.
};

// SuggestSearchApiResponse model
export type SuggestSearchApiResponse = {
  type: "suggest"; // The type of search API result. The value is always 'suggest'.
  query: Query; // Suggest search query string. Only the original query is returned.
  results: SuggestResult[]; // The list of suggestions for the given query.
};
