$(document).ready(function () {
    // Создаем функцию для обновления времени
    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        $(".hours").html = hours;
        $(".minutes").html = minutes;
        $(".seconds").html = seconds;
    }

    // Вызываем функцию updateTime при загрузке страницы
    updateTime();

    // Обновляем время каждую секунду
    setInterval(updateTime, 1000);
});