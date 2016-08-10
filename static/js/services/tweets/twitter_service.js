'use strict';
var app = angular.module("TweetExplorerApp");

/**
Service for accessing the twitter public REST apis.
*/
app.factory('TwitterService',
    function ($http, $q) {
    /**
     * fetches last n tweets json using twitter rest api
     * @param {String } screen_name
     * @param {Number} tweetCount
     * returns promise of tweets json
     */
     var tweets = [
  {
    "created_at": "Sat Jul 30 21:50:07 +0000 2016",
    "id": 759506382932549600,
    "id_str": "759506382932549633",
    "text": "AppDirect is looking for: Product Designer\nhttps://t.co/MWIeaeuTPT #job",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "job",
          "indices": [
            67,
            71
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/MWIeaeuTPT",
          "expanded_url": "http://app.jobvite.com/m?38f39iwm",
          "display_url": "app.jobvite.com/m?38f39iwm",
          "indices": [
            43,
            66
          ]
        }
      ]
    },
    "source": "<a href=\"http://jobvite.com\" rel=\"nofollow\">Jobvite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jul 28 22:01:36 +0000 2016",
    "id": 758784498679083000,
    "id_str": "758784498679083010",
    "text": ".@AppDirect Co-CEO @DanielSaks on how to sell #SaaS through the channel via @Entrepreneur: https://t.co/nD7SNsvBMv https://t.co/H8jaItK7QZ",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "SaaS",
          "indices": [
            46,
            51
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            1,
            11
          ]
        },
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            19,
            30
          ]
        },
        {
          "screen_name": "Entrepreneur",
          "name": "Entrepreneur",
          "id": 19407053,
          "id_str": "19407053",
          "indices": [
            76,
            89
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/nD7SNsvBMv",
          "expanded_url": "http://appd.it/2akom4d",
          "display_url": "appd.it/2akom4d",
          "indices": [
            91,
            114
          ]
        }
      ],
      "media": [
        {
          "id": 758784494744825900,
          "id_str": "758784494744825856",
          "indices": [
            115,
            138
          ],
          "media_url": "http://pbs.twimg.com/media/Coe-ek5W8AA-Q0R.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Coe-ek5W8AA-Q0R.jpg",
          "url": "https://t.co/H8jaItK7QZ",
          "display_url": "pic.twitter.com/H8jaItK7QZ",
          "expanded_url": "http://twitter.com/AppDirect/status/758784498679083010/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 454,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 800,
              "resize": "fit"
            },
            "large": {
              "w": 1300,
              "h": 867,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 758784494744825900,
          "id_str": "758784494744825856",
          "indices": [
            115,
            138
          ],
          "media_url": "http://pbs.twimg.com/media/Coe-ek5W8AA-Q0R.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Coe-ek5W8AA-Q0R.jpg",
          "url": "https://t.co/H8jaItK7QZ",
          "display_url": "pic.twitter.com/H8jaItK7QZ",
          "expanded_url": "http://twitter.com/AppDirect/status/758784498679083010/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 454,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 800,
              "resize": "fit"
            },
            "large": {
              "w": 1300,
              "h": 867,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 7,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Jul 11 20:29:41 +0000 2016",
    "id": 752600771699572700,
    "id_str": "752600771699572736",
    "text": "RT @ElliotDCurtis: .#WPC16 attendees learning about @AppDirect for CSP partners https://t.co/HsPwDzJMDC",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "WPC16",
          "indices": [
            20,
            26
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "ElliotDCurtis",
          "name": "Elliot Curtis",
          "id": 1669723351,
          "id_str": "1669723351",
          "indices": [
            3,
            17
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            52,
            62
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 752570381605765100,
          "id_str": "752570381605765120",
          "indices": [
            80,
            103
          ],
          "media_url": "http://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
          "url": "https://t.co/HsPwDzJMDC",
          "display_url": "pic.twitter.com/HsPwDzJMDC",
          "expanded_url": "http://twitter.com/ElliotDCurtis/status/752570383769997312/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1024,
              "h": 768,
              "resize": "fit"
            },
            "medium": {
              "w": 1024,
              "h": 768,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 680,
              "h": 510,
              "resize": "fit"
            }
          },
          "source_status_id": 752570383769997300,
          "source_status_id_str": "752570383769997312",
          "source_user_id": 1669723351,
          "source_user_id_str": "1669723351"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 752570381605765100,
          "id_str": "752570381605765120",
          "indices": [
            80,
            103
          ],
          "media_url": "http://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
          "url": "https://t.co/HsPwDzJMDC",
          "display_url": "pic.twitter.com/HsPwDzJMDC",
          "expanded_url": "http://twitter.com/ElliotDCurtis/status/752570383769997312/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1024,
              "h": 768,
              "resize": "fit"
            },
            "medium": {
              "w": 1024,
              "h": 768,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 680,
              "h": 510,
              "resize": "fit"
            }
          },
          "source_status_id": 752570383769997300,
          "source_status_id_str": "752570383769997312",
          "source_user_id": 1669723351,
          "source_user_id_str": "1669723351"
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Mon Jul 11 18:28:56 +0000 2016",
      "id": 752570383769997300,
      "id_str": "752570383769997312",
      "text": ".#WPC16 attendees learning about @AppDirect for CSP partners https://t.co/HsPwDzJMDC",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "WPC16",
            "indices": [
              1,
              7
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              33,
              43
            ]
          }
        ],
        "urls": [],
        "media": [
          {
            "id": 752570381605765100,
            "id_str": "752570381605765120",
            "indices": [
              61,
              84
            ],
            "media_url": "http://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
            "url": "https://t.co/HsPwDzJMDC",
            "display_url": "pic.twitter.com/HsPwDzJMDC",
            "expanded_url": "http://twitter.com/ElliotDCurtis/status/752570383769997312/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1024,
                "h": 768,
                "resize": "fit"
              },
              "medium": {
                "w": 1024,
                "h": 768,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 510,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 752570381605765100,
            "id_str": "752570381605765120",
            "indices": [
              61,
              84
            ],
            "media_url": "http://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CnGqxlgXgAAomes.jpg",
            "url": "https://t.co/HsPwDzJMDC",
            "display_url": "pic.twitter.com/HsPwDzJMDC",
            "expanded_url": "http://twitter.com/ElliotDCurtis/status/752570383769997312/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1024,
                "h": 768,
                "resize": "fit"
              },
              "medium": {
                "w": 1024,
                "h": 768,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 510,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1669723351,
        "id_str": "1669723351",
        "name": "Elliot Curtis",
        "screen_name": "ElliotDCurtis",
        "location": "The Emerald City",
        "description": "Hosting, Cloud and tech industry business/sales/marketing fanatic. Leadership development dabbler. Culture eats strategy for lunch.",
        "url": "https://t.co/VpPUTiXx8q",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/VpPUTiXx8q",
                "expanded_url": "http://www.appdirect.com",
                "display_url": "appdirect.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 1147,
        "friends_count": 1882,
        "listed_count": 71,
        "created_at": "Wed Aug 14 06:34:10 +0000 2013",
        "favourites_count": 27,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 1256,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/722966515742429184/EVb-yRyz_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/722966515742429184/EVb-yRyz_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1669723351/1383957559",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 3,
      "favorite_count": 3,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 3,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Jul 11 20:29:37 +0000 2016",
    "id": 752600756092596200,
    "id_str": "752600756092596225",
    "text": "RT @ChemSanch: Toronto Blue Jays Stadium with @AppDirect @ProdwareES https://t.co/aAX4LWpCMp",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "ChemSanch",
          "name": "Jose M Sanchez",
          "id": 81082396,
          "id_str": "81082396",
          "indices": [
            3,
            13
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            46,
            56
          ]
        },
        {
          "screen_name": "ProdwareES",
          "name": "ProdwareES",
          "id": 135877456,
          "id_str": "135877456",
          "indices": [
            57,
            68
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 752178175883546600,
          "id_str": "752178175883546625",
          "indices": [
            69,
            92
          ],
          "media_url": "http://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
          "url": "https://t.co/aAX4LWpCMp",
          "display_url": "pic.twitter.com/aAX4LWpCMp",
          "expanded_url": "http://twitter.com/ChemSanch/status/752178201766625280/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 510,
              "resize": "fit"
            },
            "large": {
              "w": 2048,
              "h": 1536,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 900,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          },
          "source_status_id": 752178201766625300,
          "source_status_id_str": "752178201766625280",
          "source_user_id": 81082396,
          "source_user_id_str": "81082396"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 752178175883546600,
          "id_str": "752178175883546625",
          "indices": [
            69,
            92
          ],
          "media_url": "http://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
          "url": "https://t.co/aAX4LWpCMp",
          "display_url": "pic.twitter.com/aAX4LWpCMp",
          "expanded_url": "http://twitter.com/ChemSanch/status/752178201766625280/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 510,
              "resize": "fit"
            },
            "large": {
              "w": 2048,
              "h": 1536,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 900,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          },
          "source_status_id": 752178201766625300,
          "source_status_id_str": "752178201766625280",
          "source_user_id": 81082396,
          "source_user_id_str": "81082396"
        },
        {
          "id": 752178175833215000,
          "id_str": "752178175833214976",
          "indices": [
            69,
            92
          ],
          "media_url": "http://pbs.twimg.com/media/CnBGENJXEAAAXDe.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CnBGENJXEAAAXDe.jpg",
          "url": "https://t.co/aAX4LWpCMp",
          "display_url": "pic.twitter.com/aAX4LWpCMp",
          "expanded_url": "http://twitter.com/ChemSanch/status/752178201766625280/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 900,
              "h": 1200,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1536,
              "h": 2048,
              "resize": "fit"
            },
            "small": {
              "w": 510,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 752178201766625300,
          "source_status_id_str": "752178201766625280",
          "source_user_id": 81082396,
          "source_user_id_str": "81082396"
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Jul 10 16:30:32 +0000 2016",
      "id": 752178201766625300,
      "id_str": "752178201766625280",
      "text": "Toronto Blue Jays Stadium with @AppDirect @ProdwareES https://t.co/aAX4LWpCMp",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              31,
              41
            ]
          },
          {
            "screen_name": "ProdwareES",
            "name": "ProdwareES",
            "id": 135877456,
            "id_str": "135877456",
            "indices": [
              42,
              53
            ]
          }
        ],
        "urls": [],
        "media": [
          {
            "id": 752178175883546600,
            "id_str": "752178175883546625",
            "indices": [
              54,
              77
            ],
            "media_url": "http://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
            "url": "https://t.co/aAX4LWpCMp",
            "display_url": "pic.twitter.com/aAX4LWpCMp",
            "expanded_url": "http://twitter.com/ChemSanch/status/752178201766625280/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 510,
                "resize": "fit"
              },
              "large": {
                "w": 2048,
                "h": 1536,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 900,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 752178175883546600,
            "id_str": "752178175883546625",
            "indices": [
              54,
              77
            ],
            "media_url": "http://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CnBGENVXEAEveXA.jpg",
            "url": "https://t.co/aAX4LWpCMp",
            "display_url": "pic.twitter.com/aAX4LWpCMp",
            "expanded_url": "http://twitter.com/ChemSanch/status/752178201766625280/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 510,
                "resize": "fit"
              },
              "large": {
                "w": 2048,
                "h": 1536,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 900,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              }
            }
          },
          {
            "id": 752178175833215000,
            "id_str": "752178175833214976",
            "indices": [
              54,
              77
            ],
            "media_url": "http://pbs.twimg.com/media/CnBGENJXEAAAXDe.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CnBGENJXEAAAXDe.jpg",
            "url": "https://t.co/aAX4LWpCMp",
            "display_url": "pic.twitter.com/aAX4LWpCMp",
            "expanded_url": "http://twitter.com/ChemSanch/status/752178201766625280/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 900,
                "h": 1200,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1536,
                "h": 2048,
                "resize": "fit"
              },
              "small": {
                "w": 510,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 81082396,
        "id_str": "81082396",
        "name": "Jose M Sanchez",
        "screen_name": "ChemSanch",
        "location": "Madrid",
        "description": "Corporate VP Prodware & GM in Prodware Spain. Software, NewMarketing, Customer Centric Processes, Retail, Sustainability and Racehorses",
        "url": "http://t.co/IkfVnzAUBR",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/IkfVnzAUBR",
                "expanded_url": "http://www.prodware.es",
                "display_url": "prodware.es",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 1855,
        "friends_count": 1998,
        "listed_count": 249,
        "created_at": "Fri Oct 09 11:01:55 +0000 2009",
        "favourites_count": 14211,
        "utc_offset": 7200,
        "time_zone": "Madrid",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 10167,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "022330",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme15/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme15/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/694255875205304320/EV0DmXZt_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/694255875205304320/EV0DmXZt_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/81082396/1382309261",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "A8C7F7",
        "profile_sidebar_fill_color": "C0DFEC",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2,
      "favorite_count": 2,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 2,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jul 07 21:36:00 +0000 2016",
    "id": 751167911184695300,
    "id_str": "751167911184695296",
    "text": "RT @ElliotDCurtis: Check out the @AppDirect demo for #cloud partners in the #MPN booth #WPC16 Mon &amp; Wed 2pm  https://t.co/mufDwY176M",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "cloud",
          "indices": [
            53,
            59
          ]
        },
        {
          "text": "MPN",
          "indices": [
            76,
            80
          ]
        },
        {
          "text": "WPC16",
          "indices": [
            87,
            93
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "ElliotDCurtis",
          "name": "Elliot Curtis",
          "id": 1669723351,
          "id_str": "1669723351",
          "indices": [
            3,
            17
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            33,
            43
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/mufDwY176M",
          "expanded_url": "http://go.appdirect.com/microsoft",
          "display_url": "go.appdirect.com/microsoft",
          "indices": [
            113,
            136
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Thu Jul 07 19:18:28 +0000 2016",
      "id": 751133300953980900,
      "id_str": "751133300953980928",
      "text": "Check out the @AppDirect demo for #cloud partners in the #MPN booth #WPC16 Mon &amp; Wed 2pm  https://t.co/mufDwY176M",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "cloud",
            "indices": [
              34,
              40
            ]
          },
          {
            "text": "MPN",
            "indices": [
              57,
              61
            ]
          },
          {
            "text": "WPC16",
            "indices": [
              68,
              74
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              14,
              24
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/mufDwY176M",
            "expanded_url": "http://go.appdirect.com/microsoft",
            "display_url": "go.appdirect.com/microsoft",
            "indices": [
              94,
              117
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1669723351,
        "id_str": "1669723351",
        "name": "Elliot Curtis",
        "screen_name": "ElliotDCurtis",
        "location": "The Emerald City",
        "description": "Hosting, Cloud and tech industry business/sales/marketing fanatic. Leadership development dabbler. Culture eats strategy for lunch.",
        "url": "https://t.co/VpPUTiXx8q",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/VpPUTiXx8q",
                "expanded_url": "http://www.appdirect.com",
                "display_url": "appdirect.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 1147,
        "friends_count": 1882,
        "listed_count": 71,
        "created_at": "Wed Aug 14 06:34:10 +0000 2013",
        "favourites_count": 27,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 1256,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/722966515742429184/EVb-yRyz_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/722966515742429184/EVb-yRyz_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1669723351/1383957559",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 4,
      "favorite_count": 4,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 4,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 30 21:50:07 +0000 2016",
    "id": 748634748977840100,
    "id_str": "748634748977840128",
    "text": "AppDirect is looking for: Senior Backend Engineer\nhttps://t.co/mKClxClV8K #job",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "job",
          "indices": [
            74,
            78
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/mKClxClV8K",
          "expanded_url": "http://app.jobvite.com/m?3wxH6iwD",
          "display_url": "app.jobvite.com/m?3wxH6iwD",
          "indices": [
            50,
            73
          ]
        }
      ]
    },
    "source": "<a href=\"http://jobvite.com\" rel=\"nofollow\">Jobvite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 23 23:01:06 +0000 2016",
    "id": 746115897216012300,
    "id_str": "746115897216012288",
    "text": "Great discussion today at #tractionconf btwn @danielsaks + Bloomberg's @GerritD about selling to enterprises! https://t.co/fm1WIt9fdT",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "tractionconf",
          "indices": [
            26,
            39
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            45,
            56
          ]
        },
        {
          "screen_name": "GerritD",
          "name": "Gerrit De Vynck",
          "id": 18699145,
          "id_str": "18699145",
          "indices": [
            71,
            79
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 746115523922952200,
          "id_str": "746115523922952192",
          "indices": [
            110,
            133
          ],
          "media_url": "http://pbs.twimg.com/media/Clq8HazVAAAI5bZ.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Clq8HazVAAAI5bZ.jpg",
          "url": "https://t.co/fm1WIt9fdT",
          "display_url": "pic.twitter.com/fm1WIt9fdT",
          "expanded_url": "http://twitter.com/AppDirect/status/746115897216012288/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 750,
              "h": 703,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 750,
              "h": 703,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 637,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 746115523922952200,
          "id_str": "746115523922952192",
          "indices": [
            110,
            133
          ],
          "media_url": "http://pbs.twimg.com/media/Clq8HazVAAAI5bZ.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Clq8HazVAAAI5bZ.jpg",
          "url": "https://t.co/fm1WIt9fdT",
          "display_url": "pic.twitter.com/fm1WIt9fdT",
          "expanded_url": "http://twitter.com/AppDirect/status/746115897216012288/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 750,
              "h": 703,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 750,
              "h": 703,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 637,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 6,
    "favorite_count": 10,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 23 21:51:41 +0000 2016",
    "id": 746098426140590100,
    "id_str": "746098426140590081",
    "text": "RT @DEEPCentre: Insightful pres'n by @appdirect's Canadian ceo @danielsaks on laying groundwork for enterprise sales: \"you need to speak th…",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "DEEPCentre",
          "name": "The DEEP Centre",
          "id": 608441688,
          "id_str": "608441688",
          "indices": [
            3,
            14
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            37,
            47
          ]
        },
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            63,
            74
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Thu Jun 23 17:20:32 +0000 2016",
      "id": 746030188128010200,
      "id_str": "746030188128010241",
      "text": "Insightful pres'n by @appdirect's Canadian ceo @danielsaks on laying groundwork for enterprise sales: \"you need to speak their language\"",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              21,
              31
            ]
          },
          {
            "screen_name": "danielsaks",
            "name": "Daniel Saks",
            "id": 251849264,
            "id_str": "251849264",
            "indices": [
              47,
              58
            ]
          }
        ],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 608441688,
        "id_str": "608441688",
        "name": "The DEEP Centre",
        "screen_name": "DEEPCentre",
        "location": "",
        "description": "Centre for Digital Entrepreneurship and Economic Performance - helping jurisdictions build fertile environments for innovation, growth and job creation.",
        "url": "http://t.co/ZaDuEzbUz6",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/ZaDuEzbUz6",
                "expanded_url": "http://deepcentre.com",
                "display_url": "deepcentre.com",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 635,
        "friends_count": 568,
        "listed_count": 59,
        "created_at": "Thu Jun 14 18:15:04 +0000 2012",
        "favourites_count": 7,
        "utc_offset": -10800,
        "time_zone": "Atlantic Time (Canada)",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 986,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/3425135618/877199e7bae4e86418119ccc62ee5e7c_normal.jpeg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3425135618/877199e7bae4e86418119ccc62ee5e7c_normal.jpeg",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 23 21:51:30 +0000 2016",
    "id": 746098379554422800,
    "id_str": "746098379554422784",
    "text": "RT @cptmbl: Magnetic momentum, focus and positive attitude have been key to our success @danielsaks #tractionconf @AppDirect https://t.co/Y…",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "tractionconf",
          "indices": [
            100,
            113
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "cptmbl",
          "name": "Adrian Moise",
          "id": 149627055,
          "id_str": "149627055",
          "indices": [
            3,
            10
          ]
        },
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            88,
            99
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            114,
            124
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 746029247001571300,
          "id_str": "746029247001571328",
          "indices": [
            125,
            140
          ],
          "media_url": "http://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
          "media_url_https": "https://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
          "url": "https://t.co/YLPTQ7FC8g",
          "display_url": "pic.twitter.com/YLPTQ7FC8g",
          "expanded_url": "http://twitter.com/cptmbl/status/746029250453508096/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 1024,
              "h": 538,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1024,
              "h": 538,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 357,
              "resize": "fit"
            }
          },
          "source_status_id": 746029250453508100,
          "source_status_id_str": "746029250453508096",
          "source_user_id": 149627055,
          "source_user_id_str": "149627055"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 746029247001571300,
          "id_str": "746029247001571328",
          "indices": [
            125,
            140
          ],
          "media_url": "http://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
          "media_url_https": "https://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
          "url": "https://t.co/YLPTQ7FC8g",
          "display_url": "pic.twitter.com/YLPTQ7FC8g",
          "expanded_url": "http://twitter.com/cptmbl/status/746029250453508096/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 1024,
              "h": 538,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1024,
              "h": 538,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 357,
              "resize": "fit"
            }
          },
          "source_status_id": 746029250453508100,
          "source_status_id_str": "746029250453508096",
          "source_user_id": 149627055,
          "source_user_id_str": "149627055"
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Thu Jun 23 17:16:48 +0000 2016",
      "id": 746029250453508100,
      "id_str": "746029250453508096",
      "text": "Magnetic momentum, focus and positive attitude have been key to our success @danielsaks #tractionconf @AppDirect https://t.co/YLPTQ7FC8g",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "tractionconf",
            "indices": [
              88,
              101
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "danielsaks",
            "name": "Daniel Saks",
            "id": 251849264,
            "id_str": "251849264",
            "indices": [
              76,
              87
            ]
          },
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              102,
              112
            ]
          }
        ],
        "urls": [],
        "media": [
          {
            "id": 746029247001571300,
            "id_str": "746029247001571328",
            "indices": [
              113,
              136
            ],
            "media_url": "http://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
            "media_url_https": "https://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
            "url": "https://t.co/YLPTQ7FC8g",
            "display_url": "pic.twitter.com/YLPTQ7FC8g",
            "expanded_url": "http://twitter.com/cptmbl/status/746029250453508096/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 1024,
                "h": 538,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1024,
                "h": 538,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 357,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 746029247001571300,
            "id_str": "746029247001571328",
            "indices": [
              113,
              136
            ],
            "media_url": "http://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
            "media_url_https": "https://pbs.twimg.com/media/ClptpcOUsAAfc7E.jpg",
            "url": "https://t.co/YLPTQ7FC8g",
            "display_url": "pic.twitter.com/YLPTQ7FC8g",
            "expanded_url": "http://twitter.com/cptmbl/status/746029250453508096/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 1024,
                "h": 538,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1024,
                "h": 538,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 357,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 149627055,
        "id_str": "149627055",
        "name": "Adrian Moise",
        "screen_name": "cptmbl",
        "location": "Vancouver, Canada",
        "description": "CEO of @AequilibriumInc. We build winning digital products. Fast. Expertise in Agile, mobile, cloud and UX. Verticals - FinTech, eComm, retail, gaming, eHealth",
        "url": "https://t.co/B1POJr38RT",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/B1POJr38RT",
                "expanded_url": "http://ca.linkedin.com/in/amoise",
                "display_url": "ca.linkedin.com/in/amoise",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 151,
        "friends_count": 181,
        "listed_count": 33,
        "created_at": "Sat May 29 19:47:01 +0000 2010",
        "favourites_count": 45,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 1649,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "3B94D9",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/541058633681756160/maGrWCc2.png",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/541058633681756160/maGrWCc2.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/2264772673/m9oauq3iwjwg03fqpjcw_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/2264772673/m9oauq3iwjwg03fqpjcw_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/149627055/1417833075",
        "profile_link_color": "3B94D9",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": {
        "id": "1e5cb4d0509db554",
        "url": "https://api.twitter.com/1.1/geo/id/1e5cb4d0509db554.json",
        "place_type": "city",
        "name": "Vancouver",
        "full_name": "Vancouver, British Columbia",
        "country_code": "CA",
        "country": "Canada",
        "contained_within": [],
        "bounding_box": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.224215,
                49.19854
              ],
              [
                -123.022947,
                49.19854
              ],
              [
                -123.022947,
                49.316738
              ],
              [
                -123.224215,
                49.316738
              ]
            ]
          ]
        },
        "attributes": {}
      },
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 4,
      "favorite_count": 4,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 4,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 23 15:33:45 +0000 2016",
    "id": 746003316157603800,
    "id_str": "746003316157603840",
    "text": "@HernanMillas Apologies for the delay, our support team will be reaching out to you very shortly.",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "HernanMillas",
          "name": "Hernán Millas",
          "id": 65045398,
          "id_str": "65045398",
          "indices": [
            0,
            13
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": 745978634591141900,
    "in_reply_to_status_id_str": "745978634591141889",
    "in_reply_to_user_id": 65045398,
    "in_reply_to_user_id_str": "65045398",
    "in_reply_to_screen_name": "HernanMillas",
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 23 15:18:03 +0000 2016",
    "id": 745999365160861700,
    "id_str": "745999365160861697",
    "text": "If you're at #tractionconf make sure to catch @AppDirect Co-CEO @danielsaks discussion with @GerritD at 9:40! https://t.co/JgIk9vBbgs",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "tractionconf",
          "indices": [
            13,
            26
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            46,
            56
          ]
        },
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            64,
            75
          ]
        },
        {
          "screen_name": "GerritD",
          "name": "Gerrit De Vynck",
          "id": 18699145,
          "id_str": "18699145",
          "indices": [
            92,
            100
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 745998956551778300,
          "id_str": "745998956551778304",
          "indices": [
            110,
            133
          ],
          "media_url": "http://pbs.twimg.com/media/ClpSGTgUsAAQ8CH.jpg",
          "media_url_https": "https://pbs.twimg.com/media/ClpSGTgUsAAQ8CH.jpg",
          "url": "https://t.co/JgIk9vBbgs",
          "display_url": "pic.twitter.com/JgIk9vBbgs",
          "expanded_url": "http://twitter.com/AppDirect/status/745999365160861697/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 983,
              "h": 284,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 680,
              "h": 196,
              "resize": "fit"
            },
            "large": {
              "w": 983,
              "h": 284,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 745998956551778300,
          "id_str": "745998956551778304",
          "indices": [
            110,
            133
          ],
          "media_url": "http://pbs.twimg.com/media/ClpSGTgUsAAQ8CH.jpg",
          "media_url_https": "https://pbs.twimg.com/media/ClpSGTgUsAAQ8CH.jpg",
          "url": "https://t.co/JgIk9vBbgs",
          "display_url": "pic.twitter.com/JgIk9vBbgs",
          "expanded_url": "http://twitter.com/AppDirect/status/745999365160861697/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 983,
              "h": 284,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 680,
              "h": 196,
              "resize": "fit"
            },
            "large": {
              "w": 983,
              "h": 284,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Tue Jun 21 20:01:05 +0000 2016",
    "id": 745345816689152000,
    "id_str": "745345816689152003",
    "text": "Going to #tractionconf? Make sure to see @AppDirect Co-CEO @danielsaks discussing selling to enterprises w/ Bloomberg's @GerritD at 9:40am!",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "tractionconf",
          "indices": [
            9,
            22
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            41,
            51
          ]
        },
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            59,
            70
          ]
        },
        {
          "screen_name": "GerritD",
          "name": "Gerrit De Vynck",
          "id": 18699145,
          "id_str": "18699145",
          "indices": [
            120,
            128
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 2,
    "favorite_count": 3,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Tue Jun 14 21:08:12 +0000 2016",
    "id": 742825995158364200,
    "id_str": "742825995158364160",
    "text": "RT @danielsaks: Great interview + @AppDirect callout by @KKR_Co co-founder Henry Kravis (via @business)! https://t.co/4BtP8uUp9b",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            3,
            14
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            34,
            44
          ]
        },
        {
          "screen_name": "KKR_Co",
          "name": "KKR & Co.",
          "id": 769742234,
          "id_str": "769742234",
          "indices": [
            56,
            63
          ]
        },
        {
          "screen_name": "business",
          "name": "Bloomberg",
          "id": 34713362,
          "id_str": "34713362",
          "indices": [
            93,
            102
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/4BtP8uUp9b",
          "expanded_url": "http://www.bloomberg.com/features/2016-henry-kravis-interview/",
          "display_url": "bloomberg.com/features/2016-…",
          "indices": [
            105,
            128
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Tue Jun 14 19:21:38 +0000 2016",
      "id": 742799174802886700,
      "id_str": "742799174802886656",
      "text": "Great interview + @AppDirect callout by @KKR_Co co-founder Henry Kravis (via @business)! https://t.co/4BtP8uUp9b",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              18,
              28
            ]
          },
          {
            "screen_name": "KKR_Co",
            "name": "KKR & Co.",
            "id": 769742234,
            "id_str": "769742234",
            "indices": [
              40,
              47
            ]
          },
          {
            "screen_name": "business",
            "name": "Bloomberg",
            "id": 34713362,
            "id_str": "34713362",
            "indices": [
              77,
              86
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/4BtP8uUp9b",
            "expanded_url": "http://www.bloomberg.com/features/2016-henry-kravis-interview/",
            "display_url": "bloomberg.com/features/2016-…",
            "indices": [
              89,
              112
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 251849264,
        "id_str": "251849264",
        "name": "Daniel Saks",
        "screen_name": "danielsaks",
        "location": "San Francisco",
        "description": "Co-Founder of @appdirect - where businesses find, buy, and use web applications.  I tweet about #smallbusiness #cloud #saas #startup",
        "url": "http://t.co/JEfLTUxKd5",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/JEfLTUxKd5",
                "expanded_url": "http://about.me/danielsaks",
                "display_url": "about.me/danielsaks",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 984,
        "friends_count": 224,
        "listed_count": 66,
        "created_at": "Mon Feb 14 00:00:54 +0000 2011",
        "favourites_count": 22,
        "utc_offset": -25200,
        "time_zone": "Pacific Time (US & Canada)",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 296,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/418811193180962816/o0_WTaAo_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/418811193180962816/o0_WTaAo_normal.png",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 3,
      "favorite_count": 3,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 3,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Jun 13 23:33:28 +0000 2016",
    "id": 742500163076411400,
    "id_str": "742500163076411392",
    "text": "RT @senandy: KKR investor Henry Kravis on why @AppDirect is on the cutting edge of innovation, via Bloomberg @business https://t.co/XmVKlch…",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "senandy",
          "name": "Andy Sen",
          "id": 16089401,
          "id_str": "16089401",
          "indices": [
            3,
            11
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            46,
            56
          ]
        },
        {
          "screen_name": "business",
          "name": "Bloomberg",
          "id": 34713362,
          "id_str": "34713362",
          "indices": [
            109,
            118
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/XmVKlchuOI",
          "expanded_url": "http://bloom.bg/1UNdN66",
          "display_url": "bloom.bg/1UNdN66",
          "indices": [
            119,
            140
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Mon Jun 13 23:31:13 +0000 2016",
      "id": 742499597583450100,
      "id_str": "742499597583450112",
      "text": "KKR investor Henry Kravis on why @AppDirect is on the cutting edge of innovation, via Bloomberg @business https://t.co/XmVKlchuOI",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              33,
              43
            ]
          },
          {
            "screen_name": "business",
            "name": "Bloomberg",
            "id": 34713362,
            "id_str": "34713362",
            "indices": [
              96,
              105
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/XmVKlchuOI",
            "expanded_url": "http://bloom.bg/1UNdN66",
            "display_url": "bloom.bg/1UNdN66",
            "indices": [
              106,
              129
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 16089401,
        "id_str": "16089401",
        "name": "Andy Sen",
        "screen_name": "senandy",
        "location": "iPhone: 37.558979,-121.971581",
        "description": "AppDirect, SaaS, Marketplaces, Agilista",
        "url": "http://t.co/4P0JHpuyjy",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/4P0JHpuyjy",
                "expanded_url": "http://www.appdirect.com",
                "display_url": "appdirect.com",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 129,
        "friends_count": 117,
        "listed_count": 6,
        "created_at": "Mon Sep 01 23:11:44 +0000 2008",
        "favourites_count": 11,
        "utc_offset": -25200,
        "time_zone": "Pacific Time (US & Canada)",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 337,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/94057228/n504299164_9261_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/94057228/n504299164_9261_normal.jpg",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Jun 13 23:29:47 +0000 2016",
    "id": 742499236013543400,
    "id_str": "742499236013543424",
    "text": "Great interview with longtime investor Henry Kravis - touches on @AppDirect's innovation and explosive hiring https://t.co/xMdvz4Uwvt",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            65,
            75
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/xMdvz4Uwvt",
          "expanded_url": "http://appd.it/1YomlWL",
          "display_url": "appd.it/1YomlWL",
          "indices": [
            110,
            133
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 3,
    "favorite_count": 5,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Jun 13 23:28:59 +0000 2016",
    "id": 742499033302765600,
    "id_str": "742499033302765569",
    "text": "RT @business: \"Always worry about what you might lose on the downside,\" KKR's Henry Kravis says https://t.co/l3Rj5d47Ex https://t.co/FiU87q…",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "business",
          "name": "Bloomberg",
          "id": 34713362,
          "id_str": "34713362",
          "indices": [
            3,
            12
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/l3Rj5d47Ex",
          "expanded_url": "http://bloom.bg/1UdxNS7",
          "display_url": "bloom.bg/1UdxNS7",
          "indices": [
            96,
            119
          ]
        }
      ],
      "media": [
        {
          "id": 742317811456999400,
          "id_str": "742317811456999424",
          "indices": [
            120,
            140
          ],
          "media_url": "http://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
          "url": "https://t.co/FiU87qEC3z",
          "display_url": "pic.twitter.com/FiU87qEC3z",
          "expanded_url": "http://twitter.com/business/status/742317813998735361/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 340,
              "resize": "fit"
            },
            "large": {
              "w": 1012,
              "h": 506,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 1012,
              "h": 506,
              "resize": "fit"
            }
          },
          "source_status_id": 742317813998735400,
          "source_status_id_str": "742317813998735361",
          "source_user_id": 34713362,
          "source_user_id_str": "34713362"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 742317811456999400,
          "id_str": "742317811456999424",
          "indices": [
            120,
            140
          ],
          "media_url": "http://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
          "url": "https://t.co/FiU87qEC3z",
          "display_url": "pic.twitter.com/FiU87qEC3z",
          "expanded_url": "http://twitter.com/business/status/742317813998735361/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 340,
              "resize": "fit"
            },
            "large": {
              "w": 1012,
              "h": 506,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 1012,
              "h": 506,
              "resize": "fit"
            }
          },
          "source_status_id": 742317813998735400,
          "source_status_id_str": "742317813998735361",
          "source_user_id": 34713362,
          "source_user_id_str": "34713362"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Mon Jun 13 11:28:53 +0000 2016",
      "id": 742317813998735400,
      "id_str": "742317813998735361",
      "text": "\"Always worry about what you might lose on the downside,\" KKR's Henry Kravis says https://t.co/l3Rj5d47Ex https://t.co/FiU87qEC3z",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/l3Rj5d47Ex",
            "expanded_url": "http://bloom.bg/1UdxNS7",
            "display_url": "bloom.bg/1UdxNS7",
            "indices": [
              82,
              105
            ]
          }
        ],
        "media": [
          {
            "id": 742317811456999400,
            "id_str": "742317811456999424",
            "indices": [
              106,
              129
            ],
            "media_url": "http://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
            "url": "https://t.co/FiU87qEC3z",
            "display_url": "pic.twitter.com/FiU87qEC3z",
            "expanded_url": "http://twitter.com/business/status/742317813998735361/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 340,
                "resize": "fit"
              },
              "large": {
                "w": 1012,
                "h": 506,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 1012,
                "h": 506,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 742317811456999400,
            "id_str": "742317811456999424",
            "indices": [
              106,
              129
            ],
            "media_url": "http://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Ck0-HdZXAAAA1ja.jpg",
            "url": "https://t.co/FiU87qEC3z",
            "display_url": "pic.twitter.com/FiU87qEC3z",
            "expanded_url": "http://twitter.com/business/status/742317813998735361/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 340,
                "resize": "fit"
              },
              "large": {
                "w": 1012,
                "h": 506,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 1012,
                "h": 506,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 34713362,
        "id_str": "34713362",
        "name": "Bloomberg",
        "screen_name": "business",
        "location": "New York and the World",
        "description": "The first word in business news.",
        "url": "http://t.co/YFISwy1upH",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/YFISwy1upH",
                "expanded_url": "http://www.bloomberg.com",
                "display_url": "bloomberg.com",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 3311473,
        "friends_count": 825,
        "listed_count": 40429,
        "created_at": "Thu Apr 23 20:05:17 +0000 2009",
        "favourites_count": 300,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": false,
        "verified": true,
        "statuses_count": 164016,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": true,
        "profile_background_color": "101112",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/544322097833467904/1fjpNCr9.jpeg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/544322097833467904/1fjpNCr9.jpeg",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/714946924105883648/4fgNVF4H_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/714946924105883648/4fgNVF4H_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/34713362/1418609243",
        "profile_link_color": "3B94D9",
        "profile_sidebar_border_color": "DADADA",
        "profile_sidebar_fill_color": "EEEEEE",
        "profile_text_color": "666666",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 40,
      "favorite_count": 43,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 40,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed Jun 08 20:34:39 +0000 2016",
    "id": 740643223115305000,
    "id_str": "740643223115304960",
    "text": "RT @radialpoint: Supporting Success: Bundling Technical Support with Cloud Services via @AppDirect https://t.co/Y1CsT9Gc7u",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "radialpoint",
          "name": "Radialpoint",
          "id": 36573808,
          "id_str": "36573808",
          "indices": [
            3,
            15
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            88,
            98
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/Y1CsT9Gc7u",
          "expanded_url": "http://buff.ly/1U7HIbV",
          "display_url": "buff.ly/1U7HIbV",
          "indices": [
            99,
            122
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Wed Jun 08 18:27:25 +0000 2016",
      "id": 740611203433664500,
      "id_str": "740611203433664512",
      "text": "Supporting Success: Bundling Technical Support with Cloud Services via @AppDirect https://t.co/Y1CsT9Gc7u",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              71,
              81
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/Y1CsT9Gc7u",
            "expanded_url": "http://buff.ly/1U7HIbV",
            "display_url": "buff.ly/1U7HIbV",
            "indices": [
              82,
              105
            ]
          }
        ]
      },
      "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 36573808,
        "id_str": "36573808",
        "name": "Radialpoint",
        "screen_name": "radialpoint",
        "location": "Montreal",
        "description": "Radialpoint is now part of the @AppDirect family! Driving awesome #custserv + #support #experiences. Join our team! https://t.co/gVxlT8LFx1",
        "url": "http://t.co/h3737j2OJB",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/h3737j2OJB",
                "expanded_url": "http://www.radialpoint.com",
                "display_url": "radialpoint.com",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": [
              {
                "url": "https://t.co/gVxlT8LFx1",
                "expanded_url": "http://bit.ly/1MjVrbK",
                "display_url": "bit.ly/1MjVrbK",
                "indices": [
                  116,
                  139
                ]
              }
            ]
          }
        },
        "protected": false,
        "followers_count": 480,
        "friends_count": 492,
        "listed_count": 127,
        "created_at": "Thu Apr 30 02:50:08 +0000 2009",
        "favourites_count": 241,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 1586,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "000000",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/560451217990500352/lb25A_-U_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/560451217990500352/lb25A_-U_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/36573808/1453919666",
        "profile_link_color": "C50B2F",
        "profile_sidebar_border_color": "000000",
        "profile_sidebar_fill_color": "000000",
        "profile_text_color": "000000",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Tue Jun 07 17:01:31 +0000 2016",
    "id": 740227197982658600,
    "id_str": "740227197982658560",
    "text": ".@AppCarousel Expands Connected Car Platform With Monetization Suite https://t.co/uwnNYLbrXf",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "AppCarousel",
          "name": "AppCarousel",
          "id": 325820860,
          "id_str": "325820860",
          "indices": [
            1,
            13
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/uwnNYLbrXf",
          "expanded_url": "http://appd.it/1rbHSEP",
          "display_url": "appd.it/1rbHSEP",
          "indices": [
            69,
            92
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 02 17:06:49 +0000 2016",
    "id": 738416592497807400,
    "id_str": "738416592497807360",
    "text": "Honored that @AppDirect is included in @IDC Innovators report as a top player in cloud services enablement market https://t.co/xpS0pgfaj9",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            13,
            23
          ]
        },
        {
          "screen_name": "IDC",
          "name": "IDC",
          "id": 2670321,
          "id_str": "2670321",
          "indices": [
            39,
            43
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/xpS0pgfaj9",
          "expanded_url": "http://appd.it/22ArnzP",
          "display_url": "appd.it/22ArnzP",
          "indices": [
            114,
            137
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 5,
    "favorite_count": 6,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu Jun 02 17:05:43 +0000 2016",
    "id": 738416317263425500,
    "id_str": "738416317263425541",
    "text": "RT @SalesboxCRM: Salesbox CRM is now available on @AppDirect #salescrm #increasesales https://t.co/CqvPdIbnTh",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "salescrm",
          "indices": [
            61,
            70
          ]
        },
        {
          "text": "increasesales",
          "indices": [
            71,
            85
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "SalesboxCRM",
          "name": "Salesbox - Go beyond",
          "id": 2339314470,
          "id_str": "2339314470",
          "indices": [
            3,
            15
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            50,
            60
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 738309694293434400,
          "id_str": "738309694293434368",
          "indices": [
            86,
            109
          ],
          "media_url": "http://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
          "url": "https://t.co/CqvPdIbnTh",
          "display_url": "pic.twitter.com/CqvPdIbnTh",
          "expanded_url": "http://twitter.com/SalesboxCRM/status/738309698433212416/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1024,
              "h": 677,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 340,
              "h": 225,
              "resize": "fit"
            },
            "medium": {
              "w": 600,
              "h": 397,
              "resize": "fit"
            }
          },
          "source_status_id": 738309698433212400,
          "source_status_id_str": "738309698433212416",
          "source_user_id": 2339314470,
          "source_user_id_str": "2339314470"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 738309694293434400,
          "id_str": "738309694293434368",
          "indices": [
            86,
            109
          ],
          "media_url": "http://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
          "url": "https://t.co/CqvPdIbnTh",
          "display_url": "pic.twitter.com/CqvPdIbnTh",
          "expanded_url": "http://twitter.com/SalesboxCRM/status/738309698433212416/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1024,
              "h": 677,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 340,
              "h": 225,
              "resize": "fit"
            },
            "medium": {
              "w": 600,
              "h": 397,
              "resize": "fit"
            }
          },
          "source_status_id": 738309698433212400,
          "source_status_id_str": "738309698433212416",
          "source_user_id": 2339314470,
          "source_user_id_str": "2339314470"
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Thu Jun 02 10:02:03 +0000 2016",
      "id": 738309698433212400,
      "id_str": "738309698433212416",
      "text": "Salesbox CRM is now available on @AppDirect #salescrm #increasesales https://t.co/CqvPdIbnTh",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "salescrm",
            "indices": [
              44,
              53
            ]
          },
          {
            "text": "increasesales",
            "indices": [
              54,
              68
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              33,
              43
            ]
          }
        ],
        "urls": [],
        "media": [
          {
            "id": 738309694293434400,
            "id_str": "738309694293434368",
            "indices": [
              69,
              92
            ],
            "media_url": "http://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
            "url": "https://t.co/CqvPdIbnTh",
            "display_url": "pic.twitter.com/CqvPdIbnTh",
            "expanded_url": "http://twitter.com/SalesboxCRM/status/738309698433212416/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1024,
                "h": 677,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 340,
                "h": 225,
                "resize": "fit"
              },
              "medium": {
                "w": 600,
                "h": 397,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 738309694293434400,
            "id_str": "738309694293434368",
            "indices": [
              69,
              92
            ],
            "media_url": "http://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cj8AwVaWYAA9TBL.jpg",
            "url": "https://t.co/CqvPdIbnTh",
            "display_url": "pic.twitter.com/CqvPdIbnTh",
            "expanded_url": "http://twitter.com/SalesboxCRM/status/738309698433212416/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1024,
                "h": 677,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 340,
                "h": 225,
                "resize": "fit"
              },
              "medium": {
                "w": 600,
                "h": 397,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 2339314470,
        "id_str": "2339314470",
        "name": "Salesbox - Go beyond",
        "screen_name": "SalesboxCRM",
        "location": "",
        "description": "Salesbox is the No.1 #CRM on #predictiveanalytics and #mobile for #successful #teams. Get #accurate #sales #forecasts based on facts, not guesswork.",
        "url": "http://t.co/IOiCLv67DH",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/IOiCLv67DH",
                "expanded_url": "http://www.salesbox.com",
                "display_url": "salesbox.com",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 1269,
        "friends_count": 1933,
        "listed_count": 92,
        "created_at": "Tue Feb 11 22:17:01 +0000 2014",
        "favourites_count": 221,
        "utc_offset": 7200,
        "time_zone": "Stockholm",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 1625,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "000000",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/709730160099123200/a8efL9G__normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/709730160099123200/a8efL9G__normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2339314470/1458047810",
        "profile_link_color": "173849",
        "profile_sidebar_border_color": "000000",
        "profile_sidebar_fill_color": "000000",
        "profile_text_color": "000000",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2,
      "favorite_count": 1,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 2,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Tue May 31 21:50:07 +0000 2016",
    "id": 737763111860600800,
    "id_str": "737763111860600832",
    "text": "AppDirect is looking for: Technical Account Manager\nhttps://t.co/5sxuG5K8JL #job",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "job",
          "indices": [
            76,
            80
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/5sxuG5K8JL",
          "expanded_url": "http://app.jobvite.com/m?32eT3iwZ",
          "display_url": "app.jobvite.com/m?32eT3iwZ",
          "indices": [
            52,
            75
          ]
        }
      ]
    },
    "source": "<a href=\"http://jobvite.com\" rel=\"nofollow\">Jobvite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu May 26 18:14:44 +0000 2016",
    "id": 735896971089694700,
    "id_str": "735896971089694724",
    "text": "Looking for an awesome opportunity to join a stellar product team, but only have a couple years of experience? https://t.co/DZHxEBPtJo",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/DZHxEBPtJo",
          "expanded_url": "http://appd.it/20H9CwX",
          "display_url": "appd.it/20H9CwX",
          "indices": [
            111,
            134
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Tue May 24 15:22:46 +0000 2016",
    "id": 735128918601130000,
    "id_str": "735128918601129984",
    "text": "Developer Certification Clears a Faster Path to Distribution https://t.co/ZcrqAuLM2L https://t.co/A6skoNnZ1t",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/ZcrqAuLM2L",
          "expanded_url": "http://appd.it/27QUZN3",
          "display_url": "appd.it/27QUZN3",
          "indices": [
            61,
            84
          ]
        }
      ],
      "media": [
        {
          "id": 735128918051684400,
          "id_str": "735128918051684352",
          "indices": [
            85,
            108
          ],
          "media_url": "http://pbs.twimg.com/media/CjOz2yiWgAAwG0j.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CjOz2yiWgAAwG0j.jpg",
          "url": "https://t.co/A6skoNnZ1t",
          "display_url": "pic.twitter.com/A6skoNnZ1t",
          "expanded_url": "http://twitter.com/AppDirect/status/735128918601129984/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 300,
              "h": 200,
              "resize": "fit"
            },
            "small": {
              "w": 300,
              "h": 200,
              "resize": "fit"
            },
            "large": {
              "w": 300,
              "h": 200,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 735128918051684400,
          "id_str": "735128918051684352",
          "indices": [
            85,
            108
          ],
          "media_url": "http://pbs.twimg.com/media/CjOz2yiWgAAwG0j.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CjOz2yiWgAAwG0j.jpg",
          "url": "https://t.co/A6skoNnZ1t",
          "display_url": "pic.twitter.com/A6skoNnZ1t",
          "expanded_url": "http://twitter.com/AppDirect/status/735128918601129984/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 300,
              "h": 200,
              "resize": "fit"
            },
            "small": {
              "w": 300,
              "h": 200,
              "resize": "fit"
            },
            "large": {
              "w": 300,
              "h": 200,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 2,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Mon May 23 15:47:51 +0000 2016",
    "id": 734772843205013500,
    "id_str": "734772843205013505",
    "text": "RT @Duftydownunder: @comcastbusiness expands its cloud business selling @Office365 through its @AppDirect powered cloud marketplace  https:…",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "Duftydownunder",
          "name": "Richard Dufty",
          "id": 2153636384,
          "id_str": "2153636384",
          "indices": [
            3,
            18
          ]
        },
        {
          "screen_name": "comcastbusiness",
          "name": "Comcast Business",
          "id": 599602890,
          "id_str": "599602890",
          "indices": [
            20,
            36
          ]
        },
        {
          "screen_name": "Office365",
          "name": "Office 365",
          "id": 137365854,
          "id_str": "137365854",
          "indices": [
            72,
            82
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            95,
            105
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/NKgtfPyTnq",
          "expanded_url": "http://www.fiercetelecom.com/press-releases/comcast-business-begins-selling-microsoft-office-365-through-its-cloud-mark",
          "display_url": "fiercetelecom.com/press-releases…",
          "indices": [
            139,
            140
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Mon May 23 07:04:26 +0000 2016",
      "id": 734641120152543200,
      "id_str": "734641120152543232",
      "text": "@comcastbusiness expands its cloud business selling @Office365 through its @AppDirect powered cloud marketplace  https://t.co/NKgtfPyTnq",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "comcastbusiness",
            "name": "Comcast Business",
            "id": 599602890,
            "id_str": "599602890",
            "indices": [
              0,
              16
            ]
          },
          {
            "screen_name": "Office365",
            "name": "Office 365",
            "id": 137365854,
            "id_str": "137365854",
            "indices": [
              52,
              62
            ]
          },
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              75,
              85
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/NKgtfPyTnq",
            "expanded_url": "http://www.fiercetelecom.com/press-releases/comcast-business-begins-selling-microsoft-office-365-through-its-cloud-mark",
            "display_url": "fiercetelecom.com/press-releases…",
            "indices": [
              113,
              136
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": 599602890,
      "in_reply_to_user_id_str": "599602890",
      "in_reply_to_screen_name": "comcastbusiness",
      "user": {
        "id": 2153636384,
        "id_str": "2153636384",
        "name": "Richard Dufty",
        "screen_name": "Duftydownunder",
        "location": "California",
        "description": "SVP WW Sales @ AppDirect. Aussie living in california. Global Traveler. Love all things cloud & hitting the beach in SoCal, Sydney or @ our HQ in San Francisco",
        "url": "https://t.co/VpPUTiXx8q",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/VpPUTiXx8q",
                "expanded_url": "http://www.appdirect.com",
                "display_url": "appdirect.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 242,
        "friends_count": 188,
        "listed_count": 17,
        "created_at": "Thu Oct 24 20:47:02 +0000 2013",
        "favourites_count": 159,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 392,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/467094727766978560/iJE_k94N_normal.jpeg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/467094727766978560/iJE_k94N_normal.jpeg",
        "profile_link_color": "0083B3",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 3,
      "favorite_count": 1,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 3,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed May 18 17:13:55 +0000 2016",
    "id": 732982560884686800,
    "id_str": "732982560884686856",
    "text": "RT @GoXendo: .@AppDirect announces new developer certification program to speed up go to market process https://t.co/s8dOGXYNbg",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "GoXendo",
          "name": "Xendo",
          "id": 1393153334,
          "id_str": "1393153334",
          "indices": [
            3,
            11
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            14,
            24
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/s8dOGXYNbg",
          "expanded_url": "http://bit.ly/1TZtXeN",
          "display_url": "bit.ly/1TZtXeN",
          "indices": [
            104,
            127
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Wed May 18 16:54:33 +0000 2016",
      "id": 732977688541978600,
      "id_str": "732977688541978628",
      "text": ".@AppDirect announces new developer certification program to speed up go to market process https://t.co/s8dOGXYNbg",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              1,
              11
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/s8dOGXYNbg",
            "expanded_url": "http://bit.ly/1TZtXeN",
            "display_url": "bit.ly/1TZtXeN",
            "indices": [
              91,
              114
            ]
          }
        ]
      },
      "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1393153334,
        "id_str": "1393153334",
        "name": "Xendo",
        "screen_name": "GoXendo",
        "location": "San Francisco, CA",
        "description": "Hosted Enterprise Search.  Securely search 30+ cloud apps and on-premises content, in one shot.",
        "url": "http://t.co/TbdzNr9adv",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/TbdzNr9adv",
                "expanded_url": "http://xen.do",
                "display_url": "xen.do",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 242,
        "friends_count": 594,
        "listed_count": 25,
        "created_at": "Tue Apr 30 21:55:43 +0000 2013",
        "favourites_count": 136,
        "utc_offset": -25200,
        "time_zone": "Pacific Time (US & Canada)",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 731,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "709397",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000165445365/-VrShmJM.png",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000165445365/-VrShmJM.png",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/421408628579381248/LD6VOhHV_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/421408628579381248/LD6VOhHV_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1393153334/1421686357",
        "profile_link_color": "FF3300",
        "profile_sidebar_border_color": "FFFFFF",
        "profile_sidebar_fill_color": "A0C5C7",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 2,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed May 18 17:13:43 +0000 2016",
    "id": 732982510683074600,
    "id_str": "732982510683074562",
    "text": "RT @aellerhorst: Calling all developers! Want to become an @AppDirect certified developer? More here: https://t.co/cU3f2RkKoW",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "aellerhorst",
          "name": "Andy Ellerhorst",
          "id": 105297892,
          "id_str": "105297892",
          "indices": [
            3,
            15
          ]
        },
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            59,
            69
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/cU3f2RkKoW",
          "expanded_url": "http://bit.ly/1TZtXeN",
          "display_url": "bit.ly/1TZtXeN",
          "indices": [
            102,
            125
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Wed May 18 16:58:24 +0000 2016",
      "id": 732978657547837400,
      "id_str": "732978657547837440",
      "text": "Calling all developers! Want to become an @AppDirect certified developer? More here: https://t.co/cU3f2RkKoW",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AppDirect",
            "name": "AppDirect",
            "id": 154310289,
            "id_str": "154310289",
            "indices": [
              42,
              52
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/cU3f2RkKoW",
            "expanded_url": "http://bit.ly/1TZtXeN",
            "display_url": "bit.ly/1TZtXeN",
            "indices": [
              85,
              108
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 105297892,
        "id_str": "105297892",
        "name": "Andy Ellerhorst",
        "screen_name": "aellerhorst",
        "location": "San Francisco",
        "description": "@appdirect, @luvocracy",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 239,
        "friends_count": 262,
        "listed_count": 17,
        "created_at": "Fri Jan 15 23:41:23 +0000 2010",
        "favourites_count": 161,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 884,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/734975770158735361/oQ19kBOD_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/734975770158735361/oQ19kBOD_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/105297892/1436630987",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2,
      "favorite_count": 3,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 2,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed May 18 17:13:37 +0000 2016",
    "id": 732982487870234600,
    "id_str": "732982487870234624",
    "text": "We're excited to announce our new developer certification program to speed up go to market process https://t.co/3KYBMHVTNj",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/3KYBMHVTNj",
          "expanded_url": "http://appd.it/206Dh2w",
          "display_url": "appd.it/206Dh2w",
          "indices": [
            99,
            122
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 4,
    "favorite_count": 3,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed May 18 16:08:37 +0000 2016",
    "id": 732966126456475600,
    "id_str": "732966126456475648",
    "text": ".@AppDirect announces new developer certification program to help providers go to market faster https://t.co/VawjgKLZjk",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "AppDirect",
          "name": "AppDirect",
          "id": 154310289,
          "id_str": "154310289",
          "indices": [
            1,
            11
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/VawjgKLZjk",
          "expanded_url": "http://bit.ly/1TZtXeN",
          "display_url": "bit.ly/1TZtXeN",
          "indices": [
            96,
            119
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Fri May 13 20:19:19 +0000 2016",
    "id": 731217278180675600,
    "id_str": "731217278180675584",
    "text": ".@danielsaks attended #collisionconf earlier this month. Here's what he learned about selling SaaS: https://t.co/bO2nex3kw2",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "collisionconf",
          "indices": [
            22,
            36
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "danielsaks",
          "name": "Daniel Saks",
          "id": 251849264,
          "id_str": "251849264",
          "indices": [
            1,
            12
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/bO2nex3kw2",
          "expanded_url": "http://appd.it/24Xdz7n",
          "display_url": "appd.it/24Xdz7n",
          "indices": [
            100,
            123
          ]
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Thu May 12 17:30:57 +0000 2016",
    "id": 730812518977966100,
    "id_str": "730812518977966080",
    "text": "RT @ElliotDCurtis: Excited to lead @MSFTHost through digital transformation at #MSHost16 #AppDirect https://t.co/YdjZZQKnoH",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "MSHost16",
          "indices": [
            79,
            88
          ]
        },
        {
          "text": "AppDirect",
          "indices": [
            89,
            99
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "ElliotDCurtis",
          "name": "Elliot Curtis",
          "id": 1669723351,
          "id_str": "1669723351",
          "indices": [
            3,
            17
          ]
        },
        {
          "screen_name": "MSFTHost",
          "name": "Microsoft Hosting",
          "id": 18195004,
          "id_str": "18195004",
          "indices": [
            35,
            44
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 730787816750243800,
          "id_str": "730787816750243840",
          "indices": [
            100,
            123
          ],
          "media_url": "http://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
          "url": "https://t.co/YdjZZQKnoH",
          "display_url": "pic.twitter.com/YdjZZQKnoH",
          "expanded_url": "http://twitter.com/ElliotDCurtis/status/730787848178163712/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1024,
              "h": 1365,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 600,
              "h": 800,
              "resize": "fit"
            },
            "small": {
              "w": 340,
              "h": 453,
              "resize": "fit"
            }
          },
          "source_status_id": 730787848178163700,
          "source_status_id_str": "730787848178163712",
          "source_user_id": 1669723351,
          "source_user_id_str": "1669723351"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 730787816750243800,
          "id_str": "730787816750243840",
          "indices": [
            100,
            123
          ],
          "media_url": "http://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
          "media_url_https": "https://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
          "url": "https://t.co/YdjZZQKnoH",
          "display_url": "pic.twitter.com/YdjZZQKnoH",
          "expanded_url": "http://twitter.com/ElliotDCurtis/status/730787848178163712/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1024,
              "h": 1365,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 600,
              "h": 800,
              "resize": "fit"
            },
            "small": {
              "w": 340,
              "h": 453,
              "resize": "fit"
            }
          },
          "source_status_id": 730787848178163700,
          "source_status_id_str": "730787848178163712",
          "source_user_id": 1669723351,
          "source_user_id_str": "1669723351"
        }
      ]
    },
    "source": "<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 154310289,
      "id_str": "154310289",
      "name": "AppDirect",
      "screen_name": "AppDirect",
      "location": "San Francisco, California",
      "description": "The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv",
      "url": "http://t.co/MRppRP4Ckl",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/MRppRP4Ckl",
              "expanded_url": "http://appdirect.com",
              "display_url": "appdirect.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "http://t.co/qgUGIQMnlv",
              "expanded_url": "http://info.appdirect.com/about/careers",
              "display_url": "info.appdirect.com/about/careers",
              "indices": [
                91,
                113
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1793,
      "friends_count": 478,
      "listed_count": 131,
      "created_at": "Thu Jun 10 22:46:57 +0000 2010",
      "favourites_count": 504,
      "utc_offset": -25200,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 3534,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "2D2A26",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1447807167",
      "profile_link_color": "009ABF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E7F6FF",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": null,
      "follow_request_sent": null,
      "notifications": null
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Thu May 12 15:52:55 +0000 2016",
      "id": 730787848178163700,
      "id_str": "730787848178163712",
      "text": "Excited to lead @MSFTHost through digital transformation at #MSHost16 #AppDirect https://t.co/YdjZZQKnoH",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "MSHost16",
            "indices": [
              60,
              69
            ]
          },
          {
            "text": "AppDirect",
            "indices": [
              70,
              80
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "MSFTHost",
            "name": "Microsoft Hosting",
            "id": 18195004,
            "id_str": "18195004",
            "indices": [
              16,
              25
            ]
          }
        ],
        "urls": [],
        "media": [
          {
            "id": 730787816750243800,
            "id_str": "730787816750243840",
            "indices": [
              81,
              104
            ],
            "media_url": "http://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
            "url": "https://t.co/YdjZZQKnoH",
            "display_url": "pic.twitter.com/YdjZZQKnoH",
            "expanded_url": "http://twitter.com/ElliotDCurtis/status/730787848178163712/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1024,
                "h": 1365,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 800,
                "resize": "fit"
              },
              "small": {
                "w": 340,
                "h": 453,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 730787816750243800,
            "id_str": "730787816750243840",
            "indices": [
              81,
              104
            ],
            "media_url": "http://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CiRHpb-U4AAL0aP.jpg",
            "url": "https://t.co/YdjZZQKnoH",
            "display_url": "pic.twitter.com/YdjZZQKnoH",
            "expanded_url": "http://twitter.com/ElliotDCurtis/status/730787848178163712/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1024,
                "h": 1365,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 800,
                "resize": "fit"
              },
              "small": {
                "w": 340,
                "h": 453,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1669723351,
        "id_str": "1669723351",
        "name": "Elliot Curtis",
        "screen_name": "ElliotDCurtis",
        "location": "The Emerald City",
        "description": "Hosting, Cloud and tech industry business/sales/marketing fanatic. Leadership development dabbler. Culture eats strategy for lunch.",
        "url": "https://t.co/VpPUTiXx8q",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/VpPUTiXx8q",
                "expanded_url": "http://www.appdirect.com",
                "display_url": "appdirect.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 1147,
        "friends_count": 1882,
        "listed_count": 71,
        "created_at": "Wed Aug 14 06:34:10 +0000 2013",
        "favourites_count": 27,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 1256,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/722966515742429184/EVb-yRyz_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/722966515742429184/EVb-yRyz_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1669723351/1383957559",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 3,
      "favorite_count": 5,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 3,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  }
];

    var fetchTweets = function (screen_name, tweetCount) {
        var url = "http://localhost:7890/1.1/statuses/user_timeline.json?count="+tweetCount.toString()+"&screen_name=" + screen_name;
        //return $q.resolve(tweets);
        return $http.get(url)
                .then(function(response) {
                    return $q.resolve(response.data)
                }, function(response) {
                    return $q.reject(response.data);
                });
    };

    return {
        fetchTweets: fetchTweets,
    };
});
