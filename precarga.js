document.body.style.overflow = 'hidden';

        const startBtn = document.getElementById('startButton');
        const audio = document.getElementById('audio');
        const welcomeModal = document.getElementById('welcome-modal');
        const toggleAudioBtn = document.querySelector('.toggleAudio');
        const toggleIcon = toggleAudioBtn?.querySelector('i');

        window.addEventListener('load', () => window.scrollTo(0, 0));

        if (startBtn) {
            startBtn.addEventListener('click', () => {
                audio?.play();

                if (welcomeModal) welcomeModal.style.display = 'none';

                document.body.style.overflow = 'auto';
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const videos = document.querySelectorAll('video');

            const updateAudioIcon = (isMuted) => {
                toggleIcon?.classList.toggle('ri-volume-mute-fill', isMuted);
                toggleIcon?.classList.toggle('ri-volume-up-fill', !isMuted);
            };

            videos.forEach((video) => {
                video.addEventListener('play', () => {
                    toggleAudioBtn.disabled = true;
                    audio?.pause();
                    updateAudioIcon(true);
                });

                video.addEventListener('pause', () => {
                    toggleAudioBtn.disabled = false;
                    audio?.play();
                    updateAudioIcon(false);
                });

                video.addEventListener('ended', () => {
                    toggleAudioBtn.disabled = false;
                    audio?.play();
                    updateAudioIcon(false);
                });
            });
        });

        document.addEventListener('lazybeforeunveil', function (e) {
            const element = e.target;

            if (element.dataset.bg) {
                element.style.backgroundImage = `url(${element.dataset.bg})`;
            }

            if (element.tagName === 'VIDEO' && element.dataset.poster) {
                element.poster = element.dataset.poster;
            }
        });

        const resources = [
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9115.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9451.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9636.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9267.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9667.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8772.webp",
            //
            "wp-content/pic/1.png",
            "wp-content/pic/2.png",
            "wp-content/pic/3.png",
            "wp-content/pic/4.png",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8430.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/2020.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/2021.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/2022.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/2023.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/2024.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8309_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9629_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8577_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8728_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8867_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8742_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8979_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8924_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9001_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9043_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9255_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9616_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9514_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9362_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9554_1.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/0.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/1.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/bank.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9394_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9736_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9541_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9205_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9289_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9067_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8968_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9134_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9473_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8659_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8829_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9570_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9716_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9648_1.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9704_1.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/card.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9433.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8309.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9629.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8577.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8728.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8867.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8742.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8979.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8924.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9001.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9043.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9255.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9616.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9514.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9362.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9554.webp",
            //
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9394.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9736.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9541.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9205.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9289.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9067.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8968.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9134.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9473.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8659.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/8829.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9570.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9716.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9648.webp",
            "https://s3.ap-southeast-1.amazonaws.com/tynab.wedding/image/9704.webp",
        ];

        function loadResourceSequentially(index = 0) {
            if (index >= resources.length) return;

            const link = document.createElement('link');

            link.rel = 'preload';
            link.as = 'image';
            link.href = resources[index];

            link.onload = () => loadResourceSequentially(index + 1);
            link.onerror = () => loadResourceSequentially(index + 1);

            document.head.appendChild(link);
        }

        loadResourceSequentially();

        document.cookie = "username=John Doe; SameSite=Lax; Secure";