player.onChat("Generar", function () {
    if (gameplay.isDaylightTime(DAY) == true) {
        mobs.spawn(PIG, pos(2, 0, 0))
    } else {
        mobs.spawn(WOLF, pos(2, 0, 0))
    }
})
