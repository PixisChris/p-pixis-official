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
		'features': '功能特色',
		'fn2': {
			'title': 'Hybrid NAC技術',
			'content': '以最嚴謹的802.1X與ARP Spoofing 混合式阻斷技術，讓內網安房嚴密確實'
		},
		'fn1': {
			'title': '全新人因操作體驗',
			'content': '擁有深色模式、可自訂報表、可自定義儀表板等優質的介面體驗'
		},
		'fn4': {
			'title': '高辨識率IoT控管',
			'content': "整合全球最大IoT物件資料庫與物件辨識引擎，提供最完整精確的IoT辨識控管能力"
		},
		'fn5': {
			'title': '便利的訪客驗證機制',
			'content': "提供訪客以 Web、Line、FB多樣化註冊登入，並可為訪客設備執行符規預檢，彈性訪客時段及追蹤"
		},
		'fn6': {
			'title': '嚴密隔離檢疫政策',
			'content': "除實時符規預檢外，並可透過動態VLAN實踐創新的檢疫隔離區功能，完全阻絕威脅於境外"
		},
		'fn3': {
			'title': '完整記錄稽核',
			'content': '提供多樣化自定義報表與記錄所有終端設備上下限、符規狀況等活動軌跡，完整符合資安法規稽核要求'
		},
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
		},
		'contact': {
			'content-section': {
				'title': '關於 PIXIS',
				'company-name-label': '公司名',
				'company-name': '飛泓科技股份有限公司 PIXIS',
				'capital-label': '資本額',
				'capital': '新台幣 5,000 萬元',
				'patents-label': '相關專利',
				'patents': '(發明)-連網裝置與拓樸圖建立方法<br>(新型)-連網裝置<br>(發明)-網路資源分配伺服器及網路資源分配方法<br>(新型)-網路資源分配伺服器',
				'certs-label': '相關認證',
				'certs': '經濟部資訊安全服務機構能量與資安自主產品認證<br>證號：109-IS-2-52474957-0161',
				'address-label': '地址',
				'address': '105405 台北市 松山區 南京東路三段 275 號 7 樓',
				'email-label': '電子郵件',
			}
		},
		'fn6': {
			'header': {
				'content': '政府組態基準',
				'contact-btn': '與我們聯繫',
			},
			'section-titles': {
				'situation': '問題情境',
				'cause': '常見原因',
				'solution': '解決方案',
			},
			'section1': {
				'desc': '使企業能夠確認符合政府的 GCB 規範',
				'list-items1': '<li>狀況一、當公司內部多台機器及電腦當機無法使用，網管人員察覺內網中的電腦中毒並在區域內互相感染</li><li>狀況二、員工向網管人員反映網速很慢，但原因不明</li><li>狀況三、公司內部設備隱含感染勒索病毒的風險</li>',
				'list-items2': '<li>員工自帶未更新設備進入公司並連上內網</li><li>白名單設備中毒並帶病毒進入內網</li><li>訪客、廠商電腦並未定時、即時更新</li>',
				'list-items3': '<li>可整合 AD、GPO、WSUS、防毒軟體等系統進行應用程式盤點，確保即將進入內網的設備有定時更新及掃毒。 </li><li>將未符合管理者規則之設備暫禁連網，並確保其完整更新後，方能恢復正常網路功能 。</li><li>新的病毒碼發布或是提供更新時，確認公司內部的電腦有即時更新，尤其有資安疑慮的以致於需要強制更新的版本，可依據網管人員提供之病毒碼更新版本，要求使用者符合規定後方可連網。</li>',
			},
			'section2': {
				'desc': "The system can conduct statistics, audit the system’s weaknesses and status of the company, and make statistics into reports",
				'list-items1': "<li>訪客與廠商來訪時需連上內網，手動派發將耗時費力</li><li>重要設備發生 IP 突會導致無法連網使用</li><li>IP 不夠用，無法自動回收</li><li>無法快速知道還未被使用過的 IP</li>",
				'list-items2': "<li>網管人員花費時間手動派發固定 IP 給合法設備，但熟悉網路設定的員工可自行更改 IP 以規避政策，連上公司內部網路</li><li>有陌生設備及員工自帶設備，可能造成重要設備無法使用的風險。</li>",
				'list-items3': "<li>DHCP 自動派發 IP，減少人員工時以及人工不可預期的錯誤</li><li>可整合驗證授權機制自動核發 IP，以達到使用者和連線設備相關資訊透明化，並確保設備的連線能力。</li><li>進階的 DHCP+，幫助管理者直覺、彈性地設定 IP 核發政策，並可視核發對象設定 IP 租期，方便廠商及訪客暫用公司網路，並於期限到時自動回收IP。</li>",
			}
		},
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
		'features': 'Features',
		'fn2': {
			'title': 'Hybrid NAC technology',
			'content': 'With the most rigorous 802.1X and ARP Spoofing hybrid blocking technology, the intranet is secure and reliable'
		},
		'fn1': {
			'title': 'Brand new human-factors experience',
			'content': 'Experience a high-quality interface with dark mode, customizable reports, and customizable dashboards.'
		},
		'fn4': {
			'title': 'High identification rate of IoT control',
			'content': "Integrate the world's largest IoT object database and object recognition engine to provide the most complete and accurate IoT identification and control capabilities"
		},
		'fn5': {
			'title': 'Convenient authentication mechanism for visitors',
			'content': "Provide visitors with diversified registration and login via Web, Line, and FB, and conduct compliance pre-checks for visitors' devices, track visitors’ time and make it flexible"
		},
		'fn6': {
			'title': 'Strict quarantine policy',
			'content': "In addition to real-time compliance pre-check, the innovative quarantine function can be implemented through dynamic VLAN to completely prevent threats from outside"
		},
		'fn3': {
			'title': 'Complete record of examination',
			'content': 'Provide diversified custom reports to record all terminal equipment’s upper and lower limits, compliance status and activity tracks. Fully comply with the audit requirements of the regulations of information security.'
		}
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
		},
		'contact': {
			'content-section': {
				'title': 'About PIXIS',
				'company-name-label': 'Company name',
				'company-name': 'PIXIS Technology Co., Ltd.',
				'capital-label': 'Registered capital',
				'capital': 'NT$ 50,000,000',
				'patents-label': 'Patents',
				'patents': '(發明)-連網裝置與拓樸圖建立方法<br>(新型)-連網裝置<br>(發明)-網路資源分配伺服器及網路資源分配方法<br>(新型)-網路資源分配伺服器',
				'certs-label': 'Certifications',
				'certs': '經濟部資訊安全服務機構能量與資安自主產品認證<br>證號：109-IS-2-52474957-0161',
				'address-label': 'Address',
				'address': 'No. 275, Sec. 3, Nanjing E. Rd., Songshan Dist., Taipei City 105405, Taiwan (R.O.C.)',
				'email-label': 'E-mail',
			}
		},
		'fn6': {
			'header': {
				'content': 'Government Configuration Baseline(GCB)',
				'contact-btn': 'Contact us',
			},
			'section-titles': {
				'situation':'Situations',
				'cause':'Common causes',
				'solution':'Solutions',
			},
			'section1': {
				'desc': "Enable companies to confirm compliance with the government's GCB regulations",
				'list-items1': "<li>Situation One: When multiple machines and computers in the company are unavailable, and the MIS detect that the computers in the intranet got a virus and infect each other in the area</li><li>Employees report to MIS that the internet speed is very slow, but the reason is unknown</li><li>The company's internal equipment has the potential risk of ransomware infection</li>",
				'list-items2': "<li>Employees bring their own unupdated devices into the company and connect to the intranet</li><li>The whitelisted device got a virus and brought the virus into the intranet</li><li>Visitors and manufacturers’ computers aren't updated either regularly or in real time</li>",
				'list-items3': "<li>It can integrate AD, GPO, WSUS, anti-virus software and other systems for application inventory to ensure that devices that are about to enter the intranet get updated and virus scans regularly.</li><li>Ban devices that don’t comply with the administrator’s rules from connecting to the Internet temporarily, and ensure that they are completely updated before resuming normal network functions.</li><li>When a new virus pattern is released or an update is provided, it can confirm that the company’s internal computers have real-time updates.</li>",
			},
			'section2': {
				'desc': "The system can conduct statistics, audit the system’s weaknesses and status of the company, and make statistics into reports",
				'list-items1': "<li>When visitors and manufacturers need to connect to the intranet when visiting, the manual distribution is time-consuming and quite demanding.</li><li>IP abruptness of important equipments will make it impossible to connect to the Internet.</li><li>IP is not enough and cannot be recycled automatically.</li><li>Unable to know the unused IP quickly.</li>",
				'list-items2': "<li>MIS assigns fixed IPs manually to legal devices, but employees who are familiar with network settings can change the IP by themselves to get away with the policy and connect to the company's intranet.</li><li>有陌生設備及員工自帶設備，可能造成重要設備無法使用的風險。</li>",
				'list-items3': "<li>DHCP distributes IP automatically to reduce the working hours of the employees and reduce unpredictable errors.</li><li>It can integrate authentication and authorization mechanism to issue IP automatically and achieve transparency of users and those connected device. It can also ensure the device's connection capability.</li><li>Advanced DHCP+ can help the administrator to set the IP issuance policy straightforwardly and flexibly. They can also set the IP lease period according to the issuance object, which is convenient for manufacturers and visitors to temporarily use the company network, and automatically reclaim the IP when the deadline expires.</li>",
			}
		},
	},
	'footer': {
		'title': "PIXIS covers all walks of life",
		'content': "In addition to dozens of central ministries and local government units in Taiwan, our clients include leading brand of the food and electronics industries, greatest law firms, major manufacturers in the Japanese automobile and electrical industries, and medical institutions at all levels.",
		'address-and-phone': 'PIXIS Technology Co., Ltd.<br>No. 275, Sec. 3, Nanjing E. Rd., Songshan Dist., Taipei City 105405, Taiwan (R.O.C.)<br>(+886) 02-2394-1199',
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
	if (/^zh\b/.test(navigator.language)) {
		window.locale = window.tw
	} else {
		window.locale = window.en
	}
	
	// 有 ?locale 會覆蓋瀏覽器設定，方便 debug
	if (params.get('locale') === 'en') {
		window.locale = window.en
	} else if (params.get('locale') === 'zh') {
		window.locale = window.tw
	}

	// 沒辦法設定 router 先註解掉
	// // 上面先判斷瀏覽器，但以網址為主
	// if (/^\/en\//.test(window.location.pathname)) {
	// 	window.locale = window.en
	// }
}