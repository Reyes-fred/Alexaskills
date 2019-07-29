{
    "type": "APL",
    "version": "1.0",
    "theme": "dark",
    "import": [],
    "resources": [],
    "styles": {},
    "layouts": {},
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "items": [
            {
                "type": "Frame",
                "width": "100vw",
                "height": "100vh",
                "backgroundColor": "rgb(22,147,165)",
                "items": [
                    {
                        "type": "Container",
                        "width": "100vw",
                        "height": "100vh",
                        "alignItems": "center",
                        "justifyContent": "spaceAround",
                        "items": [
                            {
                                "type": "Text",
                                "text": "${payload.animalSoundData.message}",
                                "fontSize": "50px",
                                "color": "rgb(251,184,41)"
                            },
                            {
                                "type": "Image",
                                "source": "${payload.animalSoundData.image}",
                                "height": "50vh",
                                "width": "30vw",
                                "scale": "best-fit"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
