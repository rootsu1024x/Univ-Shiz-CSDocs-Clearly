Univ-Shiz-CSDocs-Clearly
========================

静大のCSコース向けの読みづらいドキュメントをなるべく読みやすくするためのChromeプラグイン

##これはなに？

静岡大学情報学部、CSコースのみなさん。

アルゴリズムとデータ構造などの講義の課題ページ、とっても見づらいですよね。

見やすくできるように、Chromeプラグインを作りました。

##つかいかたは？

1. gitを用いてcloneするか、githubのページからソースコードをアーカイブ形式でダウンロードし、解凍する
2. Chromeを開き、メニュー→ツールから拡張機能ページを開く
3. デベロッパーモードのチェックボックスを入れる
4. パッケージ化されていない拡張機能を読み込む から、ダウンロードし解凍されたフォルダを指定する
5. 対応しているページを開く(http://\*.inf.shizuoka.ac.jp/\* の中の講義ページ群の、課題個別ページに適用することを前提として作られています)
6. おもむろにCtrl+qを押す
7. レイアウト等が切り替わり見やすくなる
8. 好みに応じてrewrite.jsを自分好みにいじる

ちなみに、リロードするともとに戻ります。
ページを開いた瞬間に実行させたい！という方は

    $(function(){
    	$(window).keydown(function(e){
    		if(e.ctrlKey && e.keyCode == 81){//Ctrl+qでリライト
    			rewrite();
    		}
    	});
    });

これを

    $(function(){
    	rewrite();
    });

こうするとしてくれますが、課題個別ページ以外にも適用されてしまうため見づらくなることこの上ないと思いますので、非推奨です。

##さらに読みやすくする追加機能

###インビジブルキャンセラ

いわゆる「あぶり出し」テキストを何度もクリックドラッグする手間を省きます。

あぶり出しテキストがある場所(の一部でOKです)を選択してCtrl+iを押すと、選択部分が含まれているタグ内のすべての文字列がRGB反転されます

もう一度選択してCtrl+iを押すと再反転(反転解除)されます。

これもリロードすると元に戻ります。

###ブックマーク

Ctrl+Alt+キーボード上部の数字キー1～9でStepN(厳密にはh2タグの0番目～8番目)に[DONE HERE]や[ここまでやった]などのしおりタグを付けることができます。

インデックスにも同様のものが付きます。

Ctrl+Alt+0キーでブックマークを解除します。


##あなた好みにカスタマイズ

コード中の

    /* 設定可能 >> */
    // このあたりのコードが変更可能
    /* << 設定可能 */

と記述されている部分のコードは(それなりに)安全かつ容易に変更が可能です。

しおりの文字列が気にいらない、リストのイメージはやっぱりデフォルトのほうがいい、ハイライトする文字列や色を変えたい、など、ご自由にカスタマイズしてください。