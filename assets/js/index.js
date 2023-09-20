$(document).ready(function () {
    // Создаем функцию для обновления времени
    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        $("span.hours").html(hours);
        $("span.minutes").html(minutes);
        $("span.seconds").html(seconds);
    }

    // Вызываем функцию updateTime при загрузке страницы
    updateTime();

    // Обновляем время каждую секунду
    setInterval(updateTime, 1000);
});