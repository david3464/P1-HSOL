function populate() {

	if(quiz.isEnded()) {

		alert("Exam completed");

		showScores();
	}
	else {
		// alert('hello world');
		//show quesiton
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices 
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
};


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + (quiz.questions.length-1);
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your score:" + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
	return score;
	var finscore = document.getElementById("Quiz");
	finscore.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
};


var questions = [
	new Question("为保持及塑造各位员工及公司的专业形象, 以下哪些行为是不正确的？",
		["寿司吧同事都必须穿着公司提供的制服，要保持工作服的清洁",
		"寿司吧同事必须穿上公司提供的统一的制服和帽子，不可用自己的头巾或帽子",
		"客人较少时在寿司吧大声说话和骂人",
		"开工前、上完洗手间或触摸手机后必须用肥皂洗手，以确保卫生"],"客人较少时在寿司吧大声说话和骂人"),

	new Question("如有任何需要的请假要求，需要提前多久通知主管？",
		["两天","24小时","一周","三天"],"一周"),	

	new Question("公司要求各部门同事必须在几点前到达公司?",["9：00","10：00","11：00","12：00"],"11：00"),

	new Question("迟到每一次扣多少钱？（特殊情况除外，需提供明确的证明。）",["$5","$10","$15","$20"],"$5"),

	new Question("无故缺席，扣当天工资的多少倍？",["1","2","3","不扣"],"1"),

	new Question("无故缺席，多少次以上自行辞职？",["1","2","3","4"],"2"),

	new Question("当天请假，扣工资$？（特殊情况例外，需提供明确的证明）",["10","20","25","50"],"50"),

	new Question("以下员工守则，哪一条是不正确的？",
		["同事之间应该互相尊重，以礼相待，不可以以话伤人",
		"不要造成任何人为的浪费（包括食物、燃料、水、电等）俗语说：勤俭如同针挑土，浪费犹如浪淘沙",
		"请勿在公司门前的停车位停车，应把车位留给客人，以方便客人，公司班车和自己员工的车辆请停到公司指定的位置",
		"垃圾必须由前门送出"],"垃圾必须由前门送出"),

	new Question("以下员工守则，哪一条是正确的？",
		["各员工上、下班时请用前门",
		"公司提供工作餐，工作期间也可以吃任何工作餐以外食物",
		"同事买外卖可以不按正常实际操作",
		"进入厨房不用穿防滑鞋，厨师帽以及工作服"],"各员工上、下班时请用前门"),

	new Question("严禁私下做食物给别人吃，违规者需以正餐价的多少% 算回给公司？",["50","60","70","80"],"80"),

	new Question("以下员工守则，哪一条是不正确的？",
		["严禁员工在工作期间喝酒",
		"工作服严禁随意丢弃，各自保管好和清洗干净（制服：押金$100，离职后最后一次拿工资，以及退回已清洗干净的制服时，退回押金）",
		"请用职员专用洗手间，不能用客人的洗手间",
		"在工作时间阅读报纸、杂志以及与公司的工作无关之书籍"],"在工作时间阅读报纸、杂志以及与公司的工作无关之书籍"),

	new Question("以下员工守则，哪一条是不正确的？",
		["严禁私下做食物给别人吃，违规者需以正餐价80% 算回给公司",
		"工作中如需离开厨房（包括工间餐、去卫生间、抽烟），必须将手中工作交接给同事，而且确保没有疏漏，方可离开。",
		"如因为无故离岗，且无工作交接，而影响了工作，不会视为失责处理",
		"上班时请不要玩手机以及带耳机听音乐，如必需要接电话请尽量简短，切忌电话聊天，请把公司电话告诉家人，如有急事可打公司电话联系"],
		"如因为无故离岗，且无工作交接，而影响了工作，不会视为失责处理"),

	new Question("以下员工守则，哪一条是不正确的？",
		["餐厅的所有员工实行打卡记勤制度，工资以打卡为准。上班前，中场吃饭休息都必须打卡",
		"所有员工每两周的出勤天数(包括实际出勤天数和有薪假期天数)，以及迟到、早退、离岗时间都会经由人事部核实，然后上报总公司审核，以及交给财务部作为核发各项工资的依据",
		"迟到、早退、离岗、旷工以及其它违章，按员工守则规定处罚","每周可迟到一次"],
		"每周可迟到一次"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),
	
	// new Question("this is question 3",["a","b","c","d"],"c"),

	// new Question("this is question 3",["a","b","c","d"],"c"),




	new Question("this is question 3",["a","b","c","d"],"c")
];

