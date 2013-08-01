/* 扩展信息 */

var plugins = [

	/* 页面样式扩展 */

	{
		name: 'counternum_font',
		options: [
			'fontname'
		],
		js: 'counternum_font.js',
		earlyload: true
	},
	{
		name: 'font_reset_cn',
		css: 'font_reset_cn.css',
		sync: true
	},
	{
		name: 'translucent_sidebar',
		css: 'translucent_sidebar.css'
	},
	{
		name: 'box_shadows',
		css: 'box_shadows.css'
	},
	{
		name: 'newstyle_trendlist',
		css: 'newstyle_trendlist.css'
	},
	{
		name: 'newstyle_op_icons',
		css: 'newstyle_op_icons.css'
	},
	{
		name: 'logo_remove_beta',
		css: 'logo_remove_beta.css',
		js: 'logo_remove_beta.js',
		sync: true
	},
	{
		name: 'remove_app_recom',
		js: 'remove_app_recom.js',
		css: 'remove_app_recom.css'
	},
	{
		name: 'emoji',
		js: 'emoji.js',
		css: 'emoji.css'
	},

	/* 页面功能性扩展 */

	{
		name: 'expanding_replies',
		options: [
			'number',
			'auto_expand'
		],
		js: 'expanding_replies.js',
		css: 'expanding_replies.css'
	},
	{
		name: 'user_switcher',
		js: 'user_switcher.js',
		css: 'user_switcher.css'
	},
	{
		name: 'float_message',
		options: [
			'notlostfocus',
			'keepmentions'
		],
		js: 'float_message.js',
		css: 'float_message.css'
	},
	{
		name: 'disable_autocomplete',
		options: [
			'sf_autocomplete'
		],
		js: 'disable_autocomplete.js',
		css: 'disable_autocomplete.css'
	},
	{
		name: 'privatemsg_manage',
		js: 'privatemsg_manage.js',
		css: 'privatemsg_manage.css'
	},
	{
		name: 'friend_manage',
		js: 'friend_manage.js',
		css: 'friend_manage.css'
	},
	{
		name: 'advanced_sidebar',
		js: 'advanced_sidebar.js',
		css: 'advanced_sidebar.css'
	},
	{
		name: 'clean_personal_theme',
		js: 'clean_personal_theme.js',
		css: 'clean_personal_theme.css'
	},
	{
		name: 'auto_pager',
		js: 'auto_pager.js'
	},
	{
		name: 'status_manage',
		js: 'status_manage.js',
		css: 'status_manage.css'
	},
	{
		name: 'fav_friends',
		js: 'fav_friends.js',
		css: 'fav_friends.css'
	},
	{
		name: 'unread_statuses',
		options: [
			'auto_show',
			'playsound'
		],
		js: 'unread_statuses.js'
	},
	{
		name: 'repost_self_statuses',
		js: 'repost_self_statuses.js'
	},
	{
		name: 'friendship_check',
		js: 'friendship_check.js'
	},

	/* 其他扩展 */

	{
		name: 'share_to_fanfou',
		type: 'background',
		js: 'share_to_fanfou.js'
	},
	{
		name: 'notification',
		type: 'background',
		options: [
			'updates',
			'mentions',
			'followers',
			'notdisturb',
			'playsound',
			'timeout'
		],
		js: 'notification.js'
	},
	{
		name: 'rating',
		type: 'background',
		js: 'rating.js'
	}

];

/* 历史记录 */

var history = {
	'0.8.3.5': [
		'样式更新',
		'细节更新'
	],
	'0.8.3.0': [
		'修正 "好友关系检查" 插件'
	],
	'0.8.2.9': [
		'新增 "好友关系检查" 插件'
	],
	'0.8.2.8': [
		'修正 "转发自己消息" 插件',
		'更新 Emoji 插件'
	],
	'0.8.2.5': [
		'新增 Emoji 表情选择器',
		'样式更新',
		'细节更新'
	],
	'0.8.1.6': [
		'新增太空饭否版@自动补全功能',
		'修正 Emoji 插件'
	],
	'0.8.1.4': [
		'修正 Emoji 插件'
	],
	'0.8.1.3': [
		'新增 Emoji 表情支持'
	],
	'0.8.1.0': [
		'新增 "统计数字字体样式切换" 插件',
		'修正页码撑大页面的 bug',
		'更新 "侧栏详细统计信息" 插件',
		'细节更新'
	],
	'0.7.5.2': [
		'更新 "侧栏详细统计信息" 插件: 解决偶尔加载失败的问题 (其实这是饭否自身的 bug 导致的!)'
	],
	'0.7.5.0': [
		'更新和添加设置页截图'
	],
	'0.7.4.8': [
		'首次启动显示欢迎提示'
	],
	'0.7.4.7': [
		'新增 "未读消息处理" 插件(详见设置页)',
		'更新 "浮动输入框" 插件',
		'更新 "批量消息处理" 插件',
		'更新 "自动翻页" 插件',
		'新增 "提醒用户评分" 插件',
		'细节更新'
	],
	'0.7.4.0': [
		'bug 修正'
	],
	'0.7.3.6': [
		'修正圣诞帽错位问题', '设置页添加关闭圣诞帽效果功能'
	],
	'0.7.3.4': [
		'2012 圣诞节彩蛋'
	],
	'0.7.3.1': [
		'修正侧栏模块无法折叠的问题'
	],
	'0.7.2.9': [
		'bug 修正',
		'更新 "自动翻页" 插件'
	],
	'0.7.2.7': [
		'细节更新',
		'更新 "浮动输入框" 插件'
	],
	'0.7.1.6': [
		'更新 "屏蔽随机应用推荐和饭否应用广告" 插件',
		'更新设置页'
	],
	'0.7.1.4': [
		'细节更新',
		'更新 "屏蔽随机应用推荐和饭否应用广告" 插件'
	],
	'0.7.0.4': [
		'修正 "展开转发和回复消息" 插件'
	],
	'0.7.0.0': [
		'细节更新',
		'多处 bugs 修正',
		'性能优化'
	],
	'0.6.9.0': [
		'新增 "有爱饭友列表" 插件',
		'多处样式更新和 bugs 修正'
	],
	'0.6.8.2': [
		'修正 "浮动输入框" 插件拖拽图片上传功能',
		'细节更新'
	],
	'0.6.8.0': [
		'修正部分未读消息不显示的问题',
		'修正 "浮动输入框" 插件开启后不能传图的问题',
		'改进加载方式',
		'新增 "消息批量管理" 插件',
		'"侧栏详细统计信息" 插件添加查看背景图片功能',
		'多处样式更新和 bugs 修正'
	],
	'0.6.7.0': [
		'更换插件加载原理, 提升性能',
		'增加向上滚动滚轮后自动点击 "显示新增 X 条新消息"功能',
		'修正 "侧边详细统计信息" 插件',
		'修正更改设置项后不能及时生效的问题',
		'细节更新'
	],
	'0.6.6.3': [
		'优化 "返回顶部" 功能和页面滚动性能',
		'样式更新',
		'更新 "侧栏统计信息" 插件'
	],
	'0.6.6.0': [
		'新增通知插件 (具体功能见设置页)',
		'更新设置页'
	]
};
