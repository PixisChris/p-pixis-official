// USAGE
// <span data-i18n='a.b.c'>不需要寫字，一律吃翻譯 object</span>

window.addEventListener('load', () => {
	detectLocale()
	translate()
})

window.tw = {
	'common': {
		'title': 'pixis',
		'white-paper': '白皮書',
		'articles': "資安好文",
		'contact': '聯繫我們',
		'medias': '媒體報導',
		'products': '產品功能',
		'cases': '成功案例',
		'submit': '提交',
	},
	'functions': {
		'fn1': {
			'feature1': '符規預檢',
			'feature2': 'IP 派發',
			'feature3': '即時監看',
			'feature4': '使用管制',
			'feature5': '紀錄稽核',
		},
		'fn2': {
			'feature1': '儀表板',
			'feature2': '端點流量排名' ,
			'feature3': '應用程式流量',
			'feature4': '目的端流量排名',
		},
	},
	'pages': {
		'index': {
			'section1': {
				'title': '系統6大特色<br>專業傾聽、以客為尊',
				'content': '支援完整NAC功能，禁止陌生設備/非法設備連網。透過802.1X 的機制可規範設備使用的網段範圍',
				'button': '一覽所有功能'
			},
			'section2': {
				'title': '先進的管制技術，有效防衛企業安全',
				'content': '透過 Switch 拓墣圖掌握內網資料狀況，無需手動管理，更不需要擔心資料正確性',
				'button': '企業成功案例'
			},
			'fn1': {
				'title': 'Hybrid NAC技術',
				'content': '以最嚴謹的802.1X與ARP Spoofing 混合式阻斷技術，讓內網安房嚴密確實'
			},
			'fn2': {
				'title': '全新人因操作體驗',
				'content': '擁有深色模式、可自訂報表、可自定義儀表板等優質的介面體驗'
			},
			'fn3': {
				'title': '高辨識率IoT控管',
				'content': "整合全球最大IoT物件資料庫與物件辨識引擎，提供最完整精確的IoT辨識控管能力"
			},
			'fn4': {
				'title': '便利的訪客驗證機制',
				'content': "提供訪客以 Web、Line、FB多樣化註冊登入，並可為訪客設備執行符規預檢，彈性訪客時段及追蹤"
			},
			'fn5': {
				'title': '嚴密隔離檢疫政策',
				'content': "除實時符規預檢外，並可透過動態VLAN實踐創新的檢疫隔離區功能，完全阻絕威脅於境外"
			},
			'fn6': {
				'title': '完整記錄稽核',
				'content': '提供多樣化自定義報表與記錄所有終端設備上下限、符規狀況等活動軌跡，完整符合資安法規稽核要求'
			},
			'section3': {
				'title': '全新人因操作體驗<br>客製專屬於自己的儀表板',
				'content': '提供 Dark Mode、自定義儀表板及流暢的操作體驗',
				'button': '一覽所有功能'
			},
			'section4': {
				'title': '最嚴謹的管制技術<br>802.1X 全方位防衛企業安全',
				'content': '支援完整 NAC 功能，禁止陌生設備 / 非法設備連網。透過 802.1X 的機制可規範設備使用的網段範圍'
			}
		},
		'white-paper': {
			'title-h2': '內容概要',
			'ul': '選擇對的內部網路管理平台對企業而言是個大挑戰，你需要思考到底要投資多少？你需要多厲害的功能？你具備的技術是否足以導入內部網路管理平台了嗎？我們準備了幾項可立即上手的教戰守則幫你快速決策！<br>下載本白皮書您將了解：',
			'li1': '政策多個安全基礎面向',
			'li2': '企業資訊安全的四大考量點',
			'li3': '選擇最適合你的內部網路管理平台必思考的五項重點',
			'form': {
				'title': '免費下載白皮書',
				'first-name': '姓 *',
				'last-name': '名 *',
				'phone': '電話 *',
				'company': '公司 *',
				'email': '工作電子信箱 *',
				'job-title': '職稱 *',
				'privacy': '我已閱讀且同意<a class="link" href="#">Cookie政策</a>與<a class="link" href="#">隱私權政策</a>，請知悉我們將會妥善應用您提供的資訊，您可造訪這裡了解更多資料隱私細節。',
			}
		}
	},
	'footer': {
		'title': 'PIXIS 飛泓科技的<br>服務涵蓋各行各業',
		'content': '除台灣數十個中央部會與地方政府單位外，還有食品業和電子業龍頭、首屈一指的律師事務所、日本汽車業和電機業大廠、各級醫療機構等。面對台灣在地服務之外，也提供馬來西亞政府局處與泰國最高金融單位專業的資安服務。',
		'address-and-phone': '飛泓科技股份有限公司<br>105405 台北市松山區南京東路三段275號<br>(+886) 02-2394-1199',
	}
}