var questionsQitai = [
	new Question("楼面应注意仪容, 以下哪些行为是不正确的？",
		["男同事穿黑色西褲",
		"穿色彩斑斓五光十色襪子",
		"穿純黑色的鞋（防滑，不要跑鞋，不要高跟鞋）",
		"不要戴過多的首饰"],"穿色彩斑斓五光十色襪子"),

	new Question("楼面应注意仪容, 以下哪些行为是不正确的？",
		["头发必須保持整洁（绑在后面）",
		"上班期間吸煙的同事（抽完请漱口）",
		"在餐室不能咀嚼或嚼口香糖",
		"聚集在餐室大声喧哗及开玩笑"],"聚集在餐室大声喧哗及开玩笑"),	

	new Question("必须准时上班。上、下班和吃饭时需按手印，每漏按一次扣？.",
		["$3","$4","$5","$1"],"$3"),

	new Question("上班必须佩戴名牌。遗失一个，自己付费$10。忘记佩戴，租用一次押金$10加租金$2, 是否正确？",
		["是","不是","不清楚","不用租金"],"是"),

	new Question("上班要戴对讲机，耳机自己保存，下班一定要记得充电以备第二天使用，以上是否正确",
		["是","不是","不清楚","不用租金"],"是"),

	new Question("工作服严禁随意丢弃，各自保管好和清洗干净。",
		["是","不是","不清楚","不用清洗"],"是"),

	new Question("以下员工守则，哪一条是不正确的？",
		["所有楼面、带位、收银都要保持应有的礼貌、面带微笑迎送客人",
		"收银 / 带位必须接听公司电话",
		"订位的必须要记下在电脑或本子里，必须记录客人的资料 （名字，电话，等等）",
		"上班要佩戴对讲机、手机游戏机，耳机自己保存，下班一定要记得充电以备第二天使用"],
		"上班要佩戴对讲机、手机游戏机，耳机自己保存，下班一定要记得充电以备第二天使用"),

	new Question("以下员工守则，哪一条是正确的？",
		["在客人面前必须说日文，不能说中文（更不能讲其他方言），除非客人特别要求。",
		"不准强制性向客人索取小费， 遇到不给小费的客人，保持礼貌，但是给客人脸色看。 ",
		"客人买单后，在客人还没有离开座位的情况下, 把抹布放在客人的桌子上。 ",
		"客人就座时，严禁把托盘放在餐桌上。（要求：托盘不离手）"],
		"客人就座时，严禁把托盘放在餐桌上。（要求：托盘不离手）"),

	new Question("以下员工守则，哪一条是正确的？",
		["将洗碗的车直接推到餐房收碗",
		"负责检查厕所的员工，必须每2小时定时检查并签名，漏签一次扣本日工资",
		"每次打喷嚏时都必须遮掩，并必须马上进入后面洗手，确保卫生。",
		"进入厨房不用穿防滑鞋，厨师帽以及工作服"],"每次打喷嚏时都必须遮掩，并必须马上进入后面洗手，确保卫生。"),

	new Question("严禁私下做食物给别人吃，违规者需以正餐价的多少% 算回给公司？",["50","60","70","80"],"80"),

	new Question("以下员工守则，哪一条是不正确的？",
		["每周负责做卫生的员工，请确保工作区的清洁，（尤其是铁板的周围跟餐台）",
		"所有用具需摆放整齐",
		"必须按时倒垃圾。每周五、六、日必须按照清洁项目表完成每项任务，并逐项检查",
		"在工作时间阅读报纸、杂志以及与公司的工作无关之书籍"],"在工作时间阅读报纸、杂志以及与公司的工作无关之书籍"),

	new Question("以下员工守则，哪一条是不正确的？",
		["客人结账时，要反复检查账单的准确性，确保没有错漏，每张账单由各企台自己完成负责",
		"iPad每次用完后必须收回，自觉性的退回主页，如果iPad的电量低于50%的请立即充电",
		"如因为无故离岗，且无工作交接，而影响了工作，不会视为失责处理",
		"任何时候，脏的碗碟与刀叉都应该分开摆放，以方便洗碗部清洗。脏的餐巾必须扔到垃圾桶"],
		"如因为无故离岗，且无工作交接，而影响了工作，不会视为失责处理"),

	new Question("以下员工守则，哪一条是不正确的？",
		["员工每次用膳完毕，必需把用餐区域清理完毕方可离开，违者罚$5。（罚款将用于为同事买珍珠奶茶",
		"如有事情，请与同事大声呐喊通知",
		"Cashier 必须见到单才能消单，认真核对每张单 （如客人用哪一种付费：VISA, Cash…）如有因忽略而缺钱，将由cashier负责",
		"漏打人头或饮料，将由该桌所属区之企台自行用正价买单"],
		"如有事情，请与同事大声呐喊通知"),

	new Question("以下员工守则，哪一条是不正确的？",
		["必须及时把点餐送到客人面前，以确保每盘食物送到客人面前时仍能保持生食的新鲜度，和熟食的温度。",
		"适当地为客人收盘子 （但必须要收），",
		"上菜时必须告知客人该食物的名称，不会英文就算了",
		"尽量不要让餐盘碰到餐桌而发出声音，上菜时，必须把食物轻放在客人面前，不能把盘子推到客人面前。"],
		"上菜时必须告知客人该食物的名称，不会英文就算了"),

	new Question("this is question 3",["a","b","c","d"],"c")
];



