const PORT = 5000
const express = require('express');
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

let results = [
    {
      "id": 3498,
      "slug": "grand-theft-auto-v",
      "name": "Grand Theft Auto V",
      "released": "2013-09-17",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      "rating": 4.47,
      "rating_top": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 3728,
          "percent": 59.06
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 2072,
          "percent": 32.83
        },
        {
          "id": 3,
          "title": "meh",
          "count": 398,
          "percent": 6.31
        },
        {
          "id": 1,
          "title": "skip",
          "count": 114,
          "percent": 1.81
        }
      ],
      "ratings_count": 6227,
      "reviews_text_count": 47,
      "added": 19061,
      "added_by_status": {
        "yet": 492,
        "owned": 11036,
        "beaten": 5310,
        "toplay": 555,
        "dropped": 987,
        "playing": 681
      },
      "metacritic": 92,
      "playtime": 73,
      "suggestions_count": 410,
      "updated": "2023-03-19T15:58:39",
      "user_game": null,
      "reviews_count": 6312,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
        {
          "platform": {
            "id": 187,
            "name": "PlayStation 5",
            "slug": "playstation5",
            "image": null,
            "year_end": null,
            "year_start": 2020,
            "games_count": 824,
            "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
          },
          "released_at": "2013-09-17",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 186,
            "name": "Xbox Series S/X",
            "slug": "xbox-series-x",
            "image": null,
            "year_end": null,
            "year_start": 2020,
            "games_count": 731,
            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          },
          "released_at": "2013-09-17",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 6597,
            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
          },
          "released_at": "2013-09-17",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 536875,
            "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          "released_at": "2013-09-17",
          "requirements_en": {
            "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
            "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
          },
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 3269,
            "image_background": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg"
          },
          "released_at": "2013-09-17",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 2781,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          "released_at": "2013-09-17",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 5488,
            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          "released_at": "2013-09-17",
          "requirements_en": null,
          "requirements_ru": null
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        }
      ],
      "genres": [
        {
          "id": 4,
          "name": "Action",
          "slug": "action",
          "games_count": 177875,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure",
          "games_count": 136825,
          "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
        }
      ],
      "stores": [
        {
          "id": 290375,
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store",
            "domain": "store.playstation.com",
            "games_count": 7796,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          }
        },
        {
          "id": 438095,
          "store": {
            "id": 11,
            "name": "Epic Games",
            "slug": "epic-games",
            "domain": "epicgames.com",
            "games_count": 1215,
            "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
          }
        },
        {
          "id": 290376,
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 73115,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          }
        },
        {
          "id": 290377,
          "store": {
            "id": 7,
            "name": "Xbox 360 Store",
            "slug": "xbox360",
            "domain": "marketplace.xbox.com",
            "games_count": 1914,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
          }
        },
        {
          "id": 290378,
          "store": {
            "id": 2,
            "name": "Xbox Store",
            "slug": "xbox-store",
            "domain": "microsoft.com",
            "games_count": 4756,
            "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          }
        }
      ],
      "clip": null,
      "tags": [
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 209582,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 40847,
          "name": "Steam Achievements",
          "slug": "steam-achievements",
          "language": "eng",
          "games_count": 29451,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 7,
          "name": "Multiplayer",
          "slug": "multiplayer",
          "language": "eng",
          "games_count": 35586,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
        {
          "id": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support",
          "language": "eng",
          "games_count": 13833,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 29424,
          "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        },
        {
          "id": 42,
          "name": "Great Soundtrack",
          "slug": "great-soundtrack",
          "language": "eng",
          "games_count": 3230,
          "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
        },
        {
          "id": 24,
          "name": "RPG",
          "slug": "rpg",
          "language": "eng",
          "games_count": 16758,
          "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
        },
        {
          "id": 18,
          "name": "Co-op",
          "slug": "co-op",
          "language": "eng",
          "games_count": 9686,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 36,
          "name": "Open World",
          "slug": "open-world",
          "language": "eng",
          "games_count": 6237,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        {
          "id": 411,
          "name": "cooperative",
          "slug": "cooperative",
          "language": "eng",
          "games_count": 3925,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 8,
          "name": "First-Person",
          "slug": "first-person",
          "language": "eng",
          "games_count": 29119,
          "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
        },
        {
          "id": 149,
          "name": "Third Person",
          "slug": "third-person",
          "language": "eng",
          "games_count": 9288,
          "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
        },
        {
          "id": 4,
          "name": "Funny",
          "slug": "funny",
          "language": "eng",
          "games_count": 23019,
          "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
        },
        {
          "id": 37,
          "name": "Sandbox",
          "slug": "sandbox",
          "language": "eng",
          "games_count": 5963,
          "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
        },
        {
          "id": 123,
          "name": "Comedy",
          "slug": "comedy",
          "language": "eng",
          "games_count": 10907,
          "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
        },
        {
          "id": 150,
          "name": "Third-Person Shooter",
          "slug": "third-person-shooter",
          "language": "eng",
          "games_count": 2884,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        },
        {
          "id": 62,
          "name": "Moddable",
          "slug": "moddable",
          "language": "eng",
          "games_count": 778,
          "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
        },
        {
          "id": 144,
          "name": "Crime",
          "slug": "crime",
          "language": "eng",
          "games_count": 2544,
          "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
        },
        {
          "id": 62349,
          "name": "vr mod",
          "slug": "vr-mod",
          "language": "eng",
          "games_count": 17,
          "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
        }
      ],
      "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
      },
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
        },
        {
          "id": 1827221,
          "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
        },
        {
          "id": 1827222,
          "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
        },
        {
          "id": 1827223,
          "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
        },
        {
          "id": 1827225,
          "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
        },
        {
          "id": 1827226,
          "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
        },
        {
          "id": 1827227,
          "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
        }
      ]
    },
    {
      "id": 3328,
      "slug": "the-witcher-3-wild-hunt",
      "name": "The Witcher 3: Wild Hunt",
      "released": "2015-05-18",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      "rating": 4.66,
      "rating_top": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 4649,
          "percent": 77.6
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 949,
          "percent": 15.84
        },
        {
          "id": 3,
          "title": "meh",
          "count": 244,
          "percent": 4.07
        },
        {
          "id": 1,
          "title": "skip",
          "count": 149,
          "percent": 2.49
        }
      ],
      "ratings_count": 5905,
      "reviews_text_count": 59,
      "added": 18209,
      "added_by_status": {
        "yet": 1039,
        "owned": 10491,
        "beaten": 4304,
        "toplay": 717,
        "dropped": 820,
        "playing": 838
      },
      "metacritic": 92,
      "playtime": 46,
      "suggestions_count": 649,
      "updated": "2023-03-19T15:57:31",
      "user_game": null,
      "reviews_count": 5991,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
        {
          "platform": {
            "id": 186,
            "name": "Xbox Series S/X",
            "slug": "xbox-series-x",
            "image": null,
            "year_end": null,
            "year_start": 2020,
            "games_count": 731,
            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          },
          "released_at": "2015-05-18",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 6597,
            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
          },
          "released_at": "2015-05-18",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 7,
            "name": "Nintendo Switch",
            "slug": "nintendo-switch",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 5199,
            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
          },
          "released_at": "2015-05-18",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 536875,
            "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          "released_at": "2015-05-18",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 5488,
            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          "released_at": "2015-05-18",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 187,
            "name": "PlayStation 5",
            "slug": "playstation5",
            "image": null,
            "year_end": null,
            "year_start": 2020,
            "games_count": 824,
            "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
          },
          "released_at": "2015-05-18",
          "requirements_en": null,
          "requirements_ru": null
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        },
        {
          "platform": {
            "id": 7,
            "name": "Nintendo",
            "slug": "nintendo"
          }
        }
      ],
      "genres": [
        {
          "id": 4,
          "name": "Action",
          "slug": "action",
          "games_count": 177875,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure",
          "games_count": 136825,
          "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
        },
        {
          "id": 5,
          "name": "RPG",
          "slug": "role-playing-games-rpg",
          "games_count": 53787,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        }
      ],
      "stores": [
        {
          "id": 354780,
          "store": {
            "id": 5,
            "name": "GOG",
            "slug": "gog",
            "domain": "gog.com",
            "games_count": 4934,
            "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
          }
        },
        {
          "id": 3565,
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store",
            "domain": "store.playstation.com",
            "games_count": 7796,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          }
        },
        {
          "id": 305376,
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 73115,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          }
        },
        {
          "id": 312313,
          "store": {
            "id": 2,
            "name": "Xbox Store",
            "slug": "xbox-store",
            "domain": "microsoft.com",
            "games_count": 4756,
            "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          }
        },
        {
          "id": 676022,
          "store": {
            "id": 6,
            "name": "Nintendo Store",
            "slug": "nintendo",
            "domain": "nintendo.com",
            "games_count": 8862,
            "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
          }
        }
      ],
      "clip": null,
      "tags": [
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 209582,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support",
          "language": "eng",
          "games_count": 13833,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 29424,
          "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        },
        {
          "id": 42,
          "name": "Great Soundtrack",
          "slug": "great-soundtrack",
          "language": "eng",
          "games_count": 3230,
          "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
        },
        {
          "id": 24,
          "name": "RPG",
          "slug": "rpg",
          "language": "eng",
          "games_count": 16758,
          "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
        },
        {
          "id": 118,
          "name": "Story Rich",
          "slug": "story-rich",
          "language": "eng",
          "games_count": 18114,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        {
          "id": 36,
          "name": "Open World",
          "slug": "open-world",
          "language": "eng",
          "games_count": 6237,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        {
          "id": 149,
          "name": "Third Person",
          "slug": "third-person",
          "language": "eng",
          "games_count": 9288,
          "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
        },
        {
          "id": 64,
          "name": "Fantasy",
          "slug": "fantasy",
          "language": "eng",
          "games_count": 24635,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        },
        {
          "id": 37,
          "name": "Sandbox",
          "slug": "sandbox",
          "language": "eng",
          "games_count": 5963,
          "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
        },
        {
          "id": 97,
          "name": "Action RPG",
          "slug": "action-rpg",
          "language": "eng",
          "games_count": 5774,
          "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
        },
        {
          "id": 41,
          "name": "Dark",
          "slug": "dark",
          "language": "eng",
          "games_count": 14252,
          "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
        },
        {
          "id": 44,
          "name": "Nudity",
          "slug": "nudity",
          "language": "eng",
          "games_count": 4681,
          "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
        },
        {
          "id": 336,
          "name": "controller support",
          "slug": "controller-support",
          "language": "eng",
          "games_count": 293,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        {
          "id": 145,
          "name": "Choices Matter",
          "slug": "choices-matter",
          "language": "eng",
          "games_count": 3254,
          "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
        },
        {
          "id": 192,
          "name": "Mature",
          "slug": "mature",
          "language": "eng",
          "games_count": 2001,
          "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
        },
        {
          "id": 40,
          "name": "Dark Fantasy",
          "slug": "dark-fantasy",
          "language": "eng",
          "games_count": 3190,
          "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
        },
        {
          "id": 66,
          "name": "Medieval",
          "slug": "medieval",
          "language": "eng",
          "games_count": 5299,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        {
          "id": 82,
          "name": "Magic",
          "slug": "magic",
          "language": "eng",
          "games_count": 8040,
          "image_background": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg"
        },
        {
          "id": 218,
          "name": "Multiple Endings",
          "slug": "multiple-endings",
          "language": "eng",
          "games_count": 6936,
          "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
        }
      ],
      "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
      },
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        },
        {
          "id": 30336,
          "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
        },
        {
          "id": 30337,
          "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
        },
        {
          "id": 30338,
          "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
        },
        {
          "id": 30339,
          "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
        },
        {
          "id": 30340,
          "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
        },
        {
          "id": 30342,
          "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
        }
      ]
    },
    {
      "id": 4200,
      "slug": "portal-2",
      "name": "Portal 2",
      "released": "2011-04-18",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
      "rating": 4.62,
      "rating_top": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 3686,
          "percent": 70.64
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 1285,
          "percent": 24.63
        },
        {
          "id": 3,
          "title": "meh",
          "count": 140,
          "percent": 2.68
        },
        {
          "id": 1,
          "title": "skip",
          "count": 107,
          "percent": 2.05
        }
      ],
      "ratings_count": 5172,
      "reviews_text_count": 31,
      "added": 17155,
      "added_by_status": {
        "yet": 565,
        "owned": 10597,
        "beaten": 4997,
        "toplay": 332,
        "dropped": 526,
        "playing": 138
      },
      "metacritic": 95,
      "playtime": 11,
      "suggestions_count": 534,
      "updated": "2023-03-19T15:57:45",
      "user_game": null,
      "reviews_count": 5218,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
        {
          "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 2781,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          "released_at": "2011-04-19",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 79193,
            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          "released_at": "2011-04-19",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 5,
            "name": "macOS",
            "slug": "macos",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 106472,
            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
          },
          "released_at": null,
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 3269,
            "image_background": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg"
          },
          "released_at": "2011-04-19",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 536875,
            "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          "released_at": null,
          "requirements_en": null,
          "requirements_ru": {
            "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
            "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
          }
        },
        {
          "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 5488,
            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          "released_at": "2011-04-18",
          "requirements_en": null,
          "requirements_ru": null
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        },
        {
          "platform": {
            "id": 5,
            "name": "Apple Macintosh",
            "slug": "mac"
          }
        },
        {
          "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux"
          }
        }
      ],
      "genres": [
        {
          "id": 2,
          "name": "Shooter",
          "slug": "shooter",
          "games_count": 62981,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
        {
          "id": 7,
          "name": "Puzzle",
          "slug": "puzzle",
          "games_count": 100172,
          "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
        }
      ],
      "stores": [
        {
          "id": 465889,
          "store": {
            "id": 2,
            "name": "Xbox Store",
            "slug": "xbox-store",
            "domain": "microsoft.com",
            "games_count": 4756,
            "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          }
        },
        {
          "id": 13134,
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 73115,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          }
        },
        {
          "id": 4526,
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store",
            "domain": "store.playstation.com",
            "games_count": 7796,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          }
        },
        {
          "id": 33916,
          "store": {
            "id": 7,
            "name": "Xbox 360 Store",
            "slug": "xbox360",
            "domain": "marketplace.xbox.com",
            "games_count": 1914,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
          }
        }
      ],
      "clip": null,
      "tags": [
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 209582,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 40847,
          "name": "Steam Achievements",
          "slug": "steam-achievements",
          "language": "eng",
          "games_count": 29451,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 7,
          "name": "Multiplayer",
          "slug": "multiplayer",
          "language": "eng",
          "games_count": 35586,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
        {
          "id": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support",
          "language": "eng",
          "games_count": 13833,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 29424,
          "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        },
        {
          "id": 40849,
          "name": "Steam Cloud",
          "slug": "steam-cloud",
          "language": "eng",
          "games_count": 13564,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        {
          "id": 7808,
          "name": "steam-trading-cards",
          "slug": "steam-trading-cards",
          "language": "eng",
          "games_count": 7582,
          "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
          "id": 18,
          "name": "Co-op",
          "slug": "co-op",
          "language": "eng",
          "games_count": 9686,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 118,
          "name": "Story Rich",
          "slug": "story-rich",
          "language": "eng",
          "games_count": 18114,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        {
          "id": 411,
          "name": "cooperative",
          "slug": "cooperative",
          "language": "eng",
          "games_count": 3925,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 8,
          "name": "First-Person",
          "slug": "first-person",
          "language": "eng",
          "games_count": 29119,
          "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
        },
        {
          "id": 32,
          "name": "Sci-fi",
          "slug": "sci-fi",
          "language": "eng",
          "games_count": 17348,
          "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
        },
        {
          "id": 30,
          "name": "FPS",
          "slug": "fps",
          "language": "eng",
          "games_count": 12564,
          "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
        },
        {
          "id": 9,
          "name": "Online Co-Op",
          "slug": "online-co-op",
          "language": "eng",
          "games_count": 4190,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 4,
          "name": "Funny",
          "slug": "funny",
          "language": "eng",
          "games_count": 23019,
          "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
        },
        {
          "id": 189,
          "name": "Female Protagonist",
          "slug": "female-protagonist",
          "language": "eng",
          "games_count": 10429,
          "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        },
        {
          "id": 123,
          "name": "Comedy",
          "slug": "comedy",
          "language": "eng",
          "games_count": 10907,
          "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
        },
        {
          "id": 75,
          "name": "Local Co-Op",
          "slug": "local-co-op",
          "language": "eng",
          "games_count": 4977,
          "image_background": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
        },
        {
          "id": 11669,
          "name": "stats",
          "slug": "stats",
          "language": "eng",
          "games_count": 4436,
          "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
        },
        {
          "id": 40852,
          "name": "Steam Workshop",
          "slug": "steam-workshop",
          "language": "eng",
          "games_count": 1276,
          "image_background": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg"
        },
        {
          "id": 25,
          "name": "Space",
          "slug": "space",
          "language": "eng",
          "games_count": 43383,
          "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
        },
        {
          "id": 40838,
          "name": "Includes level editor",
          "slug": "includes-level-editor",
          "language": "eng",
          "games_count": 1607,
          "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
        },
        {
          "id": 40833,
          "name": "Captions available",
          "slug": "captions-available",
          "language": "eng",
          "games_count": 1219,
          "image_background": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg"
        },
        {
          "id": 40834,
          "name": "Commentary available",
          "slug": "commentary-available",
          "language": "eng",
          "games_count": 252,
          "image_background": "https://media.rawg.io/media/screenshots/405/40567fe45e6074a5b2bfbd4a3fea7809.jpg"
        },
        {
          "id": 87,
          "name": "Science",
          "slug": "science",
          "language": "eng",
          "games_count": 1510,
          "image_background": "https://media.rawg.io/media/screenshots/f93/f93ee651619bb5b273f1b51528ee872a.jpg"
        }
      ],
      "esrb_rating": {
        "id": 2,
        "name": "Everyone 10+",
        "slug": "everyone-10-plus"
      },
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
        {
          "id": 99018,
          "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
        },
        {
          "id": 99019,
          "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
        },
        {
          "id": 99020,
          "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
        },
        {
          "id": 99021,
          "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
        },
        {
          "id": 99022,
          "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
        },
        {
          "id": 99023,
          "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
        }
      ]
    },
    {
      "id": 5286,
      "slug": "tomb-raider",
      "name": "Tomb Raider (2013)",
      "released": "2013-03-05",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      "rating": 4.05,
      "rating_top": 4,
      "ratings": [
        {
          "id": 4,
          "title": "recommended",
          "count": 2189,
          "percent": 60.25
        },
        {
          "id": 5,
          "title": "exceptional",
          "count": 931,
          "percent": 25.63
        },
        {
          "id": 3,
          "title": "meh",
          "count": 402,
          "percent": 11.07
        },
        {
          "id": 1,
          "title": "skip",
          "count": 111,
          "percent": 3.06
        }
      ],
      "ratings_count": 3609,
      "reviews_text_count": 10,
      "added": 15030,
      "added_by_status": {
        "yet": 618,
        "owned": 9743,
        "beaten": 3850,
        "toplay": 233,
        "dropped": 486,
        "playing": 100
      },
      "metacritic": 86,
      "playtime": 10,
      "suggestions_count": 626,
      "updated": "2023-03-19T15:26:40",
      "user_game": null,
      "reviews_count": 3633,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
        {
          "platform": {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 6597,
            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
          },
          "released_at": "2013-03-05",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 5,
            "name": "macOS",
            "slug": "macos",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 106472,
            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
          },
          "released_at": "2013-03-05",
          "requirements_en": {
            "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
          },
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 536875,
            "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          "released_at": "2013-03-05",
          "requirements_en": {
            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
          },
          "requirements_ru": {
            "minimum": "i486-100, 8 Мб",
            "recommended": "Pentium 166, 16 Мб"
          }
        },
        {
          "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 5488,
            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          "released_at": "2013-03-05",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 2781,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          "released_at": "2013-03-05",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 3269,
            "image_background": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg"
          },
          "released_at": "2013-03-05",
          "requirements_en": null,
          "requirements_ru": null
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        },
        {
          "platform": {
            "id": 5,
            "name": "Apple Macintosh",
            "slug": "mac"
          }
        }
      ],
      "genres": [
        {
          "id": 4,
          "name": "Action",
          "slug": "action",
          "games_count": 177875,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure",
          "games_count": 136825,
          "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
        }
      ],
      "stores": [
        {
          "id": 33824,
          "store": {
            "id": 7,
            "name": "Xbox 360 Store",
            "slug": "xbox360",
            "domain": "marketplace.xbox.com",
            "games_count": 1914,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
          }
        },
        {
          "id": 13151,
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 73115,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          }
        },
        {
          "id": 5640,
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store",
            "domain": "store.playstation.com",
            "games_count": 7796,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          }
        },
        {
          "id": 218233,
          "store": {
            "id": 8,
            "name": "Google Play",
            "slug": "google-play",
            "domain": "play.google.com",
            "games_count": 17011,
            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
          }
        },
        {
          "id": 79036,
          "store": {
            "id": 4,
            "name": "App Store",
            "slug": "apple-appstore",
            "domain": "apps.apple.com",
            "games_count": 74716,
            "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
          }
        },
        {
          "id": 713685,
          "store": {
            "id": 11,
            "name": "Epic Games",
            "slug": "epic-games",
            "domain": "epicgames.com",
            "games_count": 1215,
            "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
          }
        }
      ],
      "clip": null,
      "tags": [
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 209582,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 7,
          "name": "Multiplayer",
          "slug": "multiplayer",
          "language": "eng",
          "games_count": 35586,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
        {
          "id": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support",
          "language": "eng",
          "games_count": 13833,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 29424,
          "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        },
        {
          "id": 24,
          "name": "RPG",
          "slug": "rpg",
          "language": "eng",
          "games_count": 16758,
          "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
        },
        {
          "id": 149,
          "name": "Third Person",
          "slug": "third-person",
          "language": "eng",
          "games_count": 9288,
          "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
        },
        {
          "id": 193,
          "name": "Classic",
          "slug": "classic",
          "language": "eng",
          "games_count": 1759,
          "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
        },
        {
          "id": 6,
          "name": "Exploration",
          "slug": "exploration",
          "language": "eng",
          "games_count": 19251,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        },
        {
          "id": 189,
          "name": "Female Protagonist",
          "slug": "female-protagonist",
          "language": "eng",
          "games_count": 10429,
          "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        },
        {
          "id": 15,
          "name": "Stealth",
          "slug": "stealth",
          "language": "eng",
          "games_count": 5765,
          "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
        },
        {
          "id": 150,
          "name": "Third-Person Shooter",
          "slug": "third-person-shooter",
          "language": "eng",
          "games_count": 2884,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        },
        {
          "id": 69,
          "name": "Action-Adventure",
          "slug": "action-adventure",
          "language": "eng",
          "games_count": 13563,
          "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
        },
        {
          "id": 74,
          "name": "Retro",
          "slug": "retro",
          "language": "eng",
          "games_count": 40883,
          "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
        },
        {
          "id": 110,
          "name": "Cinematic",
          "slug": "cinematic",
          "language": "eng",
          "games_count": 1274,
          "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
        },
        {
          "id": 269,
          "name": "Quick-Time Events",
          "slug": "quick-time-events",
          "language": "eng",
          "games_count": 389,
          "image_background": "https://media.rawg.io/media/games/560/56056a71c74f751552c9baedebf8f317.jpg"
        },
        {
          "id": 126,
          "name": "Dinosaurs",
          "slug": "dinosaurs",
          "language": "eng",
          "games_count": 1654,
          "image_background": "https://media.rawg.io/media/games/5f4/5f44810c864fa054da5e0b84dc16267d.jpg"
        },
        {
          "id": 306,
          "name": "Lara Croft",
          "slug": "lara-croft",
          "language": "eng",
          "games_count": 14,
          "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
        }
      ],
      "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
      },
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        },
        {
          "id": 99160,
          "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
        },
        {
          "id": 99161,
          "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
        },
        {
          "id": 99162,
          "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
        },
        {
          "id": 99163,
          "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
        },
        {
          "id": 99164,
          "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
        },
        {
          "id": 99165,
          "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
        }
      ]
    },
    {
      "id": 4291,
      "slug": "counter-strike-global-offensive",
      "name": "Counter-Strike: Global Offensive",
      "released": "2012-08-21",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      "rating": 3.57,
      "rating_top": 4,
      "ratings": [
        {
          "id": 4,
          "title": "recommended",
          "count": 1499,
          "percent": 46.74
        },
        {
          "id": 3,
          "title": "meh",
          "count": 838,
          "percent": 26.13
        },
        {
          "id": 5,
          "title": "exceptional",
          "count": 514,
          "percent": 16.03
        },
        {
          "id": 1,
          "title": "skip",
          "count": 356,
          "percent": 11.1
        }
      ],
      "ratings_count": 3178,
      "reviews_text_count": 21,
      "added": 14839,
      "added_by_status": {
        "yet": 232,
        "owned": 11249,
        "beaten": 905,
        "toplay": 70,
        "dropped": 1776,
        "playing": 607
      },
      "metacritic": 81,
      "playtime": 65,
      "suggestions_count": 573,
      "updated": "2023-03-19T14:19:08",
      "user_game": null,
      "reviews_count": 3207,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 536875,
            "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          "released_at": "2012-08-21",
          "requirements_en": {
            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
          },
          "requirements_ru": {
            "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
            "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
          }
        },
        {
          "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 2781,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          "released_at": "2012-08-21",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 3269,
            "image_background": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg"
          },
          "released_at": "2012-08-21",
          "requirements_en": null,
          "requirements_ru": null
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        }
      ],
      "genres": [
        {
          "id": 4,
          "name": "Action",
          "slug": "action",
          "games_count": 177875,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 2,
          "name": "Shooter",
          "slug": "shooter",
          "games_count": 62981,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        }
      ],
      "stores": [
        {
          "id": 4619,
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store",
            "domain": "store.playstation.com",
            "games_count": 7796,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          }
        },
        {
          "id": 11489,
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 73115,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          }
        },
        {
          "id": 49169,
          "store": {
            "id": 7,
            "name": "Xbox 360 Store",
            "slug": "xbox360",
            "domain": "marketplace.xbox.com",
            "games_count": 1914,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
          }
        }
      ],
      "clip": null,
      "tags": [
        {
          "id": 40847,
          "name": "Steam Achievements",
          "slug": "steam-achievements",
          "language": "eng",
          "games_count": 29451,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 7,
          "name": "Multiplayer",
          "slug": "multiplayer",
          "language": "eng",
          "games_count": 35586,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
        {
          "id": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support",
          "language": "eng",
          "games_count": 13833,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        },
        {
          "id": 7808,
          "name": "steam-trading-cards",
          "slug": "steam-trading-cards",
          "language": "eng",
          "games_count": 7582,
          "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
          "id": 18,
          "name": "Co-op",
          "slug": "co-op",
          "language": "eng",
          "games_count": 9686,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 411,
          "name": "cooperative",
          "slug": "cooperative",
          "language": "eng",
          "games_count": 3925,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 8,
          "name": "First-Person",
          "slug": "first-person",
          "language": "eng",
          "games_count": 29119,
          "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
        },
        {
          "id": 30,
          "name": "FPS",
          "slug": "fps",
          "language": "eng",
          "games_count": 12564,
          "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
        },
        {
          "id": 9,
          "name": "Online Co-Op",
          "slug": "online-co-op",
          "language": "eng",
          "games_count": 4190,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 80,
          "name": "Tactical",
          "slug": "tactical",
          "language": "eng",
          "games_count": 4019,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 11669,
          "name": "stats",
          "slug": "stats",
          "language": "eng",
          "games_count": 4436,
          "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
        },
        {
          "id": 40852,
          "name": "Steam Workshop",
          "slug": "steam-workshop",
          "language": "eng",
          "games_count": 1276,
          "image_background": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg"
        },
        {
          "id": 62,
          "name": "Moddable",
          "slug": "moddable",
          "language": "eng",
          "games_count": 778,
          "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
        },
        {
          "id": 157,
          "name": "PvP",
          "slug": "pvp",
          "language": "eng",
          "games_count": 6965,
          "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
        },
        {
          "id": 70,
          "name": "War",
          "slug": "war",
          "language": "eng",
          "games_count": 8777,
          "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
        },
        {
          "id": 40837,
          "name": "In-App Purchases",
          "slug": "in-app-purchases",
          "language": "eng",
          "games_count": 1996,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 11,
          "name": "Team-Based",
          "slug": "team-based",
          "language": "eng",
          "games_count": 1249,
          "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        },
        {
          "id": 77,
          "name": "Realistic",
          "slug": "realistic",
          "language": "eng",
          "games_count": 3562,
          "image_background": "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg"
        },
        {
          "id": 131,
          "name": "Fast-Paced",
          "slug": "fast-paced",
          "language": "eng",
          "games_count": 10738,
          "image_background": "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg"
        },
        {
          "id": 81,
          "name": "Military",
          "slug": "military",
          "language": "eng",
          "games_count": 1305,
          "image_background": "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg"
        },
        {
          "id": 170,
          "name": "Competitive",
          "slug": "competitive",
          "language": "eng",
          "games_count": 1010,
          "image_background": "https://media.rawg.io/media/screenshots/4df/4df0b0812fd89af2285e683fb78f1323.jpg"
        },
        {
          "id": 40856,
          "name": "Valve Anti-Cheat enabled",
          "slug": "valve-anti-cheat-enabled",
          "language": "eng",
          "games_count": 104,
          "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
        },
        {
          "id": 73,
          "name": "e-sports",
          "slug": "e-sports",
          "language": "eng",
          "games_count": 80,
          "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
        },
        {
          "id": 245,
          "name": "Trading",
          "slug": "trading",
          "language": "eng",
          "games_count": 981,
          "image_background": "https://media.rawg.io/media/screenshots/455/45550e55d57e629d27abcd02193fc6d1.jpg"
        }
      ],
      "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
      },
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
        },
        {
          "id": 81644,
          "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
        },
        {
          "id": 81645,
          "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
        },
        {
          "id": 81646,
          "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
        },
        {
          "id": 81647,
          "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
        },
        {
          "id": 81648,
          "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
        },
        {
          "id": 81649,
          "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
        }
      ]
    },
    {
      "id": 13536,
      "slug": "portal",
      "name": "Portal",
      "released": "2007-10-09",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      "rating": 4.51,
      "rating_top": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 2657,
          "percent": 61.05
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 1442,
          "percent": 33.13
        },
        {
          "id": 3,
          "title": "meh",
          "count": 167,
          "percent": 3.84
        },
        {
          "id": 1,
          "title": "skip",
          "count": 86,
          "percent": 1.98
        }
      ],
      "ratings_count": 4318,
      "reviews_text_count": 23,
      "added": 14571,
      "added_by_status": {
        "yet": 399,
        "owned": 9020,
        "beaten": 4524,
        "toplay": 221,
        "dropped": 339,
        "playing": 68
      },
      "metacritic": 90,
      "playtime": 4,
      "suggestions_count": 278,
      "updated": "2023-03-19T15:58:02",
      "user_game": null,
      "reviews_count": 4352,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
        {
          "platform": {
            "id": 21,
            "name": "Android",
            "slug": "android",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 55069,
            "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          "released_at": "2007-10-09",
          "requirements_en": {
            "minimum": "4.4 and up"
          },
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 3269,
            "image_background": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg"
          },
          "released_at": "2007-10-09",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 2781,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          "released_at": "2007-10-09",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 79193,
            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          "released_at": "2007-10-09",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 5,
            "name": "macOS",
            "slug": "macos",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 106472,
            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
          },
          "released_at": "2007-10-09",
          "requirements_en": {
            "minimum": "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
          },
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 536875,
            "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          "released_at": "2007-10-09",
          "requirements_en": {
            "minimum": "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>"
          },
          "requirements_ru": {
            "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
            "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
          }
        },
        {
          "platform": {
            "id": 7,
            "name": "Nintendo Switch",
            "slug": "nintendo-switch",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 5199,
            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
          },
          "released_at": "2007-10-09",
          "requirements_en": null,
          "requirements_ru": null
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 2,
            "name": "PlayStation",
            "slug": "playstation"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        },
        {
          "platform": {
            "id": 8,
            "name": "Android",
            "slug": "android"
          }
        },
        {
          "platform": {
            "id": 5,
            "name": "Apple Macintosh",
            "slug": "mac"
          }
        },
        {
          "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux"
          }
        },
        {
          "platform": {
            "id": 7,
            "name": "Nintendo",
            "slug": "nintendo"
          }
        }
      ],
      "genres": [
        {
          "id": 3,
          "name": "Adventure",
          "slug": "adventure",
          "games_count": 136825,
          "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
        },
        {
          "id": 7,
          "name": "Puzzle",
          "slug": "puzzle",
          "games_count": 100172,
          "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
        }
      ],
      "stores": [
        {
          "id": 14890,
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 73115,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          }
        },
        {
          "id": 40973,
          "store": {
            "id": 8,
            "name": "Google Play",
            "slug": "google-play",
            "domain": "play.google.com",
            "games_count": 17011,
            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
          }
        }
      ],
      "clip": null,
      "tags": [
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 209582,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 40847,
          "name": "Steam Achievements",
          "slug": "steam-achievements",
          "language": "eng",
          "games_count": 29451,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 13,
          "name": "Atmospheric",
          "slug": "atmospheric",
          "language": "eng",
          "games_count": 29424,
          "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        },
        {
          "id": 42,
          "name": "Great Soundtrack",
          "slug": "great-soundtrack",
          "language": "eng",
          "games_count": 3230,
          "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
        },
        {
          "id": 118,
          "name": "Story Rich",
          "slug": "story-rich",
          "language": "eng",
          "games_count": 18114,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        {
          "id": 8,
          "name": "First-Person",
          "slug": "first-person",
          "language": "eng",
          "games_count": 29119,
          "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
        },
        {
          "id": 32,
          "name": "Sci-fi",
          "slug": "sci-fi",
          "language": "eng",
          "games_count": 17348,
          "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
        },
        {
          "id": 40845,
          "name": "Partial Controller Support",
          "slug": "partial-controller-support",
          "language": "eng",
          "games_count": 9487,
          "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
        },
        {
          "id": 30,
          "name": "FPS",
          "slug": "fps",
          "language": "eng",
          "games_count": 12564,
          "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
        },
        {
          "id": 4,
          "name": "Funny",
          "slug": "funny",
          "language": "eng",
          "games_count": 23019,
          "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
        },
        {
          "id": 193,
          "name": "Classic",
          "slug": "classic",
          "language": "eng",
          "games_count": 1759,
          "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
        },
        {
          "id": 189,
          "name": "Female Protagonist",
          "slug": "female-protagonist",
          "language": "eng",
          "games_count": 10429,
          "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        },
        {
          "id": 123,
          "name": "Comedy",
          "slug": "comedy",
          "language": "eng",
          "games_count": 10907,
          "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
        },
        {
          "id": 40838,
          "name": "Includes level editor",
          "slug": "includes-level-editor",
          "language": "eng",
          "games_count": 1607,
          "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
        },
        {
          "id": 40833,
          "name": "Captions available",
          "slug": "captions-available",
          "language": "eng",
          "games_count": 1219,
          "image_background": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg"
        },
        {
          "id": 111,
          "name": "Short",
          "slug": "short",
          "language": "eng",
          "games_count": 59676,
          "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
        },
        {
          "id": 114,
          "name": "Physics",
          "slug": "physics",
          "language": "eng",
          "games_count": 17938,
          "image_background": "https://media.rawg.io/media/screenshots/f81/f81fd968a3161e7d35612d8c4232923e.jpg"
        },
        {
          "id": 148,
          "name": "Dark Humor",
          "slug": "dark-humor",
          "language": "eng",
          "games_count": 2457,
          "image_background": "https://media.rawg.io/media/screenshots/7ab/7ab68441389f60523d2f6cb75c6393f2.jpg"
        },
        {
          "id": 40834,
          "name": "Commentary available",
          "slug": "commentary-available",
          "language": "eng",
          "games_count": 252,
          "image_background": "https://media.rawg.io/media/screenshots/405/40567fe45e6074a5b2bfbd4a3fea7809.jpg"
        },
        {
          "id": 40839,
          "name": "Includes Source SDK",
          "slug": "includes-source-sdk",
          "language": "eng",
          "games_count": 60,
          "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
        },
        {
          "id": 87,
          "name": "Science",
          "slug": "science",
          "language": "eng",
          "games_count": 1510,
          "image_background": "https://media.rawg.io/media/screenshots/f93/f93ee651619bb5b273f1b51528ee872a.jpg"
        }
      ],
      "esrb_rating": {
        "id": 3,
        "name": "Teen",
        "slug": "teen"
      },
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
        },
        {
          "id": 115793,
          "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
        },
        {
          "id": 115794,
          "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
        },
        {
          "id": 115795,
          "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
        },
        {
          "id": 115796,
          "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
        },
        {
          "id": 115797,
          "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
        },
        {
          "id": 115798,
          "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
        }
      ]
    },
    {
      "id": 12020,
      "slug": "left-4-dead-2",
      "name": "Left 4 Dead 2",
      "released": "2009-11-17",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      "rating": 4.09,
      "rating_top": 4,
      "ratings": [
        {
          "id": 4,
          "title": "recommended",
          "count": 1609,
          "percent": 53.15
        },
        {
          "id": 5,
          "title": "exceptional",
          "count": 958,
          "percent": 31.65
        },
        {
          "id": 3,
          "title": "meh",
          "count": 349,
          "percent": 11.53
        },
        {
          "id": 1,
          "title": "skip",
          "count": 111,
          "percent": 3.67
        }
      ],
      "ratings_count": 3011,
      "reviews_text_count": 8,
      "added": 14547,
      "added_by_status": {
        "yet": 349,
        "owned": 10637,
        "beaten": 2283,
        "toplay": 95,
        "dropped": 1046,
        "playing": 137
      },
      "metacritic": 89,
      "playtime": 9,
      "suggestions_count": 568,
      "updated": "2023-03-19T14:17:42",
      "user_game": null,
      "reviews_count": 3027,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
        {
          "platform": {
            "id": 5,
            "name": "macOS",
            "slug": "macos",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 106472,
            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
          },
          "released_at": "2009-11-17",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 79193,
            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          "released_at": "2009-11-17",
          "requirements_en": null,
          "requirements_ru": null
        },
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 536875,
            "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          "released_at": "2009-11-17",
          "requirements_en": {
            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>"
          },
          "requirements_ru": {
            "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
            "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
          }
        },
        {
          "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 2781,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          "released_at": "2009-11-17",
          "requirements_en": null,
          "requirements_ru": null
        }
      ],
      "parent_platforms": [
        {
          "platform": {
            "id": 1,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "Xbox",
            "slug": "xbox"
          }
        },
        {
          "platform": {
            "id": 5,
            "name": "Apple Macintosh",
            "slug": "mac"
          }
        },
        {
          "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux"
          }
        }
      ],
      "genres": [
        {
          "id": 4,
          "name": "Action",
          "slug": "action",
          "games_count": 177875,
          "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
          "id": 2,
          "name": "Shooter",
          "slug": "shooter",
          "games_count": 62981,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        }
      ],
      "stores": [
        {
          "id": 13208,
          "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 73115,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          }
        },
        {
          "id": 34000,
          "store": {
            "id": 7,
            "name": "Xbox 360 Store",
            "slug": "xbox360",
            "domain": "marketplace.xbox.com",
            "games_count": 1914,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
          }
        }
      ],
      "clip": null,
      "tags": [
        {
          "id": 31,
          "name": "Singleplayer",
          "slug": "singleplayer",
          "language": "eng",
          "games_count": 209582,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 40847,
          "name": "Steam Achievements",
          "slug": "steam-achievements",
          "language": "eng",
          "games_count": 29451,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 7,
          "name": "Multiplayer",
          "slug": "multiplayer",
          "language": "eng",
          "games_count": 35586,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        },
        {
          "id": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support",
          "language": "eng",
          "games_count": 13833,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        },
        {
          "id": 40849,
          "name": "Steam Cloud",
          "slug": "steam-cloud",
          "language": "eng",
          "games_count": 13564,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        {
          "id": 7808,
          "name": "steam-trading-cards",
          "slug": "steam-trading-cards",
          "language": "eng",
          "games_count": 7582,
          "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
          "id": 18,
          "name": "Co-op",
          "slug": "co-op",
          "language": "eng",
          "games_count": 9686,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        {
          "id": 411,
          "name": "cooperative",
          "slug": "cooperative",
          "language": "eng",
          "games_count": 3925,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 8,
          "name": "First-Person",
          "slug": "first-person",
          "language": "eng",
          "games_count": 29119,
          "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
        },
        {
          "id": 16,
          "name": "Horror",
          "slug": "horror",
          "language": "eng",
          "games_count": 43984,
          "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
        },
        {
          "id": 30,
          "name": "FPS",
          "slug": "fps",
          "language": "eng",
          "games_count": 12564,
          "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
        },
        {
          "id": 9,
          "name": "Online Co-Op",
          "slug": "online-co-op",
          "language": "eng",
          "games_count": 4190,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
          "id": 26,
          "name": "Gore",
          "slug": "gore",
          "language": "eng",
          "games_count": 5029,
          "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        },
        {
          "id": 1,
          "name": "Survival",
          "slug": "survival",
          "language": "eng",
          "games_count": 7024,
          "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
        },
        {
          "id": 75,
          "name": "Local Co-Op",
          "slug": "local-co-op",
          "language": "eng",
          "games_count": 4977,
          "image_background": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
        },
        {
          "id": 80,
          "name": "Tactical",
          "slug": "tactical",
          "language": "eng",
          "games_count": 4019,
          "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
          "id": 11669,
          "name": "stats",
          "slug": "stats",
          "language": "eng",
          "games_count": 4436,
          "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
        },
        {
          "id": 40852,
          "name": "Steam Workshop",
          "slug": "steam-workshop",
          "language": "eng",
          "games_count": 1276,
          "image_background": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg"
        },
        {
          "id": 63,
          "name": "Zombies",
          "slug": "zombies",
          "language": "eng",
          "games_count": 9999,
          "image_background": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"
        },
        {
          "id": 62,
          "name": "Moddable",
          "slug": "moddable",
          "language": "eng",
          "games_count": 778,
          "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
        },
        {
          "id": 43,
          "name": "Post-apocalyptic",
          "slug": "post-apocalyptic",
          "language": "eng",
          "games_count": 3272,
          "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
        },
        {
          "id": 17,
          "name": "Survival Horror",
          "slug": "survival-horror",
          "language": "eng",
          "games_count": 7996,
          "image_background": "https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg"
        },
        {
          "id": 40833,
          "name": "Captions available",
          "slug": "captions-available",
          "language": "eng",
          "games_count": 1219,
          "image_background": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg"
        },
        {
          "id": 5,
          "name": "Replay Value",
          "slug": "replay-value",
          "language": "eng",
          "games_count": 1244,
          "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
        },
        {
          "id": 11,
          "name": "Team-Based",
          "slug": "team-based",
          "language": "eng",
          "games_count": 1249,
          "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        },
        {
          "id": 40856,
          "name": "Valve Anti-Cheat enabled",
          "slug": "valve-anti-cheat-enabled",
          "language": "eng",
          "games_count": 104,
          "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
        },
        {
          "id": 40834,
          "name": "Commentary available",
          "slug": "commentary-available",
          "language": "eng",
          "games_count": 252,
          "image_background": "https://media.rawg.io/media/screenshots/405/40567fe45e6074a5b2bfbd4a3fea7809.jpg"
        },
        {
          "id": 40839,
          "name": "Includes Source SDK",
          "slug": "includes-source-sdk",
          "language": "eng",
          "games_count": 60,
          "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
        }
      ],
      "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
      },
      "short_screenshots": [
        {
          "id": -1,
          "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        },
        {
          "id": 99748,
          "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
        },
        {
          "id": 99749,
          "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
        },
        {
          "id": 99750,
          "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
        },
        {
          "id": 99751,
          "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
        },
        {
          "id": 99752,
          "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
        },
        {
          "id": 99753,
          "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
        }
      ]
    },
  ]

  let counter = 1
  results.forEach(element => {
    element.id=counter
    counter++
  });


/* axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`)
    .then(response =>  dataCarousel = response) */

app.get('/api', (req, res) =>{ 
    res.send({results})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))