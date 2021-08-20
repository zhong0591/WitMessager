'use strict';

//const WIT_TOKEN = process.env.WIT_TOKEN

const WIT_TOKEN = "4CZBLDYNJRB63SH3ZNWUWDXYDLSYQ2NT";
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAIMdT8oCLEBAG8l9YSHAZAVlAZAKSFF75QFhMDGiyqO6Ox3cNNNlcNYojW3hQAuRlFhjmDtG4Rfj62xp2GM0pqhiePucZArLCoE8MwZBvx6sLuxFJmMfSKB3WVpDONGoEGlfd5mYgqXXhMZCEiueoeVIeFPhHzRRVW23yUB4dFdOmomYH5Lx';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}