var questionsSushiBar = [
	new Question("以下哪些行为是不正确的？",
		["所有食物必须要新鲜，寿司刺生都是手工做的食物，加上大部分是生食的食材，所以在处理的过程中，都必须加倍小心谨慎。",
		"在拿取食材后，应把寿司柜门可不关，保持食材柜的温度在常温里。",
		"刺身绝对要在冰盘装碟，必须要有灯",
		"切记刺身绝对不可用刚洗出来还热的盘子出餐"],"在拿取食材后，应把寿司柜门可不关，保持食材柜的温度在常温里。"),

	new Question("以下哪些行为是不正确的？",
		["客人点的食物以及数量应如实出给客人",
		"严禁在寿司吧做任何不雅的行为及动作，不能大声说话",
		"吐痰嗽口，放音乐，喝东西请蹲下，接电话请到水吧",
		"个人的食物放砧板上"],"个人的食物放砧板上"),	

	new Question("以下哪些行为是正确的？",
		["摆碟很随意，有时爆卷和变形",
		"寿司吧要时常保持工作台面，地板，水池，微波炉的干净",
		"如果客人有提问，沟通不了的话，干瞪着客人不回应",
		"请随时准备好食材，包括虾、蚧、鸡等，不要等订单，而是要随时准备好出餐的状态，保证以最快的速度完美出餐"],
		"请随时准备好食材，包括虾、蚧、鸡等，不要等订单，而是要随时准备好出餐的状态，保证以最快的速度完美出餐"),

	new Question("以下哪些行为是正确的？",
		["出餐碟沾满水印",
		"不检查材料的新鲜程度",
		"每天清洗SUSHI CASE (2个) ，每1周一次大清洁（整个Sushi bar 以及地板，冰箱。）",
		"正餐以及外买的单没那么重要，可以放着不处理"],
		"每天清洗SUSHI CASE (2个) ，每1周一次大清洁（整个Sushi bar 以及地板，冰箱。）"),

	new Question("工作服严禁随意丢弃，各自保管好和清洗干净。",
		["是","不是","不清楚","不用清洗"],"是"),


	new Question("this is question 3",["a","b","c","d"],"c")
];

