---
title: MacでGitをInstallする際の初期設定
imgsrc: blog/github.svg
description: 'MacでGitの初期設定をする際、細かい部分を調べるのが面倒だったので、ここにまとめておきました。新しくMacを買ってGitを設定する方の一助となれば幸いです。'
position: 4
category: 設定
tags: [Git, Mac]
version: 1.0
fullscreen: true
---

## はじめに

新しいMacを買った時に、以前のMacの設定を確認したりだとか、毎回細かいところをググって調べるのが面倒だったので、ここにある程度まとめておきました。

<br>

研究室でも新B4生にMacを配布したばかりなので、gitを設定する時の一助となれば良いなと思い、少し細かめに書いています。

## Command line tools for Xcodeのインストール

最初に、下記コマンドをターミナルで実行し、`Command line tools for Xcode`をインストールします。

```bash:zsh
  
$ xcode-select --install
```

## Homebrewのインストール

[HomebrewのHP](https://brew.sh/index_ja)に記載されている、
```bash:zsh
  
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
をターミナルで実行します。その後

```bash:zsh
  
$ brew -v
```
でHomebrewのバージョンが表示されればインストール完了です。

## zshのインストール

ターミナルでbashを使用している方は、こちらの章でHomebrewを用いてzshをインストールします。

```bash:zsh
  
$ brew install zsh
$ ls /usr/local/bin | grep zsh # zshがあることを確認する
$ chsh -s /usr/local/bin/zsh
$ echo $SHELL # /usr/local/bin/zsh が使用されていることを確認する
```

## gitのインストール

Homebrewでインストールしたgitを使用します。

```bash:zsh
  
$ brew install git
```

Homebrewでインストールしたgitのパスを通すため、vim等で`~/.zshrc`に以下を追記します。

```bash:~/.zshrc
  
# HomebrewでInstallしたGitを使う
export PATH=/usr/local/bin/git:$PATH
```

Homebrewでインストールしたgitが使用されているか確認します。

```bash:zsh
  
$ which git
/usr/local/bin/git # この表示が出ればok
```

確認できたら、ついでにgitconfigを設定します。

```bash:zsh
  
$ git config --global user.name "適当なユーザネーム"
$ git config --global user.email "GitHubに登録しているメールアドレス"
```

設定した内容は`cat ~/.gitconfig`で見ることができます。

## GitHubとの通信に使用するSSH鍵の生成

ターミナルで下記のコマンドを実行します。

```bash:zsh
  
$ ssh-keygen -t ed25519
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/username/.ssh/id_ed25519): # ファイル名と場所を変更。SSH鍵の使い回しを避けるために、gitHub_ed25519のような名前にしても良いかも
Enter passphrase (empty for no passphrase): # パスワードは必ず設定した方が良いです。
Enter same passphrase again:
```

```bash:zsh
  
# 鍵が生成されているか確認
$ ls ~/.ssh/
github_ed25519    github_ed25519.pub
```

もし誤ってデスクトップ等に保存してしまった場合は、`mkdir ~/.ssh`で.sshディレクトリを作成し、`mv github_ed25519* ~/.ssh`で~/.sshディレクトリに公開鍵・秘密鍵の両方を入れるようにしてください。

## GitHubへのSSH鍵の登録

~/.sshに移動し、公開鍵の中身をコピーします。

```bash:zsh
  
$ cat ~/.ssh/github_ed25519.pub | pbcopy
```

GitHubのSettings > SSH and GPG keysの画面で、`New SSH key`のボタンを押して、Titleには適当な名前を記入し、Keyには公開鍵の中身を貼り付けて`Add SSH key`を押せば、GitHubへの公開鍵の登録は完了です。（後で画像貼れたら貼ります）

## GitHubへの通信の確認

先ほど登録した公開鍵で、ローカルマシンとGitHubで通信できるかを試します。

まずは`~/.ssh`ディレクトリに`config`を作成し、下記内容を記入します。

```bash:~/.ssh./config
  
Host github.com
  User git
  HostName github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/github_ed25519
```

確認のために、sshコマンドで通信を試みます。

```bash:zsh
  
$ ssh -T git@github.com
~ 省略 ~
# fingerprintを登録する
# fingerprintとはサーバの公開鍵のハッシュ値のことで、公開鍵を入手していなくても通信先のサーバの正当性が担保できる仕組みに利用される
Are you sure you want to continue connectiong (yes/no)? yes

# この表示が出れば通信できています。
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

上記でGitHubへの通信が確認できました。

## gitのカスタマイズ

ここからはお好みですが、gitコマンドの補完の有効化や、リポジトリの状態、リモートブランチと差分があるか、現在どのブランチで作業しているかなどの情報を、ターミナルに常に表示させるために、`~/.zshrc`に以下を追記します。

```bash:~/.zshrc
  
source /usr/local/Cellar/git/`git version | awk '{print $3}'`/etc/bash_completion.d/git-prompt.sh

fpath=($(brew --prefix)/share/zsh/site-functions $fpath)

# 補完機能有効にする
autoload -U compinit
compinit -u

# 補完候補に色つける
autoload -U colors
colors
zstyle ':completion:*' list-colors "${LS_COLORS}"

# 単語の入力途中でもTab補完を有効化
setopt complete_in_word
# 補完候補をハイライト
zstyle ':completion:*:default' menu select=1
# キャッシュの利用による補完の高速化
zstyle ':completion::complete:*' use-cache true
# 大文字、小文字を区別せず補完する
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'
# 補完リストの表示間隔を狭くする
setopt list_packed

# ブランチ名を表示する
fpath=(~/.zsh $fpath)
if [ -f ${HOME}/.zsh/git-completion.zsh ]; then
  zstyle ":completion:*:*:git:*" script ~/.zsh/git-completion.zsh
fi
if [ -f ${HOME}/.zsh/git-prompt.sh ]; then
  source ${HOME}/.zsh/git-prompt.sh
fi

GIT_PS1_SHOWDIRTYSTATE=true
GIT_PS1_SHOWUNTRACKEDFILES=true
GIT_PS1_SHOWSTASHSTATE=true
GIT_PS1_SHOWUPSTREAM=auto

# ターミナルでの表示方法
setopt PROMPT_SUBST ; PS1='%F{green}%n@%m%f: %F{cyan}%~%f %F{red}$(__git_ps1 "(%s)")%f
\$ '
```

以上でMacでのGitの初期設定は完了です！  
お疲れ様でした！
