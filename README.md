

## git emoji prefixの設定

Windows環境ではgitbash等のbashを実行できる環境を用意するかコマンドを変更してください
```
git config core.hooksPath .githooks
chmod a+x .githooks/prepare-commit-msg
```

## コンポーネント分けの基準

atomic designを採用

### atoms

* 状態を持たない事
* 一つの要素で構成されている事
* 再利用される事が前提
* テキスト、ボタン、インプット等

### molecules
* 状態を持たない事
* 複数のatomsで構成されている事
* 再利用される事が前提

フォームコントロール　ボタンエリア等

### organisms

* 状態を持っても良い
* 複数のmoleculeまたはatomsで構成されている事

### pages
* 状態を持っても良い
* pagesは複数のorganismsで構成されている事(atoms, moleculesが含まれていない事を目標にする)

### template
* 状態は基本的に持たない事(メニューの表示状態等は持つことがある)
* 複数のorganismsで構成されている事