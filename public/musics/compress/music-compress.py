from pathlib import Path
import subprocess

music_dir = Path(__file__).parent

for file in music_dir.glob("*.mp3"):
    output = music_dir / f"{file.stem}_128k.mp3"

    print(f"正在压缩: {file.name}")

    subprocess.run([
        "ffmpeg",
        "-i", str(file),
        "-b:a", "128k",
        str(output)
    ])

print("完成！")