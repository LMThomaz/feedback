import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenShotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string) => void;
}

export function ScreenShotButton(props: ScreenShotButtonProps) {
  const { screenshot, onScreenshotTook } = props;
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  async function handleTakeScreenShot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }
  if (screenshot) {
    return (
      <button
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        onClick={() => onScreenshotTook('')}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}>
        <Trash weight='fill' />
      </button>
    );
  }
  return (
    <button
      type='button'
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zing-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors'
      onClick={handleTakeScreenShot}>
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  );
}
