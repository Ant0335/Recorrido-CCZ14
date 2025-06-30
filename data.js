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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.29829649415362347,
          "pitch": -0.05605334809399487,
          "rotation": 1.5707963267948966,
          "target": "1-estacionamiento"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.28440679430310745,
          "pitch": -0.076449184484364,
          "title": "Centro Comunal Zonal&nbsp;N°14",
          "text": "Antigua casa quinta de Agustín de Castro, actual centro comunal del municipio A de la Intendencia de Montevideo."
        },
        {
          "yaw": -0.20716969424824505,
          "pitch": 0.1241109597298049,
          "title": "Monumento Vegetal",
          "text": "Originario de Oceanía. Su tronco al ser golpeado emite un sonido similar al de objetos de cristal."
        },
        {
          "yaw": -0.9695592003630349,
          "pitch": 0.025453884850936248,
          "title": "Escuela N° 79",
          "text": "Escuela pública a la que concurren 323 alumnos."
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
        "yaw": -1.4674964630350118,
        "pitch": -0.1506690750117503,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.261891694575173,
          "pitch": 0.022142021735675144,
          "rotation": 4.71238898038469,
          "target": "0-plaza"
        },
        {
          "yaw": -0.6307057130624081,
          "pitch": -0.007820165144968527,
          "rotation": 1.5707963267948966,
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
        "yaw": -3.0385733808826085,
        "pitch": -0.6252250713050547,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.4201017674412544,
          "pitch": -0.171354560642218,
          "rotation": 3.141592653589793,
          "target": "3-jardn"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3565132876582364,
          "pitch": 0.05022814342661874,
          "title": "Anexo Centro Comunal N° 14",
          "text": "Sala de Usos Múltiples"
        },
        {
          "yaw": 3.1135326732198223,
          "pitch": -0.4826799803178883,
          "title": "Acceso Principal de la Casa Quinta",
          "text": "Según planos de la época, éste era el acceso principal de la casa."
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
        "yaw": -0.502302664820979,
        "pitch": -0.24618889433651603,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.622110996360094,
          "pitch": -0.14013245503591243,
          "rotation": 3.141592653589793,
          "target": "2-antiguo-acceso"
        },
        {
          "yaw": -0.6439916983377554,
          "pitch": -0.7200961858250281,
          "rotation": 0,
          "target": "4-imgen-area"
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
        "yaw": -0.4444303426676619,
        "pitch": 0.8813956699952534,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.0048187768644591955,
          "pitch": 0.49324025486199474,
          "rotation": 3.141592653589793,
          "target": "3-jardn"
        },
        {
          "yaw": -0.17443386178611675,
          "pitch": 0.6810176590559731,
          "rotation": 3.141592653589793,
          "target": "2-antiguo-acceso"
        },
        {
          "yaw": 0.10702218729117341,
          "pitch": 1.1458698752111136,
          "rotation": 3.141592653589793,
          "target": "1-estacionamiento"
        },
        {
          "yaw": -1.7954362380386506,
          "pitch": 0.9513674259498188,
          "rotation": 3.141592653589793,
          "target": "0-plaza"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
