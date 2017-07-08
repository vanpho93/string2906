const aStr = `<item>
<title>
Bé hút 40 điếu thuốc mỗi ngày sau hai năm cai nghiện giờ ra sao
</title>
<description>
<![CDATA[
<a href="http://vnexpress.net/tin-tuc/cong-dong/be-hut-40-dieu-thuoc-moi-ngay-sau-hai-nam-cai-nghien-gio-ra-sao-3610671.html"><img width=130 height=100 src="http://img.f32.vnecdn.net/2017/07/08/20170707043846huthuco-2ojbn3f4-1652-4468-1499504465_180x108.jpg" ></a></br>Không còn nghiện thuốc lá nhưng bé trai Indonesia  liên tục đòi cha mẹ cho uống sữa đặc, ăn gà rán... mọi lúc, mọi nơi
]]>`;

function getBody(str, pre, post) {
    const startIndex = str.indexOf(pre) + pre.length;
    const endIndex = str.indexOf(post);
    return str.substring(startIndex, endIndex).trim();
}

console.log(getBody(aStr, '<title>', '</title>'));