window.en = {
	'common': {
		'title': 'PIXIS',
		'white-paper': 'Technical White Paper',
		'articles': "Articles",
		'contact': 'Contact us',
		'medias': 'Medias',
		'products': 'Products',
		'cases': 'Success Stories',
		'submit': 'Submit',
	},
	'functions': {
		'fn1': {
			'feature1': 'Compliance Pre-checks',
			'feature2': 'IP distribution',
			'feature3': 'Real-time monitoring',
			'feature4': 'Usage Control',
			'feature5': 'Record Examination',
		},
		'fn2': {
			'feature1': 'Customizable Dashboards',
			'feature2': '端點流量排名',
			'feature3': '應用程式流量',
			'feature4': '目的端流量排名',
		},
	},
	'pages': {
		'index': {
			'section1': {
				'title': '6 major features<br>, listening professionally and always be customer-oriented.',
				'content': 'Supports complete NAC function, prohibits unfamiliar devices/illegal devices from connecting to the Internet. Through the 802.1X mechanism, the network segment range used by the device can be regulated.',
				'button': 'View all functions',
			},
			'section2': {
				'title': 'Advanced control technology to effectively protect the corporate’s security.',
				'content': 'Master the intranet data through the Switch network topology graph without manual management, and no need to worry about data accuracy.',
				'button': 'Successful cases'
			},
			'fn1': {
				'title': 'Hybrid NAC technology',
				'content': 'With the most rigorous 802.1X and ARP Spoofing hybrid blocking technology, the intranet is secure and reliable'
			},
			'fn2': {
				'title': 'Brand new human-factors experience',
				'content': 'Experience a high-quality interface with dark mode, customizable reports, and customizable dashboards.'
			},
			'fn3': {
				'title': 'High identification rate of IoT control',
				'content': "Integrate the world's largest IoT object database and object recognition engine to provide the most complete and accurate IoT identification and control capabilities"
			},
			'fn4': {
				'title': 'Convenient authentication mechanism for visitors',
				'content': "Provide visitors with diversified registration and login via Web, Line, and FB, and conduct compliance pre-checks for visitors' devices, track visitors’ time and make it flexible"
			},
			'fn5': {
				'title': 'Strict quarantine policy',
				'content': "In addition to real-time compliance pre-check, the innovative quarantine function can be implemented through dynamic VLAN to completely prevent threats from outside"
			},
			'fn6': {
				'title': 'Complete record of examination',
				'content': 'Provide diversified custom reports to record all terminal equipment’s upper and lower limits, compliance status and activity tracks. Fully comply with the audit requirements of the regulations of information security.'
			},
			'section3': {
				'title': 'Brand new human-factors experience',
				'content': 'Experience a high-quality interface with dark mode, customizable reports, and customizable dashboards.',
				'button': 'View all functions',
			},
			'section4': {
				'title': 'With the most advanced control technology,<br>the intranet is secure and reliable.',
				'content': 'Supports complete NAC function, prohibits unfamiliar devices/illegal devices from connecting to the Internet. Through the 802.1X mechanism, the network segment range used by the device can be regulated.'
			}
		},
		'white-paper': {
			'title-h2': 'Abstract',
			'ul': 'For companies, choosing the right internal network management platform is a big challenge. You have to think about how much to invest in, what advanced features you need, and whether you have enough technology to import the internal network management platform. We have prepared several guides that are easy to follow to help you make quick decisions!<br>By downloading this white paper, you will understand:',
			'li1': 'Multiple security fundamentals of the policy',
			'li2': 'Four major considerations for enterprise information security',
			'li3': 'And five key points to consider when to choose the most suitable internal network management platform for you',
			'form': {
				'title': 'Download the white paper for free',
				'first-name': 'First name *',
				'last-name': 'Last name *',
				'phone': 'Phone *',
				'company': 'Company *',
				'email': 'E-mail *',
				'job-title': 'Job title *',
				'privacy': 'I accept the <a class="link" href="#">Cookie Policy</a> and <a class="link" href="#">Privacy Policy</a>. We will properly apply the information you provide. You can visit here for more details.',
			}
		}
	},
	'footer': {
		'title': "PIXIS covers all walks of life",
		'content': "In addition to dozens of central ministries and local government units in Taiwan, our clients include leading brand of the food and electronics industries, greatest law firms, major manufacturers in the Japanese automobile and electrical industries, and medical institutions at all levels.",
		'address-and-phone': 'PIXIS Technology Co., Ltd.<br>No. 275, Sec. 3, Nanjing E. Rd., Songshan Dist., Taipei City 105405, Taiwan (R.O.C.) <br>(+886) 02-2394-1199',
	}
}

function index(obj,i) {
	if (obj !== undefined) {
		return obj[i]
	}
}

function translate() {
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const i18nDotNotationKey = el.getAttribute('data-i18n')
		if (i18nDotNotationKey) {
			// 將 data-i18n='a.b.c' 拉出 window.locale object 中對應的翻譯文字
			const translation = i18nDotNotationKey.split('.').reduce(index, window.locale)
			if (translation) {
				el.innerHTML = translation
			}
		}
	})
}

function detectLocale() {
	var params = new URLSearchParams(window.location.search)
	// 根據瀏覽器偏好判斷
	// ?locale 只是方便 debug
	if (/^zh\b/.test(navigator.language) || params.get('locale') === 'en') {
		window.locale = window.tw
	} else {
		window.locale = window.en
	}
	// 沒辦法設定 router 先註解掉
	// // 上面先判斷瀏覽器，但以網址為主
	// if (/^\/en\//.test(window.location.pathname)) {
	// 	window.locale = window.en
	// }
}