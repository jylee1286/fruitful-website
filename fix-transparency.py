#!/usr/bin/env python3
"""Convert white-on-black line art to white-on-transparent."""
from PIL import Image
import sys

def convert_black_to_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # Calculate brightness
            brightness = (r + g + b) / 3
            if brightness < 30:
                # Near-black → fully transparent
                pixels[x, y] = (0, 0, 0, 0)
            elif brightness < 80:
                # Dark gray → semi-transparent white (edge AA)
                alpha = int((brightness / 80) * 255)
                pixels[x, y] = (255, 255, 255, alpha)
            else:
                # Light/white → keep as white with full opacity
                pixels[x, y] = (255, 255, 255, min(int(brightness * 1.2), 255))
    
    img.save(output_path, "PNG")
    print(f"✅ Converted {input_path} → {output_path} ({w}x{h})")

if __name__ == "__main__":
    convert_black_to_transparent(sys.argv[1], sys.argv[2])
