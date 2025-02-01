---
layout: page
title: NStrike
permalink: /nstrike/
---
<style>
    #countdown {
            font-size: 2em;
            margin-top: 20px;
    }
</style>
<h1>Countdown to launch</h1>
<div id="countdown">Loading...</div>


<script>
    // วันเกิด: 10 มกราคม
    const birthday = new Date(new Date().getFullYear(), 0, 10); // 0 = มกราคม

    function updateCountdown() {
        const now = new Date();
        // ถ้าวันเกิดในปีนี้ผ่านไปแล้ว ให้ตั้งปีเป็นปีหน้า
        if (now > birthday) {
            birthday.setFullYear(now.getFullYear() + 1);
        }

        const timeLeft = birthday - now;

        if (timeLeft <= 0) {
            // แสดงข้อความเมื่อเวลาหมด
            document.getElementById("countdown").innerHTML = "Play Now!";
            clearInterval(countdownInterval); // หยุดการอัปเดต
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s `;
    }

    // เริ่มนับถอยหลัง
    const countdownInterval = setInterval(updateCountdown, 1000);
</script>