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
        "yaw": -0.3028592385579536,
        "pitch": -0.3305038182832867,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.5501119474509828,
          "pitch": -0.6820162371729062,
          "rotation": 0,
          "target": "4-area"
        },
        {
          "yaw": 0.19314504458876058,
          "pitch": 0.023361379614367905,
          "rotation": 1.5707963267948966,
          "target": "1-estacionamiento"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.37146165744615445,
          "pitch": 0.1272020907014948,
          "title": "Monumento Vegetal",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Originario de Oceanía. Su tronco al ser golpeado emite un sonido similar al de objetos de cristal.</span>"
        },
        {
          "yaw": -0.29430654269585865,
          "pitch": -0.09734578786558501,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Centro Comunal Zonal N° 14</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Antigua casa quinta de Agustín de Castro, actual centro comunal del municipio A de Montevideo.</span>"
        },
        {
          "yaw": -1.1363327575632667,
          "pitch": 0.0045283979132477725,
          "title": "Escuela N° 79 Daniel Fernandez Crespo",
          "text": "Escuela pública con 323 alumnos."
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
        "yaw": -1.4325125475984226,
        "pitch": -0.17439512374680355,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.6439338084841655,
          "pitch": 0.00705823264298111,
          "rotation": 1.5707963267948966,
          "target": "2-antiguo-acceso"
        },
        {
          "yaw": -2.2680773354555104,
          "pitch": 0.025333617845607392,
          "rotation": 4.71238898038469,
          "target": "0-plaza"
        },
        {
          "yaw": -0.6771989065650246,
          "pitch": -1.4603308640020636,
          "rotation": 0,
          "target": "4-area"
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
        "yaw": -2.9157629308622894,
        "pitch": -0.6384030252061272,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.4201187965273441,
          "pitch": -0.08524281592397642,
          "rotation": 3.141592653589793,
          "target": "3-jardn"
        },
        {
          "yaw": 2.373410730441658,
          "pitch": 0.0883338678926755,
          "rotation": 7.0685834705770345,
          "target": "1-estacionamiento"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.419691519375494,
          "pitch": 0.052261340729270245,
          "title": "Anexo Centro Comunal Zonal N<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">°&nbsp;14</span>",
          "text": "Sala de Usos Múltiples"
        },
        {
          "yaw": 3.0786921805572174,
          "pitch": -0.48563391493473596,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Acceso Principal de la Casa Quinta</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Según planos de la época, este era el acceso principal de la vivienda.</span>"
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
        "yaw": -0.2208663454042057,
        "pitch": -0.32867642559629573,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.4795781342772152,
          "pitch": -0.9030169430676445,
          "rotation": 0,
          "target": "4-area"
        },
        {
          "yaw": 2.836208289048706,
          "pitch": -0.14323588424012001,
          "rotation": 3.141592653589793,
          "target": "2-antiguo-acceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-area",
      "name": "Aérea",
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
        "yaw": -0.6210628292261937,
        "pitch": 0.8895816774454524,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.9218872046974553,
          "pitch": 0.8738839305476933,
          "rotation": 3.141592653589793,
          "target": "0-plaza"
        },
        {
          "yaw": 0.27805862461552344,
          "pitch": 1.1270323709986858,
          "rotation": 3.141592653589793,
          "target": "1-estacionamiento"
        },
        {
          "yaw": -0.16920526942292824,
          "pitch": 0.7175659071384999,
          "rotation": 3.141592653589793,
          "target": "2-antiguo-acceso"
        },
        {
          "yaw": -0.025547488572435384,
          "pitch": 0.5288896976247219,
          "rotation": 3.141592653589793,
          "target": "3-jardn"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
