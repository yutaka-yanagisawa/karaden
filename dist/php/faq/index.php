<?php $title = "FAQ（よくある質問）| SMS送信サービス「空電プッシュ」";?>
<?php $description = "空電プッシュについて、お客さまから寄せられたサービスに関するご質問等を掲載しております。APIやパラメーターなどのインタフェース仕様、利用者の端末について、ご利用条件などを記載しています";?>
<?php $keywords = "SMS,空電プッシュについて,空電プッシュとは,FAQ,仕様,機能,端末,利用条件";?>
<?php $path = "../";?>
<?php include('../_inc/head.php'); ?>
  <body id="faq">
    <?php include('../_inc/body-top.php'); ?>
    <!-- Google Tag Manager (noscript)-->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-0000000" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript)-->
    <div class="wrapper">
      <?php include('../_inc/header.php'); ?>
      <section class="section section-mainvisual" id="mainvisual">
        <div class="mainvisual-block mainvisual-block--lower mainvisual-block--faq">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="../">空電プッシュ</a></li>
            <li class="breadcrumb-item"><span>よくある質問</span></li>
          </ul>
          <h1 class="page-heading">よくある質問</h1>
        </div>
      </section>
      <section class="section section-faq" id="section-faq">
        <div class="inner">
          <h3 class="block-heading">1.空電（からでん）プッシュについて</h3>
          <div class="faq-block pcmt60 spmt60">
            <div class="item">
              <div class="question"><span>Q1</span>
                <p class="text text-question">空電（からでん）プッシュとはどういったサービスですか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">「空電プッシュ」は携帯電話利用者へSMSを送信するサービスです。簡単・確実に顧客とのコンタクトを実現するサービスです。セキュリティや信頼性の高さ、操作性や利便性の高さより、多数の企業や自治体にご導入いただいております。</p>
                </div>
              </div>
            </div>
          </div>
          <h3 class="block-heading pcmt100 spmt100">2.空電プッシュのインタフェース仕様について</h3>
          <div class="faq-block pcmt60 spmt60">
            <div class="item">
              <div class="question"><span>Q1</span>
                <p class="text text-question">空電プッシュにはどのような送信方法がありますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">「空電プッシュ」は、4つの送信方法がご利用いただけます。ご利用用途に合わせてご選択ください。<br><br>・SMSの一斉送信／個別送信<br>宛先電話番号の個別入力送信やCSVファイルアップロードによる一斉送信をWeb画面から実施できます。<br><br>・APIによるSMS送信<br>お客様のシステムから空電プッシュのAPIを利用することで、業務に連携したSMS送信を行うことができます。<br><br>・IVR(自動音声応答) と連携したSMS送信<br>電話をかけてきたお客様に対して、音声ガイダンス(IVR)によりお客様のニーズや問い合わせ内容にあったSMSを送信することが可能です。<br><br>・双方向SMS<br>SMSを送信するだけでなく、お客様からの返信に対して自動応答ができます。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q2</span>
                <p class="text text-question">APIへの接続方式はどのようなものですか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">インターネット（SSL通信）で接続し、送信要求時には必要なパラメータをPOSTで実行します。詳細につきましては、NDA（秘密保持契約）を締結いただき、「API仕様書」にてご提示させていただきます。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q3</span>
                <p class="text text-question">SMSを送信するためには何を準備すれば良いですか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">送信する宛先の「携帯番号」だけで送信できます。なお、API送信の場合は、機能に応じたパラメーターをご用意しております。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q4</span>
                <p class="text text-question">送信するメッセージは、携帯キャリアごとに指定できますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">ドコモ、au、ソフトバンクおよびオプション携帯キャリア(PHS)それぞれにご登録が可能です。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q5</span>
                <p class="text text-question">一斉送信することは可能ですか？また、送信数の制限はありますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">WEB送信の場合：1通ずつ宛先とメッセージを指定して送信する「個別送信」とCSVファイルで複数の宛先に一斉にSMS送信を行う「グループ送信」の2種類があります。<br>いずれも1日の送信数上限など送信数の制限はございません。なお「グループ送信」は1回の操作で1万件まで送信可能です。<br><br>API送信の場合： システム連携いただく事で対応可能です。 お客様側で送信リクエストを連続して出すプログラムを開発いただきます。<br>1日のリクエスト回数や送信数上限などの制限はございません。</p>
                </div>
              </div>
            </div>
          </div>
          <h3 class="block-heading pcmt100 spmt100">3.その他、機能について</h3>
          <div class="faq-block pcmt60 spmt60">
            <div class="item">
              <div class="question"><span>Q1</span>
                <p class="text text-question">送信ログを自動で取得できますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">可能です。管理用のAPIをご用意しておりますので、送信ログやレポートの取得等にご利用いただけます。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q2</span>
                <p class="text text-question">長文分割機能とはどういった機能ですか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">携帯キャリア・受信端末機種等を問わず、1回の送信要求で『最大700文字』のメッセージを送信できる機能です。<br>携帯キャリア表示仕様と異なり、70文字を超過した場合のメッセージ表示順序の乱れや一部メッセージの非表示などを回避できます。</p>
                </div>
              </div>
            </div>
          </div>
          <h3 class="block-heading pcmt100 spmt100">4.利用者端末（SMS受信）について</h3>
          <div class="faq-block pcmt60 spmt60">
            <div class="item">
              <div class="question"><span>Q1</span>
                <p class="text text-question">空電プッシュを使って送信したSMSはフィーチャーフォン(ガラケー)にも届きますか？他に届かない端末はありますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">ドコモ、au、ソフトバンクおよびY!モバイルの携帯端末でSMS受信可能な携帯電話であれば、SMSが届きます。但し、プリペイド携帯やメッセージが表示できない端末には送信できません。<br>また、PHS端末へも送信できます。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q2</span>
                <p class="text text-question">MVMO（格安SIM）にもSMSを送ることは可能ですか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">ドコモ、au、ソフトバンク回線を利用しているMVNOの携帯電話には、SMS送信可能です。ただし、SMS受信可能な端末でかつSMS契約を締結している携帯電話端末のみになります。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q3</span>
                <p class="text text-question">海外にいる人にもSMSを送信することはできますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">海外ローミングでSMS受信が可能な端末であれば可能です。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q4</span>
                <p class="text text-question">利用者への送信同意の取り方はどうしたら良いですか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">利用者の同意に基づいて取得したもので、問合せがあった場合にも、利用者に説明できる内容であれば、送信同意の取得方法、取得結果の保存等に関する定めはございません。ただし、送信同意の取得方法、取得結果の保存方法について、サービスご利用前に確認させていただきます。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q5</span>
                <p class="text text-question">「送信元電話番号（From）」は指定できますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">ドコモ、au、楽天は指定可能です。ソフトバンクはサービス共通番号※となります。<br>※オプションにより6桁のお客様専用番号をご提供いたします。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q6</span>
                <p class="text text-question">「送信元（From）」はアルファベット文字なども利用できますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">国内向けに送信する場合には、利用いただけません。お客様所有の通話可能な電話番号のみ指定できます。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q7</span>
                <p class="text text-question">利用者端末が圏外だった場合、SMSは再送されますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">再送有無を選択いただけます。なお、再送時間は携帯キャリアによって異なります。詳細につきましては、お問合せください。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q8</span>
                <p class="text text-question">利用者端末の受信結果を確認することができますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">再送方法の指定及び携帯キャリアによって異なります。詳細につきましては、お問合せください。</p>
                </div>
              </div>
            </div>
          </div>
          <h3 class="block-heading pcmt100 spmt100">5.ご利用条件について</h3>
          <div class="faq-block pcmt60 spmt60">
            <div class="item">
              <div class="question"><span>Q1</span>
                <p class="text text-question">利用条件はありますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">ご利用目的、ご利用方法等について事前の審査がございます。詳しくはお問合せください。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q2</span>
                <p class="text text-question">空電プッシュを利用するにあたってどういった手続きが必要ですか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">申込書と設定内容に関する確認書のご提出が必要となります。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q3</span>
                <p class="text text-question">申し込み後、どれくらいの期間で利用できますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">最短3営業日で利用することが可能です。</p>
                </div>
              </div>
            </div>
          </div>
          <h3 class="block-heading pcmt100 spmt100">6.その他</h3>
          <div class="faq-block pcmt60 spmt60">
            <div class="item">
              <div class="question"><span>Q1</span>
                <p class="text text-question">代理店制度はありますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">代理店制度をご用意しております。詳しくは、「<a class="text-link" href="">代理店について</a>」をご参照ください。</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="question"><span>Q2</span>
                <p class="text text-question">自社サービスと連携してサービス提供することはできますか？</p>
              </div>
              <div class="answer">
                <div class="text-answer-wrap"><span>A</span>
                  <p class="text text-answer">自社サービスのオプションサービスとしてご提供いただけます。代理店契約をご希望の方は代理店制度をご用意しております。詳しくは、「<a class="text-link" href="">代理店について</a>」をご参照ください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-contact" id="contact">
        <div class="inner">
          <h2 class="section-heading font-white">お問合せ</h2>
          <p class="section-lead section-lead--contact font-white">空電プッシュは、国内シェアNo.1の<br class="sp">法人向けSMS送信サービスです。<br>ご不明な点はお気軽にお問い合わせください。<br>利用用途や配信数に応じて最適なご提案をいたします。</p>
          <div class="contact-block"><a class="contact-btn pcmt70" href="">資料請求・お問合せ</a><a class="agency-btn" href="">代理店募集</a></div>
        </div>
      </section>
      <?php include('../_inc/footer.php'); ?>
    </div>
    <?php include('../_inc/body-bottom.php'); ?>
  </body>
</html>