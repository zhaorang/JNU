/*
 * Jiangnan University Mobile Campus
 * Copyright(c) 1902-2012, Jiangnan University
 * zhaorang@jiangnan.edu.cn
 * 
 * http://dev.jiangnan.edu.cn
 */

//学校概况.简介
Ext.define('JNU.view.Intro',{
    extend: 'Ext.Panel',
    xtype: 'intropanel',
    //requires:[
        //'Ext.TitleBar'
    //],

    config: {
        title: '简介',
        scrollable: true,
        styleHtmlContent: true,
        html: [
            //'<img src="resources/images/sytu.jpg" />',
            //'<h2>江南大学简介</h2>',
            "<p>　　江南大学坐落于太湖之滨的江南名城——江苏省无锡市，是教育部直属、国家“211工程”和“985优势学科创新平台”重点建设高校。在教育部和省市政府的支持下，学校现已建成占地面积3200亩、建筑面积105万平方米，以“生态校园，曲水流觞”为设计理念，设施先进、功能齐全、环境优美的校园。 </p>",
            "<p>　　江南大学享有“轻工高等教育明珠”的美誉，源于1902年创建的三江师范学堂，历经国立中央大学、南京大学等发展时期；1952年由原中央大学、复旦大学、武汉大学、浙江大学、江南大学的有关系科组建南京工学院（现东南大学）食品工业系，1958年该系整建制东迁无锡，建立无锡轻工业学院，1995年更名为无锡轻工大学；2001年1月，经教育部批准，无锡轻工大学、江南学院、无锡教育学院合并组建江南大学；2003年，东华大学无锡校区并入江南大学。历经110年的风雨沧桑和半个多世纪的独立办学，江南大学已建设成为一所规模结构较为合理，教学质量优秀，办学效益显著，教学、科研、服务均得到社会高度评价，在国内外具有一定知名度的综合性大学。</p>", 
            "<p>　　学校学科涵盖理学、工学、农学、医学、文学、法学、经济学、管理学、教育学、艺术学等10大门类。现有全日制在校本科生约2万人、博硕士研究生约6700人。2012年在48个本科专业中招生。</p>", 
            "<p>　　学校拥有轻工技术与工程、食品科学与工程、控制科学与工程、纺织科学与工程等4个博士后流动站，以及5个一级学科博士点、24个一级学科硕士点。拥有1个国家一级重点学科、5个国家二级重点学科、3个“江苏高校优势学科建设工程”立项学科、1个“十二五”江苏省一级重点学科。在教育部学位与研究生教育发展中心公布的2009年全国一级学科评估结果中，江南大学食品科学与工程排名第一，轻工技术与工程并列第一，纺织科学与工程并列第二。在美国ESI全球大学、科研机构国际学术水平及影响评价中，学校工程学、农学和化学等3个学科进入全球大学前1%。食品科学与工程本科专业通过美国IFT国际认证（中国唯一）。</p>", 
            "<p>　　近年来，学校共获得国家级优秀教学成果奖10项、江苏省优秀教学成果奖52项；拥有国家级优秀教学团队3个、江苏省教学名师7人、江苏省优秀教学团队2个；获批教育部特色专业建设点15个、教育部“卓越工程师教育培养计划”试点专业6个、教育部综合改革试点专业4个、江苏省品牌特色专业（建设点）18个；拥有国家级精品课程11门、江苏省精品课程52门、国家级精品教材3部、省级精品教材35部、国家级双语教学示范课程5门；拥有国家级人才培养模式创新实验区4个、国家工程实践教育中心4个、江苏省人才培养模式创新实验基地2个、江苏省实验教学示范中心11个；建有国家“生命科学与技术”人才培养基地。2006年以优秀成绩通过教育部本科教学工作水平评估。近三年来，获得全国优秀博士学位论文3篇。</p>", 
            "<p>　　学校现有专任教师1623名，其中中国工程院院士1名、国家“千人计划”8名、“青年千人计划”2名、长江学者6名、国家杰出青年基金获得者3名、“新世纪百千万人才工程”国家级人选5名、国家有突出贡献的中青年专家3名、教育部新世纪优秀人才支持计划人选48名、高级职称教师比例达61%。拥有部省级及以上教学科研团队15个，教育部、国家外专局“111计划”引智基地3个。由600多名博士生导师、硕士生导师组成的学术带头群体，为科技创新、高层次人才培养奠定了坚实基础。</p>", 
            "<p>　　江南大学是我国轻工、食品、工业生物技术高科技的摇篮与依托单位之一，建有食品领域研究单位中唯一的国家重点实验室、发酵工程领域研究单位中唯一的国家工程实验室等5个国家级科研平台，以及14个部省级科研平台；拥有纸质图书200多万册，数字图书400多万册。“十一五”以来，学校承担并完成了包括国家“973”、“863”、国家重大专项、科技支撑计划、国家自然科学基金等在内的国家、部省级科研项目1666项，共获国家、部省级以上科技奖励253项，其中国家科技进步二等奖8项。2011年，学校科研经费总量达4.03亿元；国际三大检索收录论文共1530篇，其中SCIE623篇、EI767篇、ISTP140篇；申请专利3235项，授权专利1568项，在全国高校中名列前茅。</p>", 
            "<p>　　学校充分发挥学科优势，积极参与国家、地区科技创新和服务体系建设，推进科技成果产业化，与全国30多个城市建立了全面合作关系，在科研开发、技术服务、人才培养等方面为社会经济发展做出了积极贡献。与地方政府合作建立的江南大学国家大学科技园，已成为高科技研究项目的重要孵化基地。</p>", 
            "<p>　　学校注重与社会、企业之间的联系，成立了由海尔集团、茅台集团、青岛啤酒集团、无锡国联等100多家企事业单位加盟的董事会，各学院建有400余家企事业单位参加的二级董事会，促进了产学研的紧密结合。中粮集团、嘉里粮油、希捷公司、中国电信等一批知名企业和荣智权等众多社会名流在学校设立奖学、奖教金。</p>", 
            "<p>　　学校国际交流合作频繁，是教育部批准的首批接受外国留学生和港澳台学生的高校，现有各类留学生650余人，与25个国家和地区的89所高校、机构开展教学科研合作。“十一五”以来，获教育部聘请外籍教师资助项目264项，建有全球首家以饮食文化为主题的孔子学院、全国中外合作办学十强院校“江南大学北美学院”，以及食品营养与纳米技术、食品安全加工等国际联合实验室。每年举办多场国际及双边学术交流活动，已逐步成为食品、工业生物技术、工业设计、轻纺等领域的国际交流中心。</p>", 
            "<p>　　学校秉承“笃学尚行，止于至善”的校训，始终以教育质量为生命线，以培养“高素质创新型专门人才”为目标，形成了“彰显轻工特色，服务国计民生；创新培养模式，造就行业中坚”的办学特色。独立办学以来，已为国家和社会输送了13万余名毕业生，其中多数已成为各行各业的科技精英和领导骨干。学校的办学成果，得到了党和国家领导人的充分肯定。</p>", 
            "<p>　　“十二五”是江南大学全面突破与跨越的战略机遇期，江南大学将按照“质量兴校、人才强校、机制活校、服务名校、文化铸校”的发展方略，凝心聚力、奋勇攀登，为建设成为特色鲜明的高水平大学而努力奋斗！</p>",
        ].join("")
    }
});

