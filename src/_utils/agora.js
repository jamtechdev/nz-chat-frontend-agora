import AgoraRTC from "agora-rtc-sdk-ng";
export const createMicrophoneAudioTrack = async (
  options = {
    encoderConfig: "music_standard",
  }
) => {
  return AgoraRTC.createMicrophoneAudioTrack(options);
};

export const createCameraVideoTrack = async (options = {}) => {
  return AgoraRTC.createCameraVideoTrack(options);
};

export const getMeetingURL = (options) => {
  const href = window.location.href.split("?")[0];
  const url = `${href}?appId=${options.appId}&meeting=${options.meeting}&token=${options.token}`;
  const node = (
    <span>
      You can invite others join this meeting by sharing below url.{" "}
      <a href={url} target="_blank" rel="noreferrer">
        here
      </a>
    </span>
  );
  return node;
};
export const getColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b})`;
};

export const downloadImageData = (data) => {
  const canvas = document.createElement("canvas");
  canvas.width = data.width;
  canvas.height = data.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.putImageData(data, 0, 0);
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");
  link.download = "capture.png";
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  link.remove();
  canvas.remove();
};
export const loadImage = async (url) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      const msg = "image url is empty";
      reject(new Error(msg));
    }
    const image = new Image();
    image.src = url;
    image.style = "display:none;width:100px;height:100px;";
    image.crossOrigin = "anonymous";
    image.onload = () => {
      resolve(image);
    };
    document.body.appendChild(image);
  });
};
export const decodeUrlQuery = (search) => {
  if (!search) return {};
  return search
    .slice(1)
    .split("&")
    .map((str) => [str.split("=")[0], str.split("=")[1]])
    .reduce((acc, a) => {
      acc[a[0]] = a[1];
      return acc;
    }, {});
};
