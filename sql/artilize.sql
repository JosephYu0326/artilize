-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-06-14 18:33:04
-- 伺服器版本： 8.0.28
-- PHP 版本： 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `artilize`
--

-- --------------------------------------------------------

--
-- 資料表結構 `blog_article`
--

CREATE TABLE `blog_article` (
  `article_id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_time` datetime NOT NULL,
  `content` text NOT NULL,
  `favorited` tinyint(1) NOT NULL,
  `category` int DEFAULT NULL,
  `users_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- 傾印資料表的資料 `blog_article`
--

INSERT INTO `blog_article` (`article_id`, `title`, `created_time`, `content`, `favorited`, `category`, `users_id`) VALUES
(1, '有人看過奧斯勒的黑盒了嗎', '2021-05-11 23:14:37', '\n湯尼·奥斯勒（Tony Oursler）為美國錄像藝術之先鋒，作品結合獨特且創新的錄像雕塑、雕塑與展演，將影像自二維空間中解放，實驗影像虛實交錯的介面，創造獨特且變動的影像空間。《黑盒-幻魅於形》（Black Box）一展開啟顯影空間內部的神秘未知及源起，透過光線與科學喻象所展開之無限可能。在光影，影像科技，聲音與詩文交錯之間，模擬人類和情感特徵，創造宛如附有生命的雕塑個體，並以幽默又譏諷的語彙，引領觀者穿梭於影像空間，探索個體心靈、精神及大眾文化及現代科技之虛實。此次亞洲首次大型個展展出之經典錄像裝置作品，實驗短片及電影作品，呈現奥斯勒自早期生涯至今其影像創作軌跡。\n\n \n黑盒真的很精彩！還有連續三天的市民日，快去美術館瞧瞧！✔️\n高雄市民入館免費 看黑盒門票250', 0, 1, 7),
(2, '【高雄】奈良美智特展觀展心得', '2021-10-05 10:05:32', '<p>奈良美智是目前日本火紅的當代藝術家之一，連不諳於藝術的我，都在網路上搜尋過他，在今年初得知他即將來台辦理展覽時，就告訴自己一定要好好把握機會。<br>可惜3月開始在北藝大的展覽，幾乎每天都爆滿，加上5月中疫情爆發，本來以為這次大概無法親眼看見他的畫作了，但好險全台疫情趨緩，也讓我在下半年可以利用到高雄時順利欣賞到！</p>\n<p><img class=\"wp-image-2511 lazyloaded\" src=\"https://www.imcynthia.tw/wp-content/uploads/2021/09/1%E9%AB%98%E7%BE%8E%E9%A4%A8.jpg\" sizes=\"(max-width: 1000px) 100vw, 1000px\" srcset=\"https://imcynthia.tw/wp-content/uploads/2021/09/1高美館.jpg 1000w, https://imcynthia.tw/wp-content/uploads/2021/09/1高美館-300x225.jpg 300w, https://imcynthia.tw/wp-content/uploads/2021/09/1高美館-768x576.jpg 768w\" alt=\"\" width=\"372\" height=\"279\" data-src=\"https://www.imcynthia.tw/wp-content/uploads/2021/09/1高美館.jpg\" data-srcset=\"https://imcynthia.tw/wp-content/uploads/2021/09/1高美館.jpg 1000w, https://imcynthia.tw/wp-content/uploads/2021/09/1高美館-300x225.jpg 300w, https://imcynthia.tw/wp-content/uploads/2021/09/1高美館-768x576.jpg 768w\"></p>\n<h3>展覽時間</h3>\n<p>2021/7/24(六)至10/31(日)</p>\n<h3><span id=\"%E5%B1%95%E8%A6%BD%E5%9C%B0%E9%BB%9E\" class=\"ez-toc-section\"></span>展覽地點</h3>\n<p>高雄市立美術館105展覽室</p>\n<div class=\"wp-block-buttons\">\n<div class=\"wp-block-button\">\n<p>高雄場次自7/16(五)開始接受線上預約<span class=\"has-inline-color has-black-color\"><strong>（<a class=\"rank-math-link\" href=\"https://www.kmfa.gov.tw/ExhibitionDetailC001100.aspx?Cond=1579a986-d3ce-4238-a3ae-3ae54536be00\" target=\"_blank\" rel=\"noreferrer noopener nofollow\" aria-label=\"線上預約請點此 (opens in a new tab)\">線上預約請點此</a>）</strong></span>，採取實名制，每次預約人數上限為2名。<br>因為每梯次名額有限，建議在每梯次開放預約時，就上去報名，不然很容易無法預約到自己想要的時間。</p>\n<div class=\"wp-block-buttons\">\n<div class=\"wp-block-button\">\n<h2><span id=\"%E5%A0%B1%E5%88%B0%E6%B5%81%E7%A8%8B\" class=\"ez-toc-section\"></span>報到流程</h2>\n</div>\n</div>\n<p>在自己預約到的時段內可隨時報到，不過要注意的是，假設你是預約15:30-16:30的時段，此時段則包含觀展及購買周邊商品，工作人員會在16:25分時進行清場，好讓下一個時段的人可以進去觀展，所以還是得自己把握時間囉！<br>老實說，我滿喜歡這樣人流管制的設計，無論是從防疫角度出發還是從觀展品質出發都很棒，觀展時不用人擠人真的很舒服呀～</p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img class=\"wp-image-2513 lazyloaded\" src=\"https://www.imcynthia.tw/wp-content/uploads/2021/09/3%E7%A6%81%E6%AD%A2%E6%8B%8D%E7%85%A7-768x1024.jpg\" sizes=\"(max-width: 768px) 100vw, 768px\" srcset=\"https://imcynthia.tw/wp-content/uploads/2021/09/3禁止拍照-768x1024.jpg 768w, https://imcynthia.tw/wp-content/uploads/2021/09/3禁止拍照-225x300.jpg 225w, https://imcynthia.tw/wp-content/uploads/2021/09/3禁止拍照.jpg 1000w\" alt=\"\" width=\"204\" height=\"272\" data-src=\"https://www.imcynthia.tw/wp-content/uploads/2021/09/3禁止拍照-768x1024.jpg\" data-srcset=\"https://imcynthia.tw/wp-content/uploads/2021/09/3禁止拍照-768x1024.jpg 768w, https://imcynthia.tw/wp-content/uploads/2021/09/3禁止拍照-225x300.jpg 225w, https://imcynthia.tw/wp-content/uploads/2021/09/3禁止拍照.jpg 1000w\"></figure>\n</div>\n<p>展區裡面禁止拍攝及錄影，手機也記得調成震動呦～</p>\n<p>不過出入口設有一個展覽主視覺的背板，出來後可以跟他拍一張以茲紀念XD</p>\n<p>除了台北的53件作品，在高雄展的部分還額外增加了26 件新作，包含來台佈展隔離期間創作的8件素描、2019年畫在紙板上的《山子姊姊 YamakoSister/older》與《山子妹妹 YamakoSister/older》，還有《旅行的山子 Traveling Yamako》系列等 15 件攝影作品，希望藉著畫作表達對台灣抗疫的鼓舞與信心。</p>\n<p>關於展場規劃，在粉絲專頁發布的文中有提到奈良美智說：</p>\n<blockquote class=\"wp-block-quote\">\n<p><span class=\"has-inline-color has-vivid-purple-color\">我希望建築物的內部空間與自己的作品有種共鳴感，因此我將非常立體或可說是極簡程度堅固感排列出的作品群，與像是星星一樣散佈、能夠看起來生氣蓬勃排列著的素描群，巧妙地配置在各位看到的位置，並在兩者之間搭配雕塑與繪畫。</span></p>\n</blockquote>\n<p>自己在看展時，有乖乖跟著設計的動線走，可以感受得到這樣的設計讓作品與空間有融合在一起，不過即便沒有照著動線走，也仍然可以看到各自作品獨立的樣貌。</p>\n<p>其中一側的展區，在左右兩側分別放了《月光小姐Miss Moonlight》及《朦朧潮濕的一天Hazy Humid Day》兩幅著名的畫作。</p>\n<p><img src=\"https://imcynthia.tw/wp-content/uploads/2021/09/10%E6%9C%A6%E6%9C%A7%E6%BD%AE%E6%BF%95%E7%9A%84%E4%B8%80%E5%A4%A9%EF%BC%88Hazy-Humid-Day%EF%BC%89fromFB-725x1024.jpg\" width=\"200\"></p>\n<p>而這幅《朦朧潮濕的一天Hazy Humid Day》則是奈良美智為了此次展覽特別畫下的新作品，也是這次展覽的主視覺。<br>創作靈感來自台灣的悶熱氣候，也涵蓋了他對台灣的特殊情感。<br>我非常喜歡畫作中小女孩那色彩繽紛的眼神，總覺得代表了台灣無論是氣候還是人文的多樣性，當然，這種微微的厭世感也讓我不禁與台灣這悶熱令人不適的天氣做出聯想。</p>\n<div class=\"wp-block-buttons\">\n<div class=\"wp-block-button\">\n<h2><span id=\"%E8%A7%80%E5%B1%95%E6%95%B4%E9%AB%94%E5%BF%83%E5%BE%97\" class=\"ez-toc-section\"></span>觀展整體心得</h2>\n</div>\n</div>\n<p>雖然看展前必須先注意預約時間、人數上限等等的瑣事，但看完展後完全不後悔！無論是動線設計或是展間規劃都覺得很好，重要的是，這些作品真的帶給我一種平靜的感受。<br>站在作品前，想像他在創作時那種心無旁鶩的感覺，好像就算是人生再大的事都不是大事，這大概是做喜歡的事都會出現的感覺，而這樣的感覺真的是人生裡該珍惜的寶貝～</p>\n<p>最後，奈良美智特展的最新動態或相關消息，都可以透過<a class=\"rank-math-link\" href=\"https://www.facebook.com/YOSHITOMONARAinTW/?ref=page_internal\" target=\"_blank\" rel=\"noreferrer noopener nofollow\" aria-label=\"粉絲專頁 (opens in a new tab)\"><strong>粉絲專頁</strong></a>來掌握呦！</p>\n</div>\n</div>', 0, 4, 6),
(3, '《瘋癲‧ 夢境‧ 神曲─天才達利》觀展心得', '2022-02-23 10:15:24', '<p>&nbsp;儘管這幾年的疫情擾亂了人們的生活，四周蔓延著不自由的空氣，但偶然看的展覽，卻成為解開心靈的鑰匙。或許自由無須外找，而是從心裡感受。</p>\n<div class=\"article-body\">\n<div class=\"article-content\">\n<div id=\"article-content-inner\" class=\"article-content-inner\">\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_12\" src=\"https://pic.pimg.tw/annie820511/1642818314-1242866187-g_n.jpg\" alt=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_12\" width=\"489\" height=\"367\" loading=\"lazy\"></p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;其實就算沒有疫情，我自己也好幾年沒去看藝術展覽了，依稀有印象的藝術展覽是研究所時看的《奧塞美術館30週年大展──印象‧&nbsp;左岸》。我想對於臺灣人來說「印象派」應該是最耳熟能詳的一個美術詞彙吧，印象派的畫風、光影捕抓的方式，甚是裡頭性格突出的畫家們，相信就算沒看過，大家也略知一、二。故當年想看的便極負盛名莫內、梵谷、雷諾瓦等人的畫，但實際看完卻發現，自己印象最深刻、最喜歡的是法國浪漫主義代表──尤金．德拉克洛瓦的《獵虎圖》（1854）。畫中動態的衝突感，充滿異國情調的色彩，帶有點殖民意味，卻深深地吸引著我的目光。我覺得好的展覽最迷人的地方，便是能擴展自己的視野，從日常貧乏的美感中注入新的活泉。我一直認為對於「美」的喜愛是人類共通的本能（無論是對藝術、音樂或是文學），但對於美感的體會與感受卻是需要培養的，藝術展覽正是一個最初步、最直接的培養途徑。</p>\n<p>&nbsp;</p>\n<p>&nbsp;好像脫離主題太多&hellip;&hellip;不知道大家都是怎麼選擇自己想看的展覽呢？這期剛好有兩個藝術展覽，一個是慕夏、一個則是達利，兩個也都是大家很熟悉的畫家、也都曾到過臺灣，卻是完全極端的風格。一開始我也苦苦思索，有限的預算與時間，到底要去看哪個展覽呢？然而這次達利展主軸圍繞在富有宗教、文藝元素的《神曲》，融合他那超現實的奇特風格，很難不被吸引！加上真跡的加持以及之前疫情的一波三折，開展沒過多久，就決定和友人趕快去一探究竟。</p>\n<p><img title=\"P_20220115_135210\" src=\"https://pic.pimg.tw/annie820511/1642907779-3362652714-g_n.jpg\" alt=\"P_20220115_135210\" width=\"300\" height=\"224\" loading=\"lazy\">&nbsp; &nbsp;</p>\n<p>▲達利的翹鬍子造型據說是來自其崇拜的畫家維拉斯蓋茲&nbsp;</p>\n<p>&nbsp;</p>\n<p>只能說整個展覽充分表現達利的特質「天才與瘋癲一線之隔」，雖然此次主軸為《神曲》，但卻是放在展場的最後一塊。前半場的動線事實上敘寫了達利藝術之路的蛻變，從童年對於家鄉（巴塞隆納小鎮費格拉斯）的印象畫作，到後來1929年成為超現實主義團體核心後所展現的「偏執狂批判法」，並跨出純藝術，開始設計舞台、珠寶，更與當時流行的電影（希區考克）、動畫（迪士尼）合作，連導覽老師也讚嘆：「能做到藝術與設計兼具的天才是少數，而達利正是其一！」或許這也跟達利本身的性格相當大的關係，其最常被批判的便是「商業拜金主義者」，喜好追隨流行卻又標新立異，常被視為是個自信過剩的自戀狂，但不顧世人批判的特立獨行卻又極富魅力。達利曾說：「我和瘋子的差別是我是瘋子，而我和瘋子的差別是我沒有瘋。」遊走在現實與夢境間達利，就像活泉般迸發一層層超越現實的魔幻與想像。</p>\n<p><img title=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_15\" src=\"https://pic.pimg.tw/annie820511/1642904542-3104572695-g_n.jpg\" alt=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_15\" width=\"374\" height=\"280\" loading=\"lazy\"></p>\n<p>▲達利與電影大師希區考克合作的設計</p>\n<p>&nbsp;</p>\n<p><img title=\"line_2114169935023\" src=\"https://pic.pimg.tw/annie820511/1642908114-1160652970-g_n.jpg\" alt=\"line_2114169935023\" width=\"484\" height=\"362\" loading=\"lazy\"></p>\n<p>▲對於遺傳學與生物DNA亦頗有興趣的達利，畫出原子結構的馬匹</p>\n<div class=\"article-inread-ad\" data-adindex=\"2\">&nbsp;</div>\n<div class=\"article-inread-ad\" data-adindex=\"2\">\n<p>&nbsp; &nbsp; &nbsp; &nbsp;展場最後一部分，從地獄、煉獄到天堂三部曲，達利歷經十年、創作一百多幅作品，來詮釋但丁的古典長詩《神曲》。跟隨著主人翁但丁從黑林迷路，在獲得維吉爾的協助後，穿過地獄與煉獄，最終透過貝緹麗彩引導，遊歷天堂、見到了上帝。達利融合了魔幻、恐怖又神秘的風格，繪製出一幅幅不同於人間的景致，從地獄受難的罪人，到煉獄的七大罪過，以及被上帝賜福的眾天使&hellip;&hellip;充滿宗教與心理學的暗示，將人類內心的慾望、幻想投射在畫作當中，我們也彷彿在它們身上看到了自己的影子，讓人不得不驚嘆，不得不佩服，達利真是所謂的天才！</p>\n<p><img title=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_34\" src=\"https://pic.pimg.tw/annie820511/1642910765-1361809699-g_n.jpg\" alt=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_34\" width=\"212\" height=\"284\" loading=\"lazy\">&nbsp;<img title=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_44\" src=\"https://pic.pimg.tw/annie820511/1642910810-3848350670-g_n.jpg\" alt=\"LINE_ALBUM_20220115天才達利展與壽司郎趕場_220122_44\" width=\"211\" height=\"282\" loading=\"lazy\"></p>\n<p>▲〈地獄篇〉中充滿了各種受罰的罪人</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;這次展覽的小缺點是場地感覺有點太狹窄，或許因為我們是假日去看展，人潮特別多，因此在聽導覽的時候，一群人擠在一起，大家都儘量站在場地角落，不影響動線，但也因此沒辦法靠過去看很多畫作細節，都是事後再補看的，導致偶爾無法跟上導覽的節奏。不過我個人還是蠻推薦去聽導覽的，一個人50元卻能聽到1個小時以上的精細解說，導覽老師還會帶出其他達利的生平與作品，很多畫作中隱藏著達利個人的隱喻，真的是多虧導覽老師講解，我才能稍微讀懂。特別印象深刻的是老師在講解維梅爾與維拉斯蓋茲對達利影響，以及達利用自己的創作去致敬兩位偉大的畫家，會感覺到藝術真是一條美麗又豐沛的長河，其能夠源源不絕地奔流至今，真是多虧各時代、各方藝術家的相互激發，以及注入自己獨特的生命歷程。</p>\n</div>\n</div>\n</div>\n</div>', 0, 4, 7),
(4, '會動的文藝復興展覽', '2022-02-26 23:12:26', '有兩張台北展《會動的文藝復興》展覽\r\n一張360，有人有需要嗎\r\n可北車或高雄鳳山面交', 1, 3, 14),
(5, '我看達利展(上) -從達利的生平談他的瘋狂', '2022-02-28 10:19:57', '<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"8ng1c-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"8ng1c-0-0\"><span data-offset-key=\"8ng1c-0-0\">　　大家都說：</span><span data-offset-key=\"8ng1c-0-1\">瘋子與天才只是一線之隔</span><span data-offset-key=\"8ng1c-0-2\">，用這句話說明達利，我覺得真是再貼切不過了！</span></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"8ng1c-0-0\"><span data-offset-key=\"8ng1c-0-2\">在看完中正紀念堂展出的達利展之後，我又很職業病地開始搜尋關於達利的生平，想更多地了解這個人，看看在他展出的天才之作背後，蘊含了那些生命歷程。</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"9qe6e-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"9qe6e-0-0\"><span data-offset-key=\"9qe6e-0-0\">　　要了解一個人的作品，就要先了解這個人。所以這篇文章</span><span data-offset-key=\"9qe6e-0-1\">《從達利的生平談他的瘋狂》會先交代達利的生平，從心理學的角度試著剖析他的成長歷程對他心理、行為上的影響</span><span data-offset-key=\"9qe6e-0-2\">；下一篇文章</span><span data-offset-key=\"9qe6e-0-3\">《從達利的作品談他的天才》會摻雜我個人的投射與心理學的觀點，延伸解析此次展覽的若干作品。</span></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"9qe6e-0-0\">&nbsp;</div>\n</div>\n<div contenteditable=\"false\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"25c7h-0-0\">\n<div><hr></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"3gge3-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"3gge3-0-0\">&nbsp;</div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"3gge3-0-0\">&nbsp;</div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"3gge3-0-0\">&nbsp;</div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"3gge3-0-0\"><strong>(一) 佛洛伊德的追隨者</strong></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"3gge3-0-0\">&nbsp;</div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"3gge3-0-0\"><span data-offset-key=\"ea6o2-0-0\">在看展的時候，我驚訝地發現：原來</span><span data-offset-key=\"ea6o2-0-1\">達利是心理學家佛洛伊德的追隨者。</span><span data-offset-key=\"ea6o2-0-2\">我國小時就曾經在誠品書店看過達利的畫冊，當時只是覺得：這個叔叔畫的作品都好怪喔！東西會飛來飛去，不然就是變得軟趴趴的。現在長大了，搭配展場的介紹文字與本身學過動力取向心理治療的底子，再看達利的藝術作品，就覺得一切都能串起來了！達利的畫，呈現的是</span><span data-offset-key=\"ea6o2-0-3\">意識與潛意識的交界，他試著將潛意識的幻想與夢境的內容</span><span data-offset-key=\"ea6o2-0-4\">，一一搬到意識層面的現實作品中演繹、呈現。某種程度，他的作品本身可以說是精神分析的代言人。</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"ea6o2-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"ea6o2-0-0\">&nbsp;</div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"863js-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"863js-0-0\"><strong>(二) 我是我，還是哥哥？</strong></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"863js-0-0\">&nbsp;</div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"bpuvu-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"bpuvu-0-0\"><span data-offset-key=\"bpuvu-0-0\">早在達利出生前，他媽媽產下一子(即達利的哥哥)，取名叫「薩爾瓦多・達利」，可惜這個孩子在快兩歲時因病過世，達利的哥哥過世九個月後，達利就誕生了，父母沿用與哥哥同樣的名字幫他命名。而且，因為達利跟他死去的哥哥長得十分相像，他父母就覺得他可能是哥哥轉世而來的化身，在他五歲時，父母帶達利到哥哥墳前去掃墓，並告訴達利：他的出生可能是哥哥「轉世」。</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"4n2hk-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"4n2hk-0-0\"><span data-offset-key=\"4n2hk-0-0\">我認為達利的父母之所以這樣做，很明顯是還沒走完哥哥過世事件後的哀悼歷程，以至於非常想念哥哥，所以才會沿用哥哥的名字來幫達利取名，且很渴望死去的孩子可以活過來，所以才會把達利當成哥哥在養。但這樣的作法，也讓達利</span><span data-offset-key=\"4n2hk-0-1\">對「我是誰？」的身分認同上出現混亂，不知道他自己到底只是自己，抑或同時也是哥哥？還是自己只是哥哥的替代品？</span></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"4n2hk-0-0\">&nbsp;</div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"150u9-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"150u9-0-0\"><strong>(三) 我是男，也是女生</strong></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"150u9-0-0\">&nbsp;</div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"150u9-0-0\">達利有個妹妹。在生達利以前，他媽媽想要有個女兒，所以常讓達利穿女裝，導致周遭的鄰居都叫他「漂亮的達利」。達利曾說：「我有時候在夢裡會把我自己夢成一位女人，不過我並不在意我是一位女人，因為這與我是一位男人並無衝突&hellip;」</div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"elj9k-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"elj9k-0-0\"><span data-offset-key=\"elj9k-0-0\">我認為達利媽媽在達利小時候讓他穿女裝的做法，致使達利的</span><span data-offset-key=\"elj9k-0-1\">性別認同上出現困難</span><span data-offset-key=\"elj9k-0-2\">，不曉得自己是要當女生，還是當男生？</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"al96p-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"al96p-0-0\"><span data-offset-key=\"al96p-0-0\">以上身分/性別認同的混亂，包括：我是自己還是哥哥？我要當女生還是男生？這些自我懷疑、混亂的成長經歷，大家不覺得跟某個日本藝術家很像嗎？沒錯，如果你還記得，藝術大師奈良美智也是有類似的生平經歷的(有興趣的讀者可閱讀我之前寫的文章</span><a class=\"link__DefaultLink-sc-1gajul6-0 hhNBPM draft--a\" href=\"https://vocus.cc/article/61c9d58dfd89780001dd9ae4\" target=\"_blank\" rel=\"noopener\"><span data-offset-key=\"al96p-1-0\">《我看奈良美智(下)》</span></a><span data-offset-key=\"al96p-2-0\">。)沒想到這兩位藝術大師一個在日本，一個在西班牙，卻都有這些相似的童年經驗。我深信這些童年經驗對他們後續的藝術創作風格都有深刻的影響。</span></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"al96p-0-0\">&nbsp;</div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"al96p-0-0\"><strong>(四) 痛苦，讓我快樂</strong></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"al96p-0-0\">&nbsp;</div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"8vdld-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"8vdld-0-0\"><span data-offset-key=\"8vdld-0-0\">達利曾承認他有施虐、受虐傾向，也曾說：「我和瘋子唯一的區別，在於我不是瘋子。我和人類唯一的區別，在於我是瘋子。」在他小時候，就喜歡讓自己從樓梯上摔下來，對他來說，這樣做的痛苦是微小的，快樂是巨大的。有一次，小時候的他曾經和夥伴外出散步，看到橋上安全護欄有個缺口。小達利眼見四下無人，就把夥伴推下橋去，夥伴從高橋上摔落，嚴重受傷。長大後的他得知太太卡拉對他不忠，也曾打斷卡拉兩條肋骨。</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"5c9dm-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"5c9dm-0-0\"><span data-offset-key=\"5c9dm-0-0\">我認為達利</span><span data-offset-key=\"5c9dm-0-1\">在情緒控管上有障礙，對苦與樂難以區辨，在關係界線上也不太能拿捏得當，怎樣的關係才是好的？他並不清楚。以至於對各種人事物的好壞、善惡的定義上都產生混亂</span><span data-offset-key=\"5c9dm-0-2\">，就像他自認本質上「是瘋子，也是正常人」一樣。</span></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"5c9dm-0-0\">&nbsp;</div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"5c9dm-0-0\"><strong>(五)沒人有資格評論我的畫</strong></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"5c9dm-0-0\">&nbsp;</div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"fr8j1-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"fr8j1-0-0\"><span data-offset-key=\"fr8j1-0-0\">達利求學期間，就表現出奇特怪異的個性與言論，導致他被學校退學。退學原因是因為他批評學校裡的教授，對教授們言正聲明：「沒有人有資格評論我的繪畫&hellip;」。</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"ddbv-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"ddbv-0-0\"><span data-offset-key=\"ddbv-0-0\">我認為，當達利表達：「沒人有資格評論我的繪畫」時，某種程度也是在說：「</span><span data-offset-key=\"ddbv-0-1\">你們不理解我(這個人)</span><span data-offset-key=\"ddbv-0-2\">。既不理解(我這個人)，也沒有想嘗試理解(我這個人)，那有什麼資格對我的畫作指指點點？」</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"7714n-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"7714n-0-0\"><span data-offset-key=\"7714n-0-0\">　　我想，後人(包括我們)常常都會想要詮釋到底達利畫作中荒誕、怪異、詭譎、離奇的畫面到底代表什麼意思？在我們給予詮釋之前，不妨先參考本文中介紹的達利生平，或進一步閱覽下方備註的生平簡介，再進一步去欣賞達利的作品，也許會讓我們更靠近達利這個人，更理解他的作品對我們的意義是什麼。</span></div>\n</div>\n<div contenteditable=\"false\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"8trji-0-0\">\n<div><hr></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"bsgoq-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"bsgoq-0-0\"><span data-offset-key=\"bsgoq-0-0\">*備註一: 本文中敘述到達利生平的資料，都會以</span><span data-offset-key=\"bsgoq-0-1\">斜體字</span><span data-offset-key=\"bsgoq-0-2\">呈現。</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"anpls-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"anpls-0-0\"><span data-offset-key=\"anpls-0-0\">*備註二: 文中達利生平的資料來源引自</span><a class=\"link__DefaultLink-sc-1gajul6-0 hhNBPM draft--a\" href=\"http://appleazure.blogspot.com/2012/12/blog-post_18.html\" target=\"_blank\" rel=\"noopener\"><span data-offset-key=\"anpls-1-0\">《瘋狂達利的生平介紹》</span></a></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"emr0s\" data-offset-key=\"7018i-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"7018i-0-0\"><span data-offset-key=\"7018i-0-0\">、</span><a class=\"link__DefaultLink-sc-1gajul6-0 hhNBPM draft--a\" href=\"https://www.thenewslens.com/article/61146\" target=\"_blank\" rel=\"noopener\"><span data-offset-key=\"7018i-1-0\">《12個你所不知道的瘋子薩爾瓦多・達利，關於手淫、施虐、希特勒的秘密》</span></a><span data-offset-key=\"7018i-2-0\">與此次達利展現場的文字簡介資料，有興趣的讀者可以點入文章延伸閱讀。</span></div>\n</div>', 0, 4, 12),
(6, '我看達利展(下) -從達利的作品談他的天才', '2022-03-01 10:22:44', '<div class=\"draft-block draft--p left\">上一篇文章有介紹達利的生平，這篇文章就來談談他的生平怎麼影響他的作品，還有從心理學角度與我的投射出發，跟大家分享我怎麼詮釋、分析他的作品蘊含的意義。</div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\"><strong>一、迪士尼動畫短片《命運》</strong></div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\">上篇文章沒有提到的是：達利的媽媽在他16歲就過世了，媽媽過世後，他爸爸就跟媽媽的妹妹結婚。文獻中有記載，他媽媽過世，對他而言是很大的精神衝擊。我認為達利展中放映的迪士尼動畫短片《命運》，看似是敘述古希臘神話的時間之神Chronos與一名凡間女子墜入愛河的故事，實則是追悼過世的媽媽的作品。這部動畫當初由達利與迪士尼合作，只可惜因為當時迪士尼經費不足，這部動畫並沒有上映，但本片仍獲得了2013年奧斯卡最佳動畫短片獎的提名。我想，就算這部動畫上映了，也不太適合小孩觀賞，因為動畫畫面、情節裡的深意恐怕普遍孩子都難以體會，甚至連我們這群大人也只知其一、不知其二。</div>\n<div class=\"draft-block draft--p left\">我從這部動畫中看到小時候的達利想要找死去的媽媽，但就是無能為力，只能看著時間不斷地流逝。動畫中的時光是可以倒流的，可以和媽媽相會的。但短暫地與媽媽相會、相處後，媽媽即刻就化為了雕像，再也不動了。我認為這段情節是在說明達利心中很感傷，他覺得只跟媽媽相聚16年的光陰實在太短了，對於時光不停流轉，卻再也喚不回媽媽這件事，他是感到很悲傷、失落的。那個雕像，也象徵了達利心中母親的形象猶存，常常想念著媽媽。</div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\"><strong>二、皇者心</strong></div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\">看完了動畫，走幾步路跨到另一個展區，就會看到達利親手打造、送給愛人卡拉的「皇者心」。這個打造成心型的華麗紅寶石就像人的心臟一樣，卡拉若配戴上，每走一步，寶石心臟就會跳動一下。這個「皇者心」一方面是象徵著他對卡拉永恆的愛，就像是他有著源源不絕的動力深愛著卡拉；另一方面，也是在說他希望卡拉一直活著，別像媽媽一樣這麼快就離開他，所以做一個會動的寶石心臟送給卡拉，象徵卡拉的長生不死。</div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\"><strong>三、圓柱中的倒映畫</strong></div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\">達利展中有一區放置了大約五六幅以上的「倒映畫」，例如: 你看到畫作中明明是昆蟲，但卻透過圓柱鏡子中觀賞到的景象卻是人臉或戰爭的畫面！畫中的圖像與圓柱鏡中的畫面截然不同，兩個畫面各成一幅作品。達利善用鏡面的反射與錯覺效果，才得以創作出這樣的效果！不得不說這位大師頭腦好好，非常會利用空間、反射、對稱的概念，才能一邊畫圖，一邊在心中想像另個作品呈現出的模樣，利用圓柱鏡展示心像(Mental Image，定義可見備註一)。</div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\"><strong>四、但丁神曲</strong></div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"draft-block draft--p left\">達利展的最後一區是展示達利畫的「但丁神曲」一百幅插畫。但丁神曲是詩歌寫成的，主要是在敘述西方世界的宗教如何看待死後的世界，將死後的世界畫分為「接受懲罰的地獄」、「洗滌罪孽的煉獄」還有「超脫罪惡的天堂」。我覺得達利筆下的「但丁神曲」諸多畫作很符合榮格學派所研究的象徵意涵，希望榮格跟達利不要從地下跳起來打我XD我知道佛洛伊德跟榮格蠻不合的，而達利是追隨佛洛伊德學派的人。但我真心覺得如果你很喜歡榮格學派所說的象徵，或者你本身對集體潛意識、符號學、夢境、意象等東西感興趣，最後這個展區很適合你一一細究，慢慢品味每幅作品中的象徵意涵。</div>\n<div class=\"draft-block draft--p left\">&nbsp;</div>\n<div class=\"hr__AtomHrContainer-sc-1afmttx-0 dsBIOm draft-block\"><hr class=\"hr__Hr-sc-1afmttx-2 dOXRXF\"></div>\n<div class=\"draft-block draft--p left\">*備註一：心像(Mental Image)，指的是在心中形成的形象、圖像，可代表某個人，或某事物。心像呈現的有時並非肉眼實際看到的東西，而是心中感覺到的圖像。例如: 厭食症病人有些很瘦，瘦到低於平均值以下，但他們心像中感覺到的自己可能很胖，所以才會特別克制食量、怕再變胖。</div>\n<div class=\"draft-block draft--p left\">*備註二：本文內容參考資料來源如下：</div>\n<div class=\"draft-block draft--p left\">1.薩爾瓦多&middot;達利 在維基百科的介紹。</div>\n<div class=\"draft-block draft--p left\">2.<a class=\"draft--a\" href=\"https://travel.yam.com/article/126625\" target=\"_blank\" rel=\"noopener\">https://travel.yam.com/article/126625</a></div>\n<div class=\"draft-block draft--p left\">3.<a class=\"draft--a\" href=\"https://meet.eslite.com/tw/tc/article/202201250002\" target=\"_blank\" rel=\"noopener\">https://meet.eslite.com/tw/tc/article/202201250002</a></div>', 0, 4, 12),
(7, '返校實境體驗展｜翠華中學在松山文創園區', '2022-03-01 11:30:12', '<p><img class=\"aligncenter wp-image-2667 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_1.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_1.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_1-300x180.jpg 300w\" alt=\"返校實境體驗展\" width=\"438\" height=\"263\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p>返校是一個於2017年由赤燭工作室開發的遊戲，背景為戒嚴時期，遊戲內採用大量台灣的名間信仰，還有白色恐怖時期的元素，是一套非常好玩的恐怖解謎遊戲。</p>\n<p>而返校實境體驗展顧名思義，就是將遊戲裡面的場景搬到現實來，讓玩家能以沉浸式體驗來回顧返校。當時看到這個展覽，真的是超級興奮的，馬上跟朋友說一定要去看！</p>\n<h2>返校實境體驗展門票</h2>\n<p>．<strong>展期</strong>：2020/7/6～2020/9/20。<br>．<strong>時間</strong>：10:00～18:00，17:30停止售票及入場。<br>．<strong>地點</strong>：松山文創園區北向製菸工廠，在台北文創大樓對面。<br>．<strong>門票</strong>：350元，展覽期間持紙本振興三倍券可享優惠價300元，每人限購兩張。<br>．<a href=\"https://detentionexhibition.udnfunlife.com/#/?id=16\" target=\"_blank\" rel=\"noopener noreferrer\">返校實境體驗展官網</a>／<a href=\"https://www.facebook.com/DetentionExhibition/\" target=\"_blank\" rel=\"noopener noreferrer\">粉專</a></p>\n<h2>返校實境體驗展心得</h2>\n<p><img class=\"aligncenter wp-image-2669 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_3.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_3.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_3-300x180.jpg 300w\" alt=\"返校實境體驗展售票\" width=\"367\" height=\"220\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p>現場購票的售票亭，從最一開始的售票亭就有濃濃的返校感了。</p>\n<p><img class=\"aligncenter wp-image-2670 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_4.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_4.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_4-300x180.jpg 300w\" alt=\"返校實境體驗展在松菸\" width=\"398\" height=\"239\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p><img class=\"aligncenter wp-image-2671 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_5.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_5.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_5-300x180.jpg 300w\" alt=\"返校實境體驗展\" width=\"402\" height=\"241\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p>看到入口寫著「翠華高級中學」，就已經起雞皮疙瘩了，當初玩返校的時候，一直被場景跟音效嚇到，但是整個遊戲非常棒，因此不管說什麼也一定要來看看實境體驗展，即使可能會很可怕（QQ）。</p>\n<p><img class=\"aligncenter wp-image-2672 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_6.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_6.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_6-300x180.jpg 300w\" alt=\"返校實境體驗展門票\" width=\"365\" height=\"219\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p>這次買的是預售票，只有在展覽開始前販售，只要250元，真的是超級佛心的價格啊！返校實境體驗展分成四個展區，分別是：實境沉浸式體驗區、場景道具互動拍照區、關於《返校》與赤燭團隊的故事、限定商店。</p>\n<p>平日早上11點多來看返校展，沒想到有這麼多人在排隊。返校實境體驗展是一批一批放進展區的，因此需要排隊一下。看udn售票網上的注意事項，寫著展覽參觀人數有管制，可於現場領取號碼牌，每日取號上視狀況調整，不過今天去只按照工作人員的指示排隊，沒有拿到號碼牌。</p>\n<p>排了快20分鐘，終於要輪到我們了。進去展場之前，會有工作人員出來量體溫以及詢問同行人數，我們這批由互不相識的3組人馬（？）共7人一起進去體驗。另外，入場採實名制，排隊時別忘了掃QR code填寫資料，以及戴口罩入場。</p>\n<p><img class=\"aligncenter wp-image-2675 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_9.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_9.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_9-300x180.jpg 300w\" alt=\"返校實境體驗展\" width=\"392\" height=\"235\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p>入場之後，需要在佈告欄前等候工作人員檢查門票。再往前走一點，工作人員會開始講解參觀規則，第一展區為實境沉浸式體驗區，還原返校遊戲裡面的場景，還有演員演出劇情，為了不讓之後來看展的人被破梗，因此第一展區是禁止拍照的。</p>\n<p>非常幸運地（才怪，我真的超害怕）我們是這批的第一排，要拿著一根蠟燭（千萬不要用燈直接照演員），全部的人還要一起拉著一條紅線，感覺展覽會很可怕。</p>\n<p>第一展區大概走了15分鐘，經過廁所、教室、保健室和走廊等遊戲場景，真的做得超級逼真！！！中間還有演員演劇情（覺得演員演技很好），還會有一些嚇人的機關，整個展區的尖叫聲此起彼落，到最後明明看到的是假人，卻又會很怕它會不會等等自己動起來。第一排還要負責開門，一直很怕門後會突然跑出什麼東西來。</p>\n<p>再來是方芮欣的房間，各個展品或空間的牆上都有解說，非常值得慢下腳步細細欣賞。</p>\n<p><img class=\"aligncenter wp-image-2681 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_15.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_15.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_15-300x180.jpg 300w\" alt=\"返校金句\" width=\"375\" height=\"225\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p>「白鹿予水仙：此生無緣，來世再見。致自由。」是返校的金句之一！周圍的牆上還掛著遊戲場景畫，對於玩過返校的人來說，一定會非常懷念這些場景。</p>\n<p>最後，有返校初版的試玩，現場大概有6台或7台平板可以使用，不用5分鐘就能玩完了。</p>\n<p><img class=\"aligncenter wp-image-2684 size-full jetpack-lazy-image jetpack-lazy-image--handled\" src=\"https://carolblogtw.com/wp-content/uploads/2020/07/%E8%BF%94%E6%A0%A1_18.jpg\" sizes=\"(max-width: 600px) 100vw, 600px\" srcset=\"https://carolblogtw.com/wp-content/uploads/2020/07/返校_18.jpg 600w, https://carolblogtw.com/wp-content/uploads/2020/07/返校_18-300x180.jpg 300w\" alt=\"返校實境體驗展\" width=\"317\" height=\"190\" loading=\"eager\" data-lazy-loaded=\"1\"></p>\n<p>還有一幅方芮欣演化史（由左至右），返校正式版上的方芮欣幾乎沒有色彩飽和度，沒想到最一開始竟然這麼繽紛。</p>\n<p>返校將改編成影集，就在今年12月5日開始於公視播出，真的很讓人期待！從試玩區的出口出去之後，就不能再回到展區了，一定要想好再出去（XD）。</p>\n<p>如果是玩過返校遊戲或看過返校電影的人，去返校實境體驗展一定能玩得很盡興，可以看出主辦單位非常用心地在還原翠華中學的場景。沒有買到預售票的人也不用擔心門票很貴，使用振興三倍券的話只要300元，整體來說返校實際體驗展真的滿值得一去的！</p>', 0, 4, 4),
(8, '塩田千春：顫動的靈魂 -我是誰？談「解離」是什麼？', '2022-03-02 10:24:25', '<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"fk2ro-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"fk2ro-0-0\"><span data-offset-key=\"fk2ro-0-0\">　很久沒有看到意象這麼撼動人心的展覽了！很幸運在北美館在因疫情閉館前，去觀賞了「塩田千春：顫動的靈魂」展覽。整個展覽大多作品都是以白、紅、黑三色絲線纏繞在空間中，試圖呈現</span><span data-offset-key=\"fk2ro-0-1\">生與死、夢境與真實、創傷與倖存</span><span data-offset-key=\"fk2ro-0-2\">等衝突的主題，透過龐大的絲線交纏作品試圖與觀展者對話。</span></div>\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"fk2ro-0-0\"><span data-offset-key=\"fk2ro-0-2\">除此之外，此次展覽還展出了不少行為藝術作品的錄像或照片，在觀賞影像或照片的同時，內心不禁會掀起陣陣漣漪甚或波濤洶湧，舉例來說，《浴室》這個錄像是塩田千春</span><span data-offset-key=\"fk2ro-0-3\">在面臨自我認同的困惑，不曉得自己是誰、要做什麼、要何去何從時</span><span data-offset-key=\"fk2ro-0-4\">，所拍出的作品。錄像中的她泡在滿是泥水的浴缸裡，試圖沖洗自己，就彷如面對人生的泥濘，卻怎麼洗都洗不乾淨，看不見自己原本的面貌。這讓我想到</span><span data-offset-key=\"fk2ro-0-5\">「解離」</span><span data-offset-key=\"fk2ro-0-6\">(詳見備註)，解離的個案中，不就有些會有</span><span data-offset-key=\"fk2ro-0-7\">對自己是誰感到不確定，內心對自己的定義感到掙扎</span><span data-offset-key=\"fk2ro-0-8\">的狀況嗎？又如「成為畫」這個作品，塩田千春不惜將有毒的紅色瓷漆潑灑在自己身上，透過沾染著血紅色瓷漆的自己擺出各樣姿態，使用自己為工具，讓自己成為了藝術品。以本獅從心理學的角度來看，某種程度，用瓷漆毒害自己的她其實是在</span><span data-offset-key=\"fk2ro-0-9\">自我傷害</span><span data-offset-key=\"fk2ro-0-10\">，但又合理化自傷的行為，把這樣的行為「藝術化」為藝術品了吧！</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"bumtc-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"bumtc-0-0\"><span data-offset-key=\"bumtc-0-0\">　　再舉一例。「外在化的身體」這個作品展示了身與心變得支離破碎的樣態，塩田千春在接受LaVie採訪時，說明自己因為癌症復發而動手術、治療，即便身體變健康，但卻「有一點點覺得我的靈魂跟不上這個身體」，所以，她利用網狀物件與紅色絲線傳達出想要連接她的靈魂與肢體的感覺。我看了作品與訪談稿後，再度聯想到的還是</span><span data-offset-key=\"bumtc-0-1\">「解離」</span><span data-offset-key=\"bumtc-0-2\">(詳見備註)，解離的反應中，不就包括了</span><span data-offset-key=\"bumtc-0-3\">「自我感喪失」</span><span data-offset-key=\"bumtc-0-4\">(詳見備註)這個部份嗎？</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"39t5l-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"39t5l-0-0\"><span data-offset-key=\"39t5l-0-0\">　　總括來說，我認為在「成為畫」這個作品完成期間與之後的塩田千春，都是用藝術創作來處理心理創傷，抒發內心巨大的壓力與傷痛。如果不創作的話，她很可能會發瘋，</span><span data-offset-key=\"39t5l-0-1\">創作即療癒</span><span data-offset-key=\"39t5l-0-2\">，大概就是那種感覺吧！</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"crjc4-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"crjc4-0-0\"><span data-offset-key=\"crjc4-0-0\">&nbsp;</span></div>\n</div>\n<div contenteditable=\"false\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"cq92k-0-0\">\n<div><hr></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"dhkvj-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"dhkvj-0-0\"><span data-offset-key=\"dhkvj-0-0\">*備註：據國際創傷與解離學會指出，「解離」被用來描述彼此有關聯的事物，失去或缺乏連結的狀態，造成部分經驗無法整合進自我當中。通常是發生在面對龐大壓力或創傷之下，才會有失去記憶、感覺等與自身或周遭環境無法連結的反應，此稱為「解離」。解離的反應中，包括：「身分認同混淆」、「自我感喪失」等。其中「身分認同混淆」指的就是：對自己是誰不確定，感到困惑或矛盾，對於自己是誰的定義感到混亂、掙扎；而「自我感喪失」指的是身體與情感分離的狀態，彷彿自己與身體分開，不在自己的身體裡面。</span></div>\n</div>\n<div contenteditable=\"false\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"cj15n-0-0\">\n<div><hr></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"er9r0-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"er9r0-0-0\">&nbsp;</div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"79poi-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"79poi-0-0\"><span data-offset-key=\"79poi-0-0\">*關於展覽的參考資料：</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"5b2en-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"5b2en-0-0\"><span data-offset-key=\"5b2en-0-0\">1. 塩田千春專訪</span><a class=\"link__DefaultLink-sc-1gajul6-0 hhNBPM draft--a\" href=\"https://www.wowlavie.com/article/ae2100589\" target=\"_blank\" rel=\"noopener\"><span data-offset-key=\"5b2en-1-0\">https://www.wowlavie.com/article/ae2100589</span></a></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"69er6-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"69er6-0-0\"><span data-offset-key=\"69er6-0-0\">2. 展覽時間、導覽資訊與作品介紹</span><a class=\"link__DefaultLink-sc-1gajul6-0 hhNBPM draft--a\" href=\"https://www.wowlavie.com/article/ae2100582\" target=\"_blank\" rel=\"noopener\"><span data-offset-key=\"69er6-1-0\">https://www.wowlavie.com/article/ae2100582</span></a></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"dm2vr-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"dm2vr-0-0\"><span data-offset-key=\"dm2vr-0-0\">*關於解離的參考資料：</span></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"aluhg-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"aluhg-0-0\"><span data-offset-key=\"aluhg-0-0\">1.</span><a class=\"link__DefaultLink-sc-1gajul6-0 hhNBPM draft--a\" href=\"https://www.mmh.org.tw/taitam/psych/index4_003.html\" target=\"_blank\" rel=\"noopener\"><span data-offset-key=\"aluhg-1-0\">https://www.mmh.org.tw/taitam/psych/index4_003.html</span></a></div>\n</div>\n<div class=\"draft--p left\" data-block=\"true\" data-editor=\"689oo\" data-offset-key=\"1vr0u-0-0\">\n<div class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\" data-offset-key=\"1vr0u-0-0\"><span data-offset-key=\"1vr0u-0-0\">2.陸怡安(2016)。關係創傷之療癒-EMDR運用於解離反應之個案研究。國立臺灣師範大學，臺北市。</span></div>\n</div>', 0, 4, 12),
(9, '北美館「現代驅魔師」 科技─泛靈思潮下的後人類探索', '2022-03-05 16:07:22', '<h4 style=\"text-align: center;\">「今天如果「科技」扮演了『驅魔師』的角色，對人類進行全面『優化』，那麼傳統意義下的「人之本質」仍會存在嗎?」&ndash;策展人蕭淑文</h4>\r\n<p>&nbsp;</p>\r\n<p><strong><a href=\"https://www.tfam.museum/Exhibition/Exhibition_page.aspx?id=694&amp;allObj=%7B%22JJMethod%22%3A%22GetEx%22%2C%22Type%22%3A%222%22%7D&amp;ddlLang=zh-tw\" target=\"_blank\" rel=\"noopener\"><span style=\"color: rgb(0, 0, 0);\">「現代驅魔師」</span></a></strong>將於2021年11月27日至2022年03月06日在<strong><a href=\"https://www.tfam.museum/index.aspx\" target=\"_blank\" rel=\"noopener\">臺北市立美術館</a></strong>一樓正式展出，由資深策展人蕭淑文策劃，將圍繞和貫穿在後人類所體現的一連串思想，及重新思考現代人類在科技召喚下的處境，並探索從人類過渡到後人類的真義。本展邀請10組國內外藝術家/團體，如陳瀅如、Kate Cooper（英國）、C&eacute;cile B. Evans（美國／比利時）、Sidsel Meineche Hansen（丹麥）、Pakui Hardware（立陶宛）、黃博志、Stefan Kaegi（瑞士） / Rimini Protokoll（德國）、劉家銘、吳書原+耿寧和驅魔師集會製作委員會回應命題，混合了物件、裝置、聲音、影像（包含靜態展示）和臨場表演。</p>\r\n<p>&nbsp;</p>\r\n<p><strong><a href=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090640sme.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090640sme.jpg\" alt=\"\" width=\"422\" height=\"281\"></a></strong><strong><a href=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090646weu.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090646weu.jpg\" alt=\"\" width=\"414\" height=\"311\"></a></strong></p>\r\n<p><strong>Pakui Hardware，《下腹》（局部），複合媒材、裝置，現地製作，2019。圖像由藝術家和臺北市立美術館提供。</strong><br><br><br><strong><a href=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090654eda.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090654eda.jpg\" alt=\"\" width=\"340\" height=\"255\"></a></strong></p>\r\n<p><strong>Stefan Kaegi／里米尼紀錄劇團，《聖殿》(影像截圖)，演出紀錄，56分30秒，2021。圖像由藝術家提供。</strong></p>\r\n<p><strong>&copy; Philippe Weissbrodt</strong><br><br>展覽整體來說，將建立在科技─泛靈的思潮底下，正如後人類主義中心思想不斷升級之下的影響，包括科技人造物的「第二生命」形態、虛擬身體、高速演算法下資訊化經濟體系網絡，以及人與物和其他物種之間的鏈結等，從而產生一種多重感知的錯覺。本展參展藝術家的共通點是企圖在跨學科實踐、後人類主義風潮下，找出和藝術世界的關聯。我們這個時代的藝術家感知到人類社會正面臨這些混沌未知的變局，作品形式轉向新技術的格式，亦是如此。</p>\r\n<p><br><br></p>\r\n<h1><strong>藝術的多重感知</strong></h1>\r\n<p><br><br></p>\r\n<p><strong><a href=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/092315bnr.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/092315bnr.jpg\" alt=\"\" width=\"264\" height=\"187\"></a></strong></p>\r\n<p><strong>Kate Cooper，《感染驅動程序》(影像截圖)，彩色有聲，尺寸依空間而定，07分29秒，2018。圖像由藝術家提供。</strong><br><br>在技術中介的這個時代，建立在科技─工業設置基礎上，歷史進程給人一種大雜燴的印象，人類開發一套更複雜的技術，包括賽博格、基因改造、數位化的身體系統、無形實體的信息網絡等，21世紀的新科技不僅解構人文主體讓人類失去中心位置，把掌控權交到演算法、生物科技、人工智能手中，呈現後人類一種令人恐懼與不安的佈局。當代藝術便是將世界的複雜性安置於創作脈絡底下，同時在作品內容表現出多義、分支、曖昧、干擾、矛盾。本展作品中，首先是近年來當代思想對人文主義的激進批判及將人類（智人）的形態、外觀、特徵、情感、性格特質套用到物體（機器人）的擬人論（anthropomorphism），從而動搖了人文主義思想「何為人」的定義。藝術家面對技術對塑造當代世界觀的複雜性，試圖無縫地連接到視覺語彙，將它們轉化成物件、影像、符碼，召喚出作品和現實的關聯性。<br><br><strong><a href=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090701ckv.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090701ckv.jpg\" alt=\"\" width=\"247\" height=\"139\"></a></strong></p>\r\n<p><strong>Kate Cooper，《人為操縱》(影像截圖)，彩色有聲色，尺寸依空間而定，4分28秒，2014。圖像由藝術家提供。</strong><br><br>在這種跨學科美學中，作品本身就是由多組迴路構成的裝配。進入北美館大廳，壟罩著立陶宛雙人創作組合Pakui Hardware所打造的巨型裝置《下腹》，藉由人造材料形構類人類器官來描述物的擬態，以生物科學理論和技術人造物表達一種後人類的文化涵義和信息迴路；瑞士藝術家Stefan Kaegi╱里米尼紀錄劇團在《聖殿》中，章魚成為表演性作品的主角，經由觀察與學習的能力，創造了生物的系統，營造與觀眾不同以往的互動體驗；英國藝術家Kate Cooper的三頻道影像裝置《症狀機器2019》，借用電腦三維動畫技術（CGI），聚焦在廣告和流行文化中對女性形象的描繪，藉由這些搏鬥的身體去批判資本主義的剝削性問題；比利時裔美國藝術家C&eacute;cile B. Evans錄像裝置《心之所欲》創造出一個具有人類特徵的全能系統（HYPER），藉由多重敘事軸線，不斷地游移在「真實的」與「偽造的現實」的邊界，部署了由物質、能量、空間和時間壓縮所形構的世界觀點。</p>\r\n<p>而臺灣藝術家黃博志《椅子，砂紙，蟑螂，海，七，白蟻和香蕉》同樣以CGI動畫搭配遊戲引擎的編碼來製作出融合父親與自己特徵的虛擬化身，把患有思覺失調症的父親的日常，透過七種物件拼接成一個電子肉身；臺灣藝術家陳瀅如《致幻記III : 2-19-20》，以聲音、燈光、物件、素描及影像營造出抽象的靈動世界，創造夢境和意識之間轉換的場景，把我們的神經和心靈一併喚醒；英國藝術家Sidsel Meineche Hansen結合色情產業製作《3D迪克女孩(X級)》CGI動畫片，以酷兒女權主義對資本主義和父權社會的身體操縱批判為核心意旨。臺灣藝術家劉家銘其一作品《Confession, Yes!》展示網路空間景觀地貌，象徵著人類和世界透過電腦網路連接形成一個共生聯盟，而網路世界成為人類最終的告解之所。</p>\r\n<p><strong><a href=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090707ftb.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"https://d3d9mb8xdsbq52.cloudfront.net/s3/211127/090707ftb.jpg\" alt=\"\" width=\"387\" height=\"218\"></a>C&eacute;cile B. Evans，《心之所欲》，HD影像裝置，彩色有聲，尺寸依空間而定，41分5秒，循環播放，2016。圖像由藝術家和臺北市立美術館提供。</strong><br><br>隨著後人類時代一切事物朝向具體化的虛擬，來到北美館地下樓戶外中庭，臺灣藝術家吳書原、耿寧的《迷霧花園》發出了一種超脫世界的暗喻，企圖傳達人類這個生物體對真實世界具一種獨特的感知能力，此作品繞過科技這一層，提出一個「明日生活指南」的假設，其背後隱含的是人類生命的循環這個亙古不變的本質，及理解自然之於人類的意涵。除此之外，本展由劇場、新媒體等不同背景的創作者成立了驅魔師集會製作委員會，以「人類如何改造自身，讓自己變得更好」為題旨，邀請跨學科的專業研究者用科技敘事，錄製5集跨主題的線上廣播（Podcast），更邀請5組表演團隊，以「人類為何需要改造自身？什麼是更好的（未來）人類？」為題，於展期間進行45場講演式表演（lecture performance），將結合影像畫面、即時投影、音聲、物件、偶戲、肢體等表演元素，回扣主題文本。</p>\r\n<p><br><br></p>\r\n<h1><strong>最終提問─何為人?&nbsp;</strong></h1>\r\n<p><strong>本展透過諸多文本論點展開展覽起點：米榭．傅柯（Michel Foucault）在1966年出版的《詞與物─人文科學考古學》（The Order of Things）拋出一個令人不安的結論：「人的終結（la fin de l&rsquo;Homme）」。他宣告「人」只是一個半世紀前的構思，將來亦有消亡的可能。法國哲學家貝爾納&middot;斯蒂格勒（Bernard Stiegler）通過神話系統論述人類本源缺失，他直言人類是經由技術進化而不是依靠生物進化逐漸演變，這種人化便是外置化的過程，也就是說人類是技術的生命。而2002年，娜塔莎&middot;維塔&middot;莫爾（Natasha Vita-More）在未來學家雷蒙&middot;庫茲維爾（Ray Kurzweil）的線上論壇網站發表她設計的未來人類身體構造稱之為&ldquo;普里莫後人&rdquo;（Primo 3M+）。她宣稱通過生物科技及人工智能將提供我們的身體具備更佳的擴展性和現代風格。</strong></p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', 0, 1, 5),
(10, '黃土水《甘露水》的意境遠超過《維納斯的誕生》，我們看到一種對於生命的接納', '2022-03-06 11:06:14', '<p>當我們在面對藝術作品時，都有過這樣的迷思，那就是我們擔心自己的專業素養不夠，以致於不能夠真實的領會作品要表達的意義。</p>\n<p>然而，恰恰是這樣的想法阻擋了我們真實的觸碰藝術作品所能帶給我們的生命悸動。</p>\n<p>我們不如用平常心來看待這一切。試想，當你第一眼看到孟克的《吶喊》或梵谷的《麥田群鴨》時，某種感觸已經向你襲來。其實，當歐洲人站在這些經典作品面前，他也正在經歷的和你一樣的藝術體驗。</p>\n<p>在許許多多的時刻，道理是那樣的簡單而深刻。試想，一個藝術家通過他的作品向你描繪他所領悟的一切，而如果還需要額外的訴說，那麼他就不是頂尖一流的藝術家。因為，這意味著他最擅長的技巧可能不是繪畫、雕刻或影像的語言，而是文字、或理論概念的經營。</p>\n<p>因此，以最自然的方式直接面對作品，傾聽在你內在中逐漸浮現開來的直覺，其實才是最實際也最為真實的體驗。</p>\n<p>當我們第一眼看黃土水的《甘露水》時，許許多多的人不自覺的以「東方維納斯」來禮讚黃土水的這幅雕刻作品。這並不意外，因為許多人在看到這個雕刻作品的造型，心中首先浮現的應該就是文藝復興時代畫家波堤切利的那幅著名畫作：《維納斯的誕生》。這是因為在直觀上，這件雕刻作品與波堤切利的那幅名作在形式上的相似。</p>\n<div class=\"lazy-container\"><img class=\" lazyloaded\" src=\"https://image3.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=150\" srcset=\"https://image2.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=1080 1080w,https://image3.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=750 750w,https://image4.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=500 500w,https://image5.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=400 400w,https://image6.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=350 350w,https://image1.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=300 300w,https://image2.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=250 250w,https://image3.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=150 150w\" alt=\"12____由森純一主持《甘露水》修復&copy;黃邦銓、林君昵，提供｜北師美術館\" width=\"337\" height=\"332\" data-authorize_code=\"12.   由森純一主持《甘露水》修復&copy;黃邦銓、林君昵，提供｜北師美術館\" data-credit=\"Photo Credit: &copy;黃邦銓、林君昵，北師美術館提供\" data-srcset=\"https://image2.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=1080 1080w,https://image3.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=750 750w,https://image4.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=500 500w,https://image5.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=400 400w,https://image6.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=350 350w,https://image1.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=300 300w,https://image2.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=250 250w,https://image3.thenewslens.com/2021/11/rruqszu0xe97nb8grmy01nelfpaw28.jpg?auto=compress&amp;q=80&amp;w=150 150w\"></div>\n<p><span style=\"color: rgb(149, 165, 166);\"><span class=\"photo-credit\">Photo Credit: &copy;黃邦銓、林君昵，北師美術館提供</span>由森純一主持《甘露水》修復</span></p>\n<p>我們並不用急於去肯定或是否定這樣的對比，重點是，通過這樣的對比，我們可以看到或感受到什麼樣的張力存在於兩者之間。</p>\n<p>比方說，如果我們自問這樣做一個問題，兩件作品都描繪了少女的裸體，而誰給你帶來感官上最直覺的美感。我猜想，如果我們對自己誠實的話，我們首先會在直觀上覺得波堤切利所繪製的女體是美的。</p>\n<p>這是因為波堤切利所繪製的《維納斯的誕生》，畫中女子的身形是提供男人注視的，這是一個男人慾望中凝視的身體。其實，不只波堤切利所繪畫的身型、而是連同姿態，都是一個在被動中被凝望的身型，這個特點吻合了某種社會主流的意識型態：男性主動、男性獵取，而女性被動、女性誘惑的二元對立想像。</p>\n<p>如果我們去仔細分析《維納斯的誕生》，我們還能察覺，其實不光是在身形與姿態的暗示，甚至整個構圖重點在於這幅畫作中維納斯的眼神。對於這個眼神，請你想像一下，當你站在這幅畫前觀看時，你設想畫中維納斯的眼神和觀畫者眼神之間是否存在一個平等的權力關係。</p>\n<p>不，答案是，你凝視著她，而她不能反過來注視你，她的眼睛很美，但那種美是等候人注視的美，她等待著被征服、被呵護、甚至是被收藏。她所站立的貝殼說明這一切，貝殼在早期文明意味著錢幣與財富，而貝殼中的珍珠更意味著稀缺的珍寶。那麼，從貝殼中誕生的她，就是一個收藏物。</p>\n<p>父權社會的意識形態在黃土水的作品《甘露水》中被翻轉過來。從這個角度看，黃土水的《甘露水》所表達的意境遠遠超過《維納斯的誕生》。</p>\n<p>這裡，讓我們再次自問自己一個問題，在兩幅作品所呈現的女體中，誰給你一種深刻感？我猜想，這一次我們一般會得到的答案就跟第一個問題的答案很不一樣，我們直覺是黃土水的《甘露水》帶給我們一種難以言說的深刻感受。</p>\n<p>這時，讓我們再次摸索黃土水的作品《甘露水》的型廓，看看裡頭是否有符合我們直覺感受的線索？</p>\n<p>我們首先看到，女體是從蚌殼中浮出的，我們很容易的就可以意識到：蚌殼不同於貝殼，蚌殼所產出的不是富貴人家收藏的珍珠，而是尋常百姓的經濟作物，所指向的意義是民間的勞動。</p>\n<p>一般藝術不會以此為題材，然而黃土水從勞動中看到人們珍視的價值。勞動並不卑微，勞動中自有一份關於生命的柔韌與堅實。因此，我們可以說在形構上，黃土水的《甘露水》雖然極似波堤切利的《維納斯的誕生》，然而，作品所要傳達的精神，可能較為接近米勒的《晚禱》與《拾穗》。</p>\n<p>我想，如果你在米勒的《晚禱》和《拾穗》裡看到一種生命的虔誠，那麼，你應該也能在黃土水的《甘露水》裡看到一種對於生活的接納。</p>\n<p>在這件作品裡，黃土水所雕塑的少女身形也傳遞這種生命哲學，你可以留意少女的腿部特別堅實的立於大地之上，而這遠不同於波堤切利的《女神的誕生》是浮於空中，而是像米勒的《晚禱》與《拾穗》那樣，身體成為了大地自然的延伸。人，是大地的孕生。</p>\n<p>我們可以留意一下黃土水所雕塑的少女，骨盆與陰部似乎特別被不避諱的凸顯，我猜想，這和後來我們都市裡對於這些人體部位的忌諱是不太一樣的，也和西方大多古典繪畫中的旨趣有異。</p>\n<p>這是因為黃土水在雕塑這件作品時，他對女體的設想其實是母性而非女性，而蚌殼、大地與陰部和骨盆構成了一連串的意象，這些意象都指向一種將勞動和創作連接起來的符號。只有女人知道生孕是怎樣的一個生命經驗，那是人類創生以來最為生物性的自然，但同時，也是最為神秘的經驗過程。</p>\n<p>生產、勞動、創作，對我們而言，既是那樣的日常，卻又如此的神秘。</p>\n<p>我們還未談到黃土水在《甘露水》中對於眼神的刻畫，我們較少關注到繪畫或雕塑作品中的眼神，然而人物的眼神始終是奧義所在。</p>\n<figure class=\"article-img-container below-description\" style=\"text-align: left;\">\n<div class=\"lazy-container\"><img class=\" lazyloaded\" src=\"https://image1.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=150\" srcset=\"https://image6.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=1080 1080w,https://image1.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=750 750w,https://image2.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=500 500w,https://image3.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=400 400w,https://image4.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=350 350w,https://image5.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=300 300w,https://image6.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=250 250w,https://image1.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=150 150w\" alt=\"10____由森純一主持《甘露水》修復&copy;黃邦銓、林君昵，提供｜北師美術館\" width=\"555\" height=\"370\" data-authorize_code=\"10.   由森純一主持《甘露水》修復&copy;黃邦銓、林君昵，提供｜北師美術館\" data-credit=\"Photo Credit: &copy;黃邦銓、林君昵，北師美術館提供\" data-srcset=\"https://image6.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=1080 1080w,https://image1.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=750 750w,https://image2.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=500 500w,https://image3.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=400 400w,https://image4.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=350 350w,https://image5.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=300 300w,https://image6.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=250 250w,https://image1.thenewslens.com/2021/11/ptop39ztcocvqw04syk2m9b8zs4a5l.jpg?auto=compress&amp;q=80&amp;w=150 150w\"></div>\n<div class=\"lazy-container\">&nbsp;</div>\n<span class=\"photo-credit\" style=\"color: rgb(149, 165, 166);\">Photo Credit: &copy;黃邦銓、林君昵，北師美術館提供，</span><span style=\"color: rgb(149, 165, 166); text-align: center;\">由森純一主持《甘露水》修復</span>\n<figcaption><span style=\"color: rgb(149, 165, 166);\"><span style=\"color: rgb(149, 165, 166);\"><span style=\"color: rgb(0, 0, 0);\"><br>作為對比，你可以比對黃土水的《甘露水》和新古典主義大師安格爾的經典畫作：《泉》與《大宮女》。兩相對比，相信你可以很明顯的感受到，安格爾的《泉》與《大宮女》的眼神是對著她身體的主人說話的，而黃土水的《甘露水》之眼神只對生命裡的天啓張望。<br></span><br></span></span>\n<p><span style=\"color: rgb(0, 0, 0);\">朋友們可以細思一下《甘露水》的眼神與臉上的神情我們曾經在什麼地方見過，我會傾向認為這等神情與微張的眼神只有在初生嬰兒第一次來到我們這個世間的時候是這樣的情狀。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">那麼，這意味著什麼？我認為這就是美學的自我意識初生的那一個剎那，從日夜辛勤的勞作中忽然閃現的自覺。美，就在現實之中，就在生活之中，只是你是否真切的意識到她的存在。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">關於雕刻，我們一定會想到文藝復興時代的藝術大師米開朗基羅。米開朗基羅的雕刻作品《聖殤》自是經典中的經典，甚至人們說米開朗基羅的繪畫技巧也源於雕刻，所以他的繪畫特別有一種人物要從畫中走出來的立體感。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">做個有趣的對比，我們就以米開朗基羅最著名的雕刻的《聖殤》與繪畫作品《創世紀》來分析比對，看看這樣的比對還能為我們訴說什麼樣的藝術體驗。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">從觀看的直覺上，米開朗基羅的《聖殤》或《創世紀》，或是黃土水的《甘露水》，都表達了一種「超越性」。然而，兩者各自表現了東西方文化不同的意義追求。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">米開朗基羅的《聖殤》和《創世紀》都在禮拜堂裡，兩件作品讓你感受到一種超拔的力道，彷彿渾渾噩噩的俗世忽然湧現一個神聖的瞬間，而這個瞬間讓滾滾而去的時間之流於一瞬之光明白了生命之上還有一個高維度的永恆存在，它就佇立在那裡，俯瞰著整個俗世生命。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">你在黃土水的《甘露水》中會望見相似的永恆之光，然不同的是，那種超越感卻不似超拔於我們這個塵土之上，不，她就在我們這個紅塵俗世之中，那是一種領會，是一種對於生命的接納。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">無論如何，生命是那麼的艱苦， 然而，理解與不理解、接納或不接納之間開啟了另一個意義維度。生命之苦，你不理解、不接納，那就是苦澀，而若有所領悟、也能接納，則得生命之甘味，這就是作品為何以「甘露水」命名的要義。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">甘和苦很像，所以無論是漢文或是臺語，這兩個字往往是連用的，不過，仍有兩者間的顯微差異。在佛家的生命智慧裡，真正的解脫並不是真的超脫三界之外，而是身在此間，然烈火寒霜不動法性。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">米開蘭基羅的畫作是在廟堂供奉的，它的超越性是通過否定俗世而存在的，它的存在功能是為俗世與聖界劃一道區隔的線，以此標誌某種聖潔的存在。因此，你只要步入教堂，望見《聖殤》與《創世紀》，一切世井喧囂，止步於檻外。</span></p>\n<p><span style=\"color: rgb(0, 0, 0);\">然而，黃土水《甘露水》則經歷了她所歸屬的東方生命，她曾經被棄置在臺中火車站受盡風吹雨淋，也曾因為民眾的誤解而在陰部被潑灑墨水凌辱，也經歷過隱匿在箱子裡近半世紀之久遠，但這一切，都是菩薩道必經的歷程，因為菩薩行本不是隔絕紅塵俗世的修煉，菩薩之道，道於世間，不即世間、亦不離世間。不一不異，真俗不二。</span></p>\n</figcaption>\n</figure>', 0, 1, 10);
INSERT INTO `blog_article` (`article_id`, `title`, `created_time`, `content`, `favorited`, `category`, `users_id`) VALUES
(29, '高雄美術館一日遊', '2022-03-08 11:25:43', '沒想到高美館外面就這麼巧遇到老豬的同學，他說今天裡面還有一場某某某（唉..我又忘了名字）兩夫妻的開幕展馬上要開始了，所以笨蛋老豬又臨時改說要先去捧這一場等一下再去捧另一場醬子。奇怪他們這些人又不是政客，可是不知道為什麼老是勤跑這種攤，感覺他們的人生如果拿掉這種活動生活可能會頓時失去重心人生沒有活下去的力量吧。\r\n\r\n\r\n但鄉下肥羊沒什麼藝文氣息，每次在這種美術館裡逛來逛去後會感覺頭昏腦鈍空氣稀薄呼吸困難，最後我只好先退出館內到外面大廳等。老豬他趕完兩場後準備要離開時，又遇上老豬在高美館工作的學生，她緊張的說剛剛某某某那場開幕展還有茶會正要開始硬拉著我們去參加。可是這時候已經快關館了，學生帶領我們利用特殊管道，在樓梯間上上下下轉來轉去，最後竟跑進了一處進不可攻退不可守，就算我想逃出去也出不去的地方，這裡是館長室的外廊。\r\n\r\n\r\n\r\n \r\n\r\n靠~~沒看過開幕茶會竟然是選擇這種沒門牌沒人找的到好神秘的地方舉行，遇到幾位在地的長輩問說：你們怎麼如何進來的？\r\n\r\n他們說：這裡通常都是要有人帶領才有辦法進來啦。\r\n\r\n我：為什麼要這樣？為什麼會把茶會地點離展覽廳這麼遠，而且沒人帶領根本不知道怎麼進來啊？\r\n\r\n他們說：因為每次辦茶會都會有莫名奇妙先知先覺的『食客』進來，每次像黃蜂過境般，搞得真正來參與的大家都很不舒服，所以只好改在這個秘密基地，只有內行人才能進來地場所。\r\n\r\n不過這裡也未免太神祕了，因我看到很多貴賓在這裡上上下下兜圈圈還是繞不出去的窘狀。\r\n\r\n看來高美館館長室外面也是高雄景點之ㄧ，只能推薦給喜好藝文知道門路人士們。\r\n\r\n\r\n在這種地方開茶會很怪異\r\n\r\n\r\n\r\n \r\n\r\n從茶會結束後，我們的高雄一日遊當然還沒結束。\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n這個時間適合去西子灣賞落日了，因聽說西子灣的夕陽可是台灣十大美景之ㄧ，但因時間緊迫只好搭計程車過去，計畫回程時才搭捷運回左營的高鐵站。\r\n\r\n \r\n\r\n搭乘這輛計程車司機有南部人的熱情是高雄的好導遊者，知道我們來一日遊一路開一路幫我們介紹高雄的景點，說高雄好玩的地方很多耶。\r\n\r\n這時正沿著愛河開，他說這裡是愛河的上游，最近整條河都整頓完成了，未來不只下遊那裡可以搭遊船，上游這裡可以有帆船的活動，整條愛河通通可以從上游到下游……云云。\r\n\r\n \r\n\r\n我們順口問說：那新崛江那裏你覺得怎樣？\r\n\r\n司機笑說：那裡適合十幾歲的孩子去，我們這種年紀去只會被當成怪伯伯，所以如果你們想去只能去舊崛江（自嘲的笑哈哈）。\r\n\r\n \r\n\r\n而我們想去的是「西子灣英國領事館」，司機說那裡雖然是二級古蹟但未整頓之前只能說那是可怕的廢墟，是在2004年由高雄市政府委外重新打造出今日的模樣成為一處非常熱門的觀光區。\r\n\r\n司機說：不過你們要有心理準備那裡陸客超多的喔。\r\n\r\n我心想觀網上寫說這裡是年輕戀人談情說愛的好去處，如果陸客很多不是變得很阿雜嗎？\r\n\r\n', 0, 3, 3),
(34, '大家喜歡看展嗎？', '2022-03-16 09:57:24', '不知道版上有沒有女孩跟我一樣喜歡看展？\r\n\r\n常常看到很多朋友都會分享打卡展，以前我也常跟朋友去看打卡展，但久了之後就覺得門票很貴又有點空虛，現在也不是很愛打卡展了（而且打卡展門票真的好貴...）\r\n\r\n想問問大家有沒有推薦的展覽？想知道還有什麼非打卡展的好地方可以去！', 0, 3, 2),
(50, '奇美博物館新館－令人嘆為觀止典藏寶物的神殿', '2022-03-18 12:06:56', '<p><span style=\"color: #000000; font-family: monospace; white-space: pre; font-size: 10pt;\">最近實在太忙啦! 看我發文的龜速就知道.... </span></p>\r\n<p><span style=\"color: #000000; font-family: monospace; white-space: pre; font-size: 10pt;\">工作和家庭兩頭燒，過年前和家人到台南台中的小旅行，現在才有時間開始爬格子，</span></p>\r\n<p><span style=\"color: #000000; font-family: monospace; white-space: pre; font-size: 10pt;\">第一篇先來分享很喜歡也收穫很多的奇美博物館新館， 裡面珍藏很多許文龍先生的奇珍逸品，數量之多及罕見真是令我嘆為觀止!</span></p>\r\n<p><span style=\"font-size: 10pt;\"><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">園區幅員廣大，博物館迎賓的第一道門面就是這磅礡的「阿波羅噴泉」!</span></span></span></p>\r\n<p><span style=\"font-size: 10pt;\"><span style=\"font-family: monospace;\"></span></span></p>\r\n<p><span style=\"font-size: 10pt;\"><span style=\"font-family: monospace; font-size: medium; white-space: pre;\">這座群雕呈現太陽神阿波羅駕著戰車從海面躍出之情景!</span></span></p>\r\n<p><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">走過阿波羅噴泉廣場，前面就是一條筆直的奧林帕斯橋，</span></span><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">奧林帕斯的十二位神祇分列兩旁，</span></span><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">潔白優雅的雕塑，還未進入館內，就被這些古歐洲神話所吸引!</span></span></p>\r\n<p><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">博物館外觀好像美國國會山莊，仿巴洛克風格的建築，</span></span><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">讓我感覺來到歐洲一般，</span></span></p>\r\n<p><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">從這裡開始進入館內就不可以拍照攝影囉， 而且都有流量動線管制，</span></span><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">因為參觀人數眾多，有管制才不致於混亂擁擠。</span></span></p>\r\n<p> </p>\r\n<p><span style=\"color: #e03e2d; font-size: 12pt;\"><span style=\"font-family: monospace;\"><span style=\"white-space: pre;\">關於奇美博物館</span></span></span></p>\r\n<p><span style=\"font-family: monospace; white-space: pre;\">奇美博物館始於1992年，由實業家許文龍先生創辦，是臺灣館藏最豐最富盛名的私人博物館。</span></p>\r\n<p><span style=\"font-family: monospace; white-space: pre;\">博物館提供「個人 / 團體語音導覽機」、「人員定時導覽」及「導覽App」三種導覽服務。</span></p>\r\n<p> </p>', 0, 4, 4),
(56, '2022必看-安藤忠雄展', '2022-03-21 14:19:05', '2022年5月～12月在台北、新竹、台中、台南、高雄、澎湖有琳瑯滿目的展覽和音樂祭活動，以設計感、藝術派、幽默風趣或是走文青風的展覽都有！以下特別精選出來自日本原汁原味的展覽，滿足無法出國朝聖的你！\r\n2022 年全台重磅級展覽，當然不能錯過《挑戰—安藤忠雄展（ TADAO ANDO：NDEAVORS）》世界巡迴最終站—台北場！​日本當代建築巨擘—安藤忠雄，是全球最具影響力的建築大師之一，並曾獲得建築界最高榮譽普利茲克獎。《挑戰—安藤忠雄展》自 2017 年從日本東京新美術館出發後，全世界巡迴巴黎、米蘭、上海與北京等五地，世界巡迴最終站將抵達台北，於 6/3（五）～9/13（二）在台北松山文創園區一號倉庫舉辦，展覽親炙大師半世紀的心血大成，從安藤忠雄的親筆旅行速寫、設計手稿、建築模型、經典建築空間1:1等比再現等，都將毫無保留地呈現在世人眼前，而挑戰—安藤忠雄展最大亮點則是安藤最經典的建築作品—「光之教堂」，將以 1:1 等比例原尺寸復刻重現！\r\n\r\n展覽日期： 6月3日（五）～9月13日（二）\r\n展覽地點：松山文創園區一號倉庫（臺北市信義區光復南路133號）\r\n開放時間：週一至週日10:00-18:00（閉館前30分鐘停止售票及入場；每月最後一個週一休館6/27、7/25、8/29）\r\n購票方式：https://bit.ly/3vGAS7z\r\n主辦單位：忠泰美術館、安藤忠雄建築展實行委員會\r\n聯合主辦單位：安藤忠雄建築研究所\r\n策展顧問：龍國英建築設計有限會社\r\n協辦單位：聯合數位文創、台灣設計研究院、松山文創園區', 1, 1, 2),
(57, '《永恆慕夏 線條的魔術》捷克畫家慕夏的真跡', '2022-04-05 11:37:21', '<p>睽違<span lang=\"EN-US\">10</span>年，捷克國寶級新藝術畫家阿爾豐斯<span lang=\"EN-US\">&middot;</span>慕夏<span lang=\"EN-US\">&nbsp;(Alfons Maria Mucha)</span>所屬的基金會終於再次將慕夏近<span lang=\"EN-US\">200</span>件絕美真跡作品帶來台灣展出，錯過這次可能就得再等<span lang=\"EN-US\">10</span>年！文章將整理展覽亮點跟彩蛋，文末附完整<strong>《永恆慕夏 線條的魔術》特展</strong>展覽日期、門票、交通等資訊。</p>\n<p>捷克藝術大師阿爾豐斯<span lang=\"EN-US\">&middot;</span>慕夏（<span lang=\"EN-US\">Alfons Maria Mucha</span>），曾被紐約時報譽為「世界上最偉大的裝飾藝術家」，它的展覽在<span lang=\"EN-US\">2021/12/18</span>於台北展出。比起<span lang=\"EN-US\">10</span>年前在故宮陳列的畫作，這次的作品更多元且豐富。讓暫時無法出國的大家，能藉以懷念在歐洲旅行或生活的日子。附上我之前在捷克布拉格慕夏博物館拍攝的照片。</p>\n<p>我這次是以媒體的身份入場，館內只有開放媒體日能拍攝，其餘日期皆不開放拍照，文章內分享的照片都是經過官方允許取材。本文除了紀錄此次觀展心得，同時分享我在捷克布拉格與英國倫敦看到的慕夏作品。</p>\n<p><img title=\"慕夏展覽\" src=\"https://pic.pimg.tw/borntoshop/1640691623-3721134476-g_l.jpg\" alt=\"慕夏展覽\" width=\"366\" height=\"488\" loading=\"lazy\"></p>\n<p><strong>《永恆慕夏 - 線條的魔術》特展</strong>的展覽地點在台北中正紀念堂<span lang=\"EN-US\">1</span>展廳，從捷運中正紀念堂<span lang=\"EN-US\">3</span>號出口或<span lang=\"EN-US\">5</span>號出口步行<span lang=\"EN-US\">8</span>分鐘或<span lang=\"EN-US\">12</span>分鐘可抵達。<span lang=\"EN-US\">3</span>號出口距離展覽場地比較近，穿過大孝門即可抵達，怕迷路的話，從<span lang=\"EN-US\">5</span>號出口沿著中正紀念堂的主堂體步行約<span lang=\"EN-US\">12</span>分鐘。</p>\n<p><strong>▶《永恆慕夏 - 線條的魔術》特展◀&nbsp;</strong></p>\n<p>展期：<span lang=\"EN-US\">2021/12/18(</span>六<span lang=\"EN-US\">)&nbsp;</span>至&nbsp;2022/4/5 (二<span lang=\"EN-US\">)</span></p>\n<p>地點：中正紀念堂<span lang=\"EN-US\">&nbsp;1&nbsp;</span>展廳</p>\n<p>地址：台北市中正區中山南路<span lang=\"EN-US\">21</span>號<span lang=\"EN-US\">&nbsp;(</span>捷運中正紀念堂站<span lang=\"EN-US\">)</span></p>\n<p>票價：全票<span lang=\"EN-US\">$350/</span>優惠票<span lang=\"EN-US\">$320/</span>愛心票<span lang=\"EN-US\">$175</span></p>\n<p>營業時間：<span lang=\"EN-US\">10:00 ~ 18:00</span>，<span lang=\"EN-US\">17:30</span>最後入場</p>\n<p>休展日：除夕、農曆初一及<span lang=\"EN-US\">228</span>休館</p>\n<p>雙人<span lang=\"EN-US\">9</span>折優惠套票：<span lang=\"EN-US\"><a href=\"https://reurl.cc/Mkqg0X\" target=\"_blank\" rel=\"noopener\">https://reurl.cc/Mkqg0X</a></span></p>', 0, 1, 4),
(58, '高雄｜teamLab未來遊樂園', '2022-04-05 23:11:18', '一生必看一次的全球十大藝術展、同時也是2022年度必訪的展覽《teamLab未來遊樂園&與花共生的動物們》首次移師港都高雄囉！曾被《CNN》盛讚為具有魔性的作品，「全球十大必看藝術展」在睽違 4 年後，再度襲捲來台！打破台北唯一超過 20 萬人朝聖展覽，超人氣展覽 teamLab未來遊樂園 高雄2022，高雄站teamlab時間將在6/24 ~ 10/11於高雄國立科學工藝博物館盛大登場，讓南台灣的朋友一起走進 teamLab未來遊樂園高雄場的實境唯美的沉浸式光影空間中！\r\n\r\n\r\n展覽日期：2022年06月24日 ~ 2022年10月11日\r\n開放時間每日09：00~17：00（16：30停止售票入場）\r\n展覽地點：高雄市國立科學工藝博物館 B1四、五特展廳\r\n購票方式：https://bit.ly/3MCeXop\r\n交通方式：\r\n【高鐵】高鐵左營站轉搭捷運至「後驛站 (R12)」，轉搭紅28號公車至科工館站即可抵達。\r\n【高雄捷運】轉乘高雄捷運紅線至「後驛站 (R12)」，轉搭紅28號公車至科工館站即可抵達。\r\n【客運】台鐵「高雄車站」下車，於前站(D區)轉乘60號公車至科工館站，或轉乘高雄捷運紅線至「後驛站 (R12)」，再轉乘紅28接駁公車至科工館站即可抵達。\r\n', 0, 1, 4),
(59, '一檔等太久的展覽－黃土水百歲「甘露水」重見天日', '2022-04-07 10:59:35', '<p>封藏近50年，雕塑家黃土水的「甘露水」16日在「光&mdash;台灣文化的啟蒙與自覺」特展中，再次昂然挺立，面向世人。總策劃林曼麗感動地說，這檔展覽，已經等太久了。</p>\n<p>林曼麗記者會上表示，去年北師美術館同以黃土水的作品策劃「不朽的青春──台灣美術再發現」，展覽尾聲時，她思及今年將適逢台灣文化協會成立100週年，應要規劃不只有美術，且應更深入挖掘歷史脈絡的展覽。而美術學者蔣伯欣也有類似想法，兩人一拍即合，組成學者研究團隊開始策展。</p>\n<p>林曼麗說，那時她心中不斷偷偷想望「如果這檔展覽有『甘露水』就完美了」。沒想到這個夢想竟然真的實現，雖然黃土水從未參與文協主要運動，但他也透過創作表達對台灣的期待和情感，選在今年再次現身，「我相信這是黃土水冥冥中的期待。」</p>\n<p>台灣首座裸體雕像「甘露水」由黃土水於1919年創作，曾入選第3屆日本帝展，連日本皇室也對這件作品相當感興趣，後因黃土水逝世，家屬在1931年將「甘露水」及其他作品運回台灣，由台灣教育會館收藏，歷經半年以上修復後展出。</p>\n<div>\n<figure class=\"deimgs\"><img src=\"https://ocacnews.net/articleImages/202112/M2_6D584FEA-392D-82EE-1E9C-29773E6923DA.jpg\" alt=\"MoNTUE北師美術館18日起至111年4月24日將展出「光－台灣文化的啟蒙與自覺」，16日舉辦媒體預展，展覽總策畫林曼麗（後右2）帶領媒體參觀展區，並介紹雕塑家黃土水作品「甘露水」。\" width=\"293\" height=\"186\">\n<figcaption><span style=\"color: rgb(126, 140, 141);\">MoNTUE北師美術館18日起至111年4月24日將展出「光－台灣文化的啟蒙與自覺」，16日舉辦媒體預展，展覽總策畫林曼麗（後右2）帶領媒體參觀展區，並介紹雕塑家黃土水作品「甘露水」。</span></figcaption>\n</figure>\n</div>\n<p><img src=\"https://ocacnews.net/articleImages/202112/M2_30BB9885-08D7-BAC9-587C-D09EA359F617.jpg\" alt=\"MoNTUE北師美術館18日起至111年4月24日將推出「光－台灣文化的啟蒙與自覺」特展，展出雕塑家黃土水作品「甘露水」，16日舉辦媒體預展。\" width=\"238\" height=\"167\"></p>\n<p><span style=\"color: rgb(126, 140, 141);\">MoNTUE北師美術館18日起至111年4月24日將推出「光－台灣文化的啟蒙與自覺」特展，展出雕塑家黃土水作品「甘露水」，16日舉辦媒體預展。</span></p>\n<p>&nbsp;</p>\n<p>展場設計別出心裁，「甘露水」如置身於同心圓的核心，映照出一道又一道圓弧型的牆，牆上有同一時期創作者的作品和文獻，交織出百年前的台灣。從展場外側走入核心，也能讓人如撥開層層歷史面紗。</p>\n<p>展覽以「生命的恆流」、「風景的創造」、「大眾與摩登」及「自覺的現代性」為策展子題。從陳植棋、倪蔣懷的「真人廟」，可從看似尋常風景的畫中解讀出被殖民者的精神抵抗；從賴和的手稿「出獄歸家」能看出作家以筆對抗時代的拚搏；曾因尺度而遭撤展的李石樵「橫臥裸婦」畫作，則呈現當代摩登風情。</p>\n<p>林曼麗選擇能沐浴到陽光的核心位置給了「甘露水」。林曼麗說，自然光能呈現「甘露水」最美的狀態，讓大理石表面看來如會呼吸，且在她看來，「甘露水」有了陽光，微笑也越來越迷人，越來越美麗。</p>\n<p>研究團隊成員之一、歷史學者周婉窈表示，100年前是台灣非武裝反殖民運動非常重要的一年，人民發起台灣議會設置請願運動、台灣文化協會成立，黃土水的「甘露水」也入選日本帝展。</p>\n<p>周婉窈表示，帝展是當時日本帝國圈內最高的藝術榮耀，可想像「甘露水」入選的消息如何振奮台灣社會，「我認為，『甘露水』就是像光的存在。」而展覽以「光」為主意象，也是紀念當年的台灣議會設置起願運動和文協像一輛向前衝的雙輪馬車，要把台灣人民載向光明所在。</p>\n<p>「光&mdash;台灣文化的啟蒙與自覺」特展18日起於國立台北教育大學北師美術館展至明年4月24日，個人入場與團體導覽可<a href=\"https://inline.app/booking/-MpfRG2jP_CU5dtzyuQJ:inline-live-2/-MpfRGLb_NOisVquGZvX?fbclid=IwAR2PvsJGPlc3j1Wo3zv5G6G6k8ldBbK-APL0ZlM-fXohUa4clMGqQzUY95Y\" target=\"_blank\" rel=\"noopener\">線上預約</a>。</p>', 0, 1, 1),
(60, '北美館地下一樓咖啡廳', '2022-04-09 23:16:27', '一直都有逛美術館的習慣\r\n但是從來沒在北美館B1餐飲部買過飲料\r\n直到剛剛好奇去買了一杯黑糖鮮奶茶\r\n售價85\r\n目測只有200毫升\r\n但是這麼小杯還是讓我喝不完…\r\n味道一言難盡\r\n牛奶不知道加多少水稀釋\r\n黑糖沒調勻，全部沉杯底\r\n所以我只喝的到牛奶稀釋好幾倍的味道\r\n偶爾夾雜黑糖顆粒\r\n忍不住跟店員反應\r\n她就回我：你自己要攪拌阿！\r\n………？！！\r\n這個回答正常嗎？\r\n而且我就是自己拌不開阿！\r\n\r\n總之以上經驗提供大家參考。\r\n\r\n以後看展還是自己帶水。', 0, 3, 2),
(61, '2022新一代停辦', '2022-04-20 23:08:39', '新一代還不公佈實體展覽停辦嗎？\r\n最近確診人數都破萬，\r\n不要再像去年一樣臨時停辦，\r\n搞得所有人訂房沒辦法退訂，\r\n再白花展場佈置的錢還沒辦法使用，\r\n可以早早公布讓大家有點準備嗎，\r\n就算辦了，疫情那麼嚴重，\r\n到底會有幾個人去啊？', 0, 3, 11),
(62, '國美館附近美食有哪些', '2022-04-21 23:14:37', '請問有推薦國美館附近的美食嗎價位可以在200以內的><小吃餐廳都可以，因為對那裡不熟怕踩地雷', 0, 3, 10),
(63, '大家怎麼知道附近藝文活動的', '2022-04-30 23:12:26', '我朋友都說最近有什麼什麼展的，我就問他們怎麼都知道的，結果都說FB啊之類的有打廣告。\r\n可是我就是沒接收到這資訊啊。\r\n如果沒有接收到的話，有沒有什麼網站是可以查到的，統整起來的。\r\n謝謝大家~', 0, 3, 8),
(64, '麥當勞 X 故宮推清代琺瑯彩瓷「皇帝御製分享盒」', '2022-05-05 10:30:39', '<p class=\"content-hed listicle-hed\"><span class=\"wait-font-load\">這包裝太唯美了！</span></p>\n<div class=\"content-dek listicle-dek wait-font-load\">\n<div class=\"content-lede-image listicle-lede-image\">\n<div class=\"content-lede-image-wrap custom-lede-crop\">\n<div class=\"image-credit content-lede-image-credit\">只要和「故宮」合作的商品，都超仙、超有藝術氣息。之前麥當勞與故宮推出「<a class=\"body-link\" href=\"https://www.elle.com/tw/life/style/g33374252/mcdonalds-national-palace-museum/\" target=\"_blank\" rel=\"noopener\" data-vars-ga-outbound-link=\"https://www.elle.com/tw/life/style/g33374252/mcdonalds-national-palace-museum/\">清朝古畫分享盒</a>」限定包裝，造成一陣搶購風潮，今年麥當勞再度攜手故宮精品，把清朝皇帝御製食器上的琺瑯彩瓷紋飾，變成限定包裝的「皇帝御製」麥當勞分享盒。這麼唯美的限定包裝，一定要擁有的吧！</div>\n</div>\n</div>\n<div class=\"listicle-body-content   \">\n<div class=\"listicle-slide listicle-slide-square listicle-slide-image viewed\" data-id=\"0\">\n<div class=\"listicle-slide-hed\">\n<div id=\"product--anchor\" class=\"product-anchor\"></div>\n<span class=\"slide-image-wrap\"><picture class=\"\"><img title=\"這包裝太唯美了！麥當勞 X 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E5%9C%96%E8%AA%AA1-%E5%8F%B0%E7%81%A3%E9%BA%A5%E7%95%B6%E5%8B%9E%E8%81%AF%E5%90%8D%E6%95%85%E5%AE%AE%E7%B2%BE%E5%93%81%E7%B2%BE%E9%81%B8%E6%B8%85%E6%9C%9D%E7%9A%87%E5%B8%9D%E5%BE%A1%E8%A3%BD%E9%A3%9F%E5%99%A8%E4%B8%8A%E7%9A%84%E7%90%BA%E7%91%AF%E5%BD%A9%E7%93%B7%E7%B4%8B%E9%A3%BE-%E9%81%8B%E7%94%A8%E6%88%90%E7%82%BA%E9%99%90%E5%AE%9A%E5%8C%85%E8%A3%9D%E7%9A%84-%E7%9A%87%E5%B8%9D%E5%BE%A1%E8%A3%BD-%E9%BA%A5%E7%95%B6%E5%8B%9E%E5%88%86%E4%BA%AB%E7%9B%92%E8%88%87-%E6%9C%95%E5%B0%B1%E5%96%9C%E7%BF%BB-%E8%81%AF%E5%90%8D%E6%A1%8C%E9%81%8A-1651548509.jpg?crop=0.427xw:0.640xh;0.117xw,0.230xh&amp;resize=480:*\" alt=\"這包裝太唯美了！麥當勞 x 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" width=\"262\" height=\"261\"></picture></span></div>\n<div class=\"listicle-slide-dek\">\n<p>十八世紀的西方正直啟蒙思潮發展的重要時刻，清朝皇帝也因傳教士而受到影響，在皇家作坊的生產與創作，縱跨康雍乾三朝的「畫琺瑯工藝」便是其一，更將「琺瑯彩瓷」作為御製風格食器。</p>\n<div class=\"listicle-slide-hed\"><span class=\"listicle-slide-hed-text\">「朕就喜翻」聯名桌遊</span></div>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-1x1 listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/圖說6-台灣麥當勞與故宮精品合作-打造-朕就喜翻-聯名桌遊-5月4日起至5月31日止限期登場-1651548491.jpg?crop=0.7333767926988266xw:1xh;center,top&amp;resize=768:*\" media=\"(min-width: 30rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/圖說6-台灣麥當勞與故宮精品合作-打造-朕就喜翻-聯名桌遊-5月4日起至5月31日止限期登場-1651548491.jpg?crop=0.7333767926988266xw:1xh;center,top&amp;resize=768:*\"><img class=\"lazyimage ls-is-cached lazyloaded\" title=\"這包裝太唯美了！麥當勞 X 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E5%9C%96%E8%AA%AA6-%E5%8F%B0%E7%81%A3%E9%BA%A5%E7%95%B6%E5%8B%9E%E8%88%87%E6%95%85%E5%AE%AE%E7%B2%BE%E5%93%81%E5%90%88%E4%BD%9C-%E6%89%93%E9%80%A0-%E6%9C%95%E5%B0%B1%E5%96%9C%E7%BF%BB-%E8%81%AF%E5%90%8D%E6%A1%8C%E9%81%8A-5%E6%9C%884%E6%97%A5%E8%B5%B7%E8%87%B35%E6%9C%8831%E6%97%A5%E6%AD%A2%E9%99%90%E6%9C%9F%E7%99%BB%E5%A0%B4-1651548491.jpg?crop=0.7333767926988266xw:1xh;center,top&amp;resize=480:*\" alt=\"這包裝太唯美了！麥當勞 x 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" width=\"312\" height=\"312\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/圖說6-台灣麥當勞與故宮精品合作-打造-朕就喜翻-聯名桌遊-5月4日起至5月31日止限期登場-1651548491.jpg?crop=0.7333767926988266xw:1xh;center,top&amp;resize=480:*\"></picture></span></div>\n</div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p>不只包裝精美的「麥當勞分享盒」，此次聯名還會附贈「朕就喜翻」聯名桌遊，讓每次與親友的歡聚都能笑聲不斷！</p>\n<p>&nbsp;</p>\n<div class=\"listicle-slide listicle-slide-square listicle-slide-image viewed\" data-id=\"4\">\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-1x1 listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><img class=\"lazyimage lazyloaded\" title=\"這包裝太唯美了！麥當勞 X 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E5%9C%96%E8%AA%AA2-%E9%BA%A5%E7%95%B6%E5%8B%9Ex%E6%95%85%E5%AE%AE%E7%B2%BE%E5%93%81%E7%BF%BB%E7%8E%A9%E5%8C%85%E8%A3%9D%E8%A8%AD%E8%A8%88%E6%89%93%E9%80%A0%E5%B0%88%E5%B1%AC%E9%BA%A5%E7%95%B6%E5%8B%9E%E5%88%86%E4%BA%AB%E7%9B%92-%E7%9A%87%E5%B8%9D%E5%BE%A1%E8%A3%BD-%E9%99%90%E5%AE%9A%E5%8C%85%E8%A3%9D-%E5%8A%A0%E8%B3%BC%E6%8C%87%E5%AE%9A%E9%A3%B2%E5%93%81%E8%B2%B7%E4%B8%80%E9%80%81%E4%B8%80-%E5%86%8D%E9%80%81-%E6%9C%95%E5%B0%B1%E5%96%9C%E7%BF%BB-%E8%81%AF%E5%90%8D%E6%A1%8C%E9%81%8A-1651548499.jpg?crop=0.491xw:0.737xh;0.102xw,0.263xh&amp;resize=480:*\" alt=\"這包裝太唯美了！麥當勞 x 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" width=\"171\" height=\"171\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/圖說2-麥當勞x故宮精品翻玩包裝設計打造專屬麥當勞分享盒-皇帝御製-限定包裝-加購指定飲品買一送一-再送-朕就喜翻-聯名桌遊-1651548499.jpg?crop=0.491xw:0.737xh;0.102xw,0.263xh&amp;resize=480:*\"></picture></span></div>\n</div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p>桌遊內皆附贈「故宮精品折價券」，在故宮精品網路商城、故宮商店門市消費滿500元，可現折50元。</p>\n<div class=\"listicle-slide listicle-slide-square listicle-slide-image viewed\" data-id=\"5\">\n<div class=\"listicle-slide-hed\"><span class=\"listicle-slide-hed-text\">【麥當勞分享盒「皇帝御製」限定包裝 販售資訊】</span></div>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-1x1 listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/圖說3-無論什麼場合-家庭聚餐-吃貨派對-歡聚唱歌-一起看劇-草地野餐等-歡聚就是要-麥當勞分享盒-1651548494.jpg?crop=0.371xw:0.556xh;0.611xw,0.314xh&amp;resize=768:*\" media=\"(min-width: 30rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/圖說3-無論什麼場合-家庭聚餐-吃貨派對-歡聚唱歌-一起看劇-草地野餐等-歡聚就是要-麥當勞分享盒-1651548494.jpg?crop=0.371xw:0.556xh;0.611xw,0.314xh&amp;resize=768:*\"><img class=\"lazyimage lazyloaded\" title=\"這包裝太唯美了！麥當勞 X 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E5%9C%96%E8%AA%AA3-%E7%84%A1%E8%AB%96%E4%BB%80%E9%BA%BC%E5%A0%B4%E5%90%88-%E5%AE%B6%E5%BA%AD%E8%81%9A%E9%A4%90-%E5%90%83%E8%B2%A8%E6%B4%BE%E5%B0%8D-%E6%AD%A1%E8%81%9A%E5%94%B1%E6%AD%8C-%E4%B8%80%E8%B5%B7%E7%9C%8B%E5%8A%87-%E8%8D%89%E5%9C%B0%E9%87%8E%E9%A4%90%E7%AD%89-%E6%AD%A1%E8%81%9A%E5%B0%B1%E6%98%AF%E8%A6%81-%E9%BA%A5%E7%95%B6%E5%8B%9E%E5%88%86%E4%BA%AB%E7%9B%92-1651548494.jpg?crop=0.371xw:0.556xh;0.611xw,0.314xh&amp;resize=480:*\" alt=\"這包裝太唯美了！麥當勞 x 故宮推清代琺瑯彩瓷「皇帝御製分享盒」，還有買一送一優惠\" width=\"361\" height=\"360\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/圖說3-無論什麼場合-家庭聚餐-吃貨派對-歡聚唱歌-一起看劇-草地野餐等-歡聚就是要-麥當勞分享盒-1651548494.jpg?crop=0.371xw:0.556xh;0.611xw,0.314xh&amp;resize=480:*\"></picture></span></div>\n</div>\n<div class=\"image-credit listicle-slide-credit\">何時開賣：5月4日起至5月31日止</div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p>活動辦法：凡購買任一麥當勞分享盒，即可獲得麥當勞與故宮精品聯名的「皇帝御製」限定包裝；加購指定飲品買一送一，再送「朕就喜翻」故宮聯名桌遊，數量有限，送完為止。</p>\n</div>\n</div>\n<div class=\"listicle-slide listicle-slide-landscape listicle-slide-embed viewed\" data-id=\"6\">\n<div class=\"listicle-slide-hed\">\n<div id=\"product--anchor\" class=\"product-anchor\"></div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"listicle-slide listicle-slide-square listicle-slide-image viewed\" data-id=\"5\">\n<div class=\"listicle-slide-hed\">\n<div id=\"product--anchor\" class=\"product-anchor\"></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>', 0, 2, 1),
(65, '【高雄HOPE—希望的形狀】', '2022-05-06 23:08:39', '即日起~10月30日，在高雄駁二藝術特區大勇區C5倉庫當代館推出「HOPE—希望的形狀」台灣、⽇本設計師聯合創作展。「HOPE 計畫」是將無形的「希望」透過設計手法具體化呈現的展覽，而今年集結了台、日共28名設計創作者，以紙鶴、筊、塗鴉牆三種形式做為創作載體，用藝術來展現希望的形狀。同時展場中也邀請看展的朋友繫上絲帶，一起來許下希望、共同傳遞希望與力量！', 1, 1, 5),
(68, '〈甘露水〉移師高美館5/21展出！《光》特展5大亮點', '2022-05-10 11:13:48', '<p class=\"body-text\">國立臺北教育大學北師美術館展覽於4月24日圓滿落幕，展覽期間吸引超過5萬人前往，掀起觀展熱潮。<strong>今年5月21日起，《光》將於高雄市立美術館盛大開展，邀請南臺灣民眾親炙黃土水雕塑作品〈甘露水〉以及其他超過20位臺灣前輩藝術家的大師之作，共同見證藝文界的百年脈動！</strong></p>\n<p class=\"body-text\">高雄展覽主視覺延續前站，以黃土水雕塑作品〈甘露水〉為主題，展開蚌殼的少女以堅定昂首之態佇立在光線之中，以此呼應作品首度來到高雄這座充滿陽光的南方城市，展開新世代「南方文藝復興」的追尋，帶著眾人走向下個百年。</p>\n<div class=\"listicle-slide listicle-slide-landscape listicle-slide-image viewed\" data-id=\"0\">\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-freeform listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><img title=\"黃土水作品《甘露水》\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/03-%E9%BB%83%E5%9C%9F%E6%B0%B4%E4%BD%9C%E5%93%81-%E7%94%98%E9%9C%B2%E6%B0%B4-%E6%96%BC%E5%8C%97%E5%B8%AB%E7%BE%8E%E8%A1%93%E9%A4%A8%E5%B1%95%E5%A0%B4-%E8%AB%8B%E8%A8%BB%E6%98%8E-%E5%8C%97%E5%B8%AB%E7%BE%8E%E8%A1%93%E9%A4%A8%E6%8F%90%E4%BE%9B-%E5%BC%B5%E5%9C%8B%E8%80%80%E6%8B%8D%E6%94%9D-1650949027.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\" alt=\"黃土水作品《甘露水》\" width=\"342\" height=\"228\"></picture></span></div>\n</div>\n<div class=\"image-credit listicle-slide-credit\"><span class=\"image-photo-credit\">北師美術館</span></div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p><strong>1921年10月，黃土水以《甘露水》獲得日本帝國美術展覽會入選，蚌殼中昂然向上的少女，宛如自黑暗中走向世界，象徵臺灣文藝復興時代的降臨。</strong>同月17日，臺灣文化協會成立，發起人蔣渭水發表〈臨床講義：名為臺灣的病人〉一文，診斷臺灣罹患「知識的營養不良症」，須藉由文化運動醫治，而推動文化運動的組織即是臺灣文化協會。</p>\n</div>\n</div>\n<div class=\"listicle-slide listicle-slide-landscape listicle-slide-embed viewed\" data-id=\"1\">\n<div class=\"listicle-slide-hed\">\n<div id=\"product--anchor\" class=\"product-anchor\"></div>\n</div>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media media-loader listicle-slide-media listicle-slide-media-embed slide-media-instagram lazyloaded media-loaded\">\n<div class=\"slide-media-inner\">&nbsp;</div>\n</div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p>隨著文化運動的深化，各式政治運動蓬勃湧現，臺灣文化協會於1927年分裂後影響生成多個團體，分佔光譜不同位置，共同為臺灣未來努力。另一方面，文協推展的文化運動則受到世界思潮影響，新時代的繪畫、雕刻、小說、新劇、電影紛紛誕生，與運動相輔相成新的藝術概念。藝術家追索藝術與社會之間的關係，以文藝抵抗的路線將文協精神延伸至戰後。</p>\n<p>《光──臺灣文化的啟蒙與自覺》以「<strong>生命的恆流</strong>」、「<strong>風景的創造</strong>」、「<strong>大眾與摩登</strong>」與「<strong>自覺的現代性</strong>」四個子題出發，由內而外探討創作者如何從自我覺察的迸發進而書寫社會，勾勒個人和社會的交融與抵抗。</p>\n<p><strong>本文幫大家整理了展覽的五大看點與更多展覽作品搶先看，讓我們一起回到台灣的文藝復興時代！</strong></p>\n<div class=\"listicle-slide listicle-slide-portrait listicle-slide-image viewed\" data-id=\"2\">\n<h3 class=\"listicle-slide-hed\"><span class=\"listicle-slide-hed-text\">《光》作品看點1：《甘露水》沉寂50年終於對外展出！</span></h3>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-freeform listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/01-黃土水-甘露水-1921-大理石雕-80-0-x-40-0-x-h170-0-cm-文化部典藏c黃邦銓-林君昵-提供-北師美術館-1639627493.jpg?crop=1xw:1xh;center,top&amp;resize=980:*\" media=\"(min-width: 40.625rem)\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/01-黃土水-甘露水-1921-大理石雕-80-0-x-40-0-x-h170-0-cm-文化部典藏c黃邦銓-林君昵-提供-北師美術館-1639627493.jpg?crop=1xw:1xh;center,top&amp;resize=768:*\" media=\"(min-width: 30rem)\"><img title=\"光：台灣文化的啟蒙與自覺\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/01-%E9%BB%83%E5%9C%9F%E6%B0%B4-%E7%94%98%E9%9C%B2%E6%B0%B4-1921-%E5%A4%A7%E7%90%86%E7%9F%B3%E9%9B%95-80-0-x-40-0-x-h170-0-cm-%E6%96%87%E5%8C%96%E9%83%A8%E5%85%B8%E8%97%8Fc%E9%BB%83%E9%82%A6%E9%8A%93-%E6%9E%97%E5%90%9B%E6%98%B5-%E6%8F%90%E4%BE%9B-%E5%8C%97%E5%B8%AB%E7%BE%8E%E8%A1%93%E9%A4%A8-1639627493.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\" alt=\"光：台灣文化的啟蒙與自覺\" width=\"317\" height=\"423\"></picture></span></div>\n</div>\n<div class=\"image-credit listicle-slide-credit\"><span class=\"image-photo-credit\" style=\"color: rgb(126, 140, 141);\">黃邦銓、林君昵；北師美術館</span></div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p><span style=\"color: rgb(126, 140, 141);\"><em>⌾&nbsp;</em><em>黃土水，《甘露水》，1921，大理石雕，80.0 x 40.0 x H170.0 cm，文化部典藏</em></span></p>\n<p><strong>1921</strong><strong>年，黃土水以大理石雕刻的《甘露水》，暨《蕃童》後二度入選帝展。這件日後被譽為「臺灣的維納斯」的瑰寶，是臺灣首座裸體雕像。</strong>刻劃一名面容充滿自信的女子，頭微微仰起，姿態挺直，雙手輕輕放在身後的蚌殼上，綻放了光一般的向上精神，神情舒緩而堅強，寄寓藝術家對於彼時正大步向前的臺灣社會的期盼與想像，也開創臺灣藝術史上的新篇章。不過，這件作品卻隨著時代變遷，逐漸消失在眾人眼前。</p>\n<p>近幾年，人們企盼《甘露水》再度面世的呼聲始終不斷。為了讓《甘露水》重返世人眼前，林曼麗教授率領國立臺北教育大學北師美術館團隊鍥而不捨地追索，而總統府和文化部更是傾全力協助，塵封近半世紀的《甘露水》終於重見天日，在《光──臺灣文化的啟蒙與自覺》展出！</p>\n<h3 class=\"listicle-slide-hed\"><span class=\"listicle-slide-hed-text\">《光》作品看點2：當年的摩登女孩們</span></h3>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-freeform listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/繡裙-1639626507.jpg?crop=1xw:1xh;center,top&amp;resize=980:*\" media=\"(min-width: 40.625rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/繡裙-1639626507.jpg?crop=1xw:1xh;center,top&amp;resize=980:*\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/繡裙-1639626507.jpg?crop=1xw:1xh;center,top&amp;resize=768:*\" media=\"(min-width: 30rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/繡裙-1639626507.jpg?crop=1xw:1xh;center,top&amp;resize=768:*\"><img class=\"lazyimage lazyloaded\" title=\"光：台灣文化的啟蒙與自覺\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E7%B9%A1%E8%A3%99-1639626507.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\" alt=\"光：台灣文化的啟蒙與自覺\" width=\"292\" height=\"383\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/繡裙-1639626507.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\"></picture></span></div>\n</div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p><span style=\"color: rgb(126, 140, 141);\"><em>⌾&nbsp;</em><em>陳進，《繡裙》，1947，膠彩、絹，120.0 x 90.0 cm，私人收藏</em></span></p>\n<p>另一方面，首次面世的陳進《繡裙》（1947）具備著摩登自信，而同樣是「摩登女孩」（モガ，moga）為對象，李石樵以大膽又前衛筆法繪下《橫臥裸婦》(1936)，卻遭殖民當局強迫從第二回臺陽展撤下。</p>\n</div>\n</div>\n</div>\n<div class=\"breaker-ad listicle-slide-list-ad\">&nbsp;\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-freeform listicle-slide-media listicle-slide-media-image\">\n<h3 class=\"slide-media-inner\">《光》作品看點3：透過尋常風景暗喻臺灣人的精神抵抗</h3>\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><img class=\"lazyimage lazyloaded\" title=\"光：台灣文化的啟蒙與自覺\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14-%E5%80%AA%E8%94%A3%E6%87%B7-%E7%9C%9F%E4%BA%BA%E5%BB%9F-1933-%E6%B0%B4%E5%BD%A9-%E7%B4%99-33-0-x-48-5-cm-%E7%A7%81%E4%BA%BA%E6%94%B6%E8%97%8F-1639623234.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\" alt=\"光：台灣文化的啟蒙與自覺\" width=\"262\" height=\"175\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14-倪蔣懷-真人廟-1933-水彩-紙-33-0-x-48-5-cm-私人收藏-1639623234.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\"></picture></span></div>\n</div>\n<div class=\"image-credit listicle-slide-credit\"><span class=\"image-photo-credit\" style=\"color: rgb(126, 140, 141);\">北師美術館</span></div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p><span style=\"color: rgb(126, 140, 141);\"><em>⌾ 倪蔣懷，《真人廟》，1933，水彩、紙，33.0 x 48.5 cm，私人收藏</em></span></p>\n<p>無論是陳植棋和倪蔣懷在1930與1933年所繪《真人廟》、郭柏川《臺南祀典武廟》（1929）與陳澄波《琳瑯山閣》（1935），皆是透過尋常風景暗喻臺灣人的精神抵抗。</p>\n<h3 class=\"listicle-slide-hed\"><span class=\"listicle-slide-hed-text\">《光》作品看點4：萊卡相機的發明捕捉城市光影</span></h3>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-freeform listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/東京小劇場-1639625959.jpg?crop=1xw:1xh;center,top&amp;resize=980:*\" media=\"(min-width: 40.625rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/東京小劇場-1639625959.jpg?crop=1xw:1xh;center,top&amp;resize=980:*\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/東京小劇場-1639625959.jpg?crop=1xw:1xh;center,top&amp;resize=768:*\" media=\"(min-width: 30rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/東京小劇場-1639625959.jpg?crop=1xw:1xh;center,top&amp;resize=768:*\"><img class=\"lazyimage lazyloaded\" title=\"光：台灣文化的啟蒙與自覺\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E6%9D%B1%E4%BA%AC%E5%B0%8F%E5%8A%87%E5%A0%B4-1639625959.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\" alt=\"光：台灣文化的啟蒙與自覺\" width=\"289\" height=\"437\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/東京小劇場-1639625959.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\"></picture></span></div>\n</div>\n<div class=\"image-credit listicle-slide-credit\"><span class=\"image-photo-credit\" style=\"color: rgb(126, 140, 141);\">夏門攝影企劃研究室</span></div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p><span style=\"color: rgb(126, 140, 141);\"><em>⌾</em><em>&nbsp;鄧南光，《東京新興攝影作品&mdash;東京小劇場實況攝影&mdash;觀眾席》，1929-35，藝術微噴</em></span></p>\n<p>而萊卡相機的發明解放攝影，促使了新興寫真的興起，醉心其中的鄧南光攜帶鏡頭和八厘米錄像漫遊城市，亦瞥見東京五一勞動節遊行的身影，此系列與長久消失在公眾眼前的林之助《取景》（1938）相互呼應，圖中少女拿著正是當年昂貴的萊卡相機。</p>\n<p>&nbsp;</p>\n<h3 class=\"listicle-slide-hed\"><span class=\"listicle-slide-hed-text\">《光》作品看點5：看見當時如何發展文學與劇場運動</span></h3>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-freeform listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/29-賴和-漢詩-出獄歸家-手稿-圖片來源-財團法人賴和文教基金會-png-1639625474.png?crop=1xw:1xh;center,top&amp;resize=980:*\" media=\"(min-width: 48rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/29-賴和-漢詩-出獄歸家-手稿-圖片來源-財團法人賴和文教基金會-png-1639625474.png?crop=1xw:1xh;center,top&amp;resize=980:*\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/29-賴和-漢詩-出獄歸家-手稿-圖片來源-財團法人賴和文教基金會-png-1639625474.png?crop=1xw:1xh;center,top&amp;resize=768:*\" media=\"(min-width: 30rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/29-賴和-漢詩-出獄歸家-手稿-圖片來源-財團法人賴和文教基金會-png-1639625474.png?crop=1xw:1xh;center,top&amp;resize=768:*\"><img class=\"lazyimage lazyloaded\" title=\"光：台灣文化的啟蒙與自覺\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/29-%E8%B3%B4%E5%92%8C-%E6%BC%A2%E8%A9%A9-%E5%87%BA%E7%8D%84%E6%AD%B8%E5%AE%B6-%E6%89%8B%E7%A8%BF-%E5%9C%96%E7%89%87%E4%BE%86%E6%BA%90-%E8%B2%A1%E5%9C%98%E6%B3%95%E4%BA%BA%E8%B3%B4%E5%92%8C%E6%96%87%E6%95%99%E5%9F%BA%E9%87%91%E6%9C%83-png-1639625474.png?crop=1xw:1xh;center,top&amp;resize=480:*\" alt=\"光：台灣文化的啟蒙與自覺\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/29-賴和-漢詩-出獄歸家-手稿-圖片來源-財團法人賴和文教基金會-png-1639625474.png?crop=1xw:1xh;center,top&amp;resize=480:*\"></picture></span></div>\n</div>\n<div class=\"image-credit listicle-slide-credit\"><span class=\"image-photo-credit\" style=\"color: rgb(126, 140, 141);\">財團法人賴和文教基金會</span></div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p><span style=\"color: rgb(126, 140, 141);\"><em>⌾</em>&nbsp;<em>賴和，漢詩：〈出獄歸家〉（手稿）</em></span></p>\n<p>從文化劇傳單與劇照中，可以見到林摶秋與張維賢等先鋒如何結合文學與藝術家發展劇場運動，並使戲劇成為文協宣傳的手段。而文協的重要成員賴和以筆作為利器拚搏，本次展出他涉入治警事件的手稿《出獄歸家》（1923），為手稿完成98年後首次正式展出。</p>\n<h2 class=\"listicle-slide-hed\"><span class=\"listicle-slide-hed-text\">光──臺灣文化的啟蒙與自覺｜展覽資訊</span></h2>\n<div class=\"listicle-slide-media-outer\">\n<div class=\"slide-media slide-media-freeform listicle-slide-media listicle-slide-media-image\">\n<div class=\"slide-media-inner\"><span class=\"slide-image-wrap\"><picture class=\"\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00-高雄市立美術館-光-臺灣文化的啟蒙與自覺-主視覺-橫式-高美館提供-1650948807.jpg?crop=1xw:1xh;center,top&amp;resize=980:*\" media=\"(min-width: 48rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00-高雄市立美術館-光-臺灣文化的啟蒙與自覺-主視覺-橫式-高美館提供-1650948807.jpg?crop=1xw:1xh;center,top&amp;resize=980:*\"><source srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00-高雄市立美術館-光-臺灣文化的啟蒙與自覺-主視覺-橫式-高美館提供-1650948807.jpg?crop=1xw:1xh;center,top&amp;resize=768:*\" media=\"(min-width: 30rem)\" data-srcset=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00-高雄市立美術館-光-臺灣文化的啟蒙與自覺-主視覺-橫式-高美館提供-1650948807.jpg?crop=1xw:1xh;center,top&amp;resize=768:*\"><img class=\"lazyimage lazyloaded\" title=\"《光──臺灣文化的啟蒙與自覺》\" src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00-%E9%AB%98%E9%9B%84%E5%B8%82%E7%AB%8B%E7%BE%8E%E8%A1%93%E9%A4%A8-%E5%85%89-%E8%87%BA%E7%81%A3%E6%96%87%E5%8C%96%E7%9A%84%E5%95%9F%E8%92%99%E8%88%87%E8%87%AA%E8%A6%BA-%E4%B8%BB%E8%A6%96%E8%A6%BA-%E6%A9%AB%E5%BC%8F-%E9%AB%98%E7%BE%8E%E9%A4%A8%E6%8F%90%E4%BE%9B-1650948807.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\" alt=\"《光──臺灣文化的啟蒙與自覺》\" width=\"366\" height=\"142\" data-src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00-高雄市立美術館-光-臺灣文化的啟蒙與自覺-主視覺-橫式-高美館提供-1650948807.jpg?crop=1xw:1xh;center,top&amp;resize=480:*\"></picture></span></div>\n</div>\n<div class=\"image-credit listicle-slide-credit\"><span class=\"image-photo-credit\">高雄市立美術館</span></div>\n</div>\n<div class=\"listicle-slide-dek\">\n<p>展期：2022.05.21 - 2022.09.1</p>\n<p>地點：高雄市立美術館101-103展覽室</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>', 1, 1, 10);

-- --------------------------------------------------------

--
-- 資料表結構 `blog_article_like`
--

CREATE TABLE `blog_article_like` (
  `like_id` int NOT NULL,
  `user_id` int NOT NULL,
  `article_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- 資料表結構 `blog_category`
--

CREATE TABLE `blog_category` (
  `sn` int NOT NULL COMMENT '系統分類編號',
  `thema` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `squence` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- 傾印資料表的資料 `blog_category`
--

INSERT INTO `blog_category` (`sn`, `thema`, `squence`) VALUES
(1, '好展推薦', 1),
(2, '小資攻略', 2),
(3, '閒聊交流', 3),
(4, '心得分享', 4);

-- --------------------------------------------------------

--
-- 資料表結構 `blog_comment`
--

CREATE TABLE `blog_comment` (
  `blog_comment_id` int NOT NULL,
  `Blog_comment_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `COMMENT_time` datetime NOT NULL,
  `user_id` int NOT NULL,
  `article_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- 傾印資料表的資料 `blog_comment`
--

INSERT INTO `blog_comment` (`blog_comment_id`, `Blog_comment_content`, `COMMENT_time`, `user_id`, `article_id`) VALUES
(1, '好美唷～～有空也想去玩！', '2022-03-18 14:32:31', 5, 50),
(3, '好羨慕唷~~~~~~~~~~我要穿著我的mini skirt去', '2022-03-21 09:36:22', 8, 50),
(9, '很久沒去駁二了~~這個假日也想去，有版友要一起嗎，哈哈', '2022-06-01 09:46:07', 11, 65),
(10, '奇美還是很漂亮耶，小學時常去，好喜歡它的建築', '2022-05-27 10:10:51', 11, 50),
(11, '哇!看了好想去看展，想起來也好久沒去奇美了', '2022-05-28 10:12:13', 1, 50),
(12, '他們修復團隊拍的紀錄片超感人的...和朋友看到哭', '2022-06-03 10:14:42', 11, 59),
(13, '在北師美術館的時候我們通識課有去現場看，真的很驚豔', '2022-05-27 10:17:56', 3, 59),
(14, '看到台灣的前輩藝術家努力創作的痕跡，很難不震撼!!!', '2022-05-31 10:17:58', 8, 59),
(15, '真的沒有想到會來高雄耶，畢竟石膏的運送不容易，在高雄的各位衝呀~~', '2022-06-09 10:18:01', 4, 59),
(16, '太有趣了吧XDDD故宮跟速食聯名，根本是鎖定文青了!', '2022-05-31 10:18:31', 5, 64),
(17, '哇，沒有想過速食包裝會讓人想收藏......好像懂追星族的感受了', '2022-05-27 10:24:23', 11, 64),
(18, '小TIPS，我都會用美食外送APP看附近有什麼店', '2022-05-22 10:24:56', 7, 62),
(19, '小時候在裡面看許文龍先生收藏的樂器，真的大開眼界', '2022-05-30 10:24:59', 7, 50),
(20, '好期待!!!!!台灣第一位出國的雕塑家，真的必看', '2022-06-13 10:28:02', 2, 59),
(21, '家人是建築師，對建築真的好嚮往，一定會去看!!!!', '2022-05-27 10:29:00', 11, 56),
(22, '謝謝分享~忠泰美術館很多的建築展都很出色', '2022-05-27 10:29:18', 4, 56),
(23, '我居然可以在高雄看到...是奈良美智後最最讓我期待的展覽了', '2022-05-27 10:29:18', 9, 59),
(24, '比起喜歡我好像是習慣耶！在工作空檔讓自己心靈成長的感覺', '2022-05-27 10:34:35', 11, 34),
(25, '出色的文章...我看了那麼多展卻對台灣美術史了解甚少，好慚愧!', '2022-05-27 10:34:48', 3, 10),
(32, '4444444444444444444444444444444444444', '2022-05-27 10:43:19', 11, 60),
(33, '4444444444444444444444444444444444444', '2022-05-27 10:43:54', 11, 60),
(34, '4444444444444444444444444444444444444', '2022-05-27 10:44:27', 11, 60),
(35, 'okokokoksssssssssssssssssssss', '2022-05-27 10:47:28', 11, 60),
(36, 'sssssssssssssssssss', '2022-05-27 10:49:17', 11, 1),
(37, 'ㄇjjjjsssssssssssssssssssssssssssss', '2022-05-27 10:50:04', 11, 1),
(38, 'raaaaaaaattttttttttttttttttttttttttttttt', '2022-05-27 10:52:41', 11, 1),
(39, 'hahahahahhahahaaaaa', '2022-05-27 10:52:53', 11, 1),
(61, '嗨嗨，請問還有嗎？可以高雄面交～', '2022-02-26 22:42:54', 1, 4),
(63, '塗鴉牆是可以自由塗鴉的嗎？希望可以留言，哈', '2022-06-14 12:03:25', 1, 65),
(64, '我今天要去看，才發現快結束了，好險！！！', '2022-04-02 12:04:51', 6, 57);

-- --------------------------------------------------------

--
-- 資料表結構 `blog_comment_like`
--

CREATE TABLE `blog_comment_like` (
  `user_id` int NOT NULL,
  `article_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- 資料表結構 `blog_images`
--

CREATE TABLE `blog_images` (
  `id` int NOT NULL,
  `url` varchar(255) NOT NULL,
  `article_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- 資料表結構 `cart_coupon`
--

CREATE TABLE `cart_coupon` (
  `coupon_id` int NOT NULL,
  `couponPrice` int NOT NULL,
  `couponName` varchar(255) NOT NULL,
  `fkUserId` int DEFAULT NULL,
  `couponKind` varchar(255) NOT NULL,
  `useDeadline` date NOT NULL,
  `isUsed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `cart_coupon`
--

INSERT INTO `cart_coupon` (`coupon_id`, `couponPrice`, `couponName`, `fkUserId`, `couponKind`, `useDeadline`, `isUsed`) VALUES
(1, 20, 'dDII125D', 1, '商品折價券', '2022-06-18', 0),
(2, 50, '9HbEjd', 2, '商品折價券', '2022-10-28', 0),
(3, 100, 'cTHxEa', 3, '商品折價券', '2022-11-11', 0),
(4, 150, 'p43y9c', 4, '商品折價券', '2022-07-03', 0),
(5, 200, 'EHtUBY', 5, '商品折價券', '2022-06-15', 0),
(6, 50, 'RcsEdq', 1, '展覽優惠券', '2022-06-25', 1),
(7, 100, '5RcxuA', 1, '展覽優惠券', '2022-09-01', 0),
(8, 150, 'WnYW5Z', 2, '展覽優惠券', '2022-07-23', 0),
(9, 200, 'weqRZh', 3, '展覽優惠券', '2022-12-19', 0),
(10, 250, '7F4vkJ', 4, '展覽優惠券', '2022-09-20', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `cart_exhibition`
--

CREATE TABLE `cart_exhibition` (
  `cartExID` int NOT NULL,
  `cartExTitle` varchar(255) NOT NULL,
  `cartExStart` date NOT NULL,
  `cartExEnd` date NOT NULL,
  `cartExImage` varchar(255) NOT NULL,
  `cartExBuyTime` varchar(255) NOT NULL,
  `cartExPrice` int NOT NULL,
  `cartExCount` int NOT NULL,
  `cartExCategory` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `cartExMuseum` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `cart_exhibition`
--

INSERT INTO `cart_exhibition` (`cartExID`, `cartExTitle`, `cartExStart`, `cartExEnd`, `cartExImage`, `cartExBuyTime`, `cartExPrice`, `cartExCount`, `cartExCategory`, `user_id`, `cartExMuseum`) VALUES
(1, '賦：袁旃個展', '2022-04-23', '2022-07-24', '1654408323187.jpeg', '2022-06-17', 200, 4, '成人票', 10072268, '台中美術館'),
(2, '光—臺灣文化的啟蒙與自覺 臺灣文化協會一○○年', '2022-05-21', '2022-09-18', '1654408257615.jpeg', '2022-06-14', 200, 2, '成人票', 10072268, '高雄美術館'),
(3, '賦：袁旃個展', '2022-04-23', '2022-07-24', '1654408323187.jpeg', '2022-06-13', 70, 1, '青年票', 10072268, '台中美術館'),
(4, '賦：袁旃個展', '2022-04-23', '2022-07-24', '1654408323187.jpeg', '2022-07-14', 70, 1, '青年票', 1, '台中美術館'),
(12, '光—臺灣文化的啟蒙與自覺 臺灣文化協會一○○年', '2022-05-21', '2022-09-18', '1654408257615.jpeg', '2022-06-25', 200, 2, '成人票', 1, '高雄美術館'),
(19, '【「什麼是『番』－清帝國文獻裡的臺灣原住民族」特展】', '2022-03-18', '2022-06-18', 'EX010.jpg', '2022-06-16', 200, 1, '成人票', 1, '故宮博物院');

-- --------------------------------------------------------

--
-- 資料表結構 `exhibitionticket`
--

CREATE TABLE `exhibitionticket` (
  `fkActId` int NOT NULL COMMENT '該活動外來建',
  `fkTicketId` int NOT NULL COMMENT '該活動票種外來建'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `exhibitionticket`
--

INSERT INTO `exhibitionticket` (`fkActId`, `fkTicketId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 2),
(3, 3),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(5, 1),
(5, 4),
(6, 3),
(6, 4),
(7, 1),
(7, 3),
(8, 4),
(8, 3),
(9, 1),
(10, 3),
(11, 3),
(10, 1),
(11, 2);

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition_actadm`
--

CREATE TABLE `exhibition_actadm` (
  `id` int NOT NULL COMMENT '主鍵',
  `aName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '活動名稱',
  `pic1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '展覽活動圖片',
  `pic2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '展覽活動圖片',
  `start` datetime NOT NULL COMMENT '活動開始時間',
  `end` datetime NOT NULL COMMENT '活動結束時間',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '活動建立時間',
  `intro` varchar(9999) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '活動介紹',
  `fkCityId` int NOT NULL COMMENT '外來鍵城市 下拉式選擇城市',
  `fkMuseumId` int NOT NULL COMMENT '外來鍵廠商 新增這個活動的廠商',
  `fkKindId` int NOT NULL COMMENT '外來鍵_活動分類'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='新增廠商活動table';

--
-- 傾印資料表的資料 `exhibition_actadm`
--

INSERT INTO `exhibition_actadm` (`id`, `aName`, `pic1`, `pic2`, `start`, `end`, `time`, `intro`, `fkCityId`, `fkMuseumId`, `fkKindId`) VALUES
(1, '李義弘：回顧展', '1654406791674.jpeg', '1654406994908.jpeg', '2022-04-02 13:16:44', '2022-07-14 13:16:44', '2022-06-05 05:31:51', '「李義弘：回顧展」邀請藝評學者王嘉驥擔任客座策展人，是藝術家長達55年的藝術生涯以來規模最大也最重要的一次展出。李義弘（1941-）早年曾在基隆的國民中學任教，並追隨書畫名家江兆申（1925-1996）；1978年後轉向專職創作。從傳統山水繪畫入手，繼而導入自然與風土實景，搜盡臺灣奇特地形，也赴海外遊歷；運用筆墨作畫的同時，他也藉助於攝影，捕捉實景以發想創作。李義弘於晚年發展出立體感與空間構造性兼具的山海繪畫，確立其獨創一格的現代水墨藝術風貌。展覽將以「造景」與「寫景」兩大脈絡為方向，聚焦李義弘的山水／風景類型的繪畫，觀察並梳理「想像」與「再現」兩種創作思維，如何在他長年的藝術實踐中既平行發展又相互滲透，最終融匯出卓然成家的獨特景觀。', 2, 1, 2),
(2, '光—臺灣文化的啟蒙與自覺 臺灣文化協會一○○年', '1654408257615.jpeg', '1654408257615.jpeg', '2022-05-21 13:43:31', '2022-09-18 13:43:31', '2022-06-05 05:44:33', '1921年10月，黃土水以《甘露水》獲得日本帝國美術展覽會入選，此作以蚌殼中昂然向上的少女，宛如自黑暗中走向世界，堅強舒緩的容姿象徵著臺灣文藝復興時代的將臨；同月17日，臺灣文化協會成立。發起人蔣渭水在發表〈臨床講義：名為臺灣的病人〉一文，診斷臺灣罹患「知識的營養不良症」，須藉由文化運動醫治，而推動文化運動的組織即是臺灣文化協會。\r\n \r\n一次大戰後的大正民主時期，在民族自決思潮與自由民權運動的衝擊下，啟發在東京的臺灣青年，反思殖民地之下的差別待遇並組織集會，而林獻堂則領導臺灣議會設置請願運動，與蔡惠如在東京催生《臺灣青年》雜誌。蔣渭水等人則是在島內成立臺灣文化協會，作為本島民間社會啟迪民智、思想解放、文化藝術啟蒙的重要開端。\r\n \r\n隨著文化運動的深化，各式政治運動蓬勃湧現，臺灣文化協會於1927年分裂後影響生成多個團體，分佔光譜不同位置，共同為臺灣未來努力。另一方面，文協推展的文化運動則受到世界思潮影響，新時代的繪畫、雕刻、小說、新劇、電影紛紛誕生，與運動相輔相成新的藝術概念。藝術家追索藝術與社會之間的關係，以文藝抵抗的路線將文協精神延伸至戰後。\r\n \r\n在迎接臺灣文化協會創立一百週年的2021年，北師美術館將目光著眼於時代脈絡。試圖穿越作品美學風格與藝術家自身歷程，定錨於其成長的年代，探索其時代特質，進而觀看藝術家何以從中迸發力量，得以奮不顧身追求藝術，以此建構臺灣文化面貌。\r\n \r\n由文化部與財團法人福祿文化基金會支持，林曼麗總策劃，邀請周婉窈、劉柳書琴、石婉舜、蔣伯欣、陳慧先、陳允元與吳俊瑩等長期精研歷史、文學、戲劇、藝術、原住民與婦女、法律的學者組成跨領域研究團隊。考察一百年之前的時空背景，從社會運動與發展切入，藉由藝術作品與文獻共構相互補述，呈現1920-40年代文化協會及相關人物所處的社會，映射臺灣文化協會「文化向上」的行動與精神，回訪一百年前臺灣文化的啟蒙與自覺。\r\n \r\n展覽以「生命的恆流」、「風景的創造」、「大眾與摩登」與「自覺的現代性」四個子題出發，由內而外探討創作者如何從自我覺察的迸發進而書寫社會，勾勒個人和社會的交融與抵抗。與此同時於「當代的迴響」單元與阮劇團合作重新演繹當時的文化劇，以及邀請林君昵、黃邦銓導演團隊創作《甘露水》同名紀錄片與影像互動裝置將時代顯影。在多樣化梳理展呈歷史的同時，透過與當代創作者的合製共創達到美術館支持藝術創造的使命。\r\n \r\n此展至高雄展出，除了承續原有的展覽內容，也再提借高美館、國美館、南美館以及李石樵美術館等典藏作品加入展出陣容；此外，高美館亦藉由「大南方多元史觀特展室」南方觀點下的「關鍵典藏」回應此展探索的臺灣文化啟蒙樣貌，並見證文協引領的文化運動在1930-1960年代對南臺灣的影響。\r\n \r\n「光——臺灣文化的啟蒙與自覺」展名以「光」為名，回應一百年前知識份子如何在黑暗的時代中仍懷抱勇氣，感知那幾近不存在的光，並心懷信念向前奔馳。\r\n', 15, 3, 1),
(3, '賦：袁旃個展', '1654408323187.jpeg', '1654408333854.jpeg', '2022-04-23 13:48:14', '2022-07-24 13:48:14', '2022-04-23 05:50:02', '由本館主辦的「賦：袁旃個展」，邀請前法國龐畢度藝術中心資深策展人凱薩琳．大衛（Catherine David）女士擔任研究策展，完整爬梳袁旃自習畫以來60多年的藝術創作生涯，及其各階段創作風格的精采轉折和代表作品。\r\n\r\n袁旃1941年出生於四川重慶，1947年舉家移居臺灣。袁旃的父親袁守謙是隨國民政府來臺的軍政要員之一，同時也是一名書法家及收藏家，他深厚的藝文造詣和文雅風範影響袁旃創作極深。1958年她進入臺灣省立師範大學（今國立臺灣師範大學）藝術系主修中國繪畫，曾受教於溥心畬、黃君璧、金勤伯及林玉山等多位國畫大師，亦與廖繼春、陳慧坤等教授學習西畫技法，之後她遠赴比利時魯汶大學和比利時皇家文物維護學院攻讀碩博士，先後取得美術史、考古以及藝術修復等學位，並曾在大英博物館實習。袁旃返臺後進入國立故宮博物院工作，前後長達20多年，在此期間她浸潤於故宮華夏文物寶庫的環境，將之界定為「奉獻與再學習」時期。袁旃從未間斷書法練字，但直至40多歲，她才提起畫筆專心藝術創作，並於1993年第一次舉辦個展。這些藝術教育和豐富的文史工作經歷，使得袁旃的創作鮮明如她所代表的個人歷史與時代意義，其創作脈絡傳承自家庭及學院、乃至於她精采的文化經歷和學術所滋養出來的藝術視野。\r\n\r\n袁旃的水墨創作從早期在紙本用墨，仿擬中國山水風格，到後來使用重彩於絹本作畫，嶄新開拓新的構圖格局與色彩風格，她的創作一直兼具古典與創新元素，自在遊走於傳統文人畫和超脫時空限制的萬物圖景間，既有細膩而優雅的工筆線條和中國畫用色，亦兼具裝飾派新藝術的幾何構圖和律動感十足的流動線條。本展所展出的作品自袁旃1958年於師大美術系的水墨習作〈五牛圖〉到2021年最新創作〈賦之一〉，這63年間的創作旅程，袁旃一如畫中昂首前行的牛，從古畫的時空中走進當代的風景，從習古到不斷突破自我，為創作賦予新的靈魂生命。\r\n\r\n展題以「賦」為名，賦是中國文學中一種獨特的文體，介於詩與散文之間，側重寫景、借景抒情，講求文采、韻律、節奏，亦著重在細膩的敘事鋪陳，有時講究繁複而華麗的用典與詞藻，可以說「賦」展現其跨越兩種文體的包容性，既有詩的修辭和律動，也有散文不拘泥於形式的自由風格。以「賦」來探索本次展覽豐富的藝術層次，用於詮釋袁旃創作裡不斷可見的詩、書、畫共生與交織之創作方法，她繪畫裡的線條、色彩，圖像，交錯層疊、景象環生，寫實也寫意，既賦形也賦予情懷和無限想像，詩、書、畫互映與呼應，兼具歷史文化的修辭隱喻和生活物景的即興情感。袁旃所賦之視野，是將傳統文化的生養交融在日常萬物的呼吸中，將宏觀的歷史重量釋放在生活的自在與輕快間。', 8, 10, 2),
(4, '【「什麼是『番』－清帝國文獻裡的臺灣原住民族」特展】', 'EX010.jpg', 'EX010_.jpg', '2022-03-19 00:00:00', '2022-06-19 00:00:00', '2022-06-07 14:46:36', '「番」是自詡文明程度最高的中國「中原」傳統，對周邊地區的歧視性稱呼。1683年（康熙22年），清帝國將臺灣「納入版圖」，將其治下的臺灣人分成兩類：「民」（來自中國的墾殖者）、「番」（原來就居住在臺灣的土著）。  國立故宮博物院典藏豐富的清帝國文獻，在各式檔案、古籍、史書中留下不少關於臺灣之「番」的記載與描寫。111年3月19日推出「什麼是『番』－清帝國文獻裡的臺灣原住民族」特展，除了釐清這些文獻中的「番」等詞彙所表示的意義及其意識形態，更要觀察這些清帝國文獻，到底傳達了關於臺灣原住民族的什麼形象與實際。  此次「什麼是『番』－清帝國文獻裡的臺灣原住民族」展覽，除了展出各種檔案、文獻之外，對於這些充滿歷史時代之侷限與偏見的文字，本院也配合展覽，邀集國立政治大學民族學研究所、國立清華大學台灣文學研究所、國立台灣文學館共同號召大家進行逆寫、共筆。讓當代的解讀與詮釋可以與這些歷史文獻進行對話。', 2, 2, 3),
(5, '《掘光而行│洪瑞麟》', '011.jpg', '011_.jpg', '2022-03-19 00:00:00', '2022-08-14 00:00:00', '2022-06-07 14:46:36', '素有「礦工畫家」美譽的洪瑞麟（1912-1996），其作品一直是臺灣美術史上描繪勞動者生活面貌的代表象徵。     幼時曾入日人稻垣藤兵衛創立的稻江義塾接受啟蒙教育，其辦學理念秉承人道人權的精神，故而洪瑞麟甚早即接觸人道主義的薰陶，亦開啟對關懷農民、貧苦大眾的西洋畫家米勒、梵谷之關注。留日期間，接受不同藝術思潮的洗禮，受官展體系之外的新興美術運動，與獨立美術團體的在野精神影響，紮根風土民情、勞動階級的謳歌，呈顯於一系列1930年代以臺北後火車站、日本貧民窟為題的風景畫；著名的山形系列則呈現出洪瑞麟對於「天寒下蕭瑟的勞動者」感動之情懷，雪國之冬，藝術家描繪在冰天雪地中，山形當地農民艱辛維生的情景。     回到臺灣後，為了擔負家計，也感謝倪蔣懷資助後期留日學費，受邀至其經營的瑞芳二坑，30餘年的工作生涯中，留下大量對於礦工的速寫，洪瑞麟以一副筆墨勾勒礦坑中最真實的人性光輝。每日天色未明，礦工進入地底深處，冒著生死一懸的危險換取生活維繫，儘管外頭日頭高照，坑道裡依然黑暗，唯一的光源則是礦工所戴的安全頭燈，一直要等到一日工作結束後，終能走向洞口看見真正的光亮；混雜著汗水與煤屑，藝術家以遒勁的筆觸速寫他的夥伴肢體勞動的美感，呈現「陽光照射不到」的生命尊嚴，建立其獨樹一幟的創作風格。     長年處在不見天日的地底，使洪瑞麟特別嚮往燦爛的陽光。晚年洪瑞麟與長子洪鈞雄定居美國加州海邊小鎮，如願與終年不缺的陽光為伍，離開黝暗地底後的天光雲影，成為藝術家人生最後階段的創作主題。     本次展覽以洪鈞雄於2020年捐贈予本館之家藏作品為核心，其他則來自私人收藏與博物館，當中多數作品已逾35年未出現於臺灣觀眾面前。在洪瑞麟創作中少見之完整描繪礦場情景的大型油畫作品、罕見的留日素描，與重要的家人肖像等創作精華，皆將於此次展覽展出。     策展人：  白雪蘭、方美晶、高子衿', 2, 1, 3),
(6, '【「人．間－陳澄波與畫都」】', '012.jpg', '012_.jpg', '2022-03-19 00:00:00', '2022-06-26 00:00:00', '2022-06-07 14:46:36', '陳澄波先生(1895-1947)除了是嘉義地方，更是臺灣美術史上，重要的藝術家群像之一，「畫都」之名源自1938年《台灣日日新報》以「嘉義乃畫都」為題，報導嘉義藝術家入選首屆「台灣總督府美術展覽會」之人數即占兩成，隨著當時藝術家日後的發展與延續，此一佳話和影響力至今擴散不輟。「人・間—陳澄波與畫都」一展奠基於嘉美館開館後獲陳澄波文化基金會捐贈的一批關鍵作品，以「人‧間」之名，緊扣「畫都」美稱，由台灣美術史學者蔣伯欣擔任學術研究，是開館至今首檔以陳澄波為核心的研究型展覽，藉陳澄波創作及其收藏書畫，彙整共近百件相關之作品與檔案文件等資料，書寫嘉義戰前的藝術史，重探上個世紀嘉義美術的現代性。  本展分三個子題與三組當代藝術家跨領域的合作，子題部分包含「以文會友」、「現代生活的觀察」與「筆畫與形體」。「以文會友」展出張李德和、林玉山、莊伯容、蘇友讓、蘇孝德等多位嘉義文人贈送給陳澄波的書畫作品及相關文獻。  「現代生活的觀察」從陳澄波透過創作所養成的觀察為子題起點，展出1914年目前所保留水彩畫中最早的一件作品《測候所》與《北回歸線立標》，以及在圖畫師範科所授與的水墨、膠彩作品諸如《矢車菊》、《枇杷樹》與《大伴家持‧萬葉集卷》等。  「筆畫與形體」展出陳澄波自入學東京美術學校圖畫師範科以來的裸體素描、上海時期任教時的淡彩裸女、人物速寫，考察其多重文化空間遷移脈絡下「線條」的演變；特別是如何發展動態、輪廓線的運用、與風土空間的結合，除多件裸女油畫和速寫，其中重要的捐贈典藏品《側臥閱讀裸女》亦將首次於此區展出。  此次邀請三位當代跨領域創作者，包含文學家黃崇凱的小說《畫伯大夢》、音樂創作者應奇軒的《變與不變》、蘇威嘉與驫舞劇場將於展覽期間，於館內舉辦「畫筆下的身體」肢體開發工作坊，並邀請表演者參與「風景中的行動與動態寫生」舞蹈風景寫生行動。', 12, 8, 2),
(7, '【一帆風順 高俊宏個展】', '013.jpeg', '013.jpg', '2021-11-06 00:00:00', '2021-11-06 00:00:00', '2022-01-02 14:46:36', '《一帆風順》這件作品計畫，是從兩條通往臺東的路線，所衍伸出來的創作。第一條路線是「浸水營古道」，一條兼具官道與商道的古老道路。第二條路線是海上的運毒之路，每年有為數不少的海洛因與安非他命，在印有「一帆風順」的塑膠包裝之下，遠從泰緬邊境的金三角，經過層層轉運來到了臺東。這兩條路線與我之間，竟有著密切的關係。  小時候的記憶之一，是有關於臺東縣大武鄉的尚武村。祖父母與外祖父母，是過去由西部移民到尚武村的農民，我的父母親因此也順理成章地在這個偏鄉結為連理。然而，由於當地的生存條件不佳，1970年代左右，父母親北上討生活，從此定居於臺北。  我出生在臺北邊緣的某個城鎮，但是生命臍帶仍牽繫於臺東。過去，父母親時常帶我們小孩子回到尚武的老家找阿公阿嬤，有時候也會將我們寄養在老家。也因此，尚武清澈的溪流、巨大的海浪聲響、積沙的漁港、白帶魚、海平面遠方灰柱一般的龍捲風，操著外奇妙口音的大陳義胞、深山的排灣原住民……通通是兒時的記憶。而一直到1960、1970年代仍在使用的浸水營「古道」，是過去家族祖先從屏東移民臺東的路徑。外祖父生前的工作之一，便是趕著一群臺東的牛，順著浸水營古道，千里迢迢去到屏東的水底寮販售。  然而，尚武村還有著更深且暗黑的記憶，包含了被日本人追捕的祖父，名叫高壽，民國五十年十一月三十日在村子深處的一個叫做「西勢湖」的貧脊之地喝農藥自殺，戶籍謄本上還被特別記載「服毒自殺」。多年以後，大伯居然也回到同一個地方上吊去逝。舅舅誤入歧途，長期吸毒，身上千瘡百孔，而這並不是村裡的唯一案例。  之於我，西勢湖乃至於尚武村，是一個嘔吐之地。那樣的感覺就像是在兒時，從臺北搭火車到屏東車站，轉搭當時的金馬號客運回到阿公阿嬤的尚武家時，不知道是因為南迴公路的蜿蜒，或者因為自己的生命與這麼樣一個既美麗又黑暗的地方連結著，都會忍不住在車上嘔吐。  2020年，意外地發現了一則《臺東海邊撿到海洛因》的新聞，某方面已經勾起了重返「故鄉」的想法。新聞中，看到了臺東安朔（尚武以南），那片出產美麗的南田石而著名的海岸，布滿了海洛因磚。繼續追查方才獲知，荒山裡的村民吸食的是名為「雙獅地球牌」的海洛因毒品，來自於泰、緬、寮國邊界的金三角，海洛因的包裝上面還有一排紅色的字，上面寫著「一帆風順」。', 17, 6, 5),
(8, '【照見─陳香伶‧王文德‧林煊哲‧陳俊華 四人展】', '014.jpg', NULL, '2022-04-01 00:00:00', '2022-05-01 00:00:00', '2022-06-09 03:52:31', '展覽「照見」的提出，是對人之在世存有（Being-in-the-World）的感知（perceive），是自體覺悟之道，也是藝術思想於創作的必經過程。人，被投擲於這個既存的世界之中，在他者的目光中成為其所期待的眾人之一。「照」，或謂觀照，是以自體智慧之光，通過眼、耳、鼻、舌、身、意去感知世界，揭蔽外在世界所生之迷茫。因「照」而得「見」，以智慧之光所行的觀照，乃眼、智、明、覺的深度照見，由此方使本真得現。值此之故，「照見」（Perceive Being-in-the-World）展透過藝術顯現出一種主體自覺、一種處境關懷、一種時空穿越、一種生成變化。  陳香伶作為女性，從「女兒」、「妻子」、「媳婦」、「母親」多重身分的變換中，深刻體會以男性為尊的社會中，女性被輕蔑忽視之自我喪失，在此，沒有面目正是性別歧視下女性最真實的面目。透過藝術創作的反思，自我主體從隱晦不明而逐漸確立，這是照見自我的過程，讓自我終得清晰。  王文德以雕塑藝術進行人之現代處境的觀照，現代生活致使人變得支離破碎、扭曲變形、渾噩顛倒。不整全的人所受到的侵蝕，看似來自外在因素所造成，然而追溯其中真正因果卻源自人的內在，此需經過清晰明判的覺察，方能照見處境的真實並提出關懷。  林煊哲畫作平面猶如提供穿越時空的一扇窗，透過這扇窗，適切地將自身抽離既有的世界，距離非但不是阻隔，反而提供真實覺知的可能。凝結的雨珠或水滴，卻提示窗戶玻璃的存在，那是我們既定印象的刻板偏見，橫阻時空穿越的發生，橫阻照見真實的可能。  陳俊華的繪畫作品描寫自然，初步看到的是客觀對象化的自然，寫實的細筆堆疊，雅緻秀逸的山川樹林躍然眼前，細微中，體現一花一世界的境界。然而，此看似景象的外觀，實則包含了大自然猶有目的性的運行，每一物都為著成就另一物而生成存在，構成綿綿密網，環環相扣，連結變化而成就出生命的靈動。  四位藝術家的作品，從其各異的角度對人之在世存有有所覺悟，「照見」展出藝術家意欲探討人之被投擲於既存世界之中，藉由藝術創作得見自我的體悟。', 14, 4, 2),
(9, '【所在—境與物的前衛藝術1980-2021】', '017.jpg', '017_.jpg', '2021-08-14 00:00:00', '2021-10-17 00:00:00', '2022-06-09 04:09:38', '「所在」是物及其存在的地方，「所」是空間、環境、地方、在地或場域，是所處之地，也是存在的地方，「在」則取事物於空間與時間之栖居，本展將由此一座標軸，來呈現臺灣解放空間與媒材之後多元的前衛藝術樣貌。1980年代的臺灣藝術，逐漸從現代繪畫的創作典範，轉移到今日我們熟悉的當代藝術面貌，當時以前衛角度稱之為「第二波現代藝術運動」，現今已產生蓬勃多元的發展。本展將以更具全球性與批判性的參照系統，重新檢視其中的一支前衛運動脈絡。  1980年代以降，旅外、留學藝術家的歸國，三大美術館及各縣市的文化中心的場館成立，解放的前衛藝術掙脫了傳統平面框架與立體台座的空間限制，多元媒材進入了展場，帶入了材質所蘊含的文化、歷史與自然。藝術品不再只是模仿現實空間的幻象，前衛藝術家們將作品從框架與台座解放到真實空間，也就是說，創作不僅存在於框架與台座間，而是存在於現存的現實世界的地方中。材料不僅僅只是內容、形式的媒介，而是與內容、形式的一體。  從林壽宇開始，許多旅外藝術家歸國後參與公私立單位的競賽與展演，如「異度空間」、「超度空間」、「雄獅美術新人獎」及臺北市立美術館陸續舉辦的「新展望」系列大展等，也催化加遽了境與物的前衛藝術的發展。加上如李再鈐、莊普、陳世明、葉竹盛、賴純純、黎志文、盧明德、郭挹芬等歸國藝術家進入教育體系，使得境與物的創作觀念，更為系統化地在教育與展覽系統中發酵，影響了新一代藝術家的創作。而新一代的藝術家在學校與網路的多元媒體訊息下，於複線發展的社會環境下，新世代的意識愈發多元。在網路的虛擬空間下，新生代的藝術家身體成了複合的介面，在境與物的表現上展現了數位時代的小客群狀態，跨越了西方現代主義線性發展的限制，超越了純粹性的路線，他們以身體感受所在，創作屬於自身地方的境與物。  就上述脈絡，本展將1980年代以來境與物的前衛藝術分為：框架解放、「雕塑」的再定義、「繪畫」的多元性、媒介的辯證、空間場域及跨限世代等六個範疇，以呈現此一存在與變化、空間與媒材解放的疆界開闊、新興媒材、新世代境與物前衛藝術等發展，本展也避免將多重複雜的造形思維，限縮在類型化與線性發展的單一門類來考察，而是將境與物的前衛藝術作一系統性與辯證性的呈現，以探討藝術家所置身的多重語境，並考察此一摸索與突破的方向，如何走出跨域實踐的當代路徑。', 19, 6, 2),
(10, '【本草城市新竹】以淺山海作為方法', '018.jpg', '018.jpg', '2021-07-29 00:00:00', '2021-10-24 00:00:00', '2022-06-09 04:57:37', '作為一個新興科技城市， 新竹市位處全球創新知識產業鏈的重要節點上。對比於它淺山淺海的自然地理，新竹沒有深闊港灣、廣大平原或天然屏障作為發展的條件，但是它卻在臺灣近代歷史中佔據著政治經濟的關鍵地位。​ ​ 從十七、八世紀臺灣進入全球海權競爭時代以來，本島的發展重心逐漸由南向北轉移。而二次大戰結束後，科技現代性的劇烈加速度，透過快速道路、橋樑、通訊、人造衛星、海底電纜、金融等基礎設施，建立起整個星球的都市化，讓新竹市可以從它的自然地理條件中脫穎而出，變成科技未來潮的閃亮金星。​ ​ 傳統上，「 城市 」被認為是人類文明的生發空間，建立在「文化與自然」的分界之上，城市新陳代謝所發展出來的基礎結構，道路、水渠、以及食物、垃圾等流通系統和治理程序，自然而然結構成城市的生命體。但是，從工業革命以來，都市化逐漸變成複雜的、蔓延整個地球/行星的網絡，使基礎結構不再是人與自然交往的結果，而變成了這交往的前提，並在這交往中，基礎結構也變成另一個自然。​ ​ 本次展覽將從不同的歷史縱深，以田野調查結合藝術思維，以多元的藝術表現形式，探討這個城市的自然與人文關係的多維度面相，重新審視這塊揉雜閩南、客家、眷村、原住民、移工等多族群的淺山海地方。在快速發展的當代文化中，省思記憶的修補、社會關係的修補，以及人類與土地、與其他物種之關係的修補。​ ​', 5, 12, 13),
(11, '什麼都有商號-澎湖水師的祕密特展', '019.jpg', '019.jpg', '2021-10-09 00:00:00', '2022-06-26 00:00:00', '2022-06-09 04:58:38', '本次特展以複製《什麼都有商號-澎湖水師的祕密》漫畫手稿作品為主，將這部記錄明、清時期澎湖水師官兵的事蹟、碑匾文物、船艦陣法、四大戰役等豐富精采的故事整理為展示主題，分為澎湖水師的開端、澎湖水師的祕密、澎湖水師協的變遷、澎湖的內憂外患、水師與澎湖的記憶等內容，以生動活潑的漫畫導引民眾瞭解這段歷史背景，增進民眾尋訪各階段水師歷程的興趣與意願，具有傳承歷史與文化的重要意義。', 20, 11, 16);

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition_city`
--

CREATE TABLE `exhibition_city` (
  `cid` int NOT NULL COMMENT '主鍵',
  `city` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '城市Name',
  `direction_id` int DEFAULT NULL COMMENT '外來鍵 城市地區分類'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- 傾印資料表的資料 `exhibition_city`
--

INSERT INTO `exhibition_city` (`cid`, `city`, `direction_id`) VALUES
(1, '基隆市', 1),
(2, '台北市', 1),
(3, '新北市', 1),
(4, '桃園縣', 1),
(5, '新竹市', 1),
(6, '新竹縣', 1),
(7, '苗栗縣', 2),
(8, '台中市', 2),
(9, '彰化縣', 2),
(10, '南投縣', 2),
(11, '雲林縣', 2),
(12, '嘉義市', 3),
(13, '嘉義縣', 3),
(14, '台南市', 3),
(15, '高雄市', 3),
(16, '屏東縣', 3),
(17, '台東縣', 4),
(18, '花蓮縣', 4),
(19, '宜蘭縣', 4),
(20, '澎湖縣', 5),
(21, '金門縣', 5),
(22, '連江縣', 5);

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition_direction`
--

CREATE TABLE `exhibition_direction` (
  `did` int NOT NULL COMMENT '主鍵',
  `direction` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '地區分類Name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='城市地區分類';

--
-- 傾印資料表的資料 `exhibition_direction`
--

INSERT INTO `exhibition_direction` (`did`, `direction`) VALUES
(1, '北部'),
(2, '中部'),
(3, '南部'),
(4, '東部'),
(5, '離島');

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition_img`
--

CREATE TABLE `exhibition_img` (
  `id` int NOT NULL COMMENT '主鍵 圖片',
  `name` varchar(255) NOT NULL COMMENT '圖片名稱',
  `actadm_id` int NOT NULL COMMENT '外來鍵 這些圖片屬於這個活動'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='新增屬於這個活動的圖片(一個活動有多個圖片)';

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition_kind`
--

CREATE TABLE `exhibition_kind` (
  `kid` int NOT NULL COMMENT '主鍵',
  `kind` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '活動展覽類型'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='活動類型';

--
-- 傾印資料表的資料 `exhibition_kind`
--

INSERT INTO `exhibition_kind` (`kid`, `kind`) VALUES
(1, '古典美術'),
(2, '現代美術'),
(3, '歷史'),
(4, '科技'),
(5, '體驗'),
(6, '課程'),
(7, '派對'),
(8, '聚會'),
(9, '市集'),
(10, '比賽'),
(11, '表演'),
(12, '研討會'),
(13, '分享會'),
(14, '見面會'),
(15, '宣傳活動'),
(16, '導覽'),
(17, '其他');

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition_museum`
--

CREATE TABLE `exhibition_museum` (
  `mid` int NOT NULL COMMENT 'id',
  `mName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '館方名稱',
  `ddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '地址',
  `latitude` decimal(10,7) NOT NULL COMMENT '經度',
  `longitude` decimal(10,7) NOT NULL COMMENT '緯度'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `exhibition_museum`
--

INSERT INTO `exhibition_museum` (`mid`, `mName`, `ddress`, `latitude`, `longitude`) VALUES
(1, '台北美術館', '台北市中山區中山北路三段181號', '25.0724101', '121.5248308'),
(2, '故宮博物院', '台北市士林區至善路二段221號', '25.1012679', '121.5464578'),
(3, '高雄美術館', '高雄市鼓山區美術館路80號', '22.6572509', '120.2836998'),
(4, '台南美術館 ', '台南市中西區忠義路二段1號', '22.9964163', '120.1957725'),
(5, '奇美博物館', '台南市仁德區文華路二段66號', '22.9345608', '120.2238328'),
(6, '蘭陽博物館', '宜蘭縣頭城鎮青雲路三段750號 ', '24.8687221', '121.8303141'),
(7, '台北當代美術館', '台北市大同區長安西路39號', '25.0507359', '121.5169361'),
(8, '嘉義美術館', '嘉義市西區廣寧街101號', '23.4775747', '120.4457412'),
(9, '北師美術館', '台北市大安區和平東路二段134號', '25.0245610', '121.5423486'),
(10, '台中美術館', '台中市西區五權西路一段2號', '24.1199797', '120.5943593'),
(11, '澎湖開拓館', '澎湖縣馬公市治平路30號', '23.5695765', '119.5673985'),
(12, '新竹市美術館', '新竹市中央路116號', '24.8063434', '120.9700806');

-- --------------------------------------------------------

--
-- 資料表結構 `exhibition_ticket`
--

CREATE TABLE `exhibition_ticket` (
  `tid` int NOT NULL COMMENT '主鍵 票券',
  `name` varchar(255) NOT NULL COMMENT '票券名稱',
  `price` int NOT NULL COMMENT '票券價格',
  `tintro` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '票券介紹',
  `amount` int NOT NULL COMMENT '票券數量'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='新增屬於這個活動的票券';

--
-- 傾印資料表的資料 `exhibition_ticket`
--

INSERT INTO `exhibition_ticket` (`tid`, `name`, `price`, `tintro`, `amount`) VALUES
(1, '兒童票', 50, '十二歲以下', 50),
(2, '青年票', 70, '12歲以上~18歲以下', 50),
(3, '成人票', 200, '18歲以上 65歲以下', 100),
(4, '敬老票', 0, '65歲以上 免費', 500),
(5, '123', 123, '132', 123),
(6, '123', 123, '132', 123),
(7, '兒童票', 50, '活動內容活動內容活動內容活動內容', 50),
(8, '123', 500, '1234567789', 1000);

-- --------------------------------------------------------

--
-- 資料表結構 `product_brand`
--

CREATE TABLE `product_brand` (
  `product_brand_id` int NOT NULL COMMENT 'Primary Key',
  `product_brand_name` varchar(15) DEFAULT NULL COMMENT 'product_brand_name',
  `product_brand_img` varchar(255) DEFAULT NULL COMMENT 'product_brand_img'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='ProductBrand';

--
-- 傾印資料表的資料 `product_brand`
--

INSERT INTO `product_brand` (`product_brand_id`, `product_brand_name`, `product_brand_img`) VALUES
(1, '國立故宮博物院', 'nationalpalace.png'),
(4, '奇美博物館', 'Chimei.png'),
(5, '國立歷史博物館', '史博館_5.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `product_incart`
--

CREATE TABLE `product_incart` (
  `id` int NOT NULL COMMENT 'Primary Key',
  `p_incart_topic` varchar(20) DEFAULT NULL COMMENT 'p_incart_topic',
  `p_incart_img` varchar(255) DEFAULT NULL COMMENT 'p_incart_img',
  `p_incart_price` int DEFAULT NULL COMMENT 'p_incart_price',
  `p_incart_amount` int DEFAULT NULL COMMENT 'p_incart_amount',
  `p_incart_created_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'p_incart_created Time',
  `fk_userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='p_incart';

--
-- 傾印資料表的資料 `product_incart`
--

INSERT INTO `product_incart` (`id`, `p_incart_topic`, `p_incart_img`, `p_incart_price`, `p_incart_amount`, `p_incart_created_time`, `fk_userId`) VALUES
(13, '博山爐', 'FuShanLu_L1.jpg', 10000, 2, '2022-06-14 06:35:59', 1),
(14, '大宗師 琉璃', 'DaZonShi_L1.jpg', 1580, 3, '2022-06-14 06:36:19', 1),
(15, '複製 畫心 宋 郭熙 早春圖', 'KuoSi_L1.jpg', 10390, 1, '2022-06-14 06:36:48', 1),
(16, '坐在岩石上讀書的少女', 'SitOnRock_L2.jpg', 3300, 1, '2022-06-14 06:37:04', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `product_introimages`
--

CREATE TABLE `product_introimages` (
  `pkImgId` int NOT NULL,
  `fkProductId` int NOT NULL,
  `ProductName` varchar(20) NOT NULL,
  `ImgName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `product_introimages`
--

INSERT INTO `product_introimages` (`pkImgId`, `fkProductId`, `ProductName`, `ImgName`) VALUES
(1, 4, '國寶奇種烏龍茶組', 'teaIntroL1.jpg'),
(2, 4, '國寶奇種烏龍茶組', 'teaIntroL2.jpg'),
(3, 4, '國寶奇種烏龍茶組', 'teaIntroL3.jpg'),
(4, 4, '國寶奇種烏龍茶組', 'teaIntroL4.jpg'),
(5, 7, '博山爐', 'FuShanLu_L1.jpg'),
(6, 7, '博山爐', 'FuShanLu_L2.jpg'),
(7, 7, '博山爐', 'FuShanLu_L3.jpg'),
(8, 8, '大宗師 琉璃', 'DaZonShi_L1.jpg'),
(9, 8, '大宗師 琉璃', 'DaZonShi_L2.jpg'),
(10, 8, '大宗師 琉璃', 'DaZonShi_L3.jpg'),
(11, 9, '複製 畫心 宋 郭熙 早春圖', 'KuoSi_L1.jpg'),
(12, 9, '複製 畫心 宋 郭熙 早春圖', 'KuoSi_L2.jpg'),
(13, 9, '複製 畫心 宋 郭熙 早春圖', 'KuoSi_L3.jpg'),
(14, 10, '坐在岩石上讀書的少女', 'SitOnRock_L1.jpg'),
(15, 10, '坐在岩石上讀書的少女', 'SitOnRock_L2.jpg'),
(16, 10, '坐在岩石上讀書的少女', 'SitOnRock_L3.jpg'),
(17, 10, '坐在岩石上讀書的少女', 'SitOnRock_L4.jpg'),
(18, 10, '坐在岩石上讀書的少女', 'SitOnRock_L5.jpg'),
(19, 10, '坐在岩石上讀書的少女', 'SitOnRock_L6.jpg'),
(20, 11, '開箱─國立歷史博物館「中華文物箱」', 'OpenBox_L1.jpg'),
(21, 11, '開箱─國立歷史博物館「中華文物箱」', 'OpenBox_L2.jpg'),
(22, 11, '開箱─國立歷史博物館「中華文物箱」', 'OpenBox_L3.jpg'),
(23, 12, '鴛鴦同心項鍊-自我', 'HeartNecklance_L1.jpg'),
(24, 12, '鴛鴦同心項鍊-自我', 'HeartNecklance_L2.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `product_like`
--

CREATE TABLE `product_like` (
  `fkUserId` int NOT NULL,
  `fkProductId` int NOT NULL,
  `pLikeCreatedTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product_main`
--

CREATE TABLE `product_main` (
  `product_id` int NOT NULL COMMENT 'Primary Key',
  `product_name` varchar(30) DEFAULT NULL COMMENT 'product_name',
  `product_introduce` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'product_introduce',
  `product_category` varchar(10) DEFAULT NULL COMMENT 'product_category',
  `product_category_detail` varchar(15) DEFAULT NULL COMMENT 'product_category_detail',
  `product_brand` varchar(10) DEFAULT NULL COMMENT 'product_brand',
  `product_img` varchar(255) DEFAULT NULL COMMENT 'product_img',
  `product_orign_price` int DEFAULT NULL COMMENT 'product_orign_price',
  `product_price` int DEFAULT NULL COMMENT 'product_price'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='newTable';

--
-- 傾印資料表的資料 `product_main`
--

INSERT INTO `product_main` (`product_id`, `product_name`, `product_introduce`, `product_category`, `product_category_detail`, `product_brand`, `product_img`, `product_orign_price`, `product_price`) VALUES
(4, '國寶奇種烏龍茶組', '              <div class=\"pIntroDetailmain\">\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\n                    【送禮最適的伴手禮盒】\n                  </p>\n                </div>\n                <div class=\"pIntroMaincontentdetailtext\">\n                  國立故宮博物院藏文泥金鉅作《龍藏經》之珍呼應獨一無二奇種製茶法。\n                  <br />\n                  宋元名畫范寬《谿山行旅圖》、倪瓚\n                  《容膝齋圖》之貴，烏龍茶香韻繚繞共鳴，百年嫡傳奇種烏龍，輝映故宮稀世珍寶，敬獻味覺與視覺的藝術饗宴。\n                </div>\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\n                    【奇種烏龍｜包種】\n                  </p>\n                </div>\n                <div class=\"pIntroMaincontentdetailtext\">\n                  元末隱士畫家倪瓚，以畫風蕭疏空曠聞名，為元四家之一。原為富家子弟的倪瓚，因戰亂流離江南，離家後的山水畫，多半寄思鄉之情，《容膝齋圖》筆墨極為淡雅，以一河兩岸構圖，大量留白展現孤寂氣氛，展現清勁而獨特風格。\n                  <br />\n                  有記名茶以百年嫡傳奇種烏龍炭焙法，耐心焠煉出茶中精隨，首創焙製文山包種茶，溫和耐泡，香氣如畫作般典雅悠遠，令人回味再三。\n                </div>\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\n                    【奇種烏龍｜高山】\n                  </p>\n                </div>\n                <div class=\"pIntroMaincontentdetailtext\">\n                  北宋范寬《谿山行旅圖》描繪巍峨高山，視角自山下看山巔，行旅驢隊人物從小丘間趕路，更顯崇山峻嶺之峰巒渾厚，細如弦絲的瀑布直洩而下，彷彿可聽聞溪聲在山谷間蕩。\n                  <br />\n                  有記名茶精選海拔1000公尺以上高山烏龍茶，以傳統奇種烏龍焙火工藝，融入現代口感，烘焙出富層次感的獨特茶韻，輝映國寶《谿山行旅圖》，茶與畫韻味，迴盪不絕!\n                </div>\n              </div>\n              <div class=\"pIntroDetailexintro\">\n                <div class=\"pExintroTopic\">\n                  <h6 class=\"pExintroTopictext ms-2\">典藏說明</h6>\n                </div>\n                <div class=\"pExintrocontent\">\n                  范寬，字仲立，華原（陝西耀縣）人。郭若虛在《圖畫見聞志》卷一「論三家山水」中評論范寬的山水畫說：「峰巒渾厚，勢狀雄強。」范寬為人不拘小節，學畫以大自然為師，然後經過內心的感悟才表達出來。范寬曾為了體悟這些畫境，曾經隱居在華山\n                  隨時留心觀察山林間的各種情景變化，當時人盛讚他：「善與山傳神」。\n                  首先映入眼簾的，是佔據畫面約三分之二，聳立在中央的主峰，右側有深谷瀑布，另一邊是矮小的側峰。近景中央突出兩塊巨大的岩石，背後坡岸道路上一列行旅，點出畫的主題。這幅畫構圖不複雜，局部的描寫卻很仔細，顯示出畫家有高度觀察能力和寫實的功夫。主峰上有密如雨點的墨痕和鋸齒般的岩石皺紋，刻畫出飽經風霜，被風化的岩石。山頂灌木叢生，結成密林，狀若覃菌，前後左右有扈從似的高山簇擁著。瀑布在高山深壑間，成一條線般飛洩而下，隱沒在雲煙飄緲的深淵中。這些描寫的手法都極其生動自然，而且合乎自然的規律。\n                </div>\n              </div>', '品味生活', '茗品茶具', '國立故宮博物院', 'tea_L2.jpg', 1500, 1000),
(7, '博山爐', '                 <div class=\"pIntroDetailmain\">\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\n                    【適合收藏、餽贈之禮品】\n                  </p>\n                </div>\n                <div class=\"pIntroMaincontentdetailtext\">\n                  本商品創意來自於國立故宮博物院院藏品「漢博山爐」。\n                  <br />\n                  青銅器器形成豆形，蓋是鏤空的山巒，器身飾纏繞的雲氣紋，承柱高而直，底座亦飾山巒，為無承盤的豆型博山爐。\n                </div>\n              </div>\n              <div class=\"pIntroDetailexintro\">\n                <div class=\"pExintroTopic\">\n                  <h6 class=\"pExintroTopictext ms-2\">典藏說明</h6>\n                </div>\n                <div class=\"pExintrocontent\">\n                  文物年代：漢 <br />\n                  西元紀年：西元前206─西元220 <br />\n                  文物描述： 爐，博山蓋，子母口、圓腹，下接握把及圈足。腹部有凸弦紋，圈足處有交龍紋。\n                </div>', '經典藝術', '陶瓷.青銅器', '國立故宮博物院', 'FuShanLu_L1.jpg', 16000, 10000),
(8, '大宗師 琉璃', '<div class=\"pIntroDetailmain\">\r\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\r\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\r\n                    【水晶玻璃之擺飾品】\r\n                  </p>\r\n                </div>\r\n                <div class=\"pIntroMaincontentdetailtext\">\r\n                  以「清 翠玉白菜」為原型，保留菜片的寫實度和傾斜姿態。<br/>\r\n                  將菜葉上的螽斯放大，添以逗趣的神情，有如正在向世界宣示自己的茁壯，創造翠玉白菜不同以往的形象。\r\n                </div>\r\n              </div>\r\n              <div class=\"pIntroDetailexintro\">\r\n                <div class=\"pExintroTopic\">\r\n                  <h6 class=\"pExintroTopictext ms-2\">典藏說明</h6>\r\n                </div>\r\n                <div class=\"pExintrocontent\">\r\n                  文物朝代：清 (A.D.1644-1912)<br />\r\n                  文物形式：玉石器<br />\r\n                  本作品是以半綠、半白的翠玉為材，運用巧雕手法，琢碾成一株葉綠梗白、葉上還停著兩隻昆蟲的白菜。其原本為陳設在永和宮內之「寶石盆景」的一部分。清末光緒皇帝的瑾妃曾住過此處，故有推測，翠玉白菜可能是其嫁妝。青葉白梗的白菜寓意清白；象徵人品純潔，葉尖昆蟲寓意多產；祝福子孫綿延。自然色澤、人為形制、象徵意念，三者和諧而圓滿，遂成眾人最深刻且共有的美感經驗。 \r\n                </div>', '經典藝術', '琉璃', '國立故宮博物院', 'DaZonShi_L1.jpg', 1680, 1580),
(9, '複製 畫心 宋 郭熙 早春圖', '<div class=\"pIntroDetailmain\">\r\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\r\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\r\n                    【數位微噴技術 - 99.9%比擬真跡】\r\n                  </p>\r\n                </div>\r\n                <div class=\"pIntroMaincontentdetailtext\">\r\n                  經由高解析影像處理及專業色彩管理，搭配高級絹布列印及奈米科技墨水原廠保證。 <br/>\r\n                  通過耐候考驗：耐潮濕、耐溫差，抗光害。\r\n                </div>\r\n              </div>\r\n              <div class=\"pIntroDetailexintro\">\r\n                <div class=\"pExintroTopic\">\r\n                  <h6 class=\"pExintroTopictext ms-2\">典藏說明</h6>\r\n                </div>\r\n                <div class=\"pExintrocontent\">\r\n                  郭熙（活動於十一世紀），河南溫縣人。神宗熙寧年間(西元1068 – 1077年），為翰林圖畫院藝學，善畫山水。著有《林泉高致》一書，是我國畫史上討論山水畫的一部重要論著。這幅畫的主要景物集中在中軸線上，近景有大石和巨松，背後銜接中景扭動的山石，隔著雲霧，兩座山峰在遠景突起，居中矗立，下臨深淵，深山中有宏偉的殿堂樓閣。左側平坡委迤，令人覺得既深且遠。作者以粗闊扭曲的線條，描繪山石輪廓，再用乾溼濃淡不同的墨色，層層皴擦出岩石表面的紋理，因為形狀像捲曲的雲塊，所以稱為「捲雲皴」。樹木枝幹虯曲，枝椏像伸指布掌的樣子，稱為「蟹爪枝」，是承襲自宋初李成一系的特色。畫幅左側畫家自題：「早春。壬子（西元1072年）年郭熙畫。」顧名思義，這幅畫作是在描寫瑞雪消融，雲煙變幻，大地復甦，草木發枝，一片欣欣向榮的早春景象。\r\n                </div>\r\n              </div>', ' 經典藝術', '山水花鳥人物畫', '國立故宮博物院', 'KuoSi_L1.jpg', 11390, 10390),
(10, '坐在岩石上讀書的少女', ' <div class=\"pIntroDetailmain\">\r\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\r\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\r\n                    【小型石雕】\r\n                  </p>\r\n                </div>\r\n                <div class=\"pIntroMaincontentdetailtext\">\r\n                  坐在岩石上讀書的少女 A Young Girl Reading on a Rock <br />\r\n                  奧古斯特‧摩荷 (法國, 1834-1917)  Auguste L. M. MOREAU (French, 1834-1917)，親筆簽名\r\n                </div>\r\n              </div>\r\n              <div class=\"pIntroDetailexintro\">\r\n                <div class=\"pExintroTopic\">\r\n                  <h6 class=\"pExintroTopictext ms-2\">典藏說明</h6>\r\n                </div>\r\n                <div class=\"pExintrocontent\">\r\n                  奧古斯特於1834年生於法國大城Dijon，他是尚‧巴普堤斯特‧摩荷這位著名的畫家兼雕塑家的小兒子，他和他的兩位哥哥(大哥馬修漢，二哥伊波里特)都在雕塑創作界有相當的成就。 <br/>\r\n\r\n                  奧古斯特於1861年開始在巴黎沙龍展嶄露頭角，直到1913年他一直是沙龍展的活躍份子。長期以來他取材多以體態曼妙的年輕農家女孩，或是小天使、女神等寓意性濃厚的作品為主，偶爾他會創作小天使惡作劇的有趣場面。他的作品受到新藝術Art Nouveau的影響，洋溢著一股甜美、優雅、純真的氛圍，十分的討喜。<br/>\r\n\r\n                  他的雕作技巧是跟隨大哥馬修漢而學來的。他一些特別受歡迎的作品都被翻製成銅雕，並在各種展覽中以不同的名稱展出。“Jeune Feseme à l’oiseau”、“Pandola”\r\n                  “Le Char de l’Amour”、”Eros Enfant”等都算得上是他主要的創作，他的作品風格與其家族的其他成員都頗為相近，有時並不易於區別。 <br/>\r\n\r\n                  作品中的這對小姐弟，姐姐將書擺在膝頭上，弟弟則柔順地依靠在姐姐身旁，姐姐耐心教導小男孩認識字母，小男孩一手指著書，另一手則輕觸著嘴角，一副似懂非懂的模樣，極為可愛。孩子們的童心也在作者洗練的雕技發揮下，自然地展現出來。此作品裝飾性強，風格也十分甜美，在當時深為中產階級所鍾愛。 <br/>\r\n                </div>\r\n              </div>', '經典藝術', '雕塑', '奇美博物館', 'SitOnRock_L2.jpg', 3600, 3300),
(11, '開箱─國立歷史博物館「中華文物箱」檔案彙編', ' <div class=\"pIntroDetailmain\">\r\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\r\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\r\n                    【一九六九─一九八六 Unpacking Culture】\r\n                  </p>\r\n                </div>\r\n                <div class=\"pIntroMaincontentdetailtext\">\r\n                  2021 年 11 月出刊\r\n                </div>\r\n              </div>\r\n              <div class=\"pIntroDetailexintro\">\r\n                <div class=\"pExintroTopic\">\r\n                  <h6 class=\"pExintroTopictext ms-2\">典藏說明</h6>\r\n                </div>\r\n                <div class=\"pExintrocontent\">\r\n                  《開箱》：有鑒於1970至80年代「中華文物箱」為加強我國文化在海外之弘揚與介紹中華民國進步繁榮之實況，曾為我文化外交貢獻良多，係我國文化記憶中重要之一環，透過相關單位如行政院、教育部、外交部、僑務委員會、國史館等，其所保存部分當年執行本案的相關檔案與文獻進行研析整理，編纂成書，除為達到史料保存的目的外，並可作為臺灣文化外交成果的具體證明，以及研究我國外交發展史之重要參考，發揮文化資料收、存、取、用之博物館職能。\r\n                </div>\r\n              </div>', '經典藝術', '書籍', '國立歷史博物館', 'OpenBox_L1.jpg', 500, 330),
(12, '鴛鴦同心項鍊-自我', '<div class=\"pIntroDetailmain\">\r\n                <div class=\"pIntroMaincontenttopic d-inline-flex\">\r\n                  <p class=\"pbig Regular pIntroMaincontenttopictext ms-2\">\r\n                    【相伴不相絆】\r\n                  </p>\r\n                </div>\r\n                <div class=\"pIntroMaincontentdetailtext\">\r\n                  將故宮院藏畫中鴛鴦相互依靠形成一顆心型的巧妙構圖與代表幸福的杏花，以現代設計及精密工藝化做為戀人帶來幸福與承諾的飾品，可與戀人共享，也可獨立配戴。<br/>\r\n                  分開是具有個性的圖騰，合在一起則是呈現出甜蜜依戀的愛心形狀，象徵對愛情圓滿的祝福及圓滿愛情的祈願。<br/>\r\n                  兩條項鍊不同顏色，代表在戀情中仍保有自我風格。\r\n              </div>\r\n              <div class=\"pIntroDetailexintro\">\r\n                <div class=\"pExintroTopic\">\r\n                  <h6 class=\"pExintroTopictext ms-2\">典藏說明</h6>\r\n                </div>\r\n                <div class=\"pExintrocontent\">\r\n                  故-畫-000600-00000 明吳彬文杏雙禽圖　軸 此軸畫杏樹老枝粗幹橫出，一對鴛鴦相互依偎並立枝上。樹幹空蝕卻有繁茂花朵，老枝懸空、細枝上挑，樹梢皆突如折枝，布局畫意均奇特。吳彬就於一上挑細枝的折斷處題款鈐印，顯示他對物象造型、構圖布置的十足創意。\r\n                </div>\r\n              </div>', '珍藏瑰寶', '項鍊.耳環', '國立故宮博物院', 'HeartNecklance_L1.jpg', 2388, 2188),
(13, '鵲鳥 琉璃項鍊', NULL, '珍藏瑰寶', '項鍊.耳環', '國立故宮博物院', '鵲鳥琉璃項鍊_L1.jpg', 380, 330),
(14, 'Amati Heart 銀飾項鍊', NULL, ' 珍藏瑰寶', '項鍊.耳環', '奇美博物館', 'Amati_Heart_L1.jpg', 2680, 2580),
(15, '津津樂道美姿耳環(玫瑰金色)', NULL, '珍藏瑰寶', '項鍊.耳環', '國立歷史博物館', '津津樂道美姿耳環(玫瑰金色).jpg', 2980, 2730),
(16, '手絹-生命之樹', NULL, '珍藏瑰寶', '絲巾.領巾', '國立故宮博物院', '手絹-生命之樹_L1.jpg', 250, 200),
(17, '溥心畬蘭花絲巾(白)', NULL, '珍藏瑰寶', '絲巾.領巾', '國立歷史博物館', '溥心畬蘭花絲巾(白)_L1.jpg', 780, 710),
(18, '髯君彩雨  仙氣飄飄恆溫絲巾', NULL, '珍藏瑰寶', '絲巾.領巾', '國立歷史博物館', '髯君彩雨 _仙氣飄飄恆溫絲巾_L1.jpg', 1280, 1150),
(19, '如意戒指 黃金鍍膜', NULL, '珍藏瑰寶', '手環.手鍊', '國立故宮博物院', '故宮如意戒指_黃金鍍膜_L1.jpg', 1180, 980),
(20, '萬壽無疆手環', NULL, '珍藏瑰寶', '手環.手鍊', '國立故宮博物院', '故宮萬壽無疆手環_L1.jpg', 1380, 1200),
(21, '琺瑯珍寶手鍊', NULL, '珍藏瑰寶', '手環.手鍊', '國立故宮博物院', '琺瑯故宮珍寶手鍊_L1.jpg', 590, 490),
(22, '天后安瀾圖紋 帆布袋', NULL, '珍藏瑰寶', '包款', '國立故宮博物院', '天后安瀾圖紋_帆布袋_L1.jpg', 490, 490),
(23, '沈振麟紅梅貍奴小書包', NULL, '珍藏瑰寶', '包款', '國立故宮博物院', '沈振麟紅梅貍奴小書包_L1.jpg', 960, 960),
(24, 'V＆A  托特包', NULL, '珍藏瑰寶', '包款', '奇美博物館', 'V＆A托特包_L1.jpg', 580, 580),
(25, '出水芙蓉 真絲團扇', NULL, '珍藏瑰寶', '扇子.傘', '國立故宮博物院', '真絲團扇_L1.jpg', 690, 690),
(26, '翠玉白菜 晴雨直傘', NULL, '珍藏瑰寶', '扇子.傘', '國立故宮博物院', '晴雨直傘_L1.jpg', 980, 980),
(27, 'Q版古典扇-黃花', NULL, '珍藏瑰寶', '扇子.傘', '國立故宮博物院', 'Q版古典扇_黃花_L1.jpg', 150, 120);

-- --------------------------------------------------------

--
-- 資料表結構 `product_samesearch`
--

CREATE TABLE `product_samesearch` (
  `fkUserId` int NOT NULL,
  `fkProductId` int NOT NULL,
  `fkProductName` varchar(30) NOT NULL,
  `SearchCreatedTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE `users` (
  `userId` int NOT NULL,
  `userAccount` varchar(255) NOT NULL,
  `userPassword` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userMobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userNickName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userAvatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'user.png',
  `userBirthday` date DEFAULT NULL,
  `userGender` int DEFAULT NULL,
  `userCreatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `users`
--

INSERT INTO `users` (`userId`, `userAccount`, `userPassword`, `userEmail`, `userName`, `userMobile`, `userAddress`, `userNickName`, `userAvatar`, `userBirthday`, `userGender`, `userCreatedAt`) VALUES
(1, 'joseph', '!Joseph0326', 'artilize.official@gmail.com', 'Joseph', '0912345679', '高雄市前金區中正四路700號', 'Joseph123', '1655187202131.jpg', '1997-03-26', 1, '2022-06-03 14:27:17'),
(2, 'alice0109', 'AAAaaa111+++', 'alice@gamil.com', '王小雅', '0926558128', '台北市內湖區江南街98號', '雅雅', 'user13.png', '1999-01-09', 2, '2022-06-03 17:47:50'),
(3, 'linlin5400', 'ber11125A-', 'bernice_lin@gamil.com', '林宣', '0919057098', '台北市南港區興東街7號', '小兔', 'user12.png', '1997-04-05', 3, '2022-06-03 17:48:34'),
(4, 'a860505', 'qwertQQ!123456', 'a_860505@hotmail.com', '蕭宏玉', '0912856147', '', '宏', 'user11.png', '2009-05-05', 0, '2022-03-21 09:31:42'),
(5, 'maxine0509', '~A123JEIFJIOALzzz', 'maxine_0509@gmail.com', '黃子蕊', '0919007893', '宜蘭縣大同鄉南山村泰雅路七段220號', 'SHIN', 'user10.png', '1996-06-27', 1, '2022-03-18 17:29:50'),
(6, 'jason1230301', 'OALsss01~', 'jasonwww@yahoo.com.tw', '黃傑森', '', '', 'Jason', 'user9.png', '1992-07-18', 0, '2022-03-18 16:06:10'),
(7, 'spidermen959', 'ski765A+', 'spidermen959@gmail.com', '', '0956343676', '桃園市楊梅區梅山西街10號', '蜘蛛人', 'user8.png', '2022-03-17', 2, '2022-03-18 16:04:28'),
(8, 'littlejoe33', 'Pass_2233', 'joe_33@gmail.com', '黃兆元', '0932855763', '台北市信義區永吉路30巷123號', 'littleJoe', 'user1.png', NULL, NULL, '2022-06-07 15:22:26'),
(9, 'toyzzz22', 'Abc123+', 'toyzzz22@gmail.com', '李俊傑', '0932283859', NULL, 'ballz', 'user2.png', NULL, NULL, '2022-06-07 15:22:26'),
(10, 'FRFR5588', 'bbC_58', 'fr_5588@gmail.com', '', '', NULL, '玖仈', 'user3.png', NULL, NULL, '2022-06-07 15:22:26'),
(11, 'toyzzz88', 'bbC_5777', '22@gmail.com', '黃怡', '0975997685', '台東縣台東市建興里知本路四段2號', '粉蠟像', 'user4.png', '2022-03-25', 0, '2022-03-14 10:32:23'),
(12, 'jennywang1999', 'Je3+nny3aoa', 'jennywang1999@yahoo.com.tw', '王甄妮', '0956789755', '南投縣草屯鎮太平路一段221號', 'AOA', 'user5.png', '1969-12-31', 1, '2022-03-14 14:02:30'),
(13, 'wwcatieww', 'kldfv5+A', 'catiewww@hotmail.com', '', '', '', '半吊子文青', 'user6.png', '2022-03-02', 0, '2022-03-14 16:18:57'),
(14, 'carollee38', 'Vvca+5', 'carollee38@gmail.com', '李淑娟', '0932085856', '', '紅蘿蔔不喜歡兔子', 'user7.png', '2022-03-17', 1, '2022-03-14 16:33:56'),
(15, 'J123456', '!Joseph0326', '456@gmail.com', '123', '0917845678', '', '', '1654759498189.jpg', '1970-01-01', 2, '2022-06-09 15:21:42'),
(16, 'joseph968', '!Joseph0326', 'joseph968@gmail.com', NULL, NULL, NULL, NULL, 'user.png', NULL, NULL, '2022-06-09 15:37:27'),
(17, 'joseph963', '!Joseph0326', 'joseph963@gmail.com', NULL, NULL, NULL, NULL, 'user.png', NULL, NULL, '2022-06-09 15:38:12'),
(18, 'museum', '!Museum123', 'museum@museum.com', '蘭陽博物館', '0963547532', '宜蘭縣頭城鎮青雲路三段750號', '蘭陽館', '1655213453803.jpg', '2010-10-16', 3, '2022-06-14 21:25:37'),
(10072268, 'Google_pkujm951', 'zeir936fqklQQFKGKYE9SH', 'pkujm951@gmail.com', '', '', '', '', '1654852917598.jpg', '2022-03-15', NULL, '2022-06-10 11:05:23'),
(51227288, 'Fb_joseph0326jp', 'gh6ijttikm939KSC9COLS', 'joseph0326jp@gmail.com', NULL, NULL, NULL, NULL, 'user.png', NULL, NULL, '2022-06-13 09:14:12');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `blog_article`
--
ALTER TABLE `blog_article`
  ADD PRIMARY KEY (`article_id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `blog_article_ibfk_2` (`category`);

--
-- 資料表索引 `blog_article_like`
--
ALTER TABLE `blog_article_like`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `article_id` (`article_id`);

--
-- 資料表索引 `blog_category`
--
ALTER TABLE `blog_category`
  ADD PRIMARY KEY (`sn`);

--
-- 資料表索引 `blog_comment`
--
ALTER TABLE `blog_comment`
  ADD PRIMARY KEY (`blog_comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `article_id` (`article_id`);

--
-- 資料表索引 `blog_comment_like`
--
ALTER TABLE `blog_comment_like`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `article_id` (`article_id`);

--
-- 資料表索引 `blog_images`
--
ALTER TABLE `blog_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_id` (`article_id`);

--
-- 資料表索引 `cart_coupon`
--
ALTER TABLE `cart_coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- 資料表索引 `cart_exhibition`
--
ALTER TABLE `cart_exhibition`
  ADD PRIMARY KEY (`cartExID`);

--
-- 資料表索引 `exhibitionticket`
--
ALTER TABLE `exhibitionticket`
  ADD KEY `actadm and  ticket` (`fkActId`),
  ADD KEY `ticket and actadm` (`fkTicketId`);

--
-- 資料表索引 `exhibition_actadm`
--
ALTER TABLE `exhibition_actadm`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city_id` (`fkCityId`),
  ADD KEY `kind_id` (`fkKindId`),
  ADD KEY `museum have exhibitions` (`fkMuseumId`);

--
-- 資料表索引 `exhibition_city`
--
ALTER TABLE `exhibition_city`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `direction_id` (`direction_id`);

--
-- 資料表索引 `exhibition_direction`
--
ALTER TABLE `exhibition_direction`
  ADD PRIMARY KEY (`did`);

--
-- 資料表索引 `exhibition_img`
--
ALTER TABLE `exhibition_img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `actadm_id` (`actadm_id`);

--
-- 資料表索引 `exhibition_kind`
--
ALTER TABLE `exhibition_kind`
  ADD PRIMARY KEY (`kid`);

--
-- 資料表索引 `exhibition_museum`
--
ALTER TABLE `exhibition_museum`
  ADD PRIMARY KEY (`mid`);

--
-- 資料表索引 `exhibition_ticket`
--
ALTER TABLE `exhibition_ticket`
  ADD PRIMARY KEY (`tid`);

--
-- 資料表索引 `product_brand`
--
ALTER TABLE `product_brand`
  ADD PRIMARY KEY (`product_brand_id`);

--
-- 資料表索引 `product_incart`
--
ALTER TABLE `product_incart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_userId` (`fk_userId`);

--
-- 資料表索引 `product_introimages`
--
ALTER TABLE `product_introimages`
  ADD PRIMARY KEY (`pkImgId`),
  ADD KEY `fkProductId` (`fkProductId`);

--
-- 資料表索引 `product_like`
--
ALTER TABLE `product_like`
  ADD KEY `fkUserId` (`fkUserId`),
  ADD KEY `fkProductId` (`fkProductId`);

--
-- 資料表索引 `product_main`
--
ALTER TABLE `product_main`
  ADD PRIMARY KEY (`product_id`);

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userAccount` (`userAccount`),
  ADD UNIQUE KEY `userEmail` (`userEmail`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog_article`
--
ALTER TABLE `blog_article`
  MODIFY `article_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog_article_like`
--
ALTER TABLE `blog_article_like`
  MODIFY `like_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog_category`
--
ALTER TABLE `blog_category`
  MODIFY `sn` int NOT NULL AUTO_INCREMENT COMMENT '系統分類編號', AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `blog_comment_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog_images`
--
ALTER TABLE `blog_images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart_coupon`
--
ALTER TABLE `cart_coupon`
  MODIFY `coupon_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart_exhibition`
--
ALTER TABLE `cart_exhibition`
  MODIFY `cartExID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition_actadm`
--
ALTER TABLE `exhibition_actadm`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT '主鍵', AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition_city`
--
ALTER TABLE `exhibition_city`
  MODIFY `cid` int NOT NULL AUTO_INCREMENT COMMENT '主鍵', AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition_direction`
--
ALTER TABLE `exhibition_direction`
  MODIFY `did` int NOT NULL AUTO_INCREMENT COMMENT '主鍵', AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition_img`
--
ALTER TABLE `exhibition_img`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT '主鍵 圖片';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition_kind`
--
ALTER TABLE `exhibition_kind`
  MODIFY `kid` int NOT NULL AUTO_INCREMENT COMMENT '主鍵', AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition_museum`
--
ALTER TABLE `exhibition_museum`
  MODIFY `mid` int NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `exhibition_ticket`
--
ALTER TABLE `exhibition_ticket`
  MODIFY `tid` int NOT NULL AUTO_INCREMENT COMMENT '主鍵 票券', AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_brand`
--
ALTER TABLE `product_brand`
  MODIFY `product_brand_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_incart`
--
ALTER TABLE `product_incart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_introimages`
--
ALTER TABLE `product_introimages`
  MODIFY `pkImgId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_main`
--
ALTER TABLE `product_main`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=28;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users`
--
ALTER TABLE `users`
  MODIFY `userId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51227292;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `exhibitionticket`
--
ALTER TABLE `exhibitionticket`
  ADD CONSTRAINT `actadm and  ticket` FOREIGN KEY (`fkActId`) REFERENCES `exhibition_actadm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket and actadm` FOREIGN KEY (`fkTicketId`) REFERENCES `exhibition_ticket` (`tid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `exhibition_actadm`
--
ALTER TABLE `exhibition_actadm`
  ADD CONSTRAINT `city have exhibitions` FOREIGN KEY (`fkCityId`) REFERENCES `exhibition_city` (`cid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `kind have exhibitions` FOREIGN KEY (`fkKindId`) REFERENCES `exhibition_kind` (`kid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `museum have exhibitions` FOREIGN KEY (`fkMuseumId`) REFERENCES `exhibition_museum` (`mid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `exhibition_city`
--
ALTER TABLE `exhibition_city`
  ADD CONSTRAINT `exhibition_city_ibfk_1` FOREIGN KEY (`direction_id`) REFERENCES `exhibition_direction` (`did`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `exhibition_img`
--
ALTER TABLE `exhibition_img`
  ADD CONSTRAINT `exhibition_img_ibfk_1` FOREIGN KEY (`actadm_id`) REFERENCES `exhibition_actadm` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `product_incart`
--
ALTER TABLE `product_incart`
  ADD CONSTRAINT `product_incart_ibfk_1` FOREIGN KEY (`fk_userId`) REFERENCES `users` (`userId`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `product_introimages`
--
ALTER TABLE `product_introimages`
  ADD CONSTRAINT `product_introimages_ibfk_1` FOREIGN KEY (`fkProductId`) REFERENCES `product_main` (`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `product_like`
--
ALTER TABLE `product_like`
  ADD CONSTRAINT `product_like_ibfk_1` FOREIGN KEY (`fkUserId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_like_ibfk_2` FOREIGN KEY (`fkProductId`) REFERENCES `product_main` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
