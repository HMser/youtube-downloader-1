const isLocalHost = window.location.hostname === 'localhost';
export const host = isLocalHost
  ? 'http://localhost:4000'
  : `https://${window.location.hostname}`;

export const getDownloadUrl = (videoId: string, format = 'mp4') =>
  `${host}/watch?v=${videoId}&format=${format}`;

export const secondsToMinutes = (time: number) => {
  return Math.floor(time / 60) + ':' + Math.floor(time % 60);
};

export const isYtUrl = (url: string) => {
  const ytRegex = new RegExp(
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/
  );
  return ytRegex.test(url);
};

export const getRandomEmoji = () => {
  const emojis = ['🎵', '🎼', '🎶', '🎻', '🎹', '🎺', '🎧', '🎤', '🎤'];
  const nr = Math.floor(Math.random() * (emojis.length - 1)) + 0;
  return emojis[nr];
};

export const changeFormatStorage = (format: string) => {
  localStorage.setItem('format', format);
};

export const isDarkMode = () => {
  return localStorage.getItem('dark') === 'true' ? true : false;
};