var questionsChufang = [
	new Question("以下哪些行为是不正确的？",
		["接送司机会根据已安排的时间，准时到达接送地点",
		"上班时间做私活",
		"在餐房必需要常常保持处于工作状态",
		"11:00am前必须到达公司(特殊情况例外)"],
		"上班时间做私活"),

	new Question("以下哪些行为是不正确的？",
		["所有食物必须要新鲜，寿司刺生都是手工做的食物，加上大部分是生食的食材，所以在处理的过程中，都必须加倍小心谨慎。",
		"在拿取食材后，应把寿司柜门可不关，保持食材柜的温度在常温里。",
		"刺身绝对要在冰盘装碟，必须要有灯",
		"切记刺身绝对不可用刚洗出来还热的盘子出餐"],"在拿取食材后，应把寿司柜门可不关，保持食材柜的温度在常温里。"),

	new Question("以下哪些行为是不正确的？",
		["向主管隐瞒用货量",
		"各岗位所有的备货或解冻食材，包括所有食物必须盖住或用保鲜纸包好",
		"每天必须认真清理干净厨房死角，包括：炉头、冰箱、桌子、毛巾、砧板、刀或用具。并于离开前，请主管或经理查看",
		"下班时间：周一至周和.周日10:00PM, 周五，六11：00pm。请勿早退"],"向主管隐瞒用货量"),	

	new Question("以下哪些行为是正确的？",
		["没有订单时，不用随时接单的准备，坐着歇到有订单。",
		"不检查储存，不准备当天所需的各种材料，材料用完即下班。",
		"所有出品按照每个人自己心里的标准，包括所含材料，以及数量和分量。",
		"到达厨房，首先要把厨房炉火，抽气等打开保证它们是工作状态。"],
		"到达厨房，首先要把厨房炉火，抽气等打开保证它们是工作状态。"),

	new Question("以下哪些行为是不正确的？",
		["油炉师傅必须要分别清楚那类食物要用新油和旧油。",
		"油炉师傅应该要随时掌握寿司吧的情况，不要准备过多的虾蟹。",
		"当同事叫虾蟹或炸蕉跟炸奶时，请及时作出回应，并请在第一时间制作。",
		"摆碟不需要整齐美观，不同种类的炸物一并装碟出餐"],
		"摆碟不需要整齐美观，不同种类的炸物一并装碟出餐"),

	new Question("以下哪些行为是不正确的？",
		["必须每天检查各类材料的新鲜程度，以确保出品质素",
		"必须保持油炉的清洁，出餐碟的干净和遵循摆设标准。",
		"牛仔骨. 三文鱼. 牛扒.  沙爹串都要十成熟",
		"烧炉、铁板要保持干净，每晚收档时都必须做好清洁"],
		"牛仔骨. 三文鱼. 牛扒.  沙爹串都要十成熟"),

	new Question("以下哪些行为是不正确的？",
		["必须每天检查各类材料的新鲜程度，以确保出品质素，每天检查当天所用的酱汁有没有变质",
		"确保份量的标准，出餐要求速度和品质的控制、食物以及数量应如实出给客人",
		"必须清楚各项出品的酱汁和配菜",
		"出餐碟的食物以及数量应如实出给客人就可以，不用管摆设标准"],
		"出餐碟的食物以及数量应如实出给客人就可以，不用管摆设标准"),

	new Question("this is question 3",["a","b","c","d"],"c")
];


var quiz = new Quiz(questions);

populate();