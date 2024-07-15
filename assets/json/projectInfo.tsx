
                    import { VrProjectType } from "../../types/vrProjectType";
                    import { Asset } from 'expo-asset';
                
                    export const projectInfo: VrProjectType = 
{
  "type": "static",
  "globalSettings": {
    "loading": {
      "autoLoad": false
    },
    "showLabel": {
      "viewportPinpoint": "hover",
      "mapPinpoint": "hover",
      "imageNavigation": "hover"
    },
    "autoplay": {
      "speed": 100,
      "timeout": 5,
      "flipFlop": true,
      "isPlay": false
    },
    "music": {
      "enable": false,
      "label": "",
      "volume": 100,
      "url": ""
    },
    "map": {
      "widthPercentage": 100
    },
    "measurement": {
      "enable": true
    },
    "teleportation": {
      "minOpacity": 0.2,
      "maxOpacity": 1,
      "isShow": true
    },
    "dollHouse": {
      "sectionHeight": 0,
      "enable": true
    },
    "instruction": {
      "showInstruction": false
    },
    "logo": {
      "showLogo": true,
      "sizePercentage": 60,
      "logoUrl": require("../images/logo/topgolf_logo.png")
    },
    "transition": {
      "duration": 1,
      "enableZoomTransition": false,
      "style": "fade"
    },
    "camera": {
      "enableZoom": true
    },
    "colorCorrection": {
      "enable": false,
      "brightness": 100,
      "saturation": 100,
      "contrast": 100
    },
    "navigation": {
      "onlyShownAsPerMap": false
    },
    "customUi": "topgolf"
  },
  "spatialAudio": {
    "volume": 100,
    "audios": [],
    "enable": false
  },
  "isPublished": false,
  "info": {
    "label": "",
    "text": ""
  },
  "infoPinpoints": {
    "isShow": false,
    "pinpoints": []
  },
  "dateCreated": 1715100818455,
  "glbUrl": "",
  "scenes": [
    {
      "type": "primary",
      "_id": "6762dc77-fb17-4eb8-9690-0d7fc5f3e05d",
      "sceneName": "Scene 1",
      "viewList": [
        {
          "labelName": "Entrance.",
          "redirectUrl": "",
          "lensflare": {
            "position": {
              "z": 0,
              "x": 0,
              "y": 0
            }
          },
          "_id": "5db7854f-4896-49d2-a905-7dacb5591a70",
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "fov": 85,
          "pinpoints": [
            {
              "thumbnailUrl": require("../images/thumbnails/uptown_lobby.jpg"),
              "toViewId": "bf155db8-db48-49d5-8a00-9e1bfa18e592",
              "position": {
                "x": -203.789952326769,
                "z": -81.46067212931531,
                "y": 14.327590468972899
              },
              "_id": "4e6f2ca4-cee1-4ec8-8a9b-f189b99fac4e",
              "redirectUrl": "",
              "info": {
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "_id": "26118c1e-26d0-4392-b581-713f0eee06da",
                "description": "",
                "header": "",
                "width": 320,
                "height": 255
              },
              "labelName": "Uptown Lobby",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            },
            {
              "position": {
                "x": -1.0765587536086572,
                "y": 13.406604161741193,
                "z": -219.5481179540102
              },
              "toViewId": "8de96441-1f3c-46d5-81f8-63692e394fd7",
              "redirectUrl": "",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "_id": "825d812b-cf73-450a-a10a-d30312ba7ab2",
                "height": 255,
                "description": "",
                "header": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "width": 320,
                "url": ""
              },
              "_id": "a91c2e1f-0849-433b-8e20-be1c3abba82a",
              "thumbnailUrl": require("../images/thumbnails/main_lobby.jpg"),
              "labelName": "Main Lobby"
            }
          ],
          "imageUrl6000": "",
          "imageUrl": require("../images/views/entrance..jpg"),
          "viewName": "Entrance.",
          "mapId": "0a5c0ad2-35c3-476b-b1c3-a236affc5998",
          "imageUrl4000": "",
          "rotation": -7.7,
          "thumbnailUrl": require("../images/thumbnails/entrance..jpg"),
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "ce71622d-7051-4de2-b804-d5b3963c8d1a",
            "name": "",
            "image": "12b8dfa0-af9a-40e2-af72-437547efa934",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          }
        },
        {
          "pinpoints": [
            {
              "_id": "3172aa3b-618a-4f0c-972c-f4ba987381d4",
              "thumbnailUrl": require("../images/thumbnails/patio.jpg"),
              "labelName": "Patio",
              "info": {
                "_id": "d70f9dd3-f304-4b7b-82fe-a9f2a5c93350",
                "description": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "height": 255,
                "width": 320,
                "header": ""
              },
              "toViewId": "0c369557-4dc1-4e07-8a1b-ba256e0820ba",
              "position": {
                "y": -7.942654021002119,
                "z": -174.52310570694766,
                "x": 133.57533047034252
              },
              "redirectUrl": "",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            },
            {
              "redirectUrl": "",
              "position": {
                "x": 133.57533047034252,
                "z": -174.52310570694766,
                "y": -7.942654021002119
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "labelName": "Patio",
              "_id": "3172aa3b-618a-4f0c-972c-f4ba987381d4",
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "width": 320,
                "header": "",
                "url": "",
                "height": 255,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "description": "",
                "_id": "d70f9dd3-f304-4b7b-82fe-a9f2a5c93350"
              },
              "toViewId": "0c369557-4dc1-4e07-8a1b-ba256e0820ba",
              "thumbnailUrl": require("../images/thumbnails/patio.jpg")
            },
            {
              "labelName": "Sports Bar - 1",
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_1.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "_id": "2ace86da-ece2-468b-86d8-2d6bc514d669",
              "position": {
                "y": -27.434187323728302,
                "z": 160.92370525776542,
                "x": -147.38708807735344
              },
              "redirectUrl": "",
              "toViewId": "4df1bcd4-802d-4b09-a16c-f65235806c75",
              "info": {
                "_id": "4d40497e-77f1-41db-88aa-7a4c71d4af23",
                "width": 320,
                "url": "",
                "description": "",
                "height": 255,
                "header": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                }
              }
            },
            {
              "_id": "61c4faa3-2aae-4364-8ed7-24c03353395f",
              "position": {
                "x": -166.38135132681015,
                "z": -143.02213752694198,
                "y": -15.265604658272222
              },
              "redirectUrl": "",
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg"),
              "labelName": "Hitting Bay - 1",
              "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
              "info": {
                "width": 320,
                "height": 255,
                "header": "",
                "url": "",
                "_id": "2b476b62-e64e-401d-be94-5529c20a0658",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "description": "",
                "position": {
                  "y": 220,
                  "x": 340
                }
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            },
            {
              "labelName": "Hitting Bay - 1",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "url": "",
                "header": "",
                "description": "",
                "height": 255,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "_id": "2b476b62-e64e-401d-be94-5529c20a0658",
                "width": 320
              },
              "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
              "_id": "61c4faa3-2aae-4364-8ed7-24c03353395f",
              "position": {
                "y": -15.265604658272222,
                "z": -143.02213752694198,
                "x": -166.38135132681015
              },
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg"),
              "redirectUrl": ""
            },
            {
              "redirectUrl": "",
              "info": {
                "height": 255,
                "position": {
                  "y": 220,
                  "x": 340
                },
                "description": "",
                "_id": "ddf91cb3-c467-4948-9299-e2ed6122ed5f",
                "header": "",
                "width": 320,
                "url": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                }
              },
              "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31",
              "_id": "35948fb8-5f76-4657-b6d2-0a530d7b01e2",
              "position": {
                "y": -24.858863679714645,
                "z": 200.45253007826273,
                "x": 87.07251846986992
              },
              "labelName": "Sports Bar - 2",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg")
            },
            {
              "labelName": "Sports Bar - 2",
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg"),
              "_id": "35948fb8-5f76-4657-b6d2-0a530d7b01e2",
              "redirectUrl": "",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "x": 87.07251846986992,
                "y": -24.858863679714645,
                "z": 200.45253007826273
              },
              "info": {
                "header": "",
                "height": 255,
                "_id": "ddf91cb3-c467-4948-9299-e2ed6122ed5f",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "width": 320,
                "description": "",
                "url": ""
              },
              "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31"
            },
            {
              "labelName": "Entrance.",
              "info": {
                "header": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "height": 255,
                "width": 320,
                "description": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "_id": "fc6351ee-8236-4436-a85a-d2abf8bc57ff",
                "url": ""
              },
              "thumbnailUrl": require("../images/thumbnails/entrance..jpg"),
              "toViewId": "5db7854f-4896-49d2-a905-7dacb5591a70",
              "position": {
                "x": 164.72132387790617,
                "z": 144.88031813901372,
                "y": -15.654828486248194
              },
              "_id": "021de2e7-7f96-4ae5-9ab5-dc863a4cbf8a",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "redirectUrl": ""
            }
          ],
          "imageUrl6000": "",
          "labelName": "Main Lobby",
          "imageUrl4000": "",
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "a0492b91-ba25-4478-ad1b-367e180e760a",
            "name": "",
            "image": "ec5be782-eeda-41ff-a244-f62c45acc3f0",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "fov": 85,
          "mapId": "0a5c0ad2-35c3-476b-b1c3-a236affc5998",
          "redirectUrl": "",
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "rotation": -50,
          "imageUrl": require("../images/views/main_lobby.jpg"),
          "lensflare": {
            "position": {
              "y": 0,
              "z": 0,
              "x": 0
            }
          },
          "viewName": "Main Lobby",
          "_id": "8de96441-1f3c-46d5-81f8-63692e394fd7",
          "thumbnailUrl": require("../images/thumbnails/main_lobby.jpg")
        },
        {
          "pinpoints": [
            {
              "info": {
                "position": {
                  "y": 220,
                  "x": 340
                },
                "header": "",
                "width": 320,
                "description": "",
                "_id": "0eb997c8-c7da-4dba-8fba-5dfedf09a731",
                "height": 255,
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": ""
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg"),
              "position": {
                "x": 8.86313066027239,
                "z": -219.7674503901525,
                "y": -3.5835438312065917
              },
              "_id": "e8542399-a761-49a4-8454-dfec0a52efcf",
              "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
              "redirectUrl": "",
              "labelName": "Hitting Bay - 1"
            },
            {
              "labelName": "Entrance.",
              "redirectUrl": "",
              "position": {
                "y": -2.075235938270931,
                "x": 117.28563006401725,
                "z": 186.04176634777767
              },
              "thumbnailUrl": require("../images/thumbnails/entrance..jpg"),
              "toViewId": "5db7854f-4896-49d2-a905-7dacb5591a70",
              "_id": "38a87500-44d0-4207-82c2-672fa26bd83a",
              "info": {
                "width": 320,
                "url": "",
                "_id": "9ac43a33-81c0-4364-88d4-3e34c83e9793",
                "description": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "position": {
                  "y": 220,
                  "x": 340
                },
                "header": "",
                "height": 255
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            }
          ],
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "73e38865-d085-427d-817d-18f9d03671ec",
            "name": "",
            "image": "9ddb34da-5d6d-4298-84f0-d800da0adcf5",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "labelName": "Uptown Lobby",
          "mapId": "0a5c0ad2-35c3-476b-b1c3-a236affc5998",
          "rotation": -42.8,
          "imageUrl6000": "",
          "redirectUrl": "",
          "imageUrl4000": "",
          "thumbnailUrl": require("../images/thumbnails/uptown_lobby.jpg"),
          "lensflare": {
            "position": {
              "y": 0,
              "x": 0,
              "z": 0
            }
          },
          "imageUrl": require("../images/views/uptown_lobby.jpg"),
          "viewName": "Uptown Lobby",
          "fov": 85,
          "_id": "bf155db8-db48-49d5-8a00-9e1bfa18e592",
          "position": {
            "z": 0,
            "x": 0,
            "y": 0
          }
        },
        {
          "viewName": "Outdoor Dining - 1",
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "imageUrl6000": "",
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "9785e73e-9533-4201-b811-b6c3fd7fb43c",
            "name": "",
            "image": "2638e6ec-e38f-4c21-9e91-f662754d18f8",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "mapId": "0a5c0ad2-35c3-476b-b1c3-a236affc5998",
          "redirectUrl": "",
          "fov": 85,
          "rotation": 41.7,
          "lensflare": {
            "position": {
              "y": 0,
              "z": 0,
              "x": 0
            }
          },
          "thumbnailUrl": require("../images/thumbnails/patio.jpg"),
          "imageUrl": require("../images/views/patio.jpg"),
          "labelName": "Patio",
          "pinpoints": [
            {
              "thumbnailUrl": require("../images/thumbnails/front_yard.jpg"),
              "position": {
                "z": 158.66698238425488,
                "x": -151.66185818599064,
                "y": -13.877909677139922
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "redirectUrl": "",
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "_id": "",
                "header": "",
                "url": "",
                "width": 320,
                "height": 255,
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "description": ""
              },
              "labelName": "Front Yard",
              "toViewId": "bfffff98-8c2f-4498-b095-e0032413cd22",
              "_id": "74d21a86-41f2-48fc-999f-e6fa5a3e645c"
            },
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "x": -163.12780327506357,
                "z": -147.39814931930243,
                "y": -6.617587213682857
              },
              "toViewId": "8de96441-1f3c-46d5-81f8-63692e394fd7",
              "info": {
                "_id": "",
                "height": 255,
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "width": 320,
                "header": "",
                "description": ""
              },
              "redirectUrl": "",
              "labelName": "Main Lobby",
              "thumbnailUrl": require("../images/thumbnails/main_lobby.jpg"),
              "_id": "c5b9cedd-fb49-484f-b5ae-e8ca56b15e43"
            },
            {
              "info": {
                "header": "",
                "description": "",
                "_id": "f89f8a59-9016-4389-ba1b-1f174b13864a",
                "width": 320,
                "position": {
                  "y": 220,
                  "x": 340
                },
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "height": 255,
                "url": ""
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg"),
              "labelName": "Hitting Bay - 1",
              "_id": "c5881f4f-f726-4d55-8944-ee85f57bb588",
              "position": {
                "y": -6.539319967427524,
                "x": 37.96436619193544,
                "z": -216.53419530024266
              },
              "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
              "redirectUrl": ""
            },
            {
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg"),
              "position": {
                "x": 37.96436619193544,
                "z": -216.53419530024266,
                "y": -6.539319967427524
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
              "_id": "c5881f4f-f726-4d55-8944-ee85f57bb588",
              "redirectUrl": "",
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "_id": "f89f8a59-9016-4389-ba1b-1f174b13864a",
                "url": "",
                "header": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "height": 255,
                "width": 320,
                "description": ""
              },
              "labelName": "Hitting Bay - 1"
            }
          ],
          "_id": "0c369557-4dc1-4e07-8a1b-ba256e0820ba",
          "imageUrl4000": ""
        },
        {
          "imageUrl": require("../images/views/front_yard.jpg"),
          "viewName": "Outdoor Dining - 2",
          "rotation": 12,
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "aaf261cf-171f-49bc-a636-cb00e2bcd3cd",
            "name": "",
            "image": "0c9cfbcb-ced9-49e1-ba55-d4f760afbaa6",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "fov": 85,
          "redirectUrl": "",
          "imageUrl6000": "",
          "labelName": "Front Yard",
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "_id": "bfffff98-8c2f-4498-b095-e0032413cd22",
          "thumbnailUrl": require("../images/thumbnails/front_yard.jpg"),
          "lensflare": {
            "position": {
              "y": 0,
              "z": 0,
              "x": 0
            }
          },
          "imageUrl4000": "",
          "pinpoints": [
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "_id": "dcc79377-bf5c-49fc-b373-da99e4eb50c7",
              "redirectUrl": "",
              "toViewId": "0c369557-4dc1-4e07-8a1b-ba256e0820ba",
              "labelName": "Patio",
              "info": {
                "description": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "_id": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "header": "",
                "url": "",
                "width": 320,
                "height": 255
              },
              "thumbnailUrl": require("../images/thumbnails/patio.jpg"),
              "position": {
                "y": -23.247027573110426,
                "z": -211.4815755057846,
                "x": 55.93512143779537
              }
            },
            {
              "info": {
                "width": 320,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "position": {
                  "y": 220,
                  "x": 340
                },
                "_id": "",
                "url": "",
                "description": "",
                "height": 255,
                "header": ""
              },
              "_id": "ddf2cfa4-34a0-4f44-b0fb-48ddf26c57ff",
              "labelName": "Main Lobby",
              "thumbnailUrl": require("../images/thumbnails/main_lobby.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "x": -112.52267645793926,
                "z": -187.6709777978168,
                "y": -22.192495162015106
              },
              "toViewId": "90b122ca-98a8-47e1-b40d-1d1382d7369c",
              "redirectUrl": ""
            },
            {
              "labelName": "Entrance.",
              "position": {
                "x": -175.0779323137521,
                "z": 132.89559016050833,
                "y": -7.141105502321885
              },
              "thumbnailUrl": require("../images/thumbnails/entrance..jpg"),
              "redirectUrl": "",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "5db7854f-4896-49d2-a905-7dacb5591a70",
              "_id": "409cdfa8-7d8a-4537-a72e-af05b50421a3",
              "info": {
                "header": "",
                "_id": "",
                "description": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "height": 255,
                "url": "",
                "width": 320
              }
            }
          ],
          "mapId": "0a5c0ad2-35c3-476b-b1c3-a236affc5998"
        },
        {
          "labelName": "Sports Bar - 1",
          "lensflare": {
            "position": {
              "x": 0,
              "y": 0,
              "z": 0
            }
          },
          "fov": 85,
          "pinpoints": [
            {
              "position": {
                "z": 125.9181551196492,
                "x": 180.34549360412754,
                "y": -3.5207562807622375
              },
              "redirectUrl": "",
              "labelName": "Hitting Bay - 1",
              "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
              "_id": "81440385-ad4e-498c-a384-5c842e5d14f4",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "height": 255,
                "_id": "bc3262d2-10f0-4dbd-a52e-b6bced2188c5",
                "width": 320,
                "url": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "description": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "header": ""
              },
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg")
            },
            {
              "position": {
                "x": -198.28377121235778,
                "z": -93.41113603632712,
                "y": -17.96399248841948
              },
              "info": {
                "height": 255,
                "description": "",
                "header": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "url": "",
                "_id": "eee59d17-ca54-4212-ae2b-6a8c3a797305",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "width": 320
              },
              "labelName": "Sports Bar - 2",
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg"),
              "_id": "b2564a44-d565-44ac-94bc-afd06528cea7",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31",
              "redirectUrl": ""
            },
            {
              "labelName": "Sports Bar - 2",
              "_id": "b2564a44-d565-44ac-94bc-afd06528cea7",
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31",
              "info": {
                "height": 255,
                "position": {
                  "x": 340,
                  "y": 220
                },
                "description": "",
                "width": 320,
                "url": "",
                "_id": "eee59d17-ca54-4212-ae2b-6a8c3a797305",
                "header": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                }
              },
              "redirectUrl": "",
              "position": {
                "y": -17.96399248841948,
                "z": -93.41113603632712,
                "x": -198.28377121235778
              }
            },
            {
              "labelName": "Main Lobby",
              "redirectUrl": "",
              "_id": "7a98e0a3-5dee-4864-9f81-2d81e0a7a6b1",
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "description": "",
                "_id": "273789ea-9fea-4dc9-9ce6-5df2d739eb49",
                "url": "",
                "width": 320,
                "header": "",
                "height": 255,
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                }
              },
              "thumbnailUrl": require("../images/thumbnails/main_lobby.jpg"),
              "toViewId": "8de96441-1f3c-46d5-81f8-63692e394fd7",
              "position": {
                "x": -196.31561256577595,
                "y": -15.273770733764222,
                "z": 98.02504507382011
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            }
          ],
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "rotation": -201.3,
          "viewName": "Sports Bar - 1",
          "_id": "4df1bcd4-802d-4b09-a16c-f65235806c75",
          "mapId": "0a5c0ad2-35c3-476b-b1c3-a236affc5998",
          "imageUrl4000": "",
          "imageUrl": require("../images/views/sports_bar_-_1.jpg"),
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "c6bbf0b2-8163-41d5-96fd-35cc32d53080",
            "name": "",
            "image": "295d480c-cf56-4533-908a-0177a96fef90",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "imageUrl6000": "",
          "thumbnailUrl": require("../images/thumbnails/sports_bar_-_1.jpg"),
          "redirectUrl": ""
        },
        {
          "mapId": "0a5c0ad2-35c3-476b-b1c3-a236affc5998",
          "position": {
            "y": 0,
            "x": 0,
            "z": 0
          },
          "imageUrl": require("../images/views/hitting_bay_-_1.jpg"),
          "pinpoints": [
            {
              "_id": "304ff1eb-a0d7-4b1e-91ff-3efd84b83e18",
              "info": {
                "header": "",
                "height": 255,
                "description": "",
                "width": 320,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "position": {
                  "x": 340,
                  "y": 220
                },
                "_id": "fe27ef68-32e6-4a89-b6f7-d49b468384bf",
                "url": ""
              },
              "labelName": "Main Lobby",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "8de96441-1f3c-46d5-81f8-63692e394fd7",
              "position": {
                "y": -16.777036306955175,
                "x": 131.01579628299305,
                "z": 175.84853686424398
              },
              "thumbnailUrl": require("../images/thumbnails/main_lobby.jpg"),
              "redirectUrl": ""
            },
            {
              "position": {
                "x": 131.01579628299305,
                "y": -16.777036306955175,
                "z": 175.84853686424398
              },
              "redirectUrl": "",
              "thumbnailUrl": require("../images/thumbnails/main_lobby.jpg"),
              "labelName": "Main Lobby",
              "toViewId": "8de96441-1f3c-46d5-81f8-63692e394fd7",
              "info": {
                "header": "",
                "url": "",
                "_id": "fe27ef68-32e6-4a89-b6f7-d49b468384bf",
                "description": "",
                "width": 320,
                "height": 255,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "position": {
                  "x": 340,
                  "y": 220
                }
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "_id": "304ff1eb-a0d7-4b1e-91ff-3efd84b83e18"
            },
            {
              "position": {
                "y": 2.5248151907205387,
                "z": 10.075070174080153,
                "x": 219.67346414479147
              },
              "thumbnailUrl": require("../images/thumbnails/patio.jpg"),
              "_id": "43b37205-e51a-497c-b313-0b256fde2330",
              "toViewId": "0c369557-4dc1-4e07-8a1b-ba256e0820ba",
              "info": {
                "url": "",
                "_id": "9eff03f5-c6e3-472d-bf3c-06242f6e293d",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "width": 320,
                "description": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "header": "",
                "height": 255
              },
              "redirectUrl": "",
              "labelName": "Patio",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            },
            {
              "info": {
                "url": "",
                "height": 255,
                "width": 320,
                "header": "",
                "description": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "_id": "550c2d05-aa4d-430b-a828-4cfd13ba716f",
                "position": {
                  "y": 220,
                  "x": 340
                }
              },
              "toViewId": "bf155db8-db48-49d5-8a00-9e1bfa18e592",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "thumbnailUrl": require("../images/thumbnails/uptown_lobby.jpg"),
              "_id": "9c0da9b3-d870-4877-8fe4-deb37e3960c4",
              "redirectUrl": "",
              "labelName": "Uptown Lobby",
              "position": {
                "x": -216.56660948550174,
                "y": 9.655917708848293,
                "z": -37.267535850941925
              }
            },
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "redirectUrl": "",
              "info": {
                "position": {
                  "y": 220,
                  "x": 340
                },
                "url": "",
                "description": "",
                "width": 320,
                "_id": "0635603e-07c7-4a93-8ca1-4110bca9729a",
                "height": 255,
                "header": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                }
              },
              "_id": "54133882-0821-4750-938d-83862dc8fc55",
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_1.jpg"),
              "toViewId": "4df1bcd4-802d-4b09-a16c-f65235806c75",
              "position": {
                "x": -216.5513650706636,
                "z": 38.72435127124844,
                "y": -0.27728422589148843
              },
              "labelName": "Sports Bar - 1"
            }
          ],
          "_id": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
          "redirectUrl": "",
          "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg"),
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "a40e50b5-1d04-4d2b-acef-0d48efb08814",
            "name": "",
            "image": "ef26252b-30a7-44a7-88d7-aa68557aa2e4",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "imageUrl4000": "",
          "lensflare": {
            "position": {
              "y": 0,
              "z": 0,
              "x": 0
            }
          },
          "rotation": 1,
          "fov": 85,
          "imageUrl6000": "",
          "labelName": "Hitting Bay - 1",
          "viewName": "Hitting Bay - 1"
        },
        {
          "position": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "rotation": -8.9,
          "imageUrl6000": "",
          "lensflare": {
            "position": {
              "x": 0,
              "y": 0,
              "z": 0
            }
          },
          "labelName": "Sports Bar - 2",
          "pinpoints": [
            {
              "info": {
                "description": "",
                "height": 255,
                "position": {
                  "y": 220,
                  "x": 340
                },
                "width": 320,
                "url": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "_id": "8d43bd80-8444-4454-bfff-a9ad9421226c",
                "header": ""
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "z": -210.97651276968196,
                "y": -0.030476337688215994,
                "x": -62.236431177229655
              },
              "toViewId": "f4821786-d554-4bf2-8e3e-7d2ddfe69e7f",
              "labelName": "Hitting Bay - 2",
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_2.jpg"),
              "_id": "5b44c76c-0f4b-4ec9-aca4-d346b58b10e9",
              "redirectUrl": ""
            },
            {
              "thumbnailUrl": require("../images/thumbnails/game_over.jpg"),
              "_id": "a5f8beae-2ed9-4090-9397-f5b52734b7ea",
              "redirectUrl": "",
              "toViewId": "77901ce7-8539-4ac5-b043-a208e32f155f",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "y": -23.96035937502949,
                "x": 125.96483855443138,
                "z": 178.66943760116615
              },
              "labelName": "Game Over",
              "info": {
                "_id": "edbf33f6-af75-4dd4-a1bf-3df0efdcc9a1",
                "url": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "height": 255,
                "width": 320,
                "header": "",
                "description": "",
                "position": {
                  "y": 220,
                  "x": 340
                }
              }
            },
            {
              "info": {
                "height": 255,
                "header": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": "",
                "width": 320,
                "_id": "57e24fd3-6649-40ce-9583-790d157894d5",
                "description": "",
                "position": {
                  "x": 340,
                  "y": 220
                }
              },
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_1.jpg"),
              "position": {
                "y": -44.95064784906286,
                "z": 196.77222876339658,
                "x": -87.3230104088998
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "labelName": "Sports Bar - 1",
              "redirectUrl": "",
              "_id": "b9ddfbe4-cdaa-4f20-bd7d-522ea34e16fa",
              "toViewId": "4df1bcd4-802d-4b09-a16c-f65235806c75"
            }
          ],
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "31f1bb14-12e1-4b79-a7e3-d6d933196039",
            "name": "",
            "image": "1d449fef-be01-4609-8dae-8280d86f3b65",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "imageUrl4000": "",
          "redirectUrl": "",
          "mapId": "c299afd0-bfde-483c-bbf4-656dbea306c3",
          "viewName": "Sports Bar - 2",
          "fov": 85,
          "imageUrl": require("../images/views/sports_bar_-_2.jpg"),
          "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg"),
          "_id": "7d5e2540-798a-44ac-b862-13727abf5f31"
        },
        {
          "thumbnailUrl": require("../images/thumbnails/prime_bay.jpg"),
          "_id": "a5ab9825-7927-4536-9bda-57499f03f3a9",
          "redirectUrl": "",
          "pinpoints": [
            {
              "_id": "65be32a1-2b62-4ae4-a0c8-2d650784a275",
              "redirectUrl": "",
              "thumbnailUrl": require("../images/thumbnails/outfield.jpg"),
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "description": "",
                "url": "",
                "height": 255,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "width": 320,
                "header": "",
                "_id": "3d39a010-ceeb-418c-b9cd-71f3a9851e65"
              },
              "labelName": "Outfield",
              "position": {
                "y": -9.4983348720555,
                "x": -31.481151832966702,
                "z": -217.5081886838438
              },
              "toViewId": "57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            },
            {
              "thumbnailUrl": require("../images/thumbnails/outfield.jpg"),
              "info": {
                "width": 320,
                "height": 255,
                "header": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "description": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "_id": "3d39a010-ceeb-418c-b9cd-71f3a9851e65",
                "url": ""
              },
              "toViewId": "57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "labelName": "Outfield",
              "position": {
                "y": -9.4983348720555,
                "z": -217.5081886838438,
                "x": -31.481151832966702
              },
              "redirectUrl": "",
              "_id": "65be32a1-2b62-4ae4-a0c8-2d650784a275"
            },
            {
              "toViewId": "f4821786-d554-4bf2-8e3e-7d2ddfe69e7f",
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_2.jpg"),
              "info": {
                "_id": "6f8d4ec2-2f3d-4a87-bd74-ee0fcda186e3",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": "",
                "width": 320,
                "position": {
                  "x": 340,
                  "y": 220
                },
                "description": "",
                "header": "",
                "height": 255
              },
              "redirectUrl": "",
              "_id": "421443e4-9734-4fd4-9082-363297241bdd",
              "labelName": "Hitting Bay - 2",
              "position": {
                "x": 198.11315639227533,
                "z": -94.70132602889677,
                "y": -12.783949183311861
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816"
            },
            {
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_2.jpg"),
              "redirectUrl": "",
              "_id": "421443e4-9734-4fd4-9082-363297241bdd",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "height": 255,
                "_id": "6f8d4ec2-2f3d-4a87-bd74-ee0fcda186e3",
                "description": "",
                "width": 320,
                "header": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "url": ""
              },
              "toViewId": "f4821786-d554-4bf2-8e3e-7d2ddfe69e7f",
              "position": {
                "y": -12.783949183311861,
                "x": 198.11315639227533,
                "z": -94.70132602889677
              },
              "labelName": "Hitting Bay - 2"
            },
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "thumbnailUrl": require("../images/thumbnails/lounge.jpg"),
              "toViewId": "c9b8a837-c821-4cd1-9562-416f34a249d1",
              "info": {
                "_id": "83a2007d-5447-4321-ab55-78002a807ac6",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "width": 320,
                "header": "",
                "url": "",
                "height": 255,
                "description": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                }
              },
              "redirectUrl": "",
              "position": {
                "y": -4.9619550449557295,
                "z": 193.33632421402598,
                "x": -104.81254345394882
              },
              "labelName": "Lounge",
              "_id": "d99fa385-f84b-4f9a-b54d-36c3d373f3de"
            }
          ],
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "imageUrl": require("../images/views/prime_bay.jpg"),
          "rotation": -25.2,
          "viewName": "Prime Bay-a5ab9825-7927-4536-9bda-57499f03f3a9.jpg",
          "lensflare": {
            "position": {
              "y": 0,
              "z": 0,
              "x": 0
            }
          },
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "7536a1de-0b36-47bd-a591-dcd1ba0dd7b1",
            "name": "",
            "image": "fb8c921d-54e3-4306-8fd7-e9d359a095f8",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "mapId": "c299afd0-bfde-483c-bbf4-656dbea306c3",
          "labelName": "Prime Bay",
          "imageUrl4000": "",
          "fov": 85,
          "imageUrl6000": ""
        },
        {
          "imageUrl4000": "",
          "labelName": "Lounge",
          "imageUrl6000": "",
          "lensflare": {
            "position": {
              "x": 0,
              "z": 0,
              "y": 0
            }
          },
          "position": {
            "y": 0,
            "x": 0,
            "z": 0
          },
          "pinpoints": [
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "width": 320,
                "description": "",
                "height": 255,
                "url": "",
                "header": "",
                "_id": "e42b0556-effd-4a2b-908f-006579efc397",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                }
              },
              "labelName": "Prime Bay",
              "redirectUrl": "",
              "toViewId": "a5ab9825-7927-4536-9bda-57499f03f3a9",
              "_id": "ce74b0f7-a994-406e-b0d0-a6278936d930",
              "position": {
                "y": -19.20566217382241,
                "x": -151.88657332533688,
                "z": 157.88615503426456
              },
              "thumbnailUrl": require("../images/thumbnails/prime_bay.jpg")
            }
          ],
          "mapId": "c299afd0-bfde-483c-bbf4-656dbea306c3",
          "rotation": 155.4,
          "fov": 85,
          "thumbnailUrl": require("../images/thumbnails/lounge.jpg"),
          "_id": "c9b8a837-c821-4cd1-9562-416f34a249d1",
          "redirectUrl": "",
          "viewName": "Lounge-c9b8a837-c821-4cd1-9562-416f34a249d1.jpg",
          "imageUrl": require("../images/views/lounge.jpg"),
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "6d0f319c-9ebf-4dab-971a-303cf9a0beea",
            "name": "",
            "image": "08def9d2-67a1-4a8b-8db6-a93fcdb02dd3",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          }
        },
        {
          "viewName": "Hitting Bay - 2",
          "imageUrl4000": "",
          "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_2.jpg"),
          "imageUrl6000": "",
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "fov": 85,
          "redirectUrl": "",
          "mapId": "c299afd0-bfde-483c-bbf4-656dbea306c3",
          "labelName": "Hitting Bay - 2",
          "_id": "f4821786-d554-4bf2-8e3e-7d2ddfe69e7f",
          "rotation": -3.8,
          "lensflare": {
            "position": {
              "z": 0,
              "y": 0,
              "x": 0
            }
          },
          "pinpoints": [
            {
              "thumbnailUrl": require("../images/thumbnails/prime_bay.jpg"),
              "info": {
                "height": 255,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "position": {
                  "y": 220,
                  "x": 340
                },
                "url": "",
                "_id": "1319a195-51cb-4efc-815c-62540262cfec",
                "width": 320,
                "header": "",
                "description": ""
              },
              "position": {
                "z": -21.544042796371077,
                "y": 8.487307343844968,
                "x": -218.70105207899388
              },
              "labelName": "Prime Bay",
              "redirectUrl": "",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "a5ab9825-7927-4536-9bda-57499f03f3a9",
              "_id": "dbf4307c-c736-41e5-9adc-52fa07643493"
            },
            {
              "info": {
                "header": "",
                "_id": "52453a2e-1779-489f-934e-a5d6eabbe210",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "description": "",
                "height": 255,
                "width": 320,
                "url": "",
                "position": {
                  "y": 220,
                  "x": 340
                }
              },
              "labelName": "Sports Bar - 2",
              "redirectUrl": "",
              "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "_id": "bf7e12a3-07e3-452b-b43e-4c6a452e2fd6",
              "position": {
                "x": -202.10141112480915,
                "z": 86.712372887669,
                "y": -4.818232990328298
              },
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg")
            },
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "thumbnailUrl": require("../images/thumbnails/outfield.jpg"),
              "redirectUrl": "",
              "_id": "d967873b-07fb-45ed-a33a-f7c273f3c7f6",
              "labelName": "Outfield",
              "info": {
                "width": 320,
                "header": "",
                "height": 255,
                "position": {
                  "y": 220,
                  "x": 340
                },
                "description": "",
                "url": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "_id": "c506f3d7-4a80-4975-b76a-13ee6dc33820"
              },
              "toViewId": "57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8",
              "position": {
                "x": -24.348802572719492,
                "y": 0.22981651360761662,
                "z": -218.6234105118101
              }
            },
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "x": -24.348802572719492,
                "y": 0.22981651360761662,
                "z": -218.6234105118101
              },
              "info": {
                "url": "",
                "description": "",
                "_id": "c506f3d7-4a80-4975-b76a-13ee6dc33820",
                "height": 255,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "width": 320,
                "position": {
                  "x": 340,
                  "y": 220
                },
                "header": ""
              },
              "thumbnailUrl": require("../images/thumbnails/outfield.jpg"),
              "_id": "d967873b-07fb-45ed-a33a-f7c273f3c7f6",
              "redirectUrl": "",
              "labelName": "Outfield",
              "toViewId": "57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8"
            },
            {
              "position": {
                "z": 206.4500325626274,
                "y": -18.706142897822026,
                "x": 73.44184695993941
              },
              "labelName": "Sports Bar - 2",
              "info": {
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "width": 320,
                "_id": "64e065e1-f3a7-43c8-a09d-81d7228bc73a",
                "description": "",
                "header": "",
                "url": "",
                "height": 255,
                "position": {
                  "y": 220,
                  "x": 340
                }
              },
              "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31",
              "redirectUrl": "",
              "_id": "252c26e6-8515-46de-8699-afe97f0ebdb6",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg")
            }
          ],
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "79c35e50-89e2-47c6-bd80-29c919054382",
            "name": "",
            "image": "3786a250-66ae-42e1-92e3-b218af0adaa1",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "imageUrl": require("../images/views/hitting_bay_-_2.jpg")
        },
        {
          "imageUrl6000": "",
          "imageUrl4000": "",
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "2e83722e-6943-403b-90cd-c7fd77afaf7a",
            "name": "",
            "image": "9091fa4f-4ad0-4210-8cb8-6079ee83df9e",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "pinpoints": [
            {
              "position": {
                "y": 4.5376740459223255,
                "x": -18.044622844209893,
                "z": -219.13657194337944
              },
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "width": 320,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "description": "",
                "url": "",
                "header": "",
                "height": 255,
                "_id": "6a8e98f2-e925-446d-bf45-b16d4795e7f5"
              },
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_2.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "redirectUrl": "",
              "_id": "023e849f-f61b-4b3c-83a9-964bcb6b665c",
              "labelName": "Hitting Bay - 2",
              "toViewId": "f4821786-d554-4bf2-8e3e-7d2ddfe69e7f"
            },
            {
              "info": {
                "position": {
                  "x": 340,
                  "y": 220
                },
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "header": "",
                "description": "",
                "width": 320,
                "height": 255,
                "_id": "6a8e98f2-e925-446d-bf45-b16d4795e7f5",
                "url": ""
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "labelName": "Hitting Bay - 2",
              "toViewId": "f4821786-d554-4bf2-8e3e-7d2ddfe69e7f",
              "redirectUrl": "",
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_2.jpg"),
              "position": {
                "x": -18.044622844209893,
                "z": -219.13657194337944,
                "y": 4.5376740459223255
              },
              "_id": "023e849f-f61b-4b3c-83a9-964bcb6b665c"
            },
            {
              "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
              "labelName": "Hitting Bay - 1",
              "redirectUrl": "",
              "_id": "cd20cce0-c8c4-46fe-9a94-461bb06f6fac",
              "info": {
                "width": 320,
                "description": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "_id": "10d3e1de-cde4-4e5a-a906-8de29685cafc",
                "header": "",
                "url": "",
                "height": 255,
                "position": {
                  "x": 340,
                  "y": 220
                }
              },
              "thumbnailUrl": require("../images/thumbnails/hitting_bay_-_1.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "y": -6.8896004241563435,
                "z": -212.32449351394803,
                "x": -57.0142990221909
              }
            },
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "a5ab9825-7927-4536-9bda-57499f03f3a9",
              "info": {
                "_id": "46c8663c-fc92-48b9-8e0a-4d3eedea6bff",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "header": "",
                "height": 255,
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "description": "",
                "url": "",
                "width": 320
              },
              "redirectUrl": "",
              "labelName": "Prime Bay",
              "_id": "710c3ba3-1eb5-4319-8035-b1c0e653b618",
              "position": {
                "x": 106.84680893111539,
                "z": -192.2038308474982,
                "y": 2.306809124957062
              },
              "thumbnailUrl": require("../images/thumbnails/prime_bay.jpg")
            },
            {
              "toViewId": "a5ab9825-7927-4536-9bda-57499f03f3a9",
              "thumbnailUrl": require("../images/thumbnails/prime_bay.jpg"),
              "redirectUrl": "",
              "position": {
                "y": 2.306809124957062,
                "z": -192.2038308474982,
                "x": 106.84680893111539
              },
              "_id": "710c3ba3-1eb5-4319-8035-b1c0e653b618",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "description": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "header": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": "",
                "width": 320,
                "_id": "46c8663c-fc92-48b9-8e0a-4d3eedea6bff",
                "height": 255
              },
              "labelName": "Prime Bay"
            },
            {
              "_id": "1aa409e5-fb74-4a04-8401-4131c0bdb2d9",
              "info": {
                "_id": "4a2b69e4-26fc-49b4-9a24-6bc4e8966b72",
                "header": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "position": {
                  "x": 340,
                  "y": 220
                },
                "description": "",
                "width": 320,
                "url": "",
                "height": 255
              },
              "toViewId": "d9b81361-4efe-4fe1-a747-00e42fd71dcc",
              "thumbnailUrl": require("../images/thumbnails/event_bay.jpg"),
              "position": {
                "y": 16.413581343407504,
                "x": 69.69066666380546,
                "z": -207.97396299473547
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "redirectUrl": "",
              "labelName": "Event Bay"
            },
            {
              "toViewId": "d9b81361-4efe-4fe1-a747-00e42fd71dcc",
              "labelName": "Event Bay",
              "thumbnailUrl": require("../images/thumbnails/event_bay.jpg"),
              "redirectUrl": "",
              "info": {
                "_id": "4a2b69e4-26fc-49b4-9a24-6bc4e8966b72",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "header": "",
                "width": 320,
                "description": "",
                "height": 255,
                "url": "",
                "position": {
                  "x": 340,
                  "y": 220
                }
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "z": -207.97396299473547,
                "y": 16.413581343407504,
                "x": 69.69066666380546
              },
              "_id": "1aa409e5-fb74-4a04-8401-4131c0bdb2d9"
            }
          ],
          "lensflare": {
            "position": {
              "z": 0,
              "y": 0,
              "x": 0
            }
          },
          "_id": "57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8",
          "position": {
            "z": 0,
            "y": 0,
            "x": 0
          },
          "labelName": "Outfield",
          "viewName": "Outfield-57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8.jpg",
          "fov": 85,
          "mapId": "c299afd0-bfde-483c-bbf4-656dbea306c3",
          "redirectUrl": "",
          "imageUrl": require("../images/views/outfield.jpg"),
          "rotation": -189,
          "thumbnailUrl": require("../images/thumbnails/outfield.jpg")
        },
        {
          "mapId": "58f5712e-7080-46f1-9bc5-ef878217aabe",
          "imageUrl4000": "",
          "pinpoints": [
            {
              "toViewId": "d9b81361-4efe-4fe1-a747-00e42fd71dcc",
              "position": {
                "x": 143.287046697408,
                "z": -166.87254758735375,
                "y": -3.685436614022369
              },
              "_id": "09e3e14a-7fb3-44f0-b961-c2feafee4c86",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "labelName": "Event Bay",
              "thumbnailUrl": require("../images/thumbnails/event_bay.jpg"),
              "info": {
                "_id": "0cb373c1-605a-4d38-a6ea-f8e2f48f5f01",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": "",
                "height": 255,
                "description": "",
                "header": "",
                "width": 320,
                "position": {
                  "y": 220,
                  "x": 340
                }
              },
              "redirectUrl": ""
            },
            {
              "position": {
                "z": -203.73845526720598,
                "x": -82.8250408518877,
                "y": 0.8207827352587542
              },
              "redirectUrl": "",
              "toViewId": "57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8",
              "info": {
                "_id": "50acf70c-3581-40d6-81ab-d5e2f03a06d0",
                "url": "",
                "description": "",
                "width": 320,
                "height": 255,
                "position": {
                  "x": 340,
                  "y": 220
                },
                "header": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                }
              },
              "labelName": "Outfield",
              "thumbnailUrl": require("../images/thumbnails/outfield.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "_id": "763f71cc-9c31-4ab7-a64c-560976d65972"
            }
          ],
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "9867d02b-2ebc-4fa2-8f0b-a74e711d2a55",
            "name": "",
            "image": "66dbeba8-a3e8-4faf-974b-90ccadd3e5b5",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "rotation": -52.1,
          "viewName": "Chairman Suites-18909232-6827-48d0-9cc1-478fe9ffb7f8.jpg",
          "thumbnailUrl": require("../images/thumbnails/chairman_suites.jpg"),
          "labelName": "Chairman Suites",
          "redirectUrl": "",
          "lensflare": {
            "position": {
              "x": 0,
              "z": 0,
              "y": 0
            }
          },
          "_id": "18909232-6827-48d0-9cc1-478fe9ffb7f8",
          "position": {
            "z": 0,
            "x": 0,
            "y": 0
          },
          "imageUrl": require("../images/views/chairman_suites.jpg"),
          "fov": 85,
          "imageUrl6000": ""
        },
        {
          "_id": "c3ba7d89-00fd-4bab-ad09-cb2b5a5da939",
          "imageUrl6000": "",
          "fov": 85,
          "position": {
            "x": 0,
            "z": 0,
            "y": 0
          },
          "viewName": "Social Room",
          "thumbnailUrl": require("../images/thumbnails/social_room.jpg"),
          "rotation": -53.6,
          "redirectUrl": "",
          "pinpoints": [
            {
              "_id": "57093ee1-5aa2-4f8b-9be9-6ca8ab604b23",
              "toViewId": "d9b81361-4efe-4fe1-a747-00e42fd71dcc",
              "thumbnailUrl": require("../images/thumbnails/event_bay.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "labelName": "Event Bay",
              "redirectUrl": "",
              "info": {
                "height": 255,
                "description": "",
                "url": "",
                "_id": "d09e7aac-b015-4275-a464-1e8a8ed37b85",
                "header": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "width": 320
              },
              "position": {
                "y": 4.411626102382425,
                "x": -5.119781221187409,
                "z": -219.82184313761843
              }
            },
            {
              "thumbnailUrl": require("../images/thumbnails/chairman_suites.jpg"),
              "toViewId": "18909232-6827-48d0-9cc1-478fe9ffb7f8",
              "info": {
                "position": {
                  "y": 220,
                  "x": 340
                },
                "header": "",
                "description": "",
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "width": 320,
                "url": "",
                "height": 255,
                "_id": "c89c3374-3e89-41a6-a576-72066d2a1897"
              },
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "_id": "d5d3c9ea-48f3-4306-84dd-210b649653a5",
              "position": {
                "y": -9.68125315460867,
                "z": -67.60354488167097,
                "x": -209.05201862634704
              },
              "redirectUrl": "",
              "labelName": "Chairman Suites"
            }
          ],
          "imageUrl4000": "",
          "imageUrl": require("../images/views/social_room.jpg"),
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "5b4f8cd4-b392-443b-adaa-edf8fb889dbd",
            "name": "",
            "image": "fa0d1e8d-2be0-403b-999d-ea1b0baeb725",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "mapId": "58f5712e-7080-46f1-9bc5-ef878217aabe",
          "lensflare": {
            "position": {
              "z": 0,
              "y": 0,
              "x": 0
            }
          },
          "labelName": "Social Room"
        },
        {
          "fov": 85,
          "position": {
            "y": 0,
            "z": 0,
            "x": 0
          },
          "lensflare": {
            "position": {
              "y": 0,
              "z": 0,
              "x": 0
            }
          },
          "thumbnailUrl": require("../images/thumbnails/event_bay.jpg"),
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "9d6c7e71-899d-4f91-a89d-e054a280be94",
            "name": "",
            "image": "72231c79-a12a-48bc-9e00-fdca0c0a3370",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "redirectUrl": "",
          "viewName": "Event Bay",
          "rotation": 88.6,
          "imageUrl4000": "",
          "mapId": "58f5712e-7080-46f1-9bc5-ef878217aabe",
          "imageUrl": require("../images/views/event_bay.jpg"),
          "_id": "d9b81361-4efe-4fe1-a747-00e42fd71dcc",
          "labelName": "Event Bay",
          "pinpoints": [
            {
              "info": {
                "header": "",
                "width": 320,
                "height": 255,
                "_id": "be7768b1-fa16-4968-a1c5-0a5bbcefe755",
                "description": "",
                "position": {
                  "x": 340,
                  "y": 220
                },
                "url": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                }
              },
              "position": {
                "x": -81.51232795101632,
                "y": 4.123337506003514,
                "z": 204.2366304690936
              },
              "redirectUrl": "",
              "_id": "f7f12af2-7ceb-40b9-a44c-e25ebafd2967",
              "thumbnailUrl": require("../images/thumbnails/game_over.jpg"),
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "77901ce7-8539-4ac5-b043-a208e32f155f",
              "labelName": "Game Over"
            },
            {
              "toViewId": "c3ba7d89-00fd-4bab-ad09-cb2b5a5da939",
              "thumbnailUrl": require("../images/thumbnails/social_room.jpg"),
              "redirectUrl": "",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "url": "",
                "description": "",
                "width": 320,
                "_id": "77d8a1db-24c8-48ad-bf9a-269d989fa6e9",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "header": "",
                "height": 255,
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                }
              },
              "_id": "59048635-f5d6-44ca-a29f-e8ef3d38ddad",
              "position": {
                "y": 1.6736980435755693,
                "z": -216.82937075097652,
                "x": -37.01487984738101
              },
              "labelName": "Social Room"
            },
            {
              "info": {
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "height": 255,
                "_id": "77d8a1db-24c8-48ad-bf9a-269d989fa6e9",
                "width": 320,
                "header": "",
                "url": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "description": ""
              },
              "position": {
                "x": -37.01487984738101,
                "y": 1.6736980435755693,
                "z": -216.82937075097652
              },
              "_id": "59048635-f5d6-44ca-a29f-e8ef3d38ddad",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "toViewId": "c3ba7d89-00fd-4bab-ad09-cb2b5a5da939",
              "labelName": "Social Room",
              "thumbnailUrl": require("../images/thumbnails/social_room.jpg"),
              "redirectUrl": ""
            },
            {
              "labelName": "Chairman Suites",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "position": {
                "y": 2.360726785881795,
                "x": 88.35247411532305,
                "z": -201.42588460179093
              },
              "toViewId": "18909232-6827-48d0-9cc1-478fe9ffb7f8",
              "info": {
                "header": "",
                "height": 255,
                "_id": "538d2533-9a67-4258-8512-9ccae73a3fb8",
                "width": 320,
                "description": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                },
                "url": ""
              },
              "thumbnailUrl": require("../images/thumbnails/chairman_suites.jpg"),
              "redirectUrl": "",
              "_id": "bc21b86f-976e-4b0b-b854-1febcab00e19"
            }
          ],
          "imageUrl6000": ""
        },
        {
          "redirectUrl": "",
          "texture": {
            "metadata": {
              "version": 4.5,
              "type": "Texture",
              "generator": "Texture.toJSON"
            },
            "uuid": "e4dc0cc8-5ef0-4e97-837b-70be26c16bba",
            "name": "",
            "image": "f697f9ff-093e-4041-9936-27d223761d81",
            "mapping": 300,
            "repeat": [
              1,
              1
            ],
            "offset": [
              0,
              0
            ],
            "center": [
              0,
              0
            ],
            "rotation": 0,
            "wrap": [
              1001,
              1001
            ],
            "format": 1023,
            "type": 1009,
            "encoding": 3000,
            "minFilter": 1006,
            "magFilter": 1006,
            "anisotropy": 1,
            "flipY": true,
            "premultiplyAlpha": false,
            "unpackAlignment": 4
          },
          "position": {
            "z": 0,
            "y": 0,
            "x": 0
          },
          "imageUrl6000": "",
          "viewName": "Game Over",
          "imageUrl4000": "",
          "rotation": 19.1,
          "pinpoints": [
            {
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "url": "",
                "height": 255,
                "images": {
                  "imageList": [],
                  "containerHeight": 100
                },
                "header": "",
                "position": {
                  "y": 220,
                  "x": 340
                },
                "width": 320,
                "description": "",
                "_id": "84b02004-9070-47cf-b15c-8ed5d2d3bcd4"
              },
              "_id": "5cf5e6fd-0b1d-4b0f-87c2-a29425a16019",
              "toViewId": "d9b81361-4efe-4fe1-a747-00e42fd71dcc",
              "labelName": "Event Bay",
              "redirectUrl": "",
              "position": {
                "z": -188.4219069187978,
                "x": -113.43861121886438,
                "y": -2.3148617370882745
              },
              "thumbnailUrl": require("../images/thumbnails/event_bay.jpg")
            },
            {
              "labelName": "Sports Bar - 2",
              "redirectUrl": "",
              "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31",
              "position": {
                "x": -163.3306152899771,
                "y": -45.66564384658598,
                "z": 140.03828404129828
              },
              "_id": "579bc954-a31e-4cca-8b7d-75180d172bbc",
              "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
              "info": {
                "height": 255,
                "position": {
                  "y": 220,
                  "x": 340
                },
                "url": "",
                "_id": "daa3eb0f-87df-4858-a8cf-05bf59aa7735",
                "width": 320,
                "description": "",
                "header": "",
                "images": {
                  "containerHeight": 100,
                  "imageList": []
                }
              },
              "thumbnailUrl": require("../images/thumbnails/sports_bar_-_2.jpg")
            }
          ],
          "labelName": "Game Over",
          "fov": 85,
          "thumbnailUrl": require("../images/thumbnails/game_over.jpg"),
          "_id": "77901ce7-8539-4ac5-b043-a208e32f155f",
          "mapId": "58f5712e-7080-46f1-9bc5-ef878217aabe",
          "imageUrl": require("../images/views/game_over.jpg"),
          "lensflare": {
            "position": {
              "y": 0,
              "x": 0,
              "z": 0
            }
          }
        }
      ]
    }
  ],
  "creatorId": "mNYQNJM1kMfwg8RXZr7VBUJfAwt1",
  "editStatus": {
    "editedBy": "",
    "loginIp": ""
  },
  "maps": [
    {
      "showViewfinder": true,
      "pinpoints": [
        {
          "position": {
            "z": 0,
            "y": 66.39455127164454,
            "x": 61.90475360065973
          },
          "_id": "cca70463-2355-4b03-8cc8-ae3cacfdc85e",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "labelName": "Default",
          "thumbnailUrl": "",
          "redirectUrl": "",
          "toViewId": "8de96441-1f3c-46d5-81f8-63692e394fd7"
        },
        {
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "redirectUrl": "",
          "_id": "6911f7a0-2451-4c31-a003-603d47e5ba9d",
          "thumbnailUrl": "",
          "position": {
            "y": 81.08842760247033,
            "z": 0,
            "x": 72.90475264153594
          },
          "labelName": "Default",
          "toViewId": "bfffff98-8c2f-4498-b095-e0032413cd22"
        },
        {
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "toViewId": "4df1bcd4-802d-4b09-a16c-f65235806c75",
          "_id": "e6e50515-16b0-4a98-8079-ce62400c8458",
          "position": {
            "x": 52.38092456221012,
            "z": 0,
            "y": 61.48314232347419
          },
          "thumbnailUrl": "",
          "labelName": "Default",
          "redirectUrl": ""
        },
        {
          "thumbnailUrl": "",
          "_id": "453cf1ca-008a-40ad-9ca3-370b29747a62",
          "redirectUrl": "",
          "position": {
            "z": 0,
            "x": 15.238070657952823,
            "y": 33.97752510046729
          },
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "labelName": "Default",
          "toViewId": "bf155db8-db48-49d5-8a00-9e1bfa18e592"
        },
        {
          "redirectUrl": "",
          "position": {
            "y": 63.64044563508258,
            "x": 73.52377986155658,
            "z": 0
          },
          "labelName": "Default",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "_id": "dbac026e-6a51-4e5b-af90-68899280fa83",
          "toViewId": "0c369557-4dc1-4e07-8a1b-ba256e0820ba",
          "thumbnailUrl": ""
        },
        {
          "thumbnailUrl": "",
          "toViewId": "ac67b311-9ab4-4ddc-89c8-a38c5f7392c5",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "redirectUrl": "",
          "labelName": "Default",
          "_id": "95bcd975-4646-45bf-b157-5dbf6bed7619",
          "position": {
            "z": 0,
            "y": 43.68539000270502,
            "x": 61.52378090787346
          }
        },
        {
          "position": {
            "z": 0,
            "y": 80.89887212794964,
            "x": 59.23806682145762
          },
          "thumbnailUrl": "",
          "_id": "14b60588-1303-4f8e-a039-9603cafc0066",
          "toViewId": "5db7854f-4896-49d2-a905-7dacb5591a70",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "labelName": "Default",
          "redirectUrl": ""
        }
      ],
      "_id": "0a5c0ad2-35c3-476b-b1c3-a236affc5998",
      "imageUrl": require("../images/maps/level_1.png"),
      "sizePercentage": 100,
      "mapName": "Level 1"
    },
    {
      "sizePercentage": 100,
      "_id": "c299afd0-bfde-483c-bbf4-656dbea306c3",
      "pinpoints": [
        {
          "redirectUrl": "",
          "position": {
            "y": 45.906036851878866,
            "x": 50.38092473659626,
            "z": 0
          },
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "labelName": "Default",
          "_id": "4377917d-82e1-47c2-99d7-3320c0f81c31",
          "thumbnailUrl": "",
          "toViewId": "f4821786-d554-4bf2-8e3e-7d2ddfe69e7f"
        },
        {
          "toViewId": "57c71c8d-e5a1-4dc7-b544-6165bdd5b4b8",
          "position": {
            "x": 49.80949621499231,
            "y": 4.832213031038096,
            "z": 0
          },
          "labelName": "Default",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "redirectUrl": "",
          "_id": "5a55c4bd-ccfe-459a-879b-ce0c077d3ac0",
          "thumbnailUrl": ""
        },
        {
          "_id": "44e0c0a7-75f6-4b7c-8e86-61ac02dc98de",
          "thumbnailUrl": "",
          "toViewId": "a5ab9825-7927-4536-9bda-57499f03f3a9",
          "redirectUrl": "",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "labelName": "Default",
          "position": {
            "x": 22.380927178002306,
            "y": 30.201339508616222,
            "z": 0
          }
        },
        {
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "thumbnailUrl": "",
          "toViewId": "c9b8a837-c821-4cd1-9562-416f34a249d1",
          "labelName": "Default",
          "redirectUrl": "",
          "_id": "d04aa704-b558-4468-b3e5-4a1f4fac1cc2",
          "position": {
            "z": 0,
            "x": 9.761901004298531,
            "y": 35.67567416679436
          }
        },
        {
          "labelName": "Default",
          "redirectUrl": "",
          "toViewId": "7d5e2540-798a-44ac-b862-13727abf5f31",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "position": {
            "z": 0,
            "x": 59.047610992639946,
            "y": 65.47297084967184
          },
          "_id": "edf6a3cb-8a4d-4783-92d9-e367299eb3d9",
          "thumbnailUrl": ""
        }
      ],
      "imageUrl": require("../images/maps/level_2.png"),
      "mapName": "Level 2",
      "showViewfinder": true
    },
    {
      "showViewfinder": true,
      "pinpoints": [
        {
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "redirectUrl": "",
          "position": {
            "z": 0,
            "x": 65.39680989583333,
            "y": 73.9677253510271
          },
          "labelName": "Default",
          "toViewId": "77901ce7-8539-4ac5-b043-a208e32f155f",
          "_id": "35059292-8af6-4f1a-9205-a5aeee471959",
          "thumbnailUrl": ""
        },
        {
          "thumbnailUrl": "",
          "labelName": "Default",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "toViewId": "d9b81361-4efe-4fe1-a747-00e42fd71dcc",
          "_id": "13b7bc10-8a34-4844-abc7-3172951bcba7",
          "position": {
            "z": 0,
            "x": 44.380925259754704,
            "y": 49.053385562950865
          },
          "redirectUrl": ""
        },
        {
          "redirectUrl": "",
          "_id": "ecf658c1-7a71-42b9-9e7a-398e2fd4d4d6",
          "thumbnailUrl": "",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "labelName": "Default",
          "toViewId": "c3ba7d89-00fd-4bab-ad09-cb2b5a5da939",
          "position": {
            "z": 0,
            "y": 64.48468348476322,
            "x": 33.206333705357146
          }
        },
        {
          "toViewId": "18909232-6827-48d0-9cc1-478fe9ffb7f8",
          "_id": "19e52f2c-378b-4831-aebb-3b7f845aa979",
          "labelName": "Default",
          "redirectUrl": "",
          "customPinpointId": "728f069e-60af-40dd-a07f-4688a7129816",
          "thumbnailUrl": "",
          "position": {
            "x": 23.238069960408243,
            "z": 0,
            "y": 43.86504651502392
          }
        }
      ],
      "_id": "58f5712e-7080-46f1-9bc5-ef878217aabe",
      "imageUrl": require("../images/maps/level_3.png"),
      "sizePercentage": 100,
      "mapName": "Level 3"
    }
  ],
  "_id": "2ec9b3e8-5cb8-5e58-b6d3-b22e689fa147",
  "projectThumbnail": "",
  "email": "storage.koma@gmail.com",
  "projectName": "Topgolf Jakarta",
  "detailedGlbUrl": "",
  "customPinpoints": [
    {
      "thumbnailYPosition": 1,
      "imageUrl": "",
      "sizePercentage": 100,
      "thumbnailXPosition": 0,
      "type": "view",
      "label": "Pin 1",
      "fontScale": 100,
      "thumbnailSize": 100,
      "showThumbnail": true,
      "is3d": false,
      "opacity": 100,
      "_id": "728f069e-60af-40dd-a07f-4688a7129816"
    }
  ]
};
