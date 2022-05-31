const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),

        new Endboss()
    ],
    [
        new Coins()
    ],

    [
        new Cloud()
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719, 0.2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719, 1),
        // new picture        
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0.2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 1),
        // new picture
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719, 0.2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719, 1),
        // new picture
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1438, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1438, 0.2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1438, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1438, 1),

        // new picture
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3, 0.2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3, 1),
    ]
);