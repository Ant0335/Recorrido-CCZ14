var APP_DATA = {
  "scenes": [
    {
      "id": "0-plaza",
      "name": "Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -0.19348336047936066,
        "pitch": -0.3517228147262337,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.5014007178804434,
          "pitch": 0.014518654382291274,
          "rotation": 0,
          "target": "1-estacionamiento"
        },
        {
          "yaw": 0.6352070215499168,
          "pitch": -0.6557399020317369,
          "rotation": 0,
          "target": "4-imgen-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.39081821846377096,
          "pitch": 0.02241689510617917,
          "title": "Monumento Vegetal",
          "text": "Originario de Oceanía. Su tronco al ser golpeado emite un sonido similar al de objetos de cristal."
        },
        {
          "yaw": -1.1915156497423673,
          "pitch": -0.005632414431140376,
          "title": "Escuela N",
          "text": "<br>"
        },
        {
          "yaw": -0.28437111486369027,
          "pitch": -0.0627150168492907,
          "title": "Centro Comunal Zonal N° 14",
          "text": "Antigua casa quinta de Agustín de Castro, actual centro comunal del municipio A de Montevideo."
        }
      ]
    },
    {
      "id": "1-estacionamiento",
      "name": "Estacionamiento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -1.4386320774236516,
        "pitch": 0.012121280002881818,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.4145128855273708,
          "pitch": 0.04112286170290602,
          "rotation": 0,
          "target": "0-plaza"
        },
        {
          "yaw": -0.5580888354001878,
          "pitch": -0.004596435854555381,
          "rotation": 0,
          "target": "2-antiguo-acceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-antiguo-acceso",
      "name": "Antiguo Acceso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 0.1985077884802653,
        "pitch": -0.5087114608069605,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.7901253951103087,
          "pitch": 0.04615026985089443,
          "rotation": 0,
          "target": "3-jardn"
        },
        {
          "yaw": -0.7958043190366872,
          "pitch": 0.03558863429654835,
          "rotation": 0,
          "target": "1-estacionamiento"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2089201007711683,
          "pitch": -0.24256834440576114,
          "title": "Acceso Principal de la Casa Quinta",
          "text": "Según planos de la época, este era el acceso principal de la vivienda"
        },
        {
          "yaw": -2.9271373006420482,
          "pitch": -0.07094495232507114,
          "title": "Anexo Centro Comunal Zonal N° 14",
          "text": "Sala de Usos Múltiples"
        }
      ]
    },
    {
      "id": "3-jardn",
      "name": "Jardín",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -0.42111348749007504,
        "pitch": -0.14983505553085408,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.5241374792547102,
          "pitch": -0.7323054634522492,
          "rotation": 0,
          "target": "4-imgen-area"
        },
        {
          "yaw": 2.85913605835548,
          "pitch": -0.0686774571835489,
          "rotation": 0,
          "target": "2-antiguo-acceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-imgen-area",
      "name": "Imágen Aérea",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7171922549456173,
        "pitch": 0.9326044148176962,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.8311599949441018,
          "pitch": 0.9397686878300835,
          "rotation": 3.141592653589793,
          "target": "0-plaza"
        },
        {
          "yaw": 0.31700467951477407,
          "pitch": 1.1126162304561227,
          "rotation": 3.141592653589793,
          "target": "1-estacionamiento"
        },
        {
          "yaw": -0.1753507539629524,
          "pitch": 0.7068539511316985,
          "rotation": 3.141592653589793,
          "target": "2-antiguo-acceso"
        },
        {
          "yaw": 0.006068623896268832,
          "pitch": 0.5001379723724177,
          "rotation": 3.141592653589793,
          "target": "3-jardn"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7490527235949536,
          "pitch": 0.9362723964727344,
          "title": "Centro Comunal Zonal N° 14",
          "text": "<br>"
        },
        {
          "yaw": -0.8949822382122115,
          "pitch": 0.6710418443560293,
          "title": "Title",
          "text": "<br>"
        },
        {
          "yaw": 2.8591661030050846,
          "pitch": 0.8139173723739574,
          "title": "Camino Castro",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Recorrido Virtual Centro Comunal Zonal N° 14",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
