// USAGE
// <span data-i18n='a.b.c'>不需要寫字，一律吃翻譯 object</span>

window.addEventListener('load', () => {
	detectLocale()
	translate()
	enableNavTranslate()
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
		'validations': {
			'required': '請填寫此欄位',
			'email': '這不是有效的電子郵件',
			'invalid': '請檢查此欄位',
		},
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
		'back': '返回總覽'
	},
	'functions': {
		'fn1': {
			'feature1': '符規預檢',
			'feature2': 'DHCP IP 派發',
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
		'fn3': {
			'feature1': 'IT、OT 辨識',
			'feature2': 'IT、OT 控管',
		},
		'fn4': {
			'feature1': '訪客預先申請',
			'feature2': '設備符規檢驗',
			'feature3': '訪客進階驗證',
			'feature4': '訪客登入軌跡',
		},
		'fn5': {
			'feature1': '應用程式盤點',
			'feature2': 'License 盤點',
			'feature3': '設備盤點',
		}
	},
	'pages': {
		'index': {
			'head_title': 'PIXIS',
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
			'head_title': 'PIXIS 白皮書 | 內網管理系統，高效率企業問題',
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
			'head_title': 'PIXIS 聯繫我們 | 內網管理系統，高效率企業問題',
			'form': {
				'title': '歡迎與我們聯絡',
				'first-name': '姓 *',
				'last-name': '名 *',
				'phone': '電話 *',
				'company': '公司 *',
				'email': '工作電子信箱 *',
				'job-title': '職稱 *',
				'employee': '公司規模 *',
				'employee-options': {
					'1': '100人以下',
					'2': '100-500人',
					'3': '500-1000人',
					'4': '1000-2000人',
					'5': '2000人以上',
				},
				'usage': '洽詢用途 *',
				'usage-options': {
					'1': '內部使用測試',
					'2': '產品業務評估',
					'3': '其它用途',
				},
				'website': '網站 *',
				'how': '如何得知 PIXIS',
				'how-options': {
					'1': '社群',
					'2': '同業推薦',
					'3': '展覽',
					'4': '廣告',
				},
				'privacy': '我已閱讀且同意<a class="link" href="#">Cookie政策</a>與<a class="link" href="#">隱私權政策</a>，請知悉我們將會妥善應用您提供的資訊，您可造訪這裡了解更多資料隱私細節。',
				'submit': '送出表單',
			},
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
			},
			'side': {
				'title': '讓系統為你解決企業內網問題',
				'desc': 'PIXIS 飛泓科技藉由開發企業網路管理平台與內網衝突解決方案，協助企業解決最棘手的資安挑戰。不管你的企業規模處於哪個階段：中小型企業、單區企業、跨區企業，我們都提供相對應的解決方案，為你的團隊省下更多時間、IT建構成本與降低團隊勞頓。 '
			}
		},
		'medias': {
			'head_title': 'PIXIS 媒體報導 | 內網管理系統，高效率企業問題',
			'title': '媒體報導',
			'desc': '隨著科技日益進步，病毒與駭客攻擊企業的頻率也頻頻升高，追蹤近況以了解未來可能發生地風險。',
			'article1': {
				'title': 'PIXIS 受 TCA台灣電腦公會 專訪'
			},
			'article2': {
				'title': 'PIXIS 受 TCA台灣電腦公會 專訪'
			},
			'article3': {
				'title': 'Windows 7、TeamViewer、共用密碼、沒防火牆四大安全缺陷，造成美國 淨水廠遭駭'
			},
			'article4': {
				'title': '駭客利用 Drupal 等 32 種軟體漏洞，對 Windows 及類 UNIX 系統發動大規模 挖礦攻擊'
			},
			'article5': {
				'title': 'FBI 警告物聯網裝置遭駭客劫持發動謊報攻擊'
			},
			'article6': {
				'title': 'FBI 警告筆電不應和物聯網裝置共用 Wi-Fi 網路'
			}
		},
		'articles': {
			'head_title': 'PIXIS 資安好文 | 內網管理系統，高效率企業問題',
			'title': '資安好文',
			'desc': 'PIXIS 在業界累積超過 30 年的資安經驗，我們並不因此停下前進地腳步，反之持續發布業界領先的技術文件。',
			'article1': {
				'title': 'IP 及乙太網路管理之探討'
			},
			'article2': {
				'title': '[PIXIS CTO] NAC (Network Access Control) 網路存取控管解決方案'
			},
			'article3': {
				'title': '[PIXIS CTO] NAC (Network Access Control) 網路存取控管解決方案'
			}
		},
		'case': {
			'head_title': 'PIXIS 成功案例 | 內網管理系統，高效率企業問題',
			'title': '成功案例',
			'desc': '我們整理了長期且穩定合作夥伴的個案分析，經過緊密溝通與深入了解，所提出的解決方案往往能夠達到雙贏局面。',
			'article1': {
				'title': '大型企業常疲於多區域、多佔地的網路問題排除，PIXIS 提供了絕佳的解決方案，透過單一平台解決全區問題。'
			},
			'article2': {
				'title': '多個產品串接的同時會耗費大量人力成本，在與企業的合作中，工程師針對重重難題提出解決方案，最終取得了雙贏。'
			},
			'article3': {
				'title': '企業廠區多達數千台 Switch 該如何有效率地辨識裝置以及旗下介接的設備? PIXIS 具備什麼技術解決這類難題？'
			},
			'article4': {
				'title': '許多大型企業依然使用 Excel 進行資安、設備管理，這將大幅提高維安風險， 而 PIXIS 提供了絕佳的解決方案。'
			},
		},
		'fn1': {
			'head_title': 'NAC & IPAM 產品重點功能 | PIXIS',
			'header': {
				'title': 'NAC & IPAM<br>產品重點功能',
				'content': '主打易用性極高的 NAC & IPAM，讓您輕鬆、全面、有效率的管理企業網路 - PIXIS 飛泓科技',
				'contact-btn': '與我們聯繫',
			},
			'section1': {
				'desc': '250,000+ 人受到 PIXIS 系統的保護PIXIS 體驗最有效率的解決方案，一同享受「最安全的」網路環境',
				'list-items1': '<li>狀況一、當公司內部多台機器及電腦當機無法使用，網管人員察覺內網中的電腦中毒並在區域內互相感染</li><li>狀況二、員工向網管人員反映網速很慢，但原因不明</li><li>狀況三、公司內部設備隱含感染勒索病毒的風險</li>',
				'list-items2': '<li>員工自帶未更新設備進入公司並連上內網</li><li>白名單設備中毒並帶病毒進入內網</li><li>訪客、廠商電腦並未定時、即時更新</li>',
				'list-items3': '<li>可整合 AD、GPO、WSUS、防毒軟體等系統進行符規預檢，確保即將進入內網的設備有定時更新及掃毒。 </li><li>將未符合管理者規則之設備暫禁連網，並確保其完整更新後，方能恢復正常網路功能 。</li><li>新的病毒碼發布或是提供更新時，確認公司內部的電腦有即時更新，尤其有資安疑慮的以致於需要強制更新的版本，可依據網管人員提供之病毒碼更新版本，要求使用者符合規定後方可連網。</li>',
			},
			'section2': {
				'list-items1': "<li>訪客與廠商來訪時需連上內網，手動派發將耗時費力</li><li>重要設備發生 IP 突會導致無法連網使用</li><li>IP 不夠用，無法自動回收</li><li>無法快速知道還未被使用過的 IP</li>",
				'list-items2': "<li>網管人員花費時間手動派發固定 IP 給合法設備，但熟悉網路設定的員工可自行更改 IP 以規避政策，連上公司內部網路</li><li>有陌生設備及員工自帶設備，可能造成重要設備無法使用的風險。</li>",
				'list-items3': "<li>DHCP 自動派發 IP，減少人員工時以及人工不可預期的錯誤</li><li>可整合驗證授權機制自動核發 IP，以達到使用者和連線設備相關資訊透明化，並確保設備的連線能力。</li><li>進階的 DHCP+，幫助管理者直覺、彈性地設定 IP 核發政策，並可視核發對象設定 IP 租期，方便廠商及訪客暫用公司網路，並於期限到時自動回收IP。</li>",
			},
			'section3': {
				'list-items1': "<li>重要設備發生狀況時，等到停擺數分鐘後才被人發現</li><li>員工電腦中毒，感染多台設備之後才被發現，而後還花費大量時間尋找原因</li><li>switch 異常關閉，導致其下的設備皆無法使用</li><li>員工無法上網，網管人員發現該設備所處的子網路位置錯誤</li><li>員工電腦中毒亂發封包，導致網速緩慢</li><li>擁有多處外點辦公室或廠房，造成設備難以察找</li><li>各種問題查找困難且費時</li>",
				'list-items2': "<li>網路線亂接導致內部網路封包數量異常或無法上網</li><li>公司員工自行更改 IP 導致衝突，使重要設備離線無法使用</li><li>設備網路線接錯位置、IP 衝突、IP 派發來源錯誤等等設備斷線原因</li>",
				'list-items3': "<li>自動偵測設備的 IP、設備、位置、事件等完整資訊，且可以整合資產管理系統，支援擴充欄位，系統資料一覽無遺。</li><li>偵測串接埠後自動產出拓樸圖，完整畫出管理範圍內結構並標示出各 Port 流量。能掌握每台設備介接的位置，若有設備故障可快速找到該設備位置 </li><li>自動告警重要設備離線、內網封包量異常、IP衝突等事件。若有未納管之設備於內網存在，可於主機列表中第一時間發現，並了解該設備位置</li>",
			},
			'section4': {
				'list-items1': "<li>採購多筆設備 需要一台一台設定 無法批次設定</li><li>不合規、外來的設備在封鎖前對內網中與其相近的設備造成了影響</li><li>員工自帶設備連上內網，難以管制</li>",
				'list-items2': "<li>人工執行設備驗證繁複且困難 </li><li>人工執行員工身分驗證困難且容易有疏漏</li><li>未授權的設備進入內網後才被檢查是否符規</li>",
				'list-items3': "<li>嚴謹的 802.1X NAC （Network Access Control），支援同時驗證設備及使用者身份，有效禁止未授權或員工私帶設備（BYOD）連網。 </li><li>內建 RADIUS、DHCP，輕鬆導入與維護 802.1X。</li><li>入網後依據身份進入不同管理網段，將員工、非員工、未授權的環境完全切開</li><li>網內端點設備合規管理與不合規封鎖</li>"
			},
			'section5': {
				'list-items1': "<li>情境之後，當時的資訊查找困難</li><li>資安稽核報表難以統計</li><li>老闆需要統計報表</li><li>IP 數量不夠，希望知道哪些曾被使用的IP已經沒在使用</li>",
				'list-items2': "<li>使用軌跡沒有統計紀錄、資料</li><li>歷史資料散落各地</li><li>歷史資料沒有備份</li><li>員工離職或更換電腦 電腦設備ip未回收</li>",
				'list-items3': "<li>24 小時完整記錄使用者、終端設備與交換器的使用狀態。 </li><li>自動匯出管理報表，如網路使用者資訊報告、WSUS 更新狀態報告、 下班未關機設備報告等。</li><li>資訊安全事件發生時可於設備上下線紀錄中查詢出發時間有什麼設備上線，有效縮短查找問題的時間</li><li>可於異常事件觸發時第一時間發現並可著手處理，避免異常事件造成內部網路混亂</li>"
			},
		},
		'fn2': {
			'head_title': 'Endpoint Flow 流量分析模組 | PIXIS',
			'header': {
				'title': 'Endpoint Flow<br>流量分析模組',
				'content': '依據使用者電腦所使用的上網或開啟應用程式的流量統計',
				'contact-btn': '與我們聯繫',
			},
			'section1': {
				'desc': "自身直覺的儀表板介面，端點電腦的流量統計前10大排名，顯示分析圖表",
				'list-items1': "<li>發現公司內部多台機器及電腦當機無法使用，後察覺內網中的電腦中毒並在區域內互相感染</li><li>員工向 MIS 反映網速很慢，但原因不明</li><li>公司內部設備隱含感染勒索病毒的風險</li>",
				'list-items2': "<li>員工自帶未更新設備進入公司並連上內網</li><li>原合格設備中毒並帶病毒進入內網</li><li>訪客、廠商電腦並未定時、即時更新</li>",
				'list-items3': "<li>可整合 AD、GPO、WSUS、防毒軟體等系統進行儀表板，確保即將進入內網的設備有定時更新及掃毒。 </li><li>將未符合管理者規則之設備暫禁連網，並確保其完整更新後，方能恢復正常網路功能 。</li><li>新的病毒碼發布或是提供更新時，確認公司內部的電腦有即時更新，尤其有資安疑慮的以致於需要強制更新的版本，可依據網管人員提供之病毒碼更新版本，要求使用者符合規定後方可連網。</li>",
			},
			'section2': {
				'desc': "可依區域、部門、整體公司的流量排名，統計使用者電腦，上傳、下載於特定時間點的最高用量或用量排名",
				'list-items1': "<li>訪客與廠商來訪時需連上內網，手動派發將耗時費力</li><li>重要設備發生 IP 突會導致無法連網使用</li><li>IP 不夠用，無法自動回收</li><li>無法快速知道還未被使用過的 IP</li>",
				'list-items2': "<li>網管人員花費時間手動派發固定 IP 給合法設備，但熟悉網路設定的員工可自行更改 IP 以規避政策，連上公司內部網路</li><li>有陌生設備及員工自帶設備，可能造成重要設備無法使用的風險。</li>",
				'list-items3': "<li>DHCP 自動派發 IP，減少人員工時以及人工不可預期的錯誤</li><li>可整合驗證授權機制自動核發 IP，以達到使用者和連線設備相關資訊透明化，並確保設備的連線能力。</li><li>進階的 DHCP+，幫助管理者直覺、彈性地設定 IP 核發政策，並可視核發對象設定 IP 租期，方便廠商及訪客暫用公司網路，並於期限到時自動回收IP。</li>",
			},
			'section3': {
				'desc': "員工使用內網所使用的應用程式排名，如 FTP 站台、YouTube、Google 等等",
				'list-items1': "<li>重要設備發生狀況時，等到停擺數分鐘後才被人發現</li><li>員工電腦中毒，感染多台設備之後才被發現，而後還花費大量時間尋找原因</li><li>switch 異常關閉，導致其下的設備皆無法使用</li><li>員工無法上網，網管人員發現該設備所處的子網路位置錯誤</li><li>員工電腦中毒亂發封包，導致網速緩慢</li><li>擁有多處外點辦公室或廠房，造成設備難以察找</li><li>各種問題查找困難且費時</li>",
				'list-items2': "<li>網路線亂接導致內部網路封包數量異常或無法上網</li><li>公司員工自行更改 IP 導致衝突，使重要設備離線無法使用</li><li>設備網路線接錯位置、IP 衝突、IP 派發來源錯誤等等設備斷線原因</li>",
				'list-items3': "<li>自動偵測設備的 IP、設備、位置、事件等完整資訊，且可以整合資產管理系統，支援擴充欄位，系統資料一覽無遺。</li><li>偵測串接埠後自動產出拓樸圖，完整畫出管理範圍內結構並標示出各 Port 流量。能掌握每台設備介接的位置，若有設備故障可快速找到該設備位置 </li><li>自動告警重要設備離線、內網封包量異常、IP衝突等事件。若有未納管之設備於內網存在，可於主機列表中第一時間發現，並了解該設備位置</li>",
			},
			'section4': {
				'desc': "可抓到使用者傳送內容給對應 IP 的內容並作流量排名",
				'list-items1': "<li>採購多筆設備 需要一台一台設定 無法批次設定</li><li>不合規、外來的設備在封鎖前對內網中與其相近的設備造成了影響</li><li>員工自帶設備連上內網，難以管制</li>",
				'list-items2': "<li>人工執行設備驗證繁複且困難 </li><li>人工執行員工身分驗證困難且容易有疏漏</li><li>未授權的設備進入內網後才被檢查是否符規</li>",
				'list-items3': "<li>嚴謹的 802.1X NAC （Network Access Control），支援同時驗證設備及使用者身份，有效禁止未授權或員工私帶設備（BYOD）連網。</li><li>內建 RADIUS、DHCP，輕鬆導入與維護 802.1X。</li><li>入網後依據身份進入不同管理網段，將員工、非員工、未授權的環境完全切開</li><li>網內端點設備合規管理與不合規封鎖</li>"
			}
		},
		'fn3': {
			'head_title': 'IoT 物聯辨識模組 | PIXIS',
			'header': {
				'title': 'IoT<br>物聯辨識模組',
				'content': '成功辨識物聯網設備，涵蓋範圍包含讀卡機、監視器、手機、顯示器等等，設備的廠牌、規格、型號皆可辨識，辨識率可達 9 成',
				'contact-btn': '與我們聯繫',
			},
			'section1': {
				'desc': "可查看物聯網相關設備的廠牌、規格、型號，及其對應數量與其IP, MAC 等，並統計成為報表",
				'list-items1': "<li>發現公司內部多台機器及電腦當機無法使用，後察覺內網中的電腦中毒並在區域內互相感染</li><li>員工向 MIS 反映網速很慢，但原因不明</li><li>公司內部設備隱含感染勒索病毒的風險</li>",
				'list-items2': "<li>員工自帶未更新設備進入公司並連上內網</li><li>原合格設備中毒並帶病毒進入內網</li><li>訪客、廠商電腦並未定時、即時更新</li>",
				'list-items3': "<li>可整合 AD、GPO、WSUS、防毒軟體等系統進行IT、OT 辨識，確保即將進入內網的設備有定時更新及掃毒。</li><li>將未符合管理者規則之設備暫禁連網，並確保其完整更新後，方能恢復正常網路功能 。</li><li>新的病毒碼發布或是提供更新時，確認公司內部的電腦有即時更新，尤其有資安疑慮的以致於需要強制更新的版本，可依據網管人員提供之病毒碼更新版本，要求使用者符合規定後方可連網。</li>",
			},
			'section2': {
				'desc': "可依區域、部門、整體公司的流量排名，統計使用者電腦，上傳、下載於特定時間點的最高用量或用量排名",
				'list-items1': "<li>訪客與廠商來訪時需連上內網，手動派發將耗時費力</li><li>重要設備發生 IP 突會導致無法連網使用</li><li>IP 不夠用，無法自動回收</li><li>無法快速知道還未被使用過的 IP</li>",
				'list-items2': "<li>網管人員花費時間手動派發固定 IP 給合法設備，但熟悉網路設定的員工可自行更改 IP 以規避政策，連上公司內部網路</li><li>有陌生設備及員工自帶設備，可能造成重要設備無法使用的風險。</li>",
				'list-items3': "<li>DHCP 自動派發 IP，減少人員工時以及人工不可預期的錯誤</li><li>可整合驗證授權機制自動核發 IP，以達到使用者和連線設備相關資訊透明化，並確保設備的連線能力。</li><li>進階的 DHCP+，幫助管理者直覺、彈性地設定 IP 核發政策，並可視核發對象設定 IP 租期，方便廠商及訪客暫用公司網路，並於期限到時自動回收IP。</li>",
			},
		},
		'fn4': {
			'head_title': 'OTC 訪客驗證模組 | PIXIS',
			'header': {
				'title': 'OTC 訪客驗證模組',
				'content': '針對訪客所攜帶的電腦設備進行該設備的防毒軟體辨識、微軟更新版本更新辨識',
				'contact-btn': '與我們聯繫',
			},
			'section1': {
				'desc': "來拜訪的訪客可事先申請帳號，管理者將提供一組帳號密碼驗證使用，亦可針對該組帳號密碼設定使用期限，以列入控管。",
				'list-items1': "<li>狀況一、當公司內部多台機器及電腦當機無法使用，網管人員察覺內網中的電腦中毒並在區域內互相感染</li><li>狀況二、員工向網管人員反映網速很慢，但原因不明</li><li>狀況三、公司內部設備隱含感染勒索病毒的風險</li>",
				'list-items2': "<li>員工自帶未更新設備進入公司並連上內網</li><li>白名單設備中毒並帶病毒進入內網</li><li>訪客、廠商電腦並未定時、即時更新</li>",
				'list-items3': "<li>可整合 AD、GPO、WSUS、防毒軟體等系統進行訪客預先申請，確保即將進入內網的設備有定時更新及掃毒。 </li><li>將未符合管理者規則之設備暫禁連網，並確保其完整更新後，方能恢復正常網路功能 。</li><li>新的病毒碼發布或是提供更新時，確認公司內部的電腦有即時更新，尤其有資安疑慮的以致於需要強制更新的版本，可依據網管人員提供之病毒碼更新版本，要求使用者符合規定後方可連網。</li>",
			},
			'section2': {
				'desc': "為符合公司政策及資安需求，針對訪客所攜帶的電腦設備進行符規驗證，是否安裝防毒軟體、微軟漏洞更新是否符合公司規範。",
				'list-items1': "<li>訪客與廠商來訪時需連上內網，手動派發將耗時費力</li><li>重要設備發生 IP 突會導致無法連網使用</li><li>IP 不夠用，無法自動回收</li><li>無法快速知道還未被使用過的 IP</li>",
				'list-items2': "<li>網管人員花費時間手動派發固定 IP 給合法設備，但熟悉網路設定的員工可自行更改 IP 以規避政策，連上公司內部網路</li><li>有陌生設備及員工自帶設備，可能造成重要設備無法使用的風險。</li>",
				'list-items3': "<li>DHCP 自動派發 IP，減少人員工時以及人工不可預期的錯誤</li><li>可整合驗證授權機制自動核發 IP，以達到使用者和連線設備相關資訊透明化，並確保設備的連線能力。</li><li>進階的 DHCP+，幫助管理者直覺、彈性地設定 IP 核發政策，並可視核發對象設定 IP 租期，方便廠商及訪客暫用公司網路，並於期限到時自動回收IP。</li>",
			},
			'section3': {
				'desc': "訪客驗證若需符合公司有較嚴格需求，須經由管理者再次確認客戶設備是否攜入，可在管理者後台進行進階驗證。",
				'list-items1': "<li>重要設備發生狀況時，等到停擺數分鐘後才被人發現</li><li>員工電腦中毒，感染多台設備之後才被發現，而後還花費大量時間尋找原因</li><li>switch 異常關閉，導致其下的設備皆無法使用</li><li>員工無法上網，網管人員發現該設備所處的子網路位置錯誤</li><li>員工電腦中毒亂發封包，導致網速緩慢</li><li>擁有多處外點辦公室或廠房，造成設備難以察找</li><li>各種問題查找困難且費時</li>",
				'list-items2': "<li>網路線亂接導致內部網路封包數量異常或無法上網</li><li>公司員工自行更改 IP 導致衝突，使重要設備離線無法使用</li><li>設備網路線接錯位置、IP 衝突、IP 派發來源錯誤等等設備斷線原因</li>",
				'list-items3': "<li>自動偵測設備的 IP、設備、位置、事件等完整資訊，且可以整合資產管理系統，支援擴充欄位，系統資料一覽無遺。</li><li>偵測串接埠後自動產出拓樸圖，完整畫出管理範圍內結構並標示出各 Port 流量。能掌握每台設備介接的位置，若有設備故障可快速找到該設備位置 </li><li>自動告警重要設備離線、內網封包量異常、IP衝突等事件。若有未納管之設備於內網存在，可於主機列表中第一時間發現，並了解該設備位置</li>",
			},
			'section4': {
				'desc': "紀錄訪客登入時間、攜帶設備的數量、何時登出登入等登入軌跡，並記錄成為統計報表",
				'list-items1': "<li>採購多筆設備 需要一台一台設定 無法批次設定</li><li>不合規、外來的設備在封鎖前對內網中與其相近的設備造成了影響</li><li>員工自帶設備連上內網，難以管制</li>",
				'list-items2': "<li>人工執行設備驗證繁複且困難 </li><li>人工執行員工身分驗證困難且容易有疏漏</li><li>未授權的設備進入內網後才被檢查是否符規</li>",
				'list-items3': "<li>嚴謹的 802.1X NAC （Network Access Control），支援同時驗證設備及使用者身份，有效禁止未授權或員工私帶設備（BYOD）連網。 </li><li>內建 RADIUS、DHCP，輕鬆導入與維護 802.1X。</li><li>入網後依據身份進入不同管理網段，將員工、非員工、未授權的環境完全切開</li><li>網內端點設備合規管理與不合規封鎖</li>",
			}
		},
		'fn5': {
			'head_title': 'AMS 資產管理模組 | PIXIS',
			'header': {
				'title': 'AMS<br>資產管理模組',
				'content': '針對訪客所攜帶的電腦設備進行該設備的防毒軟體辨識、微軟更新版本更新辨識',
				'contact-btn': '與我們聯繫',
			},
			'section1': {
				'desc': "系統可自動將使用者安裝的應用程式紀錄成冊，應用程式的版本、型號、安裝時間等資訊統計為報表",
				'list-items1': "<li>狀況一、當公司內部多台機器及電腦當機無法使用，網管人員察覺內網中的電腦中毒並在區域內互相感染</li><li>狀況二、員工向網管人員反映網速很慢，但原因不明</li><li>狀況三、公司內部設備隱含感染勒索病毒的風險</li>",
				'list-items2': "<li>員工自帶未更新設備進入公司並連上內網</li><li>白名單設備中毒並帶病毒進入內網</li><li>訪客、廠商電腦並未定時、即時更新</li>",
				'list-items3': "<li>可整合 AD、GPO、WSUS、防毒軟體等系統進行應用程式盤點，確保即將進入內網的設備有定時更新及掃毒。 </li><li>將未符合管理者規則之設備暫禁連網，並確保其完整更新後，方能恢復正常網路功能 。</li><li>新的病毒碼發布或是提供更新時，確認公司內部的電腦有即時更新，尤其有資安疑慮的以致於需要強制更新的版本，可依據網管人員提供之病毒碼更新版本，要求使用者符合規定後方可連網。</li>",
			},
			'section2': {
				'desc': "系統可自動盤點公司所採購的應用程式的證照、使用的場所、使用的人數、是否非法使用。",
				'list-items1': "<li>訪客與廠商來訪時需連上內網，手動派發將耗時費力</li><li>重要設備發生 IP 突會導致無法連網使用</li><li>IP 不夠用，無法自動回收</li><li>無法快速知道還未被使用過的 IP</li>",
				'list-items2': "<li>網管人員花費時間手動派發固定 IP 給合法設備，但熟悉網路設定的員工可自行更改 IP 以規避政策，連上公司內部網路</li><li>有陌生設備及員工自帶設備，可能造成重要設備無法使用的風險。</li>",
				'list-items3': "<li>DHCP 自動派發 IP，減少人員工時以及人工不可預期的錯誤</li><li>可整合驗證授權機制自動核發 IP，以達到使用者和連線設備相關資訊透明化，並確保設備的連線能力。</li><li>進階的 DHCP+，幫助管理者直覺、彈性地設定 IP 核發政策，並可視核發對象設定 IP 租期，方便廠商及訪客暫用公司網路，並於期限到時自動回收IP。</li>",
			},
			'section3': {
				'desc': "系統可自動盤點公司所採購的硬體設備，確認是否符合規定",
				'list-items1': "<li>重要設備發生狀況時，等到停擺數分鐘後才被人發現</li><li>員工電腦中毒，感染多台設備之後才被發現，而後還花費大量時間尋找原因</li><li>switch 異常關閉，導致其下的設備皆無法使用</li><li>員工無法上網，網管人員發現該設備所處的子網路位置錯誤</li><li>員工電腦中毒亂發封包，導致網速緩慢</li><li>擁有多處外點辦公室或廠房，造成設備難以察找</li><li>各種問題查找困難且費時</li>",
				'list-items2': "<li>網路線亂接導致內部網路封包數量異常或無法上網</li><li>公司員工自行更改 IP 導致衝突，使重要設備離線無法使用</li><li>設備網路線接錯位置、IP 衝突、IP 派發來源錯誤等等設備斷線原因</li>",
				'list-items3': "<li>自動偵測設備的 IP、設備、位置、事件等完整資訊，且可以整合資產管理系統，支援擴充欄位，系統資料一覽無遺。</li><li>偵測串接埠後自動產出拓樸圖，完整畫出管理範圍內結構並標示出各 Port 流量。能掌握每台設備介接的位置，若有設備故障可快速找到該設備位置 </li><li>自動告警重要設備離線、內網封包量異常、IP衝突等事件。若有未納管之設備於內網存在，可於主機列表中第一時間發現，並了解該設備位置</li>",
			},
		},
		'fn6': {
			'head_title': 'Complicane 資安符規模組 | PIXIS',
			'header': {
				'title': 'Complicane 資安符規模組',
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
		'cases': 'Successful Cases',
		'submit': 'Submit',
		'features': 'Features',
		'validations': {
			'required': 'Please fill out this field.',
			'email': "This is not a valid email.",
			'invalid': 'Please check this field.',
		},
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
		},
		'back': 'Back'
	},
	'functions': {
		'fn1': {
			'feature1': 'Compliance Pre-checks',
			'feature2': 'DHCP IP distribution',
			'feature3': 'Real-time monitoring',
			'feature4': 'Usage Control',
			'feature5': 'Record Examination',
		},
		'fn2': {
			'feature1': 'Customizable Dashboards',
			'feature2': 'Endpoint traffic ranking',
			'feature3': 'Application traffics',
			'feature4': 'Destination traffics ranking',
		},
		'fn3': {
			'feature1': 'IT, OT identification',
			'feature2': 'IT, OT control',
		},
		'fn4': {
			'feature1': 'Visitor pre-application',
			'feature2': 'Equipment compliance inspection',
			'feature3': 'Advanced visitor verification',
			'feature4': 'Visitor login trajectory',
		},
		'fn5': {
			'feature1': 'Application inventory',
			'feature2': 'License inventory',
			'feature3': 'Equipments inventory',
		}
	},
	'pages': {
		'index': {
			'head_title': 'PIXIS',
			'section1': {
				'title': 'Six Features of Our Product<br>Professional Listening、Respect and Honor our Customer',
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
			'head_title': 'PIXIS White Paper | Intranet Management System, High-efficiency Enterprise Issues',
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
			'head_title': 'PIXIS Contact Us | Intranet management system, high-efficiency corporate issues',
			'form': {
				'title': 'Contact us',
				'first-name': 'First name *',
				'last-name': 'Last name *',
				'phone': 'Phone *',
				'company': 'Company *',
				'email': 'E-mail *',
				'job-title': 'Job title *',
				'employee': 'Employees *',
				'employee-options': {
					'1': '1 - 100 employees',
					'2': '100 - 500 employees',
					'3': '500 - 1000 employees',
					'4': '1000 - 2000 employees',
					'5': '2000+ employees',
				},
				'usage': 'Usage *',
				'usage-options': {
					'1': 'Internal use',
					'2': 'Business plan',
					'3': 'Other',
				},
				'website': 'Website *',
				'how': 'How do you know PIXIS?',
				'how-options': {
					'1': 'Social media',
					'2': 'Referral',
					'3': 'Exhibition',
					'4': 'Advertisement',
				},
				'privacy': 'I accept the <a class="link" href="#">Cookie Policy</a> and <a class="link" href="#">Privacy Policy</a>. We will properly apply the information you provide. You can visit here for more details.',
				'submit': 'Submit',
			},
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
			},
			'side': {
				'title': 'Let the system solve corporate intranet problems for you',
				'desc': 'PIXIS Feihong Technology helps companies solve the most difficult information security challenges by developing enterprise network management platforms and intranet conflict resolution solutions. No matter what stage your business is in: small and medium-sized enterprises, single-region enterprises, and cross-regional enterprises, we provide corresponding solutions to save your team more time, IT construction costs and reduce team labor.'
			}
		},
		'medias': {
			'head_title': 'PIXIS Media Report | Intranet Management System, High-efficiency Enterprise Issues',
			'title': 'Media reports',
			'desc': 'With the advancement of technology, the frequency of viruses and hackers attacking companies is also increasing. Keep track of recent developments to understand possible risks in the future.',
			'article1': {
				'title': 'PIXIS was interviewed by TCA Taiwan Computer Association'
			},
			'article2': {
				'title': 'PIXIS was interviewed by TCA Taiwan Computer Association'
			},
			'article3': {
				'title': 'Four security flaws in Windows 7, TeamViewer, shared passwords, and no firewalls have caused the US water purification plant to be hacked'
			},
			'article4': {
				'title': 'Hackers use 32 software vulnerabilities such as Drupal to launch large-scale mining attacks on Windows and UNIX-like systems'
			},
			'article5': {
				'title': 'FBI warns IoT devices were hijacked by hackers to launch false reports'
			},
			'article6': {
				'title': 'FBI warns that laptops should not share Wi-Fi networks with IoT devices'
			}
		},
		'articles': {
			'head_title': 'PIXIS Professional Articles | Intranet Management System, High-efficiency Enterprise Issues',
			'title': 'Professional Articles',
			'desc': 'PIXIS has accumulated more than 30 years of information security experience in the industry. We do not stop moving forward because of this. Instead, we continue to publish industry-leading technical documents.',
			'article1': {
				'title': 'Discussion on IP and Ethernet Management'
			},
			'article2': {
				'title': '[PIXIS CTO] NAC (Network Access Control) Network access control solution'
			},
			'article3': {
				'title': '[PIXIS CTO] NAC (Network Access Control) Network access control solution'
			}
		},
		'case': {
			'head_title': 'PIXIS Successful Cases | Intranet management system, high-efficiency enterprise problems',
			'title': 'Successful Cases',
			'desc': 'We have compiled case analysis of long-term and stable partners. After close communication and in-depth understanding, the solutions proposed can often achieve a win-win situation.',
			'article1': {
				'title': 'Large enterprises are often struggling to troubleshoot network problems in multiple areas and areas. PIXIS provides an excellent solution to solve problems in the entire region through a single platform.'
			},
			'article2': {
				'title': 'The serial connection of multiple products will also consume a lot of labor costs. In the cooperation with the enterprise, engineers put forward solutions to numerous problems, and finally achieved a win-win situation.'
			},
			'article3': {
				'title': 'How can thousands of Switches in a corporate factory effectively identify the devices and the devices connected to it? What technology does PIXIS have to solve this type of problem?'
			},
			'article4': {
				'title': 'Many large enterprises still use Excel for information security and equipment management, which will greatly increase security risks, and PIXIS provides an excellent solution.'
			},
		},
		'fn1': {
			'head_title': 'Product features of NAC & IPAM | PIXIS',
			'header': {
				'title': 'Product features of NAC & IPAM',
				'content': 'PIXIS technology features easy-to-use NAC & IPAM, allowing you to manage your corporate network easily, comprehensively and efficiently',
				'contact-btn': 'Contact us',
			},
			'section1': {
				'desc': 'More than 250,000 people are protected by the PIXIS system, meanwhile experience the most efficient solution and enjoy the most secure network environment in PIXIS.',
				'list-items1': "<li>1. When multiple machines and computers in the company are unavailable, and the MIS detect that the computers in the intranet got a virus and infect each other in the area</li><li>2. Employees report to MIS that the internet speed is very slow, but the reason is unknown</li><li>3. The company's internal equipment has the potential risk of ransomware infection</li>",
				'list-items2': "<li>Employees bring their own unupdated devices into the company and connect to the intranet.</li><li>The whitelisted device got a virus and brought the virus into the intranet.</li><li>Visitors and manufacturers’ computers aren't updated either regularly or in real time.</li>",
				'list-items3': "<li>It can integrate AD, GPO, WSUS, anti-virus software and other systems for application inventory to ensure that devices that are about to enter the intranet get updated and virus scans regularly.</li><li>Ban devices that don’t comply with the administrator’s rules from connecting to the Internet temporarily, and ensure that they are completely updated before resuming normal network functions.</li><li>When a new virus pattern is released or an update is provided, it can confirm that the company’s internal computers have real-time updates.</li>",
			},
			'section2': {
				'list-items1': "<li>When visitors and manufacturers need to connect to the intranet when visiting, the manual distribution is time-consuming and quite demanding.</li><li>IP abruptness of important equipments will make it impossible to connect to the Internet.</li><li>IP is not enough and cannot be recycled automatically.</li><li>Unable to know the unused IP quickly.</li>",
				'list-items2': "<li>MIS assigns fixed IPs manually to legal devices, but employees who are familiar with network settings can change the IP by themselves to get away with the policy and connect to the company's intranet.</li><li></li>",
				'list-items3': "<li>DHCP distributes IP automatically to reduce the working hours of the employees and reduce unpredictable errors.</li><li>It can integrate authentication and authorization mechanism to issue IP automatically and achieve transparency of users and those connected device. It can also ensure the device's connection capability.</li><li>Advanced DHCP+ can help the administrator to set the IP issuance policy straightforwardly and flexibly. They can also set the IP lease period according to the issuance object, which is convenient for manufacturers and visitors to temporarily use the company network, and automatically reclaim the IP when the deadline expires.</li>",
			},
			'section3': {
				'list-items1': "<li>There is something wrong with an important equipment, while no one discovered it until it has been shut down.</li><li>An employee’s computer got a virus and was discovered after multiple devices also got virus. And you had to spend lots of time searching for the cause.</li><li>The switch is closed abnormally, causing all the related devices to be unusable.</li><li>The employee cannot access the Internet, and the MIS found that the device is in the wrong subnet location.</li><li>The employee’s computer got a virus and sent data packets randomly, causing a slow internet speed.</li><li>Owning multiple off-site offices or factories, making the equipment difficult to find.</li><li>It’s difficult and time-consuming to find various problems.</li>",
				'list-items2': "<li>The random connection of the network cable leads to an abnormal number of internal network packets or unable to access the Internet.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Wrong location of device network cable, IP conflict, wrong IP distribution source, etc, making the device disconnected.</li>",
				'list-items3': "<li>It can automatically detect the complete information of the device's IP, device, location, event, etc.. We can also integrate the asset management system, support expansion fields, and system data which can be seen clearly.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port. It can grasp the location of each device’s interfacing. If device is out of order, you can quickly find the location of the device.</li><li>It can send automatic warning if important equipment is offline, intranet packet volume is abnormal , or IP conflict. If there is an unmanaged device on the intranet, it can be found in the host table at the first time, and the location of the device can be detected.</li>",
			},
			'section4': {
				'list-items1': "<li>Because there are multiple devices, each device has to be set in order, and batch setting is not possible.</li><li>Non-compliant and external devices has affected the devices close to them on the intranet before they are blocked.</li><li>Employees bring their own equipment to connect to the intranet, which is difficult to control.</li>",
				'list-items2': "<li>Manual device verification is complicated and difficult.</li><li>Employee identity verification manually is difficult and is prone to omissions.</li><li>Unauthorized devices are checked for compliance after entering the intranet.</li>",
				'list-items3': "<li>Strict 802.1X NAC (Network Access Control) supports authentication of device and user identity simultaneously,  which can effectively prohibiting unauthorized or private device (BYOD) from connecting to the Internet.</li><li>Built-in RADIUS, DHCP, easy to import and maintain 802.1X</li><li>After entering the network, the network segments can be managed according to their identities. Thus, the employees, non-employees, and unauthorized environments can be cut off completely.</li><li>Compliance management of endpoint devices in the network and non-compliance blocking.</li>"
			},
			'section5': {
				'list-items1': "<li>It is difficult to find information at the time</li><li>Information security audit reports are difficult to be statisticized.</li><li>The boss needs statistical reports.</li><li>Since IPs are not enough, you want to know which IPs are not in use.</li>",
				'list-items2': "<li>No statistical records or data of the usage tracking.</li><li>Historical data are scattered everywhere.</li><li>No backup of historical data.</li><li>When employees resigned, computers were replaced or IPs were not removed.</li>",
				'list-items3': "<li>24-hour continuous recording the status of users, terminal equipment and switches completely.</li><li>Automatically export management reports, such as information of the network user, status of the WSUS update, or devices that are not turned off after staffs leave, etc.</li><li>When an information security incident occurs, you can check which equipment is online in the records. It can shorten the time to find the problem.</li><li>It can find out abnormal events and dealt with it at the first time to avoid the internal network chaos.</li>"
			},
			'section-titles': {
				'situation':'Situations',
				'cause':'Common causes',
				'solution':'Solutions',
			}
		},
		'fn2': {
			'head_title': 'Endpoint Flow Traffic analysis module | PIXIS',
			'header': {
				'title': 'Endpoint Flow<br>Traffic analysis module',
				'content': "It can perform a traffic statistics based on the user's internet browsing or applications using",
				'contact-btn': 'Contact us',
			},
			'section1': {
				'desc': "The straightforward  dashboard interface can create the top 10 ranking based on the traffic statistics of endpoint computers. It can also display analysis charts.",
				'list-items1': "<li>Situation One: When multiple machines and computers in the company are unavailable, and the MIS detect that the computers in the intranet got a virus and infect each other in the area.</li><li>Employees report to MIS that the internet speed is very slow, but the reason is unknown.</li><li>The company's internal equipment has the potential risk of ransomware infection.</li>",
				'list-items2': "<li>Employees bring their own unupdated devices into the company and connect to the intranet.</li><li>The whitelisted device got a virus and brought the virus into the intranet.</li><li>Visitors and manufacturers’ computers aren't updated either regularly or in real time</li>",
				'list-items3': "<li>It can integrate AD, GPO, WSUS, anti-virus software and other systems for application inventory to ensure that devices that are about to enter the intranet get updated and virus scans regularly.</li><li>Ban devices that don’t comply with the administrator’s rules from connecting to the Internet temporarily, and ensure that they are completely updated before resuming normal network functions.</li><li>When a new virus pattern is released or an update is provided, it can confirm that the company’s internal computers have real-time updates.</li>",
			},
			'section2': {
				'desc': "Statistics of users' computers and the ranking of highest usage can be created according to the traffic rankings of regions, departments, and the overall company.",
				'list-items1': "<li>When visitors and manufacturers need to connect to the intranet when visiting, the manual distribution is time-consuming and quite demanding.</li><li>IP abruptness of important equipments will make it impossible to connect to the Internet.</li><li>IP is not enough and cannot be recycled automatically.</li><li>Unable to know the unused IP quickly.</li>",
				'list-items2': "<li>MIS assigns fixed IPs manually to legal devices, but employees who are familiar with network settings can change the IP by themselves to get away with the policy and connect to the company's intranet.</li><li>When devices are unfamiliar or brought from random employees, it may have the risk of malfunction of important devices.</li>",
				'list-items3': "<li>DHCP distributes IP automatically to reduce the working hours of the employees and reduce unpredictable errors.</li><li>It can integrate authentication and authorization mechanism to issue IP automatically and achieve transparency of users and those connected device. It can also ensure the device's connection capability.</li><li>Advanced DHCP+ can help the administrator to set the IP issuance policy straightforwardly and flexibly. They can also set the IP lease period according to the issuance object, which is convenient for manufacturers and visitors to temporarily use the company network, and automatically reclaim the IP when the deadline expires.</li>",
			},
			'section3': {
				'desc': "It can create a ranking based on the applications employees use on the intranet, such as FTP sites, youtube, Google, etc.",
				'list-items1': "<li>There is something wrong with an important equipment, while no one discovered it until it has been shut down.</li><li>An employee’s computer got a virus and was discovered after multiple devices also got virus. And you had to spend lots of time searching for the cause.</li><li>The switch is closed abnormally, causing all the related devices to be unusable.</li><li>The employee cannot access the Internet, and the MIS found that the device is in the wrong subnet location.</li><li>The employee’s computer got a virus and sent data packets randomly, causing a slow internet speed.</li><li>Owning multiple off-site offices or factories, making the equipment difficult to find.</li><li>It’s difficult and time-consuming to find various problems.</li>",
				'list-items2': "<li>The random connection of the network cable leads to an abnormal number of internal network packets or unable to access the Internet.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Wrong location of device network cable, IP conflict, wrong IP distribution source, etc, making the device disconnected.</li>",
				'list-items3': "<li>It can automatically detect the complete information of the device's IP, device, location, event, etc.. We can also integrate the asset management system, support expansion fields, and system data which can be seen clearly.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port. It can grasp the location of each device’s interfacing. If device is out of order, you can quickly find the location of the device.</li><li>It can send automatic warning if important equipment is offline, intranet packet volume is abnormal , or IP conflict. If there is an unmanaged device on the intranet, it can be found in the host table at the first time, and the location of the device can be detected.</li>",
			},
			'section4': {
				'desc': "It can catch the content sent by the user to the corresponding IP and rank the traffic",
				'list-items1': "<li>Because there are multiple devices, each device has to be set in order, and batch setting is not possible.</li><li>Non-compliant and external devices has affected the devices close to them on the intranet before they are blocked.</li><li>Employees bring their own equipment to connect to the intranet, which is difficult to control.</li>",
				'list-items2': "<li>Manual device verification is complicated and difficult.</li><li>Employee identity verification manually is difficult and is prone to omissions.</li><li>Unauthorized devices are checked for compliance after entering the intranet.</li>",
				'list-items3': "<li>Strict 802.1X NAC (Network Access Control) supports authentication of device and user identity simultaneously,  which can effectively prohibiting unauthorized or private device (BYOD) from connecting to the Internet.</li><li>Built-in RADIUS, DHCP, easy to import and maintain 802.1X</li><li>After entering the network, the network segments can be managed according to their identities. Thus, the employees, non-employees, and unauthorized environments can be cut off completely.</li><li>Compliance management of endpoint devices in the network and non-compliance blocking.</li>"
			}
		},
		'fn3': {
			'head_title': 'IoT identification module | PIXIS',
			'header': {
				'title': 'IoT identification module',
				'content': 'It can identify IoT devices successfully, including card readers, CCTV, mobile phones, monitors, etc. The brand, specification, and model of the device can be identified with 90% identification rate',
				'contact-btn': 'Contact us',
			},
			'section1': {
				'desc': "You can view the brands, specifications, models of IoT-related equipment, their corresponding numbers and their IP, MAC, etc. All of the statistics can be shown in reports.",
				'list-items1': "<li>When multiple machines and computers in the company are unavailable, and the MIS detect that the computers in the intranet got a virus and infect each other in the area.</li><li>Employees report to MIS that the internet speed is very slow, but the reason is unknown.</li><li>The company's internal equipment has the potential risk of ransomware infection.</li>",
				'list-items2': "<li>Employees bring their own unupdated devices into the company and connect to the intranet.</li><li>The whitelisted device got a virus and brought the virus into the intranet.</li><li>Visitors and manufacturers’ computers aren't updated either regularly or in real time</li>",
				'list-items3': "<li>It can integrate AD, GPO, WSUS, anti-virus software and other systems for application inventory to ensure that devices that are about to enter the intranet get updated and virus scans regularly.</li><li>Ban devices that don’t comply with the administrator’s rules from connecting to the Internet temporarily, and ensure that they are completely updated before resuming normal network functions.</li><li>When a new virus pattern is released or an update is provided, it can confirm that the company’s internal computers have real-time updates.</li>",
			},
			'section2': {
				'desc': "Statistics of users' computers and the ranking of highest usage can be created according to the traffic rankings of regions, departments, and the overall company.",
				'list-items1': "<li>When visitors and manufacturers need to connect to the intranet when visiting, the manual distribution is time-consuming and quite demanding.</li><li>IP abruptness of important equipments will make it impossible to connect to the Internet.</li><li>IP is not enough and cannot be recycled automatically.</li><li>Unable to know the unused IP quickly.</li>",
				'list-items2': "<li>MIS assigns fixed IPs manually to legal devices, but employees who are familiar with network settings can change the IP by themselves to get away with the policy and connect to the company's intranet.</li><li>Unfamiliar equipment and employees’ own equipment may cause the risk that important equipment cannot be used.</li>",
				'list-items3': "<li>DHCP distributes IP automatically to reduce the working hours of the employees and reduce unpredictable errors.</li><li>It can integrate authentication and authorization mechanism to issue IP automatically and achieve transparency of users and those connected device. It can also ensure the device's connection capability.</li><li>Advanced DHCP+ can help the administrator to set the IP issuance policy straightforwardly and flexibly. They can also set the IP lease period according to the issuance object, which is convenient for manufacturers and visitors to temporarily use the company network, and automatically reclaim the IP when the deadline expires.</li>",
			},
		},
		'fn4': {
			'head_title': 'OTC visitor verification module | PIXIS',
			'header': {
				'title': 'OTC visitor verification module',
				'content': 'Visitors’ computers should do a compliance verification to see whether anti-virus software is installed, and whether the Microsoft vulnerability updates comply with the specifications.',
				'contact-btn': 'Contact us',
			},
			'section1': {
				'desc': "Visitors who come to visit can apply for an account in advance, and the administrator will provide a set of account passwords for verification. The administrator can also set a time to control.",
				'list-items1': "<li>Situation One: When multiple machines and computers in the company are unavailable, and the MIS detect that the computers in the intranet got a virus and infect each other in the area</li><li>Employees report to MIS that the internet speed is very slow, but the reason is unknown</li><li>The company's internal equipment has the potential risk of ransomware infection</li>",
				'list-items2': "<li>Employees bring their own unupdated devices into the company and connect to the intranet</li><li>The whitelisted device got a virus and brought the virus into the intranet</li><li>Visitors and manufacturers’ computers aren't updated either regularly or in real time</li>",
				'list-items3': "<li>It can integrate AD, GPO, WSUS, anti-virus software and other systems for application inventory to ensure that devices that are about to enter the intranet get updated and virus scans regularly.</li><li>Ban devices that don’t comply with the administrator’s rules from connecting to the Internet temporarily, and ensure that they are completely updated before resuming normal network functions.</li><li>When a new virus pattern is released or an update is provided, it can confirm that the company’s internal computers have real-time updates.</li>",
			},
			'section2': {
				'desc': "To comply with the company’s policies and information security requirements, visitors’ computers should do a compliance verification to see whether anti-virus software is installed, and whether the Microsoft vulnerability updates comply with the specifications.",
				'list-items1': "<li>When visitors and manufacturers need to connect to the intranet when visiting, the manual distribution is time-consuming and quite demanding.</li><li>IP abruptness of important equipments will make it impossible to connect to the Internet.</li><li>IP is not enough and cannot be recycled automatically.</li><li>Unable to know the unused IP quickly.</li>",
				'list-items2': "<li>MIS assigns fixed IPs manually to legal devices, but employees who are familiar with network settings can change the IP by themselves to get away with the policy and connect to the company's intranet.</li><li>When devices are unfamiliar or brought from random employees, it may have the risk of malfunction of important devices.</li>",
				'list-items3': "<li>DHCP distributes IP automatically to reduce the working hours of the employees and reduce unpredictable errors.</li><li>It can integrate authentication and authorization mechanism to issue IP automatically and achieve transparency of users and those connected device. It can also ensure the device's connection capability.</li><li>Advanced DHCP+ can help the administrator to set the IP issuance policy straightforwardly and flexibly. They can also set the IP lease period according to the issuance object, which is convenient for manufacturers and visitors to temporarily use the company network, and automatically reclaim the IP when the deadline expires.</li>",
			},
			'section3': {
				'desc': "If the visitor’s verification needs to meet the stricter requirements of the company, the administrator must reconfirm whether the customer's device is brought in. Advanced verification can be done in the administrator's back end",
				'list-items1': "<li>There is something wrong with an important equipment, while no one discovered it until it has been shut down.</li><li>An employee’s computer got a virus and was discovered after multiple devices also got virus. And you had to spend lots of time searching for the cause.</li><li>The switch is closed abnormally, causing all the related devices to be unusable.</li><li>The employee cannot access the Internet, and the MIS found that the device is in the wrong subnet location.</li><li>The employee’s computer got a virus and sent data packets randomly, causing a slow internet speed.</li><li>Owning multiple off-site offices or factories, making the equipment difficult to find.</li><li>It’s difficult and time-consuming to find various problems.</li>",
				'list-items2': "<li>The random connection of the network cable leads to an abnormal number of internal network packets or unable to access the Internet.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Wrong location of device network cable, IP conflict, wrong IP distribution source, etc, making the device disconnected.</li>",
				'list-items3': "<li>It can automatically detect the complete information of the device's IP, device, location, event, etc.. We can also integrate the asset management system, support expansion fields, and system data which can be seen clearly.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port. It can grasp the location of each device’s interfacing. If device is out of order, you can quickly find the location of the device.</li><li>It can send automatic warning if important equipment is offline, intranet packet volume is abnormal , or IP conflict. If there is an unmanaged device on the intranet, it can be found in the host table at the first time, and the location of the device can be detected.</li>",
			},
			'section4': {
				'desc': "It can record the visitors’ login time, the number of devices, and when they log out and log in. The statistics can also be recorded as reports.",
				'list-items1': "<li>Because there are multiple devices, each device has to be set in order, and batch setting is not possible.</li><li>Non-compliant and external devices has affected the devices close to them on the intranet before they are blocked.</li><li>Employees bring their own equipment to connect to the intranet, which is difficult to control.</li>",
				'list-items2': "<li>Manual device verification is complicated and difficult.</li><li>Employee identity verification manually is difficult and is prone to omissions.</li><li>Unauthorized devices are checked for compliance after entering the intranet.</li>",
				'list-items3': "<li>Strict 802.1X NAC (Network Access Control) supports authentication of device and user identity simultaneously,  which can effectively prohibiting unauthorized or private device (BYOD) from connecting to the Internet.</li><li>Built-in RADIUS, DHCP, easy to import and maintain 802.1X</li><li>After entering the network, the network segments can be managed according to their identities. Thus, the employees, non-employees, and unauthorized environments can be cut off completely.</li><li>Compliance management of endpoint devices in the network and non-compliance blocking.</li>"
			}
		},
		'fn5': {
			'head_title': 'AMS Asset Management Module | PIXIS',
			'header': {
				'title': 'AMS Asset Management Module',
				'content': 'Visitors’ computers should do a compliance verification to see whether anti-virus software is installed, and whether the Microsoft vulnerability updates comply with the specifications.',
				'contact-btn': 'Contact us',
			},
			'section1': {
				'desc': "The system can record the applications installed by the user automatically, and the version, model, installation time and other information of the application can be shown in a report.",
				'list-items1': "<li>Situation One: When multiple machines and computers in the company are unavailable, and the MIS detect that the computers in the intranet got a virus and infect each other in the area</li><li>Employees report to MIS that the internet speed is very slow, but the reason is unknown</li><li>The company's internal equipment has the potential risk of ransomware infection</li>",
				'list-items2': "<li>Employees bring their own unupdated devices into the company and connect to the intranet</li><li>The whitelisted device got a virus and brought the virus into the intranet</li><li>Visitors and manufacturers’ computers aren't updated either regularly or in real time</li>",
				'list-items3': "<li>It can integrate AD, GPO, WSUS, anti-virus software and other systems for application inventory to ensure that devices that are about to enter the intranet get updated and virus scans regularly.</li><li>Ban devices that don’t comply with the administrator’s rules from connecting to the Internet temporarily, and ensure that they are completely updated before resuming normal network functions.</li><li>When a new virus pattern is released or an update is provided, it can confirm that the company’s internal computers have real-time updates.</li>",
			},
			'section2': {
				'desc': "The system can conduct statistics, audit the system’s weaknesses and status of the company, and make statistics into reports",
				'list-items1': "<li>When visitors and manufacturers need to connect to the intranet when visiting, the manual distribution is time-consuming and quite demanding.</li><li>IP abruptness of important equipments will make it impossible to connect to the Internet.</li><li>IP is not enough and cannot be recycled automatically.</li><li>Unable to know the unused IP quickly.</li>",
				'list-items2': "<li>MIS assigns fixed IPs manually to legal devices, but employees who are familiar with network settings can change the IP by themselves to get away with the policy and connect to the company's intranet.</li><li>When devices are unfamiliar or brought from random employees, it may have the risk of malfunction of important devices.</li>",
				'list-items3': "<li>DHCP distributes IP automatically to reduce the working hours of the employees and reduce unpredictable errors.</li><li>It can integrate authentication and authorization mechanism to issue IP automatically and achieve transparency of users and those connected device. It can also ensure the device's connection capability.</li><li>Advanced DHCP+ can help the administrator to set the IP issuance policy straightforwardly and flexibly. They can also set the IP lease period according to the issuance object, which is convenient for manufacturers and visitors to temporarily use the company network, and automatically reclaim the IP when the deadline expires.</li>",
			},
			'section3': {
				'desc': "The system can automatically count the hardware equipment purchased by the company to confirm whether it meets the requirements.",
				'list-items1': "<li>There is something wrong with an important equipment, while no one discovered it until it has been shut down.</li><li>An employee’s computer got a virus and was discovered after multiple devices also got virus. And you had to spend lots of time searching for the cause.</li><li>The switch is closed abnormally, causing all the related devices to be unusable.</li><li>The employee cannot access the Internet, and the MIS found that the device is in the wrong subnet location.</li><li>The employee’s computer got a virus and sent data packets randomly, causing a slow internet speed.</li><li>Owning multiple off-site offices or factories, making the equipment difficult to find.</li><li>It’s difficult and time-consuming to find various problems.</li>",
				'list-items2': "<li>The random connection of the network cable leads to an abnormal number of internal network packets or unable to access the Internet.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Employees change the IP on their own, causing IP conflicting, making important equipment offline and unusable.</li><li>Wrong location of device network cable, IP conflict, wrong IP distribution source, etc, making the device disconnected.</li>",
				'list-items3': "<li>It can automatically detect the complete information of the device's IP, device, location, event, etc.. We can also integrate the asset management system, support expansion fields, and system data which can be seen clearly.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port.</li><li>It can generate a topology map automatically after detecting serial ports, draw a complete structure within the scope of management and mark the flow of each port. It can grasp the location of each device’s interfacing. If device is out of order, you can quickly find the location of the device.</li><li>It can send automatic warning if important equipment is offline, intranet packet volume is abnormal , or IP conflict. If there is an unmanaged device on the intranet, it can be found in the host table at the first time, and the location of the device can be detected.</li>",
			},
		},
		'fn6': {
			'head_title': 'Government Configuration Baseline(GCB) | PIXIS',
			'header': {
				'title': 'Government Configuration<br>Baseline(GCB)',
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
				'list-items2': "<li>MIS assigns fixed IPs manually to legal devices, but employees who are familiar with network settings can change the IP by themselves to get away with the policy and connect to the company's intranet.</li><li>Unfamiliar equipment and employees’ own equipment may cause the risk that important equipment cannot be used.</li>",
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
	document.querySelectorAll(`[data-i18n-show-if=${localStorage.getItem('pixis_lang')}]`).forEach((el) => {
		console.log(el)
		el.hidden = false
	})
	document.querySelectorAll(`[data-i18n-show-if]:not([data-i18n-show-if=${localStorage.getItem('pixis_lang')}])`).forEach((el) => {
		console.log(el)
		el.hidden = true
	})

	document.querySelectorAll('input[required]').forEach((requiredInput) => {
		const requiredMessage = "common.validations.required".split(".").reduce(index, window.locale)
		const emailInvalidMessage = "common.validations.email".split(".").reduce(index, window.locale)
		const generalInvalidMessage = "common.validations.invalid".split(".").reduce(index, window.locale)

		requiredInput.addEventListener("invalid", function (event) {
			console.log(event.target.validity)
			if (event.target.validity.typeMismatch) {
				if (requiredInput.type === 'email') {
		    		event.target.setCustomValidity(emailInvalidMessage);
		    	} else {
		    		event.target.setCustomValidity(generalInvalidMessage);
		    	}
		    } else if (event.target.validity.valueMissing) {
		    	event.target.setCustomValidity(requiredMessage);
		    } else if (!(event.target.validity.valid)) {
		    	console.log(event.target.validity)
		    	event.target.setCustomValidity(generalInvalidMessage);
		  	} else if (event.target.validity.valid) {
		    	event.target.setCustomValidity("");
		  	}
		});

		requiredInput.addEventListener("input", function (event) {
			console.log(event.target.validity)
			event.target.setCustomValidity("");
			if (event.target.validity.typeMismatch) {
				if (requiredInput.type === 'email') {
		    		event.target.setCustomValidity(emailInvalidMessage);
		    	} else {
		    		event.target.setCustomValidity(generalInvalidMessage);
		    	}
		    } else if (event.target.validity.valueMissing) {
		    	event.target.setCustomValidity(requiredMessage);
		    } else if (!(event.target.validity.valid)) {
		    	console.log(event.target.validity)
		    	event.target.setCustomValidity(generalInvalidMessage);
		  	} else if (event.target.validity.valid) {
		    	event.target.setCustomValidity("");
		  	}
		});
	})

	document.querySelectorAll('select[required]').forEach((requiredInput) => {
		const requiredMessage = "common.validations.required".split(".").reduce(index, window.locale)
		const generalInvalidMessage = "common.validations.invalid".split(".").reduce(index, window.locale)

		requiredInput.addEventListener("invalid", function (event) {
		    if (event.target.validity.valueMissing) {
		    	event.target.setCustomValidity(requiredMessage);
		    } else if (!(event.target.validity.valid)) {
		    	console.log(event.target.validity)
		    	event.target.setCustomValidity(generalInvalidMessage);
		  	} else if (event.target.validity.valid) {
		    	event.target.setCustomValidity("");
		  	}
		});

		requiredInput.addEventListener("change", function (event) {
			event.target.setCustomValidity("");
		    if (event.target.validity.valueMissing) {
		    	event.target.setCustomValidity(requiredMessage);
		    } else if (!(event.target.validity.valid)) {
		    	console.log(event.target.validity)
		    	event.target.setCustomValidity(generalInvalidMessage);
		  	} else if (event.target.validity.valid) {
		    	event.target.setCustomValidity("");
		  	}
		});
	})

	if (document.querySelector('#home_video video.pc')) {
		const videoPc = document.querySelector('#home_video video.pc');
		videoPc.querySelectorAll("source").forEach((el) => {
			el.remove()
		})
		const sourcePc = document.createElement('source');
		let urlPc = ""
		if (localStorage.getItem('pixis_lang') === 'tw') {
			urlPc = 'https://storage.googleapis.com/p-pixis-official-temp/videos/desktop-tw.mp4'
		} else {
			urlPc = 'https://storage.googleapis.com/p-pixis-official-temp/videos/desktop-en.mp4'
		}
		sourcePc.setAttribute('src', urlPc);
		sourcePc.setAttribute('type', 'video/mp4');
		videoPc.appendChild(sourcePc);
		setTimeout(() => {
			videoPc.autoplay = true;
			videoPc.loop = true;
			videoPc.load();
		}, 300);
	}

	if (document.querySelector('#home_video video.m')) {
		const videoM = document.querySelector('#home_video video.m');
		videoM.querySelectorAll("source").forEach((el) => {
			el.remove()
		})
		const sourceM = document.createElement('source');
		let urlM = ""
		if (localStorage.getItem('pixis_lang') === 'tw') {
			urlM = 'https://storage.googleapis.com/p-pixis-official-temp/videos/mobile-tw.mp4'
		} else {
			urlM = 'https://storage.googleapis.com/p-pixis-official-temp/videos/mobile-en.mp4'
		}
		sourceM.setAttribute('src', urlM);
		sourceM.setAttribute('type', 'video/mp4');
		videoM.appendChild(sourceM);
		setTimeout(() => {
			videoM.autoplay = true;
			videoM.loop = true;
			videoM.load();
		}, 300);
	}
}

function detectLocale() {
	var params = new URLSearchParams(window.location.search)

	// 根據 localStorage 判斷
	if (localStorage.getItem('pixis_lang')) {
		window.locale = window[localStorage.getItem('pixis_lang')]
		return
	}

	// 根據瀏覽器偏好判斷
	if (/^zh\b/.test(navigator.language)) {
		window.locale = window.tw
		localStorage.setItem('pixis_lang', 'tw')
	} else {
		window.locale = window.en
		localStorage.setItem('pixis_lang', 'en')
	}
	
	// // 有 ?locale 會覆蓋瀏覽器設定，方便 debug
	// if (params.get('locale') === 'en') {
	// 	window.locale = window.en
	// } else if (params.get('locale') === 'zh') {
	// 	window.locale = window.tw
	// }

	// 沒辦法設定 router 先註解掉
	// // 上面先判斷瀏覽器，但以網址為主
	// if (/^\/en\//.test(window.location.pathname)) {
	// 	window.locale = window.en
	// }
}

function _getLangBtnHTML(locale = localStorage.getItem('pixis_lang')) {
	return `<a href="javascript:;" data-lang="tw" class="lang-btn tw ${locale === 'tw' ? 'is-on' : ''}">繁中</a>
					<a href="javascript:;" data-lang="en" class="lang-btn en ${locale === 'en' ? 'is-on' : ''}">EN</a>`
}

function enableNavTranslate() {
	const desktopNavMenu = document.querySelector('#nav .nav-menu')
	const mobileNavMenu = document.querySelector('#nav-mobile .nav-content')
	
	// 塞入桌機版、手機版的語系按鈕 html
	desktopNavMenu.insertAdjacentHTML('beforeend', _getLangBtnHTML())
	mobileNavMenu.insertAdjacentHTML('afterbegin', _getLangBtnHTML())
	
	const langBtns = document.querySelectorAll('.lang-btn')
	langBtns.forEach((el) => {
		el.addEventListener('click', () => {
			// 取語系
			window.locale = window[el.getAttribute('data-lang')]
			// 切換樣式
			langBtns.forEach((el) => el.classList.toggle('is-on'))
			// 儲存
			localStorage.setItem('pixis_lang', el.getAttribute('data-lang'))
			// 翻譯
			translate()
		})
	})
}