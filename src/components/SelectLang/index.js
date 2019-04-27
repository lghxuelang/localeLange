import React from 'react';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import classNames from 'classnames';
import { Menu, Icon, Dropdown } from 'antd';

import styles from './index.less';

export default class Header extends React.Component {
	changeLang = ({ key }) => {
		setLocale(key);
	};

	render() {
		const selectedLang = getLocale();
		const locales = [ 'zh-CN', 'en-US' ];
		const languageLabels = {
			'zh-CN': '简体中文',
			'en-US': 'English'
		};
		const languageIcons = {
			'zh-CN': '🇨🇳',
			'en-US': '🇬🇧'
		};
		const langMenu = (
			<Menu className={styles.menu} selectedKeys={[ selectedLang ]} onClick={this.changeLang}>
				{locales.map((locale) => (
					<Menu.Item key={locale}>
						<span role="img" aria-label={languageLabels[locale]}>
							{languageIcons[locale]}
						</span>{' '}
						{languageLabels[locale]}
					</Menu.Item>
				))}
			</Menu>
		);
		return (
			<Dropdown overlay={langMenu} >
				<span className={classNames(styles.dropDown)}>
					切换语言<Icon type="global" title={formatMessage({ id: 'app.hello' })} />
				</span>
			</Dropdown>
		);
	}
}
