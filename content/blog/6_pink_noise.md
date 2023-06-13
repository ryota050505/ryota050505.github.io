---
title: pink-noise生成
imgsrc: programming/java.svg
description: 'ホワイトノイズにフィルタをかけてピンクノイズを生成します。'
position: 6
category: 音楽
tags: [音プログラミング]
version: 1.0
fullscreen: true
---

## 概要

https://github.com/ryota050505/noise-generator

ここに一応書いておきます

``` python
import numpy as np
from scipy.io.wavfile import write
import sys
from scipy import signal
import matplotlib.pyplot as plt

"""参考URL
- IIRフィルタの伝達関数設計：https://www.cqpub.co.jp/interface/sample/200609/I0609121.pdf
- 零点、極の参考場所：https://www.firstpr.com.au/dsp/pink-noise/#Filtering:~:text=%E3%81%A8%E3%81%A6%E3%82%82%E4%BE%BF%E5%88%A9%E3%81%A7%E3%81%99%E3%80%82-,%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%8E%E3%82%A4%E3%82%BA%E3%82%92%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6%E3%83%94%E3%83%B3%E3%82%AF%E8%89%B2%E3%81%AB%E3%81%99%E3%82%8B,-%E6%9C%80%E3%82%82%E5%8D%98%E7%B4%94%E3%81%AA
- 同上：https://dsp.stackexchange.com/questions/27520/filter-to-add-3db-per-octave
- zpk2tf：https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.zpk2tf.html#scipy.signal.zpk2tf
"""

def white_noise(fs, sec):
  seed = 1
  rng = np.random.default_rng(seed)
  return rng.normal(loc=0., size=fs * sec)

# def pink_noise(fs, sec):
  # cutoff_freq = 80
  # バターワース特性：n * 20db/decade
  # 理想は 10db/decade = 約 3db/oct
  # b, a = signal.butter(2, cutoff_freq, 'lowpass', fs=fs)

def pink_noise(fs, sec):
  # ホワイトノイズを取得
  white = white_noise(fs, sec)
  # poles = [0.99572754, 0.94790649, 0.53567505]
  # zeros = [0.98443604, 0.83392334, 0.07568359]
  poles = [0.7506480, 0.9596204, 0.9940794, 0.9992640]
  zeros = [-0.2213191, 0.4563575, 0.8971910, 0.9844598, 0.9977857]
  A = 0.05
  # 極、零点からフィルター係数系列を取得
  b, a = signal.zpk2tf(zeros, poles, A)
  print(b, a)
  # フィルター係数を用いてIIRフィルタリング
  pink = signal.lfilter(b, a, white)
  return pink

# 高速フーリエ変換
def calc_amp(data, fs):
    '''フーリエ変換して振幅スペクトルを計算する関数
    '''
    N = len(data)
    window = signal.hann(N)
    F = np.fft.fft(data * window)
    freq = np.fft.fftfreq(N, d=1/fs) # 周波数スケール
    F = F / (N / 2) # フーリエ変換の結果を正規化
    F = F * (N / sum(window)) # 窓関数による振幅減少を補正する
    Amp = np.abs(F) # 振幅スペクトル
    return Amp, freq

file_name = sys.argv[1]
fs = 44100
sec = 10
print("generating...")
s = pink_noise(fs, sec)
print("file writing...")
write(file_name, rate=fs, data=s)
print("file writed")
print("generated")

# Amp, freq = calc_amp(s, fs)
# fig, ax = plt.subplots()
# ax.plot(freq[:len(s)//2], Amp[:len(s)//2])
# ax.set_xlabel("Frequency [Hz]")
# ax.set_ylabel("Amplitude")
# ax.grid()
# plt.show()

```

```python
from scipy.io.wavfile import read
import numpy as np
import matplotlib.pyplot as plt

def show_frequency_response(data, filename):
    data_fft = np.fft.rfft(data)
    plt.xscale('log')
    plt.xlabel('Frequency [Hz]')
    plt.ylabel('Intensity [dB]')
    plt.plot(20 * np.log10(np.abs(data_fft)))
    plt.savefig(f"image/{filename}.png")


filenames = ["amptest4"]
for filename in filenames:
  fs, data = read(f"{filename}.wav")

# N = len(data)

# F = np.fft.fft(data)
# freq = np.fft.fftfreq(N, d=1 / fs)

# F = F / (N / 2)

# Amp = np.abs(F) ** 2
# fig, ax = plt.subplots()
# ax.plot(freq[:N//2], Amp[:N//2])
# ax.set_xlabel("Frequency [Hz]")
# ax.set_ylabel("Amplitude")
# ax.grid()
# plt.show()

  show_frequency_response(data, filename)
```

```md
# ノイズの定義

## ピンクノイズ

1/f ゆらぎ

-3db/oct = -10db/decade

ピンクの由来：周波数が低い成分は赤であり、ローパスフィルタをかけているので、ホワイトノイズよりピンクっぽくなるため

## ホワイトノイズ

単位周波数帯域(1Hz)に含まれる成分の強さが周波数に無関係に一定

ホワイトの由来：すべての波長の光を含む光は白色

```
