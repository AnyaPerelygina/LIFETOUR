const container = document.querySelector('.hero__audio');
const cover = document.querySelector('.hero__audio').querySelector('picture');
const button = document.querySelector('.hero__audio').querySelector('.hero__audio-button');


const createVideo = () => {
  const audio = document.createElement('iframe');

  audio.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  audio.setAttribute('title', 'Yandex audioplayer');
  audio.setAttribute('frameborder', '0');
  audio.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  audio.setAttribute('allowfullscreen', '');
  audio.classList.add('.hero__audioplayer');
  container.append(audio);
};

const initAudioPlayer = () => {
  if (container && cover && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cover.style.display = 'none';
      button.style.display = 'none';
      createVideo();
    });
  }
};

export {initAudioPlayer};
