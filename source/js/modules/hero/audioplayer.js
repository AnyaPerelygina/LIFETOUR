const container = document.querySelector('.hero__audio-wrapper');
const link = document.querySelector('.hero__audio-link');
const button = document.querySelector('.hero__audio-button');
const cover = document.querySelector('.hero__audio').querySelector('picture');

const showAudioButton = () => {
  button.style.display = 'block';
};

const showAudioCover = () => {
  cover.style.display = 'block';
};

const createAudio = (element) => {
  if (document.querySelector('.hero__audio-wrapper iframe')) {
    document.querySelector('.hero__audio-wrapper iframe').remove();
  }
  const iframe = document.createElement('iframe');
  iframe.setAttribute('title', 'Yandex audioplayer');
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.loading = 'lazy';
  iframe.style = 'border: 0;';
  (element).appendChild(iframe);
};

const initAudioPlayer = () => {
  if (container && cover && button) {
    button.addEventListener('click', () => {
      cover.style.display = 'none';
      button.style.display = 'none';
      createAudio(document.querySelector('.hero__audio-wrapper'));
      document.querySelector('.hero__audio-wrapper iframe').src = 'https://music.yandex.ru/iframe/#track/116266134/25474374';
    });
    link.removeAttribute('href');
    container.classList.add('hero__audio--enabled');
  }
};

export {initAudioPlayer, showAudioButton, showAudioCover, createAudio};
