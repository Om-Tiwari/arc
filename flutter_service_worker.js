'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f933979b5bbf67478c8f84a2389e7420",
"index.html": "9bc44629acd54c72ff4cea0bd94dae4c",
"/": "9bc44629acd54c72ff4cea0bd94dae4c",
"main.dart.js": "81b491ea94393aeb08cf48929f5e7055",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"push.sh": "72bdfccb65f153a8fdb1952049a575e1",
"favicon.png": "bd5056a1cfed736dbebf2544bb0a6004",
"icons/Icon-192.png": "38266b503dd9fcc40cc141a1836d6c65",
"icons/Icon-maskable-192.png": "38266b503dd9fcc40cc141a1836d6c65",
"icons/Icon-maskable-512.png": "bd5056a1cfed736dbebf2544bb0a6004",
"icons/Icon-512.png": "bd5056a1cfed736dbebf2544bb0a6004",
"manifest.json": "0fa0179263f01a3cfde70cf667a6e643",
".git/config": "418b669d81e20508418cff2e9bfa57ab",
".git/objects/0d/e9dfbbaac216d7dcf4409f19d0f29ebf3cd72e": "d3d895c04de9deb303e9ef8502de0a2c",
".git/objects/0d/0bcb7773cff719a44b48e1edb7b78d2e8e070a": "8d5dc9875713b01061c09a4188bdf8a6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/a640ce8635278b2ce6bd6d93f040983c9923b4": "67176f728eda65bf5c4200d8b0bc2d15",
".git/objects/59/bfb1f1d95fe698fc6c40be95748a455a6fd6ef": "a9fd94ab97c7dccd38c29bf14e2582c2",
".git/objects/59/61449fd7e148b99d2da0a5c1afe035799f50db": "07420c703d6652841d1d7e92955ac469",
".git/objects/92/273379743254f9ed2438b98ea6a8ac511e99fd": "af52f5d5da940d7cd65db0d5e2ea04c2",
".git/objects/92/c8d834d5b03d735defe51f0dfad7f3b7ab5924": "74dbc6cb02628202b0de52e0b242fb32",
".git/objects/92/ba63aaec663365374eb086dfc3439be9485a4f": "848de855107271ebec52a02219d56ace",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/50/c7e4b7118c74a1475ae434dbeb6b67c8fcc480": "22346a7fdbd3194e160693fa2bff3ca8",
".git/objects/68/0190f41b359de358c94467bdbb9d5e0f0ac30a": "8e834c3b1c0ace4cc8ff9340f462d664",
".git/objects/6f/82081bcb2d273b1d3e47bea41541bab9d0910c": "1497531285e377b71f2d444805c9199c",
".git/objects/6f/4b0d52c4f3899864c233fe3ddb3de84b4a3c5c": "cfc524a06196c0088c7b575f2d1da46b",
".git/objects/03/a6ed1e07d85ee1a6ce3c0a2930fe80cd6898b5": "58832341debf5c41901d9a020267f607",
".git/objects/03/9068ed2569babec0513c9e5f6cf22a7c1fcb97": "01860f3b0511b582892d9702f7d6f7cb",
".git/objects/03/02531d0d74c4ef29c60ad16eda6395ce84eca2": "6fb855caa3aac89380a51c6cb3932e7b",
".git/objects/04/a5bfdf7b8d51612d4bcc2dff5a78e0f7e04f9b": "2a5424b6a8491dd24408e8b7267b400e",
".git/objects/6a/65589e91336f1b0da450b646eacd32eff0f687": "e762901bfb3f4f428a36424154c46415",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/b9c98f2d1a0c467c3b7262beac99d47001d740": "a8af5d90b7720579381f1bd58fc0b745",
".git/objects/3c/c86c7aebc862fbd178e1f9967b956a1e02f064": "793a866ec2b805199708e620712fd1d7",
".git/objects/3c/a50799feb6fa3a89f922ec6536235ab272423b": "20af69ba5c833715ec07b865cf1ab981",
".git/objects/3d/fcdfe7bdf2b2617fa4eb118c44d64062cf1885": "eaf7a85afb92588f1b00aa79b96a062c",
".git/objects/3d/54952723297a9845a731f364f0e4fc0e41fc1f": "bb0c190574f24e3a982679b39b3bdc4b",
".git/objects/58/c866acb323722985051f8695dd4d271474439a": "6f75289ae30af0a3e711e78e63352b65",
".git/objects/67/fc2144e07ff5b23b639f975d40f73899e679d6": "ac420dcdd17d6066f9be25c75b3720ee",
".git/objects/0b/f7a2692373c9e85cb3eac382a4926f9601db5e": "d58452a04032916818da8607a9974eb2",
".git/objects/0b/e8631f64350766f1d15e8394b887d4f8bbc667": "df5b1aecd0ccbc55cde1ebc52b76a647",
".git/objects/0b/2952cc9265aeef5991eebf4a34bdafe2e57b0a": "9b61589c8ac0682fd8f5afbc6ed75219",
".git/objects/93/ac54c7d753b437c50c453f1cea6dba430d14a7": "9722f36d793b3502d79c81d915352067",
".git/objects/0e/c5e1cec87b6e7c8fa30471e8521e8920831c0d": "aadab8240e6aaab51895e9d167c5c66d",
".git/objects/60/cb02b4b4bd5b2398cf9a09899826aa525f436e": "3eb8d859d44eeb1fcdd8b3ccb09f8adb",
".git/objects/60/9764187a60af11f1ff820f30a61a791f4839c6": "9df2f5e6990b7550b16d698ea2c84657",
".git/objects/5a/320e7b1e4d0a7a5225b51c49ad501ff67d8f94": "0ab8dabe4d6fffda1bc1ac642018ac43",
".git/objects/33/346526d55e867c183f36cbebac5bb65fbd6288": "4aa5b1a7a8df529e61af1d8c3e98d135",
".git/objects/9d/1fc41575c7ea1b019fb178e76894cae9e995d0": "4e04e3f34ae8230da1e90fd89ba740ab",
".git/objects/9c/7a9f6994eebfdb881ef22841c468851728fe52": "70d4babe1ad4ebf991494f421a453909",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/4e0717a2aa5ca9181a147b6379ef3f827f5d0d": "7f95882667a3d00fc2cefae265717a32",
".git/objects/a3/fd17924ff77fca9089da9fd21bdadfe21cd6a3": "3f55181d0e5daf8c556f98da8bcf1422",
".git/objects/a3/e2aa536466081400641b37cd8e9158fda6b38e": "372e88dda6e1dab080b8e9dc1a06aa03",
".git/objects/a3/0ff5963eabb49a2d25712fd5db5c301e7b56dd": "9fd61778e2ee5377182cfccc83388041",
".git/objects/b5/96519d8cec4258f58cc6f6778480be9a34b713": "320f3a7d6565ca1b1ae6027f56568cf1",
".git/objects/d9/6e5b639849140e585a67abec396597bc4ebe21": "69eed709924dc4135aa024f5e062930a",
".git/objects/ac/abbd5559a21bb3f18ab94aad5f5ad91cb5351b": "8f429bc365654bd694fd1de2e3065996",
".git/objects/ac/63a8ecf86595b6715e5a4ea84f7ecc1654f924": "263a4bd6bc32b0e2be0f1aab7dcae291",
".git/objects/d7/42b1646c9d9753b208af9942b23ebdd43a0254": "2c30345baae17f3f9b261c5dc436369f",
".git/objects/be/c0852a6a55588f015d3588c64aaee536c3657b": "5131e41e84e419fa7f1d2384ac89dfaa",
".git/objects/be/8560904b3596f69049c58db6efe7a7f04d7ef4": "3ed4dc96515166d47f45fdbd2093976f",
".git/objects/b4/1f355324f44c218042e961e4d4a0cbb4f2510b": "b8a132d1a9a61483364d6fefa80bda6e",
".git/objects/a2/fcd350662804cb1cdbef8892d8e273071680bf": "d3a5de8143f67d9cfb25b42d06200722",
".git/objects/bd/44c0fd59fd224a30e0ac42ccaeb81fabac64f5": "c5f86f84b9097a38ec490c0f93205aa6",
".git/objects/d1/1b549034de804551282414ae5ac9ae89e0c97f": "d4b19703f9e2d35b2087797ba68619cb",
".git/objects/d6/23ae6fbf541121c20aae186fef4b751c3c89c1": "5597fa918931d3041194e1166227e913",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/e5/b9fe4da723625da10c4a4c4f3d9f0830fede42": "ad7366bbde0195b18ef4abdf76a1775f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/2ab60bec03d723065a531558af6184436999b0": "28bd37c0adc166a1161a1db5766676ec",
".git/objects/e5/ed828bcf691167838e4e1983989f546f2cdbe7": "a1f038760149bc847f03ef359f188560",
".git/objects/e5/ec3788240cd10936bd939df57a7cff6ab57d87": "aba47b1c74ce4dd24956d3b044aca68f",
".git/objects/f4/3bb64a743d3028f75b06b94da171d86aba5d15": "bbe25fae75dbee112efbe4892ba3a538",
".git/objects/f3/774adbd21f54ea2db06f65e5a0e0c8e89e7939": "8b8788ba687248ae60811cd3e3c2ed5f",
".git/objects/eb/b046ff62f00174687c8967fcc1a37559037077": "ce3c103b807b1be18db19d7a84c7244e",
".git/objects/eb/55587f952ee4c529c249fe9a96dc9b543e8433": "232ed32393da8d107d1ea827b42e2ca5",
".git/objects/eb/3f54a916a1d4cea489cdb73f2386e4326b0d46": "5b23bc3018d1b3ad49113a560ccfe4e7",
".git/objects/c7/6fbf91493a47bf909c84319b1e4ef0870c4bbd": "01a33365edc8aed51924e34db4a10c6c",
".git/objects/ee/28e6b32c9c5c4e024767f9d5d78fa4a3a82317": "2f0a50b3e04d643fb88365268fa0ad64",
".git/objects/fd/9e3bc6430ee1a760f2575b37620b5992104dd5": "ef00735898d33b7ce10fe4983de44953",
".git/objects/f2/37d2087ba48d49dd48f357bdd067feb3e9b539": "024a5c6aad6dff21ab37a57b3ce00fa6",
".git/objects/f2/6c21287c1c507dd53c7d1d7f77168eb28e7223": "2b828c51eea693c67b31bc736e957695",
".git/objects/e3/e445398135ca26d337911850138775ab5c750e": "513b2c9b3a645c04c152a2f8f82d5713",
".git/objects/cf/10d4b43610d6ac8a34303f6af71ddc9b30440a": "795ac407a633918acd5ba676dee1fbe8",
".git/objects/e4/bcc157e8c8f9a0ee93ac47049eee981c42e235": "d47e70a6e07195665d7fc7d1c67c820b",
".git/objects/ed/e9f1a5d641715bf978d1072035af09fb73c2e1": "cbf40efc1f5b0a0865feeb3608362075",
".git/objects/ed/61a94bd89529aef87d5b360a0968b281d617d5": "9d6771d277e1a6f9720af2ac48d3b4f1",
".git/objects/ed/181dc24187efd1356c033020e752d34f69dc5d": "4af82e47b95c6eb375c0e3a41d31eaad",
".git/objects/c1/53526959ba390b282f844e60005cfe8b8468a2": "c36cc7edd94dfdc65c75ccd60152b340",
".git/objects/c1/8b0c0e6f02fcf8d38e77f86b8764f5e8a41b52": "e17460328baec42f14da85337fa7e25c",
".git/objects/c6/45d4515c5d17eaa47f54d6259fe530cad9f1b8": "9d0ca80c0dfa146c438be5aeaf172d26",
".git/objects/ec/e8252897800c62d6b9b1247459a46b29fd6f92": "b8f0aa13a7e14915b0dc698d49f0f5fc",
".git/objects/ec/016fffb4377fa3339c26143dbe49094b51f5d2": "99eb57297e761106d4f19a64b8dc1e8b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/3dd91cf903b19121d17146c367950593f0ab7e": "d5e1f29a42f4f216a51dbeacdb176d9f",
".git/objects/20/68e8c45cdb1ab8b69684d60664ce8c5a670098": "a66f4d3b8938612cdb8343e24fc48e1c",
".git/objects/27/9a10ae2c1fd4ea8d78a813c98d72ecb397b299": "22b130fc71ff2189d317a83148fae92b",
".git/objects/27/1b8e8cad6a36be19af6f8f99514bc6f8b6e0d2": "4cfa2f9dca2d2b2eaa9be8c1d1d7ebc1",
".git/objects/27/3bc9cc90ea7474b8b2adad4bbd8ec75af2c4c0": "a0f43462e9257913374ac4ab45b958d4",
".git/objects/27/00376420e06bde3214c6696474e6ace01cc68b": "7ff6e551285966058116f5b0a1718c8a",
".git/objects/4b/e38ed6929b9e1730fac986dd4eb6b525269a59": "018e93dd64bec45a7b60c1e6c8941937",
".git/objects/4b/34ae6f2d4458cd7c2b72eb51f2dc0d1cdc1907": "a61818a6e692bc2577d33f74a6d52f01",
".git/objects/7d/00b84829169ad30bdd88992f0032c20edf852a": "1d80a8353679d48d7e686ff61f476c8c",
".git/objects/29/929b8cadb297e08038508929be3490b0af69df": "c8ca46b699d80b64e256dcad4721290a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/45/d5767dcf00120b405abb0118671f194ce1c1d6": "3edf7f24184d4b0abb83f4ba5b1c7987",
".git/objects/73/643fe54e70c0a27958fa1ba7219f4bdd72eb5d": "f6fa92b51b34017a438a8d9d01c79e3b",
".git/objects/73/7edd387dd8ae8dadb383bc283b2ad6d5d18778": "3952582eba43e3167a241c0c10e9aa58",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/2a29a25a1e65acf7a521501d6e1ab6c404e437": "825e693f15d6f3546464cab40b4d5a5a",
".git/objects/74/46cbe6cd56a8eb3ae07fc32a8e5bd3c1cb8610": "7d424df229ca506bff64c85480ab7246",
".git/objects/74/34cc068312e3b325f4644623e61a6a7f72681c": "bddccaf1fd3ca4114c1fadbf0167a5af",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/1b042968476ae228a001ba4bd2101196237bd4": "2b2ce6b225e1e10fe9827a2fea7b4257",
".git/objects/28/69fd0b70e7324101ca218e48eb2c8897cc2404": "04060a9408ecf6e7c6b2b52259c61979",
".git/objects/28/3a83299edc2e914c56b9c4ed051d8682d16c4e": "40d8679036bef41b57cf1ef761a7b8ef",
".git/objects/17/be99b9822867c293c71a0c9e6e8d1c5d296384": "e9eff3fcde9db9cc6f83d7edecdca0e7",
".git/objects/7e/c1953bd3826d909dd1e5486bdda3b0c1dc6838": "5041d7a76dce6b17f9ef6d076d28c46c",
".git/objects/10/a44ca420abe383de378a912a0ad897a443dcdf": "d742bbeb12a1a3e0c5f5935b7b9e530c",
".git/objects/10/f850cf249e06fe1a1b65cc362237e5b247385d": "c52caa6d6b501512cd9998cdf88e1da1",
".git/objects/10/90e0f133c5cbde89a012d14e023ec79daad680": "f775920e9dfeba08d3306080547e1fac",
".git/objects/10/17e10b90c1f17f1c626deccf5ef7ff67470fdc": "51f43bad1f84a0cbef764c1e730952c2",
".git/objects/10/af928afb3a2d0395ab847c589614f5f8e22483": "ea66691332b477792d1111a82c3b9e0e",
".git/objects/19/5bc2d7d8f0b0d74c33911ff68fa416bb7d1d00": "e488b6a89e7f839daabfae8bee3fed0c",
".git/objects/19/8a3f06b95423fed173caa28aee5220c1b628bd": "93adb5d15459ab14f876487845788229",
".git/objects/26/288a501f6eb222965e8a26ff1668873c6f3a1a": "912c3089c91ed2fd414c39249b7edab1",
".git/objects/26/a4c82d00e204de164a0d9a2a1ff1dc19ab56bc": "00270ef6db4484500c0c912e9f5e09da",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/75/76fa80dde70753cd7be832ebf31828f2183645": "24937a8f25ee8fb08110d89aa0f9de59",
".git/objects/75/c1dfd71eb67a0c3e7e592a4c33749106fb887c": "cc737c500e133bb752d60997490d2cce",
".git/objects/86/24cfd61729b19860f0ab82e70c0e53fb36af6b": "0ee78509453a853004f7deb148567d1b",
".git/objects/2f/36775c6ffbe499f4d788dbc59193548a8fa8ea": "ba072b6a62d0dbffd3ee13043d2e1c86",
".git/objects/88/27d2f91d5dacf28d3422c9914808741ca52934": "41e23ff01baafd1c4d6062906acf87dd",
".git/objects/9f/822c9373a5a484b838c3e2680d608823745318": "7f530377d2adc1ca17d7612948ee9b38",
".git/objects/9f/337d98da565c0c338c75332525d16c91f42bc3": "66ba877878759795ca4296052e588707",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/38/89732fc391b9cd6612afe368c269933bfb8d0c": "1e414e089b3fd8e54ff59cf886d6e260",
".git/objects/00/3fc07bf92b815536fb6e46368c361aef54b095": "beabc259dfbd99fc4ddfe76806818669",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/6e/b7e8745e98e833fd559bfdce43e8ae6d70e44c": "8ed65384dd6e8b61801591afbd4e13d4",
".git/objects/09/d7a621d0bd8a2c94ea78c5c2843e772b69c9e6": "18d7676d63de9ba8e6a926e512451528",
".git/objects/5d/05dcacbeb486ba4d4bee62c156babc59bbf8b9": "ec2fd7475d75a8cee82a8eeb6ff55a00",
".git/objects/31/e902938c9b97b2110fc8c3cbf8598a635855c7": "aa20a0b559140f96f8d68f6f16b707ec",
".git/objects/91/2253c70d2f2d2b245957bea32cb6f432be0cfb": "bceda8b1dfd9bf35a4e9389a4937ea5d",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/62/ebc488665af30088fddd80f8efef59ac3b8888": "73e8b7b90dd70803bb94737a2fe3c3c6",
".git/objects/62/18fb95b533f3755e01927e6b3ec1ffd91a353e": "75c3a38fcb9102bbcb7d916a0bdbe3ef",
".git/objects/54/91fba61577a7b75572030ae7681eccf59f765f": "803e6f2ecffd0bbe8c97e55787da94d1",
".git/objects/54/b20494b9e761f639061d215172a5201f233fc1": "7ede32e6abe574e8580ef6ac52f5c056",
".git/objects/98/4a81bea321ea792751522823472b9efdb5800c": "68e5c5ce584824ba931c2eb3a5153b0d",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/8cb904b9f3f3a40ec7ba482801be04b839f55e": "7c3e0e3edf88808e8b452655b9721b3a",
".git/objects/3f/96fa0bf25320d2865798bdf1f95d3c7bc71d4e": "2ae9050f794efc07acc29afe9799e0c7",
".git/objects/30/0730b9b5a05c6b1011dec00ac024c244067e69": "b8104cad0f368800f9d349377869f409",
".git/objects/5e/5340d609620ff27485bd559dd42c5907c6bade": "80860834600f0ca382fb129bc2a89df7",
".git/objects/5b/30e11f5b32d4ad452ed61712174e13f82754a3": "6b08696e62cb01e6824cdcacfd1210dc",
".git/objects/08/955222ca7bc11dcad086dae6b274b7526e35dc": "2d46e89d2848582f0d96651c9656f9ca",
".git/objects/6d/7f81b70bbf115d45636439cf2e7c23eb8da96a": "a7d7ecc078de4124fc0aedf3e042d934",
".git/objects/01/98af21f434e9a2157f10f3100f44864da1c9d2": "80f5b07a3f9c4688f05a127592ca15c7",
".git/objects/06/50d71edf7c9eb1da551dcc0756e8c794f60c52": "4a44cc6ca9c0286467b76d9f298e9e06",
".git/objects/39/d4ef7560a3f9b378c13e8d0104254f9c412826": "b86804147fbac922e55a640e333cfaaa",
".git/objects/39/b939f1bafb63cd82dcef74bb4cfc185d0390f0": "48a4f85809021ee5ca4910233622dc44",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/52/8a7076abcbe6de637d48638006e3e775eaa0d5": "21743f6ca690888bdfb5068f331c178b",
".git/objects/55/0912d71d064388fdb15a3709200a66cb3278e0": "90a58e247d1bdbdf0aa76b82bf3d7a0e",
".git/objects/55/e445429681f0c9c4a5f3dad3c593f49d893f11": "5c4da126065e23f62d030632f477f044",
".git/objects/97/d330c16e55b72edb2b0775150e98a6d0530c89": "9319f5b61ef0e7720331720115f79dd4",
".git/objects/97/afa4c8c18443e33d1ac617409db791fb1e5b43": "bdacfcd43a78a35b82b8eed87644ea1e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/2420421b5a7b7f6c85620174cd4b851c8378f2": "3e7a953f326e29b2501ba41c06e438ec",
".git/objects/0f/e5dd50b4ba450d807c1b65b5002aa214636d7a": "16ce1ccf60b56b64906ae9b2032d71dd",
".git/objects/0f/d902976d9026ddd621b61fb38fec99831806ce": "1aaaeeb8166e27a41342a617576f978e",
".git/objects/90/9acf59bc2828eab370473996e8112ad664d7fd": "1632beb766f9b73ed7ff3b2e090e1d95",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/d3/a50c57ad29ba8d4668cf0406e278c008ea682e": "3c82028359e27a42b6ba410ec6eb4c55",
".git/objects/d3/7f258d3fd19a993f610340edb029727d637050": "faa380383a4baf8c7c0b6fcc317998bd",
".git/objects/d4/6ce07d09eca9c1eb69c1f7353c0c2648c2a23a": "cb9bfd593a203b0a017d2eefe23780dc",
".git/objects/ba/bffeaf1f06358474462fc03d38676c6c4478be": "23cdcc95e79611a19a8166b6609f93a5",
".git/objects/ba/ec5cb0af0b61925ec81335cd8a9ea880a80deb": "363b83ceaad1600897c319f762edd477",
".git/objects/a0/7039d30f49f7809cb023cd1d36000afec7dbb2": "ba8c8b75174654e05233d7819911f03d",
".git/objects/a7/4fec398adc458737890238d95e53354a20ab32": "d436e6c3cd57862c28be1e54c8f25e6f",
".git/objects/a7/582871231a1f86c3440df8bf2170fe83691366": "48912d3041eb279685d1670226317ff4",
".git/objects/b8/87d7ff35abceb711ccdd93f07d101912182163": "5bc1fbe269a1fc2be98272d92931856b",
".git/objects/b1/fa99fb994b1a91e2968888fe226f42c42a66e5": "af2901e4fbe8031881acd7bf8c128462",
".git/objects/b1/cc5ca05bebd8d51aa34db8b72238bee942e803": "c44463298412d51e08c5c4feedbec027",
".git/objects/dd/ec7ed4c7abb50d0ee905986fe21b3a1f07a516": "60fde3579410b03c08f94a743da66f47",
".git/objects/d2/e20b478c920fa390ae6af0a84e809020e6ddb6": "44f26dc853ca41aab35a26be61a338f0",
".git/objects/aa/24caf6860ca1d789c234cd8b564d68323b2d15": "b82daf6ea02b37ea4732af2fec6fda07",
".git/objects/af/ff1bfa23db8393bf686e4909824992ee4a59b0": "8afb21f47f17b98e6fdbcc0cd852fbf4",
".git/objects/b7/8df48d481725139c69d258482d064b00f2bda6": "4f9b28cbd58b9c43b64101c5c99f694b",
".git/objects/db/bc29727ac1345375bb123da05e5b4c26c0b6a6": "397b5e2f4a7e522c9d774cfd3b2da2e7",
".git/objects/a8/81c52a5b5b90f0fac60da906ad23f4c37121da": "8b0ba8135c581ffd30f8dc98dc67de93",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/7da0d0c9abc8ac7ae326e61a379acb589d9b72": "d0daac863507feeea06aa6d9dd8e8fa8",
".git/objects/de/114fe626601ef4648a816b725d08f7bb4e42e5": "dfdea387782a66ca0eca58be94386928",
".git/objects/de/5a4b4be42c5dbafba08beb888548d97c4907ec": "348fd97faeb8d9739fc21267ada262b6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/3a60477889d44e5d84318dbed666e68bc17d0c": "afab8265f7822631195e518f96f11a8f",
".git/objects/ef/36f3f92e305f76ba5cd80cf9536b0b8b00d2ba": "82d9cf8d36f0b54b32dd8f3c111a189b",
".git/objects/c4/35417cf23e79b5513c2023e3da07a3646f6d29": "91877c232a4980dd4bddd848ba8bad7f",
".git/objects/ea/2e1b9e4861c580165b31f2ef57deeecf8aeda7": "26508bf813b18c304ba7c5b8ee429402",
".git/objects/e1/50d10241a5e4650e3d4144469132388e6f7d68": "2eae140c055913bb066a1a5160c796d4",
".git/objects/cd/b616cbff7371164392751fa5a92646032bfc22": "82f4a6a665cdb4490ffc407a5e0c2ef3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/05fe9481a7302af3fd0c54c799b26b04f70953": "5e55498726ecc70017470ddb732fd6e4",
".git/objects/f9/650890e845c359fd3e3e801469d1a213a72215": "d304ff018405e4f7be9d6d9065aeefb7",
".git/objects/f7/6926b900fcaa6d7f60849fb8ea3b5dc36af467": "034e7ae2f251636f4da5d52e29b53526",
".git/objects/f7/1a81461ad95801c9cbd1c5766c2771924b8563": "291830bd616f97171717f47df34cd6e8",
".git/objects/e8/a12711c5446ee7241d1bf372fee922ef0afc19": "f22db5eac0a620e2897f13e0001a5d83",
".git/objects/c5/00853b497d3a7333df237734ec35b476f232d9": "38f8afe8a166066861031bb0f45d0c3e",
".git/objects/c5/59fcff82819896ea25d7eee979b206c127b9b7": "46cccda6803de2f5924ac703c8f29375",
".git/objects/c2/fddd94034678f9c61da91b551a61e4ec3f622f": "39700b24b5e9c7b62d963be89ac0ef2d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/9823d6957fd1b4aa76e86c54403e3665534719": "5a16c2c3da978fe2e32f15f6bf41744a",
".git/objects/e9/68a37b6abf59a3c494b2b2c27ad90db5260622": "aee24cac38164a76f2bfd5cad3e8c3b6",
".git/objects/f1/06929ecc48aa6819709d30273c7421039af7bb": "38b91a40aee1dd10186a43eb10acf00a",
".git/objects/e7/8e7628eb4b6f21d125b7e797ceae9b4b76939a": "2fa8e0313137f094f2258c21b37d18c1",
".git/objects/e7/2ae78b49b0da0bede258739400132186d7d0aa": "b1747735779d0b5e8225dff7364ea4ed",
".git/objects/e7/670b22d1d5cc472bf37aa4be90d5a569d7e174": "45801397b5f5d12229c94cbbefaaac88",
".git/objects/cb/1cb0812847e3928f4111e34c4fa9e9577e5354": "b7cf867eb6bcc43ce17155923e37b1a9",
".git/objects/f8/560a4b4d614073ae3adbc37b16b9253772a695": "2a0ccf0f32b0d96e91b0539bf91dbf62",
".git/objects/ce/2f41d3713bfef844d741727a904f99de06d44d": "128bba10db172203ea5a4500fa0e2249",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2c/2f7f41d5e783a15d024d26e68aabef4bcaab11": "bcab05a57e3eb386cc5d095e8c50042f",
".git/objects/2c/970341062b1680d7b5524abba32115684ece22": "c44c568d1a0480f7023d032d213ad9c4",
".git/objects/79/40f3c7db884750c80b29a286c1edec394b786e": "eb5d3edf0afe3bfc9a2f228153c14c42",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/6a53f1b3ea72a7a517f3d3d8f0c8c5fe849b12": "3f8f83b18a1c44d860f03bc54fdf4f8d",
".git/objects/2d/7f78ab78a060d36217a5f5aaadb648949f9a2a": "f57afb91d9410695a6033a6a7cf80fbe",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/e019d5913f7ac08251244f7a995f517130d014": "1bad8c5d99c21599e7d00a81530fcd96",
".git/objects/2d/a5f9d1e446b7feee0bfdd4862312180ec31fa0": "3a2e3b78eb716da806e90615068bdacb",
".git/objects/2d/547ef9267b782a71fd5476d13d50eb63b9f616": "0424881ad7fc3ac717359e20ec814184",
".git/objects/41/5a288db23079920a94c5201ddb9b0add55e956": "884e91429bfd49e58e671fbfe042873b",
".git/objects/41/022eb47a06f641976ecd881bb9607e5253a501": "c2b16339b6ba8a08e6044bb27b1fea86",
".git/objects/41/5a8fb9155cb5c84d36661e819aea5fca2de784": "2bd11bd1e15a80ac869f297270c8d1f5",
".git/objects/77/f8b9c8ca6ec77ee4e3d4916b4fe2fda96c45cd": "558df6fc8b6419b7442876e8dea6bd97",
".git/objects/70/acf428c62f462ebe11954af913bd05d6a7fbd2": "f67565a2516a13a257fcde944d085936",
".git/objects/1e/f51dfe34050c61fa4dea76fad2252190024290": "ca0daf801c9806372c4e55e95b463a9e",
".git/objects/84/152b32b6da673f409590d1edd3e75524ef1da0": "9e7453a37489fe054672ff6fc9413d3e",
".git/objects/4a/650a64f040fe30ba6585aaa2c238d657735dee": "76fbe2c4c7c88fdc874a4bf2272c7ed7",
".git/objects/4a/e3e7aaf596fe32b19c10af1467e9100813fdeb": "1ffd15c7777e82132350d1fa095b3941",
".git/objects/24/d82a514898cf65becce10db262a9a9934fa865": "35121b07b3420d7a04bcb1840a051450",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/09d44d10e75e78624c780fd0f0d8564100d5cc": "b32003a93213c09e579cd3a3cd3715b9",
".git/objects/8d/b19892b077074ed8060a4894332af8542c718b": "808b73c8c172f2e0563a6261d0b2e430",
".git/objects/8d/6fbb33e380b402e243d3c798b186bf24fc70c3": "cda3b6c944c4dba34cd67bd1f168be42",
".git/objects/8c/b0b758583a4d76095e66bcf6c20dddeda0627d": "30069e92642ed1d71aeda7aeafb1d57c",
".git/objects/8c/7e76db447bad31fc714321ce2f6ff771814ae3": "436e868b998e75a03143694c953759fa",
".git/objects/8c/c4f4e348499feb6efdd686eea33f8cdb11d4ad": "ac26f9171aff165df3ec867feabbcf8c",
".git/objects/8c/43d53c6472bdcdcda43152cd249ecd8c3df976": "699be6f14f7b38d72bc083bb89484e88",
".git/objects/85/583ef91e73743626bfbb153adb796f810b1e97": "8f6dc44e5e6f61d6c8a61b6323e3dfc8",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/c568d79dfefcd6d6cc808fc47734afe8dc3ffc": "23fe9e1a8156e0142baa80cbafd9fd34",
".git/objects/1d/d59eeec1048cb3e61f51f3def6e81d365c5ed3": "cfc3b51e27e8b93577111f3712da6560",
".git/objects/1d/c8f8fe92718cccb229e5a69201b881905ba9cb": "4289c0322db3d299b22b6897c7b2ad75",
".git/objects/71/4fab8e05ae0bbfc48233d2a802e2f797e5119c": "16e2aab007048422841a7009124cf4c0",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/a4fc1d6a617e7bb468d8e24d6bb309df0bb674": "f4df4f64af796e53edb384e55253a700",
".git/objects/76/14c72142c363c3a2976a59ee1cf89b5e39e1df": "1789e9ce914ba6e311ac88c794fa955c",
".git/objects/76/267496061d92f26349eaa4eb8e8238480b4ffb": "4bc6d37ce3a6ef8b3048d28f7a477849",
".git/objects/1c/b7db07b0fbeb21c0b1c867672f3ecfb1ecd548": "78a2a2e0334e2bf8a386e717902e5563",
".git/objects/49/5f26c1694f01b9e5ea2349086884a0d375bae8": "58e3a0f5987e09e2b776c8262fee1990",
".git/objects/49/84396c6276f713d2f4844bd03ae909c7cdffe4": "c745aa0f8e1afea136487cf6eb77dd42",
".git/objects/40/f83cb09f71ea1f148766e7966fe6aed6990cb5": "8393a6d5f53a5ea9f0f2973f677ea2ee",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/6b64abb8c7c14650470409281919bea03cadbb": "bc1ff7b3a4fe7946dfbd475a0124dd65",
".git/objects/47/94f3f01e27b50d1b118e49e77ca370882051a1": "d03255ef3aa714c9d0ce136cfaa416ac",
".git/objects/47/a67634784abb8c1782f7b06498e4bf44b5dfc9": "3854e4bd76a3e79664b32c0e047a8d7c",
".git/objects/8b/3a15ea889db3eaecd505498c7e3973ff13d1c8": "d7dbc6e8cc2e1c54affc02599e4533c1",
".git/objects/7f/d77bb66186157d51631d339279d2a6c97cff56": "4fed7a270bece693c4c27831d4e74dac",
".git/objects/7f/e3fc74f5b27e0472baf468cc27ef33218f9f9a": "02841092c9a034e00c30d0911bb468ec",
".git/objects/7f/c30f95716cf1110905f722e3967b7abc772e5a": "8a9153b31e1d6506acf583612b559620",
".git/objects/7a/54ad28e1cb50f7866f02c872ef1f2eb5208daa": "7e6352734741750ee54c5db1896b695c",
".git/objects/14/b1a93cc0815fe083a56c1bd86444cb0e334ca9": "811fa99cf7bac9e686d3f85cf3843bbe",
".git/objects/22/8f80e528d4f3cd2896c35a3998ce906e7b5488": "82d63cb50881d3659ef5439a32ff1629",
".git/objects/25/26f6b94cad17cb238f434e0ef81c7cd9c5a9ec": "2e61324a8d656f0e9ae1e4ab55170bdc",
".git/objects/25/0e7c598020a1799ae2f53dcd194d399f785d60": "024cf5356f4984b8c4d625db86a975b6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e369fa64f9b5a7aaaf46365db3334f80",
".git/logs/refs/heads/master": "e369fa64f9b5a7aaaf46365db3334f80",
".git/logs/refs/remotes/origin/master": "69afa728ef7d4e3cf4b49d55c0510379",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "cf1a5429a52ec0a30c6959488202f5fb",
".git/refs/remotes/origin/master": "cf1a5429a52ec0a30c6959488202f5fb",
".git/index": "bfc31ceb2ea9b17f6d88f54a1ba9fbbf",
".git/COMMIT_EDITMSG": "3e3d5ef8b42bfe192645e3f63fd61a92",
"assets/AssetManifest.json": "bffd584907213ca806298d6d890cd791",
"assets/NOTICES": "9ceb7a288369e43cb148b775eda18ce6",
"assets/FontManifest.json": "20a84c3e16a1dc3ecd2176a73812b702",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/shaders/ink_sparkle.frag": "02348cabe1a5e6d872f8fc74f9cc12d2",
"assets/assets/images/Arc_greenbg.png": "abfd9a1e053ff0a54abaaf55a64af1b5",
"assets/assets/images/Arc.png": "2e806859bf9406842dcb75afb82c549d",
"assets/assets/font/ApfelGrotezk-Regular.otf": "834c6fa209959452ab642d3509ab1cf3",
"assets/assets/font/ApfelGrotezk-Fett.otf": "a2473bbe08f9b0784ced705c783360e7",